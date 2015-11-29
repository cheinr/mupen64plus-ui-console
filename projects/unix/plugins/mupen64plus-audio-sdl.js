// Capture the output of this into a variable, if you want
(function(fb, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;

  Module.cleanups = [];

  var gb = 0;
  // Each module has its own stack
  var STACKTOP = getMemory(TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](gb);
  });

  

// === Auto-generated preamble library stuff ===

//========================================
// Runtime essentials
//========================================

// === Body ===

var ASM_CONSTS = [];





gb = Runtime.alignMemory(getMemory(3376, 4 || 1));

// STATICTOP = STATIC_BASE + 3376;
  /* global initializers */  __ATINIT__.push();
  

/* memory initializer */ allocate([64,131,0,0,100,0,0,0,0,4,0,0,0,8,0,0,1,0,0,0,80,0,0,0,5,0,0,0,0,64,0,0,128,0,0,0,1,0,0,0,67,111,114,101,71,101,116,65,80,73,86,101,114,115,105,111,110,115,0,67,111,114,101,32,101,109,117,108,97,116,111,114,32,98,114,111,107,101,110,59,32,110,111,32,67,111,114,101,65,80,73,86,101,114,115,105,111,110,70,117,110,99,40,41,32,102,117,110,99,116,105,111,110,32,102,111,117,110,100,46,0,69,109,117,108,97,116,111,114,32,99,111,114,101,32,67,111,110,102,105,103,32,65,80,73,32,40,118,37,105,46,37,105,46,37,105,41,32,105,110,99,111,109,112,97,116,105,98,108,101,32,119,105,116,104,32,112,108,117,103,105,110,32,40,118,37,105,46,37,105,46,37,105,41,0,67,111,110,102,105,103,79,112,101,110,83,101,99,116,105,111,110,0,67,111,110,102,105,103,68,101,108,101,116,101,83,101,99,116,105,111,110,0,67,111,110,102,105,103,83,97,118,101,83,101,99,116,105,111,110,0,67,111,110,102,105,103,83,101,116,80,97,114,97,109,101,116,101,114,0,67,111,110,102,105,103,71,101,116,80,97,114,97,109,101,116,101,114,0,67,111,110,102,105,103,83,101,116,68,101,102,97,117,108,116,73,110,116,0,67,111,110,102,105,103,83,101,116,68,101,102,97,117,108,116,70,108,111,97,116,0,67,111,110,102,105,103,83,101,116,68,101,102,97,117,108,116,66,111,111,108,0,67,111,110,102,105,103,83,101,116,68,101,102,97,117,108,116,83,116,114,105,110,103,0,67,111,110,102,105,103,71,101,116,80,97,114,97,109,73,110,116,0,67,111,110,102,105,103,71,101,116,80,97,114,97,109,70,108,111,97,116,0,67,111,110,102,105,103,71,101,116,80,97,114,97,109,66,111,111,108,0,67,111,110,102,105,103,71,101,116,80,97,114,97,109,83,116,114,105,110,103,0,65,117,100,105,111,45,83,68,76,0,67,111,117,108,100,110,39,116,32,111,112,101,110,32,99,111,110,102,105,103,32,115,101,99,116,105,111,110,32,39,65,117,100,105,111,45,83,68,76,39,0,86,101,114,115,105,111,110,0,78,111,32,118,101,114,115,105,111,110,32,110,117,109,98,101,114,32,105,110,32,39,65,117,100,105,111,45,83,68,76,39,32,99,111,110,102,105,103,32,115,101,99,116,105,111,110,46,32,83,101,116,116,105,110,103,32,100,101,102,97,117,108,116,115,46,0,73,110,99,111,109,112,97,116,105,98,108,101,32,118,101,114,115,105,111,110,32,37,46,50,102,32,105,110,32,39,65,117,100,105,111,45,83,68,76,39,32,99,111,110,102,105,103,32,115,101,99,116,105,111,110,58,32,99,117,114,114,101,110,116,32,105,115,32,37,46,50,102,46,32,83,101,116,116,105,110,103,32,100,101,102,97,117,108,116,115,46,0,85,112,100,97,116,105,110,103,32,112,97,114,97,109,101,116,101,114,32,115,101,116,32,118,101,114,115,105,111,110,32,105,110,32,39,65,117,100,105,111,45,83,68,76,39,32,99,111,110,102,105,103,32,115,101,99,116,105,111,110,32,116,111,32,37,46,50,102,0,77,117,112,101,110,54,52,80,108,117,115,32,83,68,76,32,65,117,100,105,111,32,80,108,117,103,105,110,32,99,111,110,102,105,103,32,112,97,114,97,109,101,116,101,114,32,118,101,114,115,105,111,110,32,110,117,109,98,101,114,0,68,69,70,65,85,76,84,95,70,82,69,81,85,69,78,67,89,0,70,114,101,113,117,101,110,99,121,32,119,104,105,99,104,32,105,115,32,117,115,101,100,32,105,102,32,114,111,109,32,100,111,101,115,110,39,116,32,119,97,110,116,32,116,111,32,99,104,97,110,103,101,32,105,116,0,83,87,65,80,95,67,72,65,78,78,69,76,83,0,83,119,97,112,115,32,108,101,102,116,32,97,110,100,32,114,105,103,104,116,32,99,104,97,110,110,101,108,115,0,80,82,73,77,65,82,89,95,66,85,70,70,69,82,95,83,73,90,69,0,83,105,122,101,32,111,102,32,112,114,105,109,97,114,121,32,98,117,102,102,101,114,32,105,110,32,111,117,116,112,117,116,32,115,97,109,112,108,101,115,46,32,84,104,105,115,32,105,115,32,119,104,101,114,101,32,97,117,100,105,111,32,105,115,32,108,111,97,100,101,100,32,97,102,116,101,114,32,105,116,39,115,32,101,120,116,114,97,99,116,101,100,32,102,114,111,109,32,110,54,52,39,115,32,109,101,109,111,114,121,46,0,80,82,73,77,65,82,89,95,66,85,70,70,69,82,95,84,65,82,71,69,84,0,70,117,108,108,110,101,115,115,32,108,101,118,101,108,32,116,97,114,103,101,116,32,102,111,114,32,80,114,105,109,97,114,121,32,97,117,100,105,111,32,98,117,102,102,101,114,44,32,105,110,32,101,113,117,105,118,97,108,101,110,116,32,111,117,116,112,117,116,32,115,97,109,112,108,101,115,46,32,84,104,105,115,32,118,97,108,117,101,32,109,117,115,116,32,98,101,32,108,97,114,103,101,114,32,116,104,97,110,32,116,104,101,32,83,69,67,79,78,68,65,82,89,95,66,85,70,70,69,82,95,83,73,90,69,46,32,68,101,99,114,101,97,115,105,110,103,32,116,104,105,115,32,118,97,108,117,101,32,119,105,108,108,32,114,101,100,117,99,101,32,97,117,100,105,111,32,108,97,116,101,110,99,121,32,98,117,116,32,114,101,113,117,105,114,101,115,32,97,32,102,97,115,116,101,114,32,80,67,32,116,111,32,97,118,111,105,100,32,99,104,111,112,112,105,110,101,115,115,46,32,73,110,99,114,101,97,115,105,110,103,32,116,104,105,115,32,119,105,108,108,32,105,110,99,114,101,97,115,101,32,97,117,100,105,111,32,108,97,116,101,110,99,121,32,98,117,116,32,114,101,100,117,99,101,32,116,104,101,32,99,104,97,110,99,101,32,111,102,32,100,114,111,112,45,111,117,116,115,46,0,83,69,67,79,78,68,65,82,89,95,66,85,70,70,69,82,95,83,73,90,69,0,83,105,122,101,32,111,102,32,115,101,99,111,110,100,97,114,121,32,98,117,102,102,101,114,32,105,110,32,111,117,116,112,117,116,32,115,97,109,112,108,101,115,46,32,84,104,105,115,32,105,115,32,83,68,76,39,115,32,104,97,114,100,119,97,114,101,32,98,117,102,102,101,114,46,32,84,104,101,32,83,68,76,32,100,111,99,117,109,101,110,116,97,116,105,111,110,32,115,116,97,116,101,115,32,116,104,97,116,32,116,104,105,115,32,115,104,111,117,108,100,32,98,101,32,97,32,112,111,119,101,114,32,111,102,32,116,119,111,32,98,101,116,119,101,101,110,32,53,49,50,32,97,110,100,32,56,49,57,50,46,0,82,69,83,65,77,80,76,69,0,116,114,105,118,105,97,108,0,65,117,100,105,111,32,114,101,115,97,109,112,108,105,110,103,32,97,108,103,111,114,105,116,104,109,46,32,115,114,99,45,115,105,110,99,45,98,101,115,116,45,113,117,97,108,105,116,121,44,32,115,114,99,45,115,105,110,99,45,109,101,100,105,117,109,45,113,117,97,108,105,116,121,44,32,115,114,99,45,115,105,110,99,45,102,97,115,116,101,115,116,44,32,115,114,99,45,122,101,114,111,45,111,114,100,101,114,45,104,111,108,100,44,32,115,114,99,45,108,105,110,101,97,114,44,32,115,112,101,101,120,45,102,105,120,101,100,45,123,49,48,45,48,125,44,32,116,114,105,118,105,97,108,0,86,79,76,85,77,69,95,67,79,78,84,82,79,76,95,84,89,80,69,0,86,111,108,117,109,101,32,99,111,110,116,114,111,108,32,116,121,112,101,58,32,49,32,61,32,83,68,76,32,40,111,110,108,121,32,97,102,102,101,99,116,115,32,77,117,112,101,110,54,52,80,108,117,115,32,111,117,116,112,117,116,41,32,32,50,32,61,32,79,83,83,32,109,105,120,101,114,32,40,97,100,106,117,115,116,115,32,109,97,115,116,101,114,32,80,67,32,118,111,108,117,109,101,41,0,86,79,76,85,77,69,95,65,68,74,85,83,84,0,80,101,114,99,101,110,116,97,103,101,32,99,104,97,110,103,101,32,101,97,99,104,32,116,105,109,101,32,116,104,101,32,118,111,108,117,109,101,32,105,115,32,105,110,99,114,101,97,115,101,100,32,111,114,32,100,101,99,114,101,97,115,101,100,0,86,79,76,85,77,69,95,68,69,70,65,85,76,84,0,68,101,102,97,117,108,116,32,118,111,108,117,109,101,32,119,104,101,110,32,97,32,103,97,109,101,32,105,115,32,115,116,97,114,116,101,100,46,32,32,79,110,108,121,32,117,115,101,100,32,105,102,32,86,79,76,85,77,69,95,67,79,78,84,82,79,76,95,84,89,80,69,32,105,115,32,49,0,77,117,112,101,110,54,52,80,108,117,115,32,83,68,76,32,65,117,100,105,111,32,80,108,117,103,105,110,0,65,105,76,101,110,67,104,97,110,103,101,100,40,41,58,32,65,117,100,105,111,32,98,117,102,102,101,114,32,111,118,101,114,102,108,111,119,46,0,37,48,51,105,32,78,101,119,32,97,117,100,105,111,32,98,121,116,101,115,58,32,37,105,32,32,84,105,109,101,32,116,111,32,110,101,120,116,32,99,97,108,108,98,97,99,107,58,32,37,105,32,32,67,117,114,114,101,110,116,47,69,120,112,101,99,116,101,100,32,98,117,102,102,101,114,32,108,101,118,101,108,58,32,37,105,47,37,105,0,32,32,32,32,65,105,76,101,110,67,104,97,110,103,101,100,40,41,58,32,87,97,105,116,105,110,103,32,37,105,109,115,0,32,32,32,32,65,105,76,101,110,67,104,97,110,103,101,100,40,41,58,32,80,111,115,115,105,98,108,101,32,117,110,100,101,114,102,108,111,119,32,97,116,32,110,101,120,116,32,97,117,100,105,111,32,99,97,108,108,98,97,99,107,59,32,112,97,117,115,105,110,103,32,112,108,97,121,98,97,99,107,0,67,108,101,97,110,105,110,103,32,117,112,32,83,68,76,32,115,111,117,110,100,32,112,108,117,103,105,110,46,46,46,0,77,117,116,101,0,37,105,37,37,0,73,110,105,116,105,97,108,105,122,101,65,117,100,105,111,40,41,58,32,83,68,76,32,65,117,100,105,111,32,115,117,98,45,115,121,115,116,101,109,32,97,108,114,101,97,100,121,32,105,110,105,116,105,97,108,105,122,101,100,46,0,73,110,105,116,105,97,108,105,122,101,65,117,100,105,111,40,41,58,32,73,110,105,116,105,97,108,105,122,105,110,103,32,83,68,76,32,65,117,100,105,111,0,80,114,105,109,97,114,121,32,98,117,102,102,101,114,58,32,37,105,32,111,117,116,112,117,116,32,115,97,109,112,108,101,115,46,0,80,114,105,109,97,114,121,32,116,97,114,103,101,116,32,102,117,108,108,110,101,115,115,58,32,37,105,32,111,117,116,112,117,116,32,115,97,109,112,108,101,115,46,0,83,101,99,111,110,100,97,114,121,32,98,117,102,102,101,114,58,32,37,105,32,111,117,116,112,117,116,32,115,97,109,112,108,101,115,46,0,82,101,113,117,101,115,116,105,110,103,32,102,114,101,113,117,101,110,99,121,58,32,37,105,72,122,46,0,82,101,113,117,101,115,116,105,110,103,32,102,111,114,109,97,116,58,32,37,105,46,0,67,111,117,108,100,110,39,116,32,111,112,101,110,32,97,117,100,105,111,58,32,37,115,0,79,98,116,97,105,110,101,100,32,97,117,100,105,111,32,102,111,114,109,97,116,32,100,105,102,102,101,114,115,32,102,114,111,109,32,114,101,113,117,101,115,116,101,100,46,0,79,98,116,97,105,110,101,100,32,102,114,101,113,117,101,110,99,121,32,100,105,102,102,101,114,115,32,102,114,111,109,32,114,101,113,117,101,115,116,101,100,46,0,70,114,101,113,117,101,110,99,121,58,32,37,105,0,70,111,114,109,97,116,58,32,37,105,0,67,104,97,110,110,101,108,115,58,32,37,105,0,83,105,108,101,110,99,101,58,32,37,105,0,83,97,109,112,108,101,115,58,32,37,105,0,83,105,122,101,58,32,37,105,0,73,110,105,116,105,97,108,105,122,105,110,103,32,83,68,76,32,97,117,100,105,111,32,115,117,98,115,121,115,116,101,109,46,46,46,0,70,97,105,108,101,100,32,116,111,32,105,110,105,116,105,97,108,105,122,101,32,83,68,76,32,97,117,100,105,111,32,115,117,98,115,121,115,116,101,109,59,32,102,111,114,99,105,110,103,32,101,120,105,116,46,10,0,83,68,76,95,71,69,84,69,82,82,79,82,58,32,37,115,0,37,48,51,105,32,109,121,95,97,117,100,105,111,95,99,97,108,108,98,97,99,107,58,32,117,115,101,100,32,37,105,32,115,97,109,112,108,101,115,0,37,48,51,105,32,66,117,102,102,101,114,32,117,110,100,101,114,102,108,111,119,32,40,37,105,41,46,32,32,37,105,32,115,97,109,112,108,101,115,32,112,114,101,115,101,110,116,44,32,37,105,32,110,101,101,100,101,100,0,65,108,108,111,99,97,116,105,110,103,32,109,101,109,111,114,121,32,102,111,114,32,97,117,100,105,111,32,98,117,102,102,101,114,58,32,37,105,32,98,121,116,101,115,46,0,67,111,117,108,100,32,110,111,116,32,102,105,110,100,32,82,69,83,65,77,80,76,69,32,99,111,110,102,105,103,117,114,97,116,105,111,110,59,32,117,115,101,32,116,114,105,118,105,97,108,32,114,101,115,97,109,112,108,101,114,0,85,110,107,110,111,119,110,32,82,69,83,65,77,80,76,69,32,99,111,110,102,105,103,117,114,97,116,105,111,110,32,37,115,59,32,117,115,101,32,116,114,105,118,105,97,108,32,114,101,115,97,109,112,108,101,114,0], "i8", ALLOC_NONE, gb);





/* no memory initializer */
// {{PRE_LIBRARY}}

function _SDL_QuitSubSystem() {
  if (!parentModule['_SDL_QuitSubSystem']) abort("external function 'SDL_QuitSubSystem' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_QuitSubSystem'].apply(null, arguments);
  }
function _malloc() {
  if (!parentModule['_malloc']) abort("external function 'malloc' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_malloc'].apply(null, arguments);
  }
function _SDL_WasInit() {
  if (!parentModule['_SDL_WasInit']) abort("external function 'SDL_WasInit' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_WasInit'].apply(null, arguments);
  }
function _dlsym() {
  if (!parentModule['_dlsym']) abort("external function 'dlsym' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_dlsym'].apply(null, arguments);
  }
function _memset() {
  if (!parentModule['_memset']) abort("external function 'memset' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_memset'].apply(null, arguments);
  }
function _free() {
  if (!parentModule['_free']) abort("external function 'free' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_free'].apply(null, arguments);
  }
function _SDL_CloseAudio() {
  if (!parentModule['_SDL_CloseAudio']) abort("external function 'SDL_CloseAudio' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_CloseAudio'].apply(null, arguments);
  }
function _SDL_Delay() {
  if (!parentModule['_SDL_Delay']) abort("external function 'SDL_Delay' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_Delay'].apply(null, arguments);
  }
function _printf() {
  if (!parentModule['_printf']) abort("external function 'printf' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_printf'].apply(null, arguments);
  }
function _SDL_GetTicks() {
  if (!parentModule['_SDL_GetTicks']) abort("external function 'SDL_GetTicks' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_GetTicks'].apply(null, arguments);
  }
function _memcpy() {
  if (!parentModule['_memcpy']) abort("external function 'memcpy' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_memcpy'].apply(null, arguments);
  }
function _SDL_MixAudio() {
  if (!parentModule['_SDL_MixAudio']) abort("external function 'SDL_MixAudio' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_MixAudio'].apply(null, arguments);
  }
function _memmove() {
  if (!parentModule['_memmove']) abort("external function 'memmove' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_memmove'].apply(null, arguments);
  }
function _SDL_Init() {
  if (!parentModule['_SDL_Init']) abort("external function 'SDL_Init' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_Init'].apply(null, arguments);
  }
function _vsprintf() {
  if (!parentModule['_vsprintf']) abort("external function 'vsprintf' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_vsprintf'].apply(null, arguments);
  }
function _SDL_PauseAudio() {
  if (!parentModule['_SDL_PauseAudio']) abort("external function 'SDL_PauseAudio' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_PauseAudio'].apply(null, arguments);
  }
function _SDL_LockAudio() {
  if (!parentModule['_SDL_LockAudio']) abort("external function 'SDL_LockAudio' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_LockAudio'].apply(null, arguments);
  }
function _strcpy() {
  if (!parentModule['_strcpy']) abort("external function 'strcpy' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_strcpy'].apply(null, arguments);
  }
function _sprintf() {
  if (!parentModule['_sprintf']) abort("external function 'sprintf' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_sprintf'].apply(null, arguments);
  }
function _SDL_OpenAudio() {
  if (!parentModule['_SDL_OpenAudio']) abort("external function 'SDL_OpenAudio' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_OpenAudio'].apply(null, arguments);
  }
function _SDL_GetError() {
  if (!parentModule['_SDL_GetError']) abort("external function 'SDL_GetError' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_GetError'].apply(null, arguments);
  }
function _strcmp() {
  if (!parentModule['_strcmp']) abort("external function 'strcmp' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_strcmp'].apply(null, arguments);
  }
function _SDL_UnlockAudio() {
  if (!parentModule['_SDL_UnlockAudio']) abort("external function 'SDL_UnlockAudio' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_SDL_UnlockAudio'].apply(null, arguments);
  }
 


function nullFunc_iiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiidi(x) { Module["printErr"]("Invalid function pointer called with signature 'iiidi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_ii(x) { Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viii(x) { Module["printErr"]("Invalid function pointer called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iii(x) { Module["printErr"]("Invalid function pointer called with signature 'iii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }
var setTempRet0 = Runtime.setTempRet0, getTempRet0 = Runtime.getTempRet0;

function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function ftCall_iiiii(x, a0, a1, a2, a3) {
  if (x < 0 || x >= parentModule["FUNCTION_TABLE_iiiii"].length) { Module.printErr("Function table mask error (out of range)"); Module["printErr"]("Invalid function pointer called with signature 'iiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info."); ; abort(x) }
  return parentModule["FUNCTION_TABLE_iiiii"][x](a0, a1, a2, a3);
}

function invoke_iiidi(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiidi"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function ftCall_iiidi(x, a0, a1, a2, a3) {
  if (x < 0 || x >= parentModule["FUNCTION_TABLE_iiidi"].length) { Module.printErr("Function table mask error (out of range)"); Module["printErr"]("Invalid function pointer called with signature 'iiidi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info."); ; abort(x) }
  return parentModule["FUNCTION_TABLE_iiidi"][x](a0, a1, a2, a3);
}

function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function ftCall_ii(x, a0) {
  if (x < 0 || x >= parentModule["FUNCTION_TABLE_ii"].length) { Module.printErr("Function table mask error (out of range)"); Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info."); ; abort(x) }
  return parentModule["FUNCTION_TABLE_ii"][x](a0);
}

function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function ftCall_viii(x, a0, a1, a2) {
  if (x < 0 || x >= parentModule["FUNCTION_TABLE_viii"].length) { Module.printErr("Function table mask error (out of range)"); Module["printErr"]("Invalid function pointer called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info."); ; abort(x) }
  return parentModule["FUNCTION_TABLE_viii"][x](a0, a1, a2);
}

function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function ftCall_iii(x, a0, a1) {
  if (x < 0 || x >= parentModule["FUNCTION_TABLE_iii"].length) { Module.printErr("Function table mask error (out of range)"); Module["printErr"]("Invalid function pointer called with signature 'iii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info."); ; abort(x) }
  return parentModule["FUNCTION_TABLE_iii"][x](a0, a1);
}

function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function ftCall_iiiiii(x, a0, a1, a2, a3, a4) {
  if (x < 0 || x >= parentModule["FUNCTION_TABLE_iiiiii"].length) { Module.printErr("Function table mask error (out of range)"); Module["printErr"]("Invalid function pointer called with signature 'iiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info."); ; abort(x) }
  return parentModule["FUNCTION_TABLE_iiiiii"][x](a0, a1, a2, a3, a4);
}


var dynCall_iiiii = ftCall_iiiii;


var dynCall_iiidi = ftCall_iiidi;


var dynCall_ii = ftCall_ii;


var dynCall_viii = ftCall_viii;


var dynCall_iii = ftCall_iii;


var dynCall_iiiiii = ftCall_iiiiii;


Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

Module.asmLibraryArg = { "abort": abort, "assert": assert, "nullFunc_iiiii": nullFunc_iiiii, "nullFunc_iiidi": nullFunc_iiidi, "nullFunc_ii": nullFunc_ii, "nullFunc_viii": nullFunc_viii, "nullFunc_iii": nullFunc_iii, "nullFunc_iiiiii": nullFunc_iiiiii, "setTempRet0": setTempRet0, "getTempRet0": getTempRet0, "invoke_iiiii": invoke_iiiii, "ftCall_iiiii": ftCall_iiiii, "invoke_iiidi": invoke_iiidi, "ftCall_iiidi": ftCall_iiidi, "invoke_ii": invoke_ii, "ftCall_ii": ftCall_ii, "invoke_viii": invoke_viii, "ftCall_viii": ftCall_viii, "invoke_iii": invoke_iii, "ftCall_iii": ftCall_iii, "invoke_iiiiii": invoke_iiiiii, "ftCall_iiiiii": ftCall_iiiiii, "_SDL_UnlockAudio": _SDL_UnlockAudio, "_dlsym": _dlsym, "_SDL_QuitSubSystem": _SDL_QuitSubSystem, "_SDL_CloseAudio": _SDL_CloseAudio, "_SDL_OpenAudio": _SDL_OpenAudio, "_SDL_GetTicks": _SDL_GetTicks, "_SDL_Delay": _SDL_Delay, "_SDL_LockAudio": _SDL_LockAudio, "_SDL_GetError": _SDL_GetError, "_memset": _memset, "_SDL_PauseAudio": _SDL_PauseAudio, "_SDL_Init": _SDL_Init, "_memcpy": _memcpy, "_SDL_MixAudio": _SDL_MixAudio, "_vsprintf": _vsprintf, "_printf": _printf, "_sprintf": _sprintf, "_strcmp": _strcmp, "_free": _free, "_memmove": _memmove, "_malloc": _malloc, "_SDL_WasInit": _SDL_WasInit, "_strcpy": _strcpy, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "gb": gb, "fb": fb };
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var cttz_i8=env.cttz_i8|0;
  var gb=env.gb|0;
  var fb=env.fb|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;

  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var nullFunc_iiiii=env.nullFunc_iiiii;
  var nullFunc_iiidi=env.nullFunc_iiidi;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_viii=env.nullFunc_viii;
  var nullFunc_iii=env.nullFunc_iii;
  var nullFunc_iiiiii=env.nullFunc_iiiiii;
  var setTempRet0=env.setTempRet0;
  var getTempRet0=env.getTempRet0;
  var invoke_iiiii=env.invoke_iiiii;
  var ftCall_iiiii=env.ftCall_iiiii;
  var invoke_iiidi=env.invoke_iiidi;
  var ftCall_iiidi=env.ftCall_iiidi;
  var invoke_ii=env.invoke_ii;
  var ftCall_ii=env.ftCall_ii;
  var invoke_viii=env.invoke_viii;
  var ftCall_viii=env.ftCall_viii;
  var invoke_iii=env.invoke_iii;
  var ftCall_iii=env.ftCall_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var ftCall_iiiiii=env.ftCall_iiiiii;
  var _SDL_UnlockAudio=env._SDL_UnlockAudio;
  var _dlsym=env._dlsym;
  var _SDL_QuitSubSystem=env._SDL_QuitSubSystem;
  var _SDL_CloseAudio=env._SDL_CloseAudio;
  var _SDL_OpenAudio=env._SDL_OpenAudio;
  var _SDL_GetTicks=env._SDL_GetTicks;
  var _SDL_Delay=env._SDL_Delay;
  var _SDL_LockAudio=env._SDL_LockAudio;
  var _SDL_GetError=env._SDL_GetError;
  var _memset=env._memset;
  var _SDL_PauseAudio=env._SDL_PauseAudio;
  var _SDL_Init=env._SDL_Init;
  var _memcpy=env._memcpy;
  var _SDL_MixAudio=env._SDL_MixAudio;
  var _vsprintf=env._vsprintf;
  var _printf=env._printf;
  var _sprintf=env._sprintf;
  var _strcmp=env._strcmp;
  var _free=env._free;
  var _memmove=env._memmove;
  var _malloc=env._malloc;
  var _SDL_WasInit=env._SDL_WasInit;
  var _strcpy=env._strcpy;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS
function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;
if ((STACKTOP|0) >= (STACK_MAX|0)) abort();

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}
function copyTempFloat(ptr) {
  ptr = ptr|0;
  HEAP8[tempDoublePtr>>0] = HEAP8[ptr>>0];
  HEAP8[tempDoublePtr+1>>0] = HEAP8[ptr+1>>0];
  HEAP8[tempDoublePtr+2>>0] = HEAP8[ptr+2>>0];
  HEAP8[tempDoublePtr+3>>0] = HEAP8[ptr+3>>0];
}
function copyTempDouble(ptr) {
  ptr = ptr|0;
  HEAP8[tempDoublePtr>>0] = HEAP8[ptr>>0];
  HEAP8[tempDoublePtr+1>>0] = HEAP8[ptr+1>>0];
  HEAP8[tempDoublePtr+2>>0] = HEAP8[ptr+2>>0];
  HEAP8[tempDoublePtr+3>>0] = HEAP8[ptr+3>>0];
  HEAP8[tempDoublePtr+4>>0] = HEAP8[ptr+4>>0];
  HEAP8[tempDoublePtr+5>>0] = HEAP8[ptr+5>>0];
  HEAP8[tempDoublePtr+6>>0] = HEAP8[ptr+6>>0];
  HEAP8[tempDoublePtr+7>>0] = HEAP8[ptr+7>>0];
}

function _PluginStartup($CoreLibHandle,$Context,$DebugCallback) {
 $CoreLibHandle = $CoreLibHandle|0;
 $Context = $Context|0;
 $DebugCallback = $DebugCallback|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0.0, $86 = 0, $87 = 0, $88 = 0.0, $89 = 0.0, $9 = 0, $90 = 0, $91 = 0, $92 = 0.0, $93 = 0, $94 = 0, $95 = 0;
 var $96 = 0.0, $97 = 0.0, $98 = 0, $99 = 0, $ConfigAPIVersion = 0, $CoreAPIVersionFunc = 0, $DebugAPIVersion = 0, $VidextAPIVersion = 0, $bSaveConfig = 0, $fConfigParamsVersion = 0, $fVersion = 0, $or$cond = 0, $or$cond11 = 0, $or$cond13 = 0, $or$cond15 = 0, $or$cond17 = 0, $or$cond19 = 0, $or$cond21 = 0, $or$cond23 = 0, $or$cond25 = 0;
 var $or$cond3 = 0, $or$cond5 = 0, $or$cond7 = 0, $or$cond9 = 0, $vararg_buffer = 0, $vararg_buffer26 = 0, $vararg_buffer33 = 0, $vararg_buffer35 = 0, $vararg_buffer37 = 0, $vararg_buffer41 = 0, $vararg_ptr28 = 0, $vararg_ptr29 = 0, $vararg_ptr30 = 0, $vararg_ptr31 = 0, $vararg_ptr32 = 0, $vararg_ptr40 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer41 = sp + 64|0;
 $vararg_buffer37 = sp + 48|0;
 $vararg_buffer35 = sp + 40|0;
 $vararg_buffer33 = sp + 32|0;
 $vararg_buffer26 = sp + 8|0;
 $vararg_buffer = sp;
 $ConfigAPIVersion = sp + 92|0;
 $DebugAPIVersion = sp + 88|0;
 $VidextAPIVersion = sp + 84|0;
 $fConfigParamsVersion = sp + 76|0;
 $fVersion = sp + 72|0;
 $1 = $CoreLibHandle;
 $2 = $Context;
 $3 = $DebugCallback;
 HEAPF32[$fConfigParamsVersion>>2] = 0.0;
 $4 = $3;
 HEAP32[(gb + (3232) | 0)>>2] = $4;
 $5 = $2;
 HEAP32[(gb + (3236) | 0)>>2] = $5;
 $6 = $1;
 $7 = (_osal_dynlib_getproc($6,(gb + (40) | 0))|0);
 $CoreAPIVersionFunc = $7;
 $8 = $CoreAPIVersionFunc;
 $9 = ($8|0)==(0|0);
 if ($9) {
  _DebugMessage(1,(gb + (59) | 0),$vararg_buffer);
  $0 = 3;
  $123 = $0;
  STACKTOP = sp;return ($123|0);
 }
 $10 = $CoreAPIVersionFunc;
 (mftCall_iiiii($10|0,($ConfigAPIVersion|0),($DebugAPIVersion|0),($VidextAPIVersion|0),(0|0))|0);
 $11 = HEAP32[$ConfigAPIVersion>>2]|0;
 $12 = $11 & -65536;
 $13 = ($12|0)!=(131072);
 if ($13) {
  $14 = HEAP32[$ConfigAPIVersion>>2]|0;
  $15 = $14 >> 16;
  $16 = $15 & 65535;
  $17 = HEAP32[$ConfigAPIVersion>>2]|0;
  $18 = $17 >> 8;
  $19 = $18 & 255;
  $20 = HEAP32[$ConfigAPIVersion>>2]|0;
  $21 = $20 & 255;
  HEAP32[$vararg_buffer26>>2] = $16;
  $vararg_ptr28 = ((($vararg_buffer26)) + 4|0);
  HEAP32[$vararg_ptr28>>2] = $19;
  $vararg_ptr29 = ((($vararg_buffer26)) + 8|0);
  HEAP32[$vararg_ptr29>>2] = $21;
  $vararg_ptr30 = ((($vararg_buffer26)) + 12|0);
  HEAP32[$vararg_ptr30>>2] = 2;
  $vararg_ptr31 = ((($vararg_buffer26)) + 16|0);
  HEAP32[$vararg_ptr31>>2] = 1;
  $vararg_ptr32 = ((($vararg_buffer26)) + 20|0);
  HEAP32[$vararg_ptr32>>2] = 0;
  _DebugMessage(1,(gb + (121) | 0),$vararg_buffer26);
  $0 = 3;
  $123 = $0;
  STACKTOP = sp;return ($123|0);
 }
 $22 = $1;
 $23 = (_osal_dynlib_getproc($22,(gb + (195) | 0))|0);
 HEAP32[(gb + (3176) | 0)>>2] = $23;
 $24 = $1;
 $25 = (_osal_dynlib_getproc($24,(gb + (213) | 0))|0);
 HEAP32[(gb + (3180) | 0)>>2] = $25;
 $26 = $1;
 $27 = (_osal_dynlib_getproc($26,(gb + (233) | 0))|0);
 HEAP32[(gb + (3184) | 0)>>2] = $27;
 $28 = $1;
 $29 = (_osal_dynlib_getproc($28,(gb + (251) | 0))|0);
 HEAP32[(gb + (3188) | 0)>>2] = $29;
 $30 = $1;
 $31 = (_osal_dynlib_getproc($30,(gb + (270) | 0))|0);
 HEAP32[(gb + (3192) | 0)>>2] = $31;
 $32 = $1;
 $33 = (_osal_dynlib_getproc($32,(gb + (289) | 0))|0);
 HEAP32[(gb + (3200) | 0)>>2] = $33;
 $34 = $1;
 $35 = (_osal_dynlib_getproc($34,(gb + (309) | 0))|0);
 HEAP32[(gb + (3204) | 0)>>2] = $35;
 $36 = $1;
 $37 = (_osal_dynlib_getproc($36,(gb + (331) | 0))|0);
 HEAP32[(gb + (3208) | 0)>>2] = $37;
 $38 = $1;
 $39 = (_osal_dynlib_getproc($38,(gb + (352) | 0))|0);
 HEAP32[(gb + (3212) | 0)>>2] = $39;
 $40 = $1;
 $41 = (_osal_dynlib_getproc($40,(gb + (375) | 0))|0);
 HEAP32[(gb + (3216) | 0)>>2] = $41;
 $42 = $1;
 $43 = (_osal_dynlib_getproc($42,(gb + (393) | 0))|0);
 HEAP32[(gb + (3220) | 0)>>2] = $43;
 $44 = $1;
 $45 = (_osal_dynlib_getproc($44,(gb + (413) | 0))|0);
 HEAP32[(gb + (3224) | 0)>>2] = $45;
 $46 = $1;
 $47 = (_osal_dynlib_getproc($46,(gb + (432) | 0))|0);
 HEAP32[(gb + (3228) | 0)>>2] = $47;
 $48 = HEAP32[(gb + (3176) | 0)>>2]|0;
 $49 = ($48|0)!=(0|0);
 $50 = HEAP32[(gb + (3180) | 0)>>2]|0;
 $51 = ($50|0)!=(0|0);
 $or$cond = $49 & $51;
 $52 = HEAP32[(gb + (3188) | 0)>>2]|0;
 $53 = ($52|0)!=(0|0);
 $or$cond3 = $or$cond & $53;
 $54 = HEAP32[(gb + (3192) | 0)>>2]|0;
 $55 = ($54|0)!=(0|0);
 $or$cond5 = $or$cond3 & $55;
 $56 = HEAP32[(gb + (3200) | 0)>>2]|0;
 $57 = ($56|0)!=(0|0);
 $or$cond7 = $or$cond5 & $57;
 $58 = HEAP32[(gb + (3204) | 0)>>2]|0;
 $59 = ($58|0)!=(0|0);
 $or$cond9 = $or$cond7 & $59;
 $60 = HEAP32[(gb + (3208) | 0)>>2]|0;
 $61 = ($60|0)!=(0|0);
 $or$cond11 = $or$cond9 & $61;
 $62 = HEAP32[(gb + (3212) | 0)>>2]|0;
 $63 = ($62|0)!=(0|0);
 $or$cond13 = $or$cond11 & $63;
 $64 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $65 = ($64|0)!=(0|0);
 $or$cond15 = $or$cond13 & $65;
 $66 = HEAP32[(gb + (3220) | 0)>>2]|0;
 $67 = ($66|0)!=(0|0);
 $or$cond17 = $or$cond15 & $67;
 $68 = HEAP32[(gb + (3224) | 0)>>2]|0;
 $69 = ($68|0)!=(0|0);
 $or$cond19 = $or$cond17 & $69;
 $70 = HEAP32[(gb + (3228) | 0)>>2]|0;
 $71 = ($70|0)!=(0|0);
 $or$cond21 = $or$cond19 & $71;
 if (!($or$cond21)) {
  $0 = 3;
  $123 = $0;
  STACKTOP = sp;return ($123|0);
 }
 $72 = HEAP32[$ConfigAPIVersion>>2]|0;
 $73 = ($72|0)<(131328);
 $74 = HEAP32[(gb + (3184) | 0)>>2]|0;
 $75 = ($74|0)!=(0|0);
 $or$cond23 = $73 | $75;
 if (!($or$cond23)) {
  $0 = 3;
  $123 = $0;
  STACKTOP = sp;return ($123|0);
 }
 $76 = HEAP32[(gb + (3176) | 0)>>2]|0;
 $77 = (mftCall_iii($76|0,((gb + (453) | 0)|0),((gb + (3240) | 0)|0))|0);
 $78 = ($77|0)!=(0);
 if ($78) {
  _DebugMessage(1,(gb + (463) | 0),$vararg_buffer33);
  $0 = 6;
  $123 = $0;
  STACKTOP = sp;return ($123|0);
 }
 $bSaveConfig = 0;
 $79 = HEAP32[(gb + (3192) | 0)>>2]|0;
 $80 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $81 = (mftCall_iiiiii($79|0,($80|0),((gb + (504) | 0)|0),2,($fConfigParamsVersion|0),4)|0);
 $82 = ($81|0)!=(0);
 do {
  if ($82) {
   _DebugMessage(2,(gb + (512) | 0),$vararg_buffer35);
   $83 = HEAP32[(gb + (3180) | 0)>>2]|0;
   (mftCall_ii($83|0,((gb + (453) | 0)|0))|0);
   $84 = HEAP32[(gb + (3176) | 0)>>2]|0;
   (mftCall_iii($84|0,((gb + (453) | 0)|0),((gb + (3240) | 0)|0))|0);
   $bSaveConfig = 1;
  } else {
   $85 = +HEAPF32[$fConfigParamsVersion>>2];
   $86 = (~~(($85)));
   $87 = ($86|0)!=(1);
   $88 = +HEAPF32[$fConfigParamsVersion>>2];
   $89 = $88;
   if ($87) {
    HEAPF64[$vararg_buffer37>>3] = $89;
    $vararg_ptr40 = ((($vararg_buffer37)) + 8|0);
    HEAPF64[$vararg_ptr40>>3] = 1.0;
    _DebugMessage(2,(gb + (579) | 0),$vararg_buffer37);
    $90 = HEAP32[(gb + (3180) | 0)>>2]|0;
    (mftCall_ii($90|0,((gb + (453) | 0)|0))|0);
    $91 = HEAP32[(gb + (3176) | 0)>>2]|0;
    (mftCall_iii($91|0,((gb + (453) | 0)|0),((gb + (3240) | 0)|0))|0);
    $bSaveConfig = 1;
    break;
   }
   $92 = 1.0 - $89;
   $93 = $92 >= 9.9999997473787516E-5;
   if ($93) {
    HEAPF32[$fVersion>>2] = 1.0;
    $94 = HEAP32[(gb + (3188) | 0)>>2]|0;
    $95 = HEAP32[(gb + (3240) | 0)>>2]|0;
    (mftCall_iiiii($94|0,($95|0),((gb + (504) | 0)|0),2,($fVersion|0))|0);
    $96 = +HEAPF32[$fVersion>>2];
    $97 = $96;
    HEAPF64[$vararg_buffer41>>3] = $97;
    _DebugMessage(3,(gb + (671) | 0),$vararg_buffer41);
    $bSaveConfig = 1;
   }
  }
 } while(0);
 $98 = HEAP32[(gb + (3204) | 0)>>2]|0;
 $99 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiidi($98|0,($99|0),((gb + (504) | 0)|0),1.0,((gb + (740) | 0)|0))|0);
 $100 = HEAP32[(gb + (3200) | 0)>>2]|0;
 $101 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiiii($100|0,($101|0),((gb + (801) | 0)|0),33600,((gb + (819) | 0)|0))|0);
 $102 = HEAP32[(gb + (3208) | 0)>>2]|0;
 $103 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiiii($102|0,($103|0),((gb + (876) | 0)|0),0,((gb + (890) | 0)|0))|0);
 $104 = HEAP32[(gb + (3200) | 0)>>2]|0;
 $105 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiiii($104|0,($105|0),((gb + (920) | 0)|0),16384,((gb + (940) | 0)|0))|0);
 $106 = HEAP32[(gb + (3200) | 0)>>2]|0;
 $107 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiiii($106|0,($107|0),((gb + (1052) | 0)|0),2048,((gb + (1074) | 0)|0))|0);
 $108 = HEAP32[(gb + (3200) | 0)>>2]|0;
 $109 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiiii($108|0,($109|0),((gb + (1384) | 0)|0),1024,((gb + (1406) | 0)|0))|0);
 $110 = HEAP32[(gb + (3212) | 0)>>2]|0;
 $111 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiiii($110|0,($111|0),((gb + (1567) | 0)|0),((gb + (1576) | 0)|0),((gb + (1584) | 0)|0))|0);
 $112 = HEAP32[(gb + (3200) | 0)>>2]|0;
 $113 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiiii($112|0,($113|0),((gb + (1739) | 0)|0),1,((gb + (1759) | 0)|0))|0);
 $114 = HEAP32[(gb + (3200) | 0)>>2]|0;
 $115 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiiii($114|0,($115|0),((gb + (1864) | 0)|0),5,((gb + (1878) | 0)|0))|0);
 $116 = HEAP32[(gb + (3200) | 0)>>2]|0;
 $117 = HEAP32[(gb + (3240) | 0)>>2]|0;
 (mftCall_iiiii($116|0,($117|0),((gb + (1943) | 0)|0),80,((gb + (1958) | 0)|0))|0);
 $118 = $bSaveConfig;
 $119 = ($118|0)!=(0);
 $120 = HEAP32[$ConfigAPIVersion>>2]|0;
 $121 = ($120|0)>=(131328);
 $or$cond25 = $119 & $121;
 if ($or$cond25) {
  $122 = HEAP32[(gb + (3184) | 0)>>2]|0;
  (mftCall_ii($122|0,((gb + (453) | 0)|0))|0);
 }
 HEAP32[(gb + (3244) | 0)>>2] = 1;
 $0 = 0;
 $123 = $0;
 STACKTOP = sp;return ($123|0);
}
function _DebugMessage($level,$message,$varargs) {
 $level = $level|0;
 $message = $message|0;
 $varargs = $varargs|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $args = 0, $msgbuf = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1056|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $msgbuf = sp + 24|0;
 $args = sp;
 $0 = $level;
 $1 = $message;
 $2 = HEAP32[(gb + (3232) | 0)>>2]|0;
 $3 = ($2|0)==(0|0);
 if ($3) {
  STACKTOP = sp;return;
 }
 HEAP32[$args>>2] = $varargs;
 $4 = $1;
 (_vsprintf(($msgbuf|0),($4|0),($args|0))|0);
 $5 = HEAP32[(gb + (3232) | 0)>>2]|0;
 $6 = HEAP32[(gb + (3236) | 0)>>2]|0;
 $7 = $0;
 mftCall_viii($5|0,($6|0),($7|0),($msgbuf|0));
 STACKTOP = sp;return;
}
function _PluginShutdown() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $1 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $2 = ($1|0)!=(0);
 if (!($2)) {
  $0 = 1;
  $6 = $0;
  STACKTOP = sp;return ($6|0);
 }
 HEAP32[(gb + (3232) | 0)>>2] = 0;
 HEAP32[(gb + (3236) | 0)>>2] = 0;
 $3 = HEAP32[(gb + (3248) | 0)>>2]|0;
 $4 = ($3|0)!=(0|0);
 if ($4) {
  $5 = HEAP32[(gb + (3248) | 0)>>2]|0;
  _free(($5|0));
  HEAP32[(gb + (3248) | 0)>>2] = 0;
 }
 HEAP32[(gb + (3244) | 0)>>2] = 0;
 $0 = 0;
 $6 = $0;
 STACKTOP = sp;return ($6|0);
}
function _PluginGetVersion($PluginType,$PluginVersion,$APIVersion,$PluginNamePtr,$Capabilities) {
 $PluginType = $PluginType|0;
 $PluginVersion = $PluginVersion|0;
 $APIVersion = $APIVersion|0;
 $PluginNamePtr = $PluginNamePtr|0;
 $Capabilities = $Capabilities|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $PluginType;
 $1 = $PluginVersion;
 $2 = $APIVersion;
 $3 = $PluginNamePtr;
 $4 = $Capabilities;
 $5 = $0;
 $6 = ($5|0)!=(0|0);
 if ($6) {
  $7 = $0;
  HEAP32[$7>>2] = 3;
 }
 $8 = $1;
 $9 = ($8|0)!=(0|0);
 if ($9) {
  $10 = $1;
  HEAP32[$10>>2] = 132352;
 }
 $11 = $2;
 $12 = ($11|0)!=(0|0);
 if ($12) {
  $13 = $2;
  HEAP32[$13>>2] = 131072;
 }
 $14 = $3;
 $15 = ($14|0)!=(0|0);
 if ($15) {
  $16 = $3;
  HEAP32[$16>>2] = (gb + (2036) | 0);
 }
 $17 = $4;
 $18 = ($17|0)!=(0|0);
 if (!($18)) {
  STACKTOP = sp;return 0;
 }
 $19 = $4;
 HEAP32[$19>>2] = 0;
 STACKTOP = sp;return 0;
}
function _AiDacrateChanged($SystemType) {
 $SystemType = $SystemType|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $f = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $SystemType;
 $1 = HEAP32[(gb + (0) | 0)>>2]|0;
 $f = $1;
 $2 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $3 = ($2|0)!=(0);
 if (!($3)) {
  STACKTOP = sp;return;
 }
 $4 = $0;
 switch ($4|0) {
 case 0:  {
  $5 = HEAP32[((((gb + (3252) | 0)) + 32|0))>>2]|0;
  $6 = HEAP32[$5>>2]|0;
  $7 = (($6) + 1)|0;
  $8 = (48681812 / ($7>>>0))&-1;
  $f = $8;
  break;
 }
 case 1:  {
  $9 = HEAP32[((((gb + (3252) | 0)) + 32|0))>>2]|0;
  $10 = HEAP32[$9>>2]|0;
  $11 = (($10) + 1)|0;
  $12 = (49656530 / ($11>>>0))&-1;
  $f = $12;
  break;
 }
 case 2:  {
  $13 = HEAP32[((((gb + (3252) | 0)) + 32|0))>>2]|0;
  $14 = HEAP32[$13>>2]|0;
  $15 = (($14) + 1)|0;
  $16 = (48628316 / ($15>>>0))&-1;
  $f = $16;
  break;
 }
 default: {
 }
 }
 $17 = $f;
 _InitializeAudio($17);
 STACKTOP = sp;return;
}
function _InitializeAudio($freq) {
 $freq = $freq|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $desired = 0, $obtained = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer11 = 0, $vararg_buffer14 = 0, $vararg_buffer17 = 0, $vararg_buffer20 = 0, $vararg_buffer22 = 0, $vararg_buffer24 = 0, $vararg_buffer27 = 0, $vararg_buffer3 = 0, $vararg_buffer30 = 0, $vararg_buffer33 = 0, $vararg_buffer36 = 0, $vararg_buffer39 = 0, $vararg_buffer5 = 0, $vararg_buffer8 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer39 = sp + 120|0;
 $vararg_buffer36 = sp + 112|0;
 $vararg_buffer33 = sp + 104|0;
 $vararg_buffer30 = sp + 96|0;
 $vararg_buffer27 = sp + 88|0;
 $vararg_buffer24 = sp + 80|0;
 $vararg_buffer22 = sp + 72|0;
 $vararg_buffer20 = sp + 64|0;
 $vararg_buffer17 = sp + 56|0;
 $vararg_buffer14 = sp + 48|0;
 $vararg_buffer11 = sp + 40|0;
 $vararg_buffer8 = sp + 32|0;
 $vararg_buffer5 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $0 = $freq;
 $1 = (_SDL_WasInit(17)|0);
 $2 = ($1|0)==(17);
 if ($2) {
  _DebugMessage(5,(gb + (2349) | 0),$vararg_buffer);
  _SDL_PauseAudio(1);
  _SDL_CloseAudio();
 } else {
  _DebugMessage(5,(gb + (2410) | 0),$vararg_buffer1);
  $3 = HEAP32[(gb + (28) | 0)>>2]|0;
  HEAP32[$vararg_buffer3>>2] = $3;
  _DebugMessage(5,(gb + (2452) | 0),$vararg_buffer3);
  $4 = HEAP32[(gb + (12) | 0)>>2]|0;
  HEAP32[$vararg_buffer5>>2] = $4;
  _DebugMessage(5,(gb + (2487) | 0),$vararg_buffer5);
  $5 = HEAP32[(gb + (8) | 0)>>2]|0;
  HEAP32[$vararg_buffer8>>2] = $5;
  _DebugMessage(5,(gb + (2531) | 0),$vararg_buffer8);
  _InitializeSDL();
 }
 $6 = HEAP32[(gb + (3296) | 0)>>2]|0;
 $7 = ($6|0)==(1);
 if ($7) {
  STACKTOP = sp;return;
 }
 $8 = $0;
 HEAP32[(gb + (0) | 0)>>2] = $8;
 $9 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $10 = ($9|0)!=(0|0);
 if ($10) {
  $11 = HEAP32[(gb + (3324) | 0)>>2]|0;
  _free(($11|0));
 }
 $12 = (_malloc(24)|0);
 $desired = $12;
 $13 = (_malloc(24)|0);
 $obtained = $13;
 $14 = $0;
 $15 = ($14|0)<(11025);
 do {
  if ($15) {
   HEAP32[(gb + (3316) | 0)>>2] = 11025;
  } else {
   $16 = $0;
   $17 = ($16|0)<(22050);
   if ($17) {
    HEAP32[(gb + (3316) | 0)>>2] = 22050;
    break;
   } else {
    HEAP32[(gb + (3316) | 0)>>2] = 44100;
    break;
   }
  }
 } while(0);
 $18 = HEAP32[(gb + (3316) | 0)>>2]|0;
 $19 = $desired;
 HEAP32[$19>>2] = $18;
 $20 = $desired;
 $21 = HEAP32[$20>>2]|0;
 HEAP32[$vararg_buffer11>>2] = $21;
 _DebugMessage(5,(gb + (2568) | 0),$vararg_buffer11);
 $22 = $desired;
 $23 = ((($22)) + 4|0);
 HEAP16[$23>>1] = -32752;
 $24 = $desired;
 $25 = ((($24)) + 4|0);
 $26 = HEAP16[$25>>1]|0;
 $27 = $26&65535;
 HEAP32[$vararg_buffer14>>2] = $27;
 _DebugMessage(5,(gb + (2596) | 0),$vararg_buffer14);
 $28 = $desired;
 $29 = ((($28)) + 6|0);
 HEAP8[$29>>0] = 2;
 $30 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $31 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $32 = (mftCall_iii($30|0,($31|0),((gb + (920) | 0)|0))|0);
 HEAP32[(gb + (28) | 0)>>2] = $32;
 $33 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $34 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $35 = (mftCall_iii($33|0,($34|0),((gb + (1052) | 0)|0))|0);
 HEAP32[(gb + (12) | 0)>>2] = $35;
 $36 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $37 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $38 = (mftCall_iii($36|0,($37|0),((gb + (1384) | 0)|0))|0);
 HEAP32[(gb + (8) | 0)>>2] = $38;
 $39 = HEAP32[(gb + (8) | 0)>>2]|0;
 $40 = $39&65535;
 $41 = $desired;
 $42 = ((($41)) + 8|0);
 HEAP16[$42>>1] = $40;
 $43 = $desired;
 $44 = ((($43)) + 16|0);
 HEAP32[$44>>2] = (fb + (1) | 0);
 $45 = $desired;
 $46 = ((($45)) + 20|0);
 HEAP32[$46>>2] = 0;
 HEAP32[(gb + (16) | 0)>>2] = 1;
 $47 = $desired;
 $48 = $obtained;
 $49 = (_SDL_OpenAudio(($47|0),($48|0))|0);
 $50 = ($49|0)<(0);
 if ($50) {
  $51 = (_SDL_GetError()|0);
  HEAP32[$vararg_buffer17>>2] = $51;
  _DebugMessage(1,(gb + (2619) | 0),$vararg_buffer17);
  HEAP32[(gb + (3296) | 0)>>2] = 1;
  STACKTOP = sp;return;
 }
 $52 = $desired;
 $53 = ((($52)) + 4|0);
 $54 = HEAP16[$53>>1]|0;
 $55 = $54&65535;
 $56 = $obtained;
 $57 = ((($56)) + 4|0);
 $58 = HEAP16[$57>>1]|0;
 $59 = $58&65535;
 $60 = ($55|0)!=($59|0);
 if ($60) {
  _DebugMessage(2,(gb + (2643) | 0),$vararg_buffer20);
 }
 $61 = $desired;
 $62 = HEAP32[$61>>2]|0;
 $63 = $obtained;
 $64 = HEAP32[$63>>2]|0;
 $65 = ($62|0)!=($64|0);
 if ($65) {
  _DebugMessage(2,(gb + (2689) | 0),$vararg_buffer22);
 }
 $66 = $desired;
 _free(($66|0));
 $67 = $obtained;
 HEAP32[(gb + (3324) | 0)>>2] = $67;
 $68 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $69 = HEAP32[$68>>2]|0;
 HEAP32[(gb + (3316) | 0)>>2] = $69;
 $70 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $71 = ((($70)) + 8|0);
 $72 = HEAP16[$71>>1]|0;
 $73 = $72&65535;
 HEAP32[(gb + (8) | 0)>>2] = $73;
 $74 = HEAP32[(gb + (12) | 0)>>2]|0;
 $75 = HEAP32[(gb + (8) | 0)>>2]|0;
 $76 = ($74>>>0)<($75>>>0);
 if ($76) {
  $77 = HEAP32[(gb + (8) | 0)>>2]|0;
  HEAP32[(gb + (12) | 0)>>2] = $77;
 }
 $78 = HEAP32[(gb + (28) | 0)>>2]|0;
 $79 = HEAP32[(gb + (12) | 0)>>2]|0;
 $80 = ($78>>>0)<($79>>>0);
 if ($80) {
  $81 = HEAP32[(gb + (12) | 0)>>2]|0;
  HEAP32[(gb + (28) | 0)>>2] = $81;
 }
 $82 = HEAP32[(gb + (28) | 0)>>2]|0;
 $83 = HEAP32[(gb + (8) | 0)>>2]|0;
 $84 = $83<<1;
 $85 = ($82>>>0)<($84>>>0);
 if ($85) {
  $86 = HEAP32[(gb + (8) | 0)>>2]|0;
  $87 = $86<<1;
  HEAP32[(gb + (28) | 0)>>2] = $87;
 }
 _CreatePrimaryBuffer();
 $88 = HEAP32[(gb + (3248) | 0)>>2]|0;
 $89 = ($88|0)!=(0|0);
 if ($89) {
  $90 = HEAP32[(gb + (3248) | 0)>>2]|0;
  _free(($90|0));
 }
 $91 = HEAP32[(gb + (8) | 0)>>2]|0;
 $92 = $91<<2;
 $93 = (_malloc(($92|0))|0);
 HEAP32[(gb + (3248) | 0)>>2] = $93;
 $94 = HEAP32[(gb + (3320) | 0)>>2]|0;
 $95 = ($94|0)==(0);
 if ($95) {
  $96 = (_SDL_GetTicks()|0);
  HEAP32[(gb + (3320) | 0)>>2] = $96;
 }
 $97 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $98 = HEAP32[$97>>2]|0;
 HEAP32[$vararg_buffer24>>2] = $98;
 _DebugMessage(5,(gb + (2732) | 0),$vararg_buffer24);
 $99 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $100 = ((($99)) + 4|0);
 $101 = HEAP16[$100>>1]|0;
 $102 = $101&65535;
 HEAP32[$vararg_buffer27>>2] = $102;
 _DebugMessage(5,(gb + (2746) | 0),$vararg_buffer27);
 $103 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $104 = ((($103)) + 6|0);
 $105 = HEAP8[$104>>0]|0;
 $106 = $105&255;
 HEAP32[$vararg_buffer30>>2] = $106;
 _DebugMessage(5,(gb + (2757) | 0),$vararg_buffer30);
 $107 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $108 = ((($107)) + 7|0);
 $109 = HEAP8[$108>>0]|0;
 $110 = $109&255;
 HEAP32[$vararg_buffer33>>2] = $110;
 _DebugMessage(5,(gb + (2770) | 0),$vararg_buffer33);
 $111 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $112 = ((($111)) + 8|0);
 $113 = HEAP16[$112>>1]|0;
 $114 = $113&65535;
 HEAP32[$vararg_buffer36>>2] = $114;
 _DebugMessage(5,(gb + (2782) | 0),$vararg_buffer36);
 $115 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $116 = ((($115)) + 12|0);
 $117 = HEAP32[$116>>2]|0;
 HEAP32[$vararg_buffer39>>2] = $117;
 _DebugMessage(5,(gb + (2794) | 0),$vararg_buffer39);
 $118 = HEAP32[(gb + (20) | 0)>>2]|0;
 $119 = $118<<7;
 $120 = (($119|0) / 100)&-1;
 HEAP32[(gb + (32) | 0)>>2] = $120;
 STACKTOP = sp;return;
}
function _AiLenChanged() {
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0;
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0;
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $CurrLevel = 0, $CurrTime = 0, $ExpectedLevel = 0, $ExpectedTime = 0, $LenReg = 0, $WaitTime = 0, $i = 0, $or$cond = 0;
 var $p = 0, $vararg_buffer = 0, $vararg_buffer11 = 0, $vararg_buffer2 = 0, $vararg_buffer8 = 0, $vararg_ptr4 = 0, $vararg_ptr5 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer11 = sp + 40|0;
 $vararg_buffer8 = sp + 32|0;
 $vararg_buffer2 = sp + 8|0;
 $vararg_buffer = sp;
 $0 = HEAP32[(gb + (3296) | 0)>>2]|0;
 $1 = ($0|0)!=(1);
 $2 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $3 = ($2|0)!=(0);
 $or$cond = $1 & $3;
 if (!($or$cond)) {
  STACKTOP = sp;return;
 }
 $4 = HEAP32[((((gb + (3252) | 0)) + 20|0))>>2]|0;
 $5 = HEAP32[$4>>2]|0;
 $LenReg = $5;
 $6 = HEAP32[(gb + (3252) | 0)>>2]|0;
 $7 = HEAP32[((((gb + (3252) | 0)) + 16|0))>>2]|0;
 $8 = HEAP32[$7>>2]|0;
 $9 = $8 & 16777215;
 $10 = (($6) + ($9)|0);
 $p = $10;
 $11 = HEAP32[(gb + (3300) | 0)>>2]|0;
 $12 = $LenReg;
 $13 = (($11) + ($12))|0;
 $14 = HEAP32[(gb + (3304) | 0)>>2]|0;
 $15 = ($13>>>0)<($14>>>0);
 if ($15) {
  _SDL_LockAudio();
  $i = 0;
  while(1) {
   $16 = $i;
   $17 = $LenReg;
   $18 = ($16>>>0)<($17>>>0);
   if (!($18)) {
    break;
   }
   $19 = HEAP32[(gb + (3308) | 0)>>2]|0;
   $20 = ($19|0)==(0);
   $21 = $i;
   if ($20) {
    $22 = (($21) + 2)|0;
    $23 = $p;
    $24 = (($23) + ($22)|0);
    $25 = HEAP8[$24>>0]|0;
    $26 = HEAP32[(gb + (3300) | 0)>>2]|0;
    $27 = $i;
    $28 = (($26) + ($27))|0;
    $29 = HEAP32[(gb + (3312) | 0)>>2]|0;
    $30 = (($29) + ($28)|0);
    HEAP8[$30>>0] = $25;
    $31 = $i;
    $32 = (($31) + 3)|0;
    $33 = $p;
    $34 = (($33) + ($32)|0);
    $35 = HEAP8[$34>>0]|0;
    $36 = HEAP32[(gb + (3300) | 0)>>2]|0;
    $37 = $i;
    $38 = (($36) + ($37))|0;
    $39 = (($38) + 1)|0;
    $40 = HEAP32[(gb + (3312) | 0)>>2]|0;
    $41 = (($40) + ($39)|0);
    HEAP8[$41>>0] = $35;
    $42 = $i;
    $43 = $p;
    $44 = (($43) + ($42)|0);
    $45 = HEAP8[$44>>0]|0;
    $46 = HEAP32[(gb + (3300) | 0)>>2]|0;
    $47 = $i;
    $48 = (($46) + ($47))|0;
    $49 = (($48) + 2)|0;
    $50 = HEAP32[(gb + (3312) | 0)>>2]|0;
    $51 = (($50) + ($49)|0);
    HEAP8[$51>>0] = $45;
    $52 = $i;
    $53 = (($52) + 1)|0;
    $54 = $p;
    $55 = (($54) + ($53)|0);
    $56 = HEAP8[$55>>0]|0;
    $57 = HEAP32[(gb + (3300) | 0)>>2]|0;
    $58 = $i;
    $59 = (($57) + ($58))|0;
    $60 = (($59) + 3)|0;
    $61 = HEAP32[(gb + (3312) | 0)>>2]|0;
    $62 = (($61) + ($60)|0);
    HEAP8[$62>>0] = $56;
   } else {
    $63 = $p;
    $64 = (($63) + ($21)|0);
    $65 = HEAP8[$64>>0]|0;
    $66 = HEAP32[(gb + (3300) | 0)>>2]|0;
    $67 = $i;
    $68 = (($66) + ($67))|0;
    $69 = HEAP32[(gb + (3312) | 0)>>2]|0;
    $70 = (($69) + ($68)|0);
    HEAP8[$70>>0] = $65;
    $71 = $i;
    $72 = (($71) + 1)|0;
    $73 = $p;
    $74 = (($73) + ($72)|0);
    $75 = HEAP8[$74>>0]|0;
    $76 = HEAP32[(gb + (3300) | 0)>>2]|0;
    $77 = $i;
    $78 = (($76) + ($77))|0;
    $79 = (($78) + 1)|0;
    $80 = HEAP32[(gb + (3312) | 0)>>2]|0;
    $81 = (($80) + ($79)|0);
    HEAP8[$81>>0] = $75;
    $82 = $i;
    $83 = (($82) + 2)|0;
    $84 = $p;
    $85 = (($84) + ($83)|0);
    $86 = HEAP8[$85>>0]|0;
    $87 = HEAP32[(gb + (3300) | 0)>>2]|0;
    $88 = $i;
    $89 = (($87) + ($88))|0;
    $90 = (($89) + 2)|0;
    $91 = HEAP32[(gb + (3312) | 0)>>2]|0;
    $92 = (($91) + ($90)|0);
    HEAP8[$92>>0] = $86;
    $93 = $i;
    $94 = (($93) + 3)|0;
    $95 = $p;
    $96 = (($95) + ($94)|0);
    $97 = HEAP8[$96>>0]|0;
    $98 = HEAP32[(gb + (3300) | 0)>>2]|0;
    $99 = $i;
    $100 = (($98) + ($99))|0;
    $101 = (($100) + 3)|0;
    $102 = HEAP32[(gb + (3312) | 0)>>2]|0;
    $103 = (($102) + ($101)|0);
    HEAP8[$103>>0] = $97;
   }
   $104 = $i;
   $105 = (($104) + 4)|0;
   $i = $105;
  }
  $106 = $i;
  $107 = HEAP32[(gb + (3300) | 0)>>2]|0;
  $108 = (($107) + ($106))|0;
  HEAP32[(gb + (3300) | 0)>>2] = $108;
  _SDL_UnlockAudio();
 } else {
  _DebugMessage(2,(gb + (2065) | 0),$vararg_buffer);
 }
 $109 = HEAP32[(gb + (3300) | 0)>>2]|0;
 $110 = (($109>>>0) / 4)&-1;
 $111 = HEAP32[(gb + (3316) | 0)>>2]|0;
 $112 = ($111|0)<(0);
 $113 = $112 << 31 >> 31;
 $114 = (___muldi3(($110|0),0,($111|0),($113|0))|0);
 $115 = (getTempRet0() | 0);
 $116 = (___muldi3(($114|0),($115|0),100,0)|0);
 $117 = (getTempRet0() | 0);
 $118 = HEAP32[(gb + (0) | 0)>>2]|0;
 $119 = HEAP32[(gb + (4) | 0)>>2]|0;
 $120 = Math_imul($118, $119)|0;
 $121 = (___divdi3(($116|0),($117|0),($120|0),0)|0);
 $122 = (getTempRet0() | 0);
 $CurrLevel = $121;
 $123 = (_SDL_GetTicks()|0);
 $CurrTime = $123;
 $124 = HEAP32[(gb + (3320) | 0)>>2]|0;
 $125 = HEAP32[(gb + (8) | 0)>>2]|0;
 $126 = ($125*1000)|0;
 $127 = HEAP32[(gb + (3316) | 0)>>2]|0;
 $128 = (($126>>>0) / ($127>>>0))&-1;
 $129 = (($124) + ($128))|0;
 $ExpectedTime = $129;
 $130 = $CurrLevel;
 $ExpectedLevel = $130;
 $131 = $CurrTime;
 $132 = $ExpectedTime;
 $133 = ($131>>>0)<($132>>>0);
 if ($133) {
  $134 = $ExpectedTime;
  $135 = $CurrTime;
  $136 = (($134) - ($135))|0;
  $137 = HEAP32[(gb + (3316) | 0)>>2]|0;
  $138 = Math_imul($136, $137)|0;
  $139 = (($138>>>0) / 1000)&-1;
  $140 = $ExpectedLevel;
  $141 = (($140) + ($139))|0;
  $ExpectedLevel = $141;
 }
 $142 = $CurrTime;
 $143 = (($142>>>0) % 1000)&-1;
 $144 = $LenReg;
 $145 = $ExpectedTime;
 $146 = $CurrTime;
 $147 = (($145) - ($146))|0;
 $148 = $CurrLevel;
 $149 = $ExpectedLevel;
 HEAP32[$vararg_buffer2>>2] = $143;
 $vararg_ptr4 = ((($vararg_buffer2)) + 4|0);
 HEAP32[$vararg_ptr4>>2] = $144;
 $vararg_ptr5 = ((($vararg_buffer2)) + 8|0);
 HEAP32[$vararg_ptr5>>2] = $147;
 $vararg_ptr6 = ((($vararg_buffer2)) + 12|0);
 HEAP32[$vararg_ptr6>>2] = $148;
 $vararg_ptr7 = ((($vararg_buffer2)) + 16|0);
 HEAP32[$vararg_ptr7>>2] = $149;
 _DebugMessage(5,(gb + (2104) | 0),$vararg_buffer2);
 $150 = $ExpectedLevel;
 $151 = HEAP32[(gb + (12) | 0)>>2]|0;
 $152 = HEAP32[(gb + (3316) | 0)>>2]|0;
 $153 = (($152|0) / 100)&-1;
 $154 = (($151) + ($153))|0;
 $155 = ($150>>>0)>=($154>>>0);
 $156 = $ExpectedLevel;
 if ($155) {
  $157 = HEAP32[(gb + (12) | 0)>>2]|0;
  $158 = (($156) - ($157))|0;
  $159 = ($158*1000)|0;
  $160 = HEAP32[(gb + (3316) | 0)>>2]|0;
  $161 = (($159>>>0) / ($160>>>0))&-1;
  $WaitTime = $161;
  $162 = $WaitTime;
  HEAP32[$vararg_buffer8>>2] = $162;
  _DebugMessage(5,(gb + (2194) | 0),$vararg_buffer8);
  $163 = HEAP32[(gb + (16) | 0)>>2]|0;
  $164 = ($163|0)!=(0);
  if ($164) {
   _SDL_PauseAudio(0);
  }
  HEAP32[(gb + (16) | 0)>>2] = 0;
  $165 = $WaitTime;
  _SDL_Delay(($165|0));
  STACKTOP = sp;return;
 }
 $166 = HEAP32[(gb + (8) | 0)>>2]|0;
 $167 = ($156>>>0)<($166>>>0);
 if ($167) {
  _DebugMessage(5,(gb + (2227) | 0),$vararg_buffer11);
  $168 = HEAP32[(gb + (16) | 0)>>2]|0;
  $169 = ($168|0)!=(0);
  if (!($169)) {
   _SDL_PauseAudio(1);
  }
  HEAP32[(gb + (16) | 0)>>2] = 1;
  STACKTOP = sp;return;
 } else {
  $170 = HEAP32[(gb + (16) | 0)>>2]|0;
  $171 = ($170|0)!=(0);
  if ($171) {
   _SDL_PauseAudio(0);
  }
  HEAP32[(gb + (16) | 0)>>2] = 0;
  STACKTOP = sp;return;
 }
}
function _InitiateAudio($Audio_Info) {
 $Audio_Info = $Audio_Info|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $1 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $2 = ($1|0)!=(0);
 if ($2) {
  dest=(gb + (3252) | 0); src=$Audio_Info; stop=dest+44|0; do { HEAP32[dest>>2]=HEAP32[src>>2]|0; dest=dest+4|0; src=src+4|0; } while ((dest|0) < (stop|0));
  $0 = 1;
  $3 = $0;
  STACKTOP = sp;return ($3|0);
 } else {
  $0 = 0;
  $3 = $0;
  STACKTOP = sp;return ($3|0);
 }
 return (0)|0;
}
function _RomOpen() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $1 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $2 = ($1|0)!=(0);
 if ($2) {
  _ReadConfig();
  $3 = HEAP32[(gb + (0) | 0)>>2]|0;
  _InitializeAudio($3);
  $0 = 1;
 } else {
  $0 = 0;
 }
 $4 = $0;
 STACKTOP = sp;return ($4|0);
}
function _ReadConfig() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $resampler_id = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $0 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $1 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $2 = (mftCall_iii($0|0,($1|0),((gb + (801) | 0)|0))|0);
 HEAP32[(gb + (0) | 0)>>2] = $2;
 $3 = HEAP32[(gb + (3224) | 0)>>2]|0;
 $4 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $5 = (mftCall_iii($3|0,($4|0),((gb + (876) | 0)|0))|0);
 HEAP32[(gb + (3308) | 0)>>2] = $5;
 $6 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $7 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $8 = (mftCall_iii($6|0,($7|0),((gb + (920) | 0)|0))|0);
 HEAP32[(gb + (28) | 0)>>2] = $8;
 $9 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $10 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $11 = (mftCall_iii($9|0,($10|0),((gb + (1052) | 0)|0))|0);
 HEAP32[(gb + (12) | 0)>>2] = $11;
 $12 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $13 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $14 = (mftCall_iii($12|0,($13|0),((gb + (1384) | 0)|0))|0);
 HEAP32[(gb + (8) | 0)>>2] = $14;
 $15 = HEAP32[(gb + (3228) | 0)>>2]|0;
 $16 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $17 = (mftCall_iii($15|0,($16|0),((gb + (1567) | 0)|0))|0);
 $resampler_id = $17;
 $18 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $19 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $20 = (mftCall_iii($18|0,($19|0),((gb + (1739) | 0)|0))|0);
 HEAP32[(gb + (36) | 0)>>2] = $20;
 $21 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $22 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $23 = (mftCall_iii($21|0,($22|0),((gb + (1864) | 0)|0))|0);
 HEAP32[(gb + (24) | 0)>>2] = $23;
 $24 = HEAP32[(gb + (3216) | 0)>>2]|0;
 $25 = HEAP32[(gb + (3240) | 0)>>2]|0;
 $26 = (mftCall_iii($24|0,($25|0),((gb + (1943) | 0)|0))|0);
 HEAP32[(gb + (20) | 0)>>2] = $26;
 $27 = $resampler_id;
 $28 = ($27|0)!=(0|0);
 if (!($28)) {
  HEAP32[(gb + (3336) | 0)>>2] = 0;
  _DebugMessage(2,(gb + (3058) | 0),$vararg_buffer);
  STACKTOP = sp;return;
 }
 $29 = $resampler_id;
 $30 = (_strcmp(($29|0),((gb + (1576) | 0)|0))|0);
 $31 = ($30|0)==(0);
 if ($31) {
  HEAP32[(gb + (3336) | 0)>>2] = 0;
  STACKTOP = sp;return;
 } else {
  $32 = $resampler_id;
  HEAP32[$vararg_buffer1>>2] = $32;
  _DebugMessage(2,(gb + (3119) | 0),$vararg_buffer1);
  HEAP32[(gb + (3336) | 0)>>2] = 0;
  STACKTOP = sp;return;
 }
}
function _RomClosed() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $vararg_buffer = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $1 = ($0|0)==(0);
 $2 = HEAP32[(gb + (3296) | 0)>>2]|0;
 $3 = ($2|0)==(1);
 $or$cond = $1 | $3;
 if ($or$cond) {
  STACKTOP = sp;return;
 }
 _DebugMessage(5,(gb + (2307) | 0),$vararg_buffer);
 _SDL_PauseAudio(1);
 _SDL_CloseAudio();
 $4 = HEAP32[(gb + (3312) | 0)>>2]|0;
 $5 = ($4|0)!=(0|0);
 if ($5) {
  HEAP32[(gb + (3304) | 0)>>2] = 0;
  $6 = HEAP32[(gb + (3312) | 0)>>2]|0;
  _free(($6|0));
  HEAP32[(gb + (3312) | 0)>>2] = 0;
 }
 $7 = HEAP32[(gb + (3248) | 0)>>2]|0;
 $8 = ($7|0)!=(0|0);
 if ($8) {
  $9 = HEAP32[(gb + (3248) | 0)>>2]|0;
  _free(($9|0));
  HEAP32[(gb + (3248) | 0)>>2] = 0;
 }
 $10 = HEAP32[(gb + (3324) | 0)>>2]|0;
 $11 = ($10|0)!=(0|0);
 if ($11) {
  $12 = HEAP32[(gb + (3324) | 0)>>2]|0;
  _free(($12|0));
 }
 HEAP32[(gb + (3324) | 0)>>2] = 0;
 $13 = (_SDL_WasInit(16)|0);
 $14 = ($13|0)!=(0);
 if ($14) {
  _SDL_QuitSubSystem(16);
 }
 $15 = (_SDL_WasInit(1)|0);
 $16 = ($15|0)!=(0);
 if (!($16)) {
  STACKTOP = sp;return;
 }
 _SDL_QuitSubSystem(1);
 STACKTOP = sp;return;
}
function _ProcessAList() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function _SetSpeedFactor($percentage) {
 $percentage = $percentage|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $percentage;
 $1 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $2 = ($1|0)!=(0);
 if (!($2)) {
  STACKTOP = sp;return;
 }
 $3 = $0;
 $4 = ($3|0)>=(10);
 $5 = $0;
 $6 = ($5|0)<=(300);
 $or$cond = $4 & $6;
 if ($or$cond) {
  $7 = $0;
  HEAP32[(gb + (4) | 0)>>2] = $7;
 }
 _CreatePrimaryBuffer();
 STACKTOP = sp;return;
}
function _CreatePrimaryBuffer() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $newPrimaryBuffer = 0, $newPrimaryBytes = 0, $oldPrimaryBuffer = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = HEAP32[(gb + (28) | 0)>>2]|0;
 $1 = HEAP32[(gb + (0) | 0)>>2]|0;
 $2 = ($1|0)<(0);
 $3 = $2 << 31 >> 31;
 $4 = (___muldi3(($0|0),0,($1|0),($3|0))|0);
 $5 = (getTempRet0() | 0);
 $6 = HEAP32[(gb + (4) | 0)>>2]|0;
 $7 = (___muldi3(($4|0),($5|0),($6|0),0)|0);
 $8 = (getTempRet0() | 0);
 $9 = HEAP32[(gb + (3316) | 0)>>2]|0;
 $10 = ($9*100)|0;
 $11 = ($10|0)<(0);
 $12 = $11 << 31 >> 31;
 $13 = (___divdi3(($7|0),($8|0),($10|0),($12|0))|0);
 $14 = (getTempRet0() | 0);
 $15 = $13<<2;
 $newPrimaryBytes = $15;
 $16 = HEAP32[(gb + (3312) | 0)>>2]|0;
 $17 = ($16|0)==(0|0);
 $18 = $newPrimaryBytes;
 if ($17) {
  HEAP32[$vararg_buffer>>2] = $18;
  _DebugMessage(5,(gb + (3012) | 0),$vararg_buffer);
  $19 = $newPrimaryBytes;
  $20 = (_malloc(($19|0))|0);
  HEAP32[(gb + (3312) | 0)>>2] = $20;
  $21 = HEAP32[(gb + (3312) | 0)>>2]|0;
  $22 = $newPrimaryBytes;
  _memset(($21|0),0,($22|0))|0;
  $23 = $newPrimaryBytes;
  HEAP32[(gb + (3304) | 0)>>2] = $23;
  STACKTOP = sp;return;
 }
 $24 = HEAP32[(gb + (3304) | 0)>>2]|0;
 $25 = ($18>>>0)>($24>>>0);
 if (!($25)) {
  STACKTOP = sp;return;
 }
 $26 = $newPrimaryBytes;
 $27 = (_malloc(($26|0))|0);
 $newPrimaryBuffer = $27;
 $28 = HEAP32[(gb + (3312) | 0)>>2]|0;
 $oldPrimaryBuffer = $28;
 _SDL_LockAudio();
 $29 = $newPrimaryBuffer;
 $30 = $oldPrimaryBuffer;
 $31 = HEAP32[(gb + (3304) | 0)>>2]|0;
 _memcpy(($29|0),($30|0),($31|0))|0;
 $32 = $newPrimaryBuffer;
 $33 = HEAP32[(gb + (3304) | 0)>>2]|0;
 $34 = (($32) + ($33)|0);
 $35 = $newPrimaryBytes;
 $36 = HEAP32[(gb + (3304) | 0)>>2]|0;
 $37 = (($35) - ($36))|0;
 _memset(($34|0),0,($37|0))|0;
 $38 = $newPrimaryBuffer;
 HEAP32[(gb + (3312) | 0)>>2] = $38;
 $39 = $newPrimaryBytes;
 HEAP32[(gb + (3304) | 0)>>2] = $39;
 _SDL_UnlockAudio();
 $40 = $oldPrimaryBuffer;
 _free(($40|0));
 STACKTOP = sp;return;
}
function _VolumeMute() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $1 = ($0|0)!=(0);
 if (!($1)) {
  return;
 }
 $2 = HEAP32[(gb + (3328) | 0)>>2]|0;
 $3 = ($2|0)!=(0);
 if (!($3)) {
  $4 = (_VolumeGetUnmutedLevel()|0);
  HEAP32[(gb + (20) | 0)>>2] = $4;
 }
 $5 = HEAP32[(gb + (3328) | 0)>>2]|0;
 $6 = ($5|0)!=(0);
 $7 = $6 ^ 1;
 $8 = $7&1;
 HEAP32[(gb + (3328) | 0)>>2] = $8;
 _VolumeCommit();
 return;
}
function _VolumeGetUnmutedLevel() {
 var $0 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[(gb + (20) | 0)>>2]|0;
 return ($0|0);
}
function _VolumeCommit() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $levelToCommit = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = HEAP32[(gb + (3328) | 0)>>2]|0;
 $1 = ($0|0)!=(0);
 $2 = HEAP32[(gb + (20) | 0)>>2]|0;
 $3 = $1 ? 0 : $2;
 $levelToCommit = $3;
 $4 = $levelToCommit;
 $5 = $4<<7;
 $6 = (($5|0) / 100)&-1;
 HEAP32[(gb + (32) | 0)>>2] = $6;
 STACKTOP = sp;return;
}
function _VolumeUp() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $1 = ($0|0)!=(0);
 if (!($1)) {
  return;
 }
 $2 = (_VolumeGetUnmutedLevel()|0);
 $3 = HEAP32[(gb + (24) | 0)>>2]|0;
 $4 = (($2) + ($3))|0;
 _VolumeSetLevel($4);
 return;
}
function _VolumeSetLevel($level) {
 $level = $level|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $level;
 $1 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $2 = ($1|0)!=(0);
 if (!($2)) {
  STACKTOP = sp;return;
 }
 HEAP32[(gb + (3328) | 0)>>2] = 0;
 $3 = $0;
 HEAP32[(gb + (20) | 0)>>2] = $3;
 $4 = HEAP32[(gb + (20) | 0)>>2]|0;
 $5 = ($4|0)<(0);
 if ($5) {
  HEAP32[(gb + (20) | 0)>>2] = 0;
 } else {
  $6 = HEAP32[(gb + (20) | 0)>>2]|0;
  $7 = ($6|0)>(100);
  if ($7) {
   HEAP32[(gb + (20) | 0)>>2] = 100;
  }
 }
 _VolumeCommit();
 STACKTOP = sp;return;
}
function _VolumeDown() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $1 = ($0|0)!=(0);
 if (!($1)) {
  return;
 }
 $2 = (_VolumeGetUnmutedLevel()|0);
 $3 = HEAP32[(gb + (24) | 0)>>2]|0;
 $4 = (($2) - ($3))|0;
 _VolumeSetLevel($4);
 return;
}
function _VolumeGetLevel() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[(gb + (3328) | 0)>>2]|0;
 $1 = ($0|0)!=(0);
 if ($1) {
  $3 = 0;
  return ($3|0);
 }
 $2 = (_VolumeGetUnmutedLevel()|0);
 $3 = $2;
 return ($3|0);
}
function _VolumeGetString() {
 var $0 = 0, $1 = 0, $2 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = HEAP32[(gb + (3328) | 0)>>2]|0;
 $1 = ($0|0)!=(0);
 if ($1) {
  (_strcpy(((gb + (3340) | 0)|0),((gb + (2339) | 0)|0))|0);
  STACKTOP = sp;return ((gb + (3340) | 0)|0);
 } else {
  $2 = HEAP32[(gb + (20) | 0)>>2]|0;
  HEAP32[$vararg_buffer>>2] = $2;
  (_sprintf(((gb + (3340) | 0)|0),((gb + (2344) | 0)|0),($vararg_buffer|0))|0);
  STACKTOP = sp;return ((gb + (3340) | 0)|0);
 }
 return (0)|0;
}
function _InitializeSDL() {
 var $0 = 0, $1 = 0, $2 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 _DebugMessage(3,(gb + (2803) | 0),$vararg_buffer);
 $0 = (_SDL_Init(16)|0);
 $1 = ($0|0)<(0);
 if ($1) {
  _DebugMessage(1,(gb + (2839) | 0),$vararg_buffer1);
  $2 = (_SDL_GetError()|0);
  HEAP32[$vararg_buffer3>>2] = $2;
  (_printf(((gb + (2896) | 0)|0),($vararg_buffer3|0))|0);
  HEAP32[(gb + (3296) | 0)>>2] = 1;
  STACKTOP = sp;return;
 } else {
  HEAP32[(gb + (3296) | 0)>>2] = 0;
  STACKTOP = sp;return;
 }
}
function _my_audio_callback($userdata,$stream,$len) {
 $userdata = $userdata|0;
 $stream = $stream|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $SamplesNeeded = 0, $SamplesPresent = 0, $input_used = 0, $newsamplerate = 0, $oldsamplerate = 0, $vararg_buffer = 0, $vararg_buffer2 = 0, $vararg_ptr1 = 0, $vararg_ptr5 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer2 = sp + 8|0;
 $vararg_buffer = sp;
 $0 = $userdata;
 $1 = $stream;
 $2 = $len;
 $3 = HEAP32[(gb + (3244) | 0)>>2]|0;
 $4 = ($3|0)!=(0);
 if (!($4)) {
  STACKTOP = sp;return;
 }
 $5 = (_SDL_GetTicks()|0);
 HEAP32[(gb + (3320) | 0)>>2] = $5;
 $6 = HEAP32[(gb + (3316) | 0)>>2]|0;
 $7 = ($6*100)|0;
 $8 = HEAP32[(gb + (4) | 0)>>2]|0;
 $9 = (($7>>>0) / ($8>>>0))&-1;
 $newsamplerate = $9;
 $10 = HEAP32[(gb + (0) | 0)>>2]|0;
 $oldsamplerate = $10;
 $11 = HEAP32[(gb + (3300) | 0)>>2]|0;
 $12 = $2;
 $13 = $oldsamplerate;
 $14 = Math_imul($12, $13)|0;
 $15 = $newsamplerate;
 $16 = (($14>>>0) / ($15>>>0))&-1;
 $17 = ($11>>>0)>($16>>>0);
 if ($17) {
  $18 = HEAP32[(gb + (3312) | 0)>>2]|0;
  $19 = HEAP32[(gb + (3300) | 0)>>2]|0;
  $20 = $oldsamplerate;
  $21 = HEAP32[(gb + (3248) | 0)>>2]|0;
  $22 = $2;
  $23 = $newsamplerate;
  $24 = (_resample($18,$19,$20,$21,$22,$23)|0);
  $input_used = $24;
  $25 = $1;
  $26 = $2;
  _memset(($25|0),0,($26|0))|0;
  $27 = $1;
  $28 = HEAP32[(gb + (3248) | 0)>>2]|0;
  $29 = $2;
  $30 = HEAP32[(gb + (32) | 0)>>2]|0;
  _SDL_MixAudio(($27|0),($28|0),($29|0),($30|0));
  $31 = HEAP32[(gb + (3312) | 0)>>2]|0;
  $32 = $input_used;
  $33 = HEAP32[(gb + (3312) | 0)>>2]|0;
  $34 = (($33) + ($32)|0);
  $35 = HEAP32[(gb + (3300) | 0)>>2]|0;
  $36 = $input_used;
  $37 = (($35) - ($36))|0;
  _memmove(($31|0),($34|0),($37|0))|0;
  $38 = $input_used;
  $39 = HEAP32[(gb + (3300) | 0)>>2]|0;
  $40 = (($39) - ($38))|0;
  HEAP32[(gb + (3300) | 0)>>2] = $40;
  $41 = HEAP32[(gb + (3320) | 0)>>2]|0;
  $42 = (($41>>>0) % 1000)&-1;
  $43 = $2;
  $44 = (($43|0) / 4)&-1;
  HEAP32[$vararg_buffer>>2] = $42;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = $44;
  _DebugMessage(5,(gb + (2913) | 0),$vararg_buffer);
  STACKTOP = sp;return;
 } else {
  $45 = $2;
  $46 = $oldsamplerate;
  $47 = Math_imul($45, $46)|0;
  $48 = $newsamplerate;
  $49 = $48<<2;
  $50 = (($47|0) / ($49|0))&-1;
  $SamplesNeeded = $50;
  $51 = HEAP32[(gb + (3300) | 0)>>2]|0;
  $52 = (($51>>>0) / 4)&-1;
  $SamplesPresent = $52;
  $53 = HEAP32[(gb + (3332) | 0)>>2]|0;
  $54 = (($53) + 1)|0;
  HEAP32[(gb + (3332) | 0)>>2] = $54;
  $55 = HEAP32[(gb + (3320) | 0)>>2]|0;
  $56 = (($55>>>0) % 1000)&-1;
  $57 = HEAP32[(gb + (3332) | 0)>>2]|0;
  $58 = $SamplesPresent;
  $59 = $SamplesNeeded;
  HEAP32[$vararg_buffer2>>2] = $56;
  $vararg_ptr5 = ((($vararg_buffer2)) + 4|0);
  HEAP32[$vararg_ptr5>>2] = $57;
  $vararg_ptr6 = ((($vararg_buffer2)) + 8|0);
  HEAP32[$vararg_ptr6>>2] = $58;
  $vararg_ptr7 = ((($vararg_buffer2)) + 12|0);
  HEAP32[$vararg_ptr7>>2] = $59;
  _DebugMessage(5,(gb + (2953) | 0),$vararg_buffer2);
  $60 = $1;
  $61 = $2;
  _memset(($60|0),0,($61|0))|0;
  STACKTOP = sp;return;
 }
}
function _resample($input,$input_avail,$oldsamplerate,$output,$output_needed,$newsamplerate) {
 $input = $input|0;
 $input_avail = $input_avail|0;
 $oldsamplerate = $oldsamplerate|0;
 $output = $output|0;
 $output_needed = $output_needed|0;
 $newsamplerate = $newsamplerate|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $7 = 0, $8 = 0, $9 = 0, $const1 = 0, $const2 = 0, $criteria = 0, $dldf = 0, $i = 0, $j = 0, $pdest = 0, $psrc = 0, $sldf = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $1 = $input;
 $2 = $input_avail;
 $3 = $oldsamplerate;
 $4 = $output;
 $5 = $output_needed;
 $6 = $newsamplerate;
 $7 = $1;
 $psrc = $7;
 $8 = $4;
 $pdest = $8;
 $i = 0;
 $j = 0;
 $9 = $6;
 $10 = $3;
 $11 = ($9|0)>=($10|0);
 if (!($11)) {
  $i = 0;
  while(1) {
   $47 = $i;
   $48 = $5;
   $49 = (($48|0) / 4)&-1;
   $50 = ($47|0)<($49|0);
   if (!($50)) {
    break;
   }
   $51 = $i;
   $52 = $3;
   $53 = Math_imul($51, $52)|0;
   $54 = $6;
   $55 = (($53|0) / ($54|0))&-1;
   $j = $55;
   $56 = $j;
   $57 = $psrc;
   $58 = (($57) + ($56<<2)|0);
   $59 = HEAP32[$58>>2]|0;
   $60 = $i;
   $61 = $pdest;
   $62 = (($61) + ($60<<2)|0);
   HEAP32[$62>>2] = $59;
   $63 = $i;
   $64 = (($63) + 1)|0;
   $i = $64;
  }
  $65 = $j;
  $66 = $65<<2;
  $0 = $66;
  $67 = $0;
  STACKTOP = sp;return ($67|0);
 }
 $12 = $3;
 $sldf = $12;
 $13 = $sldf;
 $14 = $13<<1;
 $const2 = $14;
 $15 = $6;
 $dldf = $15;
 $16 = $const2;
 $17 = $dldf;
 $18 = $17<<1;
 $19 = (($16) - ($18))|0;
 $const1 = $19;
 $20 = $const2;
 $21 = $dldf;
 $22 = (($20) - ($21))|0;
 $criteria = $22;
 $i = 0;
 while(1) {
  $23 = $i;
  $24 = $5;
  $25 = (($24|0) / 4)&-1;
  $26 = ($23|0)<($25|0);
  $27 = $j;
  if (!($26)) {
   break;
  }
  $28 = $psrc;
  $29 = (($28) + ($27<<2)|0);
  $30 = HEAP32[$29>>2]|0;
  $31 = $i;
  $32 = $pdest;
  $33 = (($32) + ($31<<2)|0);
  HEAP32[$33>>2] = $30;
  $34 = $criteria;
  $35 = ($34|0)>=(0);
  if ($35) {
   $36 = $j;
   $37 = (($36) + 1)|0;
   $j = $37;
   $38 = $const1;
   $39 = $criteria;
   $40 = (($39) + ($38))|0;
   $criteria = $40;
  } else {
   $41 = $const2;
   $42 = $criteria;
   $43 = (($42) + ($41))|0;
   $criteria = $43;
  }
  $44 = $i;
  $45 = (($44) + 1)|0;
  $i = $45;
 }
 $46 = $27<<2;
 $0 = $46;
 $67 = $0;
 STACKTOP = sp;return ($67|0);
}
function _osal_dynlib_getproc($LibHandle,$pccProcedureName) {
 $LibHandle = $LibHandle|0;
 $pccProcedureName = $pccProcedureName|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $1 = $LibHandle;
 $2 = $pccProcedureName;
 $3 = $2;
 $4 = ($3|0)==(0|0);
 if ($4) {
  $0 = 0;
 } else {
  $5 = $1;
  $6 = $2;
  $7 = (_dlsym(($5|0),($6|0))|0);
  $0 = $7;
 }
 $8 = $0;
 STACKTOP = sp;return ($8|0);
}
function runPostSets() {
 var temp = 0;
}
function _i64Add(a, b, c, d) {
    /*
      x = a + b*2^32
      y = c + d*2^32
      result = l + h*2^32
    */
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a + c)>>>0;
    h = (b + d + (((l>>>0) < (a>>>0))|0))>>>0; // Add carry from low word to high word on overflow.
    return ((setTempRet0((h) | 0),l|0)|0);
  }
function _i64Subtract(a, b, c, d) {
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a - c)>>>0;
    h = (b - d)>>>0;
    h = (b - d - (((c>>>0) > (a>>>0))|0))>>>0; // Borrow one from high word to low word on underflow.
    return ((setTempRet0((h) | 0),l|0)|0);
  }
function _bitshift64Shl(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      setTempRet0(((high << bits) | ((low&(ander << (32 - bits))) >>> (32 - bits))) | 0);
      return low << bits;
    }
    setTempRet0((low << (bits - 32)) | 0);
    return 0;
  }
function _bitshift64Lshr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      setTempRet0((high >>> bits) | 0);
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    setTempRet0((0) | 0);
    return (high >>> (bits - 32))|0;
  }
function _bitshift64Ashr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      setTempRet0((high >> bits) | 0);
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    setTempRet0(((high|0) < 0 ? -1 : 0) | 0);
    return (high >> (bits - 32))|0;
  }
function _llvm_cttz_i32(x) {
    x = x|0;
    var ret = 0;
    ret = ((HEAP8[(((cttz_i8)+(x & 0xff))>>0)])|0);
    if ((ret|0) < 8) return ret|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 8)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 8)|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 16)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 16)|0;
    return (((HEAP8[(((cttz_i8)+(x >>> 24))>>0)])|0) + 24)|0;
  }

// ======== compiled code from system/lib/compiler-rt , see readme therein
function ___muldsi3($a, $b) {
  $a = $a | 0;
  $b = $b | 0;
  var $1 = 0, $2 = 0, $3 = 0, $6 = 0, $8 = 0, $11 = 0, $12 = 0;
  $1 = $a & 65535;
  $2 = $b & 65535;
  $3 = Math_imul($2, $1) | 0;
  $6 = $a >>> 16;
  $8 = ($3 >>> 16) + (Math_imul($2, $6) | 0) | 0;
  $11 = $b >>> 16;
  $12 = Math_imul($11, $1) | 0;
  return (setTempRet0(((($8 >>> 16) + (Math_imul($11, $6) | 0) | 0) + ((($8 & 65535) + $12 | 0) >>> 16) | 0) | 0), 0 | ($8 + $12 << 16 | $3 & 65535)) | 0;
}
function ___divdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $1$0 = 0, $1$1 = 0, $2$0 = 0, $2$1 = 0, $4$0 = 0, $4$1 = 0, $6$0 = 0, $7$0 = 0, $7$1 = 0, $8$0 = 0, $10$0 = 0;
  $1$0 = $a$1 >> 31 | (($a$1 | 0) < 0 ? -1 : 0) << 1;
  $1$1 = (($a$1 | 0) < 0 ? -1 : 0) >> 31 | (($a$1 | 0) < 0 ? -1 : 0) << 1;
  $2$0 = $b$1 >> 31 | (($b$1 | 0) < 0 ? -1 : 0) << 1;
  $2$1 = (($b$1 | 0) < 0 ? -1 : 0) >> 31 | (($b$1 | 0) < 0 ? -1 : 0) << 1;
  $4$0 = _i64Subtract($1$0 ^ $a$0, $1$1 ^ $a$1, $1$0, $1$1) | 0;
  $4$1 = (getTempRet0() | 0);
  $6$0 = _i64Subtract($2$0 ^ $b$0, $2$1 ^ $b$1, $2$0, $2$1) | 0;
  $7$0 = $2$0 ^ $1$0;
  $7$1 = $2$1 ^ $1$1;
  $8$0 = ___udivmoddi4($4$0, $4$1, $6$0, (getTempRet0() | 0), 0) | 0;
  $10$0 = _i64Subtract($8$0 ^ $7$0, (getTempRet0() | 0) ^ $7$1, $7$0, $7$1) | 0;
  return $10$0 | 0;
}
function ___remdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $rem = 0, $1$0 = 0, $1$1 = 0, $2$0 = 0, $2$1 = 0, $4$0 = 0, $4$1 = 0, $6$0 = 0, $10$0 = 0, $10$1 = 0, __stackBase__ = 0;
  __stackBase__ = STACKTOP;
  STACKTOP = STACKTOP + 16 | 0;
  $rem = __stackBase__ | 0;
  $1$0 = $a$1 >> 31 | (($a$1 | 0) < 0 ? -1 : 0) << 1;
  $1$1 = (($a$1 | 0) < 0 ? -1 : 0) >> 31 | (($a$1 | 0) < 0 ? -1 : 0) << 1;
  $2$0 = $b$1 >> 31 | (($b$1 | 0) < 0 ? -1 : 0) << 1;
  $2$1 = (($b$1 | 0) < 0 ? -1 : 0) >> 31 | (($b$1 | 0) < 0 ? -1 : 0) << 1;
  $4$0 = _i64Subtract($1$0 ^ $a$0, $1$1 ^ $a$1, $1$0, $1$1) | 0;
  $4$1 = (getTempRet0() | 0);
  $6$0 = _i64Subtract($2$0 ^ $b$0, $2$1 ^ $b$1, $2$0, $2$1) | 0;
  ___udivmoddi4($4$0, $4$1, $6$0, (getTempRet0() | 0), $rem) | 0;
  $10$0 = _i64Subtract(HEAP32[$rem >> 2] ^ $1$0, HEAP32[$rem + 4 >> 2] ^ $1$1, $1$0, $1$1) | 0;
  $10$1 = (getTempRet0() | 0);
  STACKTOP = __stackBase__;
  return (setTempRet0(($10$1) | 0), $10$0) | 0;
}
function ___muldi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $x_sroa_0_0_extract_trunc = 0, $y_sroa_0_0_extract_trunc = 0, $1$0 = 0, $1$1 = 0, $2 = 0;
  $x_sroa_0_0_extract_trunc = $a$0;
  $y_sroa_0_0_extract_trunc = $b$0;
  $1$0 = ___muldsi3($x_sroa_0_0_extract_trunc, $y_sroa_0_0_extract_trunc) | 0;
  $1$1 = (getTempRet0() | 0);
  $2 = Math_imul($a$1, $y_sroa_0_0_extract_trunc) | 0;
  return (setTempRet0((((Math_imul($b$1, $x_sroa_0_0_extract_trunc) | 0) + $2 | 0) + $1$1 | $1$1 & 0) | 0), 0 | $1$0 & -1) | 0;
}
function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $1$0 = 0;
  $1$0 = ___udivmoddi4($a$0, $a$1, $b$0, $b$1, 0) | 0;
  return $1$0 | 0;
}
function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  var $rem = 0, __stackBase__ = 0;
  __stackBase__ = STACKTOP;
  STACKTOP = STACKTOP + 16 | 0;
  $rem = __stackBase__ | 0;
  ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) | 0;
  STACKTOP = __stackBase__;
  return (setTempRet0((HEAP32[$rem + 4 >> 2] | 0) | 0), HEAP32[$rem >> 2] | 0) | 0;
}
function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
  $a$0 = $a$0 | 0;
  $a$1 = $a$1 | 0;
  $b$0 = $b$0 | 0;
  $b$1 = $b$1 | 0;
  $rem = $rem | 0;
  var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0;
  $n_sroa_0_0_extract_trunc = $a$0;
  $n_sroa_1_4_extract_shift$0 = $a$1;
  $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0;
  $d_sroa_0_0_extract_trunc = $b$0;
  $d_sroa_1_4_extract_shift$0 = $b$1;
  $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0;
  if (($n_sroa_1_4_extract_trunc | 0) == 0) {
    $4 = ($rem | 0) != 0;
    if (($d_sroa_1_4_extract_trunc | 0) == 0) {
      if ($4) {
        HEAP32[$rem >> 2] = ($n_sroa_0_0_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
        HEAP32[$rem + 4 >> 2] = 0;
      }
      $_0$1 = 0;
      $_0$0 = ($n_sroa_0_0_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
      return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
    } else {
      if (!$4) {
        $_0$1 = 0;
        $_0$0 = 0;
        return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
      }
      HEAP32[$rem >> 2] = $a$0 & -1;
      HEAP32[$rem + 4 >> 2] = $a$1 & 0;
      $_0$1 = 0;
      $_0$0 = 0;
      return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
    }
  }
  $17 = ($d_sroa_1_4_extract_trunc | 0) == 0;
  do {
    if (($d_sroa_0_0_extract_trunc | 0) == 0) {
      if ($17) {
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
          HEAP32[$rem + 4 >> 2] = 0;
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
        return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
      }
      if (($n_sroa_0_0_extract_trunc | 0) == 0) {
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = 0;
          HEAP32[$rem + 4 >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_1_4_extract_trunc >>> 0);
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_1_4_extract_trunc >>> 0) >>> 0;
        return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
      }
      $37 = $d_sroa_1_4_extract_trunc - 1 | 0;
      if (($37 & $d_sroa_1_4_extract_trunc | 0) == 0) {
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = 0 | $a$0 & -1;
          HEAP32[$rem + 4 >> 2] = $37 & $n_sroa_1_4_extract_trunc | $a$1 & 0;
        }
        $_0$1 = 0;
        $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0);
        return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
      }
      $49 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
      $51 = $49 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
      if ($51 >>> 0 <= 30) {
        $57 = $51 + 1 | 0;
        $58 = 31 - $51 | 0;
        $sr_1_ph = $57;
        $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | $n_sroa_0_0_extract_trunc >>> ($57 >>> 0);
        $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0);
        $q_sroa_0_1_ph = 0;
        $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58;
        break;
      }
      if (($rem | 0) == 0) {
        $_0$1 = 0;
        $_0$0 = 0;
        return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
      }
      HEAP32[$rem >> 2] = 0 | $a$0 & -1;
      HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
      $_0$1 = 0;
      $_0$0 = 0;
      return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
    } else {
      if (!$17) {
        $117 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
        $119 = $117 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        if ($119 >>> 0 <= 31) {
          $125 = $119 + 1 | 0;
          $126 = 31 - $119 | 0;
          $130 = $119 - 31 >> 31;
          $sr_1_ph = $125;
          $r_sroa_0_1_ph = $n_sroa_0_0_extract_trunc >>> ($125 >>> 0) & $130 | $n_sroa_1_4_extract_trunc << $126;
          $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($125 >>> 0) & $130;
          $q_sroa_0_1_ph = 0;
          $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126;
          break;
        }
        if (($rem | 0) == 0) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = 0 | $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
      }
      $66 = $d_sroa_0_0_extract_trunc - 1 | 0;
      if (($66 & $d_sroa_0_0_extract_trunc | 0) != 0) {
        $86 = (Math_clz32($d_sroa_0_0_extract_trunc | 0) | 0) + 33 | 0;
        $88 = $86 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        $89 = 64 - $88 | 0;
        $91 = 32 - $88 | 0;
        $92 = $91 >> 31;
        $95 = $88 - 32 | 0;
        $105 = $95 >> 31;
        $sr_1_ph = $88;
        $r_sroa_0_1_ph = $91 - 1 >> 31 & $n_sroa_1_4_extract_trunc >>> ($95 >>> 0) | ($n_sroa_1_4_extract_trunc << $91 | $n_sroa_0_0_extract_trunc >>> ($88 >>> 0)) & $105;
        $r_sroa_1_1_ph = $105 & $n_sroa_1_4_extract_trunc >>> ($88 >>> 0);
        $q_sroa_0_1_ph = $n_sroa_0_0_extract_trunc << $89 & $92;
        $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | $n_sroa_0_0_extract_trunc >>> ($95 >>> 0)) & $92 | $n_sroa_0_0_extract_trunc << $91 & $88 - 33 >> 31;
        break;
      }
      if (($rem | 0) != 0) {
        HEAP32[$rem >> 2] = $66 & $n_sroa_0_0_extract_trunc;
        HEAP32[$rem + 4 >> 2] = 0;
      }
      if (($d_sroa_0_0_extract_trunc | 0) == 1) {
        $_0$1 = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$0 = 0 | $a$0 & -1;
        return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
      } else {
        $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0;
        $_0$1 = 0 | $n_sroa_1_4_extract_trunc >>> ($78 >>> 0);
        $_0$0 = $n_sroa_1_4_extract_trunc << 32 - $78 | $n_sroa_0_0_extract_trunc >>> ($78 >>> 0) | 0;
        return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
      }
    }
  } while (0);
  if (($sr_1_ph | 0) == 0) {
    $q_sroa_1_1_lcssa = $q_sroa_1_1_ph;
    $q_sroa_0_1_lcssa = $q_sroa_0_1_ph;
    $r_sroa_1_1_lcssa = $r_sroa_1_1_ph;
    $r_sroa_0_1_lcssa = $r_sroa_0_1_ph;
    $carry_0_lcssa$1 = 0;
    $carry_0_lcssa$0 = 0;
  } else {
    $d_sroa_0_0_insert_insert99$0 = 0 | $b$0 & -1;
    $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | $b$1 & 0;
    $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0 | 0, $d_sroa_0_0_insert_insert99$1 | 0, -1, -1) | 0;
    $137$1 = (getTempRet0() | 0);
    $q_sroa_1_1198 = $q_sroa_1_1_ph;
    $q_sroa_0_1199 = $q_sroa_0_1_ph;
    $r_sroa_1_1200 = $r_sroa_1_1_ph;
    $r_sroa_0_1201 = $r_sroa_0_1_ph;
    $sr_1202 = $sr_1_ph;
    $carry_0203 = 0;
    while (1) {
      $147 = $q_sroa_0_1199 >>> 31 | $q_sroa_1_1198 << 1;
      $149 = $carry_0203 | $q_sroa_0_1199 << 1;
      $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | $q_sroa_1_1198 >>> 31);
      $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | $r_sroa_1_1200 << 1 | 0;
      _i64Subtract($137$0, $137$1, $r_sroa_0_0_insert_insert42$0, $r_sroa_0_0_insert_insert42$1) | 0;
      $150$1 = (getTempRet0() | 0);
      $151$0 = $150$1 >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1;
      $152 = $151$0 & 1;
      $154$0 = _i64Subtract($r_sroa_0_0_insert_insert42$0, $r_sroa_0_0_insert_insert42$1, $151$0 & $d_sroa_0_0_insert_insert99$0, ((($150$1 | 0) < 0 ? -1 : 0) >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1) & $d_sroa_0_0_insert_insert99$1) | 0;
      $r_sroa_0_0_extract_trunc = $154$0;
      $r_sroa_1_4_extract_trunc = (getTempRet0() | 0);
      $155 = $sr_1202 - 1 | 0;
      if (($155 | 0) == 0) {
        break;
      } else {
        $q_sroa_1_1198 = $147;
        $q_sroa_0_1199 = $149;
        $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc;
        $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc;
        $sr_1202 = $155;
        $carry_0203 = $152;
      }
    }
    $q_sroa_1_1_lcssa = $147;
    $q_sroa_0_1_lcssa = $149;
    $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc;
    $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc;
    $carry_0_lcssa$1 = 0;
    $carry_0_lcssa$0 = $152;
  }
  $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa;
  $q_sroa_0_0_insert_ext75$1 = 0;
  $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1;
  if (($rem | 0) != 0) {
    HEAP32[$rem >> 2] = 0 | $r_sroa_0_1_lcssa;
    HEAP32[$rem + 4 >> 2] = $r_sroa_1_1_lcssa | 0;
  }
  $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0) >>> 31 | $q_sroa_0_0_insert_insert77$1 << 1 | ($q_sroa_0_0_insert_ext75$1 << 1 | $q_sroa_0_0_insert_ext75$0 >>> 31) & 0 | $carry_0_lcssa$1;
  $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 >>> 31) & -2 | $carry_0_lcssa$0;
  return (setTempRet0(($_0$1) | 0), $_0$0) | 0;
}
// =======================================================================


function mftCall_iiiii(ptr,p0,p1,p2,p3) {
 ptr = ptr | 0;p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 0 | 0))) { return FUNCTION_TABLE_iiiii[(ptr-fb)&0](p0|0,p1|0,p2|0,p3|0)|0;  }return ftCall_iiiii(ptr|0,p0|0,p1|0,p2|0,p3|0)|0;
}
function mftCall_iiidi(ptr,p0,p1,p2,p3) {
 ptr = ptr | 0;p0 = p0|0;p1 = p1|0;p2 = +p2;p3 = p3|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 0 | 0))) { return FUNCTION_TABLE_iiidi[(ptr-fb)&0](p0|0,p1|0,+p2,p3|0)|0;  }return ftCall_iiidi(ptr|0,p0|0,p1|0,+p2,p3|0)|0;
}
function mftCall_ii(ptr,p0) {
 ptr = ptr | 0;p0 = p0|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 0 | 0))) { return FUNCTION_TABLE_ii[(ptr-fb)&0](p0|0)|0;  }return ftCall_ii(ptr|0,p0|0)|0;
}
function mftCall_viii(ptr,p0,p1,p2) {
 ptr = ptr | 0;p0 = p0|0;p1 = p1|0;p2 = p2|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 1 | 0))) {  FUNCTION_TABLE_viii[(ptr-fb)&1](p0|0,p1|0,p2|0); return; } ftCall_viii(ptr|0,p0|0,p1|0,p2|0);
}
function mftCall_iii(ptr,p0,p1) {
 ptr = ptr | 0;p0 = p0|0;p1 = p1|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 0 | 0))) { return FUNCTION_TABLE_iii[(ptr-fb)&0](p0|0,p1|0)|0;  }return ftCall_iii(ptr|0,p0|0,p1|0)|0;
}
function mftCall_iiiiii(ptr,p0,p1,p2,p3,p4) {
 ptr = ptr | 0;p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 0 | 0))) { return FUNCTION_TABLE_iiiiii[(ptr-fb)&0](p0|0,p1|0,p2|0,p3|0,p4|0)|0;  }return ftCall_iiiiii(ptr|0,p0|0,p1|0,p2|0,p3|0,p4|0)|0;
}

  
//iiiii = ftCall_iiiii;


//iiidi = ftCall_iiidi;


//ii = ftCall_ii;


//viii = ftCall_viii;


//iii = ftCall_iii;


//iiiiii = ftCall_iiiiii;

function b0(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_iiiii(0);return 0;
}
function b1(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = +p2;p3 = p3|0; nullFunc_iiidi(1);return 0;
}
function b2(p0) {
 p0 = p0|0; nullFunc_ii(2);return 0;
}
function b3(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_viii(3);
}
function b4(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_iii(4);return 0;
}
function b5(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; nullFunc_iiiiii(5);return 0;
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiiii = [b0];
var FUNCTION_TABLE_iiidi = [b1];
var FUNCTION_TABLE_ii = [b2];
var FUNCTION_TABLE_viii = [b3,_my_audio_callback];
var FUNCTION_TABLE_iii = [b4];
var FUNCTION_TABLE_iiiiii = [b5];

  return { _RomClosed: _RomClosed, _SetSpeedFactor: _SetSpeedFactor, _ProcessAList: _ProcessAList, _my_audio_callback: _my_audio_callback, _VolumeUp: _VolumeUp, establishStackSpace: establishStackSpace, setThrew: setThrew, _VolumeGetString: _VolumeGetString, _AiDacrateChanged: _AiDacrateChanged, _AiLenChanged: _AiLenChanged, stackSave: stackSave, _osal_dynlib_getproc: _osal_dynlib_getproc, _PluginStartup: _PluginStartup, runPostSets: runPostSets, _PluginGetVersion: _PluginGetVersion, _VolumeSetLevel: _VolumeSetLevel, _VolumeDown: _VolumeDown, _RomOpen: _RomOpen, _VolumeGetLevel: _VolumeGetLevel, stackRestore: stackRestore, _VolumeMute: _VolumeMute, _PluginShutdown: _PluginShutdown, stackAlloc: stackAlloc, _InitiateAudio: _InitiateAudio };
})
// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);
var real__ProcessAList = asm["_ProcessAList"]; asm["_ProcessAList"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__ProcessAList.apply(null, arguments);
};

var real__RomClosed = asm["_RomClosed"]; asm["_RomClosed"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__RomClosed.apply(null, arguments);
};

var real__osal_dynlib_getproc = asm["_osal_dynlib_getproc"]; asm["_osal_dynlib_getproc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__osal_dynlib_getproc.apply(null, arguments);
};

var real__PluginStartup = asm["_PluginStartup"]; asm["_PluginStartup"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__PluginStartup.apply(null, arguments);
};

var real__SetSpeedFactor = asm["_SetSpeedFactor"]; asm["_SetSpeedFactor"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__SetSpeedFactor.apply(null, arguments);
};

var real__PluginGetVersion = asm["_PluginGetVersion"]; asm["_PluginGetVersion"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__PluginGetVersion.apply(null, arguments);
};

var real__VolumeSetLevel = asm["_VolumeSetLevel"]; asm["_VolumeSetLevel"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__VolumeSetLevel.apply(null, arguments);
};

var real__InitiateAudio = asm["_InitiateAudio"]; asm["_InitiateAudio"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__InitiateAudio.apply(null, arguments);
};

var real__RomOpen = asm["_RomOpen"]; asm["_RomOpen"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__RomOpen.apply(null, arguments);
};

var real__VolumeGetLevel = asm["_VolumeGetLevel"]; asm["_VolumeGetLevel"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__VolumeGetLevel.apply(null, arguments);
};

var real__VolumeUp = asm["_VolumeUp"]; asm["_VolumeUp"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__VolumeUp.apply(null, arguments);
};

var real__VolumeMute = asm["_VolumeMute"]; asm["_VolumeMute"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__VolumeMute.apply(null, arguments);
};

var real__AiDacrateChanged = asm["_AiDacrateChanged"]; asm["_AiDacrateChanged"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__AiDacrateChanged.apply(null, arguments);
};

var real__PluginShutdown = asm["_PluginShutdown"]; asm["_PluginShutdown"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__PluginShutdown.apply(null, arguments);
};

var real__VolumeGetString = asm["_VolumeGetString"]; asm["_VolumeGetString"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__VolumeGetString.apply(null, arguments);
};

var real__AiLenChanged = asm["_AiLenChanged"]; asm["_AiLenChanged"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__AiLenChanged.apply(null, arguments);
};

var real__VolumeDown = asm["_VolumeDown"]; asm["_VolumeDown"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__VolumeDown.apply(null, arguments);
};
var _ProcessAList = Module["_ProcessAList"] = asm["_ProcessAList"];
var _RomClosed = Module["_RomClosed"] = asm["_RomClosed"];
var _osal_dynlib_getproc = Module["_osal_dynlib_getproc"] = asm["_osal_dynlib_getproc"];
var _PluginStartup = Module["_PluginStartup"] = asm["_PluginStartup"];
var _SetSpeedFactor = Module["_SetSpeedFactor"] = asm["_SetSpeedFactor"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var _PluginGetVersion = Module["_PluginGetVersion"] = asm["_PluginGetVersion"];
var _VolumeSetLevel = Module["_VolumeSetLevel"] = asm["_VolumeSetLevel"];
var _InitiateAudio = Module["_InitiateAudio"] = asm["_InitiateAudio"];
var _RomOpen = Module["_RomOpen"] = asm["_RomOpen"];
var _VolumeGetLevel = Module["_VolumeGetLevel"] = asm["_VolumeGetLevel"];
var _VolumeUp = Module["_VolumeUp"] = asm["_VolumeUp"];
var _VolumeMute = Module["_VolumeMute"] = asm["_VolumeMute"];
var _AiDacrateChanged = Module["_AiDacrateChanged"] = asm["_AiDacrateChanged"];
var _PluginShutdown = Module["_PluginShutdown"] = asm["_PluginShutdown"];
var _VolumeGetString = Module["_VolumeGetString"] = asm["_VolumeGetString"];
var _AiLenChanged = Module["_AiLenChanged"] = asm["_AiLenChanged"];
var _VolumeDown = Module["_VolumeDown"] = asm["_VolumeDown"];

function b0(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_iiiii(0);return 0;
}
function b1(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = +p2;p3 = p3|0; nullFunc_iiidi(1);return 0;
}
function b2(p0) {
 p0 = p0|0; nullFunc_ii(2);return 0;
}
function b3(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_viii(3);
}
function b4(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_iii(4);return 0;
}
function b5(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; nullFunc_iiiiii(5);return 0;
}

var SIDE_FUNCTION_TABLE_iiiii = [b0];
var SIDE_FUNCTION_TABLE_iiidi = [b1];
var SIDE_FUNCTION_TABLE_ii = [b2];
var SIDE_FUNCTION_TABLE_viii = [b3,asm['_my_audio_callback']];
var SIDE_FUNCTION_TABLE_iii = [b4];
var SIDE_FUNCTION_TABLE_iiiiii = [b5];
Module["dynCall_iiiii"] = dynCall_iiiii
Module["dynCall_iiidi"] = dynCall_iiidi
Module["dynCall_ii"] = dynCall_ii
Module["dynCall_viii"] = dynCall_viii
Module["dynCall_iii"] = dynCall_iii
Module["dynCall_iiiiii"] = dynCall_iiiiii
Module["FUNCTION_TABLE_iiiii"] = SIDE_FUNCTION_TABLE_iiiii;
Module["FUNCTION_TABLE_iiidi"] = SIDE_FUNCTION_TABLE_iiidi;
Module["FUNCTION_TABLE_ii"] = SIDE_FUNCTION_TABLE_ii;
Module["FUNCTION_TABLE_viii"] = SIDE_FUNCTION_TABLE_viii;
Module["FUNCTION_TABLE_iii"] = SIDE_FUNCTION_TABLE_iii;
Module["FUNCTION_TABLE_iiiiii"] = SIDE_FUNCTION_TABLE_iiiiii;

var NAMED_GLOBALS = { "ConfigSetDefaultFloat": 3204, "ConfigGetParamFloat": 3220, "ConfigGetParamBool": 3224, "ConfigSetParameter": 3188, "ConfigDeleteSection": 3180, "ConfigGetParamString": 3228, "ConfigGetParamInt": 3216, "ConfigGetParameterHelp": 3196, "ConfigSetDefaultBool": 3208, "ConfigSetDefaultInt": 3200, "ConfigOpenSection": 3176, "ConfigSaveSection": 3184, "ConfigSetDefaultString": 3212, "ConfigGetParameter": 3192 };
for (var named in NAMED_GLOBALS) {
  Module['_' + named] = gb + NAMED_GLOBALS[named];
}
Module['NAMED_GLOBALS'] = NAMED_GLOBALS;
;

Runtime.registerFunctions(['iiiii', 'iiidi', 'ii', 'viii', 'iii', 'iiiiii'], Module);



// === Auto-generated postamble setup entry stuff ===




__ATPRERUN__.push(runPostSets);

if (runtimeInitialized) {
  // dlopen case: we are being loaded after the system is fully initialized, so just run our prerun and atinit stuff now
  callRuntimeCallbacks(__ATPRERUN__);
  callRuntimeCallbacks(__ATINIT__);
} // otherwise, general dynamic linking case: stuff we added to prerun and init will be executed with the rest of the system as it loads





  // {{MODULE_ADDITIONS}}

  return Module;
});




