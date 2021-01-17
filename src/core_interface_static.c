/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *   Mupen64plus-ui-console - core_interface.c                             *
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

/* This file contains the routines for attaching to the Mupen64Plus core
 * library and pointers to the core functions
 */

#if !defined(CORE_INTERFACE_H)
#define CORE_INTERFACE_H

#include <stdio.h>

#include "main.h"
#include "version.h"

#include "core_interface_static.h"

int g_CoreCapabilities;
int g_CoreAPIVersion;

/* global variables */
m64p_dynlib_handle CoreHandle = NULL;

m64p_error AttachCoreLib(const char *CoreLibFilepath)
{

	/* check the Core and API versions for compatibility with this front-end */
	m64p_plugin_type PluginType = (m64p_plugin_type) 0;
    int Compatible = 0;
    int CoreVersion = 0;
	int ConfigAPIVersion, DebugAPIVersion, VidextAPIVersion;
    const char *CoreName = NULL;

	CorePluginGetVersion(&PluginType, &CoreVersion, &g_CoreAPIVersion, &CoreName, &g_CoreCapabilities);
	if (PluginType != M64PLUGIN_CORE)
        DebugMessage(M64MSG_ERROR, "AttachCoreLib() Error: Shared library '%s' invalid; this is not the emulator core.", CoreLibFilepath);
    else if (CoreVersion < MINIMUM_CORE_VERSION)
        DebugMessage(M64MSG_ERROR, "AttachCoreLib() Error: Shared library '%s' incompatible; core version %i.%i.%i is below minimum supported %i.%i.%i",
                CoreLibFilepath, VERSION_PRINTF_SPLIT(CoreVersion), VERSION_PRINTF_SPLIT(MINIMUM_CORE_VERSION));
    else if ((g_CoreAPIVersion & 0xffff0000) != (CORE_API_VERSION & 0xffff0000))
        DebugMessage(M64MSG_ERROR, "AttachCoreLib() Error: Shared library '%s' incompatible; core API major version %i.%i.%i doesn't match with this application (%i.%i.%i)",
                CoreLibFilepath, VERSION_PRINTF_SPLIT(g_CoreAPIVersion), VERSION_PRINTF_SPLIT(CORE_API_VERSION));
    else
        Compatible = 1;
	if (Compatible == 0)
        return M64ERR_INCOMPATIBLE;

	/* check Config API version for compatibility */
    CoreGetAPIVersions(&ConfigAPIVersion, &DebugAPIVersion, &VidextAPIVersion, NULL);
    if ((ConfigAPIVersion & 0xffff0000) != (CONFIG_API_VERSION & 0xffff0000))
    {
        DebugMessage(M64MSG_ERROR, "AttachCoreLib() Error: Emulator core '%s' incompatible; Config API major version %i.%i.%i doesn't match application: %i.%i.%i",
                CoreLibFilepath, VERSION_PRINTF_SPLIT(ConfigAPIVersion), VERSION_PRINTF_SPLIT(CONFIG_API_VERSION));
        return M64ERR_INCOMPATIBLE;
    }

	/* print some information about the core library */
    DebugMessage(M64MSG_INFO, "attached to core library '%s' version %i.%i.%i", CoreName, VERSION_PRINTF_SPLIT(CoreVersion));
    if (g_CoreCapabilities & M64CAPS_DYNAREC)
        DebugMessage(M64MSG_INFO, "            Includes support for Dynamic Recompiler.");
    if (g_CoreCapabilities & M64CAPS_DEBUGGER)
        DebugMessage(M64MSG_INFO, "            Includes support for MIPS r4300 Debugger.");
    if (g_CoreCapabilities & M64CAPS_CORE_COMPARE)
        DebugMessage(M64MSG_INFO, "            Includes support for r4300 Core Comparison.");

	CoreHandle = (m64p_dynlib_handle)1337; /* Just so it doesn't evaluate to NULL */

	return M64ERR_SUCCESS;
}

m64p_error DetachCoreLib(void)
{
	CoreHandle = NULL;
	return M64ERR_SUCCESS;
}


#endif
