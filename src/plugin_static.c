/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *   Mupen64plus-ui-console - plugin.c                                     *
 *   Mupen64Plus homepage: http://code.google.com/p/mupen64plus/           *
 *   Copyright (C) 2014 Jeffrey Quesnelle                                  *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.          *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include "m64p_types.h"
#include "m64p_common.h"
#include "core_interface_static.h"
#include "osal_dynamiclib.h"
#include "osal_files.h"
#include "plugin.h"
#include "main.h"  /* for the debug callback function */
#include "version.h"

/* global variables */
const char *g_PluginDir = NULL;
const char *g_GfxPlugin = NULL;        // pointer to graphics plugin specified at commandline (if any)
const char *g_AudioPlugin = NULL;      // pointer to audio plugin specified at commandline (if any)
const char *g_InputPlugin = NULL;      // pointer to input plugin specified at commandline (if any)
const char *g_RspPlugin = NULL;        // pointer to rsp plugin specified at commandline (if any)

plugin_map_node g_PluginMap[] = {{M64PLUGIN_GFX,   "Video", NULL, "", NULL, 0 },
                                 {M64PLUGIN_AUDIO, "Audio", NULL, "", NULL, 0 },
                                 {M64PLUGIN_INPUT, "Input", NULL, "", NULL, 0 },
                                 {M64PLUGIN_RSP,   "RSP",   NULL, "", NULL, 0 } };

#include "../../mupen64plus-video-rice-web-netplay/src/Video.h"
#include "../../mupen64plus-rsp-hle/src/rsp-hle_static.h"
#include "../../mupen64plus-audio-sdl/src/audio_static.h"
#include "../../mupen64plus-input-sdl/src/input_static.h"

m64p_error SetupGfx()
{
  m64p_error rval;
  m64p_plugin_type PluginType;
  int PluginVersion = 0;
  const char *PluginName = NULL;
  PluginGetVersionVideo(&PluginType, &PluginVersion, NULL, &PluginName, NULL);

  g_PluginMap[0].handle = (m64p_dynlib_handle)PluginType;
  g_PluginMap[0].libname = PluginName;
  g_PluginMap[0].libversion = PluginVersion;

  DebugMessage(M64MSG_INFO, "Using video plugin: %s version %i", PluginName, PluginVersion);

  return M64ERR_SUCCESS;
}

m64p_error SetupRSP()
{
  m64p_error rval;
  m64p_plugin_type PluginType;
  int PluginVersion = 0;
  const char *PluginName = NULL;
  PluginGetVersionRSP(&PluginType, &PluginVersion, NULL, &PluginName, NULL);

  rval = PluginStartupRSP(CoreHandle, g_PluginMap[3].name, DebugCallback);  /* DebugCallback is in main.c */
  if (rval != M64ERR_SUCCESS)
    {
      DebugMessage(M64MSG_ERROR, "Error: %s plugin library failed to start.", g_PluginMap[3].name);
      return rval;
    }

  g_PluginMap[3].handle = (m64p_dynlib_handle)PluginType;
  g_PluginMap[3].libname = PluginName;
  g_PluginMap[3].libversion = PluginVersion;

  DebugMessage(M64MSG_INFO, "Using RSP plugin: %s version %i", PluginName, PluginVersion);

  return M64ERR_SUCCESS;
}

m64p_error SetupAudio()
{
  m64p_error rval;
  m64p_plugin_type PluginType;
  int PluginVersion = 0;
  const char *PluginName = NULL;
  PluginGetVersionAudio(&PluginType, &PluginVersion, NULL, &PluginName, NULL);

  rval = PluginStartupAudio(CoreHandle, g_PluginMap[1].name, DebugCallback);  /* DebugCallback is in main.c */
  if (rval != M64ERR_SUCCESS)
    {
      DebugMessage(M64MSG_ERROR, "Error: %s plugin library failed to start.", g_PluginMap[1].name);
      return rval;
    }

  g_PluginMap[1].handle = (m64p_dynlib_handle)PluginType;
  g_PluginMap[1].libname = PluginName;
  g_PluginMap[1].libversion = PluginVersion;

  DebugMessage(M64MSG_INFO, "Using RSP plugin: %s version %i", PluginName, PluginVersion);

  return M64ERR_SUCCESS;
}

m64p_error SetupInput()
{
  m64p_error rval;
  m64p_plugin_type PluginType;
  int PluginVersion = 0;
  const char *PluginName = NULL;
  PluginGetVersionInput(&PluginType, &PluginVersion, NULL, &PluginName, NULL);

  rval = PluginStartupInput(CoreHandle, g_PluginMap[2].name, DebugCallback);  /* DebugCallback is in main.c */
  if (rval != M64ERR_SUCCESS)
    {
      DebugMessage(M64MSG_ERROR, "Error: %s plugin library failed to start.", g_PluginMap[1].name);
      return rval;
    }

  g_PluginMap[2].handle = (m64p_dynlib_handle)PluginType;
  g_PluginMap[2].libname = PluginName;
  g_PluginMap[2].libversion = PluginVersion;

  DebugMessage(M64MSG_INFO, "Using RSP plugin: %s version %i", PluginName, PluginVersion);

  return M64ERR_SUCCESS;
}

m64p_error PluginSearchLoad(m64p_handle ConfigUI)
{
  int i;
  for (i = 0; i < 4; i++)
    {
      m64p_error rval;
      m64p_plugin_type type = g_PluginMap[i].type;
      const char      *cmdline_path = NULL;
      const char      *config_var = NULL;
      int              use_dummy = 0;
      switch (type)
        {
        case M64PLUGIN_RSP:
          rval = SetupRSP();
          if(rval != M64ERR_SUCCESS)
            return rval;
          break;
        case M64PLUGIN_GFX:
          rval = SetupGfx();
          if(rval != M64ERR_SUCCESS)
            return rval;
          break;
        case M64PLUGIN_AUDIO:
          rval = SetupAudio();
          if(rval != M64ERR_SUCCESS)
            return rval;
          break;
        case M64PLUGIN_INPUT:
          rval = SetupInput();
          if(rval != M64ERR_SUCCESS)
            return rval;
          break;
          break;
        }
    }
  return M64ERR_SUCCESS;
}

m64p_error PluginUnload(void)
{
  return M64ERR_SUCCESS;
}
