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





gb = Runtime.alignMemory(getMemory(15968, 4 || 1));

// STATICTOP = STATIC_BASE + 15968;
  /* global initializers */  __ATINIT__.push();
  

/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,239,67,63,94,131,236,191,194,197,199,190,191,20,251,191,74,43,192,63,81,102,3,64,76,167,68,64,53,230,152,62,215,100,102,191,207,6,36,192,0,0,0,0,8,0,0,0,16,0,0,0,24,0,0,0,32,0,0,0,40,0,0,0,48,0,0,0,56,0,0,0,1,0,0,0,9,0,0,0,17,0,0,0,25,0,0,0,33,0,0,0,41,0,0,0,49,0,0,0,57,0,0,0,2,0,0,0,10,0,0,0,18,0,0,0,26,0,0,0,34,0,0,0,42,0,0,0,50,0,0,0,58,0,0,0,3,0,0,0,11,0,0,0,19,0,0,0,27,0,0,0,35,0,0,0,43,0,0,0,51,0,0,0,59,0,0,0,4,0,0,0,12,0,0,0,20,0,0,0,28,0,0,0,36,0,0,0,44,0,0,0,52,0,0,0,60,0,0,0,5,0,0,0,13,0,0,0,21,0,0,0,29,0,0,0,37,0,0,0,45,0,0,0,53,0,0,0,61,0,0,0,6,0,0,0,14,0,0,0,22,0,0,0,30,0,0,0,38,0,0,0,46,0,0,0,54,0,0,0,62,0,0,0,7,0,0,0,15,0,0,0,23,0,0,0,31,0,0,0,39,0,0,0,47,0,0,0,55,0,0,0,63,0,0,0,0,0,0,0,1,0,0,0,5,0,0,0,6,0,0,0,14,0,0,0,15,0,0,0,27,0,0,0,28,0,0,0,2,0,0,0,4,0,0,0,7,0,0,0,13,0,0,0,16,0,0,0,26,0,0,0,29,0,0,0,42,0,0,0,3,0,0,0,8,0,0,0,12,0,0,0,17,0,0,0,25,0,0,0,30,0,0,0,41,0,0,0,43,0,0,0,9,0,0,0,11,0,0,0,18,0,0,0,24,0,0,0,31,0,0,0,40,0,0,0,44,0,0,0,53,0,0,0,10,0,0,0,19,0,0,0,23,0,0,0,32,0,0,0,39,0,0,0,45,0,0,0,52,0,0,0,54,0,0,0,20,0,0,0,22,0,0,0,33,0,0,0,38,0,0,0,46,0,0,0,51,0,0,0,55,0,0,0,60,0,0,0,21,0,0,0,34,0,0,0,37,0,0,0,47,0,0,0,50,0,0,0,56,0,0,0,59,0,0,0,61,0,0,0,35,0,0,0,36,0,0,0,48,0,0,0,49,0,0,0,57,0,0,0,58,0,0,0,62,0,0,0,63,0,0,0,57,12,173,102,70,13,223,255,57,11,150,102,95,14,216,255,68,10,105,102,131,15,208,255,90,9,38,102,180,16,200,255,125,8,205,101,240,17,191,255,171,7,94,101,56,19,182,255,228,6,217,100,140,20,172,255,40,6,63,100,235,21,161,255,119,5,143,99,86,23,150,255,209,4,203,98,203,24,138,255,53,4,243,97,76,26,126,255,164,3,6,97,215,27,113,255,28,3,7,96,108,29,100,255,159,2,245,94,11,31,86,255,42,2,208,93,179,32,72,255,190,1,154,92,100,34,58,255,91,1,83,91,30,36,44,255,1,1,252,89,224,37,30,255,174,0,150,88,169,39,16,255,99,0,32,87,122,41,2,255,31,0,157,85,80,43,244,254,226,255,13,84,44,45,232,254,172,255,112,82,13,47,219,254,124,255,199,80,243,48,208,254,83,255,20,79,220,50,198,254,46,255,87,77,200,52,189,254,15,255,145,75,182,54,182,254,245,254,194,73,165,56,176,254,223,254,237,71,149,58,172,254,206,254,17,70,133,60,171,254,192,254,48,68,116,62,172,254,182,254,74,66,96,64,175,254,175,254,96,64,74,66,182,254,172,254,116,62,48,68,192,254,171,254,133,60,17,70,206,254,172,254,149,58,237,71,223,254,176,254,165,56,194,73,245,254,182,254,182,54,145,75,15,255,189,254,200,52,87,77,46,255,198,254,220,50,20,79,83,255,208,254,243,48,199,80,124,255,219,254,13,47,112,82,172,255,232,254,44,45,13,84,226,255,244,254,80,43,157,85,31,0,2,255,122,41,32,87,99,0,16,255,169,39,150,88,174,0,30,255,224,37,252,89,1,1,44,255,30,36,83,91,91,1,58,255,100,34,154,92,190,1,72,255,179,32,208,93,42,2,86,255,11,31,245,94,159,2,100,255,108,29,7,96,28,3,113,255,215,27,6,97,164,3,126,255,76,26,243,97,53,4,138,255,203,24,203,98,209,4,150,255,86,23,143,99,119,5,161,255,235,21,63,100,40,6,172,255,140,20,217,100,228,6,182,255,56,19,94,101,171,7,191,255,240,17,205,101,125,8,200,255,180,16,38,102,90,9,208,255,131,15,105,102,68,10,216,255,95,14,150,102,57,11,223,255,70,13,173,102,57,12,16,0,12,0,14,0,14,0,18,0,24,0,49,0,72,0,11,0,12,0,13,0,17,0,22,0,35,0,64,0,92,0,10,0,14,0,16,0,22,0,37,0,55,0,78,0,95,0,16,0,19,0,24,0,29,0,56,0,64,0,87,0,98,0,24,0,26,0,40,0,51,0,68,0,81,0,103,0,112,0,40,0,58,0,57,0,87,0,109,0,104,0,121,0,100,0,51,0,60,0,69,0,80,0,103,0,113,0,120,0,103,0,61,0,55,0,56,0,62,0,77,0,92,0,101,0,99,0,178,255,58,253,10,241,84,248,174,189,160,205,108,231,148,219,32,25,32,75,124,172,104,124,236,171,128,152,232,218,156,131,0,0,243,255,93,0,56,255,122,3,54,247,55,11,14,192,255,127,242,63,55,11,202,8,122,3,200,0,93,0,13,0,0,0,243,255,93,0,56,255,122,3,54,247,55,11,14,192,255,127,242,63,55,11,202,8,122,3,200,0,93,0,13,0,0,0,242,255,95,0,29,255,105,3,151,246,42,10,231,188,235,127,203,60,43,12,43,8,133,3,175,0,91,0,11,0,0,0,242,255,95,0,29,255,105,3,151,246,42,10,231,188,235,127,203,60,43,12,43,8,133,3,175,0,91,0,11,0,0,0,241,255,97,0,2,255,84,3,249,245,5,9,196,185,176,127,164,57,8,13,140,7,140,3,152,0,88,0,10,0,0,0,241,255,97,0,2,255,84,3,249,245,5,9,196,185,176,127,164,57,8,13,140,7,140,3,152,0,88,0,10,0,0,0,239,255,98,0,230,254,59,3,92,245,200,7,164,182,77,127,126,54,206,13,238,6,143,3,128,0,86,0,9,0,0,0,239,255,98,0,230,254,59,3,92,245,200,7,164,182,77,127,126,54,206,13,238,6,143,3,128,0,86,0,9,0,0,0,238,255,99,0,202,254,28,3,195,244,113,6,140,179,194,126,93,51,124,14,82,6,142,3,107,0,83,0,8,0,0,0,238,255,99,0,202,254,28,3,195,244,113,6,140,179,194,126,93,51,124,14,82,6,142,3,107,0,83,0,8,0,0,0,236,255,100,0,172,254,247,2,44,244,2,5,124,176,18,126,65,48,20,15,183,5,138,3,86,0,80,0,7,0,0,0,236,255,100,0,172,254,247,2,44,244,2,5,124,176,18,126,65,48,20,15,183,5,138,3,86,0,80,0,7,0,0,0,235,255,100,0,142,254,206,2,153,243,122,3,117,173,58,125,44,45,151,15,32,5,130,3,67,0,77,0,7,0,0,0,235,255,100,0,142,254,206,2,153,243,122,3,117,173,58,125,44,45,151,15,32,5,130,3,67,0,77,0,7,0,255,255,233,255,99,0,111,254,158,2,11,243,216,1,123,170,61,124,31,42,4,16,139,4,119,3,48,0,74,0,6,0,255,255,233,255,99,0,111,254,158,2,11,243,216,1,123,170,61,124,31,42,4,16,139,4,119,3,48,0,74,0,6,0,255,255,231,255,98,0,79,254,105,2,130,242,31,0,141,167,26,123,28,39,93,16,249,3,106,3,31,0,70,0,6,0,255,255,231,255,98,0,79,254,105,2,130,242,31,0,141,167,26,123,28,39,93,16,249,3,106,3,31,0,70,0,6,0,255,255,228,255,97,0,47,254,47,2,255,241,76,254,175,164,211,121,37,36,162,16,108,3,89,3,16,0,67,0,5,0,255,255,228,255,97,0,47,254,47,2,255,241,76,254,175,164,211,121,37,36,162,16,108,3,89,3,16,0,67,0,5,0,255,255,226,255,94,0,16,254,238,1,132,241,97,252,225,161,105,120,57,33,211,16,227,2,70,3,1,0,64,0,4,0,255,255,226,255,94,0,16,254,238,1,132,241,97,252,225,161,105,120,57,33,211,16,227,2,70,3,1,0,64,0,4,0,255,255,224,255,91,0,240,253,168,1,17,241,95,250,39,159,219,118,92,30,242,16,94,2,49,3,243,255,61,0,4,0,255,255,224,255,91,0,240,253,168,1,17,241,95,250,39,159,219,118,92,30,242,16,94,2,49,3,243,255,61,0,4,0,255,255,222,255,87,0,208,253,91,1,167,240,69,248,128,156,44,117,142,27,0,17,222,1,25,3,231,255,58,0,3,0,255,255,222,255,87,0,208,253,91,1,167,240,69,248,128,156,44,117,142,27,0,17,222,1,25,3,231,255,58,0,3,0,254,255,219,255,83,0,176,253,8,1,70,240,19,246,238,153,92,115,209,24,253,16,99,1,0,3,220,255,55,0,3,0,254,255,219,255,83,0,176,253,8,1,70,240,19,246,238,153,92,115,209,24,253,16,99,1,0,3,220,255,55,0,3,0,254,255,216,255,77,0,144,253,176,0,240,239,204,243,117,151,108,113,36,22,234,16,238,0,229,2,210,255,51,0,3,0,254,255,216,255,77,0,144,253,176,0,240,239,204,243,117,151,108,113,36,22,234,16,238,0,229,2,210,255,51,0,3,0,254,255,214,255,71,0,114,253,81,0,166,239,111,241,20,149,94,111,138,19,200,16,126,0,202,2,201,255,48,0,3,0,254,255,214,255,71,0,114,253,81,0,166,239,111,241,20,149,94,111,138,19,200,16,126,0,202,2,201,255,48,0,3,0,254,255,211,255,64,0,84,253,236,255,104,239,252,238,205,146,51,109,4,17,152,16,20,0,172,2,192,255,45,0,2,0,254,255,211,255,64,0,84,253,236,255,104,239,252,238,205,146,51,109,4,17,152,16,20,0,172,2,192,255,45,0,2,0,48,0,201,255,202,2,126,0,200,16,138,19,94,111,20,149,111,241,166,239,81,0,114,253,71,0,214,255,254,255,3,0,48,0,201,255,202,2,126,0,200,16,138,19,94,111,20,149,111,241,166,239,81,0,114,253,71,0,214,255,254,255,3,0,51,0,210,255,229,2,238,0,234,16,36,22,108,113,117,151,204,243,240,239,176,0,144,253,77,0,216,255,254,255,3,0,51,0,210,255,229,2,238,0,234,16,36,22,108,113,117,151,204,243,240,239,176,0,144,253,77,0,216,255,254,255,3,0,55,0,220,255,0,3,99,1,253,16,209,24,92,115,238,153,19,246,70,240,8,1,176,253,83,0,219,255,254,255,3,0,55,0,220,255,0,3,99,1,253,16,209,24,92,115,238,153,19,246,70,240,8,1,176,253,83,0,219,255,254,255,3,0,58,0,231,255,25,3,222,1,0,17,142,27,44,117,128,156,69,248,167,240,91,1,208,253,87,0,222,255,255,255,3,0,58,0,231,255,25,3,222,1,0,17,142,27,44,117,128,156,69,248,167,240,91,1,208,253,87,0,222,255,255,255,4,0,61,0,243,255,49,3,94,2,242,16,92,30,219,118,39,159,95,250,17,241,168,1,240,253,91,0,224,255,255,255,4,0,61,0,243,255,49,3,94,2,242,16,92,30,219,118,39,159,95,250,17,241,168,1,240,253,91,0,224,255,255,255,4,0,64,0,1,0,70,3,227,2,211,16,57,33,105,120,225,161,97,252,132,241,238,1,16,254,94,0,226,255,255,255,4,0,64,0,1,0,70,3,227,2,211,16,57,33,105,120,225,161,97,252,132,241,238,1,16,254,94,0,226,255,255,255,5,0,67,0,16,0,89,3,108,3,162,16,37,36,211,121,175,164,76,254,255,241,47,2,47,254,97,0,228,255,255,255,5,0,67,0,16,0,89,3,108,3,162,16,37,36,211,121,175,164,76,254,255,241,47,2,47,254,97,0,228,255,255,255,6,0,70,0,31,0,106,3,249,3,93,16,28,39,26,123,141,167,31,0,130,242,105,2,79,254,98,0,231,255,255,255,6,0,70,0,31,0,106,3,249,3,93,16,28,39,26,123,141,167,31,0,130,242,105,2,79,254,98,0,231,255,255,255,6,0,74,0,48,0,119,3,139,4,4,16,31,42,61,124,123,170,216,1,11,243,158,2,111,254,99,0,233,255,255,255,6,0,74,0,48,0,119,3,139,4,4,16,31,42,61,124,123,170,216,1,11,243,158,2,111,254,99,0,233,255,255,255,7,0,77,0,67,0,130,3,32,5,151,15,44,45,58,125,117,173,122,3,153,243,206,2,142,254,100,0,235,255,0,0,7,0,77,0,67,0,130,3,32,5,151,15,44,45,58,125,117,173,122,3,153,243,206,2,142,254,100,0,235,255,0,0,7,0,80,0,86,0,138,3,183,5,20,15,65,48,18,126,124,176,2,5,44,244,247,2,172,254,100,0,236,255,0,0,7,0,80,0,86,0,138,3,183,5,20,15,65,48,18,126,124,176,2,5,44,244,247,2,172,254,100,0,236,255,0,0,8,0,83,0,107,0,142,3,82,6,124,14,93,51,194,126,140,179,113,6,195,244,28,3,202,254,99,0,238,255,0,0,8,0,83,0,107,0,142,3,82,6,124,14,93,51,194,126,140,179,113,6,195,244,28,3,202,254,99,0,238,255,0,0,9,0,86,0,128,0,143,3,238,6,206,13,126,54,77,127,164,182,200,7,92,245,59,3,230,254,98,0,239,255,0,0,9,0,86,0,128,0,143,3,238,6,206,13,126,54,77,127,164,182,200,7,92,245,59,3,230,254,98,0,239,255,0,0,10,0,88,0,152,0,140,3,140,7,8,13,164,57,176,127,196,185,5,9,249,245,84,3,2,255,97,0,241,255,0,0,10,0,88,0,152,0,140,3,140,7,8,13,164,57,176,127,196,185,5,9,249,245,84,3,2,255,97,0,241,255,0,0,11,0,91,0,175,0,133,3,43,8,43,12,203,60,235,127,231,188,42,10,151,246,105,3,29,255,95,0,242,255,0,0,11,0,91,0,175,0,133,3,43,8,43,12,203,60,235,127,231,188,42,10,151,246,105,3,29,255,95,0,242,255,0,0,13,0,93,0,200,0,122,3,202,8,55,11,242,63,255,127,14,192,55,11,54,247,122,3,56,255,93,0,243,255,0,0,13,0,93,0,200,0,122,3,202,8,55,11,242,63,255,127,14,192,55,11,54,247,122,3,56,255,93,0,243,255,0,0,0,0,196,254,250,244,228,197,196,225,22,25,80,74,104,162,174,120,20,251,220,212,242,49,58,142,73,110,118,97,108,105,100,32,65,66,73,32,99,111,109,109,97,110,100,32,37,117,0,73,110,118,97,108,105,100,32,115,101,103,109,101,110,116,32,37,117,0,97,108,105,115,116,95,114,101,115,97,109,112,108,101,58,32,102,108,97,103,50,32,105,115,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,40,99,111,117,110,116,32,38,32,48,120,49,102,41,32,61,61,32,48,0,46,46,47,46,46,47,115,114,99,47,97,108,105,115,116,46,99,0,97,108,105,115,116,95,97,100,112,99,109,0,85,110,107,110,111,119,110,32,97,117,100,105,111,32,99,111,109,109,97,110,100,32,37,100,58,32,37,48,56,120,32,37,48,56,120,0,99,111,117,110,116,32,60,61,32,56,0,46,46,47,46,46,47,115,114,99,47,97,117,100,105,111,46,99,0,97,100,112,99,109,95,99,111,109,112,117,116,101,95,114,101,115,105,100,117,97,108,115,0,117,110,107,110,111,119,110,32,82,83,80,32,99,111,100,101,58,32,115,117,109,58,32,37,120,32,80,67,58,37,120,0,117,110,107,110,111,119,110,32,79,83,84,97,115,107,58,32,115,117,109,58,32,37,120,32,80,67,58,37,120,0,65,66,73,49,32,105,100,101,110,116,105,102,105,99,97,116,105,111,110,32,114,101,103,114,101,115,115,105,111,110,58,32,118,61,37,48,56,120,0,65,66,73,50,32,105,100,101,110,116,105,102,105,99,97,116,105,111,110,32,114,101,103,114,101,115,115,105,111,110,58,32,118,61,37,48,56,120,0,65,66,73,51,32,105,100,101,110,116,105,102,105,99,97,116,105,111,110,32,114,101,103,114,101,115,115,105,111,110,58,32,118,61,37,48,56,120,0,80,83,48,0,80,83,0,106,112,101,103,95,100,101,99,111,100,101,95,79,66,58,32,42,98,117,102,102,101,114,61,37,120,44,32,35,77,66,61,37,100,44,32,113,115,99,97,108,101,61,37,100,0,97,98,115,40,100,115,116,32,45,32,115,114,99,41,32,62,32,83,85,66,66,76,79,67,75,95,83,73,90,69,0,46,46,47,46,46,47,115,114,99,47,106,112,101,103,46,99,0,82,101,111,114,100,101,114,83,117,98,66,108,111,99,107,0,106,112,101,103,95,100,101,99,111,100,101,95,37,115,58,32,116,97,115,107,32,121,105,101,108,100,105,110,103,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,106,112,101,103,95,100,101,99,111,100,101,95,37,115,58,32,42,98,117,102,102,101,114,61,37,120,44,32,35,77,66,61,37,100,44,32,109,111,100,101,61,37,100,44,32,42,81,121,61,37,120,44,32,42,81,117,61,37,120,44,32,42,81,118,61,37,120,0,106,112,101,103,95,100,101,99,111,100,101,95,37,115,58,32,105,110,118,97,108,105,100,32,109,111,100,101,32,37,100,0,109,117,115,121,120,95,118,49,95,116,97,115,107,58,32,42,100,97,116,97,61,37,120,44,32,35,83,70,61,37,100,0,109,117,115,121,120,95,118,50,95,116,97,115,107,58,32,42,100,97,116,97,61,37,120,44,32,35,83,70,61,37,100,0,112,116,114,95,49,48,61,37,48,56,120,32,109,97,115,107,95,49,52,61,37,48,50,120,32,112,116,114,95,50,52,61,37,48,56,120,0,109,97,115,107,95,49,54,61,37,48,52,120,32,112,116,114,95,49,56,61,37,48,56,120,32,112,116,114,95,49,99,61,37,48,56,120,32,111,117,116,112,117,116,95,112,116,114,61,37,48,56,120,0,105,110,116,101,114,108,101,97,118,101,58,32,37,48,56,120,0,83,70,88,58,32,37,48,56,120,44,32,105,100,120,61,37,100,0,99,98,117,102,102,101,114,58,32,112,116,114,61,37,48,56,120,32,108,101,110,103,116,104,61,37,120,0,102,105,114,52,58,32,104,103,97,105,110,61,37,48,52,120,32,104,99,111,101,102,102,61,37,48,52,120,32,37,48,52,120,32,37,48,52,120,32,37,48,52,120,0,116,97,112,32,99,111,117,110,116,61,37,100,10,100,101,108,97,121,115,58,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,10,103,97,105,110,115,58,32,32,37,48,52,120,32,37,48,52,120,32,37,48,52,120,32,37,48,52,120,32,37,48,52,120,32,37,48,52,120,32,37,48,52,120,32,37,48,52,120,0,115,102,120,95,103,97,105,110,115,61,37,48,52,120,32,37,48,52,120,0,83,107,105,112,112,105,110,103,32,86,111,105,99,101,32,115,116,97,103,101,0,80,114,111,99,101,115,115,105,110,103,32,86,111,105,99,101,32,35,37,100,0,86,111,105,99,101,32,100,101,98,117,103,58,32,115,101,103,98,97,115,101,61,37,100,9,117,49,54,95,52,101,61,37,48,52,120,10,9,112,105,116,99,104,58,32,102,114,97,99,48,61,37,48,52,120,32,115,104,105,102,116,61,37,48,52,120,10,9,101,110,100,95,112,111,105,110,116,61,37,48,52,120,32,114,101,115,116,97,114,116,95,112,111,105,110,116,61,37,48,52,120,10,9,101,110,118,32,32,32,32,32,32,61,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,10,9,101,110,118,95,115,116,101,112,32,61,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,10,0,108,97,115,116,95,115,97,109,112,108,101,32,61,32,37,48,52,120,32,37,48,52,120,32,37,48,52,120,32,37,48,52,120,0,70,111,114,109,97,116,58,32,65,68,80,67,77,0,76,111,97,100,105,110,103,32,65,68,80,67,77,32,116,97,98,108,101,58,32,37,48,56,120,0,65,68,80,67,77,32,100,101,99,111,100,101,58,32,99,111,117,110,116,61,37,100,44,32,115,107,105,112,61,37,100,0,100,109,97,95,99,97,116,58,32,37,48,56,120,32,37,48,56,120,32,37,48,52,120,32,37,48,52,120,0,70,111,114,109,97,116,58,32,80,67,77,49,54,0,98,97,115,101,95,118,111,108,32,118,111,105,99,101,95,109,97,115,107,32,61,32,37,48,56,120,0,66,69,70,79,82,69,58,32,98,97,115,101,95,118,111,108,32,61,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,0,65,70,84,69,82,58,32,98,97,115,101,95,118,111,108,32,61,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,32,37,48,56,120,0,40,97,100,100,114,101,115,115,32,38,32,49,41,32,61,61,32,48,0,46,46,47,46,46,47,115,114,99,47,109,101,109,111,114,121,46,104,0,117,49,54,0,40,97,100,100,114,101,115,115,32,38,32,51,41,32,61,61,32,48,0,117,51,50,0,72,97,99,107,116,97,114,117,120,47,65,122,105,109,101,114,32,72,105,103,104,45,76,101,118,101,108,32,69,109,117,108,97,116,105,111,110,32,82,83,80,32,80,108,117,103,105,110,0], "i8", ALLOC_NONE, gb);





/* no memory initializer */
// {{PRE_LIBRARY}}




function ___assert_fail() {
  if (!parentModule['___assert_fail']) abort("external function '__assert_fail' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['___assert_fail'].apply(null, arguments);
  }
function _memset() {
  if (!parentModule['_memset']) abort("external function 'memset' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_memset'].apply(null, arguments);
  }
function _abs() {
  if (!parentModule['_abs']) abort("external function 'abs' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_abs'].apply(null, arguments);
  }
function _vsprintf() {
  if (!parentModule['_vsprintf']) abort("external function 'vsprintf' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_vsprintf'].apply(null, arguments);
  }
function _memcpy() {
  if (!parentModule['_memcpy']) abort("external function 'memcpy' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");return parentModule['_memcpy'].apply(null, arguments);
  }
 


function nullFunc_iiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vii(x) { Module["printErr"]("Invalid function pointer called with signature 'vii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viii(x) { Module["printErr"]("Invalid function pointer called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_v(x) { Module["printErr"]("Invalid function pointer called with signature 'v'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }
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

function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function ftCall_viiii(x, a0, a1, a2, a3) {
  if (x < 0 || x >= parentModule["FUNCTION_TABLE_viiii"].length) { Module.printErr("Function table mask error (out of range)"); Module["printErr"]("Invalid function pointer called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info."); ; abort(x) }
  return parentModule["FUNCTION_TABLE_viiii"][x](a0, a1, a2, a3);
}

function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function ftCall_vii(x, a0, a1) {
  if (x < 0 || x >= parentModule["FUNCTION_TABLE_vii"].length) { Module.printErr("Function table mask error (out of range)"); Module["printErr"]("Invalid function pointer called with signature 'vii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info."); ; abort(x) }
  return parentModule["FUNCTION_TABLE_vii"][x](a0, a1);
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

function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function ftCall_v(x) {
  if (x < 0 || x >= parentModule["FUNCTION_TABLE_v"].length) { Module.printErr("Function table mask error (out of range)"); Module["printErr"]("Invalid function pointer called with signature 'v'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info."); ; abort(x) }
  return parentModule["FUNCTION_TABLE_v"][x]();
}


var dynCall_iiiii = ftCall_iiiii;


var dynCall_viiii = ftCall_viiii;


var dynCall_vii = ftCall_vii;


var dynCall_viii = ftCall_viii;


var dynCall_v = ftCall_v;


Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

Module.asmLibraryArg = { "abort": abort, "assert": assert, "nullFunc_iiiii": nullFunc_iiiii, "nullFunc_viiii": nullFunc_viiii, "nullFunc_vii": nullFunc_vii, "nullFunc_viii": nullFunc_viii, "nullFunc_v": nullFunc_v, "setTempRet0": setTempRet0, "getTempRet0": getTempRet0, "invoke_iiiii": invoke_iiiii, "ftCall_iiiii": ftCall_iiiii, "invoke_viiii": invoke_viiii, "ftCall_viiii": ftCall_viiii, "invoke_vii": invoke_vii, "ftCall_vii": ftCall_vii, "invoke_viii": invoke_viii, "ftCall_viii": ftCall_viii, "invoke_v": invoke_v, "ftCall_v": ftCall_v, "_memcpy": _memcpy, "___assert_fail": ___assert_fail, "_memset": _memset, "_vsprintf": _vsprintf, "_abs": _abs, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "gb": gb, "fb": fb };
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
  var nullFunc_viiii=env.nullFunc_viiii;
  var nullFunc_vii=env.nullFunc_vii;
  var nullFunc_viii=env.nullFunc_viii;
  var nullFunc_v=env.nullFunc_v;
  var setTempRet0=env.setTempRet0;
  var getTempRet0=env.getTempRet0;
  var invoke_iiiii=env.invoke_iiiii;
  var ftCall_iiiii=env.ftCall_iiiii;
  var invoke_viiii=env.invoke_viiii;
  var ftCall_viiii=env.ftCall_viiii;
  var invoke_vii=env.invoke_vii;
  var ftCall_vii=env.ftCall_vii;
  var invoke_viii=env.invoke_viii;
  var ftCall_viii=env.ftCall_viii;
  var invoke_v=env.invoke_v;
  var ftCall_v=env.ftCall_v;
  var _memcpy=env._memcpy;
  var ___assert_fail=env.___assert_fail;
  var _memset=env._memset;
  var _vsprintf=env._vsprintf;
  var _abs=env._abs;
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

function _alist_process($hle,$abi,$abi_size) {
 $hle = $hle|0;
 $abi = $abi|0;
 $abi_size = $abi_size|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $acmd = 0, $alist = 0, $alist_end = 0, $vararg_buffer = 0, $w1 = 0, $w2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $abi;
 $2 = $abi_size;
 $3 = $0;
 $4 = $0;
 $5 = (_dmem_u32($4,4080)|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = (_dram_u32($3,$6)|0);
 $alist = $7;
 $8 = $alist;
 $9 = $0;
 $10 = (_dmem_u32($9,4084)|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = $11 >>> 2;
 $13 = (($8) + ($12<<2)|0);
 $alist_end = $13;
 while(1) {
  $14 = $alist;
  $15 = $alist_end;
  $16 = ($14|0)!=($15|0);
  if (!($16)) {
   break;
  }
  $17 = $alist;
  $18 = ((($17)) + 4|0);
  $alist = $18;
  $19 = HEAP32[$17>>2]|0;
  $w1 = $19;
  $20 = $alist;
  $21 = ((($20)) + 4|0);
  $alist = $21;
  $22 = HEAP32[$20>>2]|0;
  $w2 = $22;
  $23 = $w1;
  $24 = $23 >>> 24;
  $25 = $24 & 127;
  $acmd = $25;
  $26 = $acmd;
  $27 = $2;
  $28 = ($26>>>0)<($27>>>0);
  if ($28) {
   $29 = $acmd;
   $30 = $1;
   $31 = (($30) + ($29<<2)|0);
   $32 = HEAP32[$31>>2]|0;
   $33 = $0;
   $34 = $w1;
   $35 = $w2;
   mftCall_viii($32|0,($33|0),($34|0),($35|0));
   continue;
  } else {
   $36 = $0;
   $37 = ((($36)) + 84|0);
   $38 = HEAP32[$37>>2]|0;
   $39 = $acmd;
   HEAP32[$vararg_buffer>>2] = $39;
   _HleWarnMessage($38,(gb + (5088) | 0),$vararg_buffer);
   continue;
  }
 }
 STACKTOP = sp;return;
}
function _dram_u32($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = HEAP32[$2>>2]|0;
 $4 = $1;
 $5 = $4 & 16777215;
 $6 = (_u32($3,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _dmem_u32($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = ((($2)) + 4|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = $1;
 $6 = $5&65535;
 $7 = $6 & 4095;
 $8 = (_u32($4,$7)|0);
 STACKTOP = sp;return ($8|0);
}
function _alist_get_address($hle,$so,$segments,$n) {
 $hle = $hle|0;
 $so = $so|0;
 $segments = $segments|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $offset = 0, $segment = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $1 = $hle;
 $2 = $so;
 $3 = $segments;
 $4 = $n;
 $5 = $2;
 $6 = $5 >>> 24;
 $7 = $6 & 63;
 $8 = $7&255;
 $segment = $8;
 $9 = $2;
 $10 = $9 & 16777215;
 $offset = $10;
 $11 = $segment;
 $12 = $11&255;
 $13 = $4;
 $14 = ($12>>>0)>=($13>>>0);
 if ($14) {
  $15 = $1;
  $16 = ((($15)) + 84|0);
  $17 = HEAP32[$16>>2]|0;
  $18 = $segment;
  $19 = $18&255;
  HEAP32[$vararg_buffer>>2] = $19;
  _HleWarnMessage($17,(gb + (5111) | 0),$vararg_buffer);
  $20 = $offset;
  $0 = $20;
  $28 = $0;
  STACKTOP = sp;return ($28|0);
 } else {
  $21 = $segment;
  $22 = $21&255;
  $23 = $3;
  $24 = (($23) + ($22<<2)|0);
  $25 = HEAP32[$24>>2]|0;
  $26 = $offset;
  $27 = (($25) + ($26))|0;
  $0 = $27;
  $28 = $0;
  STACKTOP = sp;return ($28|0);
 }
 return (0)|0;
}
function _alist_set_address($hle,$so,$segments,$n) {
 $hle = $hle|0;
 $so = $so|0;
 $segments = $segments|0;
 $n = $n|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $offset = 0, $segment = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $so;
 $2 = $segments;
 $3 = $n;
 $4 = $1;
 $5 = $4 >>> 24;
 $6 = $5 & 63;
 $7 = $6&255;
 $segment = $7;
 $8 = $1;
 $9 = $8 & 16777215;
 $offset = $9;
 $10 = $segment;
 $11 = $10&255;
 $12 = $3;
 $13 = ($11>>>0)>=($12>>>0);
 if ($13) {
  $14 = $0;
  $15 = ((($14)) + 84|0);
  $16 = HEAP32[$15>>2]|0;
  $17 = $segment;
  $18 = $17&255;
  HEAP32[$vararg_buffer>>2] = $18;
  _HleWarnMessage($16,(gb + (5111) | 0),$vararg_buffer);
  STACKTOP = sp;return;
 } else {
  $19 = $offset;
  $20 = $segment;
  $21 = $20&255;
  $22 = $2;
  $23 = (($22) + ($21<<2)|0);
  HEAP32[$23>>2] = $19;
  STACKTOP = sp;return;
 }
}
function _alist_clear($hle,$dmem,$count) {
 $hle = $hle|0;
 $dmem = $dmem|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmem;
 $2 = $count;
 while(1) {
  $3 = $2;
  $4 = $3&65535;
  $5 = ($4|0)!=(0);
  if (!($5)) {
   break;
  }
  $6 = $0;
  $7 = $1;
  $8 = (($7) + 1)<<16>>16;
  $1 = $8;
  $9 = (_alist_u8($6,$7)|0);
  HEAP8[$9>>0] = 0;
  $10 = $2;
  $11 = (($10) + -1)<<16>>16;
  $2 = $11;
 }
 STACKTOP = sp;return;
}
function _alist_u8($hle,$dmem) {
 $hle = $hle|0;
 $dmem = $dmem|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmem;
 $2 = $0;
 $3 = ((($2)) + 88|0);
 $4 = $1;
 $5 = $4&65535;
 $6 = (_u8($3,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _alist_load($hle,$dmem,$address,$count) {
 $hle = $hle|0;
 $dmem = $dmem|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmem;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $4&65535;
 $6 = $5 & -4;
 $7 = $6&65535;
 $1 = $7;
 $8 = $2;
 $9 = $8 & -8;
 $2 = $9;
 $10 = $3;
 $11 = $10&65535;
 $12 = (_align($11,8)|0);
 $13 = $12&65535;
 $3 = $13;
 $14 = $0;
 $15 = ((($14)) + 88|0);
 $16 = $1;
 $17 = $16&65535;
 $18 = (($15) + ($17)|0);
 $19 = $0;
 $20 = HEAP32[$19>>2]|0;
 $21 = $2;
 $22 = (($20) + ($21)|0);
 $23 = $3;
 $24 = $23&65535;
 _memcpy(($18|0),($22|0),($24|0))|0;
 STACKTOP = sp;return;
}
function _align($x,$amount) {
 $x = $x|0;
 $amount = $amount|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $amount;
 $2 = $1;
 $3 = (($2) + -1)|0;
 $1 = $3;
 $4 = $0;
 $5 = $1;
 $6 = (($4) + ($5))|0;
 $7 = $1;
 $8 = $7 ^ -1;
 $9 = $6 & $8;
 STACKTOP = sp;return ($9|0);
}
function _alist_save($hle,$dmem,$address,$count) {
 $hle = $hle|0;
 $dmem = $dmem|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmem;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $4&65535;
 $6 = $5 & -4;
 $7 = $6&65535;
 $1 = $7;
 $8 = $2;
 $9 = $8 & -8;
 $2 = $9;
 $10 = $3;
 $11 = $10&65535;
 $12 = (_align($11,8)|0);
 $13 = $12&65535;
 $3 = $13;
 $14 = $0;
 $15 = HEAP32[$14>>2]|0;
 $16 = $2;
 $17 = (($15) + ($16)|0);
 $18 = $0;
 $19 = ((($18)) + 88|0);
 $20 = $1;
 $21 = $20&65535;
 $22 = (($19) + ($21)|0);
 $23 = $3;
 $24 = $23&65535;
 _memcpy(($17|0),($22|0),($24|0))|0;
 STACKTOP = sp;return;
}
function _alist_move($hle,$dmemo,$dmemi,$count) {
 $hle = $hle|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmemo;
 $2 = $dmemi;
 $3 = $count;
 while(1) {
  $4 = $3;
  $5 = $4&65535;
  $6 = ($5|0)!=(0);
  if (!($6)) {
   break;
  }
  $7 = $0;
  $8 = $2;
  $9 = (($8) + 1)<<16>>16;
  $2 = $9;
  $10 = (_alist_u8($7,$8)|0);
  $11 = HEAP8[$10>>0]|0;
  $12 = $0;
  $13 = $1;
  $14 = (($13) + 1)<<16>>16;
  $1 = $14;
  $15 = (_alist_u8($12,$13)|0);
  HEAP8[$15>>0] = $11;
  $16 = $3;
  $17 = (($16) + -1)<<16>>16;
  $3 = $17;
 }
 STACKTOP = sp;return;
}
function _alist_copy_every_other_sample($hle,$dmemo,$dmemi,$count) {
 $hle = $hle|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmemo;
 $2 = $dmemi;
 $3 = $count;
 while(1) {
  $4 = $3;
  $5 = $4&65535;
  $6 = ($5|0)!=(0);
  if (!($6)) {
   break;
  }
  $7 = $0;
  $8 = $2;
  $9 = (_alist_s16($7,$8)|0);
  $10 = HEAP16[$9>>1]|0;
  $11 = $0;
  $12 = $1;
  $13 = (_alist_s16($11,$12)|0);
  HEAP16[$13>>1] = $10;
  $14 = $1;
  $15 = $14&65535;
  $16 = (($15) + 2)|0;
  $17 = $16&65535;
  $1 = $17;
  $18 = $2;
  $19 = $18&65535;
  $20 = (($19) + 4)|0;
  $21 = $20&65535;
  $2 = $21;
  $22 = $3;
  $23 = (($22) + -1)<<16>>16;
  $3 = $23;
 }
 STACKTOP = sp;return;
}
function _alist_s16($hle,$dmem) {
 $hle = $hle|0;
 $dmem = $dmem|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmem;
 $2 = $0;
 $3 = ((($2)) + 88|0);
 $4 = $1;
 $5 = $4&65535;
 $6 = (_u16($3,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _alist_repeat64($hle,$dmemo,$dmemi,$count) {
 $hle = $hle|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $buffer = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $buffer = sp + 8|0;
 $0 = $hle;
 $1 = $dmemo;
 $2 = $dmemi;
 $3 = $count;
 $4 = $0;
 $5 = ((($4)) + 88|0);
 $6 = $2;
 $7 = $6&65535;
 $8 = (($5) + ($7)|0);
 dest=$buffer; src=$8; stop=dest+128|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
 while(1) {
  $9 = $3;
  $10 = $9&255;
  $11 = ($10|0)!=(0);
  if (!($11)) {
   break;
  }
  $12 = $0;
  $13 = ((($12)) + 88|0);
  $14 = $1;
  $15 = $14&65535;
  $16 = (($13) + ($15)|0);
  dest=$16; src=$buffer; stop=dest+128|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
  $17 = $1;
  $18 = $17&65535;
  $19 = (($18) + 128)|0;
  $20 = $19&65535;
  $1 = $20;
  $21 = $3;
  $22 = (($21) + -1)<<24>>24;
  $3 = $22;
 }
 STACKTOP = sp;return;
}
function _alist_copy_blocks($hle,$dmemo,$dmemi,$block_size,$count) {
 $hle = $hle|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $block_size = $block_size|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $block_left = 0, $bytes_left = 0, dest = 0, label = 0, sp = 0;
 var src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmemo;
 $2 = $dmemi;
 $3 = $block_size;
 $4 = $count;
 $5 = $4;
 $6 = $5&255;
 $block_left = $6;
 while(1) {
  $7 = $3;
  $8 = $7&65535;
  $bytes_left = $8;
  while(1) {
   $9 = $0;
   $10 = ((($9)) + 88|0);
   $11 = $1;
   $12 = $11&65535;
   $13 = (($10) + ($12)|0);
   $14 = $0;
   $15 = ((($14)) + 88|0);
   $16 = $2;
   $17 = $16&65535;
   $18 = (($15) + ($17)|0);
   dest=$13; src=$18; stop=dest+32|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
   $19 = $bytes_left;
   $20 = (($19) - 32)|0;
   $bytes_left = $20;
   $21 = $2;
   $22 = $21&65535;
   $23 = (($22) + 32)|0;
   $24 = $23&65535;
   $2 = $24;
   $25 = $1;
   $26 = $25&65535;
   $27 = (($26) + 32)|0;
   $28 = $27&65535;
   $1 = $28;
   $29 = $bytes_left;
   $30 = ($29|0)>(0);
   if (!($30)) {
    break;
   }
  }
  $31 = $block_left;
  $32 = (($31) + -1)|0;
  $block_left = $32;
  $33 = $block_left;
  $34 = ($33|0)>(0);
  if (!($34)) {
   break;
  }
 }
 STACKTOP = sp;return;
}
function _alist_interleave($hle,$dmemo,$left,$right,$count) {
 $hle = $hle|0;
 $dmemo = $dmemo|0;
 $left = $left|0;
 $right = $right|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $dst = 0, $l1 = 0, $l2 = 0, $r1 = 0, $r2 = 0, $srcL = 0, $srcR = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmemo;
 $2 = $left;
 $3 = $right;
 $4 = $count;
 $5 = $0;
 $6 = ((($5)) + 88|0);
 $7 = $1;
 $8 = $7&65535;
 $9 = (($6) + ($8)|0);
 $dst = $9;
 $10 = $0;
 $11 = ((($10)) + 88|0);
 $12 = $2;
 $13 = $12&65535;
 $14 = (($11) + ($13)|0);
 $srcL = $14;
 $15 = $0;
 $16 = ((($15)) + 88|0);
 $17 = $3;
 $18 = $17&65535;
 $19 = (($16) + ($18)|0);
 $srcR = $19;
 $20 = $4;
 $21 = $20&65535;
 $22 = $21 >> 2;
 $23 = $22&65535;
 $4 = $23;
 while(1) {
  $24 = $4;
  $25 = $24&65535;
  $26 = ($25|0)!=(0);
  if (!($26)) {
   break;
  }
  $27 = $srcL;
  $28 = ((($27)) + 2|0);
  $srcL = $28;
  $29 = HEAP16[$27>>1]|0;
  $l1 = $29;
  $30 = $srcL;
  $31 = ((($30)) + 2|0);
  $srcL = $31;
  $32 = HEAP16[$30>>1]|0;
  $l2 = $32;
  $33 = $srcR;
  $34 = ((($33)) + 2|0);
  $srcR = $34;
  $35 = HEAP16[$33>>1]|0;
  $r1 = $35;
  $36 = $srcR;
  $37 = ((($36)) + 2|0);
  $srcR = $37;
  $38 = HEAP16[$36>>1]|0;
  $r2 = $38;
  $39 = $r2;
  $40 = $dst;
  $41 = ((($40)) + 2|0);
  $dst = $41;
  HEAP16[$40>>1] = $39;
  $42 = $l2;
  $43 = $dst;
  $44 = ((($43)) + 2|0);
  $dst = $44;
  HEAP16[$43>>1] = $42;
  $45 = $r1;
  $46 = $dst;
  $47 = ((($46)) + 2|0);
  $dst = $47;
  HEAP16[$46>>1] = $45;
  $48 = $l1;
  $49 = $dst;
  $50 = ((($49)) + 2|0);
  $dst = $50;
  HEAP16[$49>>1] = $48;
  $51 = $4;
  $52 = (($51) + -1)<<16>>16;
  $4 = $52;
 }
 STACKTOP = sp;return;
}
function _alist_envmix_exp($hle,$init,$aux,$dmem_dl,$dmem_dr,$dmem_wl,$dmem_wr,$dmemi,$count,$dry,$wet,$vol,$target,$rate,$address) {
 $hle = $hle|0;
 $init = $init|0;
 $aux = $aux|0;
 $dmem_dl = $dmem_dl|0;
 $dmem_dr = $dmem_dr|0;
 $dmem_wl = $dmem_wl|0;
 $dmem_wr = $dmem_wr|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $dry = $dry|0;
 $wet = $wet|0;
 $vol = $vol|0;
 $target = $target|0;
 $rate = $rate|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0;
 var $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0;
 var $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0;
 var $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0;
 var $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0;
 var $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0;
 var $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0;
 var $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0;
 var $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0;
 var $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0;
 var $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0;
 var $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $buffers = 0, $dl = 0, $dr = 0;
 var $exp_rates = 0, $exp_seq = 0, $gains = 0, $in = 0, $l_vol = 0, $n = 0, $ptr = 0, $r_vol = 0, $ramps = 0, $save_buffer = 0, $wl = 0, $wr = 0, $x = 0, $y = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $ramps = sp;
 $exp_seq = sp + 88|0;
 $exp_rates = sp + 80|0;
 $save_buffer = sp + 152|0;
 $gains = sp + 144|0;
 $buffers = sp + 48|0;
 $0 = $hle;
 $15 = $init&1;
 $1 = $15;
 $16 = $aux&1;
 $2 = $16;
 $3 = $dmem_dl;
 $4 = $dmem_dr;
 $5 = $dmem_wl;
 $6 = $dmem_wr;
 $7 = $dmemi;
 $8 = $count;
 $9 = $dry;
 $10 = $wet;
 $11 = $vol;
 $12 = $target;
 $13 = $rate;
 $14 = $address;
 $17 = $2;
 $18 = $17&1;
 $19 = $18 ? 4 : 2;
 $n = $19;
 $20 = $0;
 $21 = ((($20)) + 88|0);
 $22 = $7;
 $23 = $22&65535;
 $24 = (($21) + ($23)|0);
 $in = $24;
 $25 = $0;
 $26 = ((($25)) + 88|0);
 $27 = $3;
 $28 = $27&65535;
 $29 = (($26) + ($28)|0);
 $dl = $29;
 $30 = $0;
 $31 = ((($30)) + 88|0);
 $32 = $4;
 $33 = $32&65535;
 $34 = (($31) + ($33)|0);
 $dr = $34;
 $35 = $0;
 $36 = ((($35)) + 88|0);
 $37 = $5;
 $38 = $37&65535;
 $39 = (($36) + ($38)|0);
 $wl = $39;
 $40 = $0;
 $41 = ((($40)) + 88|0);
 $42 = $6;
 $43 = $42&65535;
 $44 = (($41) + ($43)|0);
 $wr = $44;
 $ptr = 0;
 $45 = $1;
 $46 = $45&1;
 if ($46) {
  $47 = $11;
  $48 = HEAP16[$47>>1]|0;
  $49 = $48 << 16 >> 16;
  $50 = $49 << 16;
  $51 = ($50|0)<(0);
  $52 = $51 << 31 >> 31;
  $53 = $ramps;
  $54 = $53;
  HEAP32[$54>>2] = $50;
  $55 = (($53) + 4)|0;
  $56 = $55;
  HEAP32[$56>>2] = $52;
  $57 = $11;
  $58 = ((($57)) + 2|0);
  $59 = HEAP16[$58>>1]|0;
  $60 = $59 << 16 >> 16;
  $61 = $60 << 16;
  $62 = ($61|0)<(0);
  $63 = $62 << 31 >> 31;
  $64 = ((($ramps)) + 24|0);
  $65 = $64;
  $66 = $65;
  HEAP32[$66>>2] = $61;
  $67 = (($65) + 4)|0;
  $68 = $67;
  HEAP32[$68>>2] = $63;
  $69 = $12;
  $70 = HEAP16[$69>>1]|0;
  $71 = $70 << 16 >> 16;
  $72 = $71 << 16;
  $73 = ($72|0)<(0);
  $74 = $73 << 31 >> 31;
  $75 = ((($ramps)) + 16|0);
  $76 = $75;
  $77 = $76;
  HEAP32[$77>>2] = $72;
  $78 = (($76) + 4)|0;
  $79 = $78;
  HEAP32[$79>>2] = $74;
  $80 = $12;
  $81 = ((($80)) + 2|0);
  $82 = HEAP16[$81>>1]|0;
  $83 = $82 << 16 >> 16;
  $84 = $83 << 16;
  $85 = ($84|0)<(0);
  $86 = $85 << 31 >> 31;
  $87 = ((($ramps)) + 24|0);
  $88 = ((($87)) + 16|0);
  $89 = $88;
  $90 = $89;
  HEAP32[$90>>2] = $84;
  $91 = (($89) + 4)|0;
  $92 = $91;
  HEAP32[$92>>2] = $86;
  $93 = $13;
  $94 = HEAP32[$93>>2]|0;
  HEAP32[$exp_rates>>2] = $94;
  $95 = $13;
  $96 = ((($95)) + 4|0);
  $97 = HEAP32[$96>>2]|0;
  $98 = ((($exp_rates)) + 4|0);
  HEAP32[$98>>2] = $97;
  $99 = $11;
  $100 = HEAP16[$99>>1]|0;
  $101 = $100 << 16 >> 16;
  $102 = $13;
  $103 = HEAP32[$102>>2]|0;
  $104 = Math_imul($101, $103)|0;
  HEAP32[$exp_seq>>2] = $104;
  $105 = $11;
  $106 = ((($105)) + 2|0);
  $107 = HEAP16[$106>>1]|0;
  $108 = $107 << 16 >> 16;
  $109 = $13;
  $110 = ((($109)) + 4|0);
  $111 = HEAP32[$110>>2]|0;
  $112 = Math_imul($108, $111)|0;
  $113 = ((($exp_seq)) + 4|0);
  HEAP32[$113>>2] = $112;
 } else {
  $114 = $0;
  $115 = HEAP32[$114>>2]|0;
  $116 = $14;
  $117 = (($115) + ($116)|0);
  dest=$save_buffer; src=$117; stop=dest+80|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
  $118 = HEAP16[$save_buffer>>1]|0;
  $10 = $118;
  $119 = ((($save_buffer)) + 4|0);
  $120 = HEAP16[$119>>1]|0;
  $9 = $120;
  $121 = ((($save_buffer)) + 8|0);
  $122 = HEAP32[$121>>2]|0;
  $123 = ($122|0)<(0);
  $124 = $123 << 31 >> 31;
  $125 = ((($ramps)) + 16|0);
  $126 = $125;
  $127 = $126;
  HEAP32[$127>>2] = $122;
  $128 = (($126) + 4)|0;
  $129 = $128;
  HEAP32[$129>>2] = $124;
  $130 = ((($save_buffer)) + 12|0);
  $131 = HEAP32[$130>>2]|0;
  $132 = ($131|0)<(0);
  $133 = $132 << 31 >> 31;
  $134 = ((($ramps)) + 24|0);
  $135 = ((($134)) + 16|0);
  $136 = $135;
  $137 = $136;
  HEAP32[$137>>2] = $131;
  $138 = (($136) + 4)|0;
  $139 = $138;
  HEAP32[$139>>2] = $133;
  $140 = ((($save_buffer)) + 16|0);
  $141 = HEAP32[$140>>2]|0;
  HEAP32[$exp_rates>>2] = $141;
  $142 = ((($save_buffer)) + 20|0);
  $143 = HEAP32[$142>>2]|0;
  $144 = ((($exp_rates)) + 4|0);
  HEAP32[$144>>2] = $143;
  $145 = ((($save_buffer)) + 24|0);
  $146 = HEAP32[$145>>2]|0;
  HEAP32[$exp_seq>>2] = $146;
  $147 = ((($save_buffer)) + 28|0);
  $148 = HEAP32[$147>>2]|0;
  $149 = ((($exp_seq)) + 4|0);
  HEAP32[$149>>2] = $148;
  $150 = ((($save_buffer)) + 32|0);
  $151 = HEAP32[$150>>2]|0;
  $152 = ($151|0)<(0);
  $153 = $152 << 31 >> 31;
  $154 = $ramps;
  $155 = $154;
  HEAP32[$155>>2] = $151;
  $156 = (($154) + 4)|0;
  $157 = $156;
  HEAP32[$157>>2] = $153;
  $158 = ((($save_buffer)) + 36|0);
  $159 = HEAP32[$158>>2]|0;
  $160 = ($159|0)<(0);
  $161 = $160 << 31 >> 31;
  $162 = ((($ramps)) + 24|0);
  $163 = $162;
  $164 = $163;
  HEAP32[$164>>2] = $159;
  $165 = (($163) + 4)|0;
  $166 = $165;
  HEAP32[$166>>2] = $161;
 }
 $167 = ((($ramps)) + 16|0);
 $168 = $167;
 $169 = $168;
 $170 = HEAP32[$169>>2]|0;
 $171 = (($168) + 4)|0;
 $172 = $171;
 $173 = HEAP32[$172>>2]|0;
 $174 = $ramps;
 $175 = $174;
 $176 = HEAP32[$175>>2]|0;
 $177 = (($174) + 4)|0;
 $178 = $177;
 $179 = HEAP32[$178>>2]|0;
 $180 = (_i64Subtract(($170|0),($173|0),($176|0),($179|0))|0);
 $181 = (getTempRet0() | 0);
 $182 = ((($ramps)) + 8|0);
 $183 = $182;
 $184 = $183;
 HEAP32[$184>>2] = $180;
 $185 = (($183) + 4)|0;
 $186 = $185;
 HEAP32[$186>>2] = $181;
 $187 = ((($ramps)) + 24|0);
 $188 = ((($187)) + 16|0);
 $189 = $188;
 $190 = $189;
 $191 = HEAP32[$190>>2]|0;
 $192 = (($189) + 4)|0;
 $193 = $192;
 $194 = HEAP32[$193>>2]|0;
 $195 = ((($ramps)) + 24|0);
 $196 = $195;
 $197 = $196;
 $198 = HEAP32[$197>>2]|0;
 $199 = (($196) + 4)|0;
 $200 = $199;
 $201 = HEAP32[$200>>2]|0;
 $202 = (_i64Subtract(($191|0),($194|0),($198|0),($201|0))|0);
 $203 = (getTempRet0() | 0);
 $204 = ((($ramps)) + 24|0);
 $205 = ((($204)) + 8|0);
 $206 = $205;
 $207 = $206;
 HEAP32[$207>>2] = $202;
 $208 = (($206) + 4)|0;
 $209 = $208;
 HEAP32[$209>>2] = $203;
 $y = 0;
 while(1) {
  $210 = $y;
  $211 = $8;
  $212 = $211&65535;
  $213 = ($210|0)<($212|0);
  if (!($213)) {
   break;
  }
  $214 = ((($ramps)) + 8|0);
  $215 = $214;
  $216 = $215;
  $217 = HEAP32[$216>>2]|0;
  $218 = (($215) + 4)|0;
  $219 = $218;
  $220 = HEAP32[$219>>2]|0;
  $221 = ($217|0)!=(0);
  $222 = ($220|0)!=(0);
  $223 = $221 | $222;
  if ($223) {
   $224 = HEAP32[$exp_seq>>2]|0;
   $225 = ($224|0)<(0);
   $226 = $225 << 31 >> 31;
   $227 = HEAP32[$exp_rates>>2]|0;
   $228 = ($227|0)<(0);
   $229 = $228 << 31 >> 31;
   $230 = (___muldi3(($224|0),($226|0),($227|0),($229|0))|0);
   $231 = (getTempRet0() | 0);
   $232 = (_bitshift64Ashr(($230|0),($231|0),16)|0);
   $233 = (getTempRet0() | 0);
   HEAP32[$exp_seq>>2] = $232;
   $234 = HEAP32[$exp_seq>>2]|0;
   $235 = ($234|0)<(0);
   $236 = $235 << 31 >> 31;
   $237 = $ramps;
   $238 = $237;
   $239 = HEAP32[$238>>2]|0;
   $240 = (($237) + 4)|0;
   $241 = $240;
   $242 = HEAP32[$241>>2]|0;
   $243 = (_i64Subtract(($234|0),($236|0),($239|0),($242|0))|0);
   $244 = (getTempRet0() | 0);
   $245 = (_bitshift64Ashr(($243|0),($244|0),3)|0);
   $246 = (getTempRet0() | 0);
   $247 = ((($ramps)) + 8|0);
   $248 = $247;
   $249 = $248;
   HEAP32[$249>>2] = $245;
   $250 = (($248) + 4)|0;
   $251 = $250;
   HEAP32[$251>>2] = $246;
  }
  $252 = ((($ramps)) + 24|0);
  $253 = ((($252)) + 8|0);
  $254 = $253;
  $255 = $254;
  $256 = HEAP32[$255>>2]|0;
  $257 = (($254) + 4)|0;
  $258 = $257;
  $259 = HEAP32[$258>>2]|0;
  $260 = ($256|0)!=(0);
  $261 = ($259|0)!=(0);
  $262 = $260 | $261;
  if ($262) {
   $263 = ((($exp_seq)) + 4|0);
   $264 = HEAP32[$263>>2]|0;
   $265 = ($264|0)<(0);
   $266 = $265 << 31 >> 31;
   $267 = ((($exp_rates)) + 4|0);
   $268 = HEAP32[$267>>2]|0;
   $269 = ($268|0)<(0);
   $270 = $269 << 31 >> 31;
   $271 = (___muldi3(($264|0),($266|0),($268|0),($270|0))|0);
   $272 = (getTempRet0() | 0);
   $273 = (_bitshift64Ashr(($271|0),($272|0),16)|0);
   $274 = (getTempRet0() | 0);
   $275 = ((($exp_seq)) + 4|0);
   HEAP32[$275>>2] = $273;
   $276 = ((($exp_seq)) + 4|0);
   $277 = HEAP32[$276>>2]|0;
   $278 = ($277|0)<(0);
   $279 = $278 << 31 >> 31;
   $280 = ((($ramps)) + 24|0);
   $281 = $280;
   $282 = $281;
   $283 = HEAP32[$282>>2]|0;
   $284 = (($281) + 4)|0;
   $285 = $284;
   $286 = HEAP32[$285>>2]|0;
   $287 = (_i64Subtract(($277|0),($279|0),($283|0),($286|0))|0);
   $288 = (getTempRet0() | 0);
   $289 = (_bitshift64Ashr(($287|0),($288|0),3)|0);
   $290 = (getTempRet0() | 0);
   $291 = ((($ramps)) + 24|0);
   $292 = ((($291)) + 8|0);
   $293 = $292;
   $294 = $293;
   HEAP32[$294>>2] = $289;
   $295 = (($293) + 4)|0;
   $296 = $295;
   HEAP32[$296>>2] = $290;
  }
  $x = 0;
  while(1) {
   $297 = $x;
   $298 = ($297|0)<(8);
   if (!($298)) {
    break;
   }
   $299 = (_ramp_step($ramps)|0);
   $l_vol = $299;
   $300 = ((($ramps)) + 24|0);
   $301 = (_ramp_step($300)|0);
   $r_vol = $301;
   $302 = $dl;
   $303 = $ptr;
   $304 = $303 ^ 1;
   $305 = (($302) + ($304<<1)|0);
   HEAP32[$buffers>>2] = $305;
   $306 = $dr;
   $307 = $ptr;
   $308 = $307 ^ 1;
   $309 = (($306) + ($308<<1)|0);
   $310 = ((($buffers)) + 4|0);
   HEAP32[$310>>2] = $309;
   $311 = $wl;
   $312 = $ptr;
   $313 = $312 ^ 1;
   $314 = (($311) + ($313<<1)|0);
   $315 = ((($buffers)) + 8|0);
   HEAP32[$315>>2] = $314;
   $316 = $wr;
   $317 = $ptr;
   $318 = $317 ^ 1;
   $319 = (($316) + ($318<<1)|0);
   $320 = ((($buffers)) + 12|0);
   HEAP32[$320>>2] = $319;
   $321 = $l_vol;
   $322 = $321 << 16 >> 16;
   $323 = $9;
   $324 = $323 << 16 >> 16;
   $325 = Math_imul($322, $324)|0;
   $326 = (($325) + 16384)|0;
   $327 = $326 >> 15;
   $328 = (_clamp_s16($327)|0);
   HEAP16[$gains>>1] = $328;
   $329 = $r_vol;
   $330 = $329 << 16 >> 16;
   $331 = $9;
   $332 = $331 << 16 >> 16;
   $333 = Math_imul($330, $332)|0;
   $334 = (($333) + 16384)|0;
   $335 = $334 >> 15;
   $336 = (_clamp_s16($335)|0);
   $337 = ((($gains)) + 2|0);
   HEAP16[$337>>1] = $336;
   $338 = $l_vol;
   $339 = $338 << 16 >> 16;
   $340 = $10;
   $341 = $340 << 16 >> 16;
   $342 = Math_imul($339, $341)|0;
   $343 = (($342) + 16384)|0;
   $344 = $343 >> 15;
   $345 = (_clamp_s16($344)|0);
   $346 = ((($gains)) + 4|0);
   HEAP16[$346>>1] = $345;
   $347 = $r_vol;
   $348 = $347 << 16 >> 16;
   $349 = $10;
   $350 = $349 << 16 >> 16;
   $351 = Math_imul($348, $350)|0;
   $352 = (($351) + 16384)|0;
   $353 = $352 >> 15;
   $354 = (_clamp_s16($353)|0);
   $355 = ((($gains)) + 6|0);
   HEAP16[$355>>1] = $354;
   $356 = $n;
   $357 = $ptr;
   $358 = $357 ^ 1;
   $359 = $in;
   $360 = (($359) + ($358<<1)|0);
   $361 = HEAP16[$360>>1]|0;
   _alist_envmix_mix($356,$buffers,$gains,$361);
   $362 = $ptr;
   $363 = (($362) + 1)|0;
   $ptr = $363;
   $364 = $x;
   $365 = (($364) + 1)|0;
   $x = $365;
  }
  $366 = $y;
  $367 = (($366) + 16)|0;
  $y = $367;
 }
 $368 = $10;
 HEAP16[$save_buffer>>1] = $368;
 $369 = $9;
 $370 = ((($save_buffer)) + 4|0);
 HEAP16[$370>>1] = $369;
 $371 = ((($ramps)) + 16|0);
 $372 = $371;
 $373 = $372;
 $374 = HEAP32[$373>>2]|0;
 $375 = (($372) + 4)|0;
 $376 = $375;
 $377 = HEAP32[$376>>2]|0;
 $378 = ((($save_buffer)) + 8|0);
 HEAP32[$378>>2] = $374;
 $379 = ((($ramps)) + 24|0);
 $380 = ((($379)) + 16|0);
 $381 = $380;
 $382 = $381;
 $383 = HEAP32[$382>>2]|0;
 $384 = (($381) + 4)|0;
 $385 = $384;
 $386 = HEAP32[$385>>2]|0;
 $387 = ((($save_buffer)) + 12|0);
 HEAP32[$387>>2] = $383;
 $388 = HEAP32[$exp_rates>>2]|0;
 $389 = ((($save_buffer)) + 16|0);
 HEAP32[$389>>2] = $388;
 $390 = ((($exp_rates)) + 4|0);
 $391 = HEAP32[$390>>2]|0;
 $392 = ((($save_buffer)) + 20|0);
 HEAP32[$392>>2] = $391;
 $393 = HEAP32[$exp_seq>>2]|0;
 $394 = ((($save_buffer)) + 24|0);
 HEAP32[$394>>2] = $393;
 $395 = ((($exp_seq)) + 4|0);
 $396 = HEAP32[$395>>2]|0;
 $397 = ((($save_buffer)) + 28|0);
 HEAP32[$397>>2] = $396;
 $398 = $ramps;
 $399 = $398;
 $400 = HEAP32[$399>>2]|0;
 $401 = (($398) + 4)|0;
 $402 = $401;
 $403 = HEAP32[$402>>2]|0;
 $404 = ((($save_buffer)) + 32|0);
 HEAP32[$404>>2] = $400;
 $405 = ((($ramps)) + 24|0);
 $406 = $405;
 $407 = $406;
 $408 = HEAP32[$407>>2]|0;
 $409 = (($406) + 4)|0;
 $410 = $409;
 $411 = HEAP32[$410>>2]|0;
 $412 = ((($save_buffer)) + 36|0);
 HEAP32[$412>>2] = $408;
 $413 = $0;
 $414 = HEAP32[$413>>2]|0;
 $415 = $14;
 $416 = (($414) + ($415)|0);
 dest=$416; src=$save_buffer; stop=dest+80|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
 STACKTOP = sp;return;
}
function _ramp_step($ramp) {
 $ramp = $ramp|0;
 var $$sink = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $target_reached = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $ramp;
 $1 = $0;
 $2 = ((($1)) + 8|0);
 $3 = $2;
 $4 = $3;
 $5 = HEAP32[$4>>2]|0;
 $6 = (($3) + 4)|0;
 $7 = $6;
 $8 = HEAP32[$7>>2]|0;
 $9 = $0;
 $10 = $9;
 $11 = $10;
 $12 = HEAP32[$11>>2]|0;
 $13 = (($10) + 4)|0;
 $14 = $13;
 $15 = HEAP32[$14>>2]|0;
 $16 = (_i64Add(($12|0),($15|0),($5|0),($8|0))|0);
 $17 = (getTempRet0() | 0);
 $18 = $9;
 $19 = $18;
 HEAP32[$19>>2] = $16;
 $20 = (($18) + 4)|0;
 $21 = $20;
 HEAP32[$21>>2] = $17;
 $22 = $0;
 $23 = ((($22)) + 8|0);
 $24 = $23;
 $25 = $24;
 $26 = HEAP32[$25>>2]|0;
 $27 = (($24) + 4)|0;
 $28 = $27;
 $29 = HEAP32[$28>>2]|0;
 $30 = ($29|0)<(0);
 $31 = ($26>>>0)<=(0);
 $32 = ($29|0)==(0);
 $33 = $32 & $31;
 $34 = $30 | $33;
 $35 = $0;
 $36 = $35;
 $37 = $36;
 $38 = HEAP32[$37>>2]|0;
 $39 = (($36) + 4)|0;
 $40 = $39;
 $41 = HEAP32[$40>>2]|0;
 $42 = $0;
 $43 = ((($42)) + 16|0);
 $44 = $43;
 $45 = $44;
 $46 = HEAP32[$45>>2]|0;
 $47 = (($44) + 4)|0;
 $48 = $47;
 $49 = HEAP32[$48>>2]|0;
 $50 = ($41|0)<($49|0);
 $51 = ($38>>>0)<=($46>>>0);
 $52 = ($41|0)==($49|0);
 $53 = $52 & $51;
 $54 = $50 | $53;
 $55 = ($41|0)>($49|0);
 $56 = ($38>>>0)>=($46>>>0);
 $57 = ($41|0)==($49|0);
 $58 = $57 & $56;
 $59 = $55 | $58;
 $$sink = $34 ? $54 : $59;
 $60 = $$sink&1;
 $61 = ($60|0)!=(0);
 $62 = $61&1;
 $target_reached = $62;
 $63 = $target_reached;
 $64 = $63&1;
 if (!($64)) {
  $84 = $0;
  $85 = $84;
  $86 = $85;
  $87 = HEAP32[$86>>2]|0;
  $88 = (($85) + 4)|0;
  $89 = $88;
  $90 = HEAP32[$89>>2]|0;
  $91 = (_bitshift64Ashr(($87|0),($90|0),16)|0);
  $92 = (getTempRet0() | 0);
  $93 = $91&65535;
  STACKTOP = sp;return ($93|0);
 }
 $65 = $0;
 $66 = ((($65)) + 16|0);
 $67 = $66;
 $68 = $67;
 $69 = HEAP32[$68>>2]|0;
 $70 = (($67) + 4)|0;
 $71 = $70;
 $72 = HEAP32[$71>>2]|0;
 $73 = $0;
 $74 = $73;
 $75 = $74;
 HEAP32[$75>>2] = $69;
 $76 = (($74) + 4)|0;
 $77 = $76;
 HEAP32[$77>>2] = $72;
 $78 = $0;
 $79 = ((($78)) + 8|0);
 $80 = $79;
 $81 = $80;
 HEAP32[$81>>2] = 0;
 $82 = (($80) + 4)|0;
 $83 = $82;
 HEAP32[$83>>2] = 0;
 $84 = $0;
 $85 = $84;
 $86 = $85;
 $87 = HEAP32[$86>>2]|0;
 $88 = (($85) + 4)|0;
 $89 = $88;
 $90 = HEAP32[$89>>2]|0;
 $91 = (_bitshift64Ashr(($87|0),($90|0),16)|0);
 $92 = (getTempRet0() | 0);
 $93 = $91&65535;
 STACKTOP = sp;return ($93|0);
}
function _clamp_s16($x) {
 $x = $x|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $0;
 $2 = ($1|0)<(-32768);
 $3 = $0;
 $4 = $2 ? -32768 : $3;
 $0 = $4;
 $5 = $0;
 $6 = ($5|0)>(32767);
 $7 = $0;
 $8 = $6 ? 32767 : $7;
 $0 = $8;
 $9 = $0;
 $10 = $9&65535;
 STACKTOP = sp;return ($10|0);
}
function _alist_envmix_mix($n,$dst,$gains,$src) {
 $n = $n|0;
 $dst = $dst|0;
 $gains = $gains|0;
 $src = $src|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $n;
 $1 = $dst;
 $2 = $gains;
 $3 = $src;
 $i = 0;
 while(1) {
  $4 = $i;
  $5 = $0;
  $6 = ($4>>>0)<($5>>>0);
  if (!($6)) {
   break;
  }
  $7 = $i;
  $8 = $1;
  $9 = (($8) + ($7<<2)|0);
  $10 = HEAP32[$9>>2]|0;
  $11 = $3;
  $12 = $i;
  $13 = $2;
  $14 = (($13) + ($12<<1)|0);
  $15 = HEAP16[$14>>1]|0;
  _sample_mix($10,$11,$15);
  $16 = $i;
  $17 = (($16) + 1)|0;
  $i = $17;
 }
 STACKTOP = sp;return;
}
function _alist_envmix_ge($hle,$init,$aux,$dmem_dl,$dmem_dr,$dmem_wl,$dmem_wr,$dmemi,$count,$dry,$wet,$vol,$target,$rate,$address) {
 $hle = $hle|0;
 $init = $init|0;
 $aux = $aux|0;
 $dmem_dl = $dmem_dl|0;
 $dmem_dr = $dmem_dr|0;
 $dmem_wl = $dmem_wl|0;
 $dmem_wr = $dmem_wr|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $dry = $dry|0;
 $wet = $wet|0;
 $vol = $vol|0;
 $target = $target|0;
 $rate = $rate|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0;
 var $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0;
 var $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0;
 var $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0;
 var $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0;
 var $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0;
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0;
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $buffers = 0, $dl = 0, $dr = 0, $gains = 0, $in = 0, $k = 0, $l_vol = 0, $n = 0, $r_vol = 0, $ramps = 0, $save_buffer = 0, $wl = 0, $wr = 0, dest = 0;
 var label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 240|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $ramps = sp;
 $save_buffer = sp + 128|0;
 $gains = sp + 120|0;
 $buffers = sp + 48|0;
 $0 = $hle;
 $15 = $init&1;
 $1 = $15;
 $16 = $aux&1;
 $2 = $16;
 $3 = $dmem_dl;
 $4 = $dmem_dr;
 $5 = $dmem_wl;
 $6 = $dmem_wr;
 $7 = $dmemi;
 $8 = $count;
 $9 = $dry;
 $10 = $wet;
 $11 = $vol;
 $12 = $target;
 $13 = $rate;
 $14 = $address;
 $17 = $2;
 $18 = $17&1;
 $19 = $18 ? 4 : 2;
 $n = $19;
 $20 = $0;
 $21 = ((($20)) + 88|0);
 $22 = $7;
 $23 = $22&65535;
 $24 = (($21) + ($23)|0);
 $in = $24;
 $25 = $0;
 $26 = ((($25)) + 88|0);
 $27 = $3;
 $28 = $27&65535;
 $29 = (($26) + ($28)|0);
 $dl = $29;
 $30 = $0;
 $31 = ((($30)) + 88|0);
 $32 = $4;
 $33 = $32&65535;
 $34 = (($31) + ($33)|0);
 $dr = $34;
 $35 = $0;
 $36 = ((($35)) + 88|0);
 $37 = $5;
 $38 = $37&65535;
 $39 = (($36) + ($38)|0);
 $wl = $39;
 $40 = $0;
 $41 = ((($40)) + 88|0);
 $42 = $6;
 $43 = $42&65535;
 $44 = (($41) + ($43)|0);
 $wr = $44;
 $45 = $1;
 $46 = $45&1;
 if ($46) {
  $47 = $11;
  $48 = HEAP16[$47>>1]|0;
  $49 = $48 << 16 >> 16;
  $50 = $49 << 16;
  $51 = ($50|0)<(0);
  $52 = $51 << 31 >> 31;
  $53 = $ramps;
  $54 = $53;
  HEAP32[$54>>2] = $50;
  $55 = (($53) + 4)|0;
  $56 = $55;
  HEAP32[$56>>2] = $52;
  $57 = $11;
  $58 = ((($57)) + 2|0);
  $59 = HEAP16[$58>>1]|0;
  $60 = $59 << 16 >> 16;
  $61 = $60 << 16;
  $62 = ($61|0)<(0);
  $63 = $62 << 31 >> 31;
  $64 = ((($ramps)) + 24|0);
  $65 = $64;
  $66 = $65;
  HEAP32[$66>>2] = $61;
  $67 = (($65) + 4)|0;
  $68 = $67;
  HEAP32[$68>>2] = $63;
  $69 = $12;
  $70 = HEAP16[$69>>1]|0;
  $71 = $70 << 16 >> 16;
  $72 = $71 << 16;
  $73 = ($72|0)<(0);
  $74 = $73 << 31 >> 31;
  $75 = ((($ramps)) + 16|0);
  $76 = $75;
  $77 = $76;
  HEAP32[$77>>2] = $72;
  $78 = (($76) + 4)|0;
  $79 = $78;
  HEAP32[$79>>2] = $74;
  $80 = $12;
  $81 = ((($80)) + 2|0);
  $82 = HEAP16[$81>>1]|0;
  $83 = $82 << 16 >> 16;
  $84 = $83 << 16;
  $85 = ($84|0)<(0);
  $86 = $85 << 31 >> 31;
  $87 = ((($ramps)) + 24|0);
  $88 = ((($87)) + 16|0);
  $89 = $88;
  $90 = $89;
  HEAP32[$90>>2] = $84;
  $91 = (($89) + 4)|0;
  $92 = $91;
  HEAP32[$92>>2] = $86;
  $93 = $13;
  $94 = HEAP32[$93>>2]|0;
  $95 = (($94|0) / 8)&-1;
  $96 = ($95|0)<(0);
  $97 = $96 << 31 >> 31;
  $98 = ((($ramps)) + 8|0);
  $99 = $98;
  $100 = $99;
  HEAP32[$100>>2] = $95;
  $101 = (($99) + 4)|0;
  $102 = $101;
  HEAP32[$102>>2] = $97;
  $103 = $13;
  $104 = ((($103)) + 4|0);
  $105 = HEAP32[$104>>2]|0;
  $106 = (($105|0) / 8)&-1;
  $107 = ($106|0)<(0);
  $108 = $107 << 31 >> 31;
  $109 = ((($ramps)) + 24|0);
  $110 = ((($109)) + 8|0);
  $111 = $110;
  $112 = $111;
  HEAP32[$112>>2] = $106;
  $113 = (($111) + 4)|0;
  $114 = $113;
  HEAP32[$114>>2] = $108;
 } else {
  $115 = $0;
  $116 = HEAP32[$115>>2]|0;
  $117 = $14;
  $118 = (($116) + ($117)|0);
  dest=$save_buffer; src=$118; stop=dest+80|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
  $119 = HEAP16[$save_buffer>>1]|0;
  $10 = $119;
  $120 = ((($save_buffer)) + 4|0);
  $121 = HEAP16[$120>>1]|0;
  $9 = $121;
  $122 = ((($save_buffer)) + 8|0);
  $123 = HEAP32[$122>>2]|0;
  $124 = ($123|0)<(0);
  $125 = $124 << 31 >> 31;
  $126 = ((($ramps)) + 16|0);
  $127 = $126;
  $128 = $127;
  HEAP32[$128>>2] = $123;
  $129 = (($127) + 4)|0;
  $130 = $129;
  HEAP32[$130>>2] = $125;
  $131 = ((($save_buffer)) + 12|0);
  $132 = HEAP32[$131>>2]|0;
  $133 = ($132|0)<(0);
  $134 = $133 << 31 >> 31;
  $135 = ((($ramps)) + 24|0);
  $136 = ((($135)) + 16|0);
  $137 = $136;
  $138 = $137;
  HEAP32[$138>>2] = $132;
  $139 = (($137) + 4)|0;
  $140 = $139;
  HEAP32[$140>>2] = $134;
  $141 = ((($save_buffer)) + 16|0);
  $142 = HEAP32[$141>>2]|0;
  $143 = ($142|0)<(0);
  $144 = $143 << 31 >> 31;
  $145 = ((($ramps)) + 8|0);
  $146 = $145;
  $147 = $146;
  HEAP32[$147>>2] = $142;
  $148 = (($146) + 4)|0;
  $149 = $148;
  HEAP32[$149>>2] = $144;
  $150 = ((($save_buffer)) + 20|0);
  $151 = HEAP32[$150>>2]|0;
  $152 = ($151|0)<(0);
  $153 = $152 << 31 >> 31;
  $154 = ((($ramps)) + 24|0);
  $155 = ((($154)) + 8|0);
  $156 = $155;
  $157 = $156;
  HEAP32[$157>>2] = $151;
  $158 = (($156) + 4)|0;
  $159 = $158;
  HEAP32[$159>>2] = $153;
  $160 = ((($save_buffer)) + 32|0);
  $161 = HEAP32[$160>>2]|0;
  $162 = ($161|0)<(0);
  $163 = $162 << 31 >> 31;
  $164 = $ramps;
  $165 = $164;
  HEAP32[$165>>2] = $161;
  $166 = (($164) + 4)|0;
  $167 = $166;
  HEAP32[$167>>2] = $163;
  $168 = ((($save_buffer)) + 36|0);
  $169 = HEAP32[$168>>2]|0;
  $170 = ($169|0)<(0);
  $171 = $170 << 31 >> 31;
  $172 = ((($ramps)) + 24|0);
  $173 = $172;
  $174 = $173;
  HEAP32[$174>>2] = $169;
  $175 = (($173) + 4)|0;
  $176 = $175;
  HEAP32[$176>>2] = $171;
 }
 $177 = $8;
 $178 = $177&65535;
 $179 = $178 >> 1;
 $180 = $179&65535;
 $8 = $180;
 $k = 0;
 while(1) {
  $181 = $k;
  $182 = $8;
  $183 = $182&65535;
  $184 = ($181>>>0)<($183>>>0);
  if (!($184)) {
   break;
  }
  $185 = (_ramp_step($ramps)|0);
  $l_vol = $185;
  $186 = ((($ramps)) + 24|0);
  $187 = (_ramp_step($186)|0);
  $r_vol = $187;
  $188 = $dl;
  $189 = $k;
  $190 = $189 ^ 1;
  $191 = (($188) + ($190<<1)|0);
  HEAP32[$buffers>>2] = $191;
  $192 = $dr;
  $193 = $k;
  $194 = $193 ^ 1;
  $195 = (($192) + ($194<<1)|0);
  $196 = ((($buffers)) + 4|0);
  HEAP32[$196>>2] = $195;
  $197 = $wl;
  $198 = $k;
  $199 = $198 ^ 1;
  $200 = (($197) + ($199<<1)|0);
  $201 = ((($buffers)) + 8|0);
  HEAP32[$201>>2] = $200;
  $202 = $wr;
  $203 = $k;
  $204 = $203 ^ 1;
  $205 = (($202) + ($204<<1)|0);
  $206 = ((($buffers)) + 12|0);
  HEAP32[$206>>2] = $205;
  $207 = $l_vol;
  $208 = $207 << 16 >> 16;
  $209 = $9;
  $210 = $209 << 16 >> 16;
  $211 = Math_imul($208, $210)|0;
  $212 = (($211) + 16384)|0;
  $213 = $212 >> 15;
  $214 = (_clamp_s16($213)|0);
  HEAP16[$gains>>1] = $214;
  $215 = $r_vol;
  $216 = $215 << 16 >> 16;
  $217 = $9;
  $218 = $217 << 16 >> 16;
  $219 = Math_imul($216, $218)|0;
  $220 = (($219) + 16384)|0;
  $221 = $220 >> 15;
  $222 = (_clamp_s16($221)|0);
  $223 = ((($gains)) + 2|0);
  HEAP16[$223>>1] = $222;
  $224 = $l_vol;
  $225 = $224 << 16 >> 16;
  $226 = $10;
  $227 = $226 << 16 >> 16;
  $228 = Math_imul($225, $227)|0;
  $229 = (($228) + 16384)|0;
  $230 = $229 >> 15;
  $231 = (_clamp_s16($230)|0);
  $232 = ((($gains)) + 4|0);
  HEAP16[$232>>1] = $231;
  $233 = $r_vol;
  $234 = $233 << 16 >> 16;
  $235 = $10;
  $236 = $235 << 16 >> 16;
  $237 = Math_imul($234, $236)|0;
  $238 = (($237) + 16384)|0;
  $239 = $238 >> 15;
  $240 = (_clamp_s16($239)|0);
  $241 = ((($gains)) + 6|0);
  HEAP16[$241>>1] = $240;
  $242 = $n;
  $243 = $k;
  $244 = $243 ^ 1;
  $245 = $in;
  $246 = (($245) + ($244<<1)|0);
  $247 = HEAP16[$246>>1]|0;
  _alist_envmix_mix($242,$buffers,$gains,$247);
  $248 = $k;
  $249 = (($248) + 1)|0;
  $k = $249;
 }
 $250 = $10;
 HEAP16[$save_buffer>>1] = $250;
 $251 = $9;
 $252 = ((($save_buffer)) + 4|0);
 HEAP16[$252>>1] = $251;
 $253 = ((($ramps)) + 16|0);
 $254 = $253;
 $255 = $254;
 $256 = HEAP32[$255>>2]|0;
 $257 = (($254) + 4)|0;
 $258 = $257;
 $259 = HEAP32[$258>>2]|0;
 $260 = ((($save_buffer)) + 8|0);
 HEAP32[$260>>2] = $256;
 $261 = ((($ramps)) + 24|0);
 $262 = ((($261)) + 16|0);
 $263 = $262;
 $264 = $263;
 $265 = HEAP32[$264>>2]|0;
 $266 = (($263) + 4)|0;
 $267 = $266;
 $268 = HEAP32[$267>>2]|0;
 $269 = ((($save_buffer)) + 12|0);
 HEAP32[$269>>2] = $265;
 $270 = ((($ramps)) + 8|0);
 $271 = $270;
 $272 = $271;
 $273 = HEAP32[$272>>2]|0;
 $274 = (($271) + 4)|0;
 $275 = $274;
 $276 = HEAP32[$275>>2]|0;
 $277 = ((($save_buffer)) + 16|0);
 HEAP32[$277>>2] = $273;
 $278 = ((($ramps)) + 24|0);
 $279 = ((($278)) + 8|0);
 $280 = $279;
 $281 = $280;
 $282 = HEAP32[$281>>2]|0;
 $283 = (($280) + 4)|0;
 $284 = $283;
 $285 = HEAP32[$284>>2]|0;
 $286 = ((($save_buffer)) + 20|0);
 HEAP32[$286>>2] = $282;
 $287 = $ramps;
 $288 = $287;
 $289 = HEAP32[$288>>2]|0;
 $290 = (($287) + 4)|0;
 $291 = $290;
 $292 = HEAP32[$291>>2]|0;
 $293 = ((($save_buffer)) + 32|0);
 HEAP32[$293>>2] = $289;
 $294 = ((($ramps)) + 24|0);
 $295 = $294;
 $296 = $295;
 $297 = HEAP32[$296>>2]|0;
 $298 = (($295) + 4)|0;
 $299 = $298;
 $300 = HEAP32[$299>>2]|0;
 $301 = ((($save_buffer)) + 36|0);
 HEAP32[$301>>2] = $297;
 $302 = $0;
 $303 = HEAP32[$302>>2]|0;
 $304 = $14;
 $305 = (($303) + ($304)|0);
 dest=$305; src=$save_buffer; stop=dest+80|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
 STACKTOP = sp;return;
}
function _alist_envmix_lin($hle,$init,$dmem_dl,$dmem_dr,$dmem_wl,$dmem_wr,$dmemi,$count,$dry,$wet,$vol,$target,$rate,$address) {
 $hle = $hle|0;
 $init = $init|0;
 $dmem_dl = $dmem_dl|0;
 $dmem_dr = $dmem_dr|0;
 $dmem_wl = $dmem_wl|0;
 $dmem_wr = $dmem_wr|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $dry = $dry|0;
 $wet = $wet|0;
 $vol = $vol|0;
 $target = $target|0;
 $rate = $rate|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0;
 var $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0;
 var $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0;
 var $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0;
 var $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0;
 var $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0;
 var $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0;
 var $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0;
 var $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $buffers = 0, $dl = 0, $dr = 0, $gains = 0, $in = 0, $k = 0, $l_vol = 0, $r_vol = 0, $ramps = 0, $save_buffer = 0;
 var $wl = 0, $wr = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $ramps = sp;
 $save_buffer = sp + 120|0;
 $gains = sp + 112|0;
 $buffers = sp + 48|0;
 $0 = $hle;
 $14 = $init&1;
 $1 = $14;
 $2 = $dmem_dl;
 $3 = $dmem_dr;
 $4 = $dmem_wl;
 $5 = $dmem_wr;
 $6 = $dmemi;
 $7 = $count;
 $8 = $dry;
 $9 = $wet;
 $10 = $vol;
 $11 = $target;
 $12 = $rate;
 $13 = $address;
 $15 = $0;
 $16 = ((($15)) + 88|0);
 $17 = $6;
 $18 = $17&65535;
 $19 = (($16) + ($18)|0);
 $in = $19;
 $20 = $0;
 $21 = ((($20)) + 88|0);
 $22 = $2;
 $23 = $22&65535;
 $24 = (($21) + ($23)|0);
 $dl = $24;
 $25 = $0;
 $26 = ((($25)) + 88|0);
 $27 = $3;
 $28 = $27&65535;
 $29 = (($26) + ($28)|0);
 $dr = $29;
 $30 = $0;
 $31 = ((($30)) + 88|0);
 $32 = $4;
 $33 = $32&65535;
 $34 = (($31) + ($33)|0);
 $wl = $34;
 $35 = $0;
 $36 = ((($35)) + 88|0);
 $37 = $5;
 $38 = $37&65535;
 $39 = (($36) + ($38)|0);
 $wr = $39;
 $40 = $1;
 $41 = $40&1;
 if ($41) {
  $42 = $12;
  $43 = HEAP32[$42>>2]|0;
  $44 = (($43|0) / 8)&-1;
  $45 = ($44|0)<(0);
  $46 = $45 << 31 >> 31;
  $47 = ((($ramps)) + 8|0);
  $48 = $47;
  $49 = $48;
  HEAP32[$49>>2] = $44;
  $50 = (($48) + 4)|0;
  $51 = $50;
  HEAP32[$51>>2] = $46;
  $52 = $10;
  $53 = HEAP16[$52>>1]|0;
  $54 = $53 << 16 >> 16;
  $55 = $54 << 16;
  $56 = ($55|0)<(0);
  $57 = $56 << 31 >> 31;
  $58 = $ramps;
  $59 = $58;
  HEAP32[$59>>2] = $55;
  $60 = (($58) + 4)|0;
  $61 = $60;
  HEAP32[$61>>2] = $57;
  $62 = $11;
  $63 = HEAP16[$62>>1]|0;
  $64 = $63 << 16 >> 16;
  $65 = $64 << 16;
  $66 = ($65|0)<(0);
  $67 = $66 << 31 >> 31;
  $68 = ((($ramps)) + 16|0);
  $69 = $68;
  $70 = $69;
  HEAP32[$70>>2] = $65;
  $71 = (($69) + 4)|0;
  $72 = $71;
  HEAP32[$72>>2] = $67;
  $73 = $12;
  $74 = ((($73)) + 4|0);
  $75 = HEAP32[$74>>2]|0;
  $76 = (($75|0) / 8)&-1;
  $77 = ($76|0)<(0);
  $78 = $77 << 31 >> 31;
  $79 = ((($ramps)) + 24|0);
  $80 = ((($79)) + 8|0);
  $81 = $80;
  $82 = $81;
  HEAP32[$82>>2] = $76;
  $83 = (($81) + 4)|0;
  $84 = $83;
  HEAP32[$84>>2] = $78;
  $85 = $10;
  $86 = ((($85)) + 2|0);
  $87 = HEAP16[$86>>1]|0;
  $88 = $87 << 16 >> 16;
  $89 = $88 << 16;
  $90 = ($89|0)<(0);
  $91 = $90 << 31 >> 31;
  $92 = ((($ramps)) + 24|0);
  $93 = $92;
  $94 = $93;
  HEAP32[$94>>2] = $89;
  $95 = (($93) + 4)|0;
  $96 = $95;
  HEAP32[$96>>2] = $91;
  $97 = $11;
  $98 = ((($97)) + 2|0);
  $99 = HEAP16[$98>>1]|0;
  $100 = $99 << 16 >> 16;
  $101 = $100 << 16;
  $102 = ($101|0)<(0);
  $103 = $102 << 31 >> 31;
  $104 = ((($ramps)) + 24|0);
  $105 = ((($104)) + 16|0);
  $106 = $105;
  $107 = $106;
  HEAP32[$107>>2] = $101;
  $108 = (($106) + 4)|0;
  $109 = $108;
  HEAP32[$109>>2] = $103;
 } else {
  $110 = $0;
  $111 = HEAP32[$110>>2]|0;
  $112 = $13;
  $113 = (($111) + ($112)|0);
  dest=$save_buffer; src=$113; stop=dest+80|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
  $114 = HEAP16[$save_buffer>>1]|0;
  $9 = $114;
  $115 = ((($save_buffer)) + 4|0);
  $116 = HEAP16[$115>>1]|0;
  $8 = $116;
  $117 = ((($save_buffer)) + 8|0);
  $118 = HEAP16[$117>>1]|0;
  $119 = $118 << 16 >> 16;
  $120 = $119 << 16;
  $121 = ($120|0)<(0);
  $122 = $121 << 31 >> 31;
  $123 = ((($ramps)) + 16|0);
  $124 = $123;
  $125 = $124;
  HEAP32[$125>>2] = $120;
  $126 = (($124) + 4)|0;
  $127 = $126;
  HEAP32[$127>>2] = $122;
  $128 = ((($save_buffer)) + 12|0);
  $129 = HEAP16[$128>>1]|0;
  $130 = $129 << 16 >> 16;
  $131 = $130 << 16;
  $132 = ($131|0)<(0);
  $133 = $132 << 31 >> 31;
  $134 = ((($ramps)) + 24|0);
  $135 = ((($134)) + 16|0);
  $136 = $135;
  $137 = $136;
  HEAP32[$137>>2] = $131;
  $138 = (($136) + 4)|0;
  $139 = $138;
  HEAP32[$139>>2] = $133;
  $140 = ((($save_buffer)) + 16|0);
  $141 = HEAP32[$140>>2]|0;
  $142 = ($141|0)<(0);
  $143 = $142 << 31 >> 31;
  $144 = ((($ramps)) + 8|0);
  $145 = $144;
  $146 = $145;
  HEAP32[$146>>2] = $141;
  $147 = (($145) + 4)|0;
  $148 = $147;
  HEAP32[$148>>2] = $143;
  $149 = ((($save_buffer)) + 20|0);
  $150 = HEAP32[$149>>2]|0;
  $151 = ($150|0)<(0);
  $152 = $151 << 31 >> 31;
  $153 = ((($ramps)) + 24|0);
  $154 = ((($153)) + 8|0);
  $155 = $154;
  $156 = $155;
  HEAP32[$156>>2] = $150;
  $157 = (($155) + 4)|0;
  $158 = $157;
  HEAP32[$158>>2] = $152;
  $159 = ((($save_buffer)) + 32|0);
  $160 = HEAP32[$159>>2]|0;
  $161 = ($160|0)<(0);
  $162 = $161 << 31 >> 31;
  $163 = $ramps;
  $164 = $163;
  HEAP32[$164>>2] = $160;
  $165 = (($163) + 4)|0;
  $166 = $165;
  HEAP32[$166>>2] = $162;
  $167 = ((($save_buffer)) + 36|0);
  $168 = HEAP32[$167>>2]|0;
  $169 = ($168|0)<(0);
  $170 = $169 << 31 >> 31;
  $171 = ((($ramps)) + 24|0);
  $172 = $171;
  $173 = $172;
  HEAP32[$173>>2] = $168;
  $174 = (($172) + 4)|0;
  $175 = $174;
  HEAP32[$175>>2] = $170;
 }
 $176 = $7;
 $177 = $176&65535;
 $178 = $177 >> 1;
 $179 = $178&65535;
 $7 = $179;
 $k = 0;
 while(1) {
  $180 = $k;
  $181 = $7;
  $182 = $181&65535;
  $183 = ($180>>>0)<($182>>>0);
  if (!($183)) {
   break;
  }
  $184 = (_ramp_step($ramps)|0);
  $l_vol = $184;
  $185 = ((($ramps)) + 24|0);
  $186 = (_ramp_step($185)|0);
  $r_vol = $186;
  $187 = $dl;
  $188 = $k;
  $189 = $188 ^ 1;
  $190 = (($187) + ($189<<1)|0);
  HEAP32[$buffers>>2] = $190;
  $191 = $dr;
  $192 = $k;
  $193 = $192 ^ 1;
  $194 = (($191) + ($193<<1)|0);
  $195 = ((($buffers)) + 4|0);
  HEAP32[$195>>2] = $194;
  $196 = $wl;
  $197 = $k;
  $198 = $197 ^ 1;
  $199 = (($196) + ($198<<1)|0);
  $200 = ((($buffers)) + 8|0);
  HEAP32[$200>>2] = $199;
  $201 = $wr;
  $202 = $k;
  $203 = $202 ^ 1;
  $204 = (($201) + ($203<<1)|0);
  $205 = ((($buffers)) + 12|0);
  HEAP32[$205>>2] = $204;
  $206 = $l_vol;
  $207 = $206 << 16 >> 16;
  $208 = $8;
  $209 = $208 << 16 >> 16;
  $210 = Math_imul($207, $209)|0;
  $211 = (($210) + 16384)|0;
  $212 = $211 >> 15;
  $213 = (_clamp_s16($212)|0);
  HEAP16[$gains>>1] = $213;
  $214 = $r_vol;
  $215 = $214 << 16 >> 16;
  $216 = $8;
  $217 = $216 << 16 >> 16;
  $218 = Math_imul($215, $217)|0;
  $219 = (($218) + 16384)|0;
  $220 = $219 >> 15;
  $221 = (_clamp_s16($220)|0);
  $222 = ((($gains)) + 2|0);
  HEAP16[$222>>1] = $221;
  $223 = $l_vol;
  $224 = $223 << 16 >> 16;
  $225 = $9;
  $226 = $225 << 16 >> 16;
  $227 = Math_imul($224, $226)|0;
  $228 = (($227) + 16384)|0;
  $229 = $228 >> 15;
  $230 = (_clamp_s16($229)|0);
  $231 = ((($gains)) + 4|0);
  HEAP16[$231>>1] = $230;
  $232 = $r_vol;
  $233 = $232 << 16 >> 16;
  $234 = $9;
  $235 = $234 << 16 >> 16;
  $236 = Math_imul($233, $235)|0;
  $237 = (($236) + 16384)|0;
  $238 = $237 >> 15;
  $239 = (_clamp_s16($238)|0);
  $240 = ((($gains)) + 6|0);
  HEAP16[$240>>1] = $239;
  $241 = $k;
  $242 = $241 ^ 1;
  $243 = $in;
  $244 = (($243) + ($242<<1)|0);
  $245 = HEAP16[$244>>1]|0;
  _alist_envmix_mix(4,$buffers,$gains,$245);
  $246 = $k;
  $247 = (($246) + 1)|0;
  $k = $247;
 }
 $248 = $9;
 HEAP16[$save_buffer>>1] = $248;
 $249 = $8;
 $250 = ((($save_buffer)) + 4|0);
 HEAP16[$250>>1] = $249;
 $251 = ((($ramps)) + 16|0);
 $252 = $251;
 $253 = $252;
 $254 = HEAP32[$253>>2]|0;
 $255 = (($252) + 4)|0;
 $256 = $255;
 $257 = HEAP32[$256>>2]|0;
 $258 = (_bitshift64Ashr(($254|0),($257|0),16)|0);
 $259 = (getTempRet0() | 0);
 $260 = $258&65535;
 $261 = ((($save_buffer)) + 8|0);
 HEAP16[$261>>1] = $260;
 $262 = ((($ramps)) + 24|0);
 $263 = ((($262)) + 16|0);
 $264 = $263;
 $265 = $264;
 $266 = HEAP32[$265>>2]|0;
 $267 = (($264) + 4)|0;
 $268 = $267;
 $269 = HEAP32[$268>>2]|0;
 $270 = (_bitshift64Ashr(($266|0),($269|0),16)|0);
 $271 = (getTempRet0() | 0);
 $272 = $270&65535;
 $273 = ((($save_buffer)) + 12|0);
 HEAP16[$273>>1] = $272;
 $274 = ((($ramps)) + 8|0);
 $275 = $274;
 $276 = $275;
 $277 = HEAP32[$276>>2]|0;
 $278 = (($275) + 4)|0;
 $279 = $278;
 $280 = HEAP32[$279>>2]|0;
 $281 = ((($save_buffer)) + 16|0);
 HEAP32[$281>>2] = $277;
 $282 = ((($ramps)) + 24|0);
 $283 = ((($282)) + 8|0);
 $284 = $283;
 $285 = $284;
 $286 = HEAP32[$285>>2]|0;
 $287 = (($284) + 4)|0;
 $288 = $287;
 $289 = HEAP32[$288>>2]|0;
 $290 = ((($save_buffer)) + 20|0);
 HEAP32[$290>>2] = $286;
 $291 = $ramps;
 $292 = $291;
 $293 = HEAP32[$292>>2]|0;
 $294 = (($291) + 4)|0;
 $295 = $294;
 $296 = HEAP32[$295>>2]|0;
 $297 = ((($save_buffer)) + 32|0);
 HEAP32[$297>>2] = $293;
 $298 = ((($ramps)) + 24|0);
 $299 = $298;
 $300 = $299;
 $301 = HEAP32[$300>>2]|0;
 $302 = (($299) + 4)|0;
 $303 = $302;
 $304 = HEAP32[$303>>2]|0;
 $305 = ((($save_buffer)) + 36|0);
 HEAP32[$305>>2] = $301;
 $306 = $0;
 $307 = HEAP32[$306>>2]|0;
 $308 = $13;
 $309 = (($307) + ($308)|0);
 dest=$309; src=$save_buffer; stop=dest+80|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
 STACKTOP = sp;return;
}
function _alist_envmix_nead($hle,$swap_wet_LR,$dmem_dl,$dmem_dr,$dmem_wl,$dmem_wr,$dmemi,$count,$env_values,$env_steps,$xors) {
 $hle = $hle|0;
 $swap_wet_LR = $swap_wet_LR|0;
 $dmem_dl = $dmem_dl|0;
 $dmem_dr = $dmem_dr|0;
 $dmem_wl = $dmem_wl|0;
 $dmem_wr = $dmem_wr|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $env_values = $env_values|0;
 $env_steps = $env_steps|0;
 $xors = $xors|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $dl = 0, $dr = 0, $i = 0, $in = 0, $l = 0, $l2 = 0, $r = 0, $r2 = 0, $wl = 0, $wr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $wl = sp + 8|0;
 $wr = sp + 4|0;
 $0 = $hle;
 $11 = $swap_wet_LR&1;
 $1 = $11;
 $2 = $dmem_dl;
 $3 = $dmem_dr;
 $4 = $dmem_wl;
 $5 = $dmem_wr;
 $6 = $dmemi;
 $7 = $count;
 $8 = $env_values;
 $9 = $env_steps;
 $10 = $xors;
 $12 = $0;
 $13 = ((($12)) + 88|0);
 $14 = $6;
 $15 = $14&65535;
 $16 = (($13) + ($15)|0);
 $in = $16;
 $17 = $0;
 $18 = ((($17)) + 88|0);
 $19 = $2;
 $20 = $19&65535;
 $21 = (($18) + ($20)|0);
 $dl = $21;
 $22 = $0;
 $23 = ((($22)) + 88|0);
 $24 = $3;
 $25 = $24&65535;
 $26 = (($23) + ($25)|0);
 $dr = $26;
 $27 = $0;
 $28 = ((($27)) + 88|0);
 $29 = $4;
 $30 = $29&65535;
 $31 = (($28) + ($30)|0);
 HEAP32[$wl>>2] = $31;
 $32 = $0;
 $33 = ((($32)) + 88|0);
 $34 = $5;
 $35 = $34&65535;
 $36 = (($33) + ($35)|0);
 HEAP32[$wr>>2] = $36;
 $37 = $7;
 $38 = (_align($37,8)|0);
 $7 = $38;
 $39 = $1;
 $40 = $39&1;
 if ($40) {
  _swap($wl,$wr);
 }
 while(1) {
  $41 = $7;
  $42 = ($41|0)!=(0);
  if (!($42)) {
   break;
  }
  $i = 0;
  while(1) {
   $43 = $i;
   $44 = ($43>>>0)<(8);
   if (!($44)) {
    break;
   }
   $45 = $i;
   $46 = $45 ^ 1;
   $47 = $in;
   $48 = (($47) + ($46<<1)|0);
   $49 = HEAP16[$48>>1]|0;
   $50 = $49 << 16 >> 16;
   $51 = $8;
   $52 = HEAP16[$51>>1]|0;
   $53 = $52&65535;
   $54 = Math_imul($50, $53)|0;
   $55 = $54 >>> 16;
   $56 = $10;
   $57 = HEAP16[$56>>1]|0;
   $58 = $57 << 16 >> 16;
   $59 = $55 ^ $58;
   $60 = $59&65535;
   $l = $60;
   $61 = $i;
   $62 = $61 ^ 1;
   $63 = $in;
   $64 = (($63) + ($62<<1)|0);
   $65 = HEAP16[$64>>1]|0;
   $66 = $65 << 16 >> 16;
   $67 = $8;
   $68 = ((($67)) + 2|0);
   $69 = HEAP16[$68>>1]|0;
   $70 = $69&65535;
   $71 = Math_imul($66, $70)|0;
   $72 = $71 >>> 16;
   $73 = $10;
   $74 = ((($73)) + 2|0);
   $75 = HEAP16[$74>>1]|0;
   $76 = $75 << 16 >> 16;
   $77 = $72 ^ $76;
   $78 = $77&65535;
   $r = $78;
   $79 = $l;
   $80 = $79 << 16 >> 16;
   $81 = $8;
   $82 = ((($81)) + 4|0);
   $83 = HEAP16[$82>>1]|0;
   $84 = $83&65535;
   $85 = Math_imul($80, $84)|0;
   $86 = $85 >>> 16;
   $87 = $10;
   $88 = ((($87)) + 4|0);
   $89 = HEAP16[$88>>1]|0;
   $90 = $89 << 16 >> 16;
   $91 = $86 ^ $90;
   $92 = $91&65535;
   $l2 = $92;
   $93 = $r;
   $94 = $93 << 16 >> 16;
   $95 = $8;
   $96 = ((($95)) + 4|0);
   $97 = HEAP16[$96>>1]|0;
   $98 = $97&65535;
   $99 = Math_imul($94, $98)|0;
   $100 = $99 >>> 16;
   $101 = $10;
   $102 = ((($101)) + 6|0);
   $103 = HEAP16[$102>>1]|0;
   $104 = $103 << 16 >> 16;
   $105 = $100 ^ $104;
   $106 = $105&65535;
   $r2 = $106;
   $107 = $i;
   $108 = $107 ^ 1;
   $109 = $dl;
   $110 = (($109) + ($108<<1)|0);
   $111 = HEAP16[$110>>1]|0;
   $112 = $111 << 16 >> 16;
   $113 = $l;
   $114 = $113 << 16 >> 16;
   $115 = (($112) + ($114))|0;
   $116 = (_clamp_s16($115)|0);
   $117 = $i;
   $118 = $117 ^ 1;
   $119 = $dl;
   $120 = (($119) + ($118<<1)|0);
   HEAP16[$120>>1] = $116;
   $121 = $i;
   $122 = $121 ^ 1;
   $123 = $dr;
   $124 = (($123) + ($122<<1)|0);
   $125 = HEAP16[$124>>1]|0;
   $126 = $125 << 16 >> 16;
   $127 = $r;
   $128 = $127 << 16 >> 16;
   $129 = (($126) + ($128))|0;
   $130 = (_clamp_s16($129)|0);
   $131 = $i;
   $132 = $131 ^ 1;
   $133 = $dr;
   $134 = (($133) + ($132<<1)|0);
   HEAP16[$134>>1] = $130;
   $135 = $i;
   $136 = $135 ^ 1;
   $137 = HEAP32[$wl>>2]|0;
   $138 = (($137) + ($136<<1)|0);
   $139 = HEAP16[$138>>1]|0;
   $140 = $139 << 16 >> 16;
   $141 = $l2;
   $142 = $141 << 16 >> 16;
   $143 = (($140) + ($142))|0;
   $144 = (_clamp_s16($143)|0);
   $145 = $i;
   $146 = $145 ^ 1;
   $147 = HEAP32[$wl>>2]|0;
   $148 = (($147) + ($146<<1)|0);
   HEAP16[$148>>1] = $144;
   $149 = $i;
   $150 = $149 ^ 1;
   $151 = HEAP32[$wr>>2]|0;
   $152 = (($151) + ($150<<1)|0);
   $153 = HEAP16[$152>>1]|0;
   $154 = $153 << 16 >> 16;
   $155 = $r2;
   $156 = $155 << 16 >> 16;
   $157 = (($154) + ($156))|0;
   $158 = (_clamp_s16($157)|0);
   $159 = $i;
   $160 = $159 ^ 1;
   $161 = HEAP32[$wr>>2]|0;
   $162 = (($161) + ($160<<1)|0);
   HEAP16[$162>>1] = $158;
   $163 = $i;
   $164 = (($163) + 1)|0;
   $i = $164;
  }
  $165 = $9;
  $166 = HEAP16[$165>>1]|0;
  $167 = $166&65535;
  $168 = $8;
  $169 = HEAP16[$168>>1]|0;
  $170 = $169&65535;
  $171 = (($170) + ($167))|0;
  $172 = $171&65535;
  HEAP16[$168>>1] = $172;
  $173 = $9;
  $174 = ((($173)) + 2|0);
  $175 = HEAP16[$174>>1]|0;
  $176 = $175&65535;
  $177 = $8;
  $178 = ((($177)) + 2|0);
  $179 = HEAP16[$178>>1]|0;
  $180 = $179&65535;
  $181 = (($180) + ($176))|0;
  $182 = $181&65535;
  HEAP16[$178>>1] = $182;
  $183 = $9;
  $184 = ((($183)) + 4|0);
  $185 = HEAP16[$184>>1]|0;
  $186 = $185&65535;
  $187 = $8;
  $188 = ((($187)) + 4|0);
  $189 = HEAP16[$188>>1]|0;
  $190 = $189&65535;
  $191 = (($190) + ($186))|0;
  $192 = $191&65535;
  HEAP16[$188>>1] = $192;
  $193 = $dl;
  $194 = ((($193)) + 16|0);
  $dl = $194;
  $195 = $dr;
  $196 = ((($195)) + 16|0);
  $dr = $196;
  $197 = HEAP32[$wl>>2]|0;
  $198 = ((($197)) + 16|0);
  HEAP32[$wl>>2] = $198;
  $199 = HEAP32[$wr>>2]|0;
  $200 = ((($199)) + 16|0);
  HEAP32[$wr>>2] = $200;
  $201 = $in;
  $202 = ((($201)) + 16|0);
  $in = $202;
  $203 = $7;
  $204 = (($203) - 8)|0;
  $7 = $204;
 }
 STACKTOP = sp;return;
}
function _swap($a,$b) {
 $a = $a|0;
 $b = $b|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $tmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $a;
 $1 = $b;
 $2 = $1;
 $3 = HEAP32[$2>>2]|0;
 $tmp = $3;
 $4 = $0;
 $5 = HEAP32[$4>>2]|0;
 $6 = $1;
 HEAP32[$6>>2] = $5;
 $7 = $tmp;
 $8 = $0;
 HEAP32[$8>>2] = $7;
 STACKTOP = sp;return;
}
function _alist_mix($hle,$dmemo,$dmemi,$count,$gain) {
 $hle = $hle|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $gain = $gain|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $dst = 0, $src = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmemo;
 $2 = $dmemi;
 $3 = $count;
 $4 = $gain;
 $5 = $0;
 $6 = ((($5)) + 88|0);
 $7 = $1;
 $8 = $7&65535;
 $9 = (($6) + ($8)|0);
 $dst = $9;
 $10 = $0;
 $11 = ((($10)) + 88|0);
 $12 = $2;
 $13 = $12&65535;
 $14 = (($11) + ($13)|0);
 $src = $14;
 $15 = $3;
 $16 = $15&65535;
 $17 = $16 >> 1;
 $18 = $17&65535;
 $3 = $18;
 while(1) {
  $19 = $3;
  $20 = $19&65535;
  $21 = ($20|0)!=(0);
  if (!($21)) {
   break;
  }
  $22 = $dst;
  $23 = $src;
  $24 = HEAP16[$23>>1]|0;
  $25 = $4;
  _sample_mix($22,$24,$25);
  $26 = $dst;
  $27 = ((($26)) + 2|0);
  $dst = $27;
  $28 = $src;
  $29 = ((($28)) + 2|0);
  $src = $29;
  $30 = $3;
  $31 = (($30) + -1)<<16>>16;
  $3 = $31;
 }
 STACKTOP = sp;return;
}
function _sample_mix($dst,$src,$gain) {
 $dst = $dst|0;
 $src = $src|0;
 $gain = $gain|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $2 = $gain;
 $3 = $0;
 $4 = HEAP16[$3>>1]|0;
 $5 = $4 << 16 >> 16;
 $6 = $1;
 $7 = $6 << 16 >> 16;
 $8 = $2;
 $9 = $8 << 16 >> 16;
 $10 = Math_imul($7, $9)|0;
 $11 = $10 >> 15;
 $12 = (($5) + ($11))|0;
 $13 = (_clamp_s16($12)|0);
 $14 = $0;
 HEAP16[$14>>1] = $13;
 STACKTOP = sp;return;
}
function _alist_multQ44($hle,$dmem,$count,$gain) {
 $hle = $hle|0;
 $dmem = $dmem|0;
 $count = $count|0;
 $gain = $gain|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $dst = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmem;
 $2 = $count;
 $3 = $gain;
 $4 = $0;
 $5 = ((($4)) + 88|0);
 $6 = $1;
 $7 = $6&65535;
 $8 = (($5) + ($7)|0);
 $dst = $8;
 $9 = $2;
 $10 = $9&65535;
 $11 = $10 >> 1;
 $12 = $11&65535;
 $2 = $12;
 while(1) {
  $13 = $2;
  $14 = $13&65535;
  $15 = ($14|0)!=(0);
  if (!($15)) {
   break;
  }
  $16 = $dst;
  $17 = HEAP16[$16>>1]|0;
  $18 = $17 << 16 >> 16;
  $19 = $3;
  $20 = $19 << 24 >> 24;
  $21 = Math_imul($18, $20)|0;
  $22 = $21 >> 4;
  $23 = (_clamp_s16($22)|0);
  $24 = $dst;
  HEAP16[$24>>1] = $23;
  $25 = $dst;
  $26 = ((($25)) + 2|0);
  $dst = $26;
  $27 = $2;
  $28 = (($27) + -1)<<16>>16;
  $2 = $28;
 }
 STACKTOP = sp;return;
}
function _alist_add($hle,$dmemo,$dmemi,$count) {
 $hle = $hle|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $dst = 0, $src = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmemo;
 $2 = $dmemi;
 $3 = $count;
 $4 = $0;
 $5 = ((($4)) + 88|0);
 $6 = $1;
 $7 = $6&65535;
 $8 = (($5) + ($7)|0);
 $dst = $8;
 $9 = $0;
 $10 = ((($9)) + 88|0);
 $11 = $2;
 $12 = $11&65535;
 $13 = (($10) + ($12)|0);
 $src = $13;
 $14 = $3;
 $15 = $14&65535;
 $16 = $15 >> 1;
 $17 = $16&65535;
 $3 = $17;
 while(1) {
  $18 = $3;
  $19 = $18&65535;
  $20 = ($19|0)!=(0);
  if (!($20)) {
   break;
  }
  $21 = $dst;
  $22 = HEAP16[$21>>1]|0;
  $23 = $22 << 16 >> 16;
  $24 = $src;
  $25 = HEAP16[$24>>1]|0;
  $26 = $25 << 16 >> 16;
  $27 = (($23) + ($26))|0;
  $28 = (_clamp_s16($27)|0);
  $29 = $dst;
  HEAP16[$29>>1] = $28;
  $30 = $dst;
  $31 = ((($30)) + 2|0);
  $dst = $31;
  $32 = $src;
  $33 = ((($32)) + 2|0);
  $src = $33;
  $34 = $3;
  $35 = (($34) + -1)<<16>>16;
  $3 = $35;
 }
 STACKTOP = sp;return;
}
function _alist_resample($hle,$init,$flag2,$dmemo,$dmemi,$count,$pitch,$address) {
 $hle = $hle|0;
 $init = $init|0;
 $flag2 = $flag2|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $pitch = $pitch|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var $ipos = 0, $lut = 0, $opos = 0, $pitch_accu = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $pitch_accu = sp + 8|0;
 $0 = $hle;
 $8 = $init&1;
 $1 = $8;
 $9 = $flag2&1;
 $2 = $9;
 $3 = $dmemo;
 $4 = $dmemi;
 $5 = $count;
 $6 = $pitch;
 $7 = $address;
 $10 = $4;
 $11 = $10&65535;
 $12 = $11 >> 1;
 $13 = $12&65535;
 $ipos = $13;
 $14 = $3;
 $15 = $14&65535;
 $16 = $15 >> 1;
 $17 = $16&65535;
 $opos = $17;
 $18 = $5;
 $19 = $18&65535;
 $20 = $19 >> 1;
 $21 = $20&65535;
 $5 = $21;
 $22 = $ipos;
 $23 = $22&65535;
 $24 = (($23) - 4)|0;
 $25 = $24&65535;
 $ipos = $25;
 $26 = $2;
 $27 = $26&1;
 if ($27) {
  $28 = $0;
  $29 = ((($28)) + 84|0);
  $30 = HEAP32[$29>>2]|0;
  _HleWarnMessage($30,(gb + (5130) | 0),$vararg_buffer);
 }
 $31 = $1;
 $32 = $31&1;
 $33 = $0;
 if ($32) {
  $34 = $ipos;
  _alist_resample_reset($33,$34,$pitch_accu);
 } else {
  $35 = $7;
  $36 = $ipos;
  _alist_resample_load($33,$35,$36,$pitch_accu);
 }
 while(1) {
  $37 = $5;
  $38 = $37&65535;
  $39 = ($38|0)!=(0);
  if (!($39)) {
   break;
  }
  $40 = HEAP32[$pitch_accu>>2]|0;
  $41 = $40 & 64512;
  $42 = $41 >>> 8;
  $43 = ((gb + (2280) | 0) + ($42<<1)|0);
  $lut = $43;
  $44 = $0;
  $45 = $ipos;
  $46 = $45&65535;
  $47 = (_sample($44,$46)|0);
  $48 = HEAP16[$47>>1]|0;
  $49 = $48 << 16 >> 16;
  $50 = $lut;
  $51 = HEAP16[$50>>1]|0;
  $52 = $51 << 16 >> 16;
  $53 = Math_imul($49, $52)|0;
  $54 = $53 >> 15;
  $55 = $0;
  $56 = $ipos;
  $57 = $56&65535;
  $58 = (($57) + 1)|0;
  $59 = (_sample($55,$58)|0);
  $60 = HEAP16[$59>>1]|0;
  $61 = $60 << 16 >> 16;
  $62 = $lut;
  $63 = ((($62)) + 2|0);
  $64 = HEAP16[$63>>1]|0;
  $65 = $64 << 16 >> 16;
  $66 = Math_imul($61, $65)|0;
  $67 = $66 >> 15;
  $68 = (($54) + ($67))|0;
  $69 = $0;
  $70 = $ipos;
  $71 = $70&65535;
  $72 = (($71) + 2)|0;
  $73 = (_sample($69,$72)|0);
  $74 = HEAP16[$73>>1]|0;
  $75 = $74 << 16 >> 16;
  $76 = $lut;
  $77 = ((($76)) + 4|0);
  $78 = HEAP16[$77>>1]|0;
  $79 = $78 << 16 >> 16;
  $80 = Math_imul($75, $79)|0;
  $81 = $80 >> 15;
  $82 = (($68) + ($81))|0;
  $83 = $0;
  $84 = $ipos;
  $85 = $84&65535;
  $86 = (($85) + 3)|0;
  $87 = (_sample($83,$86)|0);
  $88 = HEAP16[$87>>1]|0;
  $89 = $88 << 16 >> 16;
  $90 = $lut;
  $91 = ((($90)) + 6|0);
  $92 = HEAP16[$91>>1]|0;
  $93 = $92 << 16 >> 16;
  $94 = Math_imul($89, $93)|0;
  $95 = $94 >> 15;
  $96 = (($82) + ($95))|0;
  $97 = (_clamp_s16($96)|0);
  $98 = $0;
  $99 = $opos;
  $100 = (($99) + 1)<<16>>16;
  $opos = $100;
  $101 = $99&65535;
  $102 = (_sample($98,$101)|0);
  HEAP16[$102>>1] = $97;
  $103 = $6;
  $104 = HEAP32[$pitch_accu>>2]|0;
  $105 = (($104) + ($103))|0;
  HEAP32[$pitch_accu>>2] = $105;
  $106 = HEAP32[$pitch_accu>>2]|0;
  $107 = $106 >>> 16;
  $108 = $ipos;
  $109 = $108&65535;
  $110 = (($109) + ($107))|0;
  $111 = $110&65535;
  $ipos = $111;
  $112 = HEAP32[$pitch_accu>>2]|0;
  $113 = $112 & 65535;
  HEAP32[$pitch_accu>>2] = $113;
  $114 = $5;
  $115 = (($114) + -1)<<16>>16;
  $5 = $115;
 }
 $116 = $0;
 $117 = $7;
 $118 = $ipos;
 $119 = HEAP32[$pitch_accu>>2]|0;
 _alist_resample_save($116,$117,$118,$119);
 STACKTOP = sp;return;
}
function _alist_resample_reset($hle,$pos,$pitch_accu) {
 $hle = $hle|0;
 $pos = $pos|0;
 $pitch_accu = $pitch_accu|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $k = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $pos;
 $2 = $pitch_accu;
 $k = 0;
 while(1) {
  $3 = $k;
  $4 = ($3>>>0)<(4);
  if (!($4)) {
   break;
  }
  $5 = $0;
  $6 = $1;
  $7 = $6&65535;
  $8 = $k;
  $9 = (($7) + ($8))|0;
  $10 = (_sample($5,$9)|0);
  HEAP16[$10>>1] = 0;
  $11 = $k;
  $12 = (($11) + 1)|0;
  $k = $12;
 }
 $13 = $2;
 HEAP32[$13>>2] = 0;
 STACKTOP = sp;return;
}
function _alist_resample_load($hle,$address,$pos,$pitch_accu) {
 $hle = $hle|0;
 $address = $address|0;
 $pos = $pos|0;
 $pitch_accu = $pitch_accu|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $pos;
 $3 = $pitch_accu;
 $4 = $0;
 $5 = $1;
 $6 = (($5) + 0)|0;
 $7 = (_dram_u16($4,$6)|0);
 $8 = HEAP16[$7>>1]|0;
 $9 = $0;
 $10 = $2;
 $11 = $10&65535;
 $12 = (($11) + 0)|0;
 $13 = (_sample($9,$12)|0);
 HEAP16[$13>>1] = $8;
 $14 = $0;
 $15 = $1;
 $16 = (($15) + 2)|0;
 $17 = (_dram_u16($14,$16)|0);
 $18 = HEAP16[$17>>1]|0;
 $19 = $0;
 $20 = $2;
 $21 = $20&65535;
 $22 = (($21) + 1)|0;
 $23 = (_sample($19,$22)|0);
 HEAP16[$23>>1] = $18;
 $24 = $0;
 $25 = $1;
 $26 = (($25) + 4)|0;
 $27 = (_dram_u16($24,$26)|0);
 $28 = HEAP16[$27>>1]|0;
 $29 = $0;
 $30 = $2;
 $31 = $30&65535;
 $32 = (($31) + 2)|0;
 $33 = (_sample($29,$32)|0);
 HEAP16[$33>>1] = $28;
 $34 = $0;
 $35 = $1;
 $36 = (($35) + 6)|0;
 $37 = (_dram_u16($34,$36)|0);
 $38 = HEAP16[$37>>1]|0;
 $39 = $0;
 $40 = $2;
 $41 = $40&65535;
 $42 = (($41) + 3)|0;
 $43 = (_sample($39,$42)|0);
 HEAP16[$43>>1] = $38;
 $44 = $0;
 $45 = $1;
 $46 = (($45) + 8)|0;
 $47 = (_dram_u16($44,$46)|0);
 $48 = HEAP16[$47>>1]|0;
 $49 = $48&65535;
 $50 = $3;
 HEAP32[$50>>2] = $49;
 STACKTOP = sp;return;
}
function _sample($hle,$pos) {
 $hle = $hle|0;
 $pos = $pos|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $pos;
 $2 = $0;
 $3 = ((($2)) + 88|0);
 $4 = $1;
 $5 = $4 ^ 1;
 $6 = (($3) + ($5<<1)|0);
 STACKTOP = sp;return ($6|0);
}
function _alist_resample_save($hle,$address,$pos,$pitch_accu) {
 $hle = $hle|0;
 $address = $address|0;
 $pos = $pos|0;
 $pitch_accu = $pitch_accu|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $pos;
 $3 = $pitch_accu;
 $4 = $0;
 $5 = $2;
 $6 = $5&65535;
 $7 = (($6) + 0)|0;
 $8 = (_sample($4,$7)|0);
 $9 = HEAP16[$8>>1]|0;
 $10 = $0;
 $11 = $1;
 $12 = (($11) + 0)|0;
 $13 = (_dram_u16($10,$12)|0);
 HEAP16[$13>>1] = $9;
 $14 = $0;
 $15 = $2;
 $16 = $15&65535;
 $17 = (($16) + 1)|0;
 $18 = (_sample($14,$17)|0);
 $19 = HEAP16[$18>>1]|0;
 $20 = $0;
 $21 = $1;
 $22 = (($21) + 2)|0;
 $23 = (_dram_u16($20,$22)|0);
 HEAP16[$23>>1] = $19;
 $24 = $0;
 $25 = $2;
 $26 = $25&65535;
 $27 = (($26) + 2)|0;
 $28 = (_sample($24,$27)|0);
 $29 = HEAP16[$28>>1]|0;
 $30 = $0;
 $31 = $1;
 $32 = (($31) + 4)|0;
 $33 = (_dram_u16($30,$32)|0);
 HEAP16[$33>>1] = $29;
 $34 = $0;
 $35 = $2;
 $36 = $35&65535;
 $37 = (($36) + 3)|0;
 $38 = (_sample($34,$37)|0);
 $39 = HEAP16[$38>>1]|0;
 $40 = $0;
 $41 = $1;
 $42 = (($41) + 6)|0;
 $43 = (_dram_u16($40,$42)|0);
 HEAP16[$43>>1] = $39;
 $44 = $3;
 $45 = $44&65535;
 $46 = $0;
 $47 = $1;
 $48 = (($47) + 8)|0;
 $49 = (_dram_u16($46,$48)|0);
 HEAP16[$49>>1] = $45;
 STACKTOP = sp;return;
}
function _alist_resample_zoh($hle,$dmemo,$dmemi,$count,$pitch,$pitch_accu) {
 $hle = $hle|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $pitch = $pitch|0;
 $pitch_accu = $pitch_accu|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $ipos = 0, $opos = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dmemo;
 $2 = $dmemi;
 $3 = $count;
 $4 = $pitch;
 $5 = $pitch_accu;
 $6 = $2;
 $7 = $6&65535;
 $8 = $7 >> 1;
 $9 = $8&65535;
 $ipos = $9;
 $10 = $1;
 $11 = $10&65535;
 $12 = $11 >> 1;
 $13 = $12&65535;
 $opos = $13;
 $14 = $3;
 $15 = $14&65535;
 $16 = $15 >> 1;
 $17 = $16&65535;
 $3 = $17;
 while(1) {
  $18 = $3;
  $19 = $18&65535;
  $20 = ($19|0)!=(0);
  if (!($20)) {
   break;
  }
  $21 = $0;
  $22 = $ipos;
  $23 = $22&65535;
  $24 = (_sample($21,$23)|0);
  $25 = HEAP16[$24>>1]|0;
  $26 = $0;
  $27 = $opos;
  $28 = (($27) + 1)<<16>>16;
  $opos = $28;
  $29 = $27&65535;
  $30 = (_sample($26,$29)|0);
  HEAP16[$30>>1] = $25;
  $31 = $4;
  $32 = $5;
  $33 = (($32) + ($31))|0;
  $5 = $33;
  $34 = $5;
  $35 = $34 >>> 16;
  $36 = $ipos;
  $37 = $36&65535;
  $38 = (($37) + ($35))|0;
  $39 = $38&65535;
  $ipos = $39;
  $40 = $5;
  $41 = $40 & 65535;
  $5 = $41;
  $42 = $3;
  $43 = (($42) + -1)<<16>>16;
  $3 = $43;
 }
 STACKTOP = sp;return;
}
function _alist_adpcm($hle,$init,$loop,$two_bit_per_sample,$dmemo,$dmemi,$count,$codebook,$loop_address,$last_frame_address) {
 $hle = $hle|0;
 $init = $init|0;
 $loop = $loop|0;
 $two_bit_per_sample = $two_bit_per_sample|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $codebook = $codebook|0;
 $loop_address = $loop_address|0;
 $last_frame_address = $last_frame_address|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $cb_entry = 0, $code = 0, $frame = 0, $i = 0, $last_frame = 0;
 var $predict_frame = 0, $scale = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $last_frame = sp + 64|0;
 $frame = sp + 32|0;
 $0 = $hle;
 $10 = $init&1;
 $1 = $10;
 $11 = $loop&1;
 $2 = $11;
 $12 = $two_bit_per_sample&1;
 $3 = $12;
 $4 = $dmemo;
 $5 = $dmemi;
 $6 = $count;
 $7 = $codebook;
 $8 = $loop_address;
 $9 = $last_frame_address;
 $13 = $3;
 $14 = $13&1;
 $15 = $14 ? (fb + (66) | 0) : (fb + (65) | 0);
 $predict_frame = $15;
 $16 = $6;
 $17 = $16&65535;
 $18 = $17 & 31;
 $19 = ($18|0)==(0);
 if (!($19)) {
  ___assert_fail(((gb + (5171) | 0)|0),((gb + (5191) | 0)|0),763,((gb + (5209) | 0)|0));
  // unreachable;
 }
 $20 = $1;
 $21 = $20&1;
 if ($21) {
  dest=$last_frame; stop=dest+32|0; do { HEAP16[dest>>1]=0|0; dest=dest+2|0; } while ((dest|0) < (stop|0));
 } else {
  $22 = $0;
  $23 = $2;
  $24 = $23&1;
  $25 = $8;
  $26 = $9;
  $27 = $24 ? $25 : $26;
  _dram_load_u16($22,$last_frame,$27,16);
 }
 $i = 0;
 while(1) {
  $28 = $i;
  $29 = ($28>>>0)<(16);
  if (!($29)) {
   break;
  }
  $30 = $i;
  $31 = (($last_frame) + ($30<<1)|0);
  $32 = HEAP16[$31>>1]|0;
  $33 = $0;
  $34 = $4;
  $35 = (_alist_s16($33,$34)|0);
  HEAP16[$35>>1] = $32;
  $36 = $i;
  $37 = (($36) + 1)|0;
  $i = $37;
  $38 = $4;
  $39 = $38&65535;
  $40 = (($39) + 2)|0;
  $41 = $40&65535;
  $4 = $41;
 }
 while(1) {
  $42 = $6;
  $43 = $42&65535;
  $44 = ($43|0)!=(0);
  $45 = $0;
  if (!($44)) {
   break;
  }
  $46 = $5;
  $47 = (($46) + 1)<<16>>16;
  $5 = $47;
  $48 = (_alist_u8($45,$46)|0);
  $49 = HEAP8[$48>>0]|0;
  $code = $49;
  $50 = $code;
  $51 = $50&255;
  $52 = $51 & 240;
  $53 = $52 >> 4;
  $54 = $53&255;
  $scale = $54;
  $55 = $7;
  $56 = $code;
  $57 = $56&255;
  $58 = $57 & 15;
  $59 = $58 << 4;
  $60 = (($55) + ($59<<1)|0);
  $cb_entry = $60;
  $61 = $predict_frame;
  $62 = $0;
  $63 = $5;
  $64 = $scale;
  $65 = (mftCall_iiiii($61|0,($62|0),($frame|0),($63|0),($64|0))|0);
  $66 = $5;
  $67 = $66&65535;
  $68 = (($67) + ($65))|0;
  $69 = $68&65535;
  $5 = $69;
  $70 = $cb_entry;
  $71 = ((($last_frame)) + 28|0);
  _adpcm_compute_residuals($last_frame,$frame,$70,$71,8);
  $72 = ((($last_frame)) + 16|0);
  $73 = ((($frame)) + 16|0);
  $74 = $cb_entry;
  $75 = ((($last_frame)) + 12|0);
  _adpcm_compute_residuals($72,$73,$74,$75,8);
  $i = 0;
  while(1) {
   $76 = $i;
   $77 = ($76>>>0)<(16);
   if (!($77)) {
    break;
   }
   $78 = $i;
   $79 = (($last_frame) + ($78<<1)|0);
   $80 = HEAP16[$79>>1]|0;
   $81 = $0;
   $82 = $4;
   $83 = (_alist_s16($81,$82)|0);
   HEAP16[$83>>1] = $80;
   $84 = $i;
   $85 = (($84) + 1)|0;
   $i = $85;
   $86 = $4;
   $87 = $86&65535;
   $88 = (($87) + 2)|0;
   $89 = $88&65535;
   $4 = $89;
  }
  $90 = $6;
  $91 = $90&65535;
  $92 = (($91) - 32)|0;
  $93 = $92&65535;
  $6 = $93;
 }
 $94 = $9;
 _dram_store_u16($45,$last_frame,$94,16);
 STACKTOP = sp;return;
}
function _adpcm_predict_frame_2bits($hle,$dst,$dmemi,$scale) {
 $hle = $hle|0;
 $dst = $dst|0;
 $dmemi = $dmemi|0;
 $scale = $scale|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $byte = 0, $i = 0, $rshift = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $dmemi;
 $3 = $scale;
 $4 = $3;
 $5 = $4&255;
 $6 = ($5|0)<(14);
 if ($6) {
  $7 = $3;
  $8 = $7&255;
  $9 = (14 - ($8))|0;
  $10 = $9;
 } else {
  $10 = 0;
 }
 $rshift = $10;
 $i = 0;
 while(1) {
  $11 = $i;
  $12 = ($11>>>0)<(4);
  if (!($12)) {
   break;
  }
  $13 = $0;
  $14 = $2;
  $15 = (($14) + 1)<<16>>16;
  $2 = $15;
  $16 = (_alist_u8($13,$14)|0);
  $17 = HEAP8[$16>>0]|0;
  $byte = $17;
  $18 = $byte;
  $19 = $rshift;
  $20 = (_adpcm_predict_sample($18,-64,8,$19)|0);
  $21 = $1;
  $22 = ((($21)) + 2|0);
  $1 = $22;
  HEAP16[$21>>1] = $20;
  $23 = $byte;
  $24 = $rshift;
  $25 = (_adpcm_predict_sample($23,48,10,$24)|0);
  $26 = $1;
  $27 = ((($26)) + 2|0);
  $1 = $27;
  HEAP16[$26>>1] = $25;
  $28 = $byte;
  $29 = $rshift;
  $30 = (_adpcm_predict_sample($28,12,12,$29)|0);
  $31 = $1;
  $32 = ((($31)) + 2|0);
  $1 = $32;
  HEAP16[$31>>1] = $30;
  $33 = $byte;
  $34 = $rshift;
  $35 = (_adpcm_predict_sample($33,3,14,$34)|0);
  $36 = $1;
  $37 = ((($36)) + 2|0);
  $1 = $37;
  HEAP16[$36>>1] = $35;
  $38 = $i;
  $39 = (($38) + 1)|0;
  $i = $39;
 }
 STACKTOP = sp;return 4;
}
function _adpcm_predict_frame_4bits($hle,$dst,$dmemi,$scale) {
 $hle = $hle|0;
 $dst = $dst|0;
 $dmemi = $dmemi|0;
 $scale = $scale|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $byte = 0, $i = 0, $rshift = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $dmemi;
 $3 = $scale;
 $4 = $3;
 $5 = $4&255;
 $6 = ($5|0)<(12);
 if ($6) {
  $7 = $3;
  $8 = $7&255;
  $9 = (12 - ($8))|0;
  $10 = $9;
 } else {
  $10 = 0;
 }
 $rshift = $10;
 $i = 0;
 while(1) {
  $11 = $i;
  $12 = ($11>>>0)<(8);
  if (!($12)) {
   break;
  }
  $13 = $0;
  $14 = $2;
  $15 = (($14) + 1)<<16>>16;
  $2 = $15;
  $16 = (_alist_u8($13,$14)|0);
  $17 = HEAP8[$16>>0]|0;
  $byte = $17;
  $18 = $byte;
  $19 = $rshift;
  $20 = (_adpcm_predict_sample($18,-16,8,$19)|0);
  $21 = $1;
  $22 = ((($21)) + 2|0);
  $1 = $22;
  HEAP16[$21>>1] = $20;
  $23 = $byte;
  $24 = $rshift;
  $25 = (_adpcm_predict_sample($23,15,12,$24)|0);
  $26 = $1;
  $27 = ((($26)) + 2|0);
  $1 = $27;
  HEAP16[$26>>1] = $25;
  $28 = $i;
  $29 = (($28) + 1)|0;
  $i = $29;
 }
 STACKTOP = sp;return 8;
}
function _dram_load_u16($hle,$dst,$address,$count) {
 $hle = $hle|0;
 $dst = $dst|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $0;
 $6 = HEAP32[$5>>2]|0;
 $7 = $2;
 $8 = $7 & 16777215;
 $9 = $3;
 _load_u16($4,$6,$8,$9);
 STACKTOP = sp;return;
}
function _dram_store_u16($hle,$src,$address,$count) {
 $hle = $hle|0;
 $src = $src|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $src;
 $2 = $address;
 $3 = $count;
 $4 = $0;
 $5 = HEAP32[$4>>2]|0;
 $6 = $2;
 $7 = $6 & 16777215;
 $8 = $1;
 $9 = $3;
 _store_u16($5,$7,$8,$9);
 STACKTOP = sp;return;
}
function _alist_filter($hle,$dmem,$count,$address,$lut_address) {
 $hle = $hle|0;
 $dmem = $dmem|0;
 $count = $count|0;
 $address = $address|0;
 $lut_address = $lut_address|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0;
 var $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0;
 var $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0;
 var $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0;
 var $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0;
 var $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0;
 var $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0;
 var $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0;
 var $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0;
 var $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0;
 var $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0;
 var $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0;
 var $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0;
 var $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0;
 var $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0;
 var $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0;
 var $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0;
 var $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0;
 var $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0;
 var $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0;
 var $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0;
 var $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0;
 var $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0;
 var $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0;
 var $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0;
 var $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0;
 var $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0;
 var $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0;
 var $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0;
 var $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0;
 var $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0;
 var $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0;
 var $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0;
 var $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0;
 var $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0;
 var $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $in1 = 0, $in2 = 0, $lutt5 = 0, $lutt6 = 0, $outbuff = 0;
 var $outp = 0, $v = 0, $v1 = 0, $x = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 2000|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $outbuff = sp + 72|0;
 $v1 = sp;
 $0 = $hle;
 $1 = $dmem;
 $2 = $count;
 $3 = $address;
 $4 = $lut_address;
 $outp = $outbuff;
 $5 = $0;
 $6 = HEAP32[$5>>2]|0;
 $7 = $4;
 $8 = HEAP32[$7>>2]|0;
 $9 = (($6) + ($8)|0);
 $lutt6 = $9;
 $10 = $0;
 $11 = HEAP32[$10>>2]|0;
 $12 = $4;
 $13 = ((($12)) + 4|0);
 $14 = HEAP32[$13>>2]|0;
 $15 = (($11) + ($14)|0);
 $lutt5 = $15;
 $16 = $0;
 $17 = HEAP32[$16>>2]|0;
 $18 = $3;
 $19 = (($17) + ($18)|0);
 $in1 = $19;
 $20 = $0;
 $21 = ((($20)) + 88|0);
 $22 = $1;
 $23 = $22&65535;
 $24 = (($21) + ($23)|0);
 $in2 = $24;
 $x = 0;
 while(1) {
  $25 = $x;
  $26 = ($25|0)<(8);
  if (!($26)) {
   break;
  }
  $27 = $x;
  $28 = $lutt5;
  $29 = (($28) + ($27<<1)|0);
  $30 = HEAP16[$29>>1]|0;
  $31 = $30 << 16 >> 16;
  $32 = $x;
  $33 = $lutt6;
  $34 = (($33) + ($32<<1)|0);
  $35 = HEAP16[$34>>1]|0;
  $36 = $35 << 16 >> 16;
  $37 = (($31) + ($36))|0;
  $38 = $37 >> 1;
  $v = $38;
  $39 = $v;
  $40 = $39&65535;
  $41 = $x;
  $42 = $lutt6;
  $43 = (($42) + ($41<<1)|0);
  HEAP16[$43>>1] = $40;
  $44 = $x;
  $45 = $lutt5;
  $46 = (($45) + ($44<<1)|0);
  HEAP16[$46>>1] = $40;
  $47 = $x;
  $48 = (($47) + 1)|0;
  $x = $48;
 }
 $x = 0;
 while(1) {
  $49 = $x;
  $50 = $2;
  $51 = $50&65535;
  $52 = ($49|0)<($51|0);
  if (!($52)) {
   break;
  }
  $53 = $in1;
  $54 = HEAP16[$53>>1]|0;
  $55 = $54 << 16 >> 16;
  $56 = $lutt6;
  $57 = ((($56)) + 12|0);
  $58 = HEAP16[$57>>1]|0;
  $59 = $58 << 16 >> 16;
  $60 = Math_imul($55, $59)|0;
  $61 = ((($v1)) + 4|0);
  HEAP32[$61>>2] = $60;
  $62 = $in1;
  $63 = ((($62)) + 6|0);
  $64 = HEAP16[$63>>1]|0;
  $65 = $64 << 16 >> 16;
  $66 = $lutt6;
  $67 = ((($66)) + 14|0);
  $68 = HEAP16[$67>>1]|0;
  $69 = $68 << 16 >> 16;
  $70 = Math_imul($65, $69)|0;
  $71 = ((($v1)) + 4|0);
  $72 = HEAP32[$71>>2]|0;
  $73 = (($72) + ($70))|0;
  HEAP32[$71>>2] = $73;
  $74 = $in1;
  $75 = ((($74)) + 4|0);
  $76 = HEAP16[$75>>1]|0;
  $77 = $76 << 16 >> 16;
  $78 = $lutt6;
  $79 = ((($78)) + 8|0);
  $80 = HEAP16[$79>>1]|0;
  $81 = $80 << 16 >> 16;
  $82 = Math_imul($77, $81)|0;
  $83 = ((($v1)) + 4|0);
  $84 = HEAP32[$83>>2]|0;
  $85 = (($84) + ($82))|0;
  HEAP32[$83>>2] = $85;
  $86 = $in1;
  $87 = ((($86)) + 10|0);
  $88 = HEAP16[$87>>1]|0;
  $89 = $88 << 16 >> 16;
  $90 = $lutt6;
  $91 = ((($90)) + 10|0);
  $92 = HEAP16[$91>>1]|0;
  $93 = $92 << 16 >> 16;
  $94 = Math_imul($89, $93)|0;
  $95 = ((($v1)) + 4|0);
  $96 = HEAP32[$95>>2]|0;
  $97 = (($96) + ($94))|0;
  HEAP32[$95>>2] = $97;
  $98 = $in1;
  $99 = ((($98)) + 8|0);
  $100 = HEAP16[$99>>1]|0;
  $101 = $100 << 16 >> 16;
  $102 = $lutt6;
  $103 = ((($102)) + 4|0);
  $104 = HEAP16[$103>>1]|0;
  $105 = $104 << 16 >> 16;
  $106 = Math_imul($101, $105)|0;
  $107 = ((($v1)) + 4|0);
  $108 = HEAP32[$107>>2]|0;
  $109 = (($108) + ($106))|0;
  HEAP32[$107>>2] = $109;
  $110 = $in1;
  $111 = ((($110)) + 14|0);
  $112 = HEAP16[$111>>1]|0;
  $113 = $112 << 16 >> 16;
  $114 = $lutt6;
  $115 = ((($114)) + 6|0);
  $116 = HEAP16[$115>>1]|0;
  $117 = $116 << 16 >> 16;
  $118 = Math_imul($113, $117)|0;
  $119 = ((($v1)) + 4|0);
  $120 = HEAP32[$119>>2]|0;
  $121 = (($120) + ($118))|0;
  HEAP32[$119>>2] = $121;
  $122 = $in1;
  $123 = ((($122)) + 12|0);
  $124 = HEAP16[$123>>1]|0;
  $125 = $124 << 16 >> 16;
  $126 = $lutt6;
  $127 = HEAP16[$126>>1]|0;
  $128 = $127 << 16 >> 16;
  $129 = Math_imul($125, $128)|0;
  $130 = ((($v1)) + 4|0);
  $131 = HEAP32[$130>>2]|0;
  $132 = (($131) + ($129))|0;
  HEAP32[$130>>2] = $132;
  $133 = $in2;
  $134 = ((($133)) + 2|0);
  $135 = HEAP16[$134>>1]|0;
  $136 = $135 << 16 >> 16;
  $137 = $lutt6;
  $138 = ((($137)) + 2|0);
  $139 = HEAP16[$138>>1]|0;
  $140 = $139 << 16 >> 16;
  $141 = Math_imul($136, $140)|0;
  $142 = ((($v1)) + 4|0);
  $143 = HEAP32[$142>>2]|0;
  $144 = (($143) + ($141))|0;
  HEAP32[$142>>2] = $144;
  $145 = $in1;
  $146 = ((($145)) + 6|0);
  $147 = HEAP16[$146>>1]|0;
  $148 = $147 << 16 >> 16;
  $149 = $lutt6;
  $150 = ((($149)) + 12|0);
  $151 = HEAP16[$150>>1]|0;
  $152 = $151 << 16 >> 16;
  $153 = Math_imul($148, $152)|0;
  HEAP32[$v1>>2] = $153;
  $154 = $in1;
  $155 = ((($154)) + 4|0);
  $156 = HEAP16[$155>>1]|0;
  $157 = $156 << 16 >> 16;
  $158 = $lutt6;
  $159 = ((($158)) + 14|0);
  $160 = HEAP16[$159>>1]|0;
  $161 = $160 << 16 >> 16;
  $162 = Math_imul($157, $161)|0;
  $163 = HEAP32[$v1>>2]|0;
  $164 = (($163) + ($162))|0;
  HEAP32[$v1>>2] = $164;
  $165 = $in1;
  $166 = ((($165)) + 10|0);
  $167 = HEAP16[$166>>1]|0;
  $168 = $167 << 16 >> 16;
  $169 = $lutt6;
  $170 = ((($169)) + 8|0);
  $171 = HEAP16[$170>>1]|0;
  $172 = $171 << 16 >> 16;
  $173 = Math_imul($168, $172)|0;
  $174 = HEAP32[$v1>>2]|0;
  $175 = (($174) + ($173))|0;
  HEAP32[$v1>>2] = $175;
  $176 = $in1;
  $177 = ((($176)) + 8|0);
  $178 = HEAP16[$177>>1]|0;
  $179 = $178 << 16 >> 16;
  $180 = $lutt6;
  $181 = ((($180)) + 10|0);
  $182 = HEAP16[$181>>1]|0;
  $183 = $182 << 16 >> 16;
  $184 = Math_imul($179, $183)|0;
  $185 = HEAP32[$v1>>2]|0;
  $186 = (($185) + ($184))|0;
  HEAP32[$v1>>2] = $186;
  $187 = $in1;
  $188 = ((($187)) + 14|0);
  $189 = HEAP16[$188>>1]|0;
  $190 = $189 << 16 >> 16;
  $191 = $lutt6;
  $192 = ((($191)) + 4|0);
  $193 = HEAP16[$192>>1]|0;
  $194 = $193 << 16 >> 16;
  $195 = Math_imul($190, $194)|0;
  $196 = HEAP32[$v1>>2]|0;
  $197 = (($196) + ($195))|0;
  HEAP32[$v1>>2] = $197;
  $198 = $in1;
  $199 = ((($198)) + 12|0);
  $200 = HEAP16[$199>>1]|0;
  $201 = $200 << 16 >> 16;
  $202 = $lutt6;
  $203 = ((($202)) + 6|0);
  $204 = HEAP16[$203>>1]|0;
  $205 = $204 << 16 >> 16;
  $206 = Math_imul($201, $205)|0;
  $207 = HEAP32[$v1>>2]|0;
  $208 = (($207) + ($206))|0;
  HEAP32[$v1>>2] = $208;
  $209 = $in2;
  $210 = ((($209)) + 2|0);
  $211 = HEAP16[$210>>1]|0;
  $212 = $211 << 16 >> 16;
  $213 = $lutt6;
  $214 = HEAP16[$213>>1]|0;
  $215 = $214 << 16 >> 16;
  $216 = Math_imul($212, $215)|0;
  $217 = HEAP32[$v1>>2]|0;
  $218 = (($217) + ($216))|0;
  HEAP32[$v1>>2] = $218;
  $219 = $in2;
  $220 = HEAP16[$219>>1]|0;
  $221 = $220 << 16 >> 16;
  $222 = $lutt6;
  $223 = ((($222)) + 2|0);
  $224 = HEAP16[$223>>1]|0;
  $225 = $224 << 16 >> 16;
  $226 = Math_imul($221, $225)|0;
  $227 = HEAP32[$v1>>2]|0;
  $228 = (($227) + ($226))|0;
  HEAP32[$v1>>2] = $228;
  $229 = $in1;
  $230 = ((($229)) + 4|0);
  $231 = HEAP16[$230>>1]|0;
  $232 = $231 << 16 >> 16;
  $233 = $lutt6;
  $234 = ((($233)) + 12|0);
  $235 = HEAP16[$234>>1]|0;
  $236 = $235 << 16 >> 16;
  $237 = Math_imul($232, $236)|0;
  $238 = ((($v1)) + 12|0);
  HEAP32[$238>>2] = $237;
  $239 = $in1;
  $240 = ((($239)) + 10|0);
  $241 = HEAP16[$240>>1]|0;
  $242 = $241 << 16 >> 16;
  $243 = $lutt6;
  $244 = ((($243)) + 14|0);
  $245 = HEAP16[$244>>1]|0;
  $246 = $245 << 16 >> 16;
  $247 = Math_imul($242, $246)|0;
  $248 = ((($v1)) + 12|0);
  $249 = HEAP32[$248>>2]|0;
  $250 = (($249) + ($247))|0;
  HEAP32[$248>>2] = $250;
  $251 = $in1;
  $252 = ((($251)) + 8|0);
  $253 = HEAP16[$252>>1]|0;
  $254 = $253 << 16 >> 16;
  $255 = $lutt6;
  $256 = ((($255)) + 8|0);
  $257 = HEAP16[$256>>1]|0;
  $258 = $257 << 16 >> 16;
  $259 = Math_imul($254, $258)|0;
  $260 = ((($v1)) + 12|0);
  $261 = HEAP32[$260>>2]|0;
  $262 = (($261) + ($259))|0;
  HEAP32[$260>>2] = $262;
  $263 = $in1;
  $264 = ((($263)) + 14|0);
  $265 = HEAP16[$264>>1]|0;
  $266 = $265 << 16 >> 16;
  $267 = $lutt6;
  $268 = ((($267)) + 10|0);
  $269 = HEAP16[$268>>1]|0;
  $270 = $269 << 16 >> 16;
  $271 = Math_imul($266, $270)|0;
  $272 = ((($v1)) + 12|0);
  $273 = HEAP32[$272>>2]|0;
  $274 = (($273) + ($271))|0;
  HEAP32[$272>>2] = $274;
  $275 = $in1;
  $276 = ((($275)) + 12|0);
  $277 = HEAP16[$276>>1]|0;
  $278 = $277 << 16 >> 16;
  $279 = $lutt6;
  $280 = ((($279)) + 4|0);
  $281 = HEAP16[$280>>1]|0;
  $282 = $281 << 16 >> 16;
  $283 = Math_imul($278, $282)|0;
  $284 = ((($v1)) + 12|0);
  $285 = HEAP32[$284>>2]|0;
  $286 = (($285) + ($283))|0;
  HEAP32[$284>>2] = $286;
  $287 = $in2;
  $288 = ((($287)) + 2|0);
  $289 = HEAP16[$288>>1]|0;
  $290 = $289 << 16 >> 16;
  $291 = $lutt6;
  $292 = ((($291)) + 6|0);
  $293 = HEAP16[$292>>1]|0;
  $294 = $293 << 16 >> 16;
  $295 = Math_imul($290, $294)|0;
  $296 = ((($v1)) + 12|0);
  $297 = HEAP32[$296>>2]|0;
  $298 = (($297) + ($295))|0;
  HEAP32[$296>>2] = $298;
  $299 = $in2;
  $300 = HEAP16[$299>>1]|0;
  $301 = $300 << 16 >> 16;
  $302 = $lutt6;
  $303 = HEAP16[$302>>1]|0;
  $304 = $303 << 16 >> 16;
  $305 = Math_imul($301, $304)|0;
  $306 = ((($v1)) + 12|0);
  $307 = HEAP32[$306>>2]|0;
  $308 = (($307) + ($305))|0;
  HEAP32[$306>>2] = $308;
  $309 = $in2;
  $310 = ((($309)) + 6|0);
  $311 = HEAP16[$310>>1]|0;
  $312 = $311 << 16 >> 16;
  $313 = $lutt6;
  $314 = ((($313)) + 2|0);
  $315 = HEAP16[$314>>1]|0;
  $316 = $315 << 16 >> 16;
  $317 = Math_imul($312, $316)|0;
  $318 = ((($v1)) + 12|0);
  $319 = HEAP32[$318>>2]|0;
  $320 = (($319) + ($317))|0;
  HEAP32[$318>>2] = $320;
  $321 = $in1;
  $322 = ((($321)) + 10|0);
  $323 = HEAP16[$322>>1]|0;
  $324 = $323 << 16 >> 16;
  $325 = $lutt6;
  $326 = ((($325)) + 12|0);
  $327 = HEAP16[$326>>1]|0;
  $328 = $327 << 16 >> 16;
  $329 = Math_imul($324, $328)|0;
  $330 = ((($v1)) + 8|0);
  HEAP32[$330>>2] = $329;
  $331 = $in1;
  $332 = ((($331)) + 8|0);
  $333 = HEAP16[$332>>1]|0;
  $334 = $333 << 16 >> 16;
  $335 = $lutt6;
  $336 = ((($335)) + 14|0);
  $337 = HEAP16[$336>>1]|0;
  $338 = $337 << 16 >> 16;
  $339 = Math_imul($334, $338)|0;
  $340 = ((($v1)) + 8|0);
  $341 = HEAP32[$340>>2]|0;
  $342 = (($341) + ($339))|0;
  HEAP32[$340>>2] = $342;
  $343 = $in1;
  $344 = ((($343)) + 14|0);
  $345 = HEAP16[$344>>1]|0;
  $346 = $345 << 16 >> 16;
  $347 = $lutt6;
  $348 = ((($347)) + 8|0);
  $349 = HEAP16[$348>>1]|0;
  $350 = $349 << 16 >> 16;
  $351 = Math_imul($346, $350)|0;
  $352 = ((($v1)) + 8|0);
  $353 = HEAP32[$352>>2]|0;
  $354 = (($353) + ($351))|0;
  HEAP32[$352>>2] = $354;
  $355 = $in1;
  $356 = ((($355)) + 12|0);
  $357 = HEAP16[$356>>1]|0;
  $358 = $357 << 16 >> 16;
  $359 = $lutt6;
  $360 = ((($359)) + 10|0);
  $361 = HEAP16[$360>>1]|0;
  $362 = $361 << 16 >> 16;
  $363 = Math_imul($358, $362)|0;
  $364 = ((($v1)) + 8|0);
  $365 = HEAP32[$364>>2]|0;
  $366 = (($365) + ($363))|0;
  HEAP32[$364>>2] = $366;
  $367 = $in2;
  $368 = ((($367)) + 2|0);
  $369 = HEAP16[$368>>1]|0;
  $370 = $369 << 16 >> 16;
  $371 = $lutt6;
  $372 = ((($371)) + 4|0);
  $373 = HEAP16[$372>>1]|0;
  $374 = $373 << 16 >> 16;
  $375 = Math_imul($370, $374)|0;
  $376 = ((($v1)) + 8|0);
  $377 = HEAP32[$376>>2]|0;
  $378 = (($377) + ($375))|0;
  HEAP32[$376>>2] = $378;
  $379 = $in2;
  $380 = HEAP16[$379>>1]|0;
  $381 = $380 << 16 >> 16;
  $382 = $lutt6;
  $383 = ((($382)) + 6|0);
  $384 = HEAP16[$383>>1]|0;
  $385 = $384 << 16 >> 16;
  $386 = Math_imul($381, $385)|0;
  $387 = ((($v1)) + 8|0);
  $388 = HEAP32[$387>>2]|0;
  $389 = (($388) + ($386))|0;
  HEAP32[$387>>2] = $389;
  $390 = $in2;
  $391 = ((($390)) + 6|0);
  $392 = HEAP16[$391>>1]|0;
  $393 = $392 << 16 >> 16;
  $394 = $lutt6;
  $395 = HEAP16[$394>>1]|0;
  $396 = $395 << 16 >> 16;
  $397 = Math_imul($393, $396)|0;
  $398 = ((($v1)) + 8|0);
  $399 = HEAP32[$398>>2]|0;
  $400 = (($399) + ($397))|0;
  HEAP32[$398>>2] = $400;
  $401 = $in2;
  $402 = ((($401)) + 4|0);
  $403 = HEAP16[$402>>1]|0;
  $404 = $403 << 16 >> 16;
  $405 = $lutt6;
  $406 = ((($405)) + 2|0);
  $407 = HEAP16[$406>>1]|0;
  $408 = $407 << 16 >> 16;
  $409 = Math_imul($404, $408)|0;
  $410 = ((($v1)) + 8|0);
  $411 = HEAP32[$410>>2]|0;
  $412 = (($411) + ($409))|0;
  HEAP32[$410>>2] = $412;
  $413 = $in1;
  $414 = ((($413)) + 8|0);
  $415 = HEAP16[$414>>1]|0;
  $416 = $415 << 16 >> 16;
  $417 = $lutt6;
  $418 = ((($417)) + 12|0);
  $419 = HEAP16[$418>>1]|0;
  $420 = $419 << 16 >> 16;
  $421 = Math_imul($416, $420)|0;
  $422 = ((($v1)) + 20|0);
  HEAP32[$422>>2] = $421;
  $423 = $in1;
  $424 = ((($423)) + 14|0);
  $425 = HEAP16[$424>>1]|0;
  $426 = $425 << 16 >> 16;
  $427 = $lutt6;
  $428 = ((($427)) + 14|0);
  $429 = HEAP16[$428>>1]|0;
  $430 = $429 << 16 >> 16;
  $431 = Math_imul($426, $430)|0;
  $432 = ((($v1)) + 20|0);
  $433 = HEAP32[$432>>2]|0;
  $434 = (($433) + ($431))|0;
  HEAP32[$432>>2] = $434;
  $435 = $in1;
  $436 = ((($435)) + 12|0);
  $437 = HEAP16[$436>>1]|0;
  $438 = $437 << 16 >> 16;
  $439 = $lutt6;
  $440 = ((($439)) + 8|0);
  $441 = HEAP16[$440>>1]|0;
  $442 = $441 << 16 >> 16;
  $443 = Math_imul($438, $442)|0;
  $444 = ((($v1)) + 20|0);
  $445 = HEAP32[$444>>2]|0;
  $446 = (($445) + ($443))|0;
  HEAP32[$444>>2] = $446;
  $447 = $in2;
  $448 = ((($447)) + 2|0);
  $449 = HEAP16[$448>>1]|0;
  $450 = $449 << 16 >> 16;
  $451 = $lutt6;
  $452 = ((($451)) + 10|0);
  $453 = HEAP16[$452>>1]|0;
  $454 = $453 << 16 >> 16;
  $455 = Math_imul($450, $454)|0;
  $456 = ((($v1)) + 20|0);
  $457 = HEAP32[$456>>2]|0;
  $458 = (($457) + ($455))|0;
  HEAP32[$456>>2] = $458;
  $459 = $in2;
  $460 = HEAP16[$459>>1]|0;
  $461 = $460 << 16 >> 16;
  $462 = $lutt6;
  $463 = ((($462)) + 4|0);
  $464 = HEAP16[$463>>1]|0;
  $465 = $464 << 16 >> 16;
  $466 = Math_imul($461, $465)|0;
  $467 = ((($v1)) + 20|0);
  $468 = HEAP32[$467>>2]|0;
  $469 = (($468) + ($466))|0;
  HEAP32[$467>>2] = $469;
  $470 = $in2;
  $471 = ((($470)) + 6|0);
  $472 = HEAP16[$471>>1]|0;
  $473 = $472 << 16 >> 16;
  $474 = $lutt6;
  $475 = ((($474)) + 6|0);
  $476 = HEAP16[$475>>1]|0;
  $477 = $476 << 16 >> 16;
  $478 = Math_imul($473, $477)|0;
  $479 = ((($v1)) + 20|0);
  $480 = HEAP32[$479>>2]|0;
  $481 = (($480) + ($478))|0;
  HEAP32[$479>>2] = $481;
  $482 = $in2;
  $483 = ((($482)) + 4|0);
  $484 = HEAP16[$483>>1]|0;
  $485 = $484 << 16 >> 16;
  $486 = $lutt6;
  $487 = HEAP16[$486>>1]|0;
  $488 = $487 << 16 >> 16;
  $489 = Math_imul($485, $488)|0;
  $490 = ((($v1)) + 20|0);
  $491 = HEAP32[$490>>2]|0;
  $492 = (($491) + ($489))|0;
  HEAP32[$490>>2] = $492;
  $493 = $in2;
  $494 = ((($493)) + 10|0);
  $495 = HEAP16[$494>>1]|0;
  $496 = $495 << 16 >> 16;
  $497 = $lutt6;
  $498 = ((($497)) + 2|0);
  $499 = HEAP16[$498>>1]|0;
  $500 = $499 << 16 >> 16;
  $501 = Math_imul($496, $500)|0;
  $502 = ((($v1)) + 20|0);
  $503 = HEAP32[$502>>2]|0;
  $504 = (($503) + ($501))|0;
  HEAP32[$502>>2] = $504;
  $505 = $in1;
  $506 = ((($505)) + 14|0);
  $507 = HEAP16[$506>>1]|0;
  $508 = $507 << 16 >> 16;
  $509 = $lutt6;
  $510 = ((($509)) + 12|0);
  $511 = HEAP16[$510>>1]|0;
  $512 = $511 << 16 >> 16;
  $513 = Math_imul($508, $512)|0;
  $514 = ((($v1)) + 16|0);
  HEAP32[$514>>2] = $513;
  $515 = $in1;
  $516 = ((($515)) + 12|0);
  $517 = HEAP16[$516>>1]|0;
  $518 = $517 << 16 >> 16;
  $519 = $lutt6;
  $520 = ((($519)) + 14|0);
  $521 = HEAP16[$520>>1]|0;
  $522 = $521 << 16 >> 16;
  $523 = Math_imul($518, $522)|0;
  $524 = ((($v1)) + 16|0);
  $525 = HEAP32[$524>>2]|0;
  $526 = (($525) + ($523))|0;
  HEAP32[$524>>2] = $526;
  $527 = $in2;
  $528 = ((($527)) + 2|0);
  $529 = HEAP16[$528>>1]|0;
  $530 = $529 << 16 >> 16;
  $531 = $lutt6;
  $532 = ((($531)) + 8|0);
  $533 = HEAP16[$532>>1]|0;
  $534 = $533 << 16 >> 16;
  $535 = Math_imul($530, $534)|0;
  $536 = ((($v1)) + 16|0);
  $537 = HEAP32[$536>>2]|0;
  $538 = (($537) + ($535))|0;
  HEAP32[$536>>2] = $538;
  $539 = $in2;
  $540 = HEAP16[$539>>1]|0;
  $541 = $540 << 16 >> 16;
  $542 = $lutt6;
  $543 = ((($542)) + 10|0);
  $544 = HEAP16[$543>>1]|0;
  $545 = $544 << 16 >> 16;
  $546 = Math_imul($541, $545)|0;
  $547 = ((($v1)) + 16|0);
  $548 = HEAP32[$547>>2]|0;
  $549 = (($548) + ($546))|0;
  HEAP32[$547>>2] = $549;
  $550 = $in2;
  $551 = ((($550)) + 6|0);
  $552 = HEAP16[$551>>1]|0;
  $553 = $552 << 16 >> 16;
  $554 = $lutt6;
  $555 = ((($554)) + 4|0);
  $556 = HEAP16[$555>>1]|0;
  $557 = $556 << 16 >> 16;
  $558 = Math_imul($553, $557)|0;
  $559 = ((($v1)) + 16|0);
  $560 = HEAP32[$559>>2]|0;
  $561 = (($560) + ($558))|0;
  HEAP32[$559>>2] = $561;
  $562 = $in2;
  $563 = ((($562)) + 4|0);
  $564 = HEAP16[$563>>1]|0;
  $565 = $564 << 16 >> 16;
  $566 = $lutt6;
  $567 = ((($566)) + 6|0);
  $568 = HEAP16[$567>>1]|0;
  $569 = $568 << 16 >> 16;
  $570 = Math_imul($565, $569)|0;
  $571 = ((($v1)) + 16|0);
  $572 = HEAP32[$571>>2]|0;
  $573 = (($572) + ($570))|0;
  HEAP32[$571>>2] = $573;
  $574 = $in2;
  $575 = ((($574)) + 10|0);
  $576 = HEAP16[$575>>1]|0;
  $577 = $576 << 16 >> 16;
  $578 = $lutt6;
  $579 = HEAP16[$578>>1]|0;
  $580 = $579 << 16 >> 16;
  $581 = Math_imul($577, $580)|0;
  $582 = ((($v1)) + 16|0);
  $583 = HEAP32[$582>>2]|0;
  $584 = (($583) + ($581))|0;
  HEAP32[$582>>2] = $584;
  $585 = $in2;
  $586 = ((($585)) + 8|0);
  $587 = HEAP16[$586>>1]|0;
  $588 = $587 << 16 >> 16;
  $589 = $lutt6;
  $590 = ((($589)) + 2|0);
  $591 = HEAP16[$590>>1]|0;
  $592 = $591 << 16 >> 16;
  $593 = Math_imul($588, $592)|0;
  $594 = ((($v1)) + 16|0);
  $595 = HEAP32[$594>>2]|0;
  $596 = (($595) + ($593))|0;
  HEAP32[$594>>2] = $596;
  $597 = $in1;
  $598 = ((($597)) + 12|0);
  $599 = HEAP16[$598>>1]|0;
  $600 = $599 << 16 >> 16;
  $601 = $lutt6;
  $602 = ((($601)) + 12|0);
  $603 = HEAP16[$602>>1]|0;
  $604 = $603 << 16 >> 16;
  $605 = Math_imul($600, $604)|0;
  $606 = ((($v1)) + 28|0);
  HEAP32[$606>>2] = $605;
  $607 = $in2;
  $608 = ((($607)) + 2|0);
  $609 = HEAP16[$608>>1]|0;
  $610 = $609 << 16 >> 16;
  $611 = $lutt6;
  $612 = ((($611)) + 14|0);
  $613 = HEAP16[$612>>1]|0;
  $614 = $613 << 16 >> 16;
  $615 = Math_imul($610, $614)|0;
  $616 = ((($v1)) + 28|0);
  $617 = HEAP32[$616>>2]|0;
  $618 = (($617) + ($615))|0;
  HEAP32[$616>>2] = $618;
  $619 = $in2;
  $620 = HEAP16[$619>>1]|0;
  $621 = $620 << 16 >> 16;
  $622 = $lutt6;
  $623 = ((($622)) + 8|0);
  $624 = HEAP16[$623>>1]|0;
  $625 = $624 << 16 >> 16;
  $626 = Math_imul($621, $625)|0;
  $627 = ((($v1)) + 28|0);
  $628 = HEAP32[$627>>2]|0;
  $629 = (($628) + ($626))|0;
  HEAP32[$627>>2] = $629;
  $630 = $in2;
  $631 = ((($630)) + 6|0);
  $632 = HEAP16[$631>>1]|0;
  $633 = $632 << 16 >> 16;
  $634 = $lutt6;
  $635 = ((($634)) + 10|0);
  $636 = HEAP16[$635>>1]|0;
  $637 = $636 << 16 >> 16;
  $638 = Math_imul($633, $637)|0;
  $639 = ((($v1)) + 28|0);
  $640 = HEAP32[$639>>2]|0;
  $641 = (($640) + ($638))|0;
  HEAP32[$639>>2] = $641;
  $642 = $in2;
  $643 = ((($642)) + 4|0);
  $644 = HEAP16[$643>>1]|0;
  $645 = $644 << 16 >> 16;
  $646 = $lutt6;
  $647 = ((($646)) + 4|0);
  $648 = HEAP16[$647>>1]|0;
  $649 = $648 << 16 >> 16;
  $650 = Math_imul($645, $649)|0;
  $651 = ((($v1)) + 28|0);
  $652 = HEAP32[$651>>2]|0;
  $653 = (($652) + ($650))|0;
  HEAP32[$651>>2] = $653;
  $654 = $in2;
  $655 = ((($654)) + 10|0);
  $656 = HEAP16[$655>>1]|0;
  $657 = $656 << 16 >> 16;
  $658 = $lutt6;
  $659 = ((($658)) + 6|0);
  $660 = HEAP16[$659>>1]|0;
  $661 = $660 << 16 >> 16;
  $662 = Math_imul($657, $661)|0;
  $663 = ((($v1)) + 28|0);
  $664 = HEAP32[$663>>2]|0;
  $665 = (($664) + ($662))|0;
  HEAP32[$663>>2] = $665;
  $666 = $in2;
  $667 = ((($666)) + 8|0);
  $668 = HEAP16[$667>>1]|0;
  $669 = $668 << 16 >> 16;
  $670 = $lutt6;
  $671 = HEAP16[$670>>1]|0;
  $672 = $671 << 16 >> 16;
  $673 = Math_imul($669, $672)|0;
  $674 = ((($v1)) + 28|0);
  $675 = HEAP32[$674>>2]|0;
  $676 = (($675) + ($673))|0;
  HEAP32[$674>>2] = $676;
  $677 = $in2;
  $678 = ((($677)) + 14|0);
  $679 = HEAP16[$678>>1]|0;
  $680 = $679 << 16 >> 16;
  $681 = $lutt6;
  $682 = ((($681)) + 2|0);
  $683 = HEAP16[$682>>1]|0;
  $684 = $683 << 16 >> 16;
  $685 = Math_imul($680, $684)|0;
  $686 = ((($v1)) + 28|0);
  $687 = HEAP32[$686>>2]|0;
  $688 = (($687) + ($685))|0;
  HEAP32[$686>>2] = $688;
  $689 = $in2;
  $690 = ((($689)) + 2|0);
  $691 = HEAP16[$690>>1]|0;
  $692 = $691 << 16 >> 16;
  $693 = $lutt6;
  $694 = ((($693)) + 12|0);
  $695 = HEAP16[$694>>1]|0;
  $696 = $695 << 16 >> 16;
  $697 = Math_imul($692, $696)|0;
  $698 = ((($v1)) + 24|0);
  HEAP32[$698>>2] = $697;
  $699 = $in2;
  $700 = HEAP16[$699>>1]|0;
  $701 = $700 << 16 >> 16;
  $702 = $lutt6;
  $703 = ((($702)) + 14|0);
  $704 = HEAP16[$703>>1]|0;
  $705 = $704 << 16 >> 16;
  $706 = Math_imul($701, $705)|0;
  $707 = ((($v1)) + 24|0);
  $708 = HEAP32[$707>>2]|0;
  $709 = (($708) + ($706))|0;
  HEAP32[$707>>2] = $709;
  $710 = $in2;
  $711 = ((($710)) + 6|0);
  $712 = HEAP16[$711>>1]|0;
  $713 = $712 << 16 >> 16;
  $714 = $lutt6;
  $715 = ((($714)) + 8|0);
  $716 = HEAP16[$715>>1]|0;
  $717 = $716 << 16 >> 16;
  $718 = Math_imul($713, $717)|0;
  $719 = ((($v1)) + 24|0);
  $720 = HEAP32[$719>>2]|0;
  $721 = (($720) + ($718))|0;
  HEAP32[$719>>2] = $721;
  $722 = $in2;
  $723 = ((($722)) + 4|0);
  $724 = HEAP16[$723>>1]|0;
  $725 = $724 << 16 >> 16;
  $726 = $lutt6;
  $727 = ((($726)) + 10|0);
  $728 = HEAP16[$727>>1]|0;
  $729 = $728 << 16 >> 16;
  $730 = Math_imul($725, $729)|0;
  $731 = ((($v1)) + 24|0);
  $732 = HEAP32[$731>>2]|0;
  $733 = (($732) + ($730))|0;
  HEAP32[$731>>2] = $733;
  $734 = $in2;
  $735 = ((($734)) + 10|0);
  $736 = HEAP16[$735>>1]|0;
  $737 = $736 << 16 >> 16;
  $738 = $lutt6;
  $739 = ((($738)) + 4|0);
  $740 = HEAP16[$739>>1]|0;
  $741 = $740 << 16 >> 16;
  $742 = Math_imul($737, $741)|0;
  $743 = ((($v1)) + 24|0);
  $744 = HEAP32[$743>>2]|0;
  $745 = (($744) + ($742))|0;
  HEAP32[$743>>2] = $745;
  $746 = $in2;
  $747 = ((($746)) + 8|0);
  $748 = HEAP16[$747>>1]|0;
  $749 = $748 << 16 >> 16;
  $750 = $lutt6;
  $751 = ((($750)) + 6|0);
  $752 = HEAP16[$751>>1]|0;
  $753 = $752 << 16 >> 16;
  $754 = Math_imul($749, $753)|0;
  $755 = ((($v1)) + 24|0);
  $756 = HEAP32[$755>>2]|0;
  $757 = (($756) + ($754))|0;
  HEAP32[$755>>2] = $757;
  $758 = $in2;
  $759 = ((($758)) + 14|0);
  $760 = HEAP16[$759>>1]|0;
  $761 = $760 << 16 >> 16;
  $762 = $lutt6;
  $763 = HEAP16[$762>>1]|0;
  $764 = $763 << 16 >> 16;
  $765 = Math_imul($761, $764)|0;
  $766 = ((($v1)) + 24|0);
  $767 = HEAP32[$766>>2]|0;
  $768 = (($767) + ($765))|0;
  HEAP32[$766>>2] = $768;
  $769 = $in2;
  $770 = ((($769)) + 12|0);
  $771 = HEAP16[$770>>1]|0;
  $772 = $771 << 16 >> 16;
  $773 = $lutt6;
  $774 = ((($773)) + 2|0);
  $775 = HEAP16[$774>>1]|0;
  $776 = $775 << 16 >> 16;
  $777 = Math_imul($772, $776)|0;
  $778 = ((($v1)) + 24|0);
  $779 = HEAP32[$778>>2]|0;
  $780 = (($779) + ($777))|0;
  HEAP32[$778>>2] = $780;
  $781 = ((($v1)) + 4|0);
  $782 = HEAP32[$781>>2]|0;
  $783 = (($782) + 16384)|0;
  $784 = $783 >> 15;
  $785 = $784&65535;
  $786 = $outp;
  $787 = ((($786)) + 2|0);
  HEAP16[$787>>1] = $785;
  $788 = HEAP32[$v1>>2]|0;
  $789 = (($788) + 16384)|0;
  $790 = $789 >> 15;
  $791 = $790&65535;
  $792 = $outp;
  HEAP16[$792>>1] = $791;
  $793 = ((($v1)) + 12|0);
  $794 = HEAP32[$793>>2]|0;
  $795 = (($794) + 16384)|0;
  $796 = $795 >> 15;
  $797 = $796&65535;
  $798 = $outp;
  $799 = ((($798)) + 6|0);
  HEAP16[$799>>1] = $797;
  $800 = ((($v1)) + 8|0);
  $801 = HEAP32[$800>>2]|0;
  $802 = (($801) + 16384)|0;
  $803 = $802 >> 15;
  $804 = $803&65535;
  $805 = $outp;
  $806 = ((($805)) + 4|0);
  HEAP16[$806>>1] = $804;
  $807 = ((($v1)) + 20|0);
  $808 = HEAP32[$807>>2]|0;
  $809 = (($808) + 16384)|0;
  $810 = $809 >> 15;
  $811 = $810&65535;
  $812 = $outp;
  $813 = ((($812)) + 10|0);
  HEAP16[$813>>1] = $811;
  $814 = ((($v1)) + 16|0);
  $815 = HEAP32[$814>>2]|0;
  $816 = (($815) + 16384)|0;
  $817 = $816 >> 15;
  $818 = $817&65535;
  $819 = $outp;
  $820 = ((($819)) + 8|0);
  HEAP16[$820>>1] = $818;
  $821 = ((($v1)) + 28|0);
  $822 = HEAP32[$821>>2]|0;
  $823 = (($822) + 16384)|0;
  $824 = $823 >> 15;
  $825 = $824&65535;
  $826 = $outp;
  $827 = ((($826)) + 14|0);
  HEAP16[$827>>1] = $825;
  $828 = ((($v1)) + 24|0);
  $829 = HEAP32[$828>>2]|0;
  $830 = (($829) + 16384)|0;
  $831 = $830 >> 15;
  $832 = $831&65535;
  $833 = $outp;
  $834 = ((($833)) + 12|0);
  HEAP16[$834>>1] = $832;
  $835 = $in2;
  $in1 = $835;
  $836 = $in2;
  $837 = ((($836)) + 16|0);
  $in2 = $837;
  $838 = $outp;
  $839 = ((($838)) + 16|0);
  $outp = $839;
  $840 = $x;
  $841 = (($840) + 16)|0;
  $x = $841;
 }
 $842 = $0;
 $843 = HEAP32[$842>>2]|0;
 $844 = $3;
 $845 = (($843) + ($844)|0);
 $846 = $in2;
 $847 = ((($846)) + -16|0);
 dest=$845; src=$847; stop=dest+16|0; do { HEAP8[dest>>0]=HEAP8[src>>0]|0; dest=dest+1|0; src=src+1|0; } while ((dest|0) < (stop|0));
 $848 = $0;
 $849 = ((($848)) + 88|0);
 $850 = $1;
 $851 = $850&65535;
 $852 = (($849) + ($851)|0);
 $853 = $2;
 $854 = $853&65535;
 _memcpy(($852|0),($outbuff|0),($854|0))|0;
 STACKTOP = sp;return;
}
function _alist_polef($hle,$init,$dmemo,$dmemi,$count,$gain,$table,$address) {
 $hle = $hle|0;
 $init = $init|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $gain = $gain|0;
 $table = $table|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0;
 var $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0;
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0;
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0;
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0;
 var $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $accu = 0, $dst = 0, $frame = 0, $h1 = 0, $h2 = 0, $h2_before = 0, $i = 0, $l1 = 0, $l2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $h2_before = sp + 48|0;
 $frame = sp + 32|0;
 $0 = $hle;
 $8 = $init&1;
 $1 = $8;
 $2 = $dmemo;
 $3 = $dmemi;
 $4 = $count;
 $5 = $gain;
 $6 = $table;
 $7 = $address;
 $9 = $0;
 $10 = ((($9)) + 88|0);
 $11 = $2;
 $12 = $11&65535;
 $13 = (($10) + ($12)|0);
 $dst = $13;
 $14 = $6;
 $h1 = $14;
 $15 = $6;
 $16 = ((($15)) + 16|0);
 $h2 = $16;
 $17 = $4;
 $18 = $17&65535;
 $19 = (_align($18,16)|0);
 $20 = $19&65535;
 $4 = $20;
 $21 = $1;
 $22 = $21&1;
 if ($22) {
  $l1 = 0;
  $l2 = 0;
 } else {
  $23 = $0;
  $24 = $7;
  $25 = (($24) + 4)|0;
  $26 = (_dram_u16($23,$25)|0);
  $27 = HEAP16[$26>>1]|0;
  $l1 = $27;
  $28 = $0;
  $29 = $7;
  $30 = (($29) + 6)|0;
  $31 = (_dram_u16($28,$30)|0);
  $32 = HEAP16[$31>>1]|0;
  $l2 = $32;
 }
 $i = 0;
 while(1) {
  $33 = $i;
  $34 = ($33>>>0)<(8);
  if (!($34)) {
   break;
  }
  $35 = $i;
  $36 = $h2;
  $37 = (($36) + ($35<<1)|0);
  $38 = HEAP16[$37>>1]|0;
  $39 = $i;
  $40 = (($h2_before) + ($39<<1)|0);
  HEAP16[$40>>1] = $38;
  $41 = $i;
  $42 = $h2;
  $43 = (($42) + ($41<<1)|0);
  $44 = HEAP16[$43>>1]|0;
  $45 = $44 << 16 >> 16;
  $46 = $5;
  $47 = $46&65535;
  $48 = Math_imul($45, $47)|0;
  $49 = $48 >> 14;
  $50 = $49&65535;
  $51 = $i;
  $52 = $h2;
  $53 = (($52) + ($51<<1)|0);
  HEAP16[$53>>1] = $50;
  $54 = $i;
  $55 = (($54) + 1)|0;
  $i = $55;
 }
 while(1) {
  $i = 0;
  while(1) {
   $56 = $i;
   $57 = ($56>>>0)<(8);
   if (!($57)) {
    break;
   }
   $58 = $0;
   $59 = $3;
   $60 = (_alist_s16($58,$59)|0);
   $61 = HEAP16[$60>>1]|0;
   $62 = $i;
   $63 = (($frame) + ($62<<1)|0);
   HEAP16[$63>>1] = $61;
   $64 = $i;
   $65 = (($64) + 1)|0;
   $i = $65;
   $66 = $3;
   $67 = $66&65535;
   $68 = (($67) + 2)|0;
   $69 = $68&65535;
   $3 = $69;
  }
  $i = 0;
  while(1) {
   $70 = $i;
   $71 = ($70>>>0)<(8);
   if (!($71)) {
    break;
   }
   $72 = $i;
   $73 = (($frame) + ($72<<1)|0);
   $74 = HEAP16[$73>>1]|0;
   $75 = $74 << 16 >> 16;
   $76 = $5;
   $77 = $76&65535;
   $78 = Math_imul($75, $77)|0;
   $accu = $78;
   $79 = $i;
   $80 = $h1;
   $81 = (($80) + ($79<<1)|0);
   $82 = HEAP16[$81>>1]|0;
   $83 = $82 << 16 >> 16;
   $84 = $l1;
   $85 = $84 << 16 >> 16;
   $86 = Math_imul($83, $85)|0;
   $87 = $i;
   $88 = (($h2_before) + ($87<<1)|0);
   $89 = HEAP16[$88>>1]|0;
   $90 = $89 << 16 >> 16;
   $91 = $l2;
   $92 = $91 << 16 >> 16;
   $93 = Math_imul($90, $92)|0;
   $94 = (($86) + ($93))|0;
   $95 = $i;
   $96 = $h2;
   $97 = (_rdot($95,$96,$frame)|0);
   $98 = (($94) + ($97))|0;
   $99 = $accu;
   $100 = (($99) + ($98))|0;
   $accu = $100;
   $101 = $accu;
   $102 = $101 >> 14;
   $103 = (_clamp_s16($102)|0);
   $104 = $i;
   $105 = $104 ^ 1;
   $106 = $dst;
   $107 = (($106) + ($105<<1)|0);
   HEAP16[$107>>1] = $103;
   $108 = $i;
   $109 = (($108) + 1)|0;
   $i = $109;
  }
  $110 = $dst;
  $111 = ((($110)) + 14|0);
  $112 = HEAP16[$111>>1]|0;
  $l1 = $112;
  $113 = $dst;
  $114 = ((($113)) + 12|0);
  $115 = HEAP16[$114>>1]|0;
  $l2 = $115;
  $116 = $dst;
  $117 = ((($116)) + 16|0);
  $dst = $117;
  $118 = $4;
  $119 = $118&65535;
  $120 = (($119) - 16)|0;
  $121 = $120&65535;
  $4 = $121;
  $122 = $4;
  $123 = $122&65535;
  $124 = ($123|0)!=(0);
  if (!($124)) {
   break;
  }
 }
 $125 = $0;
 $126 = $dst;
 $127 = ((($126)) + -8|0);
 $128 = $7;
 _dram_store_u16($125,$127,$128,4);
 STACKTOP = sp;return;
}
function _dram_u16($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = HEAP32[$2>>2]|0;
 $4 = $1;
 $5 = $4 & 16777215;
 $6 = (_u16($3,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _alist_iirf($hle,$init,$dmemo,$dmemi,$count,$table,$address) {
 $hle = $hle|0;
 $init = $init|0;
 $dmemo = $dmemo|0;
 $dmemi = $dmemi|0;
 $count = $count|0;
 $table = $table|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $accu = 0, $dst = 0, $frame = 0, $i = 0, $ibuf = 0, $index = 0, $prev = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $frame = sp + 40|0;
 $ibuf = sp + 32|0;
 $0 = $hle;
 $7 = $init&1;
 $1 = $7;
 $2 = $dmemo;
 $3 = $dmemi;
 $4 = $count;
 $5 = $table;
 $6 = $address;
 $8 = $0;
 $9 = ((($8)) + 88|0);
 $10 = $2;
 $11 = $10&65535;
 $12 = (($9) + ($11)|0);
 $dst = $12;
 $index = 7;
 $13 = $4;
 $14 = $13&65535;
 $15 = (_align($14,16)|0);
 $16 = $15&65535;
 $4 = $16;
 $17 = $1;
 $18 = $17&1;
 if ($18) {
  $i = 0;
  while(1) {
   $19 = $i;
   $20 = ($19|0)<(8);
   if (!($20)) {
    break;
   }
   $21 = $i;
   $22 = (($frame) + ($21<<1)|0);
   HEAP16[$22>>1] = 0;
   $23 = $i;
   $24 = (($23) + 1)|0;
   $i = $24;
  }
  $25 = ((($ibuf)) + 2|0);
  HEAP16[$25>>1] = 0;
  $26 = ((($ibuf)) + 4|0);
  HEAP16[$26>>1] = 0;
 } else {
  $27 = $0;
  $28 = $6;
  $29 = (($28) + 4)|0;
  $30 = (_dram_u16($27,$29)|0);
  $31 = HEAP16[$30>>1]|0;
  $32 = ((($frame)) + 12|0);
  HEAP16[$32>>1] = $31;
  $33 = $0;
  $34 = $6;
  $35 = (($34) + 6)|0;
  $36 = (_dram_u16($33,$35)|0);
  $37 = HEAP16[$36>>1]|0;
  $38 = ((($frame)) + 14|0);
  HEAP16[$38>>1] = $37;
  $39 = $0;
  $40 = $6;
  $41 = (($40) + 8)|0;
  $42 = (_dram_u16($39,$41)|0);
  $43 = HEAP16[$42>>1]|0;
  $44 = ((($ibuf)) + 2|0);
  HEAP16[$44>>1] = $43;
  $45 = $0;
  $46 = $6;
  $47 = (($46) + 10)|0;
  $48 = (_dram_u16($45,$47)|0);
  $49 = HEAP16[$48>>1]|0;
  $50 = ((($ibuf)) + 4|0);
  HEAP16[$50>>1] = $49;
 }
 $51 = $5;
 $52 = ((($51)) + 18|0);
 $53 = HEAP16[$52>>1]|0;
 $54 = ((($frame)) + 12|0);
 $55 = HEAP16[$54>>1]|0;
 $56 = (_vmulf($53,$55)|0);
 $57 = $56<<1;
 $prev = $57;
 while(1) {
  $i = 0;
  while(1) {
   $58 = $i;
   $59 = ($58|0)<(8);
   if (!($59)) {
    break;
   }
   $60 = $0;
   $61 = $3;
   $62 = (_alist_s16($60,$61)|0);
   $63 = HEAP16[$62>>1]|0;
   $64 = $index;
   $65 = $64&65535;
   $66 = $65 & 3;
   $67 = (($ibuf) + ($66<<1)|0);
   HEAP16[$67>>1] = $63;
   $68 = $prev;
   $69 = $5;
   $70 = HEAP16[$69>>1]|0;
   $71 = $index;
   $72 = $71&65535;
   $73 = $72 & 3;
   $74 = (($ibuf) + ($73<<1)|0);
   $75 = HEAP16[$74>>1]|0;
   $76 = (_vmulf($70,$75)|0);
   $77 = (($68) + ($76))|0;
   $78 = $5;
   $79 = ((($78)) + 2|0);
   $80 = HEAP16[$79>>1]|0;
   $81 = $index;
   $82 = $81&65535;
   $83 = (($82) - 1)|0;
   $84 = $83 & 3;
   $85 = (($ibuf) + ($84<<1)|0);
   $86 = HEAP16[$85>>1]|0;
   $87 = (_vmulf($80,$86)|0);
   $88 = (($77) + ($87))|0;
   $89 = $5;
   $90 = HEAP16[$89>>1]|0;
   $91 = $index;
   $92 = $91&65535;
   $93 = (($92) - 2)|0;
   $94 = $93 & 3;
   $95 = (($ibuf) + ($94<<1)|0);
   $96 = HEAP16[$95>>1]|0;
   $97 = (_vmulf($90,$96)|0);
   $98 = (($88) + ($97))|0;
   $accu = $98;
   $99 = $5;
   $100 = ((($99)) + 16|0);
   $101 = HEAP16[$100>>1]|0;
   $102 = $index;
   $103 = $102&65535;
   $104 = (($frame) + ($103<<1)|0);
   $105 = HEAP16[$104>>1]|0;
   $106 = (_vmulf($101,$105)|0);
   $107 = $106<<1;
   $108 = $accu;
   $109 = (($108) + ($107))|0;
   $accu = $109;
   $110 = $5;
   $111 = ((($110)) + 18|0);
   $112 = HEAP16[$111>>1]|0;
   $113 = $index;
   $114 = $113&65535;
   $115 = (($frame) + ($114<<1)|0);
   $116 = HEAP16[$115>>1]|0;
   $117 = (_vmulf($112,$116)|0);
   $118 = $117<<1;
   $prev = $118;
   $119 = $accu;
   $120 = $119&65535;
   $121 = $i;
   $122 = (($frame) + ($121<<1)|0);
   HEAP16[$122>>1] = $120;
   $123 = $i;
   $124 = $123 ^ 1;
   $125 = $dst;
   $126 = (($125) + ($124<<1)|0);
   HEAP16[$126>>1] = $120;
   $127 = $index;
   $128 = $127&65535;
   $129 = (($128) + 1)|0;
   $130 = $129 & 7;
   $131 = $130&65535;
   $index = $131;
   $132 = $3;
   $133 = $132&65535;
   $134 = (($133) + 2)|0;
   $135 = $134&65535;
   $3 = $135;
   $136 = $i;
   $137 = (($136) + 1)|0;
   $i = $137;
  }
  $138 = $dst;
  $139 = ((($138)) + 16|0);
  $dst = $139;
  $140 = $4;
  $141 = $140&65535;
  $142 = (($141) - 16)|0;
  $143 = $142&65535;
  $4 = $143;
  $144 = $4;
  $145 = $144&65535;
  $146 = ($145|0)>(0);
  if (!($146)) {
   break;
  }
 }
 $147 = $0;
 $148 = ((($frame)) + 12|0);
 $149 = $6;
 $150 = (($149) + 4)|0;
 _dram_store_u16($147,$148,$150,4);
 $151 = $0;
 $152 = $index;
 $153 = $152&65535;
 $154 = (($153) - 2)|0;
 $155 = $154 & 3;
 $156 = (($ibuf) + ($155<<1)|0);
 $157 = $6;
 $158 = (($157) + 8)|0;
 _dram_store_u16($151,$156,$158,2);
 $159 = $0;
 $160 = $index;
 $161 = $160&65535;
 $162 = (($161) - 1)|0;
 $163 = $162 & 3;
 $164 = (($ibuf) + ($163<<1)|0);
 $165 = $6;
 $166 = (($165) + 10)|0;
 _dram_store_u16($159,$164,$166,2);
 STACKTOP = sp;return;
}
function _vmulf($x,$y) {
 $x = $x|0;
 $y = $y|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $y;
 $2 = $0;
 $3 = $2 << 16 >> 16;
 $4 = $1;
 $5 = $4 << 16 >> 16;
 $6 = Math_imul($3, $5)|0;
 $7 = (($6) + 16384)|0;
 $8 = $7 >> 15;
 STACKTOP = sp;return ($8|0);
}
function _u32($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $1;
 $3 = $2 & 3;
 $4 = ($3|0)==(0);
 if ($4) {
  $5 = $0;
  $6 = $1;
  $7 = (($5) + ($6)|0);
  STACKTOP = sp;return ($7|0);
 } else {
  ___assert_fail(((gb + (6645) | 0)|0),((gb + (6622) | 0)|0),80,((gb + (6664) | 0)|0));
  // unreachable;
 }
 return (0)|0;
}
function _u8($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $0;
 $3 = $1;
 $4 = $3 ^ 3;
 $5 = (($2) + ($4)|0);
 STACKTOP = sp;return ($5|0);
}
function _u16($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $1;
 $3 = $2 & 1;
 $4 = ($3|0)==(0);
 if ($4) {
  $5 = $0;
  $6 = $1;
  $7 = $6 ^ 2;
  $8 = (($5) + ($7)|0);
  STACKTOP = sp;return ($8|0);
 } else {
  ___assert_fail(((gb + (6603) | 0)|0),((gb + (6622) | 0)|0),74,((gb + (6641) | 0)|0));
  // unreachable;
 }
 return (0)|0;
}
function _adpcm_predict_sample($byte,$mask,$lshift,$rshift) {
 $byte = $byte|0;
 $mask = $mask|0;
 $lshift = $lshift|0;
 $rshift = $rshift|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $sample = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $byte;
 $1 = $mask;
 $2 = $lshift;
 $3 = $rshift;
 $4 = $0;
 $5 = $4&255;
 $6 = $1;
 $7 = $6&255;
 $8 = $5 & $7;
 $9 = $8&65535;
 $10 = $9&65535;
 $11 = $2;
 $12 = $10 << $11;
 $13 = $12&65535;
 $sample = $13;
 $14 = $3;
 $15 = $sample;
 $16 = $15 << 16 >> 16;
 $17 = $16 >> $14;
 $18 = $17&65535;
 $sample = $18;
 $19 = $sample;
 STACKTOP = sp;return ($19|0);
}
function _alist_process_audio($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _clear_segments($1);
 $2 = $0;
 _alist_process($2,(gb + (0) | 0),16);
 STACKTOP = sp;return;
}
function _alist_process_audio_ge($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _clear_segments($1);
 $2 = $0;
 _alist_process($2,(gb + (64) | 0),16);
 STACKTOP = sp;return;
}
function _alist_process_audio_bc($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _clear_segments($1);
 $2 = $0;
 _alist_process($2,(gb + (128) | 0),16);
 STACKTOP = sp;return;
}
function _clear_segments($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $2 = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 $2 = ((($1)) + 4184|0);
 dest=$2; stop=dest+64|0; do { HEAP32[dest>>2]=0|0; dest=dest+4|0; } while ((dest|0) < (stop|0));
 STACKTOP = sp;return;
}
function _SPNOOP($UNUSED_hle,$UNUSED_w1,$UNUSED_w2) {
 $UNUSED_hle = $UNUSED_hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $UNUSED_w2 = $UNUSED_w2|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_hle;
 $1 = $UNUSED_w1;
 $2 = $UNUSED_w2;
 STACKTOP = sp;return;
}
function _ADPCM($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $address = 0, $flags = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $0;
 $7 = $2;
 $8 = (_get_address($6,$7)|0);
 $address = $8;
 $9 = $0;
 $10 = $flags;
 $11 = $10&255;
 $12 = $11 & 1;
 $13 = ($12|0)!=(0);
 $14 = $flags;
 $15 = $14&255;
 $16 = $15 & 2;
 $17 = ($16|0)!=(0);
 $18 = $0;
 $19 = ((($18)) + 4184|0);
 $20 = ((($19)) + 66|0);
 $21 = HEAP16[$20>>1]|0;
 $22 = $0;
 $23 = ((($22)) + 4184|0);
 $24 = ((($23)) + 64|0);
 $25 = HEAP16[$24>>1]|0;
 $26 = $0;
 $27 = ((($26)) + 4184|0);
 $28 = ((($27)) + 68|0);
 $29 = HEAP16[$28>>1]|0;
 $30 = $29&65535;
 $31 = (_align_1($30,32)|0);
 $32 = $31&65535;
 $33 = $0;
 $34 = ((($33)) + 4184|0);
 $35 = ((($34)) + 100|0);
 $36 = $0;
 $37 = ((($36)) + 4184|0);
 $38 = ((($37)) + 96|0);
 $39 = HEAP32[$38>>2]|0;
 $40 = $address;
 _alist_adpcm($9,$13,$17,0,$21,$25,$32,$35,$39,$40);
 STACKTOP = sp;return;
}
function _CLEARBUFF($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0, $dmem = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = (($3) + 1472)|0;
 $5 = $4&65535;
 $dmem = $5;
 $6 = $2;
 $7 = $6&65535;
 $count = $7;
 $8 = $count;
 $9 = $8&65535;
 $10 = ($9|0)==(0);
 if ($10) {
  STACKTOP = sp;return;
 }
 $11 = $0;
 $12 = $dmem;
 $13 = $count;
 $14 = $13&65535;
 $15 = (_align_1($14,16)|0);
 $16 = $15&65535;
 _alist_clear($11,$12,$16);
 STACKTOP = sp;return;
}
function _ENVMIXER_GE($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $address = 0, $flags = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $0;
 $7 = $2;
 $8 = (_get_address($6,$7)|0);
 $address = $8;
 $9 = $0;
 $10 = $flags;
 $11 = $10&255;
 $12 = $11 & 1;
 $13 = ($12|0)!=(0);
 $14 = $flags;
 $15 = $14&255;
 $16 = $15 & 8;
 $17 = ($16|0)!=(0);
 $18 = $0;
 $19 = ((($18)) + 4184|0);
 $20 = ((($19)) + 66|0);
 $21 = HEAP16[$20>>1]|0;
 $22 = $0;
 $23 = ((($22)) + 4184|0);
 $24 = ((($23)) + 70|0);
 $25 = HEAP16[$24>>1]|0;
 $26 = $0;
 $27 = ((($26)) + 4184|0);
 $28 = ((($27)) + 72|0);
 $29 = HEAP16[$28>>1]|0;
 $30 = $0;
 $31 = ((($30)) + 4184|0);
 $32 = ((($31)) + 74|0);
 $33 = HEAP16[$32>>1]|0;
 $34 = $0;
 $35 = ((($34)) + 4184|0);
 $36 = ((($35)) + 64|0);
 $37 = HEAP16[$36>>1]|0;
 $38 = $0;
 $39 = ((($38)) + 4184|0);
 $40 = ((($39)) + 68|0);
 $41 = HEAP16[$40>>1]|0;
 $42 = $0;
 $43 = ((($42)) + 4184|0);
 $44 = ((($43)) + 76|0);
 $45 = HEAP16[$44>>1]|0;
 $46 = $0;
 $47 = ((($46)) + 4184|0);
 $48 = ((($47)) + 78|0);
 $49 = HEAP16[$48>>1]|0;
 $50 = $0;
 $51 = ((($50)) + 4184|0);
 $52 = ((($51)) + 80|0);
 $53 = $0;
 $54 = ((($53)) + 4184|0);
 $55 = ((($54)) + 84|0);
 $56 = $0;
 $57 = ((($56)) + 4184|0);
 $58 = ((($57)) + 88|0);
 $59 = $address;
 _alist_envmix_ge($9,$13,$17,$21,$25,$29,$33,$37,$41,$45,$49,$52,$55,$58,$59);
 STACKTOP = sp;return;
}
function _LOADBUFF($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $address = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $0;
 $4 = $2;
 $5 = (_get_address($3,$4)|0);
 $address = $5;
 $6 = $0;
 $7 = ((($6)) + 4184|0);
 $8 = ((($7)) + 68|0);
 $9 = HEAP16[$8>>1]|0;
 $10 = $9&65535;
 $11 = ($10|0)==(0);
 if ($11) {
  STACKTOP = sp;return;
 }
 $12 = $0;
 $13 = $0;
 $14 = ((($13)) + 4184|0);
 $15 = ((($14)) + 64|0);
 $16 = HEAP16[$15>>1]|0;
 $17 = $address;
 $18 = $0;
 $19 = ((($18)) + 4184|0);
 $20 = ((($19)) + 68|0);
 $21 = HEAP16[$20>>1]|0;
 _alist_load($12,$16,$17,$21);
 STACKTOP = sp;return;
}
function _RESAMPLE($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0;
 var $flags = 0, $pitch = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $1;
 $7 = $6&65535;
 $pitch = $7;
 $8 = $0;
 $9 = $2;
 $10 = (_get_address($8,$9)|0);
 $address = $10;
 $11 = $0;
 $12 = $flags;
 $13 = $12&255;
 $14 = $13 & 1;
 $15 = ($14|0)!=(0);
 $16 = $flags;
 $17 = $16&255;
 $18 = $17 & 2;
 $19 = ($18|0)!=(0);
 $20 = $0;
 $21 = ((($20)) + 4184|0);
 $22 = ((($21)) + 66|0);
 $23 = HEAP16[$22>>1]|0;
 $24 = $0;
 $25 = ((($24)) + 4184|0);
 $26 = ((($25)) + 64|0);
 $27 = HEAP16[$26>>1]|0;
 $28 = $0;
 $29 = ((($28)) + 4184|0);
 $30 = ((($29)) + 68|0);
 $31 = HEAP16[$30>>1]|0;
 $32 = $31&65535;
 $33 = (_align_1($32,16)|0);
 $34 = $33&65535;
 $35 = $pitch;
 $36 = $35&65535;
 $37 = $36 << 1;
 $38 = $address;
 _alist_resample($11,$15,$19,$23,$27,$34,$37,$38);
 STACKTOP = sp;return;
}
function _SAVEBUFF($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $address = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $0;
 $4 = $2;
 $5 = (_get_address($3,$4)|0);
 $address = $5;
 $6 = $0;
 $7 = ((($6)) + 4184|0);
 $8 = ((($7)) + 68|0);
 $9 = HEAP16[$8>>1]|0;
 $10 = $9&65535;
 $11 = ($10|0)==(0);
 if ($11) {
  STACKTOP = sp;return;
 }
 $12 = $0;
 $13 = $0;
 $14 = ((($13)) + 4184|0);
 $15 = ((($14)) + 66|0);
 $16 = HEAP16[$15>>1]|0;
 $17 = $address;
 $18 = $0;
 $19 = ((($18)) + 4184|0);
 $20 = ((($19)) + 68|0);
 $21 = HEAP16[$20>>1]|0;
 _alist_save($12,$16,$17,$21);
 STACKTOP = sp;return;
}
function _SEGMENT($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $0;
 $4 = $2;
 _set_address($3,$4);
 STACKTOP = sp;return;
}
function _SETBUFF($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $flags = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $flags;
 $7 = $6&255;
 $8 = $7 & 8;
 $9 = ($8|0)!=(0);
 $10 = $1;
 $11 = (($10) + 1472)|0;
 $12 = $11&65535;
 $13 = $0;
 $14 = ((($13)) + 4184|0);
 if ($9) {
  $15 = ((($14)) + 70|0);
  HEAP16[$15>>1] = $12;
  $16 = $2;
  $17 = $16 >>> 16;
  $18 = (($17) + 1472)|0;
  $19 = $18&65535;
  $20 = $0;
  $21 = ((($20)) + 4184|0);
  $22 = ((($21)) + 72|0);
  HEAP16[$22>>1] = $19;
  $23 = $2;
  $24 = (($23) + 1472)|0;
  $25 = $24&65535;
  $26 = $0;
  $27 = ((($26)) + 4184|0);
  $28 = ((($27)) + 74|0);
  HEAP16[$28>>1] = $25;
  STACKTOP = sp;return;
 } else {
  $29 = ((($14)) + 64|0);
  HEAP16[$29>>1] = $12;
  $30 = $2;
  $31 = $30 >>> 16;
  $32 = (($31) + 1472)|0;
  $33 = $32&65535;
  $34 = $0;
  $35 = ((($34)) + 4184|0);
  $36 = ((($35)) + 66|0);
  HEAP16[$36>>1] = $33;
  $37 = $2;
  $38 = $37&65535;
  $39 = $0;
  $40 = ((($39)) + 4184|0);
  $41 = ((($40)) + 68|0);
  HEAP16[$41>>1] = $38;
  STACKTOP = sp;return;
 }
}
function _SETVOL($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $flags = 0, $lr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $flags;
 $7 = $6&255;
 $8 = $7 & 8;
 $9 = ($8|0)!=(0);
 if ($9) {
  $10 = $1;
  $11 = $10&65535;
  $12 = $0;
  $13 = ((($12)) + 4184|0);
  $14 = ((($13)) + 76|0);
  HEAP16[$14>>1] = $11;
  $15 = $2;
  $16 = $15&65535;
  $17 = $0;
  $18 = ((($17)) + 4184|0);
  $19 = ((($18)) + 78|0);
  HEAP16[$19>>1] = $16;
  STACKTOP = sp;return;
 }
 $20 = $flags;
 $21 = $20&255;
 $22 = $21 & 2;
 $23 = ($22|0)!=(0);
 $24 = $23 ? 0 : 1;
 $lr = $24;
 $25 = $flags;
 $26 = $25&255;
 $27 = $26 & 4;
 $28 = ($27|0)!=(0);
 $29 = $1;
 $30 = $29&65535;
 $31 = $lr;
 $32 = $0;
 $33 = ((($32)) + 4184|0);
 if ($28) {
  $34 = ((($33)) + 80|0);
  $35 = (($34) + ($31<<1)|0);
  HEAP16[$35>>1] = $30;
  STACKTOP = sp;return;
 } else {
  $36 = ((($33)) + 84|0);
  $37 = (($36) + ($31<<1)|0);
  HEAP16[$37>>1] = $30;
  $38 = $2;
  $39 = $lr;
  $40 = $0;
  $41 = ((($40)) + 4184|0);
  $42 = ((($41)) + 88|0);
  $43 = (($42) + ($39<<2)|0);
  HEAP32[$43>>2] = $38;
  STACKTOP = sp;return;
 }
}
function _DMEMMOVE($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $count = 0, $dmemi = 0, $dmemo = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = (($3) + 1472)|0;
 $5 = $4&65535;
 $dmemi = $5;
 $6 = $2;
 $7 = $6 >>> 16;
 $8 = (($7) + 1472)|0;
 $9 = $8&65535;
 $dmemo = $9;
 $10 = $2;
 $11 = $10&65535;
 $count = $11;
 $12 = $count;
 $13 = $12&65535;
 $14 = ($13|0)==(0);
 if ($14) {
  STACKTOP = sp;return;
 }
 $15 = $0;
 $16 = $dmemo;
 $17 = $dmemi;
 $18 = $count;
 $19 = $18&65535;
 $20 = (_align_1($19,16)|0);
 $21 = $20&65535;
 _alist_move($15,$16,$17,$21);
 STACKTOP = sp;return;
}
function _LOADADPCM($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $count = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $count = $4;
 $5 = $0;
 $6 = $2;
 $7 = (_get_address($5,$6)|0);
 $address = $7;
 $8 = $0;
 $9 = $0;
 $10 = ((($9)) + 4184|0);
 $11 = ((($10)) + 100|0);
 $12 = $address;
 $13 = $count;
 $14 = $13&65535;
 $15 = (_align_1($14,8)|0);
 $16 = $15 >>> 1;
 _dram_load_u16_2($8,$11,$12,$16);
 STACKTOP = sp;return;
}
function _MIXER($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $dmemi = 0, $dmemo = 0, $gain = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $gain = $4;
 $5 = $2;
 $6 = $5 >>> 16;
 $7 = (($6) + 1472)|0;
 $8 = $7&65535;
 $dmemi = $8;
 $9 = $2;
 $10 = (($9) + 1472)|0;
 $11 = $10&65535;
 $dmemo = $11;
 $12 = $0;
 $13 = ((($12)) + 4184|0);
 $14 = ((($13)) + 68|0);
 $15 = HEAP16[$14>>1]|0;
 $16 = $15&65535;
 $17 = ($16|0)==(0);
 if ($17) {
  STACKTOP = sp;return;
 }
 $18 = $0;
 $19 = $dmemo;
 $20 = $dmemi;
 $21 = $0;
 $22 = ((($21)) + 4184|0);
 $23 = ((($22)) + 68|0);
 $24 = HEAP16[$23>>1]|0;
 $25 = $24&65535;
 $26 = (_align_1($25,32)|0);
 $27 = $26&65535;
 $28 = $gain;
 _alist_mix($18,$19,$20,$27,$28);
 STACKTOP = sp;return;
}
function _INTERLEAVE($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $left = 0, $right = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $2;
 $4 = $3 >>> 16;
 $5 = (($4) + 1472)|0;
 $6 = $5&65535;
 $left = $6;
 $7 = $2;
 $8 = (($7) + 1472)|0;
 $9 = $8&65535;
 $right = $9;
 $10 = $0;
 $11 = ((($10)) + 4184|0);
 $12 = ((($11)) + 68|0);
 $13 = HEAP16[$12>>1]|0;
 $14 = $13&65535;
 $15 = ($14|0)==(0);
 if ($15) {
  STACKTOP = sp;return;
 }
 $16 = $0;
 $17 = $0;
 $18 = ((($17)) + 4184|0);
 $19 = ((($18)) + 66|0);
 $20 = HEAP16[$19>>1]|0;
 $21 = $left;
 $22 = $right;
 $23 = $0;
 $24 = ((($23)) + 4184|0);
 $25 = ((($24)) + 68|0);
 $26 = HEAP16[$25>>1]|0;
 $27 = $26&65535;
 $28 = (_align_1($27,16)|0);
 $29 = $28&65535;
 _alist_interleave($16,$20,$21,$22,$29);
 STACKTOP = sp;return;
}
function _POLEF($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $address = 0, $flags = 0, $gain = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $1;
 $7 = $6&65535;
 $gain = $7;
 $8 = $0;
 $9 = $2;
 $10 = (_get_address($8,$9)|0);
 $address = $10;
 $11 = $0;
 $12 = ((($11)) + 4184|0);
 $13 = ((($12)) + 68|0);
 $14 = HEAP16[$13>>1]|0;
 $15 = $14&65535;
 $16 = ($15|0)==(0);
 if ($16) {
  STACKTOP = sp;return;
 }
 $17 = $0;
 $18 = $flags;
 $19 = $18&255;
 $20 = $19 & 1;
 $21 = ($20|0)!=(0);
 $22 = $0;
 $23 = ((($22)) + 4184|0);
 $24 = ((($23)) + 66|0);
 $25 = HEAP16[$24>>1]|0;
 $26 = $0;
 $27 = ((($26)) + 4184|0);
 $28 = ((($27)) + 64|0);
 $29 = HEAP16[$28>>1]|0;
 $30 = $0;
 $31 = ((($30)) + 4184|0);
 $32 = ((($31)) + 68|0);
 $33 = HEAP16[$32>>1]|0;
 $34 = $33&65535;
 $35 = (_align_1($34,16)|0);
 $36 = $35&65535;
 $37 = $gain;
 $38 = $0;
 $39 = ((($38)) + 4184|0);
 $40 = ((($39)) + 100|0);
 $41 = $address;
 _alist_polef($17,$21,$25,$29,$36,$37,$40,$41);
 STACKTOP = sp;return;
}
function _SETLOOP($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $0;
 $4 = $2;
 $5 = (_get_address($3,$4)|0);
 $6 = $0;
 $7 = ((($6)) + 4184|0);
 $8 = ((($7)) + 96|0);
 HEAP32[$8>>2] = $5;
 STACKTOP = sp;return;
}
function _get_address($hle,$so) {
 $hle = $hle|0;
 $so = $so|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $so;
 $2 = $0;
 $3 = $1;
 $4 = $0;
 $5 = ((($4)) + 4184|0);
 $6 = (_alist_get_address($2,$3,$5,16)|0);
 STACKTOP = sp;return ($6|0);
}
function _align_1($x,$amount) {
 $x = $x|0;
 $amount = $amount|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $amount;
 $2 = $1;
 $3 = (($2) + -1)|0;
 $1 = $3;
 $4 = $0;
 $5 = $1;
 $6 = (($4) + ($5))|0;
 $7 = $1;
 $8 = $7 ^ -1;
 $9 = $6 & $8;
 STACKTOP = sp;return ($9|0);
}
function _dram_load_u16_2($hle,$dst,$address,$count) {
 $hle = $hle|0;
 $dst = $dst|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $0;
 $6 = HEAP32[$5>>2]|0;
 $7 = $2;
 $8 = $7 & 16777215;
 $9 = $3;
 _load_u16($4,$6,$8,$9);
 STACKTOP = sp;return;
}
function _set_address($hle,$so) {
 $hle = $hle|0;
 $so = $so|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $so;
 $2 = $0;
 $3 = $1;
 $4 = $0;
 $5 = ((($4)) + 4184|0);
 _alist_set_address($2,$3,$5,16);
 STACKTOP = sp;return;
}
function _ENVMIXER($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $address = 0, $flags = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $0;
 $7 = $2;
 $8 = (_get_address($6,$7)|0);
 $address = $8;
 $9 = $0;
 $10 = $flags;
 $11 = $10&255;
 $12 = $11 & 1;
 $13 = ($12|0)!=(0);
 $14 = $flags;
 $15 = $14&255;
 $16 = $15 & 8;
 $17 = ($16|0)!=(0);
 $18 = $0;
 $19 = ((($18)) + 4184|0);
 $20 = ((($19)) + 66|0);
 $21 = HEAP16[$20>>1]|0;
 $22 = $0;
 $23 = ((($22)) + 4184|0);
 $24 = ((($23)) + 70|0);
 $25 = HEAP16[$24>>1]|0;
 $26 = $0;
 $27 = ((($26)) + 4184|0);
 $28 = ((($27)) + 72|0);
 $29 = HEAP16[$28>>1]|0;
 $30 = $0;
 $31 = ((($30)) + 4184|0);
 $32 = ((($31)) + 74|0);
 $33 = HEAP16[$32>>1]|0;
 $34 = $0;
 $35 = ((($34)) + 4184|0);
 $36 = ((($35)) + 64|0);
 $37 = HEAP16[$36>>1]|0;
 $38 = $0;
 $39 = ((($38)) + 4184|0);
 $40 = ((($39)) + 68|0);
 $41 = HEAP16[$40>>1]|0;
 $42 = $0;
 $43 = ((($42)) + 4184|0);
 $44 = ((($43)) + 76|0);
 $45 = HEAP16[$44>>1]|0;
 $46 = $0;
 $47 = ((($46)) + 4184|0);
 $48 = ((($47)) + 78|0);
 $49 = HEAP16[$48>>1]|0;
 $50 = $0;
 $51 = ((($50)) + 4184|0);
 $52 = ((($51)) + 80|0);
 $53 = $0;
 $54 = ((($53)) + 4184|0);
 $55 = ((($54)) + 84|0);
 $56 = $0;
 $57 = ((($56)) + 4184|0);
 $58 = ((($57)) + 88|0);
 $59 = $address;
 _alist_envmix_exp($9,$13,$17,$21,$25,$29,$33,$37,$41,$45,$49,$52,$55,$58,$59);
 STACKTOP = sp;return;
}
function _alist_process_naudio($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (192) | 0),16);
 STACKTOP = sp;return;
}
function _alist_process_naudio_bk($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (256) | 0),16);
 STACKTOP = sp;return;
}
function _alist_process_naudio_dk($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (320) | 0),16);
 STACKTOP = sp;return;
}
function _alist_process_naudio_mp3($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (384) | 0),16);
 STACKTOP = sp;return;
}
function _alist_process_naudio_cbfd($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (448) | 0),16);
 STACKTOP = sp;return;
}
function _UNKNOWN($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $acmd = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 24;
 $5 = $4&255;
 $acmd = $5;
 $6 = $0;
 $7 = ((($6)) + 84|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = $acmd;
 $10 = $9&255;
 $11 = $1;
 $12 = $2;
 HEAP32[$vararg_buffer>>2] = $10;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $11;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $12;
 _HleWarnMessage($8,(gb + (5221) | 0),$vararg_buffer);
 STACKTOP = sp;return;
}
function _ADPCM_3($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $count = 0, $dmemi = 0, $dmemo = 0, $flags = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 & 16777215;
 $address = $4;
 $5 = $2;
 $6 = $5 >>> 28;
 $7 = $6&255;
 $flags = $7;
 $8 = $2;
 $9 = $8 >>> 16;
 $10 = $9 & 4095;
 $11 = $10&65535;
 $count = $11;
 $12 = $2;
 $13 = $12 >>> 12;
 $14 = $13 & 15;
 $15 = (($14) + 1264)|0;
 $16 = $15&65535;
 $dmemi = $16;
 $17 = $2;
 $18 = $17 & 4095;
 $19 = (($18) + 1264)|0;
 $20 = $19&65535;
 $dmemo = $20;
 $21 = $0;
 $22 = $flags;
 $23 = $22&255;
 $24 = $23 & 1;
 $25 = ($24|0)!=(0);
 $26 = $flags;
 $27 = $26&255;
 $28 = $27 & 2;
 $29 = ($28|0)!=(0);
 $30 = $dmemo;
 $31 = $dmemi;
 $32 = $count;
 $33 = $32&65535;
 $34 = (($33) + 31)|0;
 $35 = $34 & -32;
 $36 = $35&65535;
 $37 = $0;
 $38 = ((($37)) + 4540|0);
 $39 = ((($38)) + 24|0);
 $40 = $0;
 $41 = ((($40)) + 4540|0);
 $42 = ((($41)) + 20|0);
 $43 = HEAP32[$42>>2]|0;
 $44 = $address;
 _alist_adpcm($21,$25,$29,0,$30,$31,$36,$39,$43,$44);
 STACKTOP = sp;return;
}
function _CLEARBUFF_4($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0, $dmem = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = (($3) + 1264)|0;
 $5 = $4&65535;
 $dmem = $5;
 $6 = $2;
 $7 = $6&65535;
 $count = $7;
 $8 = $0;
 $9 = $dmem;
 $10 = $count;
 _alist_clear($8,$9,$10);
 STACKTOP = sp;return;
}
function _ENVMIXER_5($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $flags = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $2;
 $7 = $6 & 16777215;
 $address = $7;
 $8 = $1;
 $9 = $8&65535;
 $10 = $0;
 $11 = ((($10)) + 4540|0);
 $12 = ((($11)) + 4|0);
 $13 = ((($12)) + 2|0);
 HEAP16[$13>>1] = $9;
 $14 = $0;
 $15 = $flags;
 $16 = $15&255;
 $17 = $16 & 1;
 $18 = ($17|0)!=(0);
 $19 = $0;
 $20 = ((($19)) + 4540|0);
 $21 = HEAP16[$20>>1]|0;
 $22 = $0;
 $23 = ((($22)) + 4540|0);
 $24 = ((($23)) + 2|0);
 $25 = HEAP16[$24>>1]|0;
 $26 = $0;
 $27 = ((($26)) + 4540|0);
 $28 = ((($27)) + 4|0);
 $29 = $0;
 $30 = ((($29)) + 4540|0);
 $31 = ((($30)) + 8|0);
 $32 = $0;
 $33 = ((($32)) + 4540|0);
 $34 = ((($33)) + 12|0);
 $35 = $address;
 _alist_envmix_lin($14,$18,2512,2880,3248,3616,1264,368,$21,$25,$28,$31,$34,$35);
 STACKTOP = sp;return;
}
function _LOADBUFF_6($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $count = 0, $dmem = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 12;
 $5 = $4 & 4095;
 $6 = $5&65535;
 $count = $6;
 $7 = $1;
 $8 = $7 & 4095;
 $9 = (($8) + 1264)|0;
 $10 = $9&65535;
 $dmem = $10;
 $11 = $2;
 $12 = $11 & 16777215;
 $address = $12;
 $13 = $0;
 $14 = $dmem;
 $15 = $address;
 $16 = $count;
 _alist_load($13,$14,$15,$16);
 STACKTOP = sp;return;
}
function _RESAMPLE_7($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $dmemi = 0, $dmemo = 0, $flags = 0, $pitch = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 & 16777215;
 $address = $4;
 $5 = $2;
 $6 = $5 >>> 30;
 $7 = $6&255;
 $flags = $7;
 $8 = $2;
 $9 = $8 >>> 14;
 $10 = $9&65535;
 $pitch = $10;
 $11 = $2;
 $12 = $11 >>> 2;
 $13 = $12 & 4095;
 $14 = (($13) + 1264)|0;
 $15 = $14&65535;
 $dmemi = $15;
 $16 = $2;
 $17 = $16 & 3;
 $18 = ($17|0)!=(0);
 $19 = $18 ? 1632 : 1264;
 $20 = $19&65535;
 $dmemo = $20;
 $21 = $0;
 $22 = $flags;
 $23 = $22&255;
 $24 = $23 & 1;
 $25 = ($24|0)!=(0);
 $26 = $dmemo;
 $27 = $dmemi;
 $28 = $pitch;
 $29 = $28&65535;
 $30 = $29 << 1;
 $31 = $address;
 _alist_resample($21,$25,0,$26,$27,368,$30,$31);
 STACKTOP = sp;return;
}
function _SAVEBUFF_8($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $count = 0, $dmem = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 12;
 $5 = $4 & 4095;
 $6 = $5&65535;
 $count = $6;
 $7 = $1;
 $8 = $7 & 4095;
 $9 = (($8) + 1264)|0;
 $10 = $9&65535;
 $dmem = $10;
 $11 = $2;
 $12 = $11 & 16777215;
 $address = $12;
 $13 = $0;
 $14 = $dmem;
 $15 = $address;
 $16 = $count;
 _alist_save($13,$14,$15,$16);
 STACKTOP = sp;return;
}
function _MP3($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $index = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 & 30;
 $index = $4;
 $5 = $2;
 $6 = $5 & 16777215;
 $address = $6;
 $7 = $0;
 $8 = $index;
 $9 = $address;
 _mp3_task($7,$8,$9);
 STACKTOP = sp;return;
}
function _MP3ADDY($UNUSED_hle,$UNUSED_w1,$UNUSED_w2) {
 $UNUSED_hle = $UNUSED_hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $UNUSED_w2 = $UNUSED_w2|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_hle;
 $1 = $UNUSED_w1;
 $2 = $UNUSED_w2;
 STACKTOP = sp;return;
}
function _SETVOL_9($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $flags = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $flags;
 $7 = $6&255;
 $8 = $7 & 4;
 $9 = ($8|0)!=(0);
 if (!($9)) {
  $36 = $1;
  $37 = $36&65535;
  $38 = $0;
  $39 = ((($38)) + 4540|0);
  $40 = ((($39)) + 8|0);
  HEAP16[$40>>1] = $37;
  $41 = $2;
  $42 = $0;
  $43 = ((($42)) + 4540|0);
  $44 = ((($43)) + 12|0);
  HEAP32[$44>>2] = $41;
  STACKTOP = sp;return;
 }
 $10 = $flags;
 $11 = $10&255;
 $12 = $11 & 2;
 $13 = ($12|0)!=(0);
 $14 = $1;
 $15 = $14&65535;
 $16 = $0;
 $17 = ((($16)) + 4540|0);
 if ($13) {
  $18 = ((($17)) + 4|0);
  HEAP16[$18>>1] = $15;
  $19 = $2;
  $20 = $19 >>> 16;
  $21 = $20&65535;
  $22 = $0;
  $23 = ((($22)) + 4540|0);
  HEAP16[$23>>1] = $21;
  $24 = $2;
  $25 = $24&65535;
  $26 = $0;
  $27 = ((($26)) + 4540|0);
  $28 = ((($27)) + 2|0);
  HEAP16[$28>>1] = $25;
  STACKTOP = sp;return;
 } else {
  $29 = ((($17)) + 8|0);
  $30 = ((($29)) + 2|0);
  HEAP16[$30>>1] = $15;
  $31 = $2;
  $32 = $0;
  $33 = ((($32)) + 4540|0);
  $34 = ((($33)) + 12|0);
  $35 = ((($34)) + 4|0);
  HEAP32[$35>>2] = $31;
  STACKTOP = sp;return;
 }
}
function _DMEMMOVE_10($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $count = 0, $dmemi = 0, $dmemo = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = (($3) + 1264)|0;
 $5 = $4&65535;
 $dmemi = $5;
 $6 = $2;
 $7 = $6 >>> 16;
 $8 = (($7) + 1264)|0;
 $9 = $8&65535;
 $dmemo = $9;
 $10 = $2;
 $11 = $10&65535;
 $count = $11;
 $12 = $0;
 $13 = $dmemo;
 $14 = $dmemi;
 $15 = $count;
 $16 = $15&65535;
 $17 = (($16) + 3)|0;
 $18 = $17 & -4;
 $19 = $18&65535;
 _alist_move($12,$13,$14,$19);
 STACKTOP = sp;return;
}
function _LOADADPCM_11($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $count = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $count = $4;
 $5 = $2;
 $6 = $5 & 16777215;
 $address = $6;
 $7 = $0;
 $8 = $0;
 $9 = ((($8)) + 4540|0);
 $10 = ((($9)) + 24|0);
 $11 = $address;
 $12 = $count;
 $13 = $12&65535;
 $14 = $13 >> 1;
 _dram_load_u16_15($7,$10,$11,$14);
 STACKTOP = sp;return;
}
function _MIXER_12($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $dmemi = 0, $dmemo = 0, $gain = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $gain = $4;
 $5 = $2;
 $6 = $5 >>> 16;
 $7 = (($6) + 1264)|0;
 $8 = $7&65535;
 $dmemi = $8;
 $9 = $2;
 $10 = (($9) + 1264)|0;
 $11 = $10&65535;
 $dmemo = $11;
 $12 = $0;
 $13 = $dmemo;
 $14 = $dmemi;
 $15 = $gain;
 _alist_mix($12,$13,$14,368,$15);
 STACKTOP = sp;return;
}
function _INTERLEAVE_13($hle,$UNUSED_w1,$UNUSED_w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $UNUSED_w2 = $UNUSED_w2|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $UNUSED_w2;
 $3 = $0;
 _alist_interleave($3,1264,2512,2880,368);
 STACKTOP = sp;return;
}
function _NAUDIO_14($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $dmem = 0, $flags = 0, $gain = 0, $select_main = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $1;
 $7 = $6&65535;
 $gain = $7;
 $8 = $2;
 $9 = $8 >>> 24;
 $10 = $9&255;
 $select_main = $10;
 $11 = $2;
 $12 = $11 & 16777215;
 $address = $12;
 $13 = $select_main;
 $14 = $13&255;
 $15 = ($14|0)==(0);
 $16 = $15 ? 1264 : 1632;
 $17 = $16&65535;
 $dmem = $17;
 $18 = $0;
 $19 = ((($18)) + 4540|0);
 $20 = ((($19)) + 24|0);
 $21 = HEAP16[$20>>1]|0;
 $22 = $21 << 16 >> 16;
 $23 = ($22|0)==(0);
 if ($23) {
  $24 = $0;
  $25 = ((($24)) + 4540|0);
  $26 = ((($25)) + 24|0);
  $27 = ((($26)) + 2|0);
  $28 = HEAP16[$27>>1]|0;
  $29 = $28 << 16 >> 16;
  $30 = ($29|0)==(0);
  if ($30) {
   $31 = $0;
   $32 = $flags;
   $33 = $32&255;
   $34 = $33 & 1;
   $35 = ($34|0)!=(0);
   $36 = $dmem;
   $37 = $dmem;
   $38 = $gain;
   $39 = $0;
   $40 = ((($39)) + 4540|0);
   $41 = ((($40)) + 24|0);
   $42 = $address;
   _alist_polef($31,$35,$36,$37,368,$38,$41,$42);
   STACKTOP = sp;return;
  }
 }
 $43 = $0;
 $44 = $flags;
 $45 = $44&255;
 $46 = $45 & 1;
 $47 = ($46|0)!=(0);
 $48 = $dmem;
 $49 = $dmem;
 $50 = $0;
 $51 = ((($50)) + 4540|0);
 $52 = ((($51)) + 24|0);
 $53 = $address;
 _alist_iirf($43,$47,$48,$49,368,$52,$53);
 STACKTOP = sp;return;
}
function _SETLOOP_14($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $2;
 $4 = $3 & 16777215;
 $5 = $0;
 $6 = ((($5)) + 4540|0);
 $7 = ((($6)) + 20|0);
 HEAP32[$7>>2] = $4;
 STACKTOP = sp;return;
}
function _dram_load_u16_15($hle,$dst,$address,$count) {
 $hle = $hle|0;
 $dst = $dst|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $0;
 $6 = HEAP32[$5>>2]|0;
 $7 = $2;
 $8 = $7 & 16777215;
 $9 = $3;
 _load_u16($4,$6,$8,$9);
 STACKTOP = sp;return;
}
function _SPNOOP_17($UNUSED_hle,$UNUSED_w1,$UNUSED_w2) {
 $UNUSED_hle = $UNUSED_hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $UNUSED_w2 = $UNUSED_w2|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_hle;
 $1 = $UNUSED_w1;
 $2 = $UNUSED_w2;
 STACKTOP = sp;return;
}
function _NAUDIO_02B0($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $0;
 $4 = ((($3)) + 4540|0);
 $5 = ((($4)) + 12|0);
 $6 = ((($5)) + 4|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = $7 & -65536;
 HEAP32[$6>>2] = $8;
 $9 = $2;
 $10 = $9 & 65535;
 $11 = $0;
 $12 = ((($11)) + 4540|0);
 $13 = ((($12)) + 12|0);
 $14 = ((($13)) + 4|0);
 $15 = HEAP32[$14>>2]|0;
 $16 = $15 | $10;
 HEAP32[$14>>2] = $16;
 STACKTOP = sp;return;
}
function _NAUDIO_0000($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $0;
 $4 = $1;
 $5 = $2;
 _UNKNOWN($3,$4,$5);
 STACKTOP = sp;return;
}
function _alist_process_nead_mk($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (512) | 0),32);
 STACKTOP = sp;return;
}
function _alist_process_nead_sf($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (640) | 0),32);
 STACKTOP = sp;return;
}
function _alist_process_nead_sfj($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (768) | 0),32);
 STACKTOP = sp;return;
}
function _alist_process_nead_fz($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (896) | 0),32);
 STACKTOP = sp;return;
}
function _alist_process_nead_wrjb($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (1024) | 0),32);
 STACKTOP = sp;return;
}
function _alist_process_nead_ys($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (1152) | 0),24);
 STACKTOP = sp;return;
}
function _alist_process_nead_1080($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (1248) | 0),24);
 STACKTOP = sp;return;
}
function _alist_process_nead_oot($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (1344) | 0),24);
 STACKTOP = sp;return;
}
function _alist_process_nead_mm($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (1440) | 0),24);
 STACKTOP = sp;return;
}
function _alist_process_nead_mmb($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (1536) | 0),24);
 STACKTOP = sp;return;
}
function _alist_process_nead_ac($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _alist_process($1,(gb + (1632) | 0),24);
 STACKTOP = sp;return;
}
function _UNKNOWN_18($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $acmd = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 24;
 $5 = $4&255;
 $acmd = $5;
 $6 = $0;
 $7 = ((($6)) + 84|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = $acmd;
 $10 = $9&255;
 $11 = $1;
 $12 = $2;
 HEAP32[$vararg_buffer>>2] = $10;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $11;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $12;
 _HleWarnMessage($8,(gb + (5221) | 0),$vararg_buffer);
 STACKTOP = sp;return;
}
function _ADPCM_19($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $flags = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $2;
 $7 = $6 & 16777215;
 $address = $7;
 $8 = $0;
 $9 = $flags;
 $10 = $9&255;
 $11 = $10 & 1;
 $12 = ($11|0)!=(0);
 $13 = $flags;
 $14 = $13&255;
 $15 = $14 & 2;
 $16 = ($15|0)!=(0);
 $17 = $flags;
 $18 = $17&255;
 $19 = $18 & 4;
 $20 = ($19|0)!=(0);
 $21 = $0;
 $22 = ((($21)) + 4820|0);
 $23 = ((($22)) + 2|0);
 $24 = HEAP16[$23>>1]|0;
 $25 = $0;
 $26 = ((($25)) + 4820|0);
 $27 = HEAP16[$26>>1]|0;
 $28 = $0;
 $29 = ((($28)) + 4820|0);
 $30 = ((($29)) + 4|0);
 $31 = HEAP16[$30>>1]|0;
 $32 = $31&65535;
 $33 = (($32) + 31)|0;
 $34 = $33 & -32;
 $35 = $34&65535;
 $36 = $0;
 $37 = ((($36)) + 4820|0);
 $38 = ((($37)) + 24|0);
 $39 = $0;
 $40 = ((($39)) + 4820|0);
 $41 = ((($40)) + 20|0);
 $42 = HEAP32[$41>>2]|0;
 $43 = $address;
 _alist_adpcm($8,$12,$16,$20,$24,$27,$35,$38,$42,$43);
 STACKTOP = sp;return;
}
function _CLEARBUFF_20($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0, $dmem = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $dmem = $4;
 $5 = $2;
 $6 = $5&65535;
 $count = $6;
 $7 = $count;
 $8 = $7&65535;
 $9 = ($8|0)==(0);
 if ($9) {
  STACKTOP = sp;return;
 }
 $10 = $0;
 $11 = $dmem;
 $12 = $count;
 _alist_clear($10,$11,$12);
 STACKTOP = sp;return;
}
function _SPNOOP_21($UNUSED_hle,$UNUSED_w1,$UNUSED_w2) {
 $UNUSED_hle = $UNUSED_hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $UNUSED_w2 = $UNUSED_w2|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_hle;
 $1 = $UNUSED_w1;
 $2 = $UNUSED_w2;
 STACKTOP = sp;return;
}
function _ADDMIXER($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0, $dmemi = 0, $dmemo = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 12;
 $5 = $4 & 4080;
 $6 = $5&65535;
 $count = $6;
 $7 = $2;
 $8 = $7 >>> 16;
 $9 = $8&65535;
 $dmemi = $9;
 $10 = $2;
 $11 = $10&65535;
 $dmemo = $11;
 $12 = $0;
 $13 = $dmemo;
 $14 = $dmemi;
 $15 = $count;
 _alist_add($12,$13,$14,$15);
 STACKTOP = sp;return;
}
function _RESAMPLE_22($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $flags = 0, $pitch = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $1;
 $7 = $6&65535;
 $pitch = $7;
 $8 = $2;
 $9 = $8 & 16777215;
 $address = $9;
 $10 = $0;
 $11 = $flags;
 $12 = $11&255;
 $13 = $12 & 1;
 $14 = ($13|0)!=(0);
 $15 = $0;
 $16 = ((($15)) + 4820|0);
 $17 = ((($16)) + 2|0);
 $18 = HEAP16[$17>>1]|0;
 $19 = $0;
 $20 = ((($19)) + 4820|0);
 $21 = HEAP16[$20>>1]|0;
 $22 = $0;
 $23 = ((($22)) + 4820|0);
 $24 = ((($23)) + 4|0);
 $25 = HEAP16[$24>>1]|0;
 $26 = $25&65535;
 $27 = (($26) + 15)|0;
 $28 = $27 & -16;
 $29 = $28&65535;
 $30 = $pitch;
 $31 = $30&65535;
 $32 = $31 << 1;
 $33 = $address;
 _alist_resample($10,$14,0,$18,$21,$29,$32,$33);
 STACKTOP = sp;return;
}
function _RESAMPLE_ZOH($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $pitch = 0, $pitch_accu = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $pitch = $4;
 $5 = $2;
 $6 = $5&65535;
 $pitch_accu = $6;
 $7 = $0;
 $8 = $0;
 $9 = ((($8)) + 4820|0);
 $10 = ((($9)) + 2|0);
 $11 = HEAP16[$10>>1]|0;
 $12 = $0;
 $13 = ((($12)) + 4820|0);
 $14 = HEAP16[$13>>1]|0;
 $15 = $0;
 $16 = ((($15)) + 4820|0);
 $17 = ((($16)) + 4|0);
 $18 = HEAP16[$17>>1]|0;
 $19 = $pitch;
 $20 = $19&65535;
 $21 = $20 << 1;
 $22 = $pitch_accu;
 $23 = $22&65535;
 _alist_resample_zoh($7,$11,$14,$18,$21,$23);
 STACKTOP = sp;return;
}
function _FILTER($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $dmem = 0, $flags = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $2;
 $7 = $6 & 16777215;
 $address = $7;
 $8 = $flags;
 $9 = $8&255;
 $10 = ($9|0)>(1);
 $11 = $1;
 $12 = $11&65535;
 if ($10) {
  $13 = $0;
  $14 = ((($13)) + 4820|0);
  $15 = ((($14)) + 280|0);
  HEAP16[$15>>1] = $12;
  $16 = $address;
  $17 = $0;
  $18 = ((($17)) + 4820|0);
  $19 = ((($18)) + 284|0);
  HEAP32[$19>>2] = $16;
  STACKTOP = sp;return;
 } else {
  $dmem = $12;
  $20 = $address;
  $21 = (($20) + 16)|0;
  $22 = $0;
  $23 = ((($22)) + 4820|0);
  $24 = ((($23)) + 284|0);
  $25 = ((($24)) + 4|0);
  HEAP32[$25>>2] = $21;
  $26 = $0;
  $27 = $dmem;
  $28 = $0;
  $29 = ((($28)) + 4820|0);
  $30 = ((($29)) + 280|0);
  $31 = HEAP16[$30>>1]|0;
  $32 = $address;
  $33 = $0;
  $34 = ((($33)) + 4820|0);
  $35 = ((($34)) + 284|0);
  _alist_filter($26,$27,$31,$32,$35);
  STACKTOP = sp;return;
 }
}
function _SETBUFF_23($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $5 = $0;
 $6 = ((($5)) + 4820|0);
 HEAP16[$6>>1] = $4;
 $7 = $2;
 $8 = $7 >>> 16;
 $9 = $8&65535;
 $10 = $0;
 $11 = ((($10)) + 4820|0);
 $12 = ((($11)) + 2|0);
 HEAP16[$12>>1] = $9;
 $13 = $2;
 $14 = $13&65535;
 $15 = $0;
 $16 = ((($15)) + 4820|0);
 $17 = ((($16)) + 4|0);
 HEAP16[$17>>1] = $14;
 STACKTOP = sp;return;
}
function _DUPLICATE($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0, $dmemi = 0, $dmemo = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $count = $5;
 $6 = $1;
 $7 = $6&65535;
 $dmemi = $7;
 $8 = $2;
 $9 = $8 >>> 16;
 $10 = $9&65535;
 $dmemo = $10;
 $11 = $0;
 $12 = $dmemo;
 $13 = $dmemi;
 $14 = $count;
 _alist_repeat64($11,$12,$13,$14);
 STACKTOP = sp;return;
}
function _DMEMMOVE_24($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $count = 0, $dmemi = 0, $dmemo = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $dmemi = $4;
 $5 = $2;
 $6 = $5 >>> 16;
 $7 = $6&65535;
 $dmemo = $7;
 $8 = $2;
 $9 = $8&65535;
 $count = $9;
 $10 = $count;
 $11 = $10&65535;
 $12 = ($11|0)==(0);
 if ($12) {
  STACKTOP = sp;return;
 }
 $13 = $0;
 $14 = $dmemo;
 $15 = $dmemi;
 $16 = $count;
 $17 = $16&65535;
 $18 = (($17) + 3)|0;
 $19 = $18 & -4;
 $20 = $19&65535;
 _alist_move($13,$14,$15,$20);
 STACKTOP = sp;return;
}
function _LOADADPCM_25($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $count = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $count = $4;
 $5 = $2;
 $6 = $5 & 16777215;
 $address = $6;
 $7 = $0;
 $8 = $0;
 $9 = ((($8)) + 4820|0);
 $10 = ((($9)) + 24|0);
 $11 = $address;
 $12 = $count;
 $13 = $12&65535;
 $14 = $13 >> 1;
 _dram_load_u16_32($7,$10,$11,$14);
 STACKTOP = sp;return;
}
function _MIXER_26($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0;
 var $dmemi = 0, $dmemo = 0, $gain = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 12;
 $5 = $4 & 4080;
 $6 = $5&65535;
 $count = $6;
 $7 = $1;
 $8 = $7&65535;
 $gain = $8;
 $9 = $2;
 $10 = $9 >>> 16;
 $11 = $10&65535;
 $dmemi = $11;
 $12 = $2;
 $13 = $12&65535;
 $dmemo = $13;
 $14 = $0;
 $15 = $dmemo;
 $16 = $dmemi;
 $17 = $count;
 $18 = $gain;
 _alist_mix($14,$15,$16,$17,$18);
 STACKTOP = sp;return;
}
function _INTERLEAVE_27($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0;
 var $dmemo = 0, $left = 0, $right = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 12;
 $5 = $4 & 4080;
 $6 = $5&65535;
 $count = $6;
 $7 = $1;
 $8 = $7&65535;
 $dmemo = $8;
 $9 = $2;
 $10 = $9 >>> 16;
 $11 = $10&65535;
 $left = $11;
 $12 = $2;
 $13 = $12&65535;
 $right = $13;
 $14 = $0;
 $15 = $dmemo;
 $16 = $left;
 $17 = $right;
 $18 = $count;
 _alist_interleave($14,$15,$16,$17,$18);
 STACKTOP = sp;return;
}
function _HILOGAIN($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0, $dmem = 0, $gain = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $gain = $5;
 $6 = $1;
 $7 = $6&65535;
 $count = $7;
 $8 = $2;
 $9 = $8 >>> 16;
 $10 = $9&65535;
 $dmem = $10;
 $11 = $0;
 $12 = $dmem;
 $13 = $count;
 $14 = $gain;
 _alist_multQ44($11,$12,$13,$14);
 STACKTOP = sp;return;
}
function _SETLOOP_28($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $2;
 $4 = $3 & 16777215;
 $5 = $0;
 $6 = ((($5)) + 4820|0);
 $7 = ((($6)) + 20|0);
 HEAP32[$7>>2] = $4;
 STACKTOP = sp;return;
}
function _NEAD_16($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $block_size = 0, $count = 0;
 var $dmemi = 0, $dmemo = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $count = $5;
 $6 = $1;
 $7 = $6&65535;
 $dmemi = $7;
 $8 = $2;
 $9 = $8 >>> 16;
 $10 = $9&65535;
 $dmemo = $10;
 $11 = $2;
 $12 = $11&65535;
 $block_size = $12;
 $13 = $0;
 $14 = $dmemo;
 $15 = $dmemi;
 $16 = $block_size;
 $17 = $count;
 _alist_copy_blocks($13,$14,$15,$16,$17);
 STACKTOP = sp;return;
}
function _INTERL($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0, $dmemi = 0, $dmemo = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3&65535;
 $count = $4;
 $5 = $2;
 $6 = $5 >>> 16;
 $7 = $6&65535;
 $dmemi = $7;
 $8 = $2;
 $9 = $8&65535;
 $dmemo = $9;
 $10 = $0;
 $11 = $dmemo;
 $12 = $dmemi;
 $13 = $count;
 _alist_copy_every_other_sample($10,$11,$12,$13);
 STACKTOP = sp;return;
}
function _ENVSETUP1($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 8;
 $5 = $4 & 65280;
 $6 = $5&65535;
 $7 = $0;
 $8 = ((($7)) + 4820|0);
 $9 = ((($8)) + 6|0);
 $10 = ((($9)) + 4|0);
 HEAP16[$10>>1] = $6;
 $11 = $1;
 $12 = $11&65535;
 $13 = $0;
 $14 = ((($13)) + 4820|0);
 $15 = ((($14)) + 12|0);
 $16 = ((($15)) + 4|0);
 HEAP16[$16>>1] = $12;
 $17 = $2;
 $18 = $17 >>> 16;
 $19 = $18&65535;
 $20 = $0;
 $21 = ((($20)) + 4820|0);
 $22 = ((($21)) + 12|0);
 HEAP16[$22>>1] = $19;
 $23 = $2;
 $24 = $23&65535;
 $25 = $0;
 $26 = ((($25)) + 4820|0);
 $27 = ((($26)) + 12|0);
 $28 = ((($27)) + 2|0);
 HEAP16[$28>>1] = $24;
 STACKTOP = sp;return;
}
function _ENVMIXER_29($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $8 = 0, $9 = 0, $count = 0, $dmem_dl = 0;
 var $dmem_dr = 0, $dmem_wl = 0, $dmem_wr = 0, $dmemi = 0, $swap_wet_LR = 0, $xors = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $xors = sp + 24|0;
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 12;
 $5 = $4 & 4080;
 $6 = $5&65535;
 $dmemi = $6;
 $7 = $1;
 $8 = $7 >>> 8;
 $9 = $8 & 255;
 $10 = $9&255;
 $count = $10;
 $11 = $1;
 $12 = $11 >>> 4;
 $13 = $12 & 1;
 $14 = ($13|0)!=(0);
 $15 = $14&1;
 $swap_wet_LR = $15;
 $16 = $2;
 $17 = $16 >>> 20;
 $18 = $17 & 4080;
 $19 = $18&65535;
 $dmem_dl = $19;
 $20 = $2;
 $21 = $20 >>> 12;
 $22 = $21 & 4080;
 $23 = $22&65535;
 $dmem_dr = $23;
 $24 = $2;
 $25 = $24 >>> 4;
 $26 = $25 & 4080;
 $27 = $26&65535;
 $dmem_wl = $27;
 $28 = $2;
 $29 = $28 << 4;
 $30 = $29 & 4080;
 $31 = $30&65535;
 $dmem_wr = $31;
 $32 = $1;
 $33 = $32 & 8;
 $34 = $33 >>> 1;
 $35 = $34&65535;
 $36 = $35 << 16 >> 16;
 $37 = (0 - ($36))|0;
 $38 = $37&65535;
 $39 = ((($xors)) + 4|0);
 HEAP16[$39>>1] = $38;
 $40 = $1;
 $41 = $40 & 4;
 $42 = $41 >>> 1;
 $43 = $42&65535;
 $44 = $43 << 16 >> 16;
 $45 = (0 - ($44))|0;
 $46 = $45&65535;
 $47 = ((($xors)) + 6|0);
 HEAP16[$47>>1] = $46;
 $48 = $1;
 $49 = $48 & 2;
 $50 = $49 >>> 1;
 $51 = $50&65535;
 $52 = $51 << 16 >> 16;
 $53 = (0 - ($52))|0;
 $54 = $53&65535;
 HEAP16[$xors>>1] = $54;
 $55 = $1;
 $56 = $55 & 1;
 $57 = $56&65535;
 $58 = $57 << 16 >> 16;
 $59 = (0 - ($58))|0;
 $60 = $59&65535;
 $61 = ((($xors)) + 2|0);
 HEAP16[$61>>1] = $60;
 $62 = $0;
 $63 = $swap_wet_LR;
 $64 = $63&1;
 $65 = $dmem_dl;
 $66 = $dmem_dr;
 $67 = $dmem_wl;
 $68 = $dmem_wr;
 $69 = $dmemi;
 $70 = $count;
 $71 = $70&255;
 $72 = $0;
 $73 = ((($72)) + 4820|0);
 $74 = ((($73)) + 6|0);
 $75 = $0;
 $76 = ((($75)) + 4820|0);
 $77 = ((($76)) + 12|0);
 _alist_envmix_nead($62,$64,$65,$66,$67,$68,$69,$71,$74,$77,$xors);
 STACKTOP = sp;return;
}
function _LOADBUFF_30($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $count = 0, $dmem = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 12;
 $5 = $4 & 4095;
 $6 = $5&65535;
 $count = $6;
 $7 = $1;
 $8 = $7 & 4095;
 $9 = $8&65535;
 $dmem = $9;
 $10 = $2;
 $11 = $10 & 16777215;
 $address = $11;
 $12 = $0;
 $13 = $dmem;
 $14 = $address;
 $15 = $count;
 _alist_load($12,$13,$14,$15);
 STACKTOP = sp;return;
}
function _SAVEBUFF_31($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $count = 0, $dmem = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 12;
 $5 = $4 & 4095;
 $6 = $5&65535;
 $count = $6;
 $7 = $1;
 $8 = $7 & 4095;
 $9 = $8&65535;
 $dmem = $9;
 $10 = $2;
 $11 = $10 & 16777215;
 $address = $11;
 $12 = $0;
 $13 = $dmem;
 $14 = $address;
 $15 = $count;
 _alist_save($12,$13,$14,$15);
 STACKTOP = sp;return;
}
function _ENVSETUP2($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $2;
 $4 = $3 >>> 16;
 $5 = $4&65535;
 $6 = $0;
 $7 = ((($6)) + 4820|0);
 $8 = ((($7)) + 6|0);
 HEAP16[$8>>1] = $5;
 $9 = $2;
 $10 = $9&65535;
 $11 = $0;
 $12 = ((($11)) + 4820|0);
 $13 = ((($12)) + 6|0);
 $14 = ((($13)) + 2|0);
 HEAP16[$14>>1] = $10;
 STACKTOP = sp;return;
}
function _dram_load_u16_32($hle,$dst,$address,$count) {
 $hle = $hle|0;
 $dst = $dst|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $0;
 $6 = HEAP32[$5>>2]|0;
 $7 = $2;
 $8 = $7 & 16777215;
 $9 = $3;
 _load_u16($4,$6,$8,$9);
 STACKTOP = sp;return;
}
function _INTERLEAVE_MK($hle,$UNUSED_w1,$w2) {
 $hle = $hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $left = 0, $right = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $UNUSED_w1;
 $2 = $w2;
 $3 = $2;
 $4 = $3 >>> 16;
 $5 = $4&65535;
 $left = $5;
 $6 = $2;
 $7 = $6&65535;
 $right = $7;
 $8 = $0;
 $9 = ((($8)) + 4820|0);
 $10 = ((($9)) + 4|0);
 $11 = HEAP16[$10>>1]|0;
 $12 = $11&65535;
 $13 = ($12|0)==(0);
 if ($13) {
  STACKTOP = sp;return;
 }
 $14 = $0;
 $15 = $0;
 $16 = ((($15)) + 4820|0);
 $17 = ((($16)) + 2|0);
 $18 = HEAP16[$17>>1]|0;
 $19 = $left;
 $20 = $right;
 $21 = $0;
 $22 = ((($21)) + 4820|0);
 $23 = ((($22)) + 4|0);
 $24 = HEAP16[$23>>1]|0;
 _alist_interleave($14,$18,$19,$20,$24);
 STACKTOP = sp;return;
}
function _POLEF_34($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $flags = 0, $gain = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 16;
 $5 = $4&255;
 $flags = $5;
 $6 = $1;
 $7 = $6&65535;
 $gain = $7;
 $8 = $2;
 $9 = $8 & 16777215;
 $address = $9;
 $10 = $0;
 $11 = ((($10)) + 4820|0);
 $12 = ((($11)) + 4|0);
 $13 = HEAP16[$12>>1]|0;
 $14 = $13&65535;
 $15 = ($14|0)==(0);
 if ($15) {
  STACKTOP = sp;return;
 }
 $16 = $0;
 $17 = $flags;
 $18 = $17&255;
 $19 = $18 & 1;
 $20 = ($19|0)!=(0);
 $21 = $0;
 $22 = ((($21)) + 4820|0);
 $23 = ((($22)) + 2|0);
 $24 = HEAP16[$23>>1]|0;
 $25 = $0;
 $26 = ((($25)) + 4820|0);
 $27 = HEAP16[$26>>1]|0;
 $28 = $0;
 $29 = ((($28)) + 4820|0);
 $30 = ((($29)) + 4|0);
 $31 = HEAP16[$30>>1]|0;
 $32 = $gain;
 $33 = $0;
 $34 = ((($33)) + 4820|0);
 $35 = ((($34)) + 24|0);
 $36 = $address;
 _alist_polef($16,$20,$24,$27,$31,$32,$35,$36);
 STACKTOP = sp;return;
}
function _SEGMENT_35($UNUSED_hle,$UNUSED_w1,$UNUSED_w2) {
 $UNUSED_hle = $UNUSED_hle|0;
 $UNUSED_w1 = $UNUSED_w1|0;
 $UNUSED_w2 = $UNUSED_w2|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_hle;
 $1 = $UNUSED_w1;
 $2 = $UNUSED_w2;
 STACKTOP = sp;return;
}
function _ENVSETUP1_MK($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 8;
 $5 = $4 & 65280;
 $6 = $5&65535;
 $7 = $0;
 $8 = ((($7)) + 4820|0);
 $9 = ((($8)) + 6|0);
 $10 = ((($9)) + 4|0);
 HEAP16[$10>>1] = $6;
 $11 = $0;
 $12 = ((($11)) + 4820|0);
 $13 = ((($12)) + 12|0);
 $14 = ((($13)) + 4|0);
 HEAP16[$14>>1] = 0;
 $15 = $2;
 $16 = $15 >>> 16;
 $17 = $16&65535;
 $18 = $0;
 $19 = ((($18)) + 4820|0);
 $20 = ((($19)) + 12|0);
 HEAP16[$20>>1] = $17;
 $21 = $2;
 $22 = $21&65535;
 $23 = $0;
 $24 = ((($23)) + 4820|0);
 $25 = ((($24)) + 12|0);
 $26 = ((($25)) + 2|0);
 HEAP16[$26>>1] = $22;
 STACKTOP = sp;return;
}
function _ENVMIXER_MK($hle,$w1,$w2) {
 $hle = $hle|0;
 $w1 = $w1|0;
 $w2 = $w2|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0, $dmem_dl = 0, $dmem_dr = 0;
 var $dmem_wl = 0, $dmem_wr = 0, $dmemi = 0, $xors = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $xors = sp + 24|0;
 $0 = $hle;
 $1 = $w1;
 $2 = $w2;
 $3 = $1;
 $4 = $3 >>> 12;
 $5 = $4 & 4080;
 $6 = $5&65535;
 $dmemi = $6;
 $7 = $1;
 $8 = $7 >>> 8;
 $9 = $8 & 255;
 $10 = $9&255;
 $count = $10;
 $11 = $2;
 $12 = $11 >>> 20;
 $13 = $12 & 4080;
 $14 = $13&65535;
 $dmem_dl = $14;
 $15 = $2;
 $16 = $15 >>> 12;
 $17 = $16 & 4080;
 $18 = $17&65535;
 $dmem_dr = $18;
 $19 = $2;
 $20 = $19 >>> 4;
 $21 = $20 & 4080;
 $22 = $21&65535;
 $dmem_wl = $22;
 $23 = $2;
 $24 = $23 << 4;
 $25 = $24 & 4080;
 $26 = $25&65535;
 $dmem_wr = $26;
 $27 = ((($xors)) + 4|0);
 HEAP16[$27>>1] = 0;
 $28 = ((($xors)) + 6|0);
 HEAP16[$28>>1] = 0;
 $29 = $1;
 $30 = $29 & 2;
 $31 = $30 >>> 1;
 $32 = $31&65535;
 $33 = $32 << 16 >> 16;
 $34 = (0 - ($33))|0;
 $35 = $34&65535;
 HEAP16[$xors>>1] = $35;
 $36 = $1;
 $37 = $36 & 1;
 $38 = $37&65535;
 $39 = $38 << 16 >> 16;
 $40 = (0 - ($39))|0;
 $41 = $40&65535;
 $42 = ((($xors)) + 2|0);
 HEAP16[$42>>1] = $41;
 $43 = $0;
 $44 = $dmem_dl;
 $45 = $dmem_dr;
 $46 = $dmem_wl;
 $47 = $dmem_wr;
 $48 = $dmemi;
 $49 = $count;
 $50 = $49&255;
 $51 = $0;
 $52 = ((($51)) + 4820|0);
 $53 = ((($52)) + 6|0);
 $54 = $0;
 $55 = ((($54)) + 4820|0);
 $56 = ((($55)) + 12|0);
 _alist_envmix_nead($43,0,$44,$45,$46,$47,$48,$50,$53,$56,$xors);
 STACKTOP = sp;return;
}
function _rdot($n,$x,$y) {
 $n = $n|0;
 $x = $x|0;
 $y = $y|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $accu = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $n;
 $1 = $x;
 $2 = $y;
 $accu = 0;
 $3 = $0;
 $4 = $2;
 $5 = (($4) + ($3<<1)|0);
 $2 = $5;
 while(1) {
  $6 = $0;
  $7 = ($6|0)!=(0);
  if (!($7)) {
   break;
  }
  $8 = $1;
  $9 = ((($8)) + 2|0);
  $1 = $9;
  $10 = HEAP16[$8>>1]|0;
  $11 = $10 << 16 >> 16;
  $12 = $2;
  $13 = ((($12)) + -2|0);
  $2 = $13;
  $14 = HEAP16[$13>>1]|0;
  $15 = $14 << 16 >> 16;
  $16 = Math_imul($11, $15)|0;
  $17 = $accu;
  $18 = (($17) + ($16))|0;
  $accu = $18;
  $19 = $0;
  $20 = (($19) + -1)|0;
  $0 = $20;
 }
 $21 = $accu;
 STACKTOP = sp;return ($21|0);
}
function _adpcm_compute_residuals($dst,$src,$cb_entry,$last_samples,$count) {
 $dst = $dst|0;
 $src = $src|0;
 $cb_entry = $cb_entry|0;
 $last_samples = $last_samples|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $accu = 0, $book1 = 0, $book2 = 0, $i = 0;
 var $l1 = 0, $l2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $2 = $cb_entry;
 $3 = $last_samples;
 $4 = $count;
 $5 = $2;
 $book1 = $5;
 $6 = $2;
 $7 = ((($6)) + 16|0);
 $book2 = $7;
 $8 = $3;
 $9 = HEAP16[$8>>1]|0;
 $l1 = $9;
 $10 = $3;
 $11 = ((($10)) + 2|0);
 $12 = HEAP16[$11>>1]|0;
 $l2 = $12;
 $13 = $4;
 $14 = ($13>>>0)<=(8);
 if (!($14)) {
  ___assert_fail(((gb + (5257) | 0)|0),((gb + (5268) | 0)|0),120,((gb + (5286) | 0)|0));
  // unreachable;
 }
 $i = 0;
 while(1) {
  $15 = $i;
  $16 = $4;
  $17 = ($15>>>0)<($16>>>0);
  if (!($17)) {
   break;
  }
  $18 = $i;
  $19 = $1;
  $20 = (($19) + ($18<<1)|0);
  $21 = HEAP16[$20>>1]|0;
  $22 = $21 << 16 >> 16;
  $23 = $22 << 11;
  $accu = $23;
  $24 = $i;
  $25 = $book1;
  $26 = (($25) + ($24<<1)|0);
  $27 = HEAP16[$26>>1]|0;
  $28 = $27 << 16 >> 16;
  $29 = $l1;
  $30 = $29 << 16 >> 16;
  $31 = Math_imul($28, $30)|0;
  $32 = $i;
  $33 = $book2;
  $34 = (($33) + ($32<<1)|0);
  $35 = HEAP16[$34>>1]|0;
  $36 = $35 << 16 >> 16;
  $37 = $l2;
  $38 = $37 << 16 >> 16;
  $39 = Math_imul($36, $38)|0;
  $40 = (($31) + ($39))|0;
  $41 = $i;
  $42 = $book2;
  $43 = $1;
  $44 = (_rdot($41,$42,$43)|0);
  $45 = (($40) + ($44))|0;
  $46 = $accu;
  $47 = (($46) + ($45))|0;
  $accu = $47;
  $48 = $accu;
  $49 = $48 >> 11;
  $50 = (_clamp_s16_44($49)|0);
  $51 = $i;
  $52 = $0;
  $53 = (($52) + ($51<<1)|0);
  HEAP16[$53>>1] = $50;
  $54 = $i;
  $55 = (($54) + 1)|0;
  $i = $55;
 }
 STACKTOP = sp;return;
}
function _clamp_s16_44($x) {
 $x = $x|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $0;
 $2 = ($1|0)<(-32768);
 $3 = $0;
 $4 = $2 ? -32768 : $3;
 $0 = $4;
 $5 = $0;
 $6 = ($5|0)>(32767);
 $7 = $0;
 $8 = $6 ? 32767 : $7;
 $0 = $8;
 $9 = $0;
 $10 = $9&65535;
 STACKTOP = sp;return ($10|0);
}
function _cicx105_ucode($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $dst = 0, $i = 0, $src = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 $2 = HEAP32[$1>>2]|0;
 $3 = ((($2)) + 3125744|0);
 $dst = $3;
 $4 = $0;
 $5 = ((($4)) + 8|0);
 $6 = HEAP32[$5>>2]|0;
 $7 = ((($6)) + 288|0);
 $src = $7;
 $8 = $0;
 $9 = ((($8)) + 8|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = ((($10)) + 288|0);
 $12 = $0;
 $13 = HEAP32[$12>>2]|0;
 $14 = ((($13)) + 488|0);
 _memcpy(($11|0),($14|0),496)|0;
 $i = 0;
 while(1) {
  $15 = $i;
  $16 = ($15>>>0)<(24);
  if (!($16)) {
   break;
  }
  $17 = $dst;
  $18 = $src;
  ;HEAP8[$17>>0]=HEAP8[$18>>0]|0;HEAP8[$17+1>>0]=HEAP8[$18+1>>0]|0;HEAP8[$17+2>>0]=HEAP8[$18+2>>0]|0;HEAP8[$17+3>>0]=HEAP8[$18+3>>0]|0;HEAP8[$17+4>>0]=HEAP8[$18+4>>0]|0;HEAP8[$17+5>>0]=HEAP8[$18+5>>0]|0;HEAP8[$17+6>>0]=HEAP8[$18+6>>0]|0;HEAP8[$17+7>>0]=HEAP8[$18+7>>0]|0;
  $19 = $dst;
  $20 = ((($19)) + 4080|0);
  $dst = $20;
  $21 = $src;
  $22 = ((($21)) + 8|0);
  $src = $22;
  $23 = $i;
  $24 = (($23) + 1)|0;
  $i = $24;
 }
 STACKTOP = sp;return;
}
function _hle_init($hle,$dram,$dmem,$imem,$mi_intr,$sp_mem_addr,$sp_dram_addr,$sp_rd_length,$sp_wr_length,$sp_status,$sp_dma_full,$sp_dma_busy,$sp_pc,$sp_semaphore,$dpc_start,$dpc_end,$dpc_current,$dpc_status,$dpc_clock,$dpc_bufbusy,$dpc_pipebusy,$dpc_tmem,$user_defined) {
 $hle = $hle|0;
 $dram = $dram|0;
 $dmem = $dmem|0;
 $imem = $imem|0;
 $mi_intr = $mi_intr|0;
 $sp_mem_addr = $sp_mem_addr|0;
 $sp_dram_addr = $sp_dram_addr|0;
 $sp_rd_length = $sp_rd_length|0;
 $sp_wr_length = $sp_wr_length|0;
 $sp_status = $sp_status|0;
 $sp_dma_full = $sp_dma_full|0;
 $sp_dma_busy = $sp_dma_busy|0;
 $sp_pc = $sp_pc|0;
 $sp_semaphore = $sp_semaphore|0;
 $dpc_start = $dpc_start|0;
 $dpc_end = $dpc_end|0;
 $dpc_current = $dpc_current|0;
 $dpc_status = $dpc_status|0;
 $dpc_clock = $dpc_clock|0;
 $dpc_bufbusy = $dpc_bufbusy|0;
 $dpc_pipebusy = $dpc_pipebusy|0;
 $dpc_tmem = $dpc_tmem|0;
 $user_defined = $user_defined|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dram;
 $2 = $dmem;
 $3 = $imem;
 $4 = $mi_intr;
 $5 = $sp_mem_addr;
 $6 = $sp_dram_addr;
 $7 = $sp_rd_length;
 $8 = $sp_wr_length;
 $9 = $sp_status;
 $10 = $sp_dma_full;
 $11 = $sp_dma_busy;
 $12 = $sp_pc;
 $13 = $sp_semaphore;
 $14 = $dpc_start;
 $15 = $dpc_end;
 $16 = $dpc_current;
 $17 = $dpc_status;
 $18 = $dpc_clock;
 $19 = $dpc_bufbusy;
 $20 = $dpc_pipebusy;
 $21 = $dpc_tmem;
 $22 = $user_defined;
 $23 = $1;
 $24 = $0;
 HEAP32[$24>>2] = $23;
 $25 = $2;
 $26 = $0;
 $27 = ((($26)) + 4|0);
 HEAP32[$27>>2] = $25;
 $28 = $3;
 $29 = $0;
 $30 = ((($29)) + 8|0);
 HEAP32[$30>>2] = $28;
 $31 = $4;
 $32 = $0;
 $33 = ((($32)) + 12|0);
 HEAP32[$33>>2] = $31;
 $34 = $5;
 $35 = $0;
 $36 = ((($35)) + 16|0);
 HEAP32[$36>>2] = $34;
 $37 = $6;
 $38 = $0;
 $39 = ((($38)) + 20|0);
 HEAP32[$39>>2] = $37;
 $40 = $7;
 $41 = $0;
 $42 = ((($41)) + 24|0);
 HEAP32[$42>>2] = $40;
 $43 = $8;
 $44 = $0;
 $45 = ((($44)) + 28|0);
 HEAP32[$45>>2] = $43;
 $46 = $9;
 $47 = $0;
 $48 = ((($47)) + 32|0);
 HEAP32[$48>>2] = $46;
 $49 = $10;
 $50 = $0;
 $51 = ((($50)) + 36|0);
 HEAP32[$51>>2] = $49;
 $52 = $11;
 $53 = $0;
 $54 = ((($53)) + 40|0);
 HEAP32[$54>>2] = $52;
 $55 = $12;
 $56 = $0;
 $57 = ((($56)) + 44|0);
 HEAP32[$57>>2] = $55;
 $58 = $13;
 $59 = $0;
 $60 = ((($59)) + 48|0);
 HEAP32[$60>>2] = $58;
 $61 = $14;
 $62 = $0;
 $63 = ((($62)) + 52|0);
 HEAP32[$63>>2] = $61;
 $64 = $15;
 $65 = $0;
 $66 = ((($65)) + 56|0);
 HEAP32[$66>>2] = $64;
 $67 = $16;
 $68 = $0;
 $69 = ((($68)) + 60|0);
 HEAP32[$69>>2] = $67;
 $70 = $17;
 $71 = $0;
 $72 = ((($71)) + 64|0);
 HEAP32[$72>>2] = $70;
 $73 = $18;
 $74 = $0;
 $75 = ((($74)) + 68|0);
 HEAP32[$75>>2] = $73;
 $76 = $19;
 $77 = $0;
 $78 = ((($77)) + 72|0);
 HEAP32[$78>>2] = $76;
 $79 = $20;
 $80 = $0;
 $81 = ((($80)) + 76|0);
 HEAP32[$81>>2] = $79;
 $82 = $21;
 $83 = $0;
 $84 = ((($83)) + 80|0);
 HEAP32[$84>>2] = $82;
 $85 = $22;
 $86 = $0;
 $87 = ((($86)) + 84|0);
 HEAP32[$87>>2] = $85;
 STACKTOP = sp;return;
}
function _hle_execute($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 $2 = (_is_task($1)|0);
 $3 = $0;
 if (!($2)) {
  _non_task_dispatching($3);
  $7 = $0;
  _rsp_break($7,0);
  STACKTOP = sp;return;
 }
 $4 = (_try_fast_task_dispatching($3)|0);
 if (!($4)) {
  $5 = $0;
  _normal_task_dispatching($5);
 }
 $6 = $0;
 _rsp_break($6,512);
 STACKTOP = sp;return;
}
function _is_task($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 $2 = (_dmem_u32_46($1,4044)|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($3>>>0)<=(4096);
 STACKTOP = sp;return ($4|0);
}
function _try_fast_task_dispatching($hle) {
 $hle = $hle|0;
 var $$expand_i1_val = 0, $$expand_i1_val2 = 0, $$expand_i1_val4 = 0, $$expand_i1_val6 = 0, $$pre_trunc = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = sp + 4|0;
 $1 = $hle;
 $2 = $1;
 $3 = (_dmem_u32_46($2,4032)|0);
 $4 = HEAP32[$3>>2]|0;
 switch ($4|0) {
 case 1:  {
  $5 = $1;
  _forward_gfx_task($5);
  $$expand_i1_val = 1;
  HEAP8[$0>>0] = $$expand_i1_val;
  break;
 }
 case 2:  {
  $6 = $1;
  $7 = (_try_fast_audio_dispatching($6)|0);
  if ($7) {
   $$expand_i1_val2 = 1;
   HEAP8[$0>>0] = $$expand_i1_val2;
  } else {
   label = 6;
  }
  break;
 }
 case 7:  {
  $8 = $1;
  $9 = ((($8)) + 84|0);
  $10 = HEAP32[$9>>2]|0;
  _HleShowCFB($10);
  $$expand_i1_val4 = 1;
  HEAP8[$0>>0] = $$expand_i1_val4;
  break;
 }
 default: {
  label = 6;
 }
 }
 if ((label|0) == 6) {
  $$expand_i1_val6 = 0;
  HEAP8[$0>>0] = $$expand_i1_val6;
 }
 $$pre_trunc = HEAP8[$0>>0]|0;
 $11 = $$pre_trunc&1;
 STACKTOP = sp;return ($11|0);
}
function _normal_task_dispatching($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $sum = 0, $switch$split22D = 0, $switch$split2D = 0, $switch$split52D = 0, $switch$split82D = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $0;
 $2 = $0;
 $3 = (_dmem_u32_46($2,4048)|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = (_dram_u32_47($1,$4)|0);
 $6 = $0;
 $7 = (_dmem_u32_46($6,4052)|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = ($8>>>0)<(3968);
 if ($9) {
  $10 = $0;
  $11 = (_dmem_u32_46($10,4052)|0);
  $12 = HEAP32[$11>>2]|0;
  $14 = $12;
 } else {
  $14 = 3968;
 }
 $13 = $14 >>> 1;
 $15 = (_sum_bytes($5,$13)|0);
 $sum = $15;
 $16 = $sum;
 $switch$split2D = ($16|0)<(161968);
 L4: do {
  if ($switch$split2D) {
   $switch$split22D = ($16|0)<(78046);
   if ($switch$split22D) {
    switch ($16|0) {
    case 632:  {
     break;
    }
    default: {
     label = 8;
     break L4;
    }
    }
    STACKTOP = sp;return;
   }
   $switch$split82D = ($16|0)<(135918);
   if ($switch$split82D) {
    switch ($16|0) {
    case 78046:  {
     label = 7;
     break L4;
     break;
    }
    default: {
     label = 8;
     break L4;
    }
    }
   }
   switch ($16|0) {
   case 135918:  {
    break;
   }
   default: {
    label = 8;
    break L4;
   }
   }
   $17 = $0;
   _forward_gfx_task($17);
   STACKTOP = sp;return;
  } else {
   $switch$split52D = ($16|0)<(182362);
   if ($switch$split52D) {
    switch ($16|0) {
    case 161968:  {
     label = 7;
     break L4;
     break;
    }
    default: {
     label = 8;
     break L4;
    }
    }
   }
   switch ($16|0) {
   case 182362:  {
    $18 = $0;
    _jpeg_decode_PS0($18);
    STACKTOP = sp;return;
    break;
   }
   case 182950:  {
    $19 = $0;
    _jpeg_decode_PS($19);
    STACKTOP = sp;return;
    break;
   }
   default: {
    label = 8;
    break L4;
   }
   }
  }
 } while(0);
 if ((label|0) == 7) {
  $20 = $0;
  _jpeg_decode_OB($20);
  STACKTOP = sp;return;
 }
 else if ((label|0) == 8) {
  $21 = $0;
  $22 = ((($21)) + 84|0);
  $23 = HEAP32[$22>>2]|0;
  $24 = $sum;
  $25 = $0;
  $26 = ((($25)) + 44|0);
  $27 = HEAP32[$26>>2]|0;
  $28 = HEAP32[$27>>2]|0;
  HEAP32[$vararg_buffer>>2] = $24;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = $28;
  _HleWarnMessage($23,(gb + (5342) | 0),$vararg_buffer);
  STACKTOP = sp;return;
 }
}
function _rsp_break($hle,$setbits) {
 $hle = $hle|0;
 $setbits = $setbits|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $setbits;
 $2 = $1;
 $3 = $2 | 2;
 $4 = $3 | 1;
 $5 = $0;
 $6 = ((($5)) + 32|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = HEAP32[$7>>2]|0;
 $9 = $8 | $4;
 HEAP32[$7>>2] = $9;
 $10 = $0;
 $11 = ((($10)) + 32|0);
 $12 = HEAP32[$11>>2]|0;
 $13 = HEAP32[$12>>2]|0;
 $14 = $13 & 64;
 $15 = ($14|0)!=(0);
 if (!($15)) {
  STACKTOP = sp;return;
 }
 $16 = $0;
 $17 = ((($16)) + 12|0);
 $18 = HEAP32[$17>>2]|0;
 $19 = HEAP32[$18>>2]|0;
 $20 = $19 | 1;
 HEAP32[$18>>2] = $20;
 $21 = $0;
 $22 = ((($21)) + 84|0);
 $23 = HEAP32[$22>>2]|0;
 _HleCheckInterrupts($23);
 STACKTOP = sp;return;
}
function _non_task_dispatching($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $sum = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $0;
 $2 = ((($1)) + 8|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = (_sum_bytes($3,44)|0);
 $sum = $4;
 $5 = $sum;
 $6 = ($5|0)==(2530);
 $7 = $0;
 if ($6) {
  _cicx105_ucode($7);
  STACKTOP = sp;return;
 } else {
  $8 = ((($7)) + 84|0);
  $9 = HEAP32[$8>>2]|0;
  $10 = $sum;
  $11 = $0;
  $12 = ((($11)) + 44|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = HEAP32[$13>>2]|0;
  HEAP32[$vararg_buffer>>2] = $10;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = $14;
  _HleWarnMessage($9,(gb + (5310) | 0),$vararg_buffer);
  STACKTOP = sp;return;
 }
}
function _sum_bytes($bytes,$size) {
 $bytes = $bytes|0;
 $size = $size|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $bytes_end = 0, $sum = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $bytes;
 $1 = $size;
 $sum = 0;
 $2 = $0;
 $3 = $1;
 $4 = (($2) + ($3)|0);
 $bytes_end = $4;
 while(1) {
  $5 = $0;
  $6 = $bytes_end;
  $7 = ($5|0)!=($6|0);
  if (!($7)) {
   break;
  }
  $8 = $0;
  $9 = ((($8)) + 1|0);
  $0 = $9;
  $10 = HEAP8[$8>>0]|0;
  $11 = $10&255;
  $12 = $sum;
  $13 = (($12) + ($11))|0;
  $sum = $13;
 }
 $14 = $sum;
 STACKTOP = sp;return ($14|0);
}
function _dmem_u32_46($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = ((($2)) + 4|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = $1;
 $6 = $5&65535;
 $7 = $6 & 4095;
 $8 = (_u32_49($4,$7)|0);
 STACKTOP = sp;return ($8|0);
}
function _dram_u32_47($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = HEAP32[$2>>2]|0;
 $4 = $1;
 $5 = $4 & 16777215;
 $6 = (_u32_49($3,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _forward_gfx_task($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 $2 = ((($1)) + 84|0);
 $3 = HEAP32[$2>>2]|0;
 _HleProcessDlistList($3);
 STACKTOP = sp;return;
}
function _u32_49($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $1;
 $3 = $2 & 3;
 $4 = ($3|0)==(0);
 if ($4) {
  $5 = $0;
  $6 = $1;
  $7 = (($5) + ($6)|0);
  STACKTOP = sp;return ($7|0);
 } else {
  ___assert_fail(((gb + (6645) | 0)|0),((gb + (6622) | 0)|0),80,((gb + (6664) | 0)|0));
  // unreachable;
 }
 return (0)|0;
}
function _try_fast_audio_dispatching($hle) {
 $hle = $hle|0;
 var $$expand_i1_val = 0, $$expand_i1_val10 = 0, $$expand_i1_val12 = 0, $$expand_i1_val14 = 0, $$expand_i1_val16 = 0, $$expand_i1_val18 = 0, $$expand_i1_val20 = 0, $$expand_i1_val22 = 0, $$expand_i1_val24 = 0, $$expand_i1_val26 = 0, $$expand_i1_val28 = 0, $$expand_i1_val30 = 0, $$expand_i1_val32 = 0, $$expand_i1_val34 = 0, $$expand_i1_val36 = 0, $$expand_i1_val38 = 0, $$expand_i1_val40 = 0, $$expand_i1_val42 = 0, $$expand_i1_val44 = 0, $$expand_i1_val46 = 0;
 var $$expand_i1_val48 = 0, $$expand_i1_val8 = 0, $$pre_trunc = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0;
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $7 = 0, $8 = 0, $9 = 0, $switch$split2D = 0, $switch$split512D = 0, $switch$split542D = 0, $switch$split572D = 0, $switch$split602D = 0, $switch$split632D = 0, $switch$split662D = 0, $switch$split692D = 0, $switch$split722D = 0, $switch$split752D = 0, $switch$split782D = 0, $switch$split812D = 0, $switch$split842D = 0;
 var $switch$split872D = 0, $switch$split902D = 0, $switch$split932D = 0, $ucode_data = 0, $v = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer4 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $0 = sp + 32|0;
 $1 = $hle;
 $2 = $1;
 $3 = (_dmem_u32_46($2,4056)|0);
 $4 = HEAP32[$3>>2]|0;
 $ucode_data = $4;
 $5 = $1;
 $6 = $ucode_data;
 $7 = (_dram_u32_47($5,$6)|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = ($8|0)==(1);
 $10 = $1;
 $11 = $ucode_data;
 L1: do {
  if ($9) {
   $12 = (($11) + 48)|0;
   $13 = (_dram_u32_47($10,$12)|0);
   $14 = HEAP32[$13>>2]|0;
   $15 = ($14|0)==(-268431616);
   $16 = $1;
   $17 = $ucode_data;
   if ($15) {
    $18 = (($17) + 40)|0;
    $19 = (_dram_u32_47($16,$18)|0);
    $20 = HEAP32[$19>>2]|0;
    $v = $20;
    $21 = $v;
    $switch$split2D = ($21|0)<(505680780);
    L5: do {
     if ($switch$split2D) {
      switch ($21|0) {
      case 499651468:  {
       break;
      }
      default: {
       break L5;
      }
      }
      $23 = $1;
      _alist_process_audio_ge($23);
      $$expand_i1_val8 = 1;
      HEAP8[$0>>0] = $$expand_i1_val8;
      break L1;
     } else {
      $switch$split572D = ($21|0)<(507253648);
      if ($switch$split572D) {
       switch ($21|0) {
       case 505680780:  {
        break;
       }
       default: {
        break L5;
       }
       }
       $22 = $1;
       _alist_process_audio($22);
       $$expand_i1_val = 1;
       HEAP8[$0>>0] = $$expand_i1_val;
       break L1;
      } else {
       switch ($21|0) {
       case 507253648:  {
        break;
       }
       default: {
        break L5;
       }
       }
       $24 = $1;
       _alist_process_audio_bc($24);
       $$expand_i1_val10 = 1;
       HEAP8[$0>>0] = $$expand_i1_val10;
       break L1;
      }
     }
    } while(0);
    $25 = $1;
    $26 = ((($25)) + 84|0);
    $27 = HEAP32[$26>>2]|0;
    $28 = $v;
    HEAP32[$vararg_buffer>>2] = $28;
    _HleWarnMessage($27,(gb + (5372) | 0),$vararg_buffer);
    label = 30;
    break;
   }
   $29 = (($17) + 16)|0;
   $30 = (_dram_u32_47($16,$29)|0);
   $31 = HEAP32[$30>>2]|0;
   $v = $31;
   $32 = $v;
   $switch$split512D = ($32|0)<(483398224);
   L16: do {
    if ($switch$split512D) {
     $switch$split602D = ($32|0)<(285479628);
     if (!($switch$split602D)) {
      $switch$split752D = ($32|0)<(286790368);
      if ($switch$split752D) {
       switch ($32|0) {
       case 285479628:  {
        break;
       }
       default: {
        break L16;
       }
       }
       $36 = $1;
       _alist_process_nead_sf($36);
       $$expand_i1_val18 = 1;
       HEAP8[$0>>0] = $$expand_i1_val18;
       break L1;
      }
      switch ($32|0) {
      case 286790480:  {
       $33 = $1;
       _alist_process_nead_mk($33);
       $$expand_i1_val12 = 1;
       HEAP8[$0>>0] = $$expand_i1_val12;
       break L1;
       break;
      }
      case 286790368:  {
       $34 = $1;
       _alist_process_nead_sfj($34);
       $$expand_i1_val14 = 1;
       HEAP8[$0>>0] = $$expand_i1_val14;
       break L1;
       break;
      }
      default: {
       break L16;
      }
      }
     }
     $switch$split722D = ($32|0)<(278139384);
     if ($switch$split722D) {
      switch ($32|0) {
      case 65552:  {
       break;
      }
      default: {
       break L16;
      }
      }
      $44 = $1;
      _musyx_v2_task($44);
      $$expand_i1_val34 = 1;
      HEAP8[$0>>0] = $$expand_i1_val34;
      break L1;
     }
     $switch$split872D = ($32|0)<(285479596);
     if ($switch$split872D) {
      switch ($32|0) {
      case 278139384:  {
       break;
      }
      default: {
       break L16;
      }
      }
      $42 = $1;
      _alist_process_nead_mmb($42);
      $$expand_i1_val30 = 1;
      HEAP8[$0>>0] = $$expand_i1_val30;
      break L1;
     } else {
      switch ($32|0) {
      case 285479596:  {
       break;
      }
      default: {
       break L16;
      }
      }
      $35 = $1;
      _alist_process_nead_wrjb($35);
      $$expand_i1_val16 = 1;
      HEAP8[$0>>0] = $$expand_i1_val16;
      break L1;
     }
    } else {
     $switch$split632D = ($32|0)<(523768364);
     if ($switch$split632D) {
      $switch$split782D = ($32|0)<(514593208);
      if ($switch$split782D) {
       switch ($32|0) {
       case 483398224:  {
        break;
       }
       default: {
        break L16;
       }
       }
       $37 = $1;
       _alist_process_nead_fz($37);
       $$expand_i1_val20 = 1;
       HEAP8[$0>>0] = $$expand_i1_val20;
       break L1;
      }
      $switch$split902D = ($32|0)<(520622636);
      if ($switch$split902D) {
       switch ($32|0) {
       case 514593208:  {
        break;
       }
       default: {
        break L16;
       }
       }
       $43 = $1;
       _alist_process_nead_ac($43);
       $$expand_i1_val32 = 1;
       HEAP8[$0>>0] = $$expand_i1_val32;
       break L1;
      } else {
       switch ($32|0) {
       case 520622636:  {
        break;
       }
       default: {
        break L16;
       }
       }
       $38 = $1;
       _alist_process_nead_ys($38);
       $$expand_i1_val22 = 1;
       HEAP8[$0>>0] = $$expand_i1_val22;
       break L1;
      }
     } else {
      $switch$split812D = ($32|0)<(526914096);
      if ($switch$split812D) {
       switch ($32|0) {
       case 523768364:  {
        break;
       }
       default: {
        break L16;
       }
       }
       $39 = $1;
       _alist_process_nead_1080($39);
       $$expand_i1_val24 = 1;
       HEAP8[$0>>0] = $$expand_i1_val24;
       break L1;
      }
      $switch$split932D = ($32|0)<(528486992);
      if ($switch$split932D) {
       switch ($32|0) {
       case 526914096:  {
        break;
       }
       default: {
        break L16;
       }
       }
       $40 = $1;
       _alist_process_nead_oot($40);
       $$expand_i1_val26 = 1;
       HEAP8[$0>>0] = $$expand_i1_val26;
       break L1;
      } else {
       switch ($32|0) {
       case 528486992:  {
        break;
       }
       default: {
        break L16;
       }
       }
       $41 = $1;
       _alist_process_nead_mm($41);
       $$expand_i1_val28 = 1;
       HEAP8[$0>>0] = $$expand_i1_val28;
       break L1;
      }
     }
    }
   } while(0);
   $45 = $1;
   $46 = ((($45)) + 84|0);
   $47 = HEAP32[$46>>2]|0;
   $48 = $v;
   HEAP32[$vararg_buffer1>>2] = $48;
   _HleWarnMessage($47,(gb + (5411) | 0),$vararg_buffer1);
   label = 30;
  } else {
   $49 = (($11) + 16)|0;
   $50 = (_dram_u32_47($10,$49)|0);
   $51 = HEAP32[$50>>2]|0;
   $v = $51;
   $52 = $v;
   $switch$split542D = ($52|0)<(447747084);
   L61: do {
    if ($switch$split542D) {
     $switch$split662D = ($52|0)<(4732);
     if ($switch$split662D) {
      switch ($52|0) {
      case 1:  {
       break;
      }
      default: {
       break L61;
      }
      }
      $53 = $1;
      _musyx_v1_task($53);
      $$expand_i1_val36 = 1;
      HEAP8[$0>>0] = $$expand_i1_val36;
      break L1;
     }
     switch ($52|0) {
     case 4732:  {
      $54 = $1;
      _alist_process_naudio($54);
      $$expand_i1_val38 = 1;
      HEAP8[$0>>0] = $$expand_i1_val38;
      break L1;
      break;
     }
     case 4736:  {
      $55 = $1;
      _alist_process_naudio_bk($55);
      $$expand_i1_val40 = 1;
      HEAP8[$0>>0] = $$expand_i1_val40;
      break L1;
      break;
     }
     default: {
      break L61;
     }
     }
    } else {
     $switch$split692D = ($52|0)<(451417148);
     if ($switch$split692D) {
      switch ($52|0) {
      case 447747084:  {
       break;
      }
      default: {
       break L61;
      }
      }
      $58 = $1;
      _alist_process_naudio_cbfd($58);
      $$expand_i1_val46 = 1;
      HEAP8[$0>>0] = $$expand_i1_val46;
      break L1;
     }
     $switch$split842D = ($52|0)<(475533932);
     if ($switch$split842D) {
      switch ($52|0) {
      case 451417148:  {
       break;
      }
      default: {
       break L61;
      }
      }
      $57 = $1;
      _alist_process_naudio_mp3($57);
      $$expand_i1_val44 = 1;
      HEAP8[$0>>0] = $$expand_i1_val44;
      break L1;
     } else {
      switch ($52|0) {
      case 475533932:  {
       break;
      }
      default: {
       break L61;
      }
      }
      $56 = $1;
      _alist_process_naudio_dk($56);
      $$expand_i1_val42 = 1;
      HEAP8[$0>>0] = $$expand_i1_val42;
      break L1;
     }
    }
   } while(0);
   $59 = $1;
   $60 = ((($59)) + 84|0);
   $61 = HEAP32[$60>>2]|0;
   $62 = $v;
   HEAP32[$vararg_buffer4>>2] = $62;
   _HleWarnMessage($61,(gb + (5450) | 0),$vararg_buffer4);
   label = 30;
  }
 } while(0);
 if ((label|0) == 30) {
  $$expand_i1_val48 = 0;
  HEAP8[$0>>0] = $$expand_i1_val48;
 }
 $$pre_trunc = HEAP8[$0>>0]|0;
 $63 = $$pre_trunc&1;
 STACKTOP = sp;return ($63|0);
}
function _jpeg_decode_PS0($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _jpeg_decode_std($1,(gb + (5489) | 0),(fb + (67) | 0),(fb + (68) | 0),(fb + (69) | 0));
 STACKTOP = sp;return;
}
function _jpeg_decode_PS($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $0;
 _jpeg_decode_std($1,(gb + (5493) | 0),0,0,(fb + (70) | 0));
 STACKTOP = sp;return;
}
function _jpeg_decode_OB($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $address = 0, $macroblock = 0, $macroblock_count = 0;
 var $mb = 0, $qscale = 0, $qtable = 0, $u_dc = 0, $v_dc = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $y_dc = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 944|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $qtable = sp + 816|0;
 $y_dc = sp + 32|0;
 $u_dc = sp + 28|0;
 $v_dc = sp + 24|0;
 $macroblock = sp + 48|0;
 $0 = $hle;
 HEAP32[$y_dc>>2] = 0;
 HEAP32[$u_dc>>2] = 0;
 HEAP32[$v_dc>>2] = 0;
 $1 = $0;
 $2 = (_dmem_u32_64($1,4080)|0);
 $3 = HEAP32[$2>>2]|0;
 $address = $3;
 $4 = $0;
 $5 = (_dmem_u32_64($4,4084)|0);
 $6 = HEAP32[$5>>2]|0;
 $macroblock_count = $6;
 $7 = $0;
 $8 = (_dmem_u32_64($7,4092)|0);
 $9 = HEAP32[$8>>2]|0;
 $qscale = $9;
 $10 = $0;
 $11 = ((($10)) + 84|0);
 $12 = HEAP32[$11>>2]|0;
 $13 = $address;
 $14 = $macroblock_count;
 $15 = $qscale;
 HEAP32[$vararg_buffer>>2] = $13;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $14;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $15;
 _HleVerboseMessage($12,(gb + (5496) | 0),$vararg_buffer);
 $16 = $qscale;
 $17 = ($16|0)!=(0);
 do {
  if ($17) {
   $18 = $qscale;
   $19 = ($18|0)>(0);
   $20 = $qscale;
   if ($19) {
    $21 = $20&65535;
    _ScaleSubBlock($qtable,(gb + (2792) | 0),$21);
    break;
   } else {
    $22 = (0 - ($20))|0;
    _RShiftSubBlock($qtable,(gb + (2792) | 0),$22);
    break;
   }
  }
 } while(0);
 $mb = 0;
 while(1) {
  $23 = $mb;
  $24 = $macroblock_count;
  $25 = ($23>>>0)<($24>>>0);
  if (!($25)) {
   break;
  }
  $26 = $0;
  $27 = $address;
  _dram_load_u16_66($26,$macroblock,$27,384);
  $28 = $qscale;
  $29 = ($28|0)!=(0);
  $30 = $29 ? $qtable : 0;
  _decode_macroblock_ob($macroblock,$y_dc,$u_dc,$v_dc,$30);
  $31 = $0;
  $32 = $address;
  _EmitTilesMode2($31,(fb + (69) | 0),$macroblock,$32);
  $33 = $address;
  $34 = (($33) + 768)|0;
  $address = $34;
  $35 = $mb;
  $36 = (($35) + 1)|0;
  $mb = $36;
 }
 STACKTOP = sp;return;
}
function _RescaleYSubBlock($dst,$src) {
 $dst = $dst|0;
 $src = $src|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $i = 0;
 while(1) {
  $2 = $i;
  $3 = ($2>>>0)<(64);
  if (!($3)) {
   break;
  }
  $4 = $i;
  $5 = $1;
  $6 = (($5) + ($4<<1)|0);
  $7 = HEAP16[$6>>1]|0;
  $8 = (_clamp_s12($7)|0);
  $9 = $8 << 16 >> 16;
  $10 = (($9) + 2048)|0;
  $11 = ($10*3504)|0;
  $12 = $11 >>> 16;
  $13 = (($12) + 16)|0;
  $14 = $13&65535;
  $15 = $i;
  $16 = $0;
  $17 = (($16) + ($15<<1)|0);
  HEAP16[$17>>1] = $14;
  $18 = $i;
  $19 = (($18) + 1)|0;
  $i = $19;
 }
 STACKTOP = sp;return;
}
function _RescaleUVSubBlock($dst,$src) {
 $dst = $dst|0;
 $src = $src|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $i = 0;
 while(1) {
  $2 = $i;
  $3 = ($2>>>0)<(64);
  if (!($3)) {
   break;
  }
  $4 = $i;
  $5 = $1;
  $6 = (($5) + ($4<<1)|0);
  $7 = HEAP16[$6>>1]|0;
  $8 = (_clamp_s12($7)|0);
  $9 = $8 << 16 >> 16;
  $10 = ($9*3584)|0;
  $11 = $10 >> 16;
  $12 = (($11) + 128)|0;
  $13 = $12&65535;
  $14 = $i;
  $15 = $0;
  $16 = (($15) + ($14<<1)|0);
  HEAP16[$16>>1] = $13;
  $17 = $i;
  $18 = (($17) + 1)|0;
  $i = $18;
 }
 STACKTOP = sp;return;
}
function _EmitYUVTileLine($hle,$y,$u,$address) {
 $hle = $hle|0;
 $y = $y|0;
 $u = $u|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $uyvy = 0, $v = 0, $y2 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $uyvy = sp + 8|0;
 $0 = $hle;
 $1 = $y;
 $2 = $u;
 $3 = $address;
 $4 = $2;
 $5 = ((($4)) + 128|0);
 $v = $5;
 $6 = $1;
 $7 = ((($6)) + 128|0);
 $y2 = $7;
 $8 = $1;
 $9 = HEAP16[$8>>1]|0;
 $10 = $1;
 $11 = ((($10)) + 2|0);
 $12 = HEAP16[$11>>1]|0;
 $13 = $2;
 $14 = HEAP16[$13>>1]|0;
 $15 = $v;
 $16 = HEAP16[$15>>1]|0;
 $17 = (_GetUYVY($9,$12,$14,$16)|0);
 HEAP32[$uyvy>>2] = $17;
 $18 = $1;
 $19 = ((($18)) + 4|0);
 $20 = HEAP16[$19>>1]|0;
 $21 = $1;
 $22 = ((($21)) + 6|0);
 $23 = HEAP16[$22>>1]|0;
 $24 = $2;
 $25 = ((($24)) + 2|0);
 $26 = HEAP16[$25>>1]|0;
 $27 = $v;
 $28 = ((($27)) + 2|0);
 $29 = HEAP16[$28>>1]|0;
 $30 = (_GetUYVY($20,$23,$26,$29)|0);
 $31 = ((($uyvy)) + 4|0);
 HEAP32[$31>>2] = $30;
 $32 = $1;
 $33 = ((($32)) + 8|0);
 $34 = HEAP16[$33>>1]|0;
 $35 = $1;
 $36 = ((($35)) + 10|0);
 $37 = HEAP16[$36>>1]|0;
 $38 = $2;
 $39 = ((($38)) + 4|0);
 $40 = HEAP16[$39>>1]|0;
 $41 = $v;
 $42 = ((($41)) + 4|0);
 $43 = HEAP16[$42>>1]|0;
 $44 = (_GetUYVY($34,$37,$40,$43)|0);
 $45 = ((($uyvy)) + 8|0);
 HEAP32[$45>>2] = $44;
 $46 = $1;
 $47 = ((($46)) + 12|0);
 $48 = HEAP16[$47>>1]|0;
 $49 = $1;
 $50 = ((($49)) + 14|0);
 $51 = HEAP16[$50>>1]|0;
 $52 = $2;
 $53 = ((($52)) + 6|0);
 $54 = HEAP16[$53>>1]|0;
 $55 = $v;
 $56 = ((($55)) + 6|0);
 $57 = HEAP16[$56>>1]|0;
 $58 = (_GetUYVY($48,$51,$54,$57)|0);
 $59 = ((($uyvy)) + 12|0);
 HEAP32[$59>>2] = $58;
 $60 = $y2;
 $61 = HEAP16[$60>>1]|0;
 $62 = $y2;
 $63 = ((($62)) + 2|0);
 $64 = HEAP16[$63>>1]|0;
 $65 = $2;
 $66 = ((($65)) + 8|0);
 $67 = HEAP16[$66>>1]|0;
 $68 = $v;
 $69 = ((($68)) + 8|0);
 $70 = HEAP16[$69>>1]|0;
 $71 = (_GetUYVY($61,$64,$67,$70)|0);
 $72 = ((($uyvy)) + 16|0);
 HEAP32[$72>>2] = $71;
 $73 = $y2;
 $74 = ((($73)) + 4|0);
 $75 = HEAP16[$74>>1]|0;
 $76 = $y2;
 $77 = ((($76)) + 6|0);
 $78 = HEAP16[$77>>1]|0;
 $79 = $2;
 $80 = ((($79)) + 10|0);
 $81 = HEAP16[$80>>1]|0;
 $82 = $v;
 $83 = ((($82)) + 10|0);
 $84 = HEAP16[$83>>1]|0;
 $85 = (_GetUYVY($75,$78,$81,$84)|0);
 $86 = ((($uyvy)) + 20|0);
 HEAP32[$86>>2] = $85;
 $87 = $y2;
 $88 = ((($87)) + 8|0);
 $89 = HEAP16[$88>>1]|0;
 $90 = $y2;
 $91 = ((($90)) + 10|0);
 $92 = HEAP16[$91>>1]|0;
 $93 = $2;
 $94 = ((($93)) + 12|0);
 $95 = HEAP16[$94>>1]|0;
 $96 = $v;
 $97 = ((($96)) + 12|0);
 $98 = HEAP16[$97>>1]|0;
 $99 = (_GetUYVY($89,$92,$95,$98)|0);
 $100 = ((($uyvy)) + 24|0);
 HEAP32[$100>>2] = $99;
 $101 = $y2;
 $102 = ((($101)) + 12|0);
 $103 = HEAP16[$102>>1]|0;
 $104 = $y2;
 $105 = ((($104)) + 14|0);
 $106 = HEAP16[$105>>1]|0;
 $107 = $2;
 $108 = ((($107)) + 14|0);
 $109 = HEAP16[$108>>1]|0;
 $110 = $v;
 $111 = ((($110)) + 14|0);
 $112 = HEAP16[$111>>1]|0;
 $113 = (_GetUYVY($103,$106,$109,$112)|0);
 $114 = ((($uyvy)) + 28|0);
 HEAP32[$114>>2] = $113;
 $115 = $0;
 $116 = $3;
 _dram_store_u32($115,$uyvy,$116,8);
 STACKTOP = sp;return;
}
function _jpeg_decode_std($hle,$version,$transform_luma,$transform_chroma,$emit_line) {
 $hle = $hle|0;
 $version = $version|0;
 $transform_luma = $transform_luma|0;
 $transform_chroma = $transform_chroma|0;
 $emit_line = $emit_line|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $address = 0, $data_ptr = 0, $macroblock = 0, $macroblock_count = 0;
 var $macroblock_size = 0, $mb = 0, $mode = 0, $or$cond = 0, $qtableU_ptr = 0, $qtableV_ptr = 0, $qtableY_ptr = 0, $qtables = 0, $subblock_count = 0, $vararg_buffer = 0, $vararg_buffer11 = 0, $vararg_buffer2 = 0, $vararg_ptr10 = 0, $vararg_ptr14 = 0, $vararg_ptr5 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $vararg_ptr8 = 0, $vararg_ptr9 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1264|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer11 = sp + 40|0;
 $vararg_buffer2 = sp + 8|0;
 $vararg_buffer = sp;
 $qtables = sp + 880|0;
 $macroblock = sp + 112|0;
 $0 = $hle;
 $1 = $version;
 $2 = $transform_luma;
 $3 = $transform_chroma;
 $4 = $emit_line;
 $5 = $0;
 $6 = (_dmem_u32_64($5,4036)|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = $7 & 1;
 $9 = ($8|0)!=(0);
 $10 = $0;
 if ($9) {
  $11 = ((($10)) + 84|0);
  $12 = HEAP32[$11>>2]|0;
  $13 = $1;
  HEAP32[$vararg_buffer>>2] = $13;
  _HleWarnMessage($12,(gb + (5606) | 0),$vararg_buffer);
  STACKTOP = sp;return;
 }
 $14 = (_dmem_u32_64($10,4080)|0);
 $15 = HEAP32[$14>>2]|0;
 $data_ptr = $15;
 $16 = $0;
 $17 = $data_ptr;
 $18 = (_dram_u32_74($16,$17)|0);
 $19 = HEAP32[$18>>2]|0;
 $address = $19;
 $20 = $0;
 $21 = $data_ptr;
 $22 = (($21) + 4)|0;
 $23 = (_dram_u32_74($20,$22)|0);
 $24 = HEAP32[$23>>2]|0;
 $macroblock_count = $24;
 $25 = $0;
 $26 = $data_ptr;
 $27 = (($26) + 8)|0;
 $28 = (_dram_u32_74($25,$27)|0);
 $29 = HEAP32[$28>>2]|0;
 $mode = $29;
 $30 = $0;
 $31 = $data_ptr;
 $32 = (($31) + 12)|0;
 $33 = (_dram_u32_74($30,$32)|0);
 $34 = HEAP32[$33>>2]|0;
 $qtableY_ptr = $34;
 $35 = $0;
 $36 = $data_ptr;
 $37 = (($36) + 16)|0;
 $38 = (_dram_u32_74($35,$37)|0);
 $39 = HEAP32[$38>>2]|0;
 $qtableU_ptr = $39;
 $40 = $0;
 $41 = $data_ptr;
 $42 = (($41) + 20)|0;
 $43 = (_dram_u32_74($40,$42)|0);
 $44 = HEAP32[$43>>2]|0;
 $qtableV_ptr = $44;
 $45 = $0;
 $46 = ((($45)) + 84|0);
 $47 = HEAP32[$46>>2]|0;
 $48 = $1;
 $49 = $address;
 $50 = $macroblock_count;
 $51 = $mode;
 $52 = $qtableY_ptr;
 $53 = $qtableU_ptr;
 $54 = $qtableV_ptr;
 HEAP32[$vararg_buffer2>>2] = $48;
 $vararg_ptr5 = ((($vararg_buffer2)) + 4|0);
 HEAP32[$vararg_ptr5>>2] = $49;
 $vararg_ptr6 = ((($vararg_buffer2)) + 8|0);
 HEAP32[$vararg_ptr6>>2] = $50;
 $vararg_ptr7 = ((($vararg_buffer2)) + 12|0);
 HEAP32[$vararg_ptr7>>2] = $51;
 $vararg_ptr8 = ((($vararg_buffer2)) + 16|0);
 HEAP32[$vararg_ptr8>>2] = $52;
 $vararg_ptr9 = ((($vararg_buffer2)) + 20|0);
 HEAP32[$vararg_ptr9>>2] = $53;
 $vararg_ptr10 = ((($vararg_buffer2)) + 24|0);
 HEAP32[$vararg_ptr10>>2] = $54;
 _HleVerboseMessage($47,(gb + (5652) | 0),$vararg_buffer2);
 $55 = $mode;
 $56 = ($55|0)!=(0);
 $57 = $mode;
 $58 = ($57|0)!=(2);
 $or$cond = $56 & $58;
 if ($or$cond) {
  $59 = $0;
  $60 = ((($59)) + 84|0);
  $61 = HEAP32[$60>>2]|0;
  $62 = $1;
  $63 = $mode;
  HEAP32[$vararg_buffer11>>2] = $62;
  $vararg_ptr14 = ((($vararg_buffer11)) + 4|0);
  HEAP32[$vararg_ptr14>>2] = $63;
  _HleWarnMessage($61,(gb + (5720) | 0),$vararg_buffer11);
  STACKTOP = sp;return;
 }
 $64 = $mode;
 $65 = (($64) + 4)|0;
 $subblock_count = $65;
 $66 = $subblock_count;
 $67 = $66<<6;
 $macroblock_size = $67;
 $68 = $0;
 $69 = $qtableY_ptr;
 _dram_load_u16_66($68,$qtables,$69,64);
 $70 = $0;
 $71 = ((($qtables)) + 128|0);
 $72 = $qtableU_ptr;
 _dram_load_u16_66($70,$71,$72,64);
 $73 = $0;
 $74 = ((($qtables)) + 256|0);
 $75 = $qtableV_ptr;
 _dram_load_u16_66($73,$74,$75,64);
 $mb = 0;
 while(1) {
  $76 = $mb;
  $77 = $macroblock_count;
  $78 = ($76>>>0)<($77>>>0);
  if (!($78)) {
   break;
  }
  $79 = $0;
  $80 = $address;
  $81 = $macroblock_size;
  _dram_load_u16_66($79,$macroblock,$80,$81);
  $82 = $2;
  $83 = $3;
  $84 = $subblock_count;
  _decode_macroblock_std($82,$83,$macroblock,$84,$qtables);
  $85 = $mode;
  $86 = ($85|0)==(0);
  $87 = $0;
  $88 = $4;
  $89 = $address;
  if ($86) {
   _EmitTilesMode0($87,$88,$macroblock,$89);
  } else {
   _EmitTilesMode2($87,$88,$macroblock,$89);
  }
  $90 = $macroblock_size;
  $91 = $90<<1;
  $92 = $address;
  $93 = (($92) + ($91))|0;
  $address = $93;
  $94 = $mb;
  $95 = (($94) + 1)|0;
  $mb = $95;
 }
 STACKTOP = sp;return;
}
function _EmitRGBATileLine($hle,$y,$u,$address) {
 $hle = $hle|0;
 $y = $y|0;
 $u = $u|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0;
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $rgba = 0;
 var $v = 0, $y2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $rgba = sp + 24|0;
 $0 = $hle;
 $1 = $y;
 $2 = $u;
 $3 = $address;
 $4 = $2;
 $5 = ((($4)) + 128|0);
 $v = $5;
 $6 = $1;
 $7 = ((($6)) + 128|0);
 $y2 = $7;
 $8 = $1;
 $9 = HEAP16[$8>>1]|0;
 $10 = $2;
 $11 = HEAP16[$10>>1]|0;
 $12 = $v;
 $13 = HEAP16[$12>>1]|0;
 $14 = (_GetRGBA($9,$11,$13)|0);
 HEAP16[$rgba>>1] = $14;
 $15 = $1;
 $16 = ((($15)) + 2|0);
 $17 = HEAP16[$16>>1]|0;
 $18 = $2;
 $19 = HEAP16[$18>>1]|0;
 $20 = $v;
 $21 = HEAP16[$20>>1]|0;
 $22 = (_GetRGBA($17,$19,$21)|0);
 $23 = ((($rgba)) + 2|0);
 HEAP16[$23>>1] = $22;
 $24 = $1;
 $25 = ((($24)) + 4|0);
 $26 = HEAP16[$25>>1]|0;
 $27 = $2;
 $28 = ((($27)) + 2|0);
 $29 = HEAP16[$28>>1]|0;
 $30 = $v;
 $31 = ((($30)) + 2|0);
 $32 = HEAP16[$31>>1]|0;
 $33 = (_GetRGBA($26,$29,$32)|0);
 $34 = ((($rgba)) + 4|0);
 HEAP16[$34>>1] = $33;
 $35 = $1;
 $36 = ((($35)) + 6|0);
 $37 = HEAP16[$36>>1]|0;
 $38 = $2;
 $39 = ((($38)) + 2|0);
 $40 = HEAP16[$39>>1]|0;
 $41 = $v;
 $42 = ((($41)) + 2|0);
 $43 = HEAP16[$42>>1]|0;
 $44 = (_GetRGBA($37,$40,$43)|0);
 $45 = ((($rgba)) + 6|0);
 HEAP16[$45>>1] = $44;
 $46 = $1;
 $47 = ((($46)) + 8|0);
 $48 = HEAP16[$47>>1]|0;
 $49 = $2;
 $50 = ((($49)) + 4|0);
 $51 = HEAP16[$50>>1]|0;
 $52 = $v;
 $53 = ((($52)) + 4|0);
 $54 = HEAP16[$53>>1]|0;
 $55 = (_GetRGBA($48,$51,$54)|0);
 $56 = ((($rgba)) + 8|0);
 HEAP16[$56>>1] = $55;
 $57 = $1;
 $58 = ((($57)) + 10|0);
 $59 = HEAP16[$58>>1]|0;
 $60 = $2;
 $61 = ((($60)) + 4|0);
 $62 = HEAP16[$61>>1]|0;
 $63 = $v;
 $64 = ((($63)) + 4|0);
 $65 = HEAP16[$64>>1]|0;
 $66 = (_GetRGBA($59,$62,$65)|0);
 $67 = ((($rgba)) + 10|0);
 HEAP16[$67>>1] = $66;
 $68 = $1;
 $69 = ((($68)) + 12|0);
 $70 = HEAP16[$69>>1]|0;
 $71 = $2;
 $72 = ((($71)) + 6|0);
 $73 = HEAP16[$72>>1]|0;
 $74 = $v;
 $75 = ((($74)) + 6|0);
 $76 = HEAP16[$75>>1]|0;
 $77 = (_GetRGBA($70,$73,$76)|0);
 $78 = ((($rgba)) + 12|0);
 HEAP16[$78>>1] = $77;
 $79 = $1;
 $80 = ((($79)) + 14|0);
 $81 = HEAP16[$80>>1]|0;
 $82 = $2;
 $83 = ((($82)) + 6|0);
 $84 = HEAP16[$83>>1]|0;
 $85 = $v;
 $86 = ((($85)) + 6|0);
 $87 = HEAP16[$86>>1]|0;
 $88 = (_GetRGBA($81,$84,$87)|0);
 $89 = ((($rgba)) + 14|0);
 HEAP16[$89>>1] = $88;
 $90 = $y2;
 $91 = HEAP16[$90>>1]|0;
 $92 = $2;
 $93 = ((($92)) + 8|0);
 $94 = HEAP16[$93>>1]|0;
 $95 = $v;
 $96 = ((($95)) + 8|0);
 $97 = HEAP16[$96>>1]|0;
 $98 = (_GetRGBA($91,$94,$97)|0);
 $99 = ((($rgba)) + 16|0);
 HEAP16[$99>>1] = $98;
 $100 = $y2;
 $101 = ((($100)) + 2|0);
 $102 = HEAP16[$101>>1]|0;
 $103 = $2;
 $104 = ((($103)) + 8|0);
 $105 = HEAP16[$104>>1]|0;
 $106 = $v;
 $107 = ((($106)) + 8|0);
 $108 = HEAP16[$107>>1]|0;
 $109 = (_GetRGBA($102,$105,$108)|0);
 $110 = ((($rgba)) + 18|0);
 HEAP16[$110>>1] = $109;
 $111 = $y2;
 $112 = ((($111)) + 4|0);
 $113 = HEAP16[$112>>1]|0;
 $114 = $2;
 $115 = ((($114)) + 10|0);
 $116 = HEAP16[$115>>1]|0;
 $117 = $v;
 $118 = ((($117)) + 10|0);
 $119 = HEAP16[$118>>1]|0;
 $120 = (_GetRGBA($113,$116,$119)|0);
 $121 = ((($rgba)) + 20|0);
 HEAP16[$121>>1] = $120;
 $122 = $y2;
 $123 = ((($122)) + 6|0);
 $124 = HEAP16[$123>>1]|0;
 $125 = $2;
 $126 = ((($125)) + 10|0);
 $127 = HEAP16[$126>>1]|0;
 $128 = $v;
 $129 = ((($128)) + 10|0);
 $130 = HEAP16[$129>>1]|0;
 $131 = (_GetRGBA($124,$127,$130)|0);
 $132 = ((($rgba)) + 22|0);
 HEAP16[$132>>1] = $131;
 $133 = $y2;
 $134 = ((($133)) + 8|0);
 $135 = HEAP16[$134>>1]|0;
 $136 = $2;
 $137 = ((($136)) + 12|0);
 $138 = HEAP16[$137>>1]|0;
 $139 = $v;
 $140 = ((($139)) + 12|0);
 $141 = HEAP16[$140>>1]|0;
 $142 = (_GetRGBA($135,$138,$141)|0);
 $143 = ((($rgba)) + 24|0);
 HEAP16[$143>>1] = $142;
 $144 = $y2;
 $145 = ((($144)) + 10|0);
 $146 = HEAP16[$145>>1]|0;
 $147 = $2;
 $148 = ((($147)) + 12|0);
 $149 = HEAP16[$148>>1]|0;
 $150 = $v;
 $151 = ((($150)) + 12|0);
 $152 = HEAP16[$151>>1]|0;
 $153 = (_GetRGBA($146,$149,$152)|0);
 $154 = ((($rgba)) + 26|0);
 HEAP16[$154>>1] = $153;
 $155 = $y2;
 $156 = ((($155)) + 12|0);
 $157 = HEAP16[$156>>1]|0;
 $158 = $2;
 $159 = ((($158)) + 14|0);
 $160 = HEAP16[$159>>1]|0;
 $161 = $v;
 $162 = ((($161)) + 14|0);
 $163 = HEAP16[$162>>1]|0;
 $164 = (_GetRGBA($157,$160,$163)|0);
 $165 = ((($rgba)) + 28|0);
 HEAP16[$165>>1] = $164;
 $166 = $y2;
 $167 = ((($166)) + 14|0);
 $168 = HEAP16[$167>>1]|0;
 $169 = $2;
 $170 = ((($169)) + 14|0);
 $171 = HEAP16[$170>>1]|0;
 $172 = $v;
 $173 = ((($172)) + 14|0);
 $174 = HEAP16[$173>>1]|0;
 $175 = (_GetRGBA($168,$171,$174)|0);
 $176 = ((($rgba)) + 30|0);
 HEAP16[$176>>1] = $175;
 $177 = $0;
 $178 = $3;
 _dram_store_u16_72($177,$rgba,$178,16);
 STACKTOP = sp;return;
}
function _dmem_u32_64($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = ((($2)) + 4|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = $1;
 $6 = $5&65535;
 $7 = $6 & 4095;
 $8 = (_u32_68($4,$7)|0);
 STACKTOP = sp;return ($8|0);
}
function _ScaleSubBlock($dst,$src,$scale) {
 $dst = $dst|0;
 $src = $src|0;
 $scale = $scale|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $i = 0, $v = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $2 = $scale;
 $i = 0;
 while(1) {
  $3 = $i;
  $4 = ($3>>>0)<(64);
  if (!($4)) {
   break;
  }
  $5 = $i;
  $6 = $1;
  $7 = (($6) + ($5<<1)|0);
  $8 = HEAP16[$7>>1]|0;
  $9 = $8 << 16 >> 16;
  $10 = $2;
  $11 = $10 << 16 >> 16;
  $12 = Math_imul($9, $11)|0;
  $v = $12;
  $13 = $v;
  $14 = (_clamp_s16_67($13)|0);
  $15 = $i;
  $16 = $0;
  $17 = (($16) + ($15<<1)|0);
  HEAP16[$17>>1] = $14;
  $18 = $i;
  $19 = (($18) + 1)|0;
  $i = $19;
 }
 STACKTOP = sp;return;
}
function _RShiftSubBlock($dst,$src,$shift) {
 $dst = $dst|0;
 $src = $src|0;
 $shift = $shift|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $2 = $shift;
 $i = 0;
 while(1) {
  $3 = $i;
  $4 = ($3>>>0)<(64);
  if (!($4)) {
   break;
  }
  $5 = $i;
  $6 = $1;
  $7 = (($6) + ($5<<1)|0);
  $8 = HEAP16[$7>>1]|0;
  $9 = $8 << 16 >> 16;
  $10 = $2;
  $11 = $9 >> $10;
  $12 = $11&65535;
  $13 = $i;
  $14 = $0;
  $15 = (($14) + ($13<<1)|0);
  HEAP16[$15>>1] = $12;
  $16 = $i;
  $17 = (($16) + 1)|0;
  $i = $17;
 }
 STACKTOP = sp;return;
}
function _dram_load_u16_66($hle,$dst,$address,$count) {
 $hle = $hle|0;
 $dst = $dst|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $0;
 $6 = HEAP32[$5>>2]|0;
 $7 = $2;
 $8 = $7 & 16777215;
 $9 = $3;
 _load_u16($4,$6,$8,$9);
 STACKTOP = sp;return;
}
function _decode_macroblock_ob($macroblock,$y_dc,$u_dc,$v_dc,$qtable) {
 $macroblock = $macroblock|0;
 $y_dc = $y_dc|0;
 $u_dc = $u_dc|0;
 $v_dc = $v_dc|0;
 $qtable = $qtable|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $dc = 0, $sb = 0, $tmp_sb = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $tmp_sb = sp + 32|0;
 $0 = $macroblock;
 $1 = $y_dc;
 $2 = $u_dc;
 $3 = $v_dc;
 $4 = $qtable;
 $sb = 0;
 while(1) {
  $5 = $sb;
  $6 = ($5|0)<(6);
  if (!($6)) {
   break;
  }
  $7 = $0;
  $8 = HEAP16[$7>>1]|0;
  $9 = $8 << 16 >> 16;
  $dc = $9;
  $10 = $sb;
  switch ($10|0) {
  case 3: case 2: case 1: case 0:  {
   $11 = $dc;
   $12 = $1;
   $13 = HEAP32[$12>>2]|0;
   $14 = (($13) + ($11))|0;
   HEAP32[$12>>2] = $14;
   $15 = $1;
   $16 = HEAP32[$15>>2]|0;
   $17 = $16 & 65535;
   $18 = $17&65535;
   $19 = $0;
   HEAP16[$19>>1] = $18;
   break;
  }
  case 4:  {
   $20 = $dc;
   $21 = $2;
   $22 = HEAP32[$21>>2]|0;
   $23 = (($22) + ($20))|0;
   HEAP32[$21>>2] = $23;
   $24 = $2;
   $25 = HEAP32[$24>>2]|0;
   $26 = $25 & 65535;
   $27 = $26&65535;
   $28 = $0;
   HEAP16[$28>>1] = $27;
   break;
  }
  case 5:  {
   $29 = $dc;
   $30 = $3;
   $31 = HEAP32[$30>>2]|0;
   $32 = (($31) + ($29))|0;
   HEAP32[$30>>2] = $32;
   $33 = $3;
   $34 = HEAP32[$33>>2]|0;
   $35 = $34 & 65535;
   $36 = $35&65535;
   $37 = $0;
   HEAP16[$37>>1] = $36;
   break;
  }
  default: {
  }
  }
  $38 = $0;
  _ZigZagSubBlock($tmp_sb,$38);
  $39 = $4;
  $40 = ($39|0)!=(0|0);
  if ($40) {
   $41 = $4;
   _MultSubBlocks($tmp_sb,$tmp_sb,$41,0);
  }
  $42 = $0;
  _TransposeSubBlock($42,$tmp_sb);
  $43 = $0;
  $44 = $0;
  _InverseDCTSubBlock($43,$44);
  $45 = $0;
  $46 = ((($45)) + 128|0);
  $0 = $46;
  $47 = $sb;
  $48 = (($47) + 1)|0;
  $sb = $48;
 }
 STACKTOP = sp;return;
}
function _EmitTilesMode2($hle,$emit_line,$macroblock,$address) {
 $hle = $hle|0;
 $emit_line = $emit_line|0;
 $macroblock = $macroblock|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, $u_offset = 0, $y_offset = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $emit_line;
 $2 = $macroblock;
 $3 = $address;
 $y_offset = 0;
 $u_offset = 256;
 $i = 0;
 while(1) {
  $4 = $i;
  $5 = ($4>>>0)<(8);
  if (!($5)) {
   break;
  }
  $6 = $1;
  $7 = $0;
  $8 = $y_offset;
  $9 = $2;
  $10 = (($9) + ($8<<1)|0);
  $11 = $u_offset;
  $12 = $2;
  $13 = (($12) + ($11<<1)|0);
  $14 = $3;
  mftCall_viiii($6|0,($7|0),($10|0),($13|0),($14|0));
  $15 = $1;
  $16 = $0;
  $17 = $y_offset;
  $18 = (($17) + 8)|0;
  $19 = $2;
  $20 = (($19) + ($18<<1)|0);
  $21 = $u_offset;
  $22 = $2;
  $23 = (($22) + ($21<<1)|0);
  $24 = $3;
  $25 = (($24) + 32)|0;
  mftCall_viiii($15|0,($16|0),($20|0),($23|0),($25|0));
  $26 = $i;
  $27 = ($26|0)==(3);
  $28 = $27 ? 80 : 16;
  $29 = $y_offset;
  $30 = (($29) + ($28))|0;
  $y_offset = $30;
  $31 = $u_offset;
  $32 = (($31) + 8)|0;
  $u_offset = $32;
  $33 = $3;
  $34 = (($33) + 64)|0;
  $3 = $34;
  $35 = $i;
  $36 = (($35) + 1)|0;
  $i = $36;
 }
 STACKTOP = sp;return;
}
function _ZigZagSubBlock($dst,$src) {
 $dst = $dst|0;
 $src = $src|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $2 = $0;
 $3 = $1;
 _ReorderSubBlock($2,$3,(gb + (2024) | 0));
 STACKTOP = sp;return;
}
function _MultSubBlocks($dst,$src1,$src2,$shift) {
 $dst = $dst|0;
 $src1 = $src1|0;
 $src2 = $src2|0;
 $shift = $shift|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, $v = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src1;
 $2 = $src2;
 $3 = $shift;
 $i = 0;
 while(1) {
  $4 = $i;
  $5 = ($4>>>0)<(64);
  if (!($5)) {
   break;
  }
  $6 = $i;
  $7 = $1;
  $8 = (($7) + ($6<<1)|0);
  $9 = HEAP16[$8>>1]|0;
  $10 = $9 << 16 >> 16;
  $11 = $i;
  $12 = $2;
  $13 = (($12) + ($11<<1)|0);
  $14 = HEAP16[$13>>1]|0;
  $15 = $14 << 16 >> 16;
  $16 = Math_imul($10, $15)|0;
  $v = $16;
  $17 = $v;
  $18 = (_clamp_s16_67($17)|0);
  $19 = $18 << 16 >> 16;
  $20 = $3;
  $21 = $19 << $20;
  $22 = $21&65535;
  $23 = $i;
  $24 = $0;
  $25 = (($24) + ($23<<1)|0);
  HEAP16[$25>>1] = $22;
  $26 = $i;
  $27 = (($26) + 1)|0;
  $i = $27;
 }
 STACKTOP = sp;return;
}
function _TransposeSubBlock($dst,$src) {
 $dst = $dst|0;
 $src = $src|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $2 = $0;
 $3 = $1;
 _ReorderSubBlock($2,$3,(gb + (1768) | 0));
 STACKTOP = sp;return;
}
function _InverseDCTSubBlock($dst,$src) {
 $dst = $dst|0;
 $src = $src|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0.0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0.0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $block = 0, $i = 0, $j = 0, $x = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 304|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $x = sp + 264|0;
 $block = sp + 8|0;
 $0 = $dst;
 $1 = $src;
 $i = 0;
 while(1) {
  $2 = $i;
  $3 = ($2>>>0)<(8);
  if (!($3)) {
   break;
  }
  $j = 0;
  while(1) {
   $4 = $j;
   $5 = ($4>>>0)<(8);
   if (!($5)) {
    break;
   }
   $6 = $i;
   $7 = $6<<3;
   $8 = $j;
   $9 = (($7) + ($8))|0;
   $10 = $1;
   $11 = (($10) + ($9<<1)|0);
   $12 = HEAP16[$11>>1]|0;
   $13 = (+($12<<16>>16));
   $14 = $j;
   $15 = (($x) + ($14<<2)|0);
   HEAPF32[$15>>2] = $13;
   $16 = $j;
   $17 = (($16) + 1)|0;
   $j = $17;
  }
  $18 = $i;
  $19 = (($block) + ($18<<2)|0);
  _InverseDCT1D($x,$19,8);
  $20 = $i;
  $21 = (($20) + 1)|0;
  $i = $21;
 }
 $i = 0;
 while(1) {
  $22 = $i;
  $23 = ($22>>>0)<(8);
  if (!($23)) {
   break;
  }
  $24 = $i;
  $25 = $24<<3;
  $26 = (($block) + ($25<<2)|0);
  _InverseDCT1D($26,$x,1);
  $j = 0;
  while(1) {
   $27 = $j;
   $28 = ($27>>>0)<(8);
   if (!($28)) {
    break;
   }
   $29 = $j;
   $30 = (($x) + ($29<<2)|0);
   $31 = +HEAPF32[$30>>2];
   $32 = (~~(($31)));
   $33 = $32 << 16 >> 16;
   $34 = $33 >> 3;
   $35 = $34&65535;
   $36 = $i;
   $37 = $j;
   $38 = $37<<3;
   $39 = (($36) + ($38))|0;
   $40 = $0;
   $41 = (($40) + ($39<<1)|0);
   HEAP16[$41>>1] = $35;
   $42 = $j;
   $43 = (($42) + 1)|0;
   $j = $43;
  }
  $44 = $i;
  $45 = (($44) + 1)|0;
  $i = $45;
 }
 STACKTOP = sp;return;
}
function _InverseDCT1D($x,$dst,$stride) {
 $x = $x|0;
 $dst = $dst|0;
 $stride = $stride|0;
 var $0 = 0, $1 = 0, $10 = 0.0, $100 = 0.0, $101 = 0.0, $102 = 0.0, $103 = 0.0, $104 = 0.0, $105 = 0.0, $106 = 0.0, $107 = 0, $108 = 0, $109 = 0.0, $11 = 0.0, $110 = 0.0, $111 = 0.0, $112 = 0.0, $113 = 0.0, $114 = 0, $115 = 0.0;
 var $116 = 0.0, $117 = 0.0, $118 = 0.0, $119 = 0, $12 = 0.0, $120 = 0, $121 = 0.0, $122 = 0.0, $123 = 0.0, $124 = 0.0, $125 = 0.0, $126 = 0, $127 = 0.0, $128 = 0.0, $129 = 0.0, $13 = 0, $130 = 0.0, $131 = 0, $132 = 0, $133 = 0.0;
 var $134 = 0.0, $135 = 0.0, $136 = 0.0, $137 = 0.0, $138 = 0, $139 = 0.0, $14 = 0, $140 = 0, $141 = 0.0, $142 = 0.0, $143 = 0.0, $144 = 0.0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0.0, $150 = 0.0, $151 = 0;
 var $152 = 0.0, $153 = 0.0, $154 = 0, $155 = 0.0, $156 = 0.0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0.0, $163 = 0, $164 = 0.0, $165 = 0.0, $166 = 0, $167 = 0.0, $168 = 0.0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0.0, $174 = 0, $175 = 0.0, $176 = 0.0, $177 = 0, $178 = 0.0, $179 = 0.0, $18 = 0.0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0.0, $185 = 0, $186 = 0.0, $187 = 0.0, $188 = 0;
 var $189 = 0.0, $19 = 0.0, $190 = 0.0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0.0, $197 = 0, $198 = 0.0, $199 = 0.0, $2 = 0, $20 = 0.0, $200 = 0, $201 = 0.0, $202 = 0.0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0.0, $209 = 0, $21 = 0.0, $210 = 0.0, $211 = 0.0, $212 = 0, $213 = 0.0, $214 = 0.0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0.0, $22 = 0, $220 = 0, $221 = 0.0, $222 = 0.0, $223 = 0.0;
 var $224 = 0.0, $225 = 0, $23 = 0, $24 = 0.0, $25 = 0, $26 = 0, $27 = 0.0, $28 = 0.0, $29 = 0.0, $3 = 0.0, $30 = 0.0, $31 = 0, $32 = 0, $33 = 0.0, $34 = 0, $35 = 0, $36 = 0.0, $37 = 0.0, $38 = 0.0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0.0, $42 = 0, $43 = 0, $44 = 0.0, $45 = 0.0, $46 = 0, $47 = 0, $48 = 0.0, $49 = 0.0, $5 = 0, $50 = 0, $51 = 0, $52 = 0.0, $53 = 0.0, $54 = 0.0, $55 = 0, $56 = 0, $57 = 0.0;
 var $58 = 0, $59 = 0, $6 = 0.0, $60 = 0.0, $61 = 0.0, $62 = 0.0, $63 = 0, $64 = 0.0, $65 = 0, $66 = 0, $67 = 0.0, $68 = 0.0, $69 = 0, $7 = 0, $70 = 0.0, $71 = 0, $72 = 0, $73 = 0.0, $74 = 0.0, $75 = 0;
 var $76 = 0.0, $77 = 0.0, $78 = 0, $79 = 0, $8 = 0, $80 = 0.0, $81 = 0.0, $82 = 0.0, $83 = 0, $84 = 0.0, $85 = 0.0, $86 = 0, $87 = 0, $88 = 0.0, $89 = 0.0, $9 = 0.0, $90 = 0.0, $91 = 0, $92 = 0.0, $93 = 0.0;
 var $94 = 0.0, $95 = 0.0, $96 = 0, $97 = 0, $98 = 0.0, $99 = 0.0, $e = 0, $f = 0, $x1357 = 0.0, $x15 = 0.0, $x17 = 0.0, $x26 = 0.0, $x35 = 0.0, $x37 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $e = sp + 40|0;
 $f = sp + 24|0;
 $0 = $x;
 $1 = $dst;
 $2 = $stride;
 $3 = +HEAPF32[((((gb + (1728) | 0)) + 8|0))>>2];
 $4 = $0;
 $5 = ((($4)) + 4|0);
 $6 = +HEAPF32[$5>>2];
 $7 = $0;
 $8 = ((($7)) + 20|0);
 $9 = +HEAPF32[$8>>2];
 $10 = $6 + $9;
 $11 = $3 * $10;
 $x15 = $11;
 $12 = +HEAPF32[((((gb + (1728) | 0)) + 12|0))>>2];
 $13 = $0;
 $14 = ((($13)) + 12|0);
 $15 = +HEAPF32[$14>>2];
 $16 = $0;
 $17 = ((($16)) + 28|0);
 $18 = +HEAPF32[$17>>2];
 $19 = $15 + $18;
 $20 = $12 * $19;
 $x37 = $20;
 $21 = +HEAPF32[((((gb + (1728) | 0)) + 32|0))>>2];
 $22 = $0;
 $23 = ((($22)) + 4|0);
 $24 = +HEAPF32[$23>>2];
 $25 = $0;
 $26 = ((($25)) + 28|0);
 $27 = +HEAPF32[$26>>2];
 $28 = $24 + $27;
 $29 = $21 * $28;
 $x17 = $29;
 $30 = +HEAPF32[((((gb + (1728) | 0)) + 36|0))>>2];
 $31 = $0;
 $32 = ((($31)) + 12|0);
 $33 = +HEAPF32[$32>>2];
 $34 = $0;
 $35 = ((($34)) + 20|0);
 $36 = +HEAPF32[$35>>2];
 $37 = $33 + $36;
 $38 = $30 * $37;
 $x35 = $38;
 $39 = $0;
 $40 = ((($39)) + 4|0);
 $41 = +HEAPF32[$40>>2];
 $42 = $0;
 $43 = ((($42)) + 12|0);
 $44 = +HEAPF32[$43>>2];
 $45 = $41 + $44;
 $46 = $0;
 $47 = ((($46)) + 20|0);
 $48 = +HEAPF32[$47>>2];
 $49 = $45 + $48;
 $50 = $0;
 $51 = ((($50)) + 28|0);
 $52 = +HEAPF32[$51>>2];
 $53 = $49 + $52;
 $54 = 1.1758755445480347 * $53;
 $x1357 = $54;
 $55 = $0;
 $56 = ((($55)) + 8|0);
 $57 = +HEAPF32[$56>>2];
 $58 = $0;
 $59 = ((($58)) + 24|0);
 $60 = +HEAPF32[$59>>2];
 $61 = $57 + $60;
 $62 = 0.54119610786437988 * $61;
 $x26 = $62;
 $63 = $0;
 $64 = +HEAPF32[$63>>2];
 $65 = $0;
 $66 = ((($65)) + 16|0);
 $67 = +HEAPF32[$66>>2];
 $68 = $64 + $67;
 HEAPF32[$f>>2] = $68;
 $69 = $0;
 $70 = +HEAPF32[$69>>2];
 $71 = $0;
 $72 = ((($71)) + 16|0);
 $73 = +HEAPF32[$72>>2];
 $74 = $70 - $73;
 $75 = ((($f)) + 4|0);
 HEAPF32[$75>>2] = $74;
 $76 = $x26;
 $77 = +HEAPF32[(gb + (1728) | 0)>>2];
 $78 = $0;
 $79 = ((($78)) + 8|0);
 $80 = +HEAPF32[$79>>2];
 $81 = $77 * $80;
 $82 = $76 + $81;
 $83 = ((($f)) + 8|0);
 HEAPF32[$83>>2] = $82;
 $84 = $x26;
 $85 = +HEAPF32[((((gb + (1728) | 0)) + 4|0))>>2];
 $86 = $0;
 $87 = ((($86)) + 24|0);
 $88 = +HEAPF32[$87>>2];
 $89 = $85 * $88;
 $90 = $84 + $89;
 $91 = ((($f)) + 12|0);
 HEAPF32[$91>>2] = $90;
 $92 = $x1357;
 $93 = $x15;
 $94 = $92 + $93;
 $95 = +HEAPF32[((((gb + (1728) | 0)) + 16|0))>>2];
 $96 = $0;
 $97 = ((($96)) + 4|0);
 $98 = +HEAPF32[$97>>2];
 $99 = $95 * $98;
 $100 = $94 + $99;
 $101 = $x17;
 $102 = $100 + $101;
 HEAPF32[$e>>2] = $102;
 $103 = $x1357;
 $104 = $x37;
 $105 = $103 + $104;
 $106 = +HEAPF32[((((gb + (1728) | 0)) + 24|0))>>2];
 $107 = $0;
 $108 = ((($107)) + 12|0);
 $109 = +HEAPF32[$108>>2];
 $110 = $106 * $109;
 $111 = $105 + $110;
 $112 = $x35;
 $113 = $111 + $112;
 $114 = ((($e)) + 4|0);
 HEAPF32[$114>>2] = $113;
 $115 = $x1357;
 $116 = $x15;
 $117 = $115 + $116;
 $118 = +HEAPF32[((((gb + (1728) | 0)) + 20|0))>>2];
 $119 = $0;
 $120 = ((($119)) + 20|0);
 $121 = +HEAPF32[$120>>2];
 $122 = $118 * $121;
 $123 = $117 + $122;
 $124 = $x35;
 $125 = $123 + $124;
 $126 = ((($e)) + 8|0);
 HEAPF32[$126>>2] = $125;
 $127 = $x1357;
 $128 = $x37;
 $129 = $127 + $128;
 $130 = +HEAPF32[((((gb + (1728) | 0)) + 28|0))>>2];
 $131 = $0;
 $132 = ((($131)) + 28|0);
 $133 = +HEAPF32[$132>>2];
 $134 = $130 * $133;
 $135 = $129 + $134;
 $136 = $x17;
 $137 = $135 + $136;
 $138 = ((($e)) + 12|0);
 HEAPF32[$138>>2] = $137;
 $139 = +HEAPF32[$f>>2];
 $140 = ((($f)) + 8|0);
 $141 = +HEAPF32[$140>>2];
 $142 = $139 + $141;
 $143 = +HEAPF32[$e>>2];
 $144 = $142 + $143;
 $145 = $1;
 HEAPF32[$145>>2] = $144;
 $146 = $2;
 $147 = $1;
 $148 = (($147) + ($146<<2)|0);
 $1 = $148;
 $149 = ((($f)) + 4|0);
 $150 = +HEAPF32[$149>>2];
 $151 = ((($f)) + 12|0);
 $152 = +HEAPF32[$151>>2];
 $153 = $150 + $152;
 $154 = ((($e)) + 4|0);
 $155 = +HEAPF32[$154>>2];
 $156 = $153 + $155;
 $157 = $1;
 HEAPF32[$157>>2] = $156;
 $158 = $2;
 $159 = $1;
 $160 = (($159) + ($158<<2)|0);
 $1 = $160;
 $161 = ((($f)) + 4|0);
 $162 = +HEAPF32[$161>>2];
 $163 = ((($f)) + 12|0);
 $164 = +HEAPF32[$163>>2];
 $165 = $162 - $164;
 $166 = ((($e)) + 8|0);
 $167 = +HEAPF32[$166>>2];
 $168 = $165 + $167;
 $169 = $1;
 HEAPF32[$169>>2] = $168;
 $170 = $2;
 $171 = $1;
 $172 = (($171) + ($170<<2)|0);
 $1 = $172;
 $173 = +HEAPF32[$f>>2];
 $174 = ((($f)) + 8|0);
 $175 = +HEAPF32[$174>>2];
 $176 = $173 - $175;
 $177 = ((($e)) + 12|0);
 $178 = +HEAPF32[$177>>2];
 $179 = $176 + $178;
 $180 = $1;
 HEAPF32[$180>>2] = $179;
 $181 = $2;
 $182 = $1;
 $183 = (($182) + ($181<<2)|0);
 $1 = $183;
 $184 = +HEAPF32[$f>>2];
 $185 = ((($f)) + 8|0);
 $186 = +HEAPF32[$185>>2];
 $187 = $184 - $186;
 $188 = ((($e)) + 12|0);
 $189 = +HEAPF32[$188>>2];
 $190 = $187 - $189;
 $191 = $1;
 HEAPF32[$191>>2] = $190;
 $192 = $2;
 $193 = $1;
 $194 = (($193) + ($192<<2)|0);
 $1 = $194;
 $195 = ((($f)) + 4|0);
 $196 = +HEAPF32[$195>>2];
 $197 = ((($f)) + 12|0);
 $198 = +HEAPF32[$197>>2];
 $199 = $196 - $198;
 $200 = ((($e)) + 8|0);
 $201 = +HEAPF32[$200>>2];
 $202 = $199 - $201;
 $203 = $1;
 HEAPF32[$203>>2] = $202;
 $204 = $2;
 $205 = $1;
 $206 = (($205) + ($204<<2)|0);
 $1 = $206;
 $207 = ((($f)) + 4|0);
 $208 = +HEAPF32[$207>>2];
 $209 = ((($f)) + 12|0);
 $210 = +HEAPF32[$209>>2];
 $211 = $208 + $210;
 $212 = ((($e)) + 4|0);
 $213 = +HEAPF32[$212>>2];
 $214 = $211 - $213;
 $215 = $1;
 HEAPF32[$215>>2] = $214;
 $216 = $2;
 $217 = $1;
 $218 = (($217) + ($216<<2)|0);
 $1 = $218;
 $219 = +HEAPF32[$f>>2];
 $220 = ((($f)) + 8|0);
 $221 = +HEAPF32[$220>>2];
 $222 = $219 + $221;
 $223 = +HEAPF32[$e>>2];
 $224 = $222 - $223;
 $225 = $1;
 HEAPF32[$225>>2] = $224;
 STACKTOP = sp;return;
}
function _ReorderSubBlock($dst,$src,$table) {
 $dst = $dst|0;
 $src = $src|0;
 $table = $table|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $2 = $table;
 $3 = $0;
 $4 = $1;
 $5 = $3;
 $6 = $4;
 $7 = (($5) - ($6))|0;
 $8 = (($7|0) / 2)&-1;
 $9 = (Math_abs(($8|0))|0);
 $10 = ($9|0)>(64);
 if (!($10)) {
  ___assert_fail(((gb + (5542) | 0)|0),((gb + (5573) | 0)|0),475,((gb + (5590) | 0)|0));
  // unreachable;
 }
 $i = 0;
 while(1) {
  $11 = $i;
  $12 = ($11>>>0)<(64);
  if (!($12)) {
   break;
  }
  $13 = $i;
  $14 = $2;
  $15 = (($14) + ($13<<2)|0);
  $16 = HEAP32[$15>>2]|0;
  $17 = $1;
  $18 = (($17) + ($16<<1)|0);
  $19 = HEAP16[$18>>1]|0;
  $20 = $i;
  $21 = $0;
  $22 = (($21) + ($20<<1)|0);
  HEAP16[$22>>1] = $19;
  $23 = $i;
  $24 = (($23) + 1)|0;
  $i = $24;
 }
 STACKTOP = sp;return;
}
function _clamp_s16_67($x) {
 $x = $x|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $0;
 $2 = ($1|0)<(-32768);
 $3 = $0;
 $4 = $2 ? -32768 : $3;
 $0 = $4;
 $5 = $0;
 $6 = ($5|0)>(32767);
 $7 = $0;
 $8 = $6 ? 32767 : $7;
 $0 = $8;
 $9 = $0;
 $10 = $9&65535;
 STACKTOP = sp;return ($10|0);
}
function _u32_68($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $1;
 $3 = $2 & 3;
 $4 = ($3|0)==(0);
 if ($4) {
  $5 = $0;
  $6 = $1;
  $7 = (($5) + ($6)|0);
  STACKTOP = sp;return ($7|0);
 } else {
  ___assert_fail(((gb + (6645) | 0)|0),((gb + (6622) | 0)|0),80,((gb + (6664) | 0)|0));
  // unreachable;
 }
 return (0)|0;
}
function _GetRGBA($y,$u,$v) {
 $y = $y|0;
 $u = $u|0;
 $v = $v|0;
 var $0 = 0, $1 = 0, $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0.0, $16 = 0, $17 = 0, $18 = 0.0, $19 = 0.0, $2 = 0, $20 = 0.0, $21 = 0.0, $22 = 0.0, $23 = 0.0, $24 = 0.0, $25 = 0.0, $26 = 0.0;
 var $27 = 0.0, $28 = 0, $29 = 0, $3 = 0, $30 = 0.0, $31 = 0.0, $32 = 0.0, $33 = 0.0, $34 = 0.0, $35 = 0.0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0.0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0.0, $50 = 0, $6 = 0, $7 = 0.0, $8 = 0, $9 = 0.0, $b = 0, $fU = 0.0, $fV = 0.0, $fY = 0.0, $g = 0, $r = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $y;
 $1 = $u;
 $2 = $v;
 $3 = $0;
 $4 = (+($3<<16>>16));
 $5 = $4 + 2048.0;
 $fY = $5;
 $6 = $1;
 $7 = (+($6<<16>>16));
 $fU = $7;
 $8 = $2;
 $9 = (+($8<<16>>16));
 $fV = $9;
 $10 = $fY;
 $11 = $10;
 $12 = $fV;
 $13 = $12;
 $14 = 1.4025000000000001 * $13;
 $15 = $11 + $14;
 $16 = (~~(($15)));
 $17 = (_clamp_RGBA_component($16)|0);
 $r = $17;
 $18 = $fY;
 $19 = $18;
 $20 = $fU;
 $21 = $20;
 $22 = 0.34429999999999999 * $21;
 $23 = $19 - $22;
 $24 = $fV;
 $25 = $24;
 $26 = 0.71440000000000003 * $25;
 $27 = $23 - $26;
 $28 = (~~(($27)));
 $29 = (_clamp_RGBA_component($28)|0);
 $g = $29;
 $30 = $fY;
 $31 = $30;
 $32 = $fU;
 $33 = $32;
 $34 = 1.7728999999999999 * $33;
 $35 = $31 + $34;
 $36 = (~~(($35)));
 $37 = (_clamp_RGBA_component($36)|0);
 $b = $37;
 $38 = $r;
 $39 = $38&65535;
 $40 = $39 << 4;
 $41 = $g;
 $42 = $41&65535;
 $43 = $42 >> 1;
 $44 = $40 | $43;
 $45 = $b;
 $46 = $45&65535;
 $47 = $46 >> 6;
 $48 = $44 | $47;
 $49 = $48 | 1;
 $50 = $49&65535;
 STACKTOP = sp;return ($50|0);
}
function _dram_store_u16_72($hle,$src,$address,$count) {
 $hle = $hle|0;
 $src = $src|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $src;
 $2 = $address;
 $3 = $count;
 $4 = $0;
 $5 = HEAP32[$4>>2]|0;
 $6 = $2;
 $7 = $6 & 16777215;
 $8 = $1;
 $9 = $3;
 _store_u16($5,$7,$8,$9);
 STACKTOP = sp;return;
}
function _clamp_RGBA_component($x) {
 $x = $x|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $0;
 $2 = $1 << 16 >> 16;
 $3 = ($2|0)>(4080);
 if ($3) {
  $0 = 4080;
 } else {
  $4 = $0;
  $5 = $4 << 16 >> 16;
  $6 = ($5|0)<(0);
  if ($6) {
   $0 = 0;
  }
 }
 $7 = $0;
 $8 = $7 << 16 >> 16;
 $9 = $8 & 3968;
 $10 = $9&65535;
 STACKTOP = sp;return ($10|0);
}
function _dram_u32_74($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = HEAP32[$2>>2]|0;
 $4 = $1;
 $5 = $4 & 16777215;
 $6 = (_u32_68($3,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _decode_macroblock_std($transform_luma,$transform_chroma,$macroblock,$subblock_count,$qtables) {
 $transform_luma = $transform_luma|0;
 $transform_chroma = $transform_chroma|0;
 $macroblock = $macroblock|0;
 $subblock_count = $subblock_count|0;
 $qtables = $qtables|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $isChromaSubBlock = 0, $q = 0, $sb = 0, $tmp_sb = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $tmp_sb = sp + 32|0;
 $0 = $transform_luma;
 $1 = $transform_chroma;
 $2 = $macroblock;
 $3 = $subblock_count;
 $4 = $qtables;
 $q = 0;
 $sb = 0;
 while(1) {
  $5 = $sb;
  $6 = $3;
  $7 = ($5>>>0)<($6>>>0);
  if (!($7)) {
   break;
  }
  $8 = $3;
  $9 = $sb;
  $10 = (($8) - ($9))|0;
  $11 = ($10>>>0)<=(2);
  $12 = $11&1;
  $isChromaSubBlock = $12;
  $13 = $isChromaSubBlock;
  $14 = ($13|0)!=(0);
  if ($14) {
   $15 = $q;
   $16 = (($15) + 1)|0;
   $q = $16;
  }
  $17 = $2;
  $18 = $2;
  $19 = $q;
  $20 = $4;
  $21 = (($20) + ($19<<7)|0);
  _MultSubBlocks($17,$18,$21,4);
  $22 = $2;
  _ZigZagSubBlock($tmp_sb,$22);
  $23 = $2;
  _InverseDCTSubBlock($23,$tmp_sb);
  $24 = $isChromaSubBlock;
  $25 = ($24|0)!=(0);
  if ($25) {
   $26 = $1;
   $27 = ($26|0)!=(0|0);
   if ($27) {
    $28 = $1;
    $29 = $2;
    $30 = $2;
    mftCall_vii($28|0,($29|0),($30|0));
   }
  } else {
   $31 = $0;
   $32 = ($31|0)!=(0|0);
   if ($32) {
    $33 = $0;
    $34 = $2;
    $35 = $2;
    mftCall_vii($33|0,($34|0),($35|0));
   }
  }
  $36 = $2;
  $37 = ((($36)) + 128|0);
  $2 = $37;
  $38 = $sb;
  $39 = (($38) + 1)|0;
  $sb = $39;
 }
 STACKTOP = sp;return;
}
function _EmitTilesMode0($hle,$emit_line,$macroblock,$address) {
 $hle = $hle|0;
 $emit_line = $emit_line|0;
 $macroblock = $macroblock|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $i = 0, $u_offset = 0, $y_offset = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $emit_line;
 $2 = $macroblock;
 $3 = $address;
 $y_offset = 0;
 $u_offset = 128;
 $i = 0;
 while(1) {
  $4 = $i;
  $5 = ($4>>>0)<(8);
  if (!($5)) {
   break;
  }
  $6 = $1;
  $7 = $0;
  $8 = $y_offset;
  $9 = $2;
  $10 = (($9) + ($8<<1)|0);
  $11 = $u_offset;
  $12 = $2;
  $13 = (($12) + ($11<<1)|0);
  $14 = $3;
  mftCall_viiii($6|0,($7|0),($10|0),($13|0),($14|0));
  $15 = $y_offset;
  $16 = (($15) + 8)|0;
  $y_offset = $16;
  $17 = $u_offset;
  $18 = (($17) + 8)|0;
  $u_offset = $18;
  $19 = $3;
  $20 = (($19) + 32)|0;
  $3 = $20;
  $21 = $i;
  $22 = (($21) + 1)|0;
  $i = $22;
 }
 STACKTOP = sp;return;
}
function _GetUYVY($y1,$y2,$u,$v) {
 $y1 = $y1|0;
 $y2 = $y2|0;
 $u = $u|0;
 $v = $v|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $y1;
 $1 = $y2;
 $2 = $u;
 $3 = $v;
 $4 = $2;
 $5 = (_clamp_u8($4)|0);
 $6 = $5&255;
 $7 = $6 << 24;
 $8 = $0;
 $9 = (_clamp_u8($8)|0);
 $10 = $9&255;
 $11 = $10 << 16;
 $12 = $7 | $11;
 $13 = $3;
 $14 = (_clamp_u8($13)|0);
 $15 = $14&255;
 $16 = $15 << 8;
 $17 = $12 | $16;
 $18 = $1;
 $19 = (_clamp_u8($18)|0);
 $20 = $19&255;
 $21 = $17 | $20;
 STACKTOP = sp;return ($21|0);
}
function _dram_store_u32($hle,$src,$address,$count) {
 $hle = $hle|0;
 $src = $src|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $src;
 $2 = $address;
 $3 = $count;
 $4 = $0;
 $5 = HEAP32[$4>>2]|0;
 $6 = $2;
 $7 = $6 & 16777215;
 $8 = $1;
 $9 = $3;
 _store_u32($5,$7,$8,$9);
 STACKTOP = sp;return;
}
function _clamp_u8($x) {
 $x = $x|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $0;
 $2 = $1 << 16 >> 16;
 $3 = $2 & 65280;
 $4 = ($3|0)!=(0);
 $5 = $0;
 $6 = $5 << 16 >> 16;
 if ($4) {
  $7 = (0 - ($6))|0;
  $8 = $7 >> 15;
  $9 = $8 & 255;
  $11 = $9;
 } else {
  $11 = $6;
 }
 $10 = $11&255;
 STACKTOP = sp;return ($10|0);
}
function _clamp_s12($x) {
 $x = $x|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $0;
 $2 = $1 << 16 >> 16;
 $3 = ($2|0)<(-2048);
 if ($3) {
  $0 = -2048;
 } else {
  $4 = $0;
  $5 = $4 << 16 >> 16;
  $6 = ($5|0)>(2032);
  if ($6) {
   $0 = 2032;
  }
 }
 $7 = $0;
 STACKTOP = sp;return ($7|0);
}
function _load_u8($dst,$buffer,$address,$count) {
 $dst = $dst|0;
 $buffer = $buffer|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $buffer;
 $2 = $address;
 $3 = $count;
 while(1) {
  $4 = $3;
  $5 = ($4|0)!=(0);
  if (!($5)) {
   break;
  }
  $6 = $1;
  $7 = $2;
  $8 = (_u8_83($6,$7)|0);
  $9 = HEAP8[$8>>0]|0;
  $10 = $0;
  $11 = ((($10)) + 1|0);
  $0 = $11;
  HEAP8[$10>>0] = $9;
  $12 = $2;
  $13 = (($12) + 1)|0;
  $2 = $13;
  $14 = $3;
  $15 = (($14) + -1)|0;
  $3 = $15;
 }
 STACKTOP = sp;return;
}
function _load_u16($dst,$buffer,$address,$count) {
 $dst = $dst|0;
 $buffer = $buffer|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $buffer;
 $2 = $address;
 $3 = $count;
 while(1) {
  $4 = $3;
  $5 = ($4|0)!=(0);
  if (!($5)) {
   break;
  }
  $6 = $1;
  $7 = $2;
  $8 = (_u16_84($6,$7)|0);
  $9 = HEAP16[$8>>1]|0;
  $10 = $0;
  $11 = ((($10)) + 2|0);
  $0 = $11;
  HEAP16[$10>>1] = $9;
  $12 = $2;
  $13 = (($12) + 2)|0;
  $2 = $13;
  $14 = $3;
  $15 = (($14) + -1)|0;
  $3 = $15;
 }
 STACKTOP = sp;return;
}
function _load_u32($dst,$buffer,$address,$count) {
 $dst = $dst|0;
 $buffer = $buffer|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $buffer;
 $2 = $address;
 $3 = $count;
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = (_u32_85($5,$6)|0);
 $8 = $3;
 $9 = $8<<2;
 _memcpy(($4|0),($7|0),($9|0))|0;
 STACKTOP = sp;return;
}
function _store_u8($buffer,$address,$src,$count) {
 $buffer = $buffer|0;
 $address = $address|0;
 $src = $src|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $src;
 $3 = $count;
 while(1) {
  $4 = $3;
  $5 = ($4|0)!=(0);
  if (!($5)) {
   break;
  }
  $6 = $2;
  $7 = ((($6)) + 1|0);
  $2 = $7;
  $8 = HEAP8[$6>>0]|0;
  $9 = $0;
  $10 = $1;
  $11 = (_u8_83($9,$10)|0);
  HEAP8[$11>>0] = $8;
  $12 = $1;
  $13 = (($12) + 1)|0;
  $1 = $13;
  $14 = $3;
  $15 = (($14) + -1)|0;
  $3 = $15;
 }
 STACKTOP = sp;return;
}
function _store_u16($buffer,$address,$src,$count) {
 $buffer = $buffer|0;
 $address = $address|0;
 $src = $src|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $src;
 $3 = $count;
 while(1) {
  $4 = $3;
  $5 = ($4|0)!=(0);
  if (!($5)) {
   break;
  }
  $6 = $2;
  $7 = ((($6)) + 2|0);
  $2 = $7;
  $8 = HEAP16[$6>>1]|0;
  $9 = $0;
  $10 = $1;
  $11 = (_u16_84($9,$10)|0);
  HEAP16[$11>>1] = $8;
  $12 = $1;
  $13 = (($12) + 2)|0;
  $1 = $13;
  $14 = $3;
  $15 = (($14) + -1)|0;
  $3 = $15;
 }
 STACKTOP = sp;return;
}
function _store_u32($buffer,$address,$src,$count) {
 $buffer = $buffer|0;
 $address = $address|0;
 $src = $src|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $src;
 $3 = $count;
 $4 = $0;
 $5 = $1;
 $6 = (_u32_85($4,$5)|0);
 $7 = $2;
 $8 = $3;
 $9 = $8<<2;
 _memcpy(($6|0),($7|0),($9|0))|0;
 STACKTOP = sp;return;
}
function _u8_83($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $0;
 $3 = $1;
 $4 = $3 ^ 3;
 $5 = (($2) + ($4)|0);
 STACKTOP = sp;return ($5|0);
}
function _u16_84($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $1;
 $3 = $2 & 1;
 $4 = ($3|0)==(0);
 if ($4) {
  $5 = $0;
  $6 = $1;
  $7 = $6 ^ 2;
  $8 = (($5) + ($7)|0);
  STACKTOP = sp;return ($8|0);
 } else {
  ___assert_fail(((gb + (6603) | 0)|0),((gb + (6622) | 0)|0),74,((gb + (6641) | 0)|0));
  // unreachable;
 }
 return (0)|0;
}
function _u32_85($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $1;
 $3 = $2 & 3;
 $4 = ($3|0)==(0);
 if ($4) {
  $5 = $0;
  $6 = $1;
  $7 = (($5) + ($6)|0);
  STACKTOP = sp;return ($7|0);
 } else {
  ___assert_fail(((gb + (6645) | 0)|0),((gb + (6622) | 0)|0),80,((gb + (6664) | 0)|0));
  // unreachable;
 }
 return (0)|0;
}
function _mp3_task($hle,$index,$address) {
 $hle = $hle|0;
 $index = $index|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $7 = 0, $8 = 0, $9 = 0, $cnt = 0, $cnt2 = 0, $inPtr = 0, $outPtr = 0, $readPtr = 0, $t4 = 0, $t5 = 0, $t6 = 0, $tmp = 0, $writePtr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $index;
 $2 = $address;
 $t6 = 2208;
 $t5 = 2752;
 $3 = $1;
 $t4 = $3;
 $4 = $2;
 $readPtr = $4;
 $writePtr = $4;
 $5 = $0;
 $6 = ((($5)) + 5112|0);
 $7 = ((($6)) + 3304|0);
 $8 = $0;
 $9 = HEAP32[$8>>2]|0;
 $10 = $readPtr;
 $11 = (($9) + ($10)|0);
 ;HEAP8[$7>>0]=HEAP8[$11>>0]|0;HEAP8[$7+1>>0]=HEAP8[$11+1>>0]|0;HEAP8[$7+2>>0]=HEAP8[$11+2>>0]|0;HEAP8[$7+3>>0]=HEAP8[$11+3>>0]|0;HEAP8[$7+4>>0]=HEAP8[$11+4>>0]|0;HEAP8[$7+5>>0]=HEAP8[$11+5>>0]|0;HEAP8[$7+6>>0]=HEAP8[$11+6>>0]|0;HEAP8[$7+7>>0]=HEAP8[$11+7>>0]|0;
 $12 = $readPtr;
 $13 = (($12) + 8)|0;
 $readPtr = $13;
 $cnt = 0;
 while(1) {
  $14 = $cnt;
  $15 = ($14|0)<(1152);
  if (!($15)) {
   break;
  }
  $16 = $0;
  $17 = ((($16)) + 5112|0);
  $18 = ((($17)) + 3312|0);
  $19 = $0;
  $20 = HEAP32[$19>>2]|0;
  $21 = $readPtr;
  $22 = (($20) + ($21)|0);
  _memcpy(($18|0),($22|0),384)|0;
  $inPtr = 3312;
  $outPtr = 3696;
  $cnt2 = 0;
  while(1) {
   $23 = $cnt2;
   $24 = ($23|0)<(384);
   if (!($24)) {
    break;
   }
   $25 = $t6;
   $26 = $25 & 65504;
   $t6 = $26;
   $27 = $t5;
   $28 = $27 & 65504;
   $t5 = $28;
   $29 = $t4;
   $30 = $t6;
   $31 = $30 | $29;
   $t6 = $31;
   $32 = $t4;
   $33 = $t5;
   $34 = $33 | $32;
   $t5 = $34;
   $35 = $0;
   $36 = $outPtr;
   $37 = $inPtr;
   $38 = $t6;
   $39 = $t5;
   $40 = $t4;
   _InnerLoop($35,$36,$37,$38,$39,$40);
   $41 = $t4;
   $42 = (($41) - 2)|0;
   $43 = $42 & 30;
   $t4 = $43;
   $44 = $t6;
   $tmp = $44;
   $45 = $t5;
   $t6 = $45;
   $46 = $tmp;
   $t5 = $46;
   $47 = $inPtr;
   $48 = (($47) + 64)|0;
   $inPtr = $48;
   $49 = $outPtr;
   $50 = (($49) + 64)|0;
   $outPtr = $50;
   $51 = $cnt2;
   $52 = (($51) + 64)|0;
   $cnt2 = $52;
  }
  $53 = $0;
  $54 = HEAP32[$53>>2]|0;
  $55 = $writePtr;
  $56 = (($54) + ($55)|0);
  $57 = $0;
  $58 = ((($57)) + 5112|0);
  $59 = ((($58)) + 3696|0);
  _memcpy(($56|0),($59|0),384)|0;
  $60 = $writePtr;
  $61 = (($60) + 384)|0;
  $writePtr = $61;
  $62 = $readPtr;
  $63 = (($62) + 384)|0;
  $readPtr = $63;
  $64 = $cnt;
  $65 = (($64) + 384)|0;
  $cnt = $65;
 }
 STACKTOP = sp;return;
}
function _InnerLoop($hle,$outPtr,$inPtr,$t6,$t5,$t4) {
 $hle = $hle|0;
 $outPtr = $outPtr|0;
 $inPtr = $inPtr|0;
 $t6 = $t6|0;
 $t5 = $t5|0;
 $t4 = $t4|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0, $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0;
 var $1015 = 0, $1016 = 0, $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0, $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0;
 var $1033 = 0, $1034 = 0, $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0, $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0;
 var $1051 = 0, $1052 = 0, $1053 = 0, $1054 = 0, $1055 = 0, $1056 = 0, $1057 = 0, $1058 = 0, $1059 = 0, $106 = 0, $1060 = 0, $1061 = 0, $1062 = 0, $1063 = 0, $1064 = 0, $1065 = 0, $1066 = 0, $1067 = 0, $1068 = 0, $1069 = 0;
 var $107 = 0, $1070 = 0, $1071 = 0, $1072 = 0, $1073 = 0, $1074 = 0, $1075 = 0, $1076 = 0, $1077 = 0, $1078 = 0, $1079 = 0, $108 = 0, $1080 = 0, $1081 = 0, $1082 = 0, $1083 = 0, $1084 = 0, $1085 = 0, $1086 = 0, $1087 = 0;
 var $1088 = 0, $1089 = 0, $109 = 0, $1090 = 0, $1091 = 0, $1092 = 0, $1093 = 0, $1094 = 0, $1095 = 0, $1096 = 0, $1097 = 0, $1098 = 0, $1099 = 0, $11 = 0, $110 = 0, $1100 = 0, $1101 = 0, $1102 = 0, $1103 = 0, $1104 = 0;
 var $1105 = 0, $1106 = 0, $1107 = 0, $1108 = 0, $1109 = 0, $111 = 0, $1110 = 0, $1111 = 0, $1112 = 0, $1113 = 0, $1114 = 0, $1115 = 0, $1116 = 0, $1117 = 0, $1118 = 0, $1119 = 0, $112 = 0, $1120 = 0, $1121 = 0, $1122 = 0;
 var $1123 = 0, $1124 = 0, $1125 = 0, $1126 = 0, $1127 = 0, $1128 = 0, $1129 = 0, $113 = 0, $1130 = 0, $1131 = 0, $1132 = 0, $1133 = 0, $1134 = 0, $1135 = 0, $1136 = 0, $1137 = 0, $1138 = 0, $1139 = 0, $114 = 0, $1140 = 0;
 var $1141 = 0, $1142 = 0, $1143 = 0, $1144 = 0, $1145 = 0, $1146 = 0, $1147 = 0, $1148 = 0, $1149 = 0, $115 = 0, $1150 = 0, $1151 = 0, $1152 = 0, $1153 = 0, $1154 = 0, $1155 = 0, $1156 = 0, $1157 = 0, $1158 = 0, $1159 = 0;
 var $116 = 0, $1160 = 0, $1161 = 0, $1162 = 0, $1163 = 0, $1164 = 0, $1165 = 0, $1166 = 0, $1167 = 0, $1168 = 0, $1169 = 0, $117 = 0, $1170 = 0, $1171 = 0, $1172 = 0, $1173 = 0, $1174 = 0, $1175 = 0, $1176 = 0, $1177 = 0;
 var $1178 = 0, $1179 = 0, $118 = 0, $1180 = 0, $1181 = 0, $1182 = 0, $1183 = 0, $1184 = 0, $1185 = 0, $1186 = 0, $1187 = 0, $1188 = 0, $1189 = 0, $119 = 0, $1190 = 0, $1191 = 0, $1192 = 0, $1193 = 0, $1194 = 0, $1195 = 0;
 var $1196 = 0, $1197 = 0, $1198 = 0, $1199 = 0, $12 = 0, $120 = 0, $1200 = 0, $1201 = 0, $1202 = 0, $1203 = 0, $1204 = 0, $1205 = 0, $1206 = 0, $1207 = 0, $1208 = 0, $1209 = 0, $121 = 0, $1210 = 0, $1211 = 0, $1212 = 0;
 var $1213 = 0, $1214 = 0, $1215 = 0, $1216 = 0, $1217 = 0, $1218 = 0, $1219 = 0, $122 = 0, $1220 = 0, $1221 = 0, $1222 = 0, $1223 = 0, $1224 = 0, $1225 = 0, $1226 = 0, $1227 = 0, $1228 = 0, $1229 = 0, $123 = 0, $1230 = 0;
 var $1231 = 0, $1232 = 0, $1233 = 0, $1234 = 0, $1235 = 0, $1236 = 0, $1237 = 0, $1238 = 0, $1239 = 0, $124 = 0, $1240 = 0, $1241 = 0, $1242 = 0, $1243 = 0, $1244 = 0, $1245 = 0, $1246 = 0, $1247 = 0, $1248 = 0, $1249 = 0;
 var $125 = 0, $1250 = 0, $1251 = 0, $1252 = 0, $1253 = 0, $1254 = 0, $1255 = 0, $1256 = 0, $1257 = 0, $1258 = 0, $1259 = 0, $126 = 0, $1260 = 0, $1261 = 0, $1262 = 0, $1263 = 0, $1264 = 0, $1265 = 0, $1266 = 0, $1267 = 0;
 var $1268 = 0, $1269 = 0, $127 = 0, $1270 = 0, $1271 = 0, $1272 = 0, $1273 = 0, $1274 = 0, $1275 = 0, $1276 = 0, $1277 = 0, $1278 = 0, $1279 = 0, $128 = 0, $1280 = 0, $1281 = 0, $1282 = 0, $1283 = 0, $1284 = 0, $1285 = 0;
 var $1286 = 0, $1287 = 0, $1288 = 0, $1289 = 0, $129 = 0, $1290 = 0, $1291 = 0, $1292 = 0, $1293 = 0, $1294 = 0, $1295 = 0, $1296 = 0, $1297 = 0, $1298 = 0, $1299 = 0, $13 = 0, $130 = 0, $1300 = 0, $1301 = 0, $1302 = 0;
 var $1303 = 0, $1304 = 0, $1305 = 0, $1306 = 0, $1307 = 0, $1308 = 0, $1309 = 0, $131 = 0, $1310 = 0, $1311 = 0, $1312 = 0, $1313 = 0, $1314 = 0, $1315 = 0, $1316 = 0, $1317 = 0, $1318 = 0, $1319 = 0, $132 = 0, $1320 = 0;
 var $1321 = 0, $1322 = 0, $1323 = 0, $1324 = 0, $1325 = 0, $1326 = 0, $1327 = 0, $1328 = 0, $1329 = 0, $133 = 0, $1330 = 0, $1331 = 0, $1332 = 0, $1333 = 0, $1334 = 0, $1335 = 0, $1336 = 0, $1337 = 0, $1338 = 0, $1339 = 0;
 var $134 = 0, $1340 = 0, $1341 = 0, $1342 = 0, $1343 = 0, $1344 = 0, $1345 = 0, $1346 = 0, $1347 = 0, $1348 = 0, $1349 = 0, $135 = 0, $1350 = 0, $1351 = 0, $1352 = 0, $1353 = 0, $1354 = 0, $1355 = 0, $1356 = 0, $1357 = 0;
 var $1358 = 0, $1359 = 0, $136 = 0, $1360 = 0, $1361 = 0, $1362 = 0, $1363 = 0, $1364 = 0, $1365 = 0, $1366 = 0, $1367 = 0, $1368 = 0, $1369 = 0, $137 = 0, $1370 = 0, $1371 = 0, $1372 = 0, $1373 = 0, $1374 = 0, $1375 = 0;
 var $1376 = 0, $1377 = 0, $1378 = 0, $1379 = 0, $138 = 0, $1380 = 0, $1381 = 0, $1382 = 0, $1383 = 0, $1384 = 0, $1385 = 0, $1386 = 0, $1387 = 0, $1388 = 0, $1389 = 0, $139 = 0, $1390 = 0, $1391 = 0, $1392 = 0, $1393 = 0;
 var $1394 = 0, $1395 = 0, $1396 = 0, $1397 = 0, $1398 = 0, $1399 = 0, $14 = 0, $140 = 0, $1400 = 0, $1401 = 0, $1402 = 0, $1403 = 0, $1404 = 0, $1405 = 0, $1406 = 0, $1407 = 0, $1408 = 0, $1409 = 0, $141 = 0, $1410 = 0;
 var $1411 = 0, $1412 = 0, $1413 = 0, $1414 = 0, $1415 = 0, $1416 = 0, $1417 = 0, $1418 = 0, $1419 = 0, $142 = 0, $1420 = 0, $1421 = 0, $1422 = 0, $1423 = 0, $1424 = 0, $1425 = 0, $1426 = 0, $1427 = 0, $1428 = 0, $1429 = 0;
 var $143 = 0, $1430 = 0, $1431 = 0, $1432 = 0, $1433 = 0, $1434 = 0, $1435 = 0, $1436 = 0, $1437 = 0, $1438 = 0, $1439 = 0, $144 = 0, $1440 = 0, $1441 = 0, $1442 = 0, $1443 = 0, $1444 = 0, $1445 = 0, $1446 = 0, $1447 = 0;
 var $1448 = 0, $1449 = 0, $145 = 0, $1450 = 0, $1451 = 0, $1452 = 0, $1453 = 0, $1454 = 0, $1455 = 0, $1456 = 0, $1457 = 0, $1458 = 0, $1459 = 0, $146 = 0, $1460 = 0, $1461 = 0, $1462 = 0, $1463 = 0, $1464 = 0, $1465 = 0;
 var $1466 = 0, $1467 = 0, $1468 = 0, $1469 = 0, $147 = 0, $1470 = 0, $1471 = 0, $1472 = 0, $1473 = 0, $1474 = 0, $1475 = 0, $1476 = 0, $1477 = 0, $1478 = 0, $1479 = 0, $148 = 0, $1480 = 0, $1481 = 0, $1482 = 0, $1483 = 0;
 var $1484 = 0, $1485 = 0, $1486 = 0, $1487 = 0, $1488 = 0, $1489 = 0, $149 = 0, $1490 = 0, $1491 = 0, $1492 = 0, $1493 = 0, $1494 = 0, $1495 = 0, $1496 = 0, $1497 = 0, $1498 = 0, $1499 = 0, $15 = 0, $150 = 0, $1500 = 0;
 var $1501 = 0, $1502 = 0, $1503 = 0, $1504 = 0, $1505 = 0, $1506 = 0, $1507 = 0, $1508 = 0, $1509 = 0, $151 = 0, $1510 = 0, $1511 = 0, $1512 = 0, $1513 = 0, $1514 = 0, $1515 = 0, $1516 = 0, $1517 = 0, $1518 = 0, $1519 = 0;
 var $152 = 0, $1520 = 0, $1521 = 0, $1522 = 0, $1523 = 0, $1524 = 0, $1525 = 0, $1526 = 0, $1527 = 0, $1528 = 0, $1529 = 0, $153 = 0, $1530 = 0, $1531 = 0, $1532 = 0, $1533 = 0, $1534 = 0, $1535 = 0, $1536 = 0, $1537 = 0;
 var $1538 = 0, $1539 = 0, $154 = 0, $1540 = 0, $1541 = 0, $1542 = 0, $1543 = 0, $1544 = 0, $1545 = 0, $1546 = 0, $1547 = 0, $1548 = 0, $1549 = 0, $155 = 0, $1550 = 0, $1551 = 0, $1552 = 0, $1553 = 0, $1554 = 0, $1555 = 0;
 var $1556 = 0, $1557 = 0, $1558 = 0, $1559 = 0, $156 = 0, $1560 = 0, $1561 = 0, $1562 = 0, $1563 = 0, $1564 = 0, $1565 = 0, $1566 = 0, $1567 = 0, $1568 = 0, $1569 = 0, $157 = 0, $1570 = 0, $1571 = 0, $1572 = 0, $1573 = 0;
 var $1574 = 0, $1575 = 0, $1576 = 0, $1577 = 0, $1578 = 0, $1579 = 0, $158 = 0, $1580 = 0, $1581 = 0, $1582 = 0, $1583 = 0, $1584 = 0, $1585 = 0, $1586 = 0, $1587 = 0, $1588 = 0, $1589 = 0, $159 = 0, $1590 = 0, $1591 = 0;
 var $1592 = 0, $1593 = 0, $1594 = 0, $1595 = 0, $1596 = 0, $1597 = 0, $1598 = 0, $1599 = 0, $16 = 0, $160 = 0, $1600 = 0, $1601 = 0, $1602 = 0, $1603 = 0, $1604 = 0, $1605 = 0, $1606 = 0, $1607 = 0, $1608 = 0, $1609 = 0;
 var $161 = 0, $1610 = 0, $1611 = 0, $1612 = 0, $1613 = 0, $1614 = 0, $1615 = 0, $1616 = 0, $1617 = 0, $1618 = 0, $1619 = 0, $162 = 0, $1620 = 0, $1621 = 0, $1622 = 0, $1623 = 0, $1624 = 0, $1625 = 0, $1626 = 0, $1627 = 0;
 var $1628 = 0, $1629 = 0, $163 = 0, $1630 = 0, $1631 = 0, $1632 = 0, $1633 = 0, $1634 = 0, $1635 = 0, $1636 = 0, $1637 = 0, $1638 = 0, $1639 = 0, $164 = 0, $1640 = 0, $1641 = 0, $1642 = 0, $1643 = 0, $1644 = 0, $1645 = 0;
 var $1646 = 0, $1647 = 0, $1648 = 0, $1649 = 0, $165 = 0, $1650 = 0, $1651 = 0, $1652 = 0, $1653 = 0, $1654 = 0, $1655 = 0, $1656 = 0, $1657 = 0, $1658 = 0, $1659 = 0, $166 = 0, $1660 = 0, $1661 = 0, $1662 = 0, $1663 = 0;
 var $1664 = 0, $1665 = 0, $1666 = 0, $1667 = 0, $1668 = 0, $1669 = 0, $167 = 0, $1670 = 0, $1671 = 0, $1672 = 0, $1673 = 0, $1674 = 0, $1675 = 0, $1676 = 0, $1677 = 0, $1678 = 0, $1679 = 0, $168 = 0, $1680 = 0, $1681 = 0;
 var $1682 = 0, $1683 = 0, $1684 = 0, $1685 = 0, $1686 = 0, $1687 = 0, $1688 = 0, $1689 = 0, $169 = 0, $1690 = 0, $1691 = 0, $1692 = 0, $1693 = 0, $1694 = 0, $1695 = 0, $1696 = 0, $1697 = 0, $1698 = 0, $1699 = 0, $17 = 0;
 var $170 = 0, $1700 = 0, $1701 = 0, $1702 = 0, $1703 = 0, $1704 = 0, $1705 = 0, $1706 = 0, $1707 = 0, $1708 = 0, $1709 = 0, $171 = 0, $1710 = 0, $1711 = 0, $1712 = 0, $1713 = 0, $1714 = 0, $1715 = 0, $1716 = 0, $1717 = 0;
 var $1718 = 0, $1719 = 0, $172 = 0, $1720 = 0, $1721 = 0, $1722 = 0, $1723 = 0, $1724 = 0, $1725 = 0, $1726 = 0, $1727 = 0, $1728 = 0, $1729 = 0, $173 = 0, $1730 = 0, $1731 = 0, $1732 = 0, $1733 = 0, $1734 = 0, $1735 = 0;
 var $1736 = 0, $1737 = 0, $1738 = 0, $1739 = 0, $174 = 0, $1740 = 0, $1741 = 0, $1742 = 0, $1743 = 0, $1744 = 0, $1745 = 0, $1746 = 0, $1747 = 0, $1748 = 0, $1749 = 0, $175 = 0, $1750 = 0, $1751 = 0, $1752 = 0, $1753 = 0;
 var $1754 = 0, $1755 = 0, $1756 = 0, $1757 = 0, $1758 = 0, $1759 = 0, $176 = 0, $1760 = 0, $1761 = 0, $1762 = 0, $1763 = 0, $1764 = 0, $1765 = 0, $1766 = 0, $1767 = 0, $1768 = 0, $1769 = 0, $177 = 0, $1770 = 0, $1771 = 0;
 var $1772 = 0, $1773 = 0, $1774 = 0, $1775 = 0, $1776 = 0, $1777 = 0, $1778 = 0, $1779 = 0, $178 = 0, $1780 = 0, $1781 = 0, $1782 = 0, $1783 = 0, $1784 = 0, $1785 = 0, $1786 = 0, $1787 = 0, $1788 = 0, $1789 = 0, $179 = 0;
 var $1790 = 0, $1791 = 0, $1792 = 0, $1793 = 0, $1794 = 0, $1795 = 0, $1796 = 0, $1797 = 0, $1798 = 0, $1799 = 0, $18 = 0, $180 = 0, $1800 = 0, $1801 = 0, $1802 = 0, $1803 = 0, $1804 = 0, $1805 = 0, $1806 = 0, $1807 = 0;
 var $1808 = 0, $1809 = 0, $181 = 0, $1810 = 0, $1811 = 0, $1812 = 0, $1813 = 0, $1814 = 0, $1815 = 0, $1816 = 0, $1817 = 0, $1818 = 0, $1819 = 0, $182 = 0, $1820 = 0, $1821 = 0, $1822 = 0, $1823 = 0, $1824 = 0, $1825 = 0;
 var $1826 = 0, $1827 = 0, $1828 = 0, $1829 = 0, $183 = 0, $1830 = 0, $1831 = 0, $1832 = 0, $1833 = 0, $1834 = 0, $1835 = 0, $1836 = 0, $1837 = 0, $1838 = 0, $1839 = 0, $184 = 0, $1840 = 0, $1841 = 0, $1842 = 0, $1843 = 0;
 var $1844 = 0, $1845 = 0, $1846 = 0, $1847 = 0, $1848 = 0, $1849 = 0, $185 = 0, $1850 = 0, $1851 = 0, $1852 = 0, $1853 = 0, $1854 = 0, $1855 = 0, $1856 = 0, $1857 = 0, $1858 = 0, $1859 = 0, $186 = 0, $1860 = 0, $1861 = 0;
 var $1862 = 0, $1863 = 0, $1864 = 0, $1865 = 0, $1866 = 0, $1867 = 0, $1868 = 0, $1869 = 0, $187 = 0, $1870 = 0, $1871 = 0, $1872 = 0, $1873 = 0, $1874 = 0, $1875 = 0, $1876 = 0, $1877 = 0, $1878 = 0, $1879 = 0, $188 = 0;
 var $1880 = 0, $1881 = 0, $1882 = 0, $1883 = 0, $1884 = 0, $1885 = 0, $1886 = 0, $1887 = 0, $1888 = 0, $1889 = 0, $189 = 0, $1890 = 0, $1891 = 0, $1892 = 0, $1893 = 0, $1894 = 0, $1895 = 0, $1896 = 0, $1897 = 0, $1898 = 0;
 var $1899 = 0, $19 = 0, $190 = 0, $1900 = 0, $1901 = 0, $1902 = 0, $1903 = 0, $1904 = 0, $1905 = 0, $1906 = 0, $1907 = 0, $1908 = 0, $1909 = 0, $191 = 0, $1910 = 0, $1911 = 0, $1912 = 0, $1913 = 0, $1914 = 0, $1915 = 0;
 var $1916 = 0, $1917 = 0, $1918 = 0, $1919 = 0, $192 = 0, $1920 = 0, $1921 = 0, $1922 = 0, $1923 = 0, $1924 = 0, $1925 = 0, $1926 = 0, $1927 = 0, $1928 = 0, $1929 = 0, $193 = 0, $1930 = 0, $1931 = 0, $1932 = 0, $1933 = 0;
 var $1934 = 0, $1935 = 0, $1936 = 0, $1937 = 0, $1938 = 0, $1939 = 0, $194 = 0, $1940 = 0, $1941 = 0, $1942 = 0, $1943 = 0, $1944 = 0, $1945 = 0, $1946 = 0, $1947 = 0, $1948 = 0, $1949 = 0, $195 = 0, $1950 = 0, $1951 = 0;
 var $1952 = 0, $1953 = 0, $1954 = 0, $1955 = 0, $1956 = 0, $1957 = 0, $1958 = 0, $1959 = 0, $196 = 0, $1960 = 0, $1961 = 0, $1962 = 0, $1963 = 0, $1964 = 0, $1965 = 0, $1966 = 0, $1967 = 0, $1968 = 0, $1969 = 0, $197 = 0;
 var $1970 = 0, $1971 = 0, $1972 = 0, $1973 = 0, $1974 = 0, $1975 = 0, $1976 = 0, $1977 = 0, $1978 = 0, $1979 = 0, $198 = 0, $1980 = 0, $1981 = 0, $1982 = 0, $1983 = 0, $1984 = 0, $1985 = 0, $1986 = 0, $1987 = 0, $1988 = 0;
 var $1989 = 0, $199 = 0, $1990 = 0, $1991 = 0, $1992 = 0, $1993 = 0, $1994 = 0, $1995 = 0, $1996 = 0, $1997 = 0, $1998 = 0, $1999 = 0, $2 = 0, $20 = 0, $200 = 0, $2000 = 0, $2001 = 0, $2002 = 0, $2003 = 0, $2004 = 0;
 var $2005 = 0, $2006 = 0, $2007 = 0, $2008 = 0, $2009 = 0, $201 = 0, $2010 = 0, $2011 = 0, $2012 = 0, $2013 = 0, $2014 = 0, $2015 = 0, $2016 = 0, $2017 = 0, $2018 = 0, $2019 = 0, $202 = 0, $2020 = 0, $2021 = 0, $2022 = 0;
 var $2023 = 0, $2024 = 0, $2025 = 0, $2026 = 0, $2027 = 0, $2028 = 0, $2029 = 0, $203 = 0, $2030 = 0, $2031 = 0, $2032 = 0, $2033 = 0, $2034 = 0, $2035 = 0, $2036 = 0, $2037 = 0, $2038 = 0, $2039 = 0, $204 = 0, $2040 = 0;
 var $2041 = 0, $2042 = 0, $2043 = 0, $2044 = 0, $2045 = 0, $2046 = 0, $2047 = 0, $2048 = 0, $2049 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0;
 var $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0;
 var $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0;
 var $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0;
 var $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0;
 var $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0;
 var $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0;
 var $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0;
 var $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0;
 var $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0;
 var $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0;
 var $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0;
 var $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0;
 var $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0;
 var $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0;
 var $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0;
 var $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0;
 var $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0;
 var $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0;
 var $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0;
 var $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0;
 var $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0;
 var $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0;
 var $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0;
 var $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0;
 var $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0;
 var $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0;
 var $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0;
 var $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0;
 var $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0;
 var $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0;
 var $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0;
 var $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0;
 var $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0, $809 = 0;
 var $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0, $827 = 0;
 var $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0, $845 = 0;
 var $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0, $860 = 0, $861 = 0, $862 = 0, $863 = 0;
 var $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0, $879 = 0, $88 = 0, $880 = 0, $881 = 0;
 var $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0, $897 = 0, $898 = 0, $899 = 0, $9 = 0;
 var $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0, $914 = 0, $915 = 0, $916 = 0, $917 = 0;
 var $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0, $932 = 0, $933 = 0, $934 = 0, $935 = 0;
 var $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0, $950 = 0, $951 = 0, $952 = 0, $953 = 0;
 var $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0, $969 = 0, $97 = 0, $970 = 0, $971 = 0;
 var $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0, $987 = 0, $988 = 0, $989 = 0, $99 = 0;
 var $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $addptr = 0, $hi0 = 0, $hi1 = 0, $i = 0, $mult4 = 0, $mult6 = 0, $offset = 0, $t0 = 0, $t1 = 0, $t2 = 0;
 var $t3 = 0, $tmp = 0, $v = 0, $v0 = 0, $v01 = 0, $v18 = 0, $v182 = 0, $v2 = 0, $v4 = 0, $v6 = 0, $v8 = 0, $vt = 0, $x = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 240|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $v = sp + 16|0;
 $0 = $hle;
 $1 = $outPtr;
 $2 = $inPtr;
 $3 = $t6;
 $4 = $t5;
 $5 = $t4;
 $v2 = 0;
 $v4 = 0;
 $v6 = 0;
 $v8 = 0;
 $6 = $0;
 $7 = ((($6)) + 5112|0);
 $8 = $2;
 $9 = (($7) + ($8)|0);
 $10 = ((($9)) + 2|0);
 $11 = HEAP16[$10>>1]|0;
 $12 = $11 << 16 >> 16;
 HEAP32[$v>>2] = $12;
 $13 = $0;
 $14 = ((($13)) + 5112|0);
 $15 = $2;
 $16 = (($14) + ($15)|0);
 $17 = ((($16)) + 60|0);
 $18 = HEAP16[$17>>1]|0;
 $19 = $18 << 16 >> 16;
 $20 = ((($v)) + 124|0);
 HEAP32[$20>>2] = $19;
 $21 = ((($v)) + 124|0);
 $22 = HEAP32[$21>>2]|0;
 $23 = HEAP32[$v>>2]|0;
 $24 = (($23) + ($22))|0;
 HEAP32[$v>>2] = $24;
 $25 = $0;
 $26 = ((($25)) + 5112|0);
 $27 = $2;
 $28 = (($26) + ($27)|0);
 $29 = HEAP16[$28>>1]|0;
 $30 = $29 << 16 >> 16;
 $31 = ((($v)) + 4|0);
 HEAP32[$31>>2] = $30;
 $32 = $0;
 $33 = ((($32)) + 5112|0);
 $34 = $2;
 $35 = (($33) + ($34)|0);
 $36 = ((($35)) + 62|0);
 $37 = HEAP16[$36>>1]|0;
 $38 = $37 << 16 >> 16;
 $39 = ((($v)) + 120|0);
 HEAP32[$39>>2] = $38;
 $40 = ((($v)) + 120|0);
 $41 = HEAP32[$40>>2]|0;
 $42 = ((($v)) + 4|0);
 $43 = HEAP32[$42>>2]|0;
 $44 = (($43) + ($41))|0;
 HEAP32[$42>>2] = $44;
 $45 = $0;
 $46 = ((($45)) + 5112|0);
 $47 = $2;
 $48 = (($46) + ($47)|0);
 $49 = ((($48)) + 4|0);
 $50 = HEAP16[$49>>1]|0;
 $51 = $50 << 16 >> 16;
 $52 = ((($v)) + 8|0);
 HEAP32[$52>>2] = $51;
 $53 = $0;
 $54 = ((($53)) + 5112|0);
 $55 = $2;
 $56 = (($54) + ($55)|0);
 $57 = ((($56)) + 58|0);
 $58 = HEAP16[$57>>1]|0;
 $59 = $58 << 16 >> 16;
 $60 = ((($v)) + 112|0);
 HEAP32[$60>>2] = $59;
 $61 = ((($v)) + 112|0);
 $62 = HEAP32[$61>>2]|0;
 $63 = ((($v)) + 8|0);
 $64 = HEAP32[$63>>2]|0;
 $65 = (($64) + ($62))|0;
 HEAP32[$63>>2] = $65;
 $66 = $0;
 $67 = ((($66)) + 5112|0);
 $68 = $2;
 $69 = (($67) + ($68)|0);
 $70 = ((($69)) + 6|0);
 $71 = HEAP16[$70>>1]|0;
 $72 = $71 << 16 >> 16;
 $73 = ((($v)) + 12|0);
 HEAP32[$73>>2] = $72;
 $74 = $0;
 $75 = ((($74)) + 5112|0);
 $76 = $2;
 $77 = (($75) + ($76)|0);
 $78 = ((($77)) + 56|0);
 $79 = HEAP16[$78>>1]|0;
 $80 = $79 << 16 >> 16;
 $81 = ((($v)) + 116|0);
 HEAP32[$81>>2] = $80;
 $82 = ((($v)) + 116|0);
 $83 = HEAP32[$82>>2]|0;
 $84 = ((($v)) + 12|0);
 $85 = HEAP32[$84>>2]|0;
 $86 = (($85) + ($83))|0;
 HEAP32[$84>>2] = $86;
 $87 = $0;
 $88 = ((($87)) + 5112|0);
 $89 = $2;
 $90 = (($88) + ($89)|0);
 $91 = ((($90)) + 12|0);
 $92 = HEAP16[$91>>1]|0;
 $93 = $92 << 16 >> 16;
 $94 = ((($v)) + 16|0);
 HEAP32[$94>>2] = $93;
 $95 = $0;
 $96 = ((($95)) + 5112|0);
 $97 = $2;
 $98 = (($96) + ($97)|0);
 $99 = ((($98)) + 50|0);
 $100 = HEAP16[$99>>1]|0;
 $101 = $100 << 16 >> 16;
 $102 = ((($v)) + 96|0);
 HEAP32[$102>>2] = $101;
 $103 = ((($v)) + 96|0);
 $104 = HEAP32[$103>>2]|0;
 $105 = ((($v)) + 16|0);
 $106 = HEAP32[$105>>2]|0;
 $107 = (($106) + ($104))|0;
 HEAP32[$105>>2] = $107;
 $108 = $0;
 $109 = ((($108)) + 5112|0);
 $110 = $2;
 $111 = (($109) + ($110)|0);
 $112 = ((($111)) + 14|0);
 $113 = HEAP16[$112>>1]|0;
 $114 = $113 << 16 >> 16;
 $115 = ((($v)) + 20|0);
 HEAP32[$115>>2] = $114;
 $116 = $0;
 $117 = ((($116)) + 5112|0);
 $118 = $2;
 $119 = (($117) + ($118)|0);
 $120 = ((($119)) + 48|0);
 $121 = HEAP16[$120>>1]|0;
 $122 = $121 << 16 >> 16;
 $123 = ((($v)) + 100|0);
 HEAP32[$123>>2] = $122;
 $124 = ((($v)) + 100|0);
 $125 = HEAP32[$124>>2]|0;
 $126 = ((($v)) + 20|0);
 $127 = HEAP32[$126>>2]|0;
 $128 = (($127) + ($125))|0;
 HEAP32[$126>>2] = $128;
 $129 = $0;
 $130 = ((($129)) + 5112|0);
 $131 = $2;
 $132 = (($130) + ($131)|0);
 $133 = ((($132)) + 10|0);
 $134 = HEAP16[$133>>1]|0;
 $135 = $134 << 16 >> 16;
 $136 = ((($v)) + 24|0);
 HEAP32[$136>>2] = $135;
 $137 = $0;
 $138 = ((($137)) + 5112|0);
 $139 = $2;
 $140 = (($138) + ($139)|0);
 $141 = ((($140)) + 52|0);
 $142 = HEAP16[$141>>1]|0;
 $143 = $142 << 16 >> 16;
 $144 = ((($v)) + 108|0);
 HEAP32[$144>>2] = $143;
 $145 = ((($v)) + 108|0);
 $146 = HEAP32[$145>>2]|0;
 $147 = ((($v)) + 24|0);
 $148 = HEAP32[$147>>2]|0;
 $149 = (($148) + ($146))|0;
 HEAP32[$147>>2] = $149;
 $150 = $0;
 $151 = ((($150)) + 5112|0);
 $152 = $2;
 $153 = (($151) + ($152)|0);
 $154 = ((($153)) + 8|0);
 $155 = HEAP16[$154>>1]|0;
 $156 = $155 << 16 >> 16;
 $157 = ((($v)) + 28|0);
 HEAP32[$157>>2] = $156;
 $158 = $0;
 $159 = ((($158)) + 5112|0);
 $160 = $2;
 $161 = (($159) + ($160)|0);
 $162 = ((($161)) + 54|0);
 $163 = HEAP16[$162>>1]|0;
 $164 = $163 << 16 >> 16;
 $165 = ((($v)) + 104|0);
 HEAP32[$165>>2] = $164;
 $166 = ((($v)) + 104|0);
 $167 = HEAP32[$166>>2]|0;
 $168 = ((($v)) + 28|0);
 $169 = HEAP32[$168>>2]|0;
 $170 = (($169) + ($167))|0;
 HEAP32[$168>>2] = $170;
 $171 = $0;
 $172 = ((($171)) + 5112|0);
 $173 = $2;
 $174 = (($172) + ($173)|0);
 $175 = ((($174)) + 28|0);
 $176 = HEAP16[$175>>1]|0;
 $177 = $176 << 16 >> 16;
 $178 = ((($v)) + 32|0);
 HEAP32[$178>>2] = $177;
 $179 = $0;
 $180 = ((($179)) + 5112|0);
 $181 = $2;
 $182 = (($180) + ($181)|0);
 $183 = ((($182)) + 34|0);
 $184 = HEAP16[$183>>1]|0;
 $185 = $184 << 16 >> 16;
 $186 = ((($v)) + 64|0);
 HEAP32[$186>>2] = $185;
 $187 = ((($v)) + 64|0);
 $188 = HEAP32[$187>>2]|0;
 $189 = ((($v)) + 32|0);
 $190 = HEAP32[$189>>2]|0;
 $191 = (($190) + ($188))|0;
 HEAP32[$189>>2] = $191;
 $192 = $0;
 $193 = ((($192)) + 5112|0);
 $194 = $2;
 $195 = (($193) + ($194)|0);
 $196 = ((($195)) + 30|0);
 $197 = HEAP16[$196>>1]|0;
 $198 = $197 << 16 >> 16;
 $199 = ((($v)) + 36|0);
 HEAP32[$199>>2] = $198;
 $200 = $0;
 $201 = ((($200)) + 5112|0);
 $202 = $2;
 $203 = (($201) + ($202)|0);
 $204 = ((($203)) + 32|0);
 $205 = HEAP16[$204>>1]|0;
 $206 = $205 << 16 >> 16;
 $207 = ((($v)) + 68|0);
 HEAP32[$207>>2] = $206;
 $208 = ((($v)) + 68|0);
 $209 = HEAP32[$208>>2]|0;
 $210 = ((($v)) + 36|0);
 $211 = HEAP32[$210>>2]|0;
 $212 = (($211) + ($209))|0;
 HEAP32[$210>>2] = $212;
 $213 = $0;
 $214 = ((($213)) + 5112|0);
 $215 = $2;
 $216 = (($214) + ($215)|0);
 $217 = ((($216)) + 26|0);
 $218 = HEAP16[$217>>1]|0;
 $219 = $218 << 16 >> 16;
 $220 = ((($v)) + 40|0);
 HEAP32[$220>>2] = $219;
 $221 = $0;
 $222 = ((($221)) + 5112|0);
 $223 = $2;
 $224 = (($222) + ($223)|0);
 $225 = ((($224)) + 36|0);
 $226 = HEAP16[$225>>1]|0;
 $227 = $226 << 16 >> 16;
 $228 = ((($v)) + 76|0);
 HEAP32[$228>>2] = $227;
 $229 = ((($v)) + 76|0);
 $230 = HEAP32[$229>>2]|0;
 $231 = ((($v)) + 40|0);
 $232 = HEAP32[$231>>2]|0;
 $233 = (($232) + ($230))|0;
 HEAP32[$231>>2] = $233;
 $234 = $0;
 $235 = ((($234)) + 5112|0);
 $236 = $2;
 $237 = (($235) + ($236)|0);
 $238 = ((($237)) + 24|0);
 $239 = HEAP16[$238>>1]|0;
 $240 = $239 << 16 >> 16;
 $241 = ((($v)) + 44|0);
 HEAP32[$241>>2] = $240;
 $242 = $0;
 $243 = ((($242)) + 5112|0);
 $244 = $2;
 $245 = (($243) + ($244)|0);
 $246 = ((($245)) + 38|0);
 $247 = HEAP16[$246>>1]|0;
 $248 = $247 << 16 >> 16;
 $249 = ((($v)) + 72|0);
 HEAP32[$249>>2] = $248;
 $250 = ((($v)) + 72|0);
 $251 = HEAP32[$250>>2]|0;
 $252 = ((($v)) + 44|0);
 $253 = HEAP32[$252>>2]|0;
 $254 = (($253) + ($251))|0;
 HEAP32[$252>>2] = $254;
 $255 = $0;
 $256 = ((($255)) + 5112|0);
 $257 = $2;
 $258 = (($256) + ($257)|0);
 $259 = ((($258)) + 18|0);
 $260 = HEAP16[$259>>1]|0;
 $261 = $260 << 16 >> 16;
 $262 = ((($v)) + 48|0);
 HEAP32[$262>>2] = $261;
 $263 = $0;
 $264 = ((($263)) + 5112|0);
 $265 = $2;
 $266 = (($264) + ($265)|0);
 $267 = ((($266)) + 44|0);
 $268 = HEAP16[$267>>1]|0;
 $269 = $268 << 16 >> 16;
 $270 = ((($v)) + 92|0);
 HEAP32[$270>>2] = $269;
 $271 = ((($v)) + 92|0);
 $272 = HEAP32[$271>>2]|0;
 $273 = ((($v)) + 48|0);
 $274 = HEAP32[$273>>2]|0;
 $275 = (($274) + ($272))|0;
 HEAP32[$273>>2] = $275;
 $276 = $0;
 $277 = ((($276)) + 5112|0);
 $278 = $2;
 $279 = (($277) + ($278)|0);
 $280 = ((($279)) + 16|0);
 $281 = HEAP16[$280>>1]|0;
 $282 = $281 << 16 >> 16;
 $283 = ((($v)) + 52|0);
 HEAP32[$283>>2] = $282;
 $284 = $0;
 $285 = ((($284)) + 5112|0);
 $286 = $2;
 $287 = (($285) + ($286)|0);
 $288 = ((($287)) + 46|0);
 $289 = HEAP16[$288>>1]|0;
 $290 = $289 << 16 >> 16;
 $291 = ((($v)) + 88|0);
 HEAP32[$291>>2] = $290;
 $292 = ((($v)) + 88|0);
 $293 = HEAP32[$292>>2]|0;
 $294 = ((($v)) + 52|0);
 $295 = HEAP32[$294>>2]|0;
 $296 = (($295) + ($293))|0;
 HEAP32[$294>>2] = $296;
 $297 = $0;
 $298 = ((($297)) + 5112|0);
 $299 = $2;
 $300 = (($298) + ($299)|0);
 $301 = ((($300)) + 20|0);
 $302 = HEAP16[$301>>1]|0;
 $303 = $302 << 16 >> 16;
 $304 = ((($v)) + 56|0);
 HEAP32[$304>>2] = $303;
 $305 = $0;
 $306 = ((($305)) + 5112|0);
 $307 = $2;
 $308 = (($306) + ($307)|0);
 $309 = ((($308)) + 42|0);
 $310 = HEAP16[$309>>1]|0;
 $311 = $310 << 16 >> 16;
 $312 = ((($v)) + 80|0);
 HEAP32[$312>>2] = $311;
 $313 = ((($v)) + 80|0);
 $314 = HEAP32[$313>>2]|0;
 $315 = ((($v)) + 56|0);
 $316 = HEAP32[$315>>2]|0;
 $317 = (($316) + ($314))|0;
 HEAP32[$315>>2] = $317;
 $318 = $0;
 $319 = ((($318)) + 5112|0);
 $320 = $2;
 $321 = (($319) + ($320)|0);
 $322 = ((($321)) + 22|0);
 $323 = HEAP16[$322>>1]|0;
 $324 = $323 << 16 >> 16;
 $325 = ((($v)) + 60|0);
 HEAP32[$325>>2] = $324;
 $326 = $0;
 $327 = ((($326)) + 5112|0);
 $328 = $2;
 $329 = (($327) + ($328)|0);
 $330 = ((($329)) + 40|0);
 $331 = HEAP16[$330>>1]|0;
 $332 = $331 << 16 >> 16;
 $333 = ((($v)) + 84|0);
 HEAP32[$333>>2] = $332;
 $334 = ((($v)) + 84|0);
 $335 = HEAP32[$334>>2]|0;
 $336 = ((($v)) + 60|0);
 $337 = HEAP32[$336>>2]|0;
 $338 = (($337) + ($335))|0;
 HEAP32[$336>>2] = $338;
 _MP3AB0($v);
 $339 = $3;
 $340 = (($339) + 256)|0;
 $t0 = $340;
 $341 = $3;
 $342 = (($341) + 512)|0;
 $t1 = $342;
 $343 = $4;
 $344 = (($343) + 256)|0;
 $t2 = $344;
 $345 = $4;
 $346 = (($345) + 512)|0;
 $t3 = $346;
 $347 = ((($v)) + 4|0);
 HEAP32[$347>>2] = 0;
 $348 = ((($v)) + 64|0);
 $349 = HEAP32[$348>>2]|0;
 $350 = ((($v)) + 68|0);
 $351 = HEAP32[$350>>2]|0;
 $352 = (($349) - ($351))|0;
 $353 = ($352*46340)|0;
 $354 = $353 >> 16;
 $355 = ((($v)) + 44|0);
 HEAP32[$355>>2] = $354;
 $356 = ((($v)) + 64|0);
 $357 = HEAP32[$356>>2]|0;
 $358 = (0 - ($357))|0;
 $359 = ((($v)) + 68|0);
 $360 = HEAP32[$359>>2]|0;
 $361 = (($358) - ($360))|0;
 $362 = ((($v)) + 64|0);
 HEAP32[$362>>2] = $361;
 $363 = ((($v)) + 72|0);
 $364 = HEAP32[$363>>2]|0;
 $365 = ((($v)) + 76|0);
 $366 = HEAP32[$365>>2]|0;
 $367 = (($364) + ($366))|0;
 $368 = ((($v)) + 8|0);
 HEAP32[$368>>2] = $367;
 $369 = ((($v)) + 44|0);
 $370 = HEAP32[$369>>2]|0;
 $371 = $370&65535;
 $372 = $0;
 $373 = ((($372)) + 5112|0);
 $374 = $3;
 $375 = (($374) + 0)|0;
 $376 = (($373) + ($375)|0);
 HEAP16[$376>>1] = $371;
 $377 = ((($v)) + 44|0);
 $378 = HEAP32[$377>>2]|0;
 $379 = (0 - ($378))|0;
 $380 = ((($v)) + 44|0);
 HEAP32[$380>>2] = $379;
 $381 = ((($v)) + 64|0);
 $382 = HEAP32[$381>>2]|0;
 $383 = $382&65535;
 $384 = $0;
 $385 = ((($384)) + 5112|0);
 $386 = $t3;
 $387 = (($386) + 0)|0;
 $388 = (($385) + ($387)|0);
 HEAP16[$388>>1] = $383;
 $389 = ((($v)) + 44|0);
 $390 = HEAP32[$389>>2]|0;
 $391 = $390&65535;
 $392 = $0;
 $393 = ((($392)) + 5112|0);
 $394 = $4;
 $395 = (($394) + 0)|0;
 $396 = (($393) + ($395)|0);
 HEAP16[$396>>1] = $391;
 $397 = ((($v)) + 8|0);
 $398 = HEAP32[$397>>2]|0;
 $399 = (0 - ($398))|0;
 $400 = ((($v)) + 8|0);
 HEAP32[$400>>2] = $399;
 $401 = ((($v)) + 8|0);
 $402 = HEAP32[$401>>2]|0;
 $403 = $402&65535;
 $404 = $0;
 $405 = ((($404)) + 5112|0);
 $406 = $t2;
 $407 = (($406) + 0)|0;
 $408 = (($405) + ($407)|0);
 HEAP16[$408>>1] = $403;
 $409 = ((($v)) + 72|0);
 $410 = HEAP32[$409>>2]|0;
 $411 = ((($v)) + 76|0);
 $412 = HEAP32[$411>>2]|0;
 $413 = (($410) - ($412))|0;
 $414 = ($413*92681)|0;
 $415 = $414 >> 16;
 $416 = ((($v)) + 8|0);
 $417 = HEAP32[$416>>2]|0;
 $418 = (($415) + ($417))|0;
 $419 = ((($v)) + 12|0);
 HEAP32[$419>>2] = $418;
 $420 = ((($v)) + 12|0);
 $421 = HEAP32[$420>>2]|0;
 $422 = $421&65535;
 $423 = $0;
 $424 = ((($423)) + 5112|0);
 $425 = $t0;
 $426 = (($425) + 0)|0;
 $427 = (($424) + ($426)|0);
 HEAP16[$427>>1] = $422;
 $428 = ((($v)) + 80|0);
 $429 = HEAP32[$428>>2]|0;
 $430 = (0 - ($429))|0;
 $431 = ((($v)) + 84|0);
 $432 = HEAP32[$431>>2]|0;
 $433 = (($430) - ($432))|0;
 $434 = ((($v)) + 16|0);
 HEAP32[$434>>2] = $433;
 $435 = ((($v)) + 88|0);
 $436 = HEAP32[$435>>2]|0;
 $437 = ((($v)) + 92|0);
 $438 = HEAP32[$437>>2]|0;
 $439 = (($436) + ($438))|0;
 $440 = ((($v)) + 24|0);
 HEAP32[$440>>2] = $439;
 $441 = ((($v)) + 80|0);
 $442 = HEAP32[$441>>2]|0;
 $443 = ((($v)) + 84|0);
 $444 = HEAP32[$443>>2]|0;
 $445 = (($442) - ($444))|0;
 $446 = ($445*92681)|0;
 $447 = $446 >> 16;
 $448 = ((($v)) + 20|0);
 HEAP32[$448>>2] = $447;
 $449 = ((($v)) + 16|0);
 $450 = HEAP32[$449>>2]|0;
 $451 = $450&65535;
 $452 = $0;
 $453 = ((($452)) + 5112|0);
 $454 = $t3;
 $455 = (($454) + -128)|0;
 $456 = (($453) + ($455)|0);
 HEAP16[$456>>1] = $451;
 $457 = ((($v)) + 88|0);
 $458 = HEAP32[$457>>2]|0;
 $459 = ((($v)) + 92|0);
 $460 = HEAP32[$459>>2]|0;
 $461 = (($458) - ($460))|0;
 $462 = ($461*185363)|0;
 $463 = $462 >> 16;
 $464 = ((($v)) + 28|0);
 HEAP32[$464>>2] = $463;
 $465 = ((($v)) + 20|0);
 $466 = HEAP32[$465>>2]|0;
 $467 = ((($v)) + 16|0);
 $468 = HEAP32[$467>>2]|0;
 $469 = (($466) - ($468))|0;
 $470 = ((($v)) + 20|0);
 HEAP32[$470>>2] = $469;
 $471 = ((($v)) + 28|0);
 $472 = HEAP32[$471>>2]|0;
 $473 = ((($v)) + 20|0);
 $474 = HEAP32[$473>>2]|0;
 $475 = (($472) - ($474))|0;
 $476 = ((($v)) + 28|0);
 HEAP32[$476>>2] = $475;
 $477 = ((($v)) + 24|0);
 $478 = HEAP32[$477>>2]|0;
 $479 = ((($v)) + 24|0);
 $480 = HEAP32[$479>>2]|0;
 $481 = (($478) + ($480))|0;
 $482 = ((($v)) + 24|0);
 HEAP32[$482>>2] = $481;
 $483 = ((($v)) + 20|0);
 $484 = HEAP32[$483>>2]|0;
 $485 = ((($v)) + 24|0);
 $486 = HEAP32[$485>>2]|0;
 $487 = (($484) - ($486))|0;
 $488 = ((($v)) + 20|0);
 HEAP32[$488>>2] = $487;
 $489 = ((($v)) + 16|0);
 $490 = HEAP32[$489>>2]|0;
 $491 = (0 - ($490))|0;
 $492 = ((($v)) + 24|0);
 $493 = HEAP32[$492>>2]|0;
 $494 = (($491) - ($493))|0;
 $495 = ((($v)) + 16|0);
 HEAP32[$495>>2] = $494;
 $496 = ((($v)) + 28|0);
 $497 = HEAP32[$496>>2]|0;
 $498 = $497&65535;
 $499 = $0;
 $500 = ((($499)) + 5112|0);
 $501 = $t1;
 $502 = (($501) + -128)|0;
 $503 = (($500) + ($502)|0);
 HEAP16[$503>>1] = $498;
 $504 = ((($v)) + 16|0);
 $505 = HEAP32[$504>>2]|0;
 $506 = $505&65535;
 $507 = $0;
 $508 = ((($507)) + 5112|0);
 $509 = $t2;
 $510 = (($509) + -128)|0;
 $511 = (($508) + ($510)|0);
 HEAP16[$511>>1] = $506;
 $512 = ((($v)) + 20|0);
 $513 = HEAP32[$512>>2]|0;
 $514 = $513&65535;
 $515 = $0;
 $516 = ((($515)) + 5112|0);
 $517 = $t0;
 $518 = (($517) + -128)|0;
 $519 = (($516) + ($518)|0);
 HEAP16[$519>>1] = $514;
 $520 = ((($v)) + 96|0);
 $521 = HEAP32[$520>>2]|0;
 $522 = ((($v)) + 100|0);
 $523 = HEAP32[$522>>2]|0;
 $524 = (($521) + ($523))|0;
 $525 = ((($v)) + 32|0);
 HEAP32[$525>>2] = $524;
 $526 = ((($v)) + 96|0);
 $527 = HEAP32[$526>>2]|0;
 $528 = ((($v)) + 100|0);
 $529 = HEAP32[$528>>2]|0;
 $530 = (($527) - ($529))|0;
 $531 = ($530*92681)|0;
 $532 = $531 >> 16;
 $533 = ((($v)) + 36|0);
 HEAP32[$533>>2] = $532;
 $534 = ((($v)) + 32|0);
 $535 = HEAP32[$534>>2]|0;
 $536 = ((($v)) + 36|0);
 $537 = HEAP32[$536>>2]|0;
 $538 = (($535) + ($537))|0;
 $539 = ((($v)) + 8|0);
 HEAP32[$539>>2] = $538;
 $540 = ((($v)) + 104|0);
 $541 = HEAP32[$540>>2]|0;
 $542 = ((($v)) + 108|0);
 $543 = HEAP32[$542>>2]|0;
 $544 = (($541) - ($543))|0;
 $545 = ($544*185363)|0;
 $546 = $545 >> 16;
 $547 = ((($v)) + 44|0);
 HEAP32[$547>>2] = $546;
 $548 = ((($v)) + 112|0);
 $549 = HEAP32[$548>>2]|0;
 $550 = ((($v)) + 116|0);
 $551 = HEAP32[$550>>2]|0;
 $552 = (($549) - ($551))|0;
 $553 = ($552*185363)|0;
 $554 = $553 >> 16;
 $555 = ((($v)) + 52|0);
 HEAP32[$555>>2] = $554;
 $556 = ((($v)) + 104|0);
 $557 = HEAP32[$556>>2]|0;
 $558 = ((($v)) + 108|0);
 $559 = HEAP32[$558>>2]|0;
 $560 = (($557) + ($559))|0;
 $561 = ((($v)) + 40|0);
 HEAP32[$561>>2] = $560;
 $562 = ((($v)) + 40|0);
 $563 = HEAP32[$562>>2]|0;
 $564 = ((($v)) + 40|0);
 $565 = HEAP32[$564>>2]|0;
 $566 = (($563) + ($565))|0;
 $567 = ((($v)) + 40|0);
 HEAP32[$567>>2] = $566;
 $568 = ((($v)) + 112|0);
 $569 = HEAP32[$568>>2]|0;
 $570 = ((($v)) + 116|0);
 $571 = HEAP32[$570>>2]|0;
 $572 = (($569) + ($571))|0;
 $573 = ((($v)) + 48|0);
 HEAP32[$573>>2] = $572;
 $574 = ((($v)) + 48|0);
 $575 = HEAP32[$574>>2]|0;
 $576 = ((($v)) + 48|0);
 $577 = HEAP32[$576>>2]|0;
 $578 = (($575) + ($577))|0;
 $579 = ((($v)) + 48|0);
 HEAP32[$579>>2] = $578;
 $580 = ((($v)) + 120|0);
 $581 = HEAP32[$580>>2]|0;
 $582 = ((($v)) + 124|0);
 $583 = HEAP32[$582>>2]|0;
 $584 = (($581) + ($583))|0;
 $585 = ((($v)) + 56|0);
 HEAP32[$585>>2] = $584;
 $586 = ((($v)) + 32|0);
 $587 = HEAP32[$586>>2]|0;
 $588 = ((($v)) + 40|0);
 $589 = HEAP32[$588>>2]|0;
 $590 = (($587) + ($589))|0;
 $591 = ((($v)) + 12|0);
 HEAP32[$591>>2] = $590;
 $592 = ((($v)) + 56|0);
 $593 = HEAP32[$592>>2]|0;
 $594 = ((($v)) + 56|0);
 $595 = HEAP32[$594>>2]|0;
 $596 = (($593) + ($595))|0;
 $597 = ((($v)) + 56|0);
 HEAP32[$597>>2] = $596;
 $598 = ((($v)) + 52|0);
 $599 = HEAP32[$598>>2]|0;
 $600 = ((($v)) + 8|0);
 $601 = HEAP32[$600>>2]|0;
 $602 = (($599) - ($601))|0;
 $603 = ((($v)) + 48|0);
 $604 = HEAP32[$603>>2]|0;
 $605 = (($602) + ($604))|0;
 $606 = ((($v)) + 52|0);
 HEAP32[$606>>2] = $605;
 $607 = ((($v)) + 120|0);
 $608 = HEAP32[$607>>2]|0;
 $609 = ((($v)) + 124|0);
 $610 = HEAP32[$609>>2]|0;
 $611 = (($608) - ($610))|0;
 $612 = ($611*370727)|0;
 $613 = $612 >> 16;
 $614 = ((($v)) + 44|0);
 $615 = HEAP32[$614>>2]|0;
 $616 = ((($v)) + 8|0);
 $617 = HEAP32[$616>>2]|0;
 $618 = (($615) + ($617))|0;
 $619 = (($613) - ($618))|0;
 $620 = ((($v)) + 60|0);
 HEAP32[$620>>2] = $619;
 $621 = ((($v)) + 56|0);
 $622 = HEAP32[$621>>2]|0;
 $623 = ((($v)) + 56|0);
 $624 = HEAP32[$623>>2]|0;
 $625 = (($622) + ($624))|0;
 $626 = (0 - ($625))|0;
 $627 = ((($v)) + 12|0);
 $628 = HEAP32[$627>>2]|0;
 $629 = (($626) + ($628))|0;
 $630 = ((($v)) + 56|0);
 HEAP32[$630>>2] = $629;
 $631 = ((($v)) + 52|0);
 $632 = HEAP32[$631>>2]|0;
 $633 = ((($v)) + 40|0);
 $634 = HEAP32[$633>>2]|0;
 $635 = (($632) - ($634))|0;
 $636 = ((($v)) + 68|0);
 HEAP32[$636>>2] = $635;
 $637 = ((($v)) + 36|0);
 $638 = HEAP32[$637>>2]|0;
 $639 = ((($v)) + 56|0);
 $640 = HEAP32[$639>>2]|0;
 $641 = (($638) + ($640))|0;
 $642 = ((($v)) + 36|0);
 HEAP32[$642>>2] = $641;
 $643 = ((($v)) + 36|0);
 $644 = HEAP32[$643>>2]|0;
 $645 = $644&65535;
 $646 = $0;
 $647 = ((($646)) + 5112|0);
 $648 = $3;
 $649 = (($648) + 64)|0;
 $650 = (($647) + ($649)|0);
 HEAP16[$650>>1] = $645;
 $651 = ((($v)) + 44|0);
 $652 = HEAP32[$651>>2]|0;
 $653 = ((($v)) + 52|0);
 $654 = HEAP32[$653>>2]|0;
 $655 = (($652) - ($654))|0;
 $656 = ((($v)) + 44|0);
 HEAP32[$656>>2] = $655;
 $657 = ((($v)) + 68|0);
 $658 = HEAP32[$657>>2]|0;
 $659 = $658&65535;
 $660 = $0;
 $661 = ((($660)) + 5112|0);
 $662 = $t0;
 $663 = (($662) + -64)|0;
 $664 = (($661) + ($663)|0);
 HEAP16[$664>>1] = $659;
 $665 = ((($v)) + 32|0);
 $666 = HEAP32[$665>>2]|0;
 $667 = ((($v)) + 48|0);
 $668 = HEAP32[$667>>2]|0;
 $669 = (($666) - ($668))|0;
 $670 = ((($v)) + 48|0);
 HEAP32[$670>>2] = $669;
 $671 = ((($v)) + 44|0);
 $672 = HEAP32[$671>>2]|0;
 $673 = $672&65535;
 $674 = $0;
 $675 = ((($674)) + 5112|0);
 $676 = $t0;
 $677 = (($676) + 64)|0;
 $678 = (($675) + ($677)|0);
 HEAP16[$678>>1] = $673;
 $679 = ((($v)) + 32|0);
 $680 = HEAP32[$679>>2]|0;
 $681 = (0 - ($680))|0;
 $682 = ((($v)) + 32|0);
 HEAP32[$682>>2] = $681;
 $683 = ((($v)) + 60|0);
 $684 = HEAP32[$683>>2]|0;
 $685 = $684&65535;
 $686 = $0;
 $687 = ((($686)) + 5112|0);
 $688 = $t1;
 $689 = (($688) + -64)|0;
 $690 = (($687) + ($689)|0);
 HEAP16[$690>>1] = $685;
 $691 = ((($v)) + 40|0);
 $692 = HEAP32[$691>>2]|0;
 $693 = (0 - ($692))|0;
 $694 = ((($v)) + 48|0);
 $695 = HEAP32[$694>>2]|0;
 $696 = (($693) - ($695))|0;
 $697 = ((($v)) + 40|0);
 HEAP32[$697>>2] = $696;
 $698 = ((($v)) + 48|0);
 $699 = HEAP32[$698>>2]|0;
 $700 = $699&65535;
 $701 = $0;
 $702 = ((($701)) + 5112|0);
 $703 = $t2;
 $704 = (($703) + 64)|0;
 $705 = (($702) + ($704)|0);
 HEAP16[$705>>1] = $700;
 $706 = ((($v)) + 32|0);
 $707 = HEAP32[$706>>2]|0;
 $708 = $707&65535;
 $709 = $0;
 $710 = ((($709)) + 5112|0);
 $711 = $t3;
 $712 = (($711) + -64)|0;
 $713 = (($710) + ($712)|0);
 HEAP16[$713>>1] = $708;
 $714 = ((($v)) + 56|0);
 $715 = HEAP32[$714>>2]|0;
 $716 = $715&65535;
 $717 = $0;
 $718 = ((($717)) + 5112|0);
 $719 = $4;
 $720 = (($719) + 64)|0;
 $721 = (($718) + ($720)|0);
 HEAP16[$721>>1] = $716;
 $722 = ((($v)) + 40|0);
 $723 = HEAP32[$722>>2]|0;
 $724 = $723&65535;
 $725 = $0;
 $726 = ((($725)) + 5112|0);
 $727 = $t2;
 $728 = (($727) + -64)|0;
 $729 = (($726) + ($728)|0);
 HEAP16[$729>>1] = $724;
 $730 = $0;
 $731 = ((($730)) + 5112|0);
 $732 = $2;
 $733 = (($731) + ($732)|0);
 $734 = ((($733)) + 2|0);
 $735 = HEAP16[$734>>1]|0;
 $736 = $735 << 16 >> 16;
 HEAP32[$v>>2] = $736;
 $737 = $0;
 $738 = ((($737)) + 5112|0);
 $739 = $2;
 $740 = (($738) + ($739)|0);
 $741 = ((($740)) + 60|0);
 $742 = HEAP16[$741>>1]|0;
 $743 = $742 << 16 >> 16;
 $744 = ((($v)) + 124|0);
 HEAP32[$744>>2] = $743;
 $745 = ((($v)) + 124|0);
 $746 = HEAP32[$745>>2]|0;
 $747 = HEAP32[$v>>2]|0;
 $748 = (($747) - ($746))|0;
 HEAP32[$v>>2] = $748;
 $749 = $0;
 $750 = ((($749)) + 5112|0);
 $751 = $2;
 $752 = (($750) + ($751)|0);
 $753 = HEAP16[$752>>1]|0;
 $754 = $753 << 16 >> 16;
 $755 = ((($v)) + 4|0);
 HEAP32[$755>>2] = $754;
 $756 = $0;
 $757 = ((($756)) + 5112|0);
 $758 = $2;
 $759 = (($757) + ($758)|0);
 $760 = ((($759)) + 62|0);
 $761 = HEAP16[$760>>1]|0;
 $762 = $761 << 16 >> 16;
 $763 = ((($v)) + 120|0);
 HEAP32[$763>>2] = $762;
 $764 = ((($v)) + 120|0);
 $765 = HEAP32[$764>>2]|0;
 $766 = ((($v)) + 4|0);
 $767 = HEAP32[$766>>2]|0;
 $768 = (($767) - ($765))|0;
 HEAP32[$766>>2] = $768;
 $769 = $0;
 $770 = ((($769)) + 5112|0);
 $771 = $2;
 $772 = (($770) + ($771)|0);
 $773 = ((($772)) + 4|0);
 $774 = HEAP16[$773>>1]|0;
 $775 = $774 << 16 >> 16;
 $776 = ((($v)) + 8|0);
 HEAP32[$776>>2] = $775;
 $777 = $0;
 $778 = ((($777)) + 5112|0);
 $779 = $2;
 $780 = (($778) + ($779)|0);
 $781 = ((($780)) + 58|0);
 $782 = HEAP16[$781>>1]|0;
 $783 = $782 << 16 >> 16;
 $784 = ((($v)) + 112|0);
 HEAP32[$784>>2] = $783;
 $785 = ((($v)) + 112|0);
 $786 = HEAP32[$785>>2]|0;
 $787 = ((($v)) + 8|0);
 $788 = HEAP32[$787>>2]|0;
 $789 = (($788) - ($786))|0;
 HEAP32[$787>>2] = $789;
 $790 = $0;
 $791 = ((($790)) + 5112|0);
 $792 = $2;
 $793 = (($791) + ($792)|0);
 $794 = ((($793)) + 6|0);
 $795 = HEAP16[$794>>1]|0;
 $796 = $795 << 16 >> 16;
 $797 = ((($v)) + 12|0);
 HEAP32[$797>>2] = $796;
 $798 = $0;
 $799 = ((($798)) + 5112|0);
 $800 = $2;
 $801 = (($799) + ($800)|0);
 $802 = ((($801)) + 56|0);
 $803 = HEAP16[$802>>1]|0;
 $804 = $803 << 16 >> 16;
 $805 = ((($v)) + 116|0);
 HEAP32[$805>>2] = $804;
 $806 = ((($v)) + 116|0);
 $807 = HEAP32[$806>>2]|0;
 $808 = ((($v)) + 12|0);
 $809 = HEAP32[$808>>2]|0;
 $810 = (($809) - ($807))|0;
 HEAP32[$808>>2] = $810;
 $811 = $0;
 $812 = ((($811)) + 5112|0);
 $813 = $2;
 $814 = (($812) + ($813)|0);
 $815 = ((($814)) + 12|0);
 $816 = HEAP16[$815>>1]|0;
 $817 = $816 << 16 >> 16;
 $818 = ((($v)) + 16|0);
 HEAP32[$818>>2] = $817;
 $819 = $0;
 $820 = ((($819)) + 5112|0);
 $821 = $2;
 $822 = (($820) + ($821)|0);
 $823 = ((($822)) + 50|0);
 $824 = HEAP16[$823>>1]|0;
 $825 = $824 << 16 >> 16;
 $826 = ((($v)) + 96|0);
 HEAP32[$826>>2] = $825;
 $827 = ((($v)) + 96|0);
 $828 = HEAP32[$827>>2]|0;
 $829 = ((($v)) + 16|0);
 $830 = HEAP32[$829>>2]|0;
 $831 = (($830) - ($828))|0;
 HEAP32[$829>>2] = $831;
 $832 = $0;
 $833 = ((($832)) + 5112|0);
 $834 = $2;
 $835 = (($833) + ($834)|0);
 $836 = ((($835)) + 14|0);
 $837 = HEAP16[$836>>1]|0;
 $838 = $837 << 16 >> 16;
 $839 = ((($v)) + 20|0);
 HEAP32[$839>>2] = $838;
 $840 = $0;
 $841 = ((($840)) + 5112|0);
 $842 = $2;
 $843 = (($841) + ($842)|0);
 $844 = ((($843)) + 48|0);
 $845 = HEAP16[$844>>1]|0;
 $846 = $845 << 16 >> 16;
 $847 = ((($v)) + 100|0);
 HEAP32[$847>>2] = $846;
 $848 = ((($v)) + 100|0);
 $849 = HEAP32[$848>>2]|0;
 $850 = ((($v)) + 20|0);
 $851 = HEAP32[$850>>2]|0;
 $852 = (($851) - ($849))|0;
 HEAP32[$850>>2] = $852;
 $853 = $0;
 $854 = ((($853)) + 5112|0);
 $855 = $2;
 $856 = (($854) + ($855)|0);
 $857 = ((($856)) + 10|0);
 $858 = HEAP16[$857>>1]|0;
 $859 = $858 << 16 >> 16;
 $860 = ((($v)) + 24|0);
 HEAP32[$860>>2] = $859;
 $861 = $0;
 $862 = ((($861)) + 5112|0);
 $863 = $2;
 $864 = (($862) + ($863)|0);
 $865 = ((($864)) + 52|0);
 $866 = HEAP16[$865>>1]|0;
 $867 = $866 << 16 >> 16;
 $868 = ((($v)) + 108|0);
 HEAP32[$868>>2] = $867;
 $869 = ((($v)) + 108|0);
 $870 = HEAP32[$869>>2]|0;
 $871 = ((($v)) + 24|0);
 $872 = HEAP32[$871>>2]|0;
 $873 = (($872) - ($870))|0;
 HEAP32[$871>>2] = $873;
 $874 = $0;
 $875 = ((($874)) + 5112|0);
 $876 = $2;
 $877 = (($875) + ($876)|0);
 $878 = ((($877)) + 8|0);
 $879 = HEAP16[$878>>1]|0;
 $880 = $879 << 16 >> 16;
 $881 = ((($v)) + 28|0);
 HEAP32[$881>>2] = $880;
 $882 = $0;
 $883 = ((($882)) + 5112|0);
 $884 = $2;
 $885 = (($883) + ($884)|0);
 $886 = ((($885)) + 54|0);
 $887 = HEAP16[$886>>1]|0;
 $888 = $887 << 16 >> 16;
 $889 = ((($v)) + 104|0);
 HEAP32[$889>>2] = $888;
 $890 = ((($v)) + 104|0);
 $891 = HEAP32[$890>>2]|0;
 $892 = ((($v)) + 28|0);
 $893 = HEAP32[$892>>2]|0;
 $894 = (($893) - ($891))|0;
 HEAP32[$892>>2] = $894;
 $895 = $0;
 $896 = ((($895)) + 5112|0);
 $897 = $2;
 $898 = (($896) + ($897)|0);
 $899 = ((($898)) + 28|0);
 $900 = HEAP16[$899>>1]|0;
 $901 = $900 << 16 >> 16;
 $902 = ((($v)) + 32|0);
 HEAP32[$902>>2] = $901;
 $903 = $0;
 $904 = ((($903)) + 5112|0);
 $905 = $2;
 $906 = (($904) + ($905)|0);
 $907 = ((($906)) + 34|0);
 $908 = HEAP16[$907>>1]|0;
 $909 = $908 << 16 >> 16;
 $910 = ((($v)) + 64|0);
 HEAP32[$910>>2] = $909;
 $911 = ((($v)) + 64|0);
 $912 = HEAP32[$911>>2]|0;
 $913 = ((($v)) + 32|0);
 $914 = HEAP32[$913>>2]|0;
 $915 = (($914) - ($912))|0;
 HEAP32[$913>>2] = $915;
 $916 = $0;
 $917 = ((($916)) + 5112|0);
 $918 = $2;
 $919 = (($917) + ($918)|0);
 $920 = ((($919)) + 30|0);
 $921 = HEAP16[$920>>1]|0;
 $922 = $921 << 16 >> 16;
 $923 = ((($v)) + 36|0);
 HEAP32[$923>>2] = $922;
 $924 = $0;
 $925 = ((($924)) + 5112|0);
 $926 = $2;
 $927 = (($925) + ($926)|0);
 $928 = ((($927)) + 32|0);
 $929 = HEAP16[$928>>1]|0;
 $930 = $929 << 16 >> 16;
 $931 = ((($v)) + 68|0);
 HEAP32[$931>>2] = $930;
 $932 = ((($v)) + 68|0);
 $933 = HEAP32[$932>>2]|0;
 $934 = ((($v)) + 36|0);
 $935 = HEAP32[$934>>2]|0;
 $936 = (($935) - ($933))|0;
 HEAP32[$934>>2] = $936;
 $937 = $0;
 $938 = ((($937)) + 5112|0);
 $939 = $2;
 $940 = (($938) + ($939)|0);
 $941 = ((($940)) + 26|0);
 $942 = HEAP16[$941>>1]|0;
 $943 = $942 << 16 >> 16;
 $944 = ((($v)) + 40|0);
 HEAP32[$944>>2] = $943;
 $945 = $0;
 $946 = ((($945)) + 5112|0);
 $947 = $2;
 $948 = (($946) + ($947)|0);
 $949 = ((($948)) + 36|0);
 $950 = HEAP16[$949>>1]|0;
 $951 = $950 << 16 >> 16;
 $952 = ((($v)) + 76|0);
 HEAP32[$952>>2] = $951;
 $953 = ((($v)) + 76|0);
 $954 = HEAP32[$953>>2]|0;
 $955 = ((($v)) + 40|0);
 $956 = HEAP32[$955>>2]|0;
 $957 = (($956) - ($954))|0;
 HEAP32[$955>>2] = $957;
 $958 = $0;
 $959 = ((($958)) + 5112|0);
 $960 = $2;
 $961 = (($959) + ($960)|0);
 $962 = ((($961)) + 24|0);
 $963 = HEAP16[$962>>1]|0;
 $964 = $963 << 16 >> 16;
 $965 = ((($v)) + 44|0);
 HEAP32[$965>>2] = $964;
 $966 = $0;
 $967 = ((($966)) + 5112|0);
 $968 = $2;
 $969 = (($967) + ($968)|0);
 $970 = ((($969)) + 38|0);
 $971 = HEAP16[$970>>1]|0;
 $972 = $971 << 16 >> 16;
 $973 = ((($v)) + 72|0);
 HEAP32[$973>>2] = $972;
 $974 = ((($v)) + 72|0);
 $975 = HEAP32[$974>>2]|0;
 $976 = ((($v)) + 44|0);
 $977 = HEAP32[$976>>2]|0;
 $978 = (($977) - ($975))|0;
 HEAP32[$976>>2] = $978;
 $979 = $0;
 $980 = ((($979)) + 5112|0);
 $981 = $2;
 $982 = (($980) + ($981)|0);
 $983 = ((($982)) + 18|0);
 $984 = HEAP16[$983>>1]|0;
 $985 = $984 << 16 >> 16;
 $986 = ((($v)) + 48|0);
 HEAP32[$986>>2] = $985;
 $987 = $0;
 $988 = ((($987)) + 5112|0);
 $989 = $2;
 $990 = (($988) + ($989)|0);
 $991 = ((($990)) + 44|0);
 $992 = HEAP16[$991>>1]|0;
 $993 = $992 << 16 >> 16;
 $994 = ((($v)) + 92|0);
 HEAP32[$994>>2] = $993;
 $995 = ((($v)) + 92|0);
 $996 = HEAP32[$995>>2]|0;
 $997 = ((($v)) + 48|0);
 $998 = HEAP32[$997>>2]|0;
 $999 = (($998) - ($996))|0;
 HEAP32[$997>>2] = $999;
 $1000 = $0;
 $1001 = ((($1000)) + 5112|0);
 $1002 = $2;
 $1003 = (($1001) + ($1002)|0);
 $1004 = ((($1003)) + 16|0);
 $1005 = HEAP16[$1004>>1]|0;
 $1006 = $1005 << 16 >> 16;
 $1007 = ((($v)) + 52|0);
 HEAP32[$1007>>2] = $1006;
 $1008 = $0;
 $1009 = ((($1008)) + 5112|0);
 $1010 = $2;
 $1011 = (($1009) + ($1010)|0);
 $1012 = ((($1011)) + 46|0);
 $1013 = HEAP16[$1012>>1]|0;
 $1014 = $1013 << 16 >> 16;
 $1015 = ((($v)) + 88|0);
 HEAP32[$1015>>2] = $1014;
 $1016 = ((($v)) + 88|0);
 $1017 = HEAP32[$1016>>2]|0;
 $1018 = ((($v)) + 52|0);
 $1019 = HEAP32[$1018>>2]|0;
 $1020 = (($1019) - ($1017))|0;
 HEAP32[$1018>>2] = $1020;
 $1021 = $0;
 $1022 = ((($1021)) + 5112|0);
 $1023 = $2;
 $1024 = (($1022) + ($1023)|0);
 $1025 = ((($1024)) + 20|0);
 $1026 = HEAP16[$1025>>1]|0;
 $1027 = $1026 << 16 >> 16;
 $1028 = ((($v)) + 56|0);
 HEAP32[$1028>>2] = $1027;
 $1029 = $0;
 $1030 = ((($1029)) + 5112|0);
 $1031 = $2;
 $1032 = (($1030) + ($1031)|0);
 $1033 = ((($1032)) + 42|0);
 $1034 = HEAP16[$1033>>1]|0;
 $1035 = $1034 << 16 >> 16;
 $1036 = ((($v)) + 80|0);
 HEAP32[$1036>>2] = $1035;
 $1037 = ((($v)) + 80|0);
 $1038 = HEAP32[$1037>>2]|0;
 $1039 = ((($v)) + 56|0);
 $1040 = HEAP32[$1039>>2]|0;
 $1041 = (($1040) - ($1038))|0;
 HEAP32[$1039>>2] = $1041;
 $1042 = $0;
 $1043 = ((($1042)) + 5112|0);
 $1044 = $2;
 $1045 = (($1043) + ($1044)|0);
 $1046 = ((($1045)) + 22|0);
 $1047 = HEAP16[$1046>>1]|0;
 $1048 = $1047 << 16 >> 16;
 $1049 = ((($v)) + 60|0);
 HEAP32[$1049>>2] = $1048;
 $1050 = $0;
 $1051 = ((($1050)) + 5112|0);
 $1052 = $2;
 $1053 = (($1051) + ($1052)|0);
 $1054 = ((($1053)) + 40|0);
 $1055 = HEAP16[$1054>>1]|0;
 $1056 = $1055 << 16 >> 16;
 $1057 = ((($v)) + 84|0);
 HEAP32[$1057>>2] = $1056;
 $1058 = ((($v)) + 84|0);
 $1059 = HEAP32[$1058>>2]|0;
 $1060 = ((($v)) + 60|0);
 $1061 = HEAP32[$1060>>2]|0;
 $1062 = (($1061) - ($1059))|0;
 HEAP32[$1060>>2] = $1062;
 $i = 0;
 while(1) {
  $1063 = $i;
  $1064 = ($1063|0)<(16);
  if (!($1064)) {
   break;
  }
  $1065 = $i;
  $1066 = (0 + ($1065))|0;
  $1067 = (($v) + ($1066<<2)|0);
  $1068 = HEAP32[$1067>>2]|0;
  $1069 = $i;
  $1070 = ((gb + (2920) | 0) + ($1069<<1)|0);
  $1071 = HEAP16[$1070>>1]|0;
  $1072 = $1071&65535;
  $1073 = Math_imul($1068, $1072)|0;
  $1074 = $1073 >> 16;
  $1075 = $i;
  $1076 = (0 + ($1075))|0;
  $1077 = (($v) + ($1076<<2)|0);
  HEAP32[$1077>>2] = $1074;
  $1078 = $i;
  $1079 = (($1078) + 1)|0;
  $i = $1079;
 }
 $1080 = HEAP32[$v>>2]|0;
 $1081 = HEAP32[$v>>2]|0;
 $1082 = (($1080) + ($1081))|0;
 HEAP32[$v>>2] = $1082;
 $1083 = ((($v)) + 4|0);
 $1084 = HEAP32[$1083>>2]|0;
 $1085 = ((($v)) + 4|0);
 $1086 = HEAP32[$1085>>2]|0;
 $1087 = (($1084) + ($1086))|0;
 $1088 = ((($v)) + 4|0);
 HEAP32[$1088>>2] = $1087;
 $1089 = ((($v)) + 8|0);
 $1090 = HEAP32[$1089>>2]|0;
 $1091 = ((($v)) + 8|0);
 $1092 = HEAP32[$1091>>2]|0;
 $1093 = (($1090) + ($1092))|0;
 $1094 = ((($v)) + 8|0);
 HEAP32[$1094>>2] = $1093;
 $1095 = ((($v)) + 12|0);
 $1096 = HEAP32[$1095>>2]|0;
 $1097 = ((($v)) + 12|0);
 $1098 = HEAP32[$1097>>2]|0;
 $1099 = (($1096) + ($1098))|0;
 $1100 = ((($v)) + 12|0);
 HEAP32[$1100>>2] = $1099;
 $1101 = ((($v)) + 16|0);
 $1102 = HEAP32[$1101>>2]|0;
 $1103 = ((($v)) + 16|0);
 $1104 = HEAP32[$1103>>2]|0;
 $1105 = (($1102) + ($1104))|0;
 $1106 = ((($v)) + 16|0);
 HEAP32[$1106>>2] = $1105;
 $1107 = ((($v)) + 20|0);
 $1108 = HEAP32[$1107>>2]|0;
 $1109 = ((($v)) + 20|0);
 $1110 = HEAP32[$1109>>2]|0;
 $1111 = (($1108) + ($1110))|0;
 $1112 = ((($v)) + 20|0);
 HEAP32[$1112>>2] = $1111;
 $1113 = ((($v)) + 24|0);
 $1114 = HEAP32[$1113>>2]|0;
 $1115 = ((($v)) + 24|0);
 $1116 = HEAP32[$1115>>2]|0;
 $1117 = (($1114) + ($1116))|0;
 $1118 = ((($v)) + 24|0);
 HEAP32[$1118>>2] = $1117;
 $1119 = ((($v)) + 28|0);
 $1120 = HEAP32[$1119>>2]|0;
 $1121 = ((($v)) + 28|0);
 $1122 = HEAP32[$1121>>2]|0;
 $1123 = (($1120) + ($1122))|0;
 $1124 = ((($v)) + 28|0);
 HEAP32[$1124>>2] = $1123;
 $1125 = ((($v)) + 48|0);
 $1126 = HEAP32[$1125>>2]|0;
 $1127 = ((($v)) + 48|0);
 $1128 = HEAP32[$1127>>2]|0;
 $1129 = (($1126) + ($1128))|0;
 $1130 = ((($v)) + 48|0);
 HEAP32[$1130>>2] = $1129;
 $1131 = ((($v)) + 52|0);
 $1132 = HEAP32[$1131>>2]|0;
 $1133 = ((($v)) + 52|0);
 $1134 = HEAP32[$1133>>2]|0;
 $1135 = (($1132) + ($1134))|0;
 $1136 = ((($v)) + 52|0);
 HEAP32[$1136>>2] = $1135;
 $1137 = ((($v)) + 60|0);
 $1138 = HEAP32[$1137>>2]|0;
 $1139 = ((($v)) + 60|0);
 $1140 = HEAP32[$1139>>2]|0;
 $1141 = (($1138) + ($1140))|0;
 $1142 = ((($v)) + 60|0);
 HEAP32[$1142>>2] = $1141;
 _MP3AB0($v);
 $1143 = ((($v)) + 68|0);
 $1144 = HEAP32[$1143>>2]|0;
 $1145 = ((($v)) + 64|0);
 $1146 = HEAP32[$1145>>2]|0;
 $1147 = (($1144) + ($1146))|0;
 $1148 = $1147 >> 1;
 HEAP32[$v>>2] = $1148;
 $1149 = ((($v)) + 68|0);
 $1150 = HEAP32[$1149>>2]|0;
 $1151 = Math_imul($1150, -46340)|0;
 $1152 = ((($v)) + 64|0);
 $1153 = HEAP32[$1152>>2]|0;
 $1154 = ($1153*46340)|0;
 $1155 = (($1151) + ($1154))|0;
 $1156 = $1155 >> 16;
 $1157 = ((($v)) + 4|0);
 HEAP32[$1157>>2] = $1156;
 $1158 = ((($v)) + 72|0);
 $1159 = HEAP32[$1158>>2]|0;
 $1160 = (0 - ($1159))|0;
 $1161 = ((($v)) + 76|0);
 $1162 = HEAP32[$1161>>2]|0;
 $1163 = (($1160) - ($1162))|0;
 $1164 = ((($v)) + 8|0);
 HEAP32[$1164>>2] = $1163;
 $1165 = ((($v)) + 72|0);
 $1166 = HEAP32[$1165>>2]|0;
 $1167 = ((($v)) + 76|0);
 $1168 = HEAP32[$1167>>2]|0;
 $1169 = (($1166) - ($1168))|0;
 $1170 = ($1169*92681)|0;
 $1171 = $1170 >> 16;
 $1172 = ((($v)) + 12|0);
 HEAP32[$1172>>2] = $1171;
 $1173 = ((($v)) + 80|0);
 $1174 = HEAP32[$1173>>2]|0;
 $1175 = ((($v)) + 84|0);
 $1176 = HEAP32[$1175>>2]|0;
 $1177 = (($1174) + ($1176))|0;
 $1178 = HEAP32[$v>>2]|0;
 $1179 = (($1177) + ($1178))|0;
 $1180 = ((($v)) + 16|0);
 HEAP32[$1180>>2] = $1179;
 $1181 = ((($v)) + 80|0);
 $1182 = HEAP32[$1181>>2]|0;
 $1183 = ((($v)) + 84|0);
 $1184 = HEAP32[$1183>>2]|0;
 $1185 = (($1182) - ($1184))|0;
 $1186 = ($1185*92681)|0;
 $1187 = $1186 >> 16;
 $1188 = ((($v)) + 4|0);
 $1189 = HEAP32[$1188>>2]|0;
 $1190 = (($1187) + ($1189))|0;
 $1191 = ((($v)) + 20|0);
 HEAP32[$1191>>2] = $1190;
 $1192 = ((($v)) + 88|0);
 $1193 = HEAP32[$1192>>2]|0;
 $1194 = ((($v)) + 92|0);
 $1195 = HEAP32[$1194>>2]|0;
 $1196 = (($1193) + ($1195))|0;
 $1197 = $1196 << 1;
 $1198 = HEAP32[$v>>2]|0;
 $1199 = (($1197) + ($1198))|0;
 $1200 = ((($v)) + 8|0);
 $1201 = HEAP32[$1200>>2]|0;
 $1202 = (($1199) - ($1201))|0;
 $1203 = ((($v)) + 24|0);
 HEAP32[$1203>>2] = $1202;
 $1204 = ((($v)) + 88|0);
 $1205 = HEAP32[$1204>>2]|0;
 $1206 = ((($v)) + 92|0);
 $1207 = HEAP32[$1206>>2]|0;
 $1208 = (($1205) - ($1207))|0;
 $1209 = ($1208*185363)|0;
 $1210 = $1209 >> 16;
 $1211 = HEAP32[$v>>2]|0;
 $1212 = (($1210) + ($1211))|0;
 $1213 = ((($v)) + 4|0);
 $1214 = HEAP32[$1213>>2]|0;
 $1215 = (($1212) + ($1214))|0;
 $1216 = ((($v)) + 12|0);
 $1217 = HEAP32[$1216>>2]|0;
 $1218 = (($1215) + ($1217))|0;
 $1219 = ((($v)) + 28|0);
 HEAP32[$1219>>2] = $1218;
 $1220 = HEAP32[$v>>2]|0;
 $1221 = (0 - ($1220))|0;
 $1222 = $1221&65535;
 $1223 = $0;
 $1224 = ((($1223)) + 5112|0);
 $1225 = $t3;
 $1226 = (($1225) + -32)|0;
 $1227 = (($1224) + ($1226)|0);
 HEAP16[$1227>>1] = $1222;
 $1228 = ((($v)) + 96|0);
 $1229 = HEAP32[$1228>>2]|0;
 $1230 = ((($v)) + 100|0);
 $1231 = HEAP32[$1230>>2]|0;
 $1232 = (($1229) + ($1231))|0;
 $1233 = ((($v)) + 32|0);
 HEAP32[$1233>>2] = $1232;
 $1234 = ((($v)) + 96|0);
 $1235 = HEAP32[$1234>>2]|0;
 $1236 = ((($v)) + 100|0);
 $1237 = HEAP32[$1236>>2]|0;
 $1238 = (($1235) - ($1237))|0;
 $1239 = ($1238*92681)|0;
 $1240 = $1239 >> 16;
 $1241 = ((($v)) + 36|0);
 HEAP32[$1241>>2] = $1240;
 $1242 = ((($v)) + 104|0);
 $1243 = HEAP32[$1242>>2]|0;
 $1244 = ((($v)) + 108|0);
 $1245 = HEAP32[$1244>>2]|0;
 $1246 = (($1243) + ($1245))|0;
 $1247 = $1246 << 1;
 $1248 = ((($v)) + 32|0);
 $1249 = HEAP32[$1248>>2]|0;
 $1250 = (($1247) + ($1249))|0;
 $1251 = ((($v)) + 40|0);
 HEAP32[$1251>>2] = $1250;
 $1252 = ((($v)) + 104|0);
 $1253 = HEAP32[$1252>>2]|0;
 $1254 = ((($v)) + 108|0);
 $1255 = HEAP32[$1254>>2]|0;
 $1256 = (($1253) - ($1255))|0;
 $1257 = ($1256*185363)|0;
 $1258 = $1257 >> 16;
 $1259 = ((($v)) + 32|0);
 $1260 = HEAP32[$1259>>2]|0;
 $1261 = (($1258) + ($1260))|0;
 $1262 = ((($v)) + 36|0);
 $1263 = HEAP32[$1262>>2]|0;
 $1264 = (($1261) + ($1263))|0;
 $1265 = ((($v)) + 44|0);
 HEAP32[$1265>>2] = $1264;
 $1266 = ((($v)) + 16|0);
 $1267 = HEAP32[$1266>>2]|0;
 $1268 = ((($v)) + 112|0);
 $1269 = HEAP32[$1268>>2]|0;
 $1270 = ((($v)) + 116|0);
 $1271 = HEAP32[$1270>>2]|0;
 $1272 = (($1269) + ($1271))|0;
 $1273 = $1272 << 1;
 $1274 = (($1267) - ($1273))|0;
 $1275 = ((($v)) + 48|0);
 HEAP32[$1275>>2] = $1274;
 $1276 = ((($v)) + 48|0);
 $1277 = HEAP32[$1276>>2]|0;
 $1278 = $1277&65535;
 $1279 = $0;
 $1280 = ((($1279)) + 5112|0);
 $1281 = $t2;
 $1282 = (($1281) + 32)|0;
 $1283 = (($1280) + ($1282)|0);
 HEAP16[$1283>>1] = $1278;
 $1284 = ((($v)) + 112|0);
 $1285 = HEAP32[$1284>>2]|0;
 $1286 = ((($v)) + 116|0);
 $1287 = HEAP32[$1286>>2]|0;
 $1288 = (($1285) - ($1287))|0;
 $1289 = ($1288*185363)|0;
 $1290 = $1289 >> 16;
 $1291 = ((($v)) + 48|0);
 $1292 = HEAP32[$1291>>2]|0;
 $1293 = (($1290) - ($1292))|0;
 $1294 = ((($v)) + 20|0);
 $1295 = HEAP32[$1294>>2]|0;
 $1296 = (($1293) - ($1295))|0;
 $1297 = ((($v)) + 52|0);
 HEAP32[$1297>>2] = $1296;
 $1298 = ((($v)) + 120|0);
 $1299 = HEAP32[$1298>>2]|0;
 $1300 = ((($v)) + 124|0);
 $1301 = HEAP32[$1300>>2]|0;
 $1302 = (($1299) + ($1301))|0;
 $1303 = ((($v)) + 56|0);
 HEAP32[$1303>>2] = $1302;
 $1304 = ((($v)) + 56|0);
 $1305 = HEAP32[$1304>>2]|0;
 $1306 = ((($v)) + 56|0);
 $1307 = HEAP32[$1306>>2]|0;
 $1308 = (($1305) + ($1307))|0;
 $1309 = ((($v)) + 56|0);
 HEAP32[$1309>>2] = $1308;
 $1310 = ((($v)) + 56|0);
 $1311 = HEAP32[$1310>>2]|0;
 $1312 = ((($v)) + 56|0);
 $1313 = HEAP32[$1312>>2]|0;
 $1314 = (($1311) + ($1313))|0;
 $1315 = ((($v)) + 56|0);
 HEAP32[$1315>>2] = $1314;
 $1316 = ((($v)) + 24|0);
 $1317 = HEAP32[$1316>>2]|0;
 $1318 = ((($v)) + 56|0);
 $1319 = HEAP32[$1318>>2]|0;
 $1320 = (($1317) - ($1319))|0;
 $1321 = ((($v)) + 56|0);
 HEAP32[$1321>>2] = $1320;
 $1322 = ((($v)) + 120|0);
 $1323 = HEAP32[$1322>>2]|0;
 $1324 = ((($v)) + 124|0);
 $1325 = HEAP32[$1324>>2]|0;
 $1326 = (($1323) - ($1325))|0;
 $1327 = ($1326*370727)|0;
 $1328 = $1327 >> 16;
 $1329 = ((($v)) + 28|0);
 $1330 = HEAP32[$1329>>2]|0;
 $1331 = (($1328) - ($1330))|0;
 $1332 = ((($v)) + 60|0);
 HEAP32[$1332>>2] = $1331;
 $1333 = ((($v)) + 56|0);
 $1334 = HEAP32[$1333>>2]|0;
 $1335 = $1334&65535;
 $1336 = $0;
 $1337 = ((($1336)) + 5112|0);
 $1338 = $4;
 $1339 = (($1338) + 32)|0;
 $1340 = (($1337) + ($1339)|0);
 HEAP16[$1340>>1] = $1335;
 $1341 = ((($v)) + 56|0);
 $1342 = HEAP32[$1341>>2]|0;
 $1343 = ((($v)) + 4|0);
 $1344 = HEAP32[$1343>>2]|0;
 $1345 = (($1342) + ($1344))|0;
 $1346 = ((($v)) + 56|0);
 HEAP32[$1346>>2] = $1345;
 $1347 = ((($v)) + 56|0);
 $1348 = HEAP32[$1347>>2]|0;
 $1349 = $1348&65535;
 $1350 = $0;
 $1351 = ((($1350)) + 5112|0);
 $1352 = $3;
 $1353 = (($1352) + 32)|0;
 $1354 = (($1351) + ($1353)|0);
 HEAP16[$1354>>1] = $1349;
 $1355 = ((($v)) + 60|0);
 $1356 = HEAP32[$1355>>2]|0;
 $1357 = $1356&65535;
 $1358 = $0;
 $1359 = ((($1358)) + 5112|0);
 $1360 = $t1;
 $1361 = (($1360) + -32)|0;
 $1362 = (($1359) + ($1361)|0);
 HEAP16[$1362>>1] = $1357;
 $1363 = ((($v)) + 36|0);
 $1364 = HEAP32[$1363>>2]|0;
 $1365 = ((($v)) + 40|0);
 $1366 = HEAP32[$1365>>2]|0;
 $1367 = (($1364) + ($1366))|0;
 $1368 = ((($v)) + 36|0);
 HEAP32[$1368>>2] = $1367;
 $1369 = ((($v)) + 4|0);
 $1370 = HEAP32[$1369>>2]|0;
 $1371 = ((($v)) + 24|0);
 $1372 = HEAP32[$1371>>2]|0;
 $1373 = (($1370) + ($1372))|0;
 $1374 = ((($v)) + 4|0);
 HEAP32[$1374>>2] = $1373;
 $1375 = ((($v)) + 40|0);
 $1376 = HEAP32[$1375>>2]|0;
 $1377 = ((($v)) + 24|0);
 $1378 = HEAP32[$1377>>2]|0;
 $1379 = (($1376) - ($1378))|0;
 $1380 = ((($v)) + 24|0);
 HEAP32[$1380>>2] = $1379;
 $1381 = ((($v)) + 36|0);
 $1382 = HEAP32[$1381>>2]|0;
 $1383 = ((($v)) + 4|0);
 $1384 = HEAP32[$1383>>2]|0;
 $1385 = (($1382) - ($1384))|0;
 $1386 = ((($v)) + 4|0);
 HEAP32[$1386>>2] = $1385;
 $1387 = ((($v)) + 24|0);
 $1388 = HEAP32[$1387>>2]|0;
 $1389 = $1388&65535;
 $1390 = $0;
 $1391 = ((($1390)) + 5112|0);
 $1392 = $4;
 $1393 = (($1392) + 96)|0;
 $1394 = (($1391) + ($1393)|0);
 HEAP16[$1394>>1] = $1389;
 $1395 = ((($v)) + 40|0);
 $1396 = HEAP32[$1395>>2]|0;
 $1397 = ((($v)) + 8|0);
 $1398 = HEAP32[$1397>>2]|0;
 $1399 = (($1396) + ($1398))|0;
 $1400 = ((($v)) + 40|0);
 HEAP32[$1400>>2] = $1399;
 $1401 = ((($v)) + 16|0);
 $1402 = HEAP32[$1401>>2]|0;
 $1403 = ((($v)) + 40|0);
 $1404 = HEAP32[$1403>>2]|0;
 $1405 = (($1402) - ($1404))|0;
 $1406 = ((($v)) + 40|0);
 HEAP32[$1406>>2] = $1405;
 $1407 = ((($v)) + 40|0);
 $1408 = HEAP32[$1407>>2]|0;
 $1409 = $1408&65535;
 $1410 = $0;
 $1411 = ((($1410)) + 5112|0);
 $1412 = $t2;
 $1413 = (($1412) + -96)|0;
 $1414 = (($1411) + ($1413)|0);
 HEAP16[$1414>>1] = $1409;
 $1415 = ((($v)) + 8|0);
 $1416 = HEAP32[$1415>>2]|0;
 $1417 = ((($v)) + 48|0);
 $1418 = HEAP32[$1417>>2]|0;
 $1419 = (($1416) - ($1418))|0;
 $1420 = ((($v)) + 48|0);
 HEAP32[$1420>>2] = $1419;
 $1421 = ((($v)) + 48|0);
 $1422 = HEAP32[$1421>>2]|0;
 $1423 = $1422&65535;
 $1424 = $0;
 $1425 = ((($1424)) + 5112|0);
 $1426 = $t2;
 $1427 = (($1426) + -32)|0;
 $1428 = (($1425) + ($1427)|0);
 HEAP16[$1428>>1] = $1423;
 $1429 = ((($v)) + 16|0);
 $1430 = HEAP32[$1429>>2]|0;
 $1431 = ((($v)) + 20|0);
 $1432 = HEAP32[$1431>>2]|0;
 $1433 = (($1430) + ($1432))|0;
 $1434 = ((($v)) + 20|0);
 HEAP32[$1434>>2] = $1433;
 $1435 = ((($v)) + 32|0);
 $1436 = HEAP32[$1435>>2]|0;
 $1437 = ((($v)) + 16|0);
 $1438 = HEAP32[$1437>>2]|0;
 $1439 = (($1436) - ($1438))|0;
 $1440 = ((($v)) + 16|0);
 HEAP32[$1440>>2] = $1439;
 $1441 = ((($v)) + 16|0);
 $1442 = HEAP32[$1441>>2]|0;
 $1443 = $1442&65535;
 $1444 = $0;
 $1445 = ((($1444)) + 5112|0);
 $1446 = $t2;
 $1447 = (($1446) + 96)|0;
 $1448 = (($1445) + ($1447)|0);
 HEAP16[$1448>>1] = $1443;
 $1449 = HEAP32[$v>>2]|0;
 $1450 = ((($v)) + 32|0);
 $1451 = HEAP32[$1450>>2]|0;
 $1452 = (($1449) - ($1451))|0;
 HEAP32[$v>>2] = $1452;
 $1453 = HEAP32[$v>>2]|0;
 $1454 = $1453&65535;
 $1455 = $0;
 $1456 = ((($1455)) + 5112|0);
 $1457 = $t3;
 $1458 = (($1457) + -96)|0;
 $1459 = (($1456) + ($1458)|0);
 HEAP16[$1459>>1] = $1454;
 $1460 = ((($v)) + 28|0);
 $1461 = HEAP32[$1460>>2]|0;
 $1462 = ((($v)) + 44|0);
 $1463 = HEAP32[$1462>>2]|0;
 $1464 = (($1461) - ($1463))|0;
 $1465 = ((($v)) + 28|0);
 HEAP32[$1465>>2] = $1464;
 $1466 = ((($v)) + 28|0);
 $1467 = HEAP32[$1466>>2]|0;
 $1468 = $1467&65535;
 $1469 = $0;
 $1470 = ((($1469)) + 5112|0);
 $1471 = $t1;
 $1472 = (($1471) + -96)|0;
 $1473 = (($1470) + ($1472)|0);
 HEAP16[$1473>>1] = $1468;
 $1474 = ((($v)) + 44|0);
 $1475 = HEAP32[$1474>>2]|0;
 $1476 = ((($v)) + 12|0);
 $1477 = HEAP32[$1476>>2]|0;
 $1478 = (($1475) - ($1477))|0;
 $1479 = ((($v)) + 44|0);
 HEAP32[$1479>>2] = $1478;
 $1480 = ((($v)) + 4|0);
 $1481 = HEAP32[$1480>>2]|0;
 $1482 = $1481&65535;
 $1483 = $0;
 $1484 = ((($1483)) + 5112|0);
 $1485 = $3;
 $1486 = (($1485) + 96)|0;
 $1487 = (($1484) + ($1486)|0);
 HEAP16[$1487>>1] = $1482;
 $1488 = ((($v)) + 44|0);
 $1489 = HEAP32[$1488>>2]|0;
 $1490 = ((($v)) + 20|0);
 $1491 = HEAP32[$1490>>2]|0;
 $1492 = (($1489) - ($1491))|0;
 $1493 = ((($v)) + 44|0);
 HEAP32[$1493>>2] = $1492;
 $1494 = ((($v)) + 44|0);
 $1495 = HEAP32[$1494>>2]|0;
 $1496 = $1495&65535;
 $1497 = $0;
 $1498 = ((($1497)) + 5112|0);
 $1499 = $t0;
 $1500 = (($1499) + 96)|0;
 $1501 = (($1498) + ($1500)|0);
 HEAP16[$1501>>1] = $1496;
 $1502 = ((($v)) + 12|0);
 $1503 = HEAP32[$1502>>2]|0;
 $1504 = ((($v)) + 52|0);
 $1505 = HEAP32[$1504>>2]|0;
 $1506 = (($1503) - ($1505))|0;
 $1507 = ((($v)) + 12|0);
 HEAP32[$1507>>2] = $1506;
 $1508 = ((($v)) + 12|0);
 $1509 = HEAP32[$1508>>2]|0;
 $1510 = $1509&65535;
 $1511 = $0;
 $1512 = ((($1511)) + 5112|0);
 $1513 = $t0;
 $1514 = (($1513) + 32)|0;
 $1515 = (($1512) + ($1514)|0);
 HEAP16[$1515>>1] = $1510;
 $1516 = ((($v)) + 52|0);
 $1517 = HEAP32[$1516>>2]|0;
 $1518 = ((($v)) + 8|0);
 $1519 = HEAP32[$1518>>2]|0;
 $1520 = (($1517) + ($1519))|0;
 $1521 = ((($v)) + 52|0);
 HEAP32[$1521>>2] = $1520;
 $1522 = ((($v)) + 52|0);
 $1523 = HEAP32[$1522>>2]|0;
 $1524 = $1523&65535;
 $1525 = $0;
 $1526 = ((($1525)) + 5112|0);
 $1527 = $t0;
 $1528 = (($1527) + -32)|0;
 $1529 = (($1526) + ($1528)|0);
 HEAP16[$1529>>1] = $1524;
 $1530 = ((($v)) + 20|0);
 $1531 = HEAP32[$1530>>2]|0;
 $1532 = ((($v)) + 8|0);
 $1533 = HEAP32[$1532>>2]|0;
 $1534 = (($1531) - ($1533))|0;
 $1535 = ((($v)) + 36|0);
 $1536 = HEAP32[$1535>>2]|0;
 $1537 = (($1534) - ($1536))|0;
 $1538 = ((($v)) + 8|0);
 HEAP32[$1538>>2] = $1537;
 $1539 = ((($v)) + 8|0);
 $1540 = HEAP32[$1539>>2]|0;
 $1541 = $1540&65535;
 $1542 = $0;
 $1543 = ((($1542)) + 5112|0);
 $1544 = $t0;
 $1545 = (($1544) + -96)|0;
 $1546 = (($1543) + ($1545)|0);
 HEAP16[$1546>>1] = $1541;
 $1547 = $3;
 $1548 = $1547 & 65504;
 $addptr = $1548;
 $1549 = $5;
 $1550 = $1549 >>> 1;
 $1551 = (16 - ($1550))|0;
 $offset = $1551;
 $x = 0;
 while(1) {
  $1552 = $x;
  $1553 = ($1552|0)<(8);
  if (!($1553)) {
   break;
  }
  $v8 = 0;
  $v6 = 0;
  $v4 = 0;
  $v2 = 0;
  $i = 7;
  while(1) {
   $1554 = $i;
   $1555 = ($1554|0)>=(0);
   if (!($1555)) {
    break;
   }
   $1556 = $0;
   $1557 = ((($1556)) + 5112|0);
   $1558 = $addptr;
   $1559 = (($1557) + ($1558)|0);
   $1560 = HEAP16[$1559>>1]|0;
   $1561 = $1560 << 16 >> 16;
   $1562 = $offset;
   $1563 = (($1562) + 0)|0;
   $1564 = ((gb + (2952) | 0) + ($1563<<1)|0);
   $1565 = HEAP16[$1564>>1]|0;
   $1566 = $1565 << 16 >> 16;
   $1567 = Math_imul($1561, $1566)|0;
   $1568 = (($1567) + 16384)|0;
   $1569 = $1568 >> 15;
   $1570 = $v2;
   $1571 = (($1570) + ($1569))|0;
   $v2 = $1571;
   $1572 = $0;
   $1573 = ((($1572)) + 5112|0);
   $1574 = $addptr;
   $1575 = (($1573) + ($1574)|0);
   $1576 = ((($1575)) + 16|0);
   $1577 = HEAP16[$1576>>1]|0;
   $1578 = $1577 << 16 >> 16;
   $1579 = $offset;
   $1580 = (($1579) + 8)|0;
   $1581 = ((gb + (2952) | 0) + ($1580<<1)|0);
   $1582 = HEAP16[$1581>>1]|0;
   $1583 = $1582 << 16 >> 16;
   $1584 = Math_imul($1578, $1583)|0;
   $1585 = (($1584) + 16384)|0;
   $1586 = $1585 >> 15;
   $1587 = $v4;
   $1588 = (($1587) + ($1586))|0;
   $v4 = $1588;
   $1589 = $0;
   $1590 = ((($1589)) + 5112|0);
   $1591 = $addptr;
   $1592 = (($1590) + ($1591)|0);
   $1593 = ((($1592)) + 32|0);
   $1594 = HEAP16[$1593>>1]|0;
   $1595 = $1594 << 16 >> 16;
   $1596 = $offset;
   $1597 = (($1596) + 32)|0;
   $1598 = ((gb + (2952) | 0) + ($1597<<1)|0);
   $1599 = HEAP16[$1598>>1]|0;
   $1600 = $1599 << 16 >> 16;
   $1601 = Math_imul($1595, $1600)|0;
   $1602 = (($1601) + 16384)|0;
   $1603 = $1602 >> 15;
   $1604 = $v6;
   $1605 = (($1604) + ($1603))|0;
   $v6 = $1605;
   $1606 = $0;
   $1607 = ((($1606)) + 5112|0);
   $1608 = $addptr;
   $1609 = (($1607) + ($1608)|0);
   $1610 = ((($1609)) + 48|0);
   $1611 = HEAP16[$1610>>1]|0;
   $1612 = $1611 << 16 >> 16;
   $1613 = $offset;
   $1614 = (($1613) + 40)|0;
   $1615 = ((gb + (2952) | 0) + ($1614<<1)|0);
   $1616 = HEAP16[$1615>>1]|0;
   $1617 = $1616 << 16 >> 16;
   $1618 = Math_imul($1612, $1617)|0;
   $1619 = (($1618) + 16384)|0;
   $1620 = $1619 >> 15;
   $1621 = $v8;
   $1622 = (($1621) + ($1620))|0;
   $v8 = $1622;
   $1623 = $addptr;
   $1624 = (($1623) + 2)|0;
   $addptr = $1624;
   $1625 = $offset;
   $1626 = (($1625) + 1)|0;
   $offset = $1626;
   $1627 = $i;
   $1628 = (($1627) + -1)|0;
   $i = $1628;
  }
  $1629 = $v2;
  $1630 = $v4;
  $1631 = (($1629) + ($1630))|0;
  $v0 = $1631;
  $1632 = $v6;
  $1633 = $v8;
  $1634 = (($1632) + ($1633))|0;
  $v18 = $1634;
  $1635 = $v0;
  $1636 = $1635&65535;
  $1637 = $0;
  $1638 = ((($1637)) + 5112|0);
  $1639 = $1;
  $1640 = $1639 ^ 2;
  $1641 = (($1638) + ($1640)|0);
  HEAP16[$1641>>1] = $1636;
  $1642 = $v18;
  $1643 = $1642&65535;
  $1644 = $0;
  $1645 = ((($1644)) + 5112|0);
  $1646 = $1;
  $1647 = (($1646) + 2)|0;
  $1648 = $1647 ^ 2;
  $1649 = (($1645) + ($1648)|0);
  HEAP16[$1649>>1] = $1643;
  $1650 = $1;
  $1651 = (($1650) + 4)|0;
  $1 = $1651;
  $1652 = $addptr;
  $1653 = (($1652) + 48)|0;
  $addptr = $1653;
  $1654 = $offset;
  $1655 = (($1654) + 56)|0;
  $offset = $1655;
  $1656 = $x;
  $1657 = (($1656) + 1)|0;
  $x = $1657;
 }
 $1658 = $5;
 $1659 = $1658 >>> 1;
 $1660 = (16 - ($1659))|0;
 $1661 = (($1660) + 512)|0;
 $offset = $1661;
 $v4 = 0;
 $v2 = 0;
 $i = 0;
 while(1) {
  $1662 = $i;
  $1663 = ($1662|0)<(4);
  $1664 = $0;
  $1665 = ((($1664)) + 5112|0);
  if (!($1663)) {
   break;
  }
  $1666 = $addptr;
  $1667 = (($1665) + ($1666)|0);
  $1668 = HEAP16[$1667>>1]|0;
  $1669 = $1668 << 16 >> 16;
  $1670 = $offset;
  $1671 = (($1670) + 0)|0;
  $1672 = ((gb + (2952) | 0) + ($1671<<1)|0);
  $1673 = HEAP16[$1672>>1]|0;
  $1674 = $1673 << 16 >> 16;
  $1675 = Math_imul($1669, $1674)|0;
  $1676 = (($1675) + 16384)|0;
  $1677 = $1676 >> 15;
  $1678 = $v2;
  $1679 = (($1678) + ($1677))|0;
  $v2 = $1679;
  $1680 = $0;
  $1681 = ((($1680)) + 5112|0);
  $1682 = $addptr;
  $1683 = (($1681) + ($1682)|0);
  $1684 = ((($1683)) + 16|0);
  $1685 = HEAP16[$1684>>1]|0;
  $1686 = $1685 << 16 >> 16;
  $1687 = $offset;
  $1688 = (($1687) + 8)|0;
  $1689 = ((gb + (2952) | 0) + ($1688<<1)|0);
  $1690 = HEAP16[$1689>>1]|0;
  $1691 = $1690 << 16 >> 16;
  $1692 = Math_imul($1686, $1691)|0;
  $1693 = (($1692) + 16384)|0;
  $1694 = $1693 >> 15;
  $1695 = $v2;
  $1696 = (($1695) + ($1694))|0;
  $v2 = $1696;
  $1697 = $addptr;
  $1698 = (($1697) + 2)|0;
  $addptr = $1698;
  $1699 = $offset;
  $1700 = (($1699) + 1)|0;
  $offset = $1700;
  $1701 = $0;
  $1702 = ((($1701)) + 5112|0);
  $1703 = $addptr;
  $1704 = (($1702) + ($1703)|0);
  $1705 = HEAP16[$1704>>1]|0;
  $1706 = $1705 << 16 >> 16;
  $1707 = $offset;
  $1708 = (($1707) + 0)|0;
  $1709 = ((gb + (2952) | 0) + ($1708<<1)|0);
  $1710 = HEAP16[$1709>>1]|0;
  $1711 = $1710 << 16 >> 16;
  $1712 = Math_imul($1706, $1711)|0;
  $1713 = (($1712) + 16384)|0;
  $1714 = $1713 >> 15;
  $1715 = $v4;
  $1716 = (($1715) + ($1714))|0;
  $v4 = $1716;
  $1717 = $0;
  $1718 = ((($1717)) + 5112|0);
  $1719 = $addptr;
  $1720 = (($1718) + ($1719)|0);
  $1721 = ((($1720)) + 16|0);
  $1722 = HEAP16[$1721>>1]|0;
  $1723 = $1722 << 16 >> 16;
  $1724 = $offset;
  $1725 = (($1724) + 8)|0;
  $1726 = ((gb + (2952) | 0) + ($1725<<1)|0);
  $1727 = HEAP16[$1726>>1]|0;
  $1728 = $1727 << 16 >> 16;
  $1729 = Math_imul($1723, $1728)|0;
  $1730 = (($1729) + 16384)|0;
  $1731 = $1730 >> 15;
  $1732 = $v4;
  $1733 = (($1732) + ($1731))|0;
  $v4 = $1733;
  $1734 = $addptr;
  $1735 = (($1734) + 2)|0;
  $addptr = $1735;
  $1736 = $offset;
  $1737 = (($1736) + 1)|0;
  $offset = $1737;
  $1738 = $i;
  $1739 = (($1738) + 1)|0;
  $i = $1739;
 }
 $1740 = ((($1665)) + 3304|0);
 $1741 = HEAP32[$1740>>2]|0;
 $mult6 = $1741;
 $1742 = $0;
 $1743 = ((($1742)) + 5112|0);
 $1744 = ((($1743)) + 3308|0);
 $1745 = HEAP32[$1744>>2]|0;
 $mult4 = $1745;
 $1746 = $5;
 $1747 = $1746 & 2;
 $1748 = ($1747|0)!=(0);
 if ($1748) {
  $1749 = $v2;
  $1750 = $0;
  $1751 = ((($1750)) + 5112|0);
  $1752 = ((($1751)) + 3304|0);
  $1753 = HEAP32[$1752>>2]|0;
  $1754 = Math_imul($1749, $1753)|0;
  $1755 = $1754 >>> 16;
  $v2 = $1755;
  $1756 = $v2;
  $1757 = $1756&65535;
  $1758 = $0;
  $1759 = ((($1758)) + 5112|0);
  $1760 = $1;
  $1761 = $1760 ^ 2;
  $1762 = (($1759) + ($1761)|0);
  HEAP16[$1762>>1] = $1757;
 } else {
  $1763 = $v4;
  $1764 = $0;
  $1765 = ((($1764)) + 5112|0);
  $1766 = ((($1765)) + 3304|0);
  $1767 = HEAP32[$1766>>2]|0;
  $1768 = Math_imul($1763, $1767)|0;
  $1769 = $1768 >>> 16;
  $v4 = $1769;
  $1770 = $v4;
  $1771 = $1770&65535;
  $1772 = $0;
  $1773 = ((($1772)) + 5112|0);
  $1774 = $1;
  $1775 = $1774 ^ 2;
  $1776 = (($1773) + ($1775)|0);
  HEAP16[$1776>>1] = $1771;
  $1777 = $0;
  $1778 = ((($1777)) + 5112|0);
  $1779 = ((($1778)) + 3304|0);
  $1780 = HEAP32[$1779>>2]|0;
  $mult4 = $1780;
 }
 $1781 = $addptr;
 $1782 = (($1781) - 80)|0;
 $addptr = $1782;
 $x = 0;
 while(1) {
  $1783 = $x;
  $1784 = ($1783|0)<(8);
  if (!($1784)) {
   break;
  }
  $v8 = 0;
  $v6 = 0;
  $v4 = 0;
  $v2 = 0;
  $1785 = $5;
  $1786 = $1785 >>> 1;
  $1787 = (559 - ($1786))|0;
  $1788 = $x;
  $1789 = $1788<<6;
  $1790 = (($1787) + ($1789))|0;
  $offset = $1790;
  $i = 0;
  while(1) {
   $1791 = $i;
   $1792 = ($1791|0)<(4);
   if (!($1792)) {
    break;
   }
   $1793 = $0;
   $1794 = ((($1793)) + 5112|0);
   $1795 = $addptr;
   $1796 = (($1794) + ($1795)|0);
   $1797 = ((($1796)) + 32|0);
   $1798 = HEAP16[$1797>>1]|0;
   $1799 = $1798 << 16 >> 16;
   $1800 = $offset;
   $1801 = (($1800) + 0)|0;
   $1802 = ((gb + (2952) | 0) + ($1801<<1)|0);
   $1803 = HEAP16[$1802>>1]|0;
   $1804 = $1803 << 16 >> 16;
   $1805 = Math_imul($1799, $1804)|0;
   $1806 = (($1805) + 16384)|0;
   $1807 = $1806 >> 15;
   $1808 = $v2;
   $1809 = (($1808) + ($1807))|0;
   $v2 = $1809;
   $1810 = $0;
   $1811 = ((($1810)) + 5112|0);
   $1812 = $addptr;
   $1813 = (($1812) + 2)|0;
   $1814 = (($1811) + ($1813)|0);
   $1815 = ((($1814)) + 32|0);
   $1816 = HEAP16[$1815>>1]|0;
   $1817 = $1816 << 16 >> 16;
   $1818 = $offset;
   $1819 = (($1818) + 1)|0;
   $1820 = ((gb + (2952) | 0) + ($1819<<1)|0);
   $1821 = HEAP16[$1820>>1]|0;
   $1822 = $1821 << 16 >> 16;
   $1823 = Math_imul($1817, $1822)|0;
   $1824 = (($1823) + 16384)|0;
   $1825 = $1824 >> 15;
   $1826 = $v2;
   $1827 = (($1826) - ($1825))|0;
   $v2 = $1827;
   $1828 = $0;
   $1829 = ((($1828)) + 5112|0);
   $1830 = $addptr;
   $1831 = (($1829) + ($1830)|0);
   $1832 = ((($1831)) + 48|0);
   $1833 = HEAP16[$1832>>1]|0;
   $1834 = $1833 << 16 >> 16;
   $1835 = $offset;
   $1836 = (($1835) + 8)|0;
   $1837 = ((gb + (2952) | 0) + ($1836<<1)|0);
   $1838 = HEAP16[$1837>>1]|0;
   $1839 = $1838 << 16 >> 16;
   $1840 = Math_imul($1834, $1839)|0;
   $1841 = (($1840) + 16384)|0;
   $1842 = $1841 >> 15;
   $1843 = $v4;
   $1844 = (($1843) + ($1842))|0;
   $v4 = $1844;
   $1845 = $0;
   $1846 = ((($1845)) + 5112|0);
   $1847 = $addptr;
   $1848 = (($1847) + 2)|0;
   $1849 = (($1846) + ($1848)|0);
   $1850 = ((($1849)) + 48|0);
   $1851 = HEAP16[$1850>>1]|0;
   $1852 = $1851 << 16 >> 16;
   $1853 = $offset;
   $1854 = (($1853) + 9)|0;
   $1855 = ((gb + (2952) | 0) + ($1854<<1)|0);
   $1856 = HEAP16[$1855>>1]|0;
   $1857 = $1856 << 16 >> 16;
   $1858 = Math_imul($1852, $1857)|0;
   $1859 = (($1858) + 16384)|0;
   $1860 = $1859 >> 15;
   $1861 = $v4;
   $1862 = (($1861) - ($1860))|0;
   $v4 = $1862;
   $1863 = $0;
   $1864 = ((($1863)) + 5112|0);
   $1865 = $addptr;
   $1866 = (($1864) + ($1865)|0);
   $1867 = HEAP16[$1866>>1]|0;
   $1868 = $1867 << 16 >> 16;
   $1869 = $offset;
   $1870 = (($1869) + 32)|0;
   $1871 = ((gb + (2952) | 0) + ($1870<<1)|0);
   $1872 = HEAP16[$1871>>1]|0;
   $1873 = $1872 << 16 >> 16;
   $1874 = Math_imul($1868, $1873)|0;
   $1875 = (($1874) + 16384)|0;
   $1876 = $1875 >> 15;
   $1877 = $v6;
   $1878 = (($1877) + ($1876))|0;
   $v6 = $1878;
   $1879 = $0;
   $1880 = ((($1879)) + 5112|0);
   $1881 = $addptr;
   $1882 = (($1881) + 2)|0;
   $1883 = (($1880) + ($1882)|0);
   $1884 = HEAP16[$1883>>1]|0;
   $1885 = $1884 << 16 >> 16;
   $1886 = $offset;
   $1887 = (($1886) + 33)|0;
   $1888 = ((gb + (2952) | 0) + ($1887<<1)|0);
   $1889 = HEAP16[$1888>>1]|0;
   $1890 = $1889 << 16 >> 16;
   $1891 = Math_imul($1885, $1890)|0;
   $1892 = (($1891) + 16384)|0;
   $1893 = $1892 >> 15;
   $1894 = $v6;
   $1895 = (($1894) - ($1893))|0;
   $v6 = $1895;
   $1896 = $0;
   $1897 = ((($1896)) + 5112|0);
   $1898 = $addptr;
   $1899 = (($1897) + ($1898)|0);
   $1900 = ((($1899)) + 16|0);
   $1901 = HEAP16[$1900>>1]|0;
   $1902 = $1901 << 16 >> 16;
   $1903 = $offset;
   $1904 = (($1903) + 40)|0;
   $1905 = ((gb + (2952) | 0) + ($1904<<1)|0);
   $1906 = HEAP16[$1905>>1]|0;
   $1907 = $1906 << 16 >> 16;
   $1908 = Math_imul($1902, $1907)|0;
   $1909 = (($1908) + 16384)|0;
   $1910 = $1909 >> 15;
   $1911 = $v8;
   $1912 = (($1911) + ($1910))|0;
   $v8 = $1912;
   $1913 = $0;
   $1914 = ((($1913)) + 5112|0);
   $1915 = $addptr;
   $1916 = (($1915) + 2)|0;
   $1917 = (($1914) + ($1916)|0);
   $1918 = ((($1917)) + 16|0);
   $1919 = HEAP16[$1918>>1]|0;
   $1920 = $1919 << 16 >> 16;
   $1921 = $offset;
   $1922 = (($1921) + 41)|0;
   $1923 = ((gb + (2952) | 0) + ($1922<<1)|0);
   $1924 = HEAP16[$1923>>1]|0;
   $1925 = $1924 << 16 >> 16;
   $1926 = Math_imul($1920, $1925)|0;
   $1927 = (($1926) + 16384)|0;
   $1928 = $1927 >> 15;
   $1929 = $v8;
   $1930 = (($1929) - ($1928))|0;
   $v8 = $1930;
   $1931 = $addptr;
   $1932 = (($1931) + 4)|0;
   $addptr = $1932;
   $1933 = $offset;
   $1934 = (($1933) + 2)|0;
   $offset = $1934;
   $1935 = $i;
   $1936 = (($1935) + 1)|0;
   $i = $1936;
  }
  $1937 = $v2;
  $1938 = $v4;
  $1939 = (($1937) + ($1938))|0;
  $v01 = $1939;
  $1940 = $v6;
  $1941 = $v8;
  $1942 = (($1940) + ($1941))|0;
  $v182 = $1942;
  $1943 = $v01;
  $1944 = $1943&65535;
  $1945 = $0;
  $1946 = ((($1945)) + 5112|0);
  $1947 = $1;
  $1948 = (($1947) + 2)|0;
  $1949 = $1948 ^ 2;
  $1950 = (($1946) + ($1949)|0);
  HEAP16[$1950>>1] = $1944;
  $1951 = $v182;
  $1952 = $1951&65535;
  $1953 = $0;
  $1954 = ((($1953)) + 5112|0);
  $1955 = $1;
  $1956 = (($1955) + 4)|0;
  $1957 = $1956 ^ 2;
  $1958 = (($1954) + ($1957)|0);
  HEAP16[$1958>>1] = $1952;
  $1959 = $1;
  $1960 = (($1959) + 4)|0;
  $1 = $1960;
  $1961 = $addptr;
  $1962 = (($1961) - 80)|0;
  $addptr = $1962;
  $1963 = $x;
  $1964 = (($1963) + 1)|0;
  $x = $1964;
 }
 $1965 = $1;
 $tmp = $1965;
 $1966 = $mult6;
 $hi0 = $1966;
 $1967 = $mult4;
 $hi1 = $1967;
 $1968 = $hi0;
 $1969 = $1968 >> 16;
 $hi0 = $1969;
 $1970 = $hi1;
 $1971 = $1970 >> 16;
 $hi1 = $1971;
 $i = 0;
 while(1) {
  $1972 = $i;
  $1973 = ($1972|0)<(8);
  if (!($1973)) {
   break;
  }
  $1974 = $0;
  $1975 = ((($1974)) + 5112|0);
  $1976 = $tmp;
  $1977 = (($1976) - 64)|0;
  $1978 = $1977 ^ 2;
  $1979 = (($1975) + ($1978)|0);
  $1980 = HEAP16[$1979>>1]|0;
  $1981 = $1980 << 16 >> 16;
  $1982 = $hi0;
  $1983 = Math_imul($1981, $1982)|0;
  $vt = $1983;
  $1984 = $vt;
  $1985 = (_clamp_s16_93($1984)|0);
  $1986 = $0;
  $1987 = ((($1986)) + 5112|0);
  $1988 = $tmp;
  $1989 = (($1988) - 64)|0;
  $1990 = $1989 ^ 2;
  $1991 = (($1987) + ($1990)|0);
  HEAP16[$1991>>1] = $1985;
  $1992 = $0;
  $1993 = ((($1992)) + 5112|0);
  $1994 = $tmp;
  $1995 = (($1994) - 48)|0;
  $1996 = $1995 ^ 2;
  $1997 = (($1993) + ($1996)|0);
  $1998 = HEAP16[$1997>>1]|0;
  $1999 = $1998 << 16 >> 16;
  $2000 = $hi0;
  $2001 = Math_imul($1999, $2000)|0;
  $vt = $2001;
  $2002 = $vt;
  $2003 = (_clamp_s16_93($2002)|0);
  $2004 = $0;
  $2005 = ((($2004)) + 5112|0);
  $2006 = $tmp;
  $2007 = (($2006) - 48)|0;
  $2008 = $2007 ^ 2;
  $2009 = (($2005) + ($2008)|0);
  HEAP16[$2009>>1] = $2003;
  $2010 = $0;
  $2011 = ((($2010)) + 5112|0);
  $2012 = $tmp;
  $2013 = (($2012) - 30)|0;
  $2014 = $2013 ^ 2;
  $2015 = (($2011) + ($2014)|0);
  $2016 = HEAP16[$2015>>1]|0;
  $2017 = $2016 << 16 >> 16;
  $2018 = $hi1;
  $2019 = Math_imul($2017, $2018)|0;
  $vt = $2019;
  $2020 = $vt;
  $2021 = (_clamp_s16_93($2020)|0);
  $2022 = $0;
  $2023 = ((($2022)) + 5112|0);
  $2024 = $tmp;
  $2025 = (($2024) - 30)|0;
  $2026 = $2025 ^ 2;
  $2027 = (($2023) + ($2026)|0);
  HEAP16[$2027>>1] = $2021;
  $2028 = $0;
  $2029 = ((($2028)) + 5112|0);
  $2030 = $tmp;
  $2031 = (($2030) - 14)|0;
  $2032 = $2031 ^ 2;
  $2033 = (($2029) + ($2032)|0);
  $2034 = HEAP16[$2033>>1]|0;
  $2035 = $2034 << 16 >> 16;
  $2036 = $hi1;
  $2037 = Math_imul($2035, $2036)|0;
  $vt = $2037;
  $2038 = $vt;
  $2039 = (_clamp_s16_93($2038)|0);
  $2040 = $0;
  $2041 = ((($2040)) + 5112|0);
  $2042 = $tmp;
  $2043 = (($2042) - 14)|0;
  $2044 = $2043 ^ 2;
  $2045 = (($2041) + ($2044)|0);
  HEAP16[$2045>>1] = $2039;
  $2046 = $tmp;
  $2047 = (($2046) + 2)|0;
  $tmp = $2047;
  $2048 = $i;
  $2049 = (($2048) + 1)|0;
  $i = $2049;
 }
 STACKTOP = sp;return;
}
function _MP3AB0($v) {
 $v = $v|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $v;
 $i = 0;
 while(1) {
  $1 = $i;
  $2 = ($1|0)<(8);
  if (!($2)) {
   break;
  }
  $3 = $i;
  $4 = (0 + ($3))|0;
  $5 = $0;
  $6 = (($5) + ($4<<2)|0);
  $7 = HEAP32[$6>>2]|0;
  $8 = $i;
  $9 = (8 + ($8))|0;
  $10 = $0;
  $11 = (($10) + ($9<<2)|0);
  $12 = HEAP32[$11>>2]|0;
  $13 = (($7) + ($12))|0;
  $14 = $i;
  $15 = (16 + ($14))|0;
  $16 = $0;
  $17 = (($16) + ($15<<2)|0);
  HEAP32[$17>>2] = $13;
  $18 = $i;
  $19 = (0 + ($18))|0;
  $20 = $0;
  $21 = (($20) + ($19<<2)|0);
  $22 = HEAP32[$21>>2]|0;
  $23 = $i;
  $24 = (8 + ($23))|0;
  $25 = $0;
  $26 = (($25) + ($24<<2)|0);
  $27 = HEAP32[$26>>2]|0;
  $28 = (($22) - ($27))|0;
  $29 = $i;
  $30 = ((gb + (5064) | 0) + ($29<<1)|0);
  $31 = HEAP16[$30>>1]|0;
  $32 = $31&65535;
  $33 = Math_imul($28, $32)|0;
  $34 = $33 >> 16;
  $35 = $i;
  $36 = (24 + ($35))|0;
  $37 = $0;
  $38 = (($37) + ($36<<2)|0);
  HEAP32[$38>>2] = $34;
  $39 = $i;
  $40 = (($39) + 1)|0;
  $i = $40;
 }
 $i = 0;
 while(1) {
  $41 = $i;
  $42 = ($41|0)<(4);
  if (!($42)) {
   break;
  }
  $43 = $i;
  $44 = (16 + ($43))|0;
  $45 = $0;
  $46 = (($45) + ($44<<2)|0);
  $47 = HEAP32[$46>>2]|0;
  $48 = $i;
  $49 = (20 + ($48))|0;
  $50 = $0;
  $51 = (($50) + ($49<<2)|0);
  $52 = HEAP32[$51>>2]|0;
  $53 = (($47) + ($52))|0;
  $54 = $i;
  $55 = (0 + ($54))|0;
  $56 = $0;
  $57 = (($56) + ($55<<2)|0);
  HEAP32[$57>>2] = $53;
  $58 = $i;
  $59 = (16 + ($58))|0;
  $60 = $0;
  $61 = (($60) + ($59<<2)|0);
  $62 = HEAP32[$61>>2]|0;
  $63 = $i;
  $64 = (20 + ($63))|0;
  $65 = $0;
  $66 = (($65) + ($64<<2)|0);
  $67 = HEAP32[$66>>2]|0;
  $68 = (($62) - ($67))|0;
  $69 = $i;
  $70 = ((gb + (5080) | 0) + ($69<<1)|0);
  $71 = HEAP16[$70>>1]|0;
  $72 = $71&65535;
  $73 = Math_imul($68, $72)|0;
  $74 = $73 >> 16;
  $75 = $i;
  $76 = (4 + ($75))|0;
  $77 = $0;
  $78 = (($77) + ($76<<2)|0);
  HEAP32[$78>>2] = $74;
  $79 = $i;
  $80 = (24 + ($79))|0;
  $81 = $0;
  $82 = (($81) + ($80<<2)|0);
  $83 = HEAP32[$82>>2]|0;
  $84 = $i;
  $85 = (28 + ($84))|0;
  $86 = $0;
  $87 = (($86) + ($85<<2)|0);
  $88 = HEAP32[$87>>2]|0;
  $89 = (($83) + ($88))|0;
  $90 = $i;
  $91 = (8 + ($90))|0;
  $92 = $0;
  $93 = (($92) + ($91<<2)|0);
  HEAP32[$93>>2] = $89;
  $94 = $i;
  $95 = (24 + ($94))|0;
  $96 = $0;
  $97 = (($96) + ($95<<2)|0);
  $98 = HEAP32[$97>>2]|0;
  $99 = $i;
  $100 = (28 + ($99))|0;
  $101 = $0;
  $102 = (($101) + ($100<<2)|0);
  $103 = HEAP32[$102>>2]|0;
  $104 = (($98) - ($103))|0;
  $105 = $i;
  $106 = ((gb + (5080) | 0) + ($105<<1)|0);
  $107 = HEAP16[$106>>1]|0;
  $108 = $107&65535;
  $109 = Math_imul($104, $108)|0;
  $110 = $109 >> 16;
  $111 = $i;
  $112 = (12 + ($111))|0;
  $113 = $0;
  $114 = (($113) + ($112<<2)|0);
  HEAP32[$114>>2] = $110;
  $115 = $i;
  $116 = (($115) + 1)|0;
  $i = $116;
 }
 $i = 0;
 while(1) {
  $117 = $i;
  $118 = ($117|0)<(16);
  if (!($118)) {
   break;
  }
  $119 = $i;
  $120 = (0 + ($119))|0;
  $121 = $0;
  $122 = (($121) + ($120<<2)|0);
  $123 = HEAP32[$122>>2]|0;
  $124 = $i;
  $125 = (2 + ($124))|0;
  $126 = $0;
  $127 = (($126) + ($125<<2)|0);
  $128 = HEAP32[$127>>2]|0;
  $129 = (($123) + ($128))|0;
  $130 = $i;
  $131 = (16 + ($130))|0;
  $132 = $0;
  $133 = (($132) + ($131<<2)|0);
  HEAP32[$133>>2] = $129;
  $134 = $i;
  $135 = (0 + ($134))|0;
  $136 = $0;
  $137 = (($136) + ($135<<2)|0);
  $138 = HEAP32[$137>>2]|0;
  $139 = $i;
  $140 = (2 + ($139))|0;
  $141 = $0;
  $142 = (($141) + ($140<<2)|0);
  $143 = HEAP32[$142>>2]|0;
  $144 = (($138) - ($143))|0;
  $145 = ($144*60548)|0;
  $146 = $145 >> 16;
  $147 = $i;
  $148 = (18 + ($147))|0;
  $149 = $0;
  $150 = (($149) + ($148<<2)|0);
  HEAP32[$150>>2] = $146;
  $151 = $i;
  $152 = (1 + ($151))|0;
  $153 = $0;
  $154 = (($153) + ($152<<2)|0);
  $155 = HEAP32[$154>>2]|0;
  $156 = $i;
  $157 = (3 + ($156))|0;
  $158 = $0;
  $159 = (($158) + ($157<<2)|0);
  $160 = HEAP32[$159>>2]|0;
  $161 = (($155) + ($160))|0;
  $162 = $i;
  $163 = (17 + ($162))|0;
  $164 = $0;
  $165 = (($164) + ($163<<2)|0);
  HEAP32[$165>>2] = $161;
  $166 = $i;
  $167 = (1 + ($166))|0;
  $168 = $0;
  $169 = (($168) + ($167<<2)|0);
  $170 = HEAP32[$169>>2]|0;
  $171 = $i;
  $172 = (3 + ($171))|0;
  $173 = $0;
  $174 = (($173) + ($172<<2)|0);
  $175 = HEAP32[$174>>2]|0;
  $176 = (($170) - ($175))|0;
  $177 = ($176*25080)|0;
  $178 = $177 >> 16;
  $179 = $i;
  $180 = (19 + ($179))|0;
  $181 = $0;
  $182 = (($181) + ($180<<2)|0);
  HEAP32[$182>>2] = $178;
  $183 = $i;
  $184 = (($183) + 4)|0;
  $i = $184;
 }
 STACKTOP = sp;return;
}
function _clamp_s16_93($x) {
 $x = $x|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $0;
 $2 = ($1|0)<(-32768);
 $3 = $0;
 $4 = $2 ? -32768 : $3;
 $0 = $4;
 $5 = $0;
 $6 = ($5|0)>(32767);
 $7 = $0;
 $8 = $6 ? 32767 : $7;
 $0 = $8;
 $9 = $0;
 $10 = $9&65535;
 STACKTOP = sp;return ($10|0);
}
function _musyx_v1_task($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $9 = 0, $last_sample_ptr = 0, $musyx = 0, $output_ptr = 0, $sfd_count = 0, $sfd_ptr = 0, $sfx_index = 0, $sfx_ptr = 0, $state_ptr = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $voice_mask = 0, $voice_ptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1616|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $musyx = sp + 32|0;
 $0 = $hle;
 $1 = $0;
 $2 = (_dmem_u32_98($1,4080)|0);
 $3 = HEAP32[$2>>2]|0;
 $sfd_ptr = $3;
 $4 = $0;
 $5 = (_dmem_u32_98($4,4084)|0);
 $6 = HEAP32[$5>>2]|0;
 $sfd_count = $6;
 $7 = $0;
 $8 = ((($7)) + 84|0);
 $9 = HEAP32[$8>>2]|0;
 $10 = $sfd_ptr;
 $11 = $sfd_count;
 HEAP32[$vararg_buffer>>2] = $10;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $11;
 _HleVerboseMessage($9,(gb + (5752) | 0),$vararg_buffer);
 $12 = $0;
 $13 = $sfd_ptr;
 $14 = (($13) + 8)|0;
 $15 = (_dram_u32_100($12,$14)|0);
 $16 = HEAP32[$15>>2]|0;
 $state_ptr = $16;
 $17 = $0;
 $18 = ((($musyx)) + 1536|0);
 $19 = $state_ptr;
 $20 = (($19) + 256)|0;
 _load_base_vol($17,$18,$20);
 $21 = $0;
 $22 = ((($musyx)) + 768|0);
 $23 = $state_ptr;
 $24 = (($23) + 272)|0;
 _dram_load_u16_101($21,$22,$24,192);
 $25 = $0;
 $26 = ((($musyx)) + 1552|0);
 $27 = $state_ptr;
 $28 = (($27) + 656)|0;
 _dram_load_u16_101($25,$26,$28,4);
 while(1) {
  $29 = $0;
  $30 = $sfd_ptr;
  $31 = (($30) + 2)|0;
  $32 = (_dram_u16_102($29,$31)|0);
  $33 = HEAP16[$32>>1]|0;
  $sfx_index = $33;
  $34 = $0;
  $35 = $sfd_ptr;
  $36 = (($35) + 4)|0;
  $37 = (_dram_u32_100($34,$36)|0);
  $38 = HEAP32[$37>>2]|0;
  $voice_mask = $38;
  $39 = $0;
  $40 = $sfd_ptr;
  $41 = (($40) + 12)|0;
  $42 = (_dram_u32_100($39,$41)|0);
  $43 = HEAP32[$42>>2]|0;
  $sfx_ptr = $43;
  $44 = $sfd_ptr;
  $45 = (($44) + 16)|0;
  $voice_ptr = $45;
  $46 = $state_ptr;
  $47 = (($46) + 0)|0;
  $last_sample_ptr = $47;
  $48 = $0;
  $49 = ((($musyx)) + 1536|0);
  $50 = $voice_mask;
  $51 = $last_sample_ptr;
  _update_base_vol($48,$49,$50,$51,0,0);
  _init_subframes_v1($musyx);
  $52 = $0;
  $53 = $voice_ptr;
  $54 = $last_sample_ptr;
  $55 = (_voice_stage($52,$musyx,$53,$54)|0);
  $output_ptr = $55;
  $56 = $0;
  $57 = $sfx_ptr;
  $58 = $sfx_index;
  _sfx_stage($56,(fb + (71) | 0),$musyx,$57,$58);
  $59 = $0;
  $60 = $output_ptr;
  _interleave_stage_v1($59,$musyx,$60);
  $61 = $sfd_count;
  $62 = (($61) + -1)|0;
  $sfd_count = $62;
  $63 = $sfd_count;
  $64 = ($63|0)==(0);
  if ($64) {
   break;
  }
  $65 = $sfd_ptr;
  $66 = (($65) + 2576)|0;
  $sfd_ptr = $66;
  $67 = $0;
  $68 = $sfd_ptr;
  $69 = (($68) + 8)|0;
  $70 = (_dram_u32_100($67,$69)|0);
  $71 = HEAP32[$70>>2]|0;
  $state_ptr = $71;
 }
 $72 = $0;
 $73 = ((($musyx)) + 1536|0);
 $74 = $state_ptr;
 $75 = (($74) + 256)|0;
 _save_base_vol($72,$73,$75);
 $76 = $0;
 $77 = ((($musyx)) + 768|0);
 $78 = $state_ptr;
 $79 = (($78) + 272)|0;
 _dram_store_u16_103($76,$77,$79,192);
 $80 = $0;
 $81 = ((($musyx)) + 1552|0);
 $82 = $state_ptr;
 $83 = (($82) + 656)|0;
 _dram_store_u16_103($80,$81,$83,4);
 STACKTOP = sp;return;
}
function _musyx_v2_task($hle) {
 $hle = $hle|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0;
 var $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
 var $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0;
 var $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $last_sample_ptr = 0, $mask_14 = 0, $mask_15 = 0;
 var $mask_16 = 0, $musyx = 0, $output_ptr = 0, $ptr_10 = 0, $ptr_18 = 0, $ptr_1c = 0, $ptr_20 = 0, $ptr_24 = 0, $sfd_count = 0, $sfd_ptr = 0, $sfx_index = 0, $sfx_ptr = 0, $state_ptr = 0, $vararg_buffer = 0, $vararg_buffer2 = 0, $vararg_ptr1 = 0, $vararg_ptr5 = 0, $vararg_ptr6 = 0, $voice_mask = 0, $voice_ptr = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1648|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer2 = sp + 8|0;
 $vararg_buffer = sp;
 $musyx = sp + 64|0;
 $0 = $hle;
 $1 = $0;
 $2 = (_dmem_u32_98($1,4080)|0);
 $3 = HEAP32[$2>>2]|0;
 $sfd_ptr = $3;
 $4 = $0;
 $5 = (_dmem_u32_98($4,4084)|0);
 $6 = HEAP32[$5>>2]|0;
 $sfd_count = $6;
 $7 = $0;
 $8 = ((($7)) + 84|0);
 $9 = HEAP32[$8>>2]|0;
 $10 = $sfd_ptr;
 $11 = $sfd_count;
 HEAP32[$vararg_buffer>>2] = $10;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $11;
 _HleVerboseMessage($9,(gb + (5784) | 0),$vararg_buffer);
 while(1) {
  $12 = $0;
  $13 = $sfd_ptr;
  $14 = (($13) + 2)|0;
  $15 = (_dram_u16_102($12,$14)|0);
  $16 = HEAP16[$15>>1]|0;
  $sfx_index = $16;
  $17 = $0;
  $18 = $sfd_ptr;
  $19 = (($18) + 4)|0;
  $20 = (_dram_u32_100($17,$19)|0);
  $21 = HEAP32[$20>>2]|0;
  $voice_mask = $21;
  $22 = $0;
  $23 = $sfd_ptr;
  $24 = (($23) + 8)|0;
  $25 = (_dram_u32_100($22,$24)|0);
  $26 = HEAP32[$25>>2]|0;
  $state_ptr = $26;
  $27 = $0;
  $28 = $sfd_ptr;
  $29 = (($28) + 12)|0;
  $30 = (_dram_u32_100($27,$29)|0);
  $31 = HEAP32[$30>>2]|0;
  $sfx_ptr = $31;
  $32 = $sfd_ptr;
  $33 = (($32) + 40)|0;
  $voice_ptr = $33;
  $34 = $0;
  $35 = $sfd_ptr;
  $36 = (($35) + 16)|0;
  $37 = (_dram_u32_100($34,$36)|0);
  $38 = HEAP32[$37>>2]|0;
  $ptr_10 = $38;
  $39 = $0;
  $40 = $sfd_ptr;
  $41 = (($40) + 20)|0;
  $42 = (_dram_u8($39,$41)|0);
  $43 = HEAP8[$42>>0]|0;
  $mask_14 = $43;
  $44 = $0;
  $45 = $sfd_ptr;
  $46 = (($45) + 21)|0;
  $47 = (_dram_u8($44,$46)|0);
  $48 = HEAP8[$47>>0]|0;
  $mask_15 = $48;
  $49 = $0;
  $50 = $sfd_ptr;
  $51 = (($50) + 22)|0;
  $52 = (_dram_u16_102($49,$51)|0);
  $53 = HEAP16[$52>>1]|0;
  $mask_16 = $53;
  $54 = $0;
  $55 = $sfd_ptr;
  $56 = (($55) + 24)|0;
  $57 = (_dram_u32_100($54,$56)|0);
  $58 = HEAP32[$57>>2]|0;
  $ptr_18 = $58;
  $59 = $0;
  $60 = $sfd_ptr;
  $61 = (($60) + 28)|0;
  $62 = (_dram_u32_100($59,$61)|0);
  $63 = HEAP32[$62>>2]|0;
  $ptr_1c = $63;
  $64 = $0;
  $65 = $sfd_ptr;
  $66 = (($65) + 32)|0;
  $67 = (_dram_u32_100($64,$66)|0);
  $68 = HEAP32[$67>>2]|0;
  $ptr_20 = $68;
  $69 = $0;
  $70 = $sfd_ptr;
  $71 = (($70) + 36)|0;
  $72 = (_dram_u32_100($69,$71)|0);
  $73 = HEAP32[$72>>2]|0;
  $ptr_24 = $73;
  $74 = $state_ptr;
  $75 = (($74) + 0)|0;
  $last_sample_ptr = $75;
  $76 = $0;
  $77 = ((($musyx)) + 1536|0);
  $78 = $state_ptr;
  $79 = (($78) + 256)|0;
  _load_base_vol($76,$77,$79);
  $80 = $0;
  $81 = ((($musyx)) + 1552|0);
  $82 = $state_ptr;
  $83 = (($82) + 272)|0;
  _dram_load_u16_101($80,$81,$83,4);
  $84 = $0;
  $85 = ((($musyx)) + 1536|0);
  $86 = $voice_mask;
  $87 = $last_sample_ptr;
  $88 = $mask_15;
  $89 = $ptr_24;
  _update_base_vol($84,$85,$86,$87,$88,$89);
  _init_subframes_v2($musyx);
  $90 = $ptr_10;
  $91 = ($90|0)!=(0);
  if ($91) {
   $92 = $0;
   $93 = ((($92)) + 84|0);
   $94 = HEAP32[$93>>2]|0;
   $95 = $ptr_10;
   $96 = $mask_14;
   $97 = $96&255;
   $98 = $ptr_24;
   HEAP32[$vararg_buffer2>>2] = $95;
   $vararg_ptr5 = ((($vararg_buffer2)) + 4|0);
   HEAP32[$vararg_ptr5>>2] = $97;
   $vararg_ptr6 = ((($vararg_buffer2)) + 8|0);
   HEAP32[$vararg_ptr6>>2] = $98;
   _HleWarnMessage($94,(gb + (5816) | 0),$vararg_buffer2);
  }
  $99 = $0;
  $100 = $voice_ptr;
  $101 = $last_sample_ptr;
  $102 = (_voice_stage($99,$musyx,$100,$101)|0);
  $output_ptr = $102;
  $103 = $0;
  $104 = $sfx_ptr;
  $105 = $sfx_index;
  _sfx_stage($103,(fb + (72) | 0),$musyx,$104,$105);
  $106 = $0;
  $107 = $output_ptr;
  _dram_store_u16_103($106,$musyx,$107,192);
  $108 = $0;
  $109 = ((($musyx)) + 384|0);
  $110 = $output_ptr;
  $111 = (($110) + 384)|0;
  _dram_store_u16_103($108,$109,$111,192);
  $112 = $0;
  $113 = ((($musyx)) + 768|0);
  $114 = $output_ptr;
  $115 = (($114) + 768)|0;
  _dram_store_u16_103($112,$113,$115,192);
  $116 = $0;
  $117 = ((($musyx)) + 1536|0);
  $118 = $state_ptr;
  $119 = (($118) + 256)|0;
  _save_base_vol($116,$117,$119);
  $120 = $0;
  $121 = ((($musyx)) + 1552|0);
  $122 = $state_ptr;
  $123 = (($122) + 272)|0;
  _dram_store_u16_103($120,$121,$123,4);
  $124 = $mask_16;
  $125 = ($124<<16>>16)!=(0);
  if ($125) {
   $126 = $0;
   $127 = $mask_16;
   $128 = $ptr_18;
   $129 = $ptr_1c;
   $130 = $ptr_20;
   _interleave_stage_v2($126,$musyx,$127,$128,$129,$130);
  }
  $131 = $sfd_count;
  $132 = (($131) + -1)|0;
  $sfd_count = $132;
  $133 = $sfd_count;
  $134 = ($133|0)==(0);
  if ($134) {
   break;
  }
  $135 = $sfd_ptr;
  $136 = (($135) + 2600)|0;
  $sfd_ptr = $136;
 }
 STACKTOP = sp;return;
}
function _dmem_u32_98($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = ((($2)) + 4|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = $1;
 $6 = $5&65535;
 $7 = $6 & 4095;
 $8 = (_u32_119($4,$7)|0);
 STACKTOP = sp;return ($8|0);
}
function _dram_u32_100($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = HEAP32[$2>>2]|0;
 $4 = $1;
 $5 = $4 & 16777215;
 $6 = (_u32_119($3,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _load_base_vol($hle,$base_vol,$address) {
 $hle = $hle|0;
 $base_vol = $base_vol|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $base_vol;
 $2 = $address;
 $3 = $0;
 $4 = $2;
 $5 = (_dram_u16_102($3,$4)|0);
 $6 = HEAP16[$5>>1]|0;
 $7 = $6&65535;
 $8 = $7 << 16;
 $9 = $0;
 $10 = $2;
 $11 = (($10) + 8)|0;
 $12 = (_dram_u16_102($9,$11)|0);
 $13 = HEAP16[$12>>1]|0;
 $14 = $13&65535;
 $15 = $8 | $14;
 $16 = $1;
 HEAP32[$16>>2] = $15;
 $17 = $0;
 $18 = $2;
 $19 = (($18) + 2)|0;
 $20 = (_dram_u16_102($17,$19)|0);
 $21 = HEAP16[$20>>1]|0;
 $22 = $21&65535;
 $23 = $22 << 16;
 $24 = $0;
 $25 = $2;
 $26 = (($25) + 10)|0;
 $27 = (_dram_u16_102($24,$26)|0);
 $28 = HEAP16[$27>>1]|0;
 $29 = $28&65535;
 $30 = $23 | $29;
 $31 = $1;
 $32 = ((($31)) + 4|0);
 HEAP32[$32>>2] = $30;
 $33 = $0;
 $34 = $2;
 $35 = (($34) + 4)|0;
 $36 = (_dram_u16_102($33,$35)|0);
 $37 = HEAP16[$36>>1]|0;
 $38 = $37&65535;
 $39 = $38 << 16;
 $40 = $0;
 $41 = $2;
 $42 = (($41) + 12)|0;
 $43 = (_dram_u16_102($40,$42)|0);
 $44 = HEAP16[$43>>1]|0;
 $45 = $44&65535;
 $46 = $39 | $45;
 $47 = $1;
 $48 = ((($47)) + 8|0);
 HEAP32[$48>>2] = $46;
 $49 = $0;
 $50 = $2;
 $51 = (($50) + 6)|0;
 $52 = (_dram_u16_102($49,$51)|0);
 $53 = HEAP16[$52>>1]|0;
 $54 = $53&65535;
 $55 = $54 << 16;
 $56 = $0;
 $57 = $2;
 $58 = (($57) + 14)|0;
 $59 = (_dram_u16_102($56,$58)|0);
 $60 = HEAP16[$59>>1]|0;
 $61 = $60&65535;
 $62 = $55 | $61;
 $63 = $1;
 $64 = ((($63)) + 12|0);
 HEAP32[$64>>2] = $62;
 STACKTOP = sp;return;
}
function _dram_load_u16_101($hle,$dst,$address,$count) {
 $hle = $hle|0;
 $dst = $dst|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $0;
 $6 = HEAP32[$5>>2]|0;
 $7 = $2;
 $8 = $7 & 16777215;
 $9 = $3;
 _load_u16($4,$6,$8,$9);
 STACKTOP = sp;return;
}
function _dram_u16_102($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = HEAP32[$2>>2]|0;
 $4 = $1;
 $5 = $4 & 16777215;
 $6 = (_u16_115($3,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _update_base_vol($hle,$base_vol,$voice_mask,$last_sample_ptr,$mask_15,$ptr_24) {
 $hle = $hle|0;
 $base_vol = $base_vol|0;
 $voice_mask = $voice_mask|0;
 $last_sample_ptr = $last_sample_ptr|0;
 $mask_15 = $mask_15|0;
 $ptr_24 = $ptr_24|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $12 = 0;
 var $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $i = 0, $k = 0, $mask = 0, $vararg_buffer = 0, $vararg_buffer1 = 0;
 var $vararg_buffer7 = 0, $vararg_ptr10 = 0, $vararg_ptr11 = 0, $vararg_ptr12 = 0, $vararg_ptr4 = 0, $vararg_ptr5 = 0, $vararg_ptr6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $base_vol;
 $2 = $voice_mask;
 $3 = $last_sample_ptr;
 $4 = $mask_15;
 $5 = $ptr_24;
 $6 = $0;
 $7 = ((($6)) + 84|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = $2;
 HEAP32[$vararg_buffer>>2] = $9;
 _HleVerboseMessage($8,(gb + (6499) | 0),$vararg_buffer);
 $10 = $0;
 $11 = ((($10)) + 84|0);
 $12 = HEAP32[$11>>2]|0;
 $13 = $1;
 $14 = HEAP32[$13>>2]|0;
 $15 = $1;
 $16 = ((($15)) + 4|0);
 $17 = HEAP32[$16>>2]|0;
 $18 = $1;
 $19 = ((($18)) + 8|0);
 $20 = HEAP32[$19>>2]|0;
 $21 = $1;
 $22 = ((($21)) + 12|0);
 $23 = HEAP32[$22>>2]|0;
 HEAP32[$vararg_buffer1>>2] = $14;
 $vararg_ptr4 = ((($vararg_buffer1)) + 4|0);
 HEAP32[$vararg_ptr4>>2] = $17;
 $vararg_ptr5 = ((($vararg_buffer1)) + 8|0);
 HEAP32[$vararg_ptr5>>2] = $20;
 $vararg_ptr6 = ((($vararg_buffer1)) + 12|0);
 HEAP32[$vararg_ptr6>>2] = $23;
 _HleVerboseMessage($12,(gb + (6526) | 0),$vararg_buffer1);
 $24 = $2;
 $25 = ($24|0)!=(0);
 L1: do {
  if ($25) {
   $i = 0;
   $mask = 1;
   while(1) {
    $26 = $i;
    $27 = ($26>>>0)<(32);
    if (!($27)) {
     break L1;
    }
    $28 = $2;
    $29 = $mask;
    $30 = $28 & $29;
    $31 = ($30|0)==(0);
    L6: do {
     if (!($31)) {
      $k = 0;
      while(1) {
       $32 = $k;
       $33 = ($32>>>0)<(4);
       if (!($33)) {
        break L6;
       }
       $34 = $0;
       $35 = $3;
       $36 = $k;
       $37 = $36<<1;
       $38 = (($35) + ($37))|0;
       $39 = (_dram_u16_102($34,$38)|0);
       $40 = HEAP16[$39>>1]|0;
       $41 = $40 << 16 >> 16;
       $42 = $k;
       $43 = $1;
       $44 = (($43) + ($42<<2)|0);
       $45 = HEAP32[$44>>2]|0;
       $46 = (($45) + ($41))|0;
       HEAP32[$44>>2] = $46;
       $47 = $k;
       $48 = (($47) + 1)|0;
       $k = $48;
      }
     }
    } while(0);
    $49 = $i;
    $50 = (($49) + 1)|0;
    $i = $50;
    $51 = $mask;
    $52 = $51 << 1;
    $mask = $52;
    $53 = $3;
    $54 = (($53) + 8)|0;
    $3 = $54;
   }
  }
 } while(0);
 $55 = $4;
 $56 = $55&255;
 $57 = ($56|0)!=(0);
 L13: do {
  if ($57) {
   $i = 0;
   $mask = 1;
   while(1) {
    $58 = $i;
    $59 = ($58>>>0)<(4);
    if (!($59)) {
     break L13;
    }
    $60 = $4;
    $61 = $60&255;
    $62 = $mask;
    $63 = $61 & $62;
    $64 = ($63|0)==(0);
    L18: do {
     if (!($64)) {
      $k = 0;
      while(1) {
       $65 = $k;
       $66 = ($65>>>0)<(4);
       if (!($66)) {
        break L18;
       }
       $67 = $0;
       $68 = $5;
       $69 = $k;
       $70 = $69<<1;
       $71 = (($68) + ($70))|0;
       $72 = (_dram_u16_102($67,$71)|0);
       $73 = HEAP16[$72>>1]|0;
       $74 = $73 << 16 >> 16;
       $75 = $k;
       $76 = $1;
       $77 = (($76) + ($75<<2)|0);
       $78 = HEAP32[$77>>2]|0;
       $79 = (($78) + ($74))|0;
       HEAP32[$77>>2] = $79;
       $80 = $k;
       $81 = (($80) + 1)|0;
       $k = $81;
      }
     }
    } while(0);
    $82 = $i;
    $83 = (($82) + 1)|0;
    $i = $83;
    $84 = $mask;
    $85 = $84 << 1;
    $mask = $85;
    $86 = $5;
    $87 = (($86) + 8)|0;
    $5 = $87;
   }
  }
 } while(0);
 $k = 0;
 while(1) {
  $88 = $k;
  $89 = ($88>>>0)<(4);
  if (!($89)) {
   break;
  }
  $90 = $k;
  $91 = $1;
  $92 = (($91) + ($90<<2)|0);
  $93 = HEAP32[$92>>2]|0;
  $94 = ($93*63568)|0;
  $95 = $94 >> 16;
  $96 = $k;
  $97 = $1;
  $98 = (($97) + ($96<<2)|0);
  HEAP32[$98>>2] = $95;
  $99 = $k;
  $100 = (($99) + 1)|0;
  $k = $100;
 }
 $101 = $0;
 $102 = ((($101)) + 84|0);
 $103 = HEAP32[$102>>2]|0;
 $104 = $1;
 $105 = HEAP32[$104>>2]|0;
 $106 = $1;
 $107 = ((($106)) + 4|0);
 $108 = HEAP32[$107>>2]|0;
 $109 = $1;
 $110 = ((($109)) + 8|0);
 $111 = HEAP32[$110>>2]|0;
 $112 = $1;
 $113 = ((($112)) + 12|0);
 $114 = HEAP32[$113>>2]|0;
 HEAP32[$vararg_buffer7>>2] = $105;
 $vararg_ptr10 = ((($vararg_buffer7)) + 4|0);
 HEAP32[$vararg_ptr10>>2] = $108;
 $vararg_ptr11 = ((($vararg_buffer7)) + 8|0);
 HEAP32[$vararg_ptr11>>2] = $111;
 $vararg_ptr12 = ((($vararg_buffer7)) + 12|0);
 HEAP32[$vararg_ptr12>>2] = $114;
 _HleVerboseMessage($103,(gb + (6565) | 0),$vararg_buffer7);
 STACKTOP = sp;return;
}
function _init_subframes_v1($musyx) {
 $musyx = $musyx|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $base_cc0 = 0, $base_e50 = 0, $cc0 = 0, $e50 = 0, $i = 0, $left = 0, $right = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $musyx;
 $1 = $0;
 $2 = ((($1)) + 1536|0);
 $3 = ((($2)) + 8|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = (_clamp_s16_106($4)|0);
 $base_cc0 = $5;
 $6 = $0;
 $7 = ((($6)) + 1536|0);
 $8 = ((($7)) + 12|0);
 $9 = HEAP32[$8>>2]|0;
 $10 = (_clamp_s16_106($9)|0);
 $base_e50 = $10;
 $11 = $0;
 $left = $11;
 $12 = $0;
 $13 = ((($12)) + 384|0);
 $right = $13;
 $14 = $0;
 $15 = ((($14)) + 768|0);
 $cc0 = $15;
 $16 = $0;
 $17 = ((($16)) + 1152|0);
 $e50 = $17;
 $i = 0;
 while(1) {
  $18 = $i;
  $19 = ($18>>>0)<(192);
  if (!($19)) {
   break;
  }
  $20 = $base_e50;
  $21 = $e50;
  $22 = ((($21)) + 2|0);
  $e50 = $22;
  HEAP16[$21>>1] = $20;
  $23 = $cc0;
  $24 = HEAP16[$23>>1]|0;
  $25 = $24 << 16 >> 16;
  $26 = $base_cc0;
  $27 = $26 << 16 >> 16;
  $28 = (($25) + ($27))|0;
  $29 = (_clamp_s16_106($28)|0);
  $30 = $left;
  $31 = ((($30)) + 2|0);
  $left = $31;
  HEAP16[$30>>1] = $29;
  $32 = $cc0;
  $33 = HEAP16[$32>>1]|0;
  $34 = $33 << 16 >> 16;
  $35 = (0 - ($34))|0;
  $36 = $base_cc0;
  $37 = $36 << 16 >> 16;
  $38 = (($35) - ($37))|0;
  $39 = (_clamp_s16_106($38)|0);
  $40 = $right;
  $41 = ((($40)) + 2|0);
  $right = $41;
  HEAP16[$40>>1] = $39;
  $42 = $cc0;
  $43 = ((($42)) + 2|0);
  $cc0 = $43;
  HEAP16[$42>>1] = 0;
  $44 = $i;
  $45 = (($44) + 1)|0;
  $i = $45;
 }
 STACKTOP = sp;return;
}
function _voice_stage($hle,$musyx,$voice_ptr,$last_sample_ptr) {
 $hle = $hle|0;
 $musyx = $musyx|0;
 $voice_ptr = $voice_ptr|0;
 $last_sample_ptr = $last_sample_ptr|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, $offset = 0, $output_ptr = 0, $samples = 0, $segbase = 0, $vararg_buffer = 0;
 var $vararg_buffer1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1072|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $samples = sp + 48|0;
 $segbase = sp + 16|0;
 $offset = sp + 12|0;
 $0 = $hle;
 $1 = $musyx;
 $2 = $voice_ptr;
 $3 = $last_sample_ptr;
 $i = 0;
 $4 = $0;
 $5 = $2;
 $6 = (($5) + 36)|0;
 $7 = (($6) + 8)|0;
 $8 = (_dram_u16_102($4,$7)|0);
 $9 = HEAP16[$8>>1]|0;
 $10 = $9&65535;
 $11 = ($10|0)==(0);
 if ($11) {
  $12 = $0;
  $13 = ((($12)) + 84|0);
  $14 = HEAP32[$13>>2]|0;
  _HleVerboseMessage($14,(gb + (6142) | 0),$vararg_buffer);
  $15 = $0;
  $16 = $2;
  $17 = (($16) + 68)|0;
  $18 = (_dram_u32_100($15,$17)|0);
  $19 = HEAP32[$18>>2]|0;
  $output_ptr = $19;
  $53 = $output_ptr;
  STACKTOP = sp;return ($53|0);
 }
 while(1) {
  $20 = $0;
  $21 = ((($20)) + 84|0);
  $22 = HEAP32[$21>>2]|0;
  $23 = $i;
  HEAP32[$vararg_buffer1>>2] = $23;
  _HleVerboseMessage($22,(gb + (6163) | 0),$vararg_buffer1);
  $24 = $0;
  $25 = $2;
  $26 = (($25) + 60)|0;
  $27 = (_dram_u8($24,$26)|0);
  $28 = HEAP8[$27>>0]|0;
  $29 = $28&255;
  $30 = ($29|0)==(0);
  $31 = $0;
  $32 = $2;
  if ($30) {
   _load_samples_PCM16($31,$32,$samples,$segbase,$offset);
  } else {
   _load_samples_ADPCM($31,$32,$samples,$segbase,$offset);
  }
  $33 = $0;
  $34 = $1;
  $35 = $2;
  $36 = HEAP32[$segbase>>2]|0;
  $37 = HEAP32[$offset>>2]|0;
  $38 = $3;
  $39 = $i;
  $40 = $39<<3;
  $41 = (($38) + ($40))|0;
  _mix_voice_samples($33,$34,$35,$samples,$36,$37,$41);
  $42 = $0;
  $43 = $2;
  $44 = (($43) + 68)|0;
  $45 = (_dram_u32_100($42,$44)|0);
  $46 = HEAP32[$45>>2]|0;
  $output_ptr = $46;
  $47 = $output_ptr;
  $48 = ($47|0)!=(0);
  if ($48) {
   break;
  }
  $49 = $i;
  $50 = (($49) + 1)|0;
  $i = $50;
  $51 = $2;
  $52 = (($51) + 80)|0;
  $2 = $52;
 }
 $53 = $output_ptr;
 STACKTOP = sp;return ($53|0);
}
function _mix_sfx_with_main_subframes_v1($musyx,$subframe,$UNUSED_gains) {
 $musyx = $musyx|0;
 $subframe = $subframe|0;
 $UNUSED_gains = $UNUSED_gains|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, $v = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $musyx;
 $1 = $subframe;
 $2 = $UNUSED_gains;
 $i = 0;
 while(1) {
  $3 = $i;
  $4 = ($3>>>0)<(192);
  if (!($4)) {
   break;
  }
  $5 = $i;
  $6 = $1;
  $7 = (($6) + ($5<<1)|0);
  $8 = HEAP16[$7>>1]|0;
  $v = $8;
  $9 = $i;
  $10 = $0;
  $11 = (($10) + ($9<<1)|0);
  $12 = HEAP16[$11>>1]|0;
  $13 = $12 << 16 >> 16;
  $14 = $v;
  $15 = $14 << 16 >> 16;
  $16 = (($13) + ($15))|0;
  $17 = (_clamp_s16_106($16)|0);
  $18 = $i;
  $19 = $0;
  $20 = (($19) + ($18<<1)|0);
  HEAP16[$20>>1] = $17;
  $21 = $i;
  $22 = $0;
  $23 = ((($22)) + 384|0);
  $24 = (($23) + ($21<<1)|0);
  $25 = HEAP16[$24>>1]|0;
  $26 = $25 << 16 >> 16;
  $27 = $v;
  $28 = $27 << 16 >> 16;
  $29 = (($26) + ($28))|0;
  $30 = (_clamp_s16_106($29)|0);
  $31 = $i;
  $32 = $0;
  $33 = ((($32)) + 384|0);
  $34 = (($33) + ($31<<1)|0);
  HEAP16[$34>>1] = $30;
  $35 = $i;
  $36 = (($35) + 1)|0;
  $i = $36;
 }
 STACKTOP = sp;return;
}
function _sfx_stage($hle,$mix_sfx_with_main_subframes,$musyx,$sfx_ptr,$idx) {
 $hle = $hle|0;
 $mix_sfx_with_main_subframes = $mix_sfx_with_main_subframes|0;
 $musyx = $musyx|0;
 $sfx_ptr = $sfx_ptr|0;
 $idx = $idx|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0;
 var $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0;
 var $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0;
 var $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $buffer = 0, $cbuffer_length = 0, $cbuffer_ptr = 0, $delayed = 0, $dlength = 0, $dpos = 0, $fir4_hcoeffs = 0, $fir4_hgain = 0, $i = 0, $pos = 0;
 var $sfx_gains = 0, $subframe = 0, $tap_count = 0, $tap_delays = 0, $tap_gains = 0, $vararg_buffer = 0, $vararg_buffer13 = 0, $vararg_buffer2 = 0, $vararg_buffer32 = 0, $vararg_buffer6 = 0, $vararg_ptr1 = 0, $vararg_ptr10 = 0, $vararg_ptr11 = 0, $vararg_ptr12 = 0, $vararg_ptr16 = 0, $vararg_ptr17 = 0, $vararg_ptr18 = 0, $vararg_ptr19 = 0, $vararg_ptr20 = 0, $vararg_ptr21 = 0;
 var $vararg_ptr22 = 0, $vararg_ptr23 = 0, $vararg_ptr24 = 0, $vararg_ptr25 = 0, $vararg_ptr26 = 0, $vararg_ptr27 = 0, $vararg_ptr28 = 0, $vararg_ptr29 = 0, $vararg_ptr30 = 0, $vararg_ptr31 = 0, $vararg_ptr35 = 0, $vararg_ptr5 = 0, $vararg_ptr9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1024|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer32 = sp + 112|0;
 $vararg_buffer13 = sp + 40|0;
 $vararg_buffer6 = sp + 16|0;
 $vararg_buffer2 = sp + 8|0;
 $vararg_buffer = sp;
 $buffer = sp + 616|0;
 $tap_delays = sp + 144|0;
 $tap_gains = sp + 600|0;
 $fir4_hcoeffs = sp + 592|0;
 $delayed = sp + 208|0;
 $sfx_gains = sp + 200|0;
 $0 = $hle;
 $1 = $mix_sfx_with_main_subframes;
 $2 = $musyx;
 $3 = $sfx_ptr;
 $4 = $idx;
 $5 = ((($buffer)) + 8|0);
 $subframe = $5;
 $6 = $4;
 $7 = $6&65535;
 $8 = ($7*192)|0;
 $pos = $8;
 $9 = $0;
 $10 = ((($9)) + 84|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = $3;
 $13 = $4;
 $14 = $13&65535;
 HEAP32[$vararg_buffer>>2] = $12;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $14;
 _HleVerboseMessage($11,(gb + (5923) | 0),$vararg_buffer);
 $15 = $3;
 $16 = ($15|0)==(0);
 if ($16) {
  STACKTOP = sp;return;
 }
 $17 = $0;
 $18 = $3;
 $19 = (($18) + 0)|0;
 $20 = (_dram_u32_100($17,$19)|0);
 $21 = HEAP32[$20>>2]|0;
 $cbuffer_ptr = $21;
 $22 = $0;
 $23 = $3;
 $24 = (($23) + 4)|0;
 $25 = (_dram_u32_100($22,$24)|0);
 $26 = HEAP32[$25>>2]|0;
 $cbuffer_length = $26;
 $27 = $0;
 $28 = $3;
 $29 = (($28) + 8)|0;
 $30 = (_dram_u16_102($27,$29)|0);
 $31 = HEAP16[$30>>1]|0;
 $tap_count = $31;
 $32 = $0;
 $33 = $3;
 $34 = (($33) + 12)|0;
 _dram_load_u32($32,$tap_delays,$34,8);
 $35 = $0;
 $36 = $3;
 $37 = (($36) + 44)|0;
 _dram_load_u16_101($35,$tap_gains,$37,8);
 $38 = $0;
 $39 = $3;
 $40 = (($39) + 10)|0;
 $41 = (_dram_u16_102($38,$40)|0);
 $42 = HEAP16[$41>>1]|0;
 $fir4_hgain = $42;
 $43 = $0;
 $44 = $3;
 $45 = (($44) + 64)|0;
 _dram_load_u16_101($43,$fir4_hcoeffs,$45,4);
 $46 = $0;
 $47 = $3;
 $48 = (($47) + 60)|0;
 $49 = (_dram_u16_102($46,$48)|0);
 $50 = HEAP16[$49>>1]|0;
 HEAP16[$sfx_gains>>1] = $50;
 $51 = $0;
 $52 = $3;
 $53 = (($52) + 62)|0;
 $54 = (_dram_u16_102($51,$53)|0);
 $55 = HEAP16[$54>>1]|0;
 $56 = ((($sfx_gains)) + 2|0);
 HEAP16[$56>>1] = $55;
 $57 = $0;
 $58 = ((($57)) + 84|0);
 $59 = HEAP32[$58>>2]|0;
 $60 = $cbuffer_ptr;
 $61 = $cbuffer_length;
 HEAP32[$vararg_buffer2>>2] = $60;
 $vararg_ptr5 = ((($vararg_buffer2)) + 4|0);
 HEAP32[$vararg_ptr5>>2] = $61;
 _HleVerboseMessage($59,(gb + (5941) | 0),$vararg_buffer2);
 $62 = $0;
 $63 = ((($62)) + 84|0);
 $64 = HEAP32[$63>>2]|0;
 $65 = $fir4_hgain;
 $66 = $65 << 16 >> 16;
 $67 = HEAP16[$fir4_hcoeffs>>1]|0;
 $68 = $67 << 16 >> 16;
 $69 = ((($fir4_hcoeffs)) + 2|0);
 $70 = HEAP16[$69>>1]|0;
 $71 = $70 << 16 >> 16;
 $72 = ((($fir4_hcoeffs)) + 4|0);
 $73 = HEAP16[$72>>1]|0;
 $74 = $73 << 16 >> 16;
 $75 = ((($fir4_hcoeffs)) + 6|0);
 $76 = HEAP16[$75>>1]|0;
 $77 = $76 << 16 >> 16;
 HEAP32[$vararg_buffer6>>2] = $66;
 $vararg_ptr9 = ((($vararg_buffer6)) + 4|0);
 HEAP32[$vararg_ptr9>>2] = $68;
 $vararg_ptr10 = ((($vararg_buffer6)) + 8|0);
 HEAP32[$vararg_ptr10>>2] = $71;
 $vararg_ptr11 = ((($vararg_buffer6)) + 12|0);
 HEAP32[$vararg_ptr11>>2] = $74;
 $vararg_ptr12 = ((($vararg_buffer6)) + 16|0);
 HEAP32[$vararg_ptr12>>2] = $77;
 _HleVerboseMessage($64,(gb + (5969) | 0),$vararg_buffer6);
 $78 = $0;
 $79 = ((($78)) + 84|0);
 $80 = HEAP32[$79>>2]|0;
 $81 = $tap_count;
 $82 = $81&65535;
 $83 = HEAP32[$tap_delays>>2]|0;
 $84 = ((($tap_delays)) + 4|0);
 $85 = HEAP32[$84>>2]|0;
 $86 = ((($tap_delays)) + 8|0);
 $87 = HEAP32[$86>>2]|0;
 $88 = ((($tap_delays)) + 12|0);
 $89 = HEAP32[$88>>2]|0;
 $90 = ((($tap_delays)) + 16|0);
 $91 = HEAP32[$90>>2]|0;
 $92 = ((($tap_delays)) + 20|0);
 $93 = HEAP32[$92>>2]|0;
 $94 = ((($tap_delays)) + 24|0);
 $95 = HEAP32[$94>>2]|0;
 $96 = ((($tap_delays)) + 28|0);
 $97 = HEAP32[$96>>2]|0;
 $98 = HEAP16[$tap_gains>>1]|0;
 $99 = $98 << 16 >> 16;
 $100 = ((($tap_gains)) + 2|0);
 $101 = HEAP16[$100>>1]|0;
 $102 = $101 << 16 >> 16;
 $103 = ((($tap_gains)) + 4|0);
 $104 = HEAP16[$103>>1]|0;
 $105 = $104 << 16 >> 16;
 $106 = ((($tap_gains)) + 6|0);
 $107 = HEAP16[$106>>1]|0;
 $108 = $107 << 16 >> 16;
 $109 = ((($tap_gains)) + 8|0);
 $110 = HEAP16[$109>>1]|0;
 $111 = $110 << 16 >> 16;
 $112 = ((($tap_gains)) + 10|0);
 $113 = HEAP16[$112>>1]|0;
 $114 = $113 << 16 >> 16;
 $115 = ((($tap_gains)) + 12|0);
 $116 = HEAP16[$115>>1]|0;
 $117 = $116 << 16 >> 16;
 $118 = ((($tap_gains)) + 14|0);
 $119 = HEAP16[$118>>1]|0;
 $120 = $119 << 16 >> 16;
 HEAP32[$vararg_buffer13>>2] = $82;
 $vararg_ptr16 = ((($vararg_buffer13)) + 4|0);
 HEAP32[$vararg_ptr16>>2] = $83;
 $vararg_ptr17 = ((($vararg_buffer13)) + 8|0);
 HEAP32[$vararg_ptr17>>2] = $85;
 $vararg_ptr18 = ((($vararg_buffer13)) + 12|0);
 HEAP32[$vararg_ptr18>>2] = $87;
 $vararg_ptr19 = ((($vararg_buffer13)) + 16|0);
 HEAP32[$vararg_ptr19>>2] = $89;
 $vararg_ptr20 = ((($vararg_buffer13)) + 20|0);
 HEAP32[$vararg_ptr20>>2] = $91;
 $vararg_ptr21 = ((($vararg_buffer13)) + 24|0);
 HEAP32[$vararg_ptr21>>2] = $93;
 $vararg_ptr22 = ((($vararg_buffer13)) + 28|0);
 HEAP32[$vararg_ptr22>>2] = $95;
 $vararg_ptr23 = ((($vararg_buffer13)) + 32|0);
 HEAP32[$vararg_ptr23>>2] = $97;
 $vararg_ptr24 = ((($vararg_buffer13)) + 36|0);
 HEAP32[$vararg_ptr24>>2] = $99;
 $vararg_ptr25 = ((($vararg_buffer13)) + 40|0);
 HEAP32[$vararg_ptr25>>2] = $102;
 $vararg_ptr26 = ((($vararg_buffer13)) + 44|0);
 HEAP32[$vararg_ptr26>>2] = $105;
 $vararg_ptr27 = ((($vararg_buffer13)) + 48|0);
 HEAP32[$vararg_ptr27>>2] = $108;
 $vararg_ptr28 = ((($vararg_buffer13)) + 52|0);
 HEAP32[$vararg_ptr28>>2] = $111;
 $vararg_ptr29 = ((($vararg_buffer13)) + 56|0);
 HEAP32[$vararg_ptr29>>2] = $114;
 $vararg_ptr30 = ((($vararg_buffer13)) + 60|0);
 HEAP32[$vararg_ptr30>>2] = $117;
 $vararg_ptr31 = ((($vararg_buffer13)) + 64|0);
 HEAP32[$vararg_ptr31>>2] = $120;
 _HleVerboseMessage($80,(gb + (6013) | 0),$vararg_buffer13);
 $121 = $0;
 $122 = ((($121)) + 84|0);
 $123 = HEAP32[$122>>2]|0;
 $124 = HEAP16[$sfx_gains>>1]|0;
 $125 = $124&65535;
 $126 = ((($sfx_gains)) + 2|0);
 $127 = HEAP16[$126>>1]|0;
 $128 = $127&65535;
 HEAP32[$vararg_buffer32>>2] = $125;
 $vararg_ptr35 = ((($vararg_buffer32)) + 4|0);
 HEAP32[$vararg_ptr35>>2] = $128;
 _HleVerboseMessage($123,(gb + (6122) | 0),$vararg_buffer32);
 $129 = $subframe;
 _memset(($129|0),0,384)|0;
 $i = 0;
 while(1) {
  $130 = $i;
  $131 = $tap_count;
  $132 = $131&65535;
  $133 = ($130>>>0)<($132>>>0);
  if (!($133)) {
   break;
  }
  $134 = $pos;
  $135 = $i;
  $136 = (($tap_delays) + ($135<<2)|0);
  $137 = HEAP32[$136>>2]|0;
  $138 = (($134) - ($137))|0;
  $dpos = $138;
  $139 = $dpos;
  $140 = ($139|0)<=(0);
  if ($140) {
   $141 = $cbuffer_length;
   $142 = $dpos;
   $143 = (($142) + ($141))|0;
   $dpos = $143;
  }
  $dlength = 192;
  $144 = $dpos;
  $145 = (($144) + 192)|0;
  $146 = $cbuffer_length;
  $147 = ($145>>>0)>($146>>>0);
  if ($147) {
   $148 = $cbuffer_length;
   $149 = $dpos;
   $150 = (($148) - ($149))|0;
   $dlength = $150;
   $151 = $0;
   $152 = $dlength;
   $153 = (($delayed) + ($152<<1)|0);
   $154 = $cbuffer_ptr;
   $155 = $dlength;
   $156 = (192 - ($155))|0;
   _dram_load_u16_101($151,$153,$154,$156);
  }
  $157 = $0;
  $158 = $cbuffer_ptr;
  $159 = $dpos;
  $160 = $159<<1;
  $161 = (($158) + ($160))|0;
  $162 = $dlength;
  _dram_load_u16_101($157,$delayed,$161,$162);
  $163 = $subframe;
  $164 = $i;
  $165 = (($tap_gains) + ($164<<1)|0);
  $166 = HEAP16[$165>>1]|0;
  _mix_subframes($163,$delayed,$166);
  $167 = $i;
  $168 = (($167) + 1)|0;
  $i = $168;
 }
 $169 = $1;
 $170 = $2;
 $171 = $subframe;
 mftCall_viii($169|0,($170|0),($171|0),($sfx_gains|0));
 $172 = $2;
 $173 = ((($172)) + 1552|0);
 ;HEAP16[$buffer>>1]=HEAP16[$173>>1]|0;HEAP16[$buffer+2>>1]=HEAP16[$173+2>>1]|0;HEAP16[$buffer+4>>1]=HEAP16[$173+4>>1]|0;HEAP16[$buffer+6>>1]=HEAP16[$173+6>>1]|0;
 $174 = $2;
 $175 = ((($174)) + 1552|0);
 $176 = $subframe;
 $177 = ((($176)) + 384|0);
 $178 = ((($177)) + -8|0);
 ;HEAP16[$175>>1]=HEAP16[$178>>1]|0;HEAP16[$175+2>>1]=HEAP16[$178+2>>1]|0;HEAP16[$175+4>>1]=HEAP16[$178+4>>1]|0;HEAP16[$175+6>>1]=HEAP16[$178+6>>1]|0;
 $179 = $2;
 $180 = ((($179)) + 1152|0);
 $181 = ((($buffer)) + 2|0);
 $182 = $fir4_hgain;
 _mix_fir4($180,$181,$182,$fir4_hcoeffs);
 $183 = $0;
 $184 = $2;
 $185 = ((($184)) + 1152|0);
 $186 = $cbuffer_ptr;
 $187 = $pos;
 $188 = $187<<1;
 $189 = (($186) + ($188))|0;
 _dram_store_u16_103($183,$185,$189,192);
 STACKTOP = sp;return;
}
function _interleave_stage_v1($hle,$musyx,$output_ptr) {
 $hle = $hle|0;
 $musyx = $musyx|0;
 $output_ptr = $output_ptr|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $base_left = 0, $base_right = 0, $dst = 0, $i = 0, $l = 0, $left = 0, $r = 0, $right = 0, $vararg_buffer = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $musyx;
 $2 = $output_ptr;
 $3 = $0;
 $4 = ((($3)) + 84|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = $2;
 HEAP32[$vararg_buffer>>2] = $6;
 _HleVerboseMessage($5,(gb + (5906) | 0),$vararg_buffer);
 $7 = $1;
 $8 = ((($7)) + 1536|0);
 $9 = HEAP32[$8>>2]|0;
 $10 = (_clamp_s16_106($9)|0);
 $base_left = $10;
 $11 = $1;
 $12 = ((($11)) + 1536|0);
 $13 = ((($12)) + 4|0);
 $14 = HEAP32[$13>>2]|0;
 $15 = (_clamp_s16_106($14)|0);
 $base_right = $15;
 $16 = $1;
 $left = $16;
 $17 = $1;
 $18 = ((($17)) + 384|0);
 $right = $18;
 $19 = $0;
 $20 = $2;
 $21 = (_dram_u32_100($19,$20)|0);
 $dst = $21;
 $i = 0;
 while(1) {
  $22 = $i;
  $23 = ($22>>>0)<(192);
  if (!($23)) {
   break;
  }
  $24 = $left;
  $25 = ((($24)) + 2|0);
  $left = $25;
  $26 = HEAP16[$24>>1]|0;
  $27 = $26 << 16 >> 16;
  $28 = $base_left;
  $29 = $28 << 16 >> 16;
  $30 = (($27) + ($29))|0;
  $31 = (_clamp_s16_106($30)|0);
  $l = $31;
  $32 = $right;
  $33 = ((($32)) + 2|0);
  $right = $33;
  $34 = HEAP16[$32>>1]|0;
  $35 = $34 << 16 >> 16;
  $36 = $base_right;
  $37 = $36 << 16 >> 16;
  $38 = (($35) + ($37))|0;
  $39 = (_clamp_s16_106($38)|0);
  $r = $39;
  $40 = $l;
  $41 = $40&65535;
  $42 = $41 << 16;
  $43 = $r;
  $44 = $43&65535;
  $45 = $42 | $44;
  $46 = $dst;
  $47 = ((($46)) + 4|0);
  $dst = $47;
  HEAP32[$46>>2] = $45;
  $48 = $i;
  $49 = (($48) + 1)|0;
  $i = $49;
 }
 STACKTOP = sp;return;
}
function _save_base_vol($hle,$base_vol,$address) {
 $hle = $hle|0;
 $base_vol = $base_vol|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $k = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $base_vol;
 $2 = $address;
 $k = 0;
 while(1) {
  $3 = $k;
  $4 = ($3>>>0)<(4);
  if (!($4)) {
   break;
  }
  $5 = $k;
  $6 = $1;
  $7 = (($6) + ($5<<2)|0);
  $8 = HEAP32[$7>>2]|0;
  $9 = $8 >> 16;
  $10 = $9&65535;
  $11 = $0;
  $12 = $2;
  $13 = (_dram_u16_102($11,$12)|0);
  HEAP16[$13>>1] = $10;
  $14 = $2;
  $15 = (($14) + 2)|0;
  $2 = $15;
  $16 = $k;
  $17 = (($16) + 1)|0;
  $k = $17;
 }
 $k = 0;
 while(1) {
  $18 = $k;
  $19 = ($18>>>0)<(4);
  if (!($19)) {
   break;
  }
  $20 = $k;
  $21 = $1;
  $22 = (($21) + ($20<<2)|0);
  $23 = HEAP32[$22>>2]|0;
  $24 = $23&65535;
  $25 = $0;
  $26 = $2;
  $27 = (_dram_u16_102($25,$26)|0);
  HEAP16[$27>>1] = $24;
  $28 = $2;
  $29 = (($28) + 2)|0;
  $2 = $29;
  $30 = $k;
  $31 = (($30) + 1)|0;
  $k = $31;
 }
 STACKTOP = sp;return;
}
function _dram_store_u16_103($hle,$src,$address,$count) {
 $hle = $hle|0;
 $src = $src|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $src;
 $2 = $address;
 $3 = $count;
 $4 = $0;
 $5 = HEAP32[$4>>2]|0;
 $6 = $2;
 $7 = $6 & 16777215;
 $8 = $1;
 $9 = $3;
 _store_u16($5,$7,$8,$9);
 STACKTOP = sp;return;
}
function _dram_u8($hle,$address) {
 $hle = $hle|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $address;
 $2 = $0;
 $3 = HEAP32[$2>>2]|0;
 $4 = $1;
 $5 = $4 & 16777215;
 $6 = (_u8_107($3,$5)|0);
 STACKTOP = sp;return ($6|0);
}
function _init_subframes_v2($musyx) {
 $musyx = $musyx|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, $k = 0;
 var $subframes = 0, $values = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $values = sp + 32|0;
 $subframes = sp;
 $0 = $musyx;
 $k = 0;
 while(1) {
  $1 = $k;
  $2 = ($1>>>0)<(4);
  if (!($2)) {
   break;
  }
  $3 = $k;
  $4 = $0;
  $5 = ((($4)) + 1536|0);
  $6 = (($5) + ($3<<2)|0);
  $7 = HEAP32[$6>>2]|0;
  $8 = (_clamp_s16_106($7)|0);
  $9 = $k;
  $10 = (($values) + ($9<<1)|0);
  HEAP16[$10>>1] = $8;
  $11 = $k;
  $12 = (($11) + 1)|0;
  $k = $12;
 }
 $13 = $0;
 HEAP32[$subframes>>2] = $13;
 $14 = $0;
 $15 = ((($14)) + 384|0);
 $16 = ((($subframes)) + 4|0);
 HEAP32[$16>>2] = $15;
 $17 = $0;
 $18 = ((($17)) + 768|0);
 $19 = ((($subframes)) + 8|0);
 HEAP32[$19>>2] = $18;
 $20 = $0;
 $21 = ((($20)) + 1152|0);
 $22 = ((($subframes)) + 12|0);
 HEAP32[$22>>2] = $21;
 $i = 0;
 while(1) {
  $23 = $i;
  $24 = ($23>>>0)<(192);
  if (!($24)) {
   break;
  }
  $k = 0;
  while(1) {
   $25 = $k;
   $26 = ($25>>>0)<(4);
   if (!($26)) {
    break;
   }
   $27 = $k;
   $28 = (($values) + ($27<<1)|0);
   $29 = HEAP16[$28>>1]|0;
   $30 = $k;
   $31 = (($subframes) + ($30<<2)|0);
   $32 = HEAP32[$31>>2]|0;
   $33 = ((($32)) + 2|0);
   HEAP32[$31>>2] = $33;
   HEAP16[$32>>1] = $29;
   $34 = $k;
   $35 = (($34) + 1)|0;
   $k = $35;
  }
  $36 = $i;
  $37 = (($36) + 1)|0;
  $i = $37;
 }
 STACKTOP = sp;return;
}
function _mix_sfx_with_main_subframes_v2($musyx,$subframe,$gains) {
 $musyx = $musyx|0;
 $subframe = $subframe|0;
 $gains = $gains|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, $v = 0, $v1 = 0, $v2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $musyx;
 $1 = $subframe;
 $2 = $gains;
 $i = 0;
 while(1) {
  $3 = $i;
  $4 = ($3>>>0)<(192);
  if (!($4)) {
   break;
  }
  $5 = $i;
  $6 = $1;
  $7 = (($6) + ($5<<1)|0);
  $8 = HEAP16[$7>>1]|0;
  $v = $8;
  $9 = $v;
  $10 = $9 << 16 >> 16;
  $11 = $2;
  $12 = HEAP16[$11>>1]|0;
  $13 = $12&65535;
  $14 = Math_imul($10, $13)|0;
  $15 = $14 >> 16;
  $16 = $15&65535;
  $v1 = $16;
  $17 = $v;
  $18 = $17 << 16 >> 16;
  $19 = $2;
  $20 = ((($19)) + 2|0);
  $21 = HEAP16[$20>>1]|0;
  $22 = $21&65535;
  $23 = Math_imul($18, $22)|0;
  $24 = $23 >> 16;
  $25 = $24&65535;
  $v2 = $25;
  $26 = $i;
  $27 = $0;
  $28 = (($27) + ($26<<1)|0);
  $29 = HEAP16[$28>>1]|0;
  $30 = $29 << 16 >> 16;
  $31 = $v1;
  $32 = $31 << 16 >> 16;
  $33 = (($30) + ($32))|0;
  $34 = (_clamp_s16_106($33)|0);
  $35 = $i;
  $36 = $0;
  $37 = (($36) + ($35<<1)|0);
  HEAP16[$37>>1] = $34;
  $38 = $i;
  $39 = $0;
  $40 = ((($39)) + 384|0);
  $41 = (($40) + ($38<<1)|0);
  $42 = HEAP16[$41>>1]|0;
  $43 = $42 << 16 >> 16;
  $44 = $v1;
  $45 = $44 << 16 >> 16;
  $46 = (($43) + ($45))|0;
  $47 = (_clamp_s16_106($46)|0);
  $48 = $i;
  $49 = $0;
  $50 = ((($49)) + 384|0);
  $51 = (($50) + ($48<<1)|0);
  HEAP16[$51>>1] = $47;
  $52 = $i;
  $53 = $0;
  $54 = ((($53)) + 768|0);
  $55 = (($54) + ($52<<1)|0);
  $56 = HEAP16[$55>>1]|0;
  $57 = $56 << 16 >> 16;
  $58 = $v2;
  $59 = $58 << 16 >> 16;
  $60 = (($57) + ($59))|0;
  $61 = (_clamp_s16_106($60)|0);
  $62 = $i;
  $63 = $0;
  $64 = ((($63)) + 768|0);
  $65 = (($64) + ($62<<1)|0);
  HEAP16[$65>>1] = $61;
  $66 = $i;
  $67 = (($66) + 1)|0;
  $i = $67;
 }
 STACKTOP = sp;return;
}
function _interleave_stage_v2($hle,$musyx,$mask_16,$ptr_18,$ptr_1c,$output_ptr) {
 $hle = $hle|0;
 $musyx = $musyx|0;
 $mask_16 = $mask_16|0;
 $ptr_18 = $ptr_18|0;
 $ptr_1c = $ptr_1c|0;
 $output_ptr = $output_ptr|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var $address = 0, $dst = 0, $hgain = 0, $i = 0, $k = 0, $l = 0, $mask = 0, $r = 0, $subframe = 0, $v = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 464|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $subframe = sp + 64|0;
 $0 = $hle;
 $1 = $musyx;
 $2 = $mask_16;
 $3 = $ptr_18;
 $4 = $ptr_1c;
 $5 = $output_ptr;
 $6 = $0;
 $7 = ((($6)) + 84|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = $2;
 $10 = $9&65535;
 $11 = $3;
 $12 = $4;
 $13 = $5;
 HEAP32[$vararg_buffer>>2] = $10;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $11;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $12;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $13;
 _HleVerboseMessage($8,(gb + (5853) | 0),$vararg_buffer);
 _memset(($subframe|0),0,384)|0;
 $i = 0;
 while(1) {
  $14 = $i;
  $15 = ($14>>>0)<(192);
  if (!($15)) {
   break;
  }
  $16 = $0;
  $17 = $4;
  $18 = $i;
  $19 = $18<<1;
  $20 = (($17) + ($19))|0;
  $21 = (_dram_u16_102($16,$20)|0);
  $22 = HEAP16[$21>>1]|0;
  $v = $22;
  $23 = $v;
  $24 = $i;
  $25 = $1;
  $26 = (($25) + ($24<<1)|0);
  HEAP16[$26>>1] = $23;
  $27 = $v;
  $28 = $27 << 16 >> 16;
  $29 = (0 - ($28))|0;
  $30 = (_clamp_s16_106($29)|0);
  $31 = $i;
  $32 = $1;
  $33 = ((($32)) + 384|0);
  $34 = (($33) + ($31<<1)|0);
  HEAP16[$34>>1] = $30;
  $35 = $i;
  $36 = (($35) + 1)|0;
  $i = $36;
 }
 $k = 0;
 $mask = 1;
 while(1) {
  $37 = $k;
  $38 = ($37>>>0)<(8);
  if (!($38)) {
   break;
  }
  $39 = $2;
  $40 = $39&65535;
  $41 = $mask;
  $42 = $41&65535;
  $43 = $40 & $42;
  $44 = ($43|0)==(0);
  L8: do {
   if (!($44)) {
    $45 = $0;
    $46 = $3;
    $47 = (_dram_u32_100($45,$46)|0);
    $48 = HEAP32[$47>>2]|0;
    $address = $48;
    $49 = $0;
    $50 = $3;
    $51 = (($50) + 4)|0;
    $52 = (_dram_u16_102($49,$51)|0);
    $53 = HEAP16[$52>>1]|0;
    $hgain = $53;
    $i = 0;
    while(1) {
     $54 = $i;
     $55 = ($54>>>0)<(192);
     if (!($55)) {
      break L8;
     }
     $56 = $i;
     $57 = $1;
     $58 = (($57) + ($56<<1)|0);
     $59 = $0;
     $60 = $address;
     $61 = (_dram_u16_102($59,$60)|0);
     $62 = HEAP16[$61>>1]|0;
     $63 = $hgain;
     _mix_samples($58,$62,$63);
     $64 = $i;
     $65 = $1;
     $66 = ((($65)) + 384|0);
     $67 = (($66) + ($64<<1)|0);
     $68 = $0;
     $69 = $address;
     $70 = (($69) + 384)|0;
     $71 = (_dram_u16_102($68,$70)|0);
     $72 = HEAP16[$71>>1]|0;
     $73 = $hgain;
     _mix_samples($67,$72,$73);
     $74 = $i;
     $75 = (($subframe) + ($74<<1)|0);
     $76 = $0;
     $77 = $address;
     $78 = (($77) + 768)|0;
     $79 = (_dram_u16_102($76,$78)|0);
     $80 = HEAP16[$79>>1]|0;
     $81 = $hgain;
     _mix_samples($75,$80,$81);
     $82 = $i;
     $83 = (($82) + 1)|0;
     $i = $83;
     $84 = $address;
     $85 = (($84) + 2)|0;
     $address = $85;
    }
   }
  } while(0);
  $86 = $k;
  $87 = (($86) + 1)|0;
  $k = $87;
  $88 = $mask;
  $89 = $88&65535;
  $90 = $89 << 1;
  $91 = $90&65535;
  $mask = $91;
  $92 = $3;
  $93 = (($92) + 8)|0;
  $3 = $93;
 }
 $94 = $0;
 $95 = $5;
 $96 = (_dram_u32_100($94,$95)|0);
 $dst = $96;
 $i = 0;
 while(1) {
  $97 = $i;
  $98 = ($97>>>0)<(192);
  if (!($98)) {
   break;
  }
  $99 = $i;
  $100 = $1;
  $101 = (($100) + ($99<<1)|0);
  $102 = HEAP16[$101>>1]|0;
  $l = $102;
  $103 = $i;
  $104 = $1;
  $105 = ((($104)) + 384|0);
  $106 = (($105) + ($103<<1)|0);
  $107 = HEAP16[$106>>1]|0;
  $r = $107;
  $108 = $l;
  $109 = $108&65535;
  $110 = $109 << 16;
  $111 = $r;
  $112 = $111&65535;
  $113 = $110 | $112;
  $114 = $dst;
  $115 = ((($114)) + 4|0);
  $dst = $115;
  HEAP32[$114>>2] = $113;
  $116 = $i;
  $117 = (($116) + 1)|0;
  $i = $117;
 }
 $118 = $0;
 $119 = $4;
 _dram_store_u16_103($118,$subframe,$119,192);
 STACKTOP = sp;return;
}
function _clamp_s16_106($x) {
 $x = $x|0;
 var $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $0;
 $2 = ($1|0)<(-32768);
 $3 = $0;
 $4 = $2 ? -32768 : $3;
 $0 = $4;
 $5 = $0;
 $6 = ($5|0)>(32767);
 $7 = $0;
 $8 = $6 ? 32767 : $7;
 $0 = $8;
 $9 = $0;
 $10 = $9&65535;
 STACKTOP = sp;return ($10|0);
}
function _mix_samples($y,$x,$hgain) {
 $y = $y|0;
 $x = $x|0;
 $hgain = $hgain|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $y;
 $1 = $x;
 $2 = $hgain;
 $3 = $0;
 $4 = HEAP16[$3>>1]|0;
 $5 = $4 << 16 >> 16;
 $6 = $1;
 $7 = $6 << 16 >> 16;
 $8 = $2;
 $9 = $8 << 16 >> 16;
 $10 = Math_imul($7, $9)|0;
 $11 = (($10) + 16384)|0;
 $12 = $11 >> 15;
 $13 = (($5) + ($12))|0;
 $14 = (_clamp_s16_106($13)|0);
 $15 = $0;
 HEAP16[$15>>1] = $14;
 STACKTOP = sp;return;
}
function _u8_107($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $0;
 $3 = $1;
 $4 = $3 ^ 3;
 $5 = (($2) + ($4)|0);
 STACKTOP = sp;return ($5|0);
}
function _dram_load_u32($hle,$dst,$address,$count) {
 $hle = $hle|0;
 $dst = $dst|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $0;
 $6 = HEAP32[$5>>2]|0;
 $7 = $2;
 $8 = $7 & 16777215;
 $9 = $3;
 _load_u32($4,$6,$8,$9);
 STACKTOP = sp;return;
}
function _mix_subframes($y,$x,$hgain) {
 $y = $y|0;
 $x = $x|0;
 $hgain = $hgain|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $y;
 $1 = $x;
 $2 = $hgain;
 $i = 0;
 while(1) {
  $3 = $i;
  $4 = ($3>>>0)<(192);
  if (!($4)) {
   break;
  }
  $5 = $i;
  $6 = $0;
  $7 = (($6) + ($5<<1)|0);
  $8 = $i;
  $9 = $1;
  $10 = (($9) + ($8<<1)|0);
  $11 = HEAP16[$10>>1]|0;
  $12 = $2;
  _mix_samples($7,$11,$12);
  $13 = $i;
  $14 = (($13) + 1)|0;
  $i = $14;
 }
 STACKTOP = sp;return;
}
function _mix_fir4($y,$x,$hgain,$hcoeffs) {
 $y = $y|0;
 $x = $x|0;
 $hgain = $hgain|0;
 $hcoeffs = $hcoeffs|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $h = 0, $i = 0, $v = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $h = sp + 8|0;
 $0 = $y;
 $1 = $x;
 $2 = $hgain;
 $3 = $hcoeffs;
 $4 = $2;
 $5 = $4 << 16 >> 16;
 $6 = $3;
 $7 = HEAP16[$6>>1]|0;
 $8 = $7 << 16 >> 16;
 $9 = Math_imul($5, $8)|0;
 $10 = $9 >> 15;
 HEAP32[$h>>2] = $10;
 $11 = $2;
 $12 = $11 << 16 >> 16;
 $13 = $3;
 $14 = ((($13)) + 2|0);
 $15 = HEAP16[$14>>1]|0;
 $16 = $15 << 16 >> 16;
 $17 = Math_imul($12, $16)|0;
 $18 = $17 >> 15;
 $19 = ((($h)) + 4|0);
 HEAP32[$19>>2] = $18;
 $20 = $2;
 $21 = $20 << 16 >> 16;
 $22 = $3;
 $23 = ((($22)) + 4|0);
 $24 = HEAP16[$23>>1]|0;
 $25 = $24 << 16 >> 16;
 $26 = Math_imul($21, $25)|0;
 $27 = $26 >> 15;
 $28 = ((($h)) + 8|0);
 HEAP32[$28>>2] = $27;
 $29 = $2;
 $30 = $29 << 16 >> 16;
 $31 = $3;
 $32 = ((($31)) + 6|0);
 $33 = HEAP16[$32>>1]|0;
 $34 = $33 << 16 >> 16;
 $35 = Math_imul($30, $34)|0;
 $36 = $35 >> 15;
 $37 = ((($h)) + 12|0);
 HEAP32[$37>>2] = $36;
 $i = 0;
 while(1) {
  $38 = $i;
  $39 = ($38>>>0)<(192);
  if (!($39)) {
   break;
  }
  $40 = HEAP32[$h>>2]|0;
  $41 = $i;
  $42 = $1;
  $43 = (($42) + ($41<<1)|0);
  $44 = HEAP16[$43>>1]|0;
  $45 = $44 << 16 >> 16;
  $46 = Math_imul($40, $45)|0;
  $47 = ((($h)) + 4|0);
  $48 = HEAP32[$47>>2]|0;
  $49 = $i;
  $50 = (($49) + 1)|0;
  $51 = $1;
  $52 = (($51) + ($50<<1)|0);
  $53 = HEAP16[$52>>1]|0;
  $54 = $53 << 16 >> 16;
  $55 = Math_imul($48, $54)|0;
  $56 = (($46) + ($55))|0;
  $57 = ((($h)) + 8|0);
  $58 = HEAP32[$57>>2]|0;
  $59 = $i;
  $60 = (($59) + 2)|0;
  $61 = $1;
  $62 = (($61) + ($60<<1)|0);
  $63 = HEAP16[$62>>1]|0;
  $64 = $63 << 16 >> 16;
  $65 = Math_imul($58, $64)|0;
  $66 = (($56) + ($65))|0;
  $67 = ((($h)) + 12|0);
  $68 = HEAP32[$67>>2]|0;
  $69 = $i;
  $70 = (($69) + 3)|0;
  $71 = $1;
  $72 = (($71) + ($70<<1)|0);
  $73 = HEAP16[$72>>1]|0;
  $74 = $73 << 16 >> 16;
  $75 = Math_imul($68, $74)|0;
  $76 = (($66) + ($75))|0;
  $77 = $76 >> 15;
  $v = $77;
  $78 = $i;
  $79 = $0;
  $80 = (($79) + ($78<<1)|0);
  $81 = HEAP16[$80>>1]|0;
  $82 = $81 << 16 >> 16;
  $83 = $v;
  $84 = (($82) + ($83))|0;
  $85 = (_clamp_s16_106($84)|0);
  $86 = $i;
  $87 = $0;
  $88 = (($87) + ($86<<1)|0);
  HEAP16[$88>>1] = $85;
  $89 = $i;
  $90 = (($89) + 1)|0;
  $i = $90;
 }
 STACKTOP = sp;return;
}
function _load_samples_PCM16($hle,$voice_ptr,$samples,$segbase,$offset) {
 $hle = $hle|0;
 $voice_ptr = $voice_ptr|0;
 $samples = $samples|0;
 $segbase = $segbase|0;
 $offset = $offset|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count = 0, $u16_40 = 0, $u16_42 = 0, $u8_3e = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $voice_ptr;
 $2 = $samples;
 $3 = $segbase;
 $4 = $offset;
 $5 = $0;
 $6 = $1;
 $7 = (($6) + 62)|0;
 $8 = (_dram_u8($5,$7)|0);
 $9 = HEAP8[$8>>0]|0;
 $u8_3e = $9;
 $10 = $0;
 $11 = $1;
 $12 = (($11) + 64)|0;
 $13 = (_dram_u16_102($10,$12)|0);
 $14 = HEAP16[$13>>1]|0;
 $u16_40 = $14;
 $15 = $0;
 $16 = $1;
 $17 = (($16) + 66)|0;
 $18 = (_dram_u16_102($15,$17)|0);
 $19 = HEAP16[$18>>1]|0;
 $u16_42 = $19;
 $20 = $u16_40;
 $21 = $20&65535;
 $22 = $u8_3e;
 $23 = $22&255;
 $24 = (($21) + ($23))|0;
 $25 = (_align_111($24,4)|0);
 $count = $25;
 $26 = $0;
 $27 = ((($26)) + 84|0);
 $28 = HEAP32[$27>>2]|0;
 _HleVerboseMessage($28,(gb + (6485) | 0),$vararg_buffer);
 $29 = $count;
 $30 = (512 - ($29))|0;
 $31 = $3;
 HEAP32[$31>>2] = $30;
 $32 = $u8_3e;
 $33 = $32&255;
 $34 = $4;
 HEAP32[$34>>2] = $33;
 $35 = $0;
 $36 = $2;
 $37 = $3;
 $38 = HEAP32[$37>>2]|0;
 $39 = (($36) + ($38<<1)|0);
 $40 = $1;
 $41 = (($40) + 36)|0;
 _dma_cat16($35,$39,$41);
 $42 = $u16_42;
 $43 = $42&65535;
 $44 = ($43|0)!=(0);
 if (!($44)) {
  STACKTOP = sp;return;
 }
 $45 = $0;
 $46 = $2;
 $47 = $1;
 $48 = (($47) + 48)|0;
 _dma_cat16($45,$46,$48);
 STACKTOP = sp;return;
}
function _load_samples_ADPCM($hle,$voice_ptr,$samples,$segbase,$offset) {
 $hle = $hle|0;
 $voice_ptr = $voice_ptr|0;
 $samples = $samples|0;
 $segbase = $segbase|0;
 $offset = $offset|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $8 = 0, $9 = 0, $adpcm_table = 0, $adpcm_table_ptr = 0, $buffer = 0, $count = 0, $u8_3c = 0, $u8_3d = 0, $u8_3e = 0, $u8_3f = 0, $vararg_buffer = 0;
 var $vararg_buffer1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $buffer = sp + 304|0;
 $adpcm_table = sp + 40|0;
 $0 = $hle;
 $1 = $voice_ptr;
 $2 = $samples;
 $3 = $segbase;
 $4 = $offset;
 $5 = $0;
 $6 = $1;
 $7 = (($6) + 60)|0;
 $8 = (_dram_u8($5,$7)|0);
 $9 = HEAP8[$8>>0]|0;
 $u8_3c = $9;
 $10 = $0;
 $11 = $1;
 $12 = (($11) + 60)|0;
 $13 = (($12) + 1)|0;
 $14 = (_dram_u8($10,$13)|0);
 $15 = HEAP8[$14>>0]|0;
 $u8_3d = $15;
 $16 = $0;
 $17 = $1;
 $18 = (($17) + 62)|0;
 $19 = (_dram_u8($16,$18)|0);
 $20 = HEAP8[$19>>0]|0;
 $u8_3e = $20;
 $21 = $0;
 $22 = $1;
 $23 = (($22) + 62)|0;
 $24 = (($23) + 1)|0;
 $25 = (_dram_u8($21,$24)|0);
 $26 = HEAP8[$25>>0]|0;
 $u8_3f = $26;
 $27 = $0;
 $28 = $1;
 $29 = (($28) + 64)|0;
 $30 = (_dram_u32_100($27,$29)|0);
 $31 = HEAP32[$30>>2]|0;
 $adpcm_table_ptr = $31;
 $32 = $0;
 $33 = ((($32)) + 84|0);
 $34 = HEAP32[$33>>2]|0;
 _HleVerboseMessage($34,(gb + (6384) | 0),$vararg_buffer);
 $35 = $0;
 $36 = ((($35)) + 84|0);
 $37 = HEAP32[$36>>2]|0;
 $38 = $adpcm_table_ptr;
 HEAP32[$vararg_buffer1>>2] = $38;
 _HleVerboseMessage($37,(gb + (6398) | 0),$vararg_buffer1);
 $39 = $0;
 $40 = $adpcm_table_ptr;
 _dram_load_u16_101($39,$adpcm_table,$40,128);
 $41 = $u8_3c;
 $42 = $41&255;
 $43 = $42 << 5;
 $count = $43;
 $44 = $count;
 $45 = (512 - ($44))|0;
 $46 = $3;
 HEAP32[$46>>2] = $45;
 $47 = $u8_3e;
 $48 = $47&255;
 $49 = $48 & 31;
 $50 = $4;
 HEAP32[$50>>2] = $49;
 $51 = $0;
 $52 = $1;
 $53 = (($52) + 36)|0;
 _dma_cat8($51,$buffer,$53);
 $54 = $0;
 $55 = $2;
 $56 = $3;
 $57 = HEAP32[$56>>2]|0;
 $58 = (($55) + ($57<<1)|0);
 $59 = $u8_3c;
 $60 = $u8_3e;
 _adpcm_decode_frames($54,$58,$buffer,$adpcm_table,$59,$60);
 $61 = $u8_3d;
 $62 = $61&255;
 $63 = ($62|0)!=(0);
 if (!($63)) {
  STACKTOP = sp;return;
 }
 $64 = $0;
 $65 = $1;
 $66 = (($65) + 48)|0;
 _dma_cat8($64,$buffer,$66);
 $67 = $0;
 $68 = $2;
 $69 = $u8_3d;
 $70 = $u8_3f;
 _adpcm_decode_frames($67,$68,$buffer,$adpcm_table,$69,$70);
 STACKTOP = sp;return;
}
function _mix_voice_samples($hle,$musyx,$voice_ptr,$samples,$segbase,$offset,$last_sample_ptr) {
 $hle = $hle|0;
 $musyx = $musyx|0;
 $voice_ptr = $voice_ptr|0;
 $samples = $samples|0;
 $segbase = $segbase|0;
 $offset = $offset|0;
 $last_sample_ptr = $last_sample_ptr|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0;
 var $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0;
 var $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0;
 var $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0;
 var $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $accu = 0, $dist = 0, $end_point = 0, $i = 0, $k = 0, $lut = 0, $pitch_accu = 0;
 var $pitch_q16 = 0, $pitch_shift = 0, $pitch_step = 0, $restart_point = 0, $sample = 0, $sample_end = 0, $sample_restart = 0, $u16_4e = 0, $v = 0, $v4 = 0, $v4_dst = 0, $v4_env = 0, $v4_env_step = 0, $vararg_buffer = 0, $vararg_buffer14 = 0, $vararg_ptr1 = 0, $vararg_ptr10 = 0, $vararg_ptr11 = 0, $vararg_ptr12 = 0, $vararg_ptr13 = 0;
 var $vararg_ptr17 = 0, $vararg_ptr18 = 0, $vararg_ptr19 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, $vararg_ptr5 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, $vararg_ptr8 = 0, $vararg_ptr9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer14 = sp + 56|0;
 $vararg_buffer = sp;
 $v4_env = sp + 120|0;
 $v4_env_step = sp + 104|0;
 $v4_dst = sp + 88|0;
 $v4 = sp + 200|0;
 $0 = $hle;
 $1 = $musyx;
 $2 = $voice_ptr;
 $3 = $samples;
 $4 = $segbase;
 $5 = $offset;
 $6 = $last_sample_ptr;
 $7 = $0;
 $8 = $2;
 $9 = (($8) + 32)|0;
 $10 = (_dram_u16_102($7,$9)|0);
 $11 = HEAP16[$10>>1]|0;
 $pitch_q16 = $11;
 $12 = $0;
 $13 = $2;
 $14 = (($13) + 34)|0;
 $15 = (_dram_u16_102($12,$14)|0);
 $16 = HEAP16[$15>>1]|0;
 $pitch_shift = $16;
 $17 = $0;
 $18 = $2;
 $19 = (($18) + 72)|0;
 $20 = (_dram_u16_102($17,$19)|0);
 $21 = HEAP16[$20>>1]|0;
 $end_point = $21;
 $22 = $0;
 $23 = $2;
 $24 = (($23) + 74)|0;
 $25 = (_dram_u16_102($22,$24)|0);
 $26 = HEAP16[$25>>1]|0;
 $restart_point = $26;
 $27 = $0;
 $28 = $2;
 $29 = (($28) + 78)|0;
 $30 = (_dram_u16_102($27,$29)|0);
 $31 = HEAP16[$30>>1]|0;
 $u16_4e = $31;
 $32 = $3;
 $33 = $4;
 $34 = (($32) + ($33<<1)|0);
 $35 = $5;
 $36 = (($34) + ($35<<1)|0);
 $37 = $u16_4e;
 $38 = $37&65535;
 $39 = (($36) + ($38<<1)|0);
 $sample = $39;
 $40 = $3;
 $41 = $4;
 $42 = (($40) + ($41<<1)|0);
 $43 = $end_point;
 $44 = $43&65535;
 $45 = (($42) + ($44<<1)|0);
 $sample_end = $45;
 $46 = $3;
 $47 = $restart_point;
 $48 = $47&65535;
 $49 = $48 & 32767;
 $50 = (($46) + ($49<<1)|0);
 $51 = $restart_point;
 $52 = $51&65535;
 $53 = $52 & 32768;
 $54 = ($53|0)!=(0);
 $55 = $4;
 $56 = $54 ? 0 : $55;
 $57 = (($50) + ($56<<1)|0);
 $sample_restart = $57;
 $58 = $pitch_q16;
 $59 = $58&65535;
 $pitch_accu = $59;
 $60 = $pitch_shift;
 $61 = $60&65535;
 $62 = $61 << 4;
 $pitch_step = $62;
 $63 = $0;
 $64 = $2;
 $65 = (($64) + 0)|0;
 _dram_load_u32($63,$v4_env,$65,4);
 $66 = $0;
 $67 = $2;
 $68 = (($67) + 16)|0;
 _dram_load_u32($66,$v4_env_step,$68,4);
 $69 = $1;
 HEAP32[$v4_dst>>2] = $69;
 $70 = $1;
 $71 = ((($70)) + 384|0);
 $72 = ((($v4_dst)) + 4|0);
 HEAP32[$72>>2] = $71;
 $73 = $1;
 $74 = ((($73)) + 768|0);
 $75 = ((($v4_dst)) + 8|0);
 HEAP32[$75>>2] = $74;
 $76 = $1;
 $77 = ((($76)) + 1152|0);
 $78 = ((($v4_dst)) + 12|0);
 HEAP32[$78>>2] = $77;
 $79 = $0;
 $80 = ((($79)) + 84|0);
 $81 = HEAP32[$80>>2]|0;
 $82 = $4;
 $83 = $u16_4e;
 $84 = $83&65535;
 $85 = $pitch_q16;
 $86 = $85&65535;
 $87 = $pitch_shift;
 $88 = $87&65535;
 $89 = $end_point;
 $90 = $89&65535;
 $91 = $restart_point;
 $92 = $91&65535;
 $93 = HEAP32[$v4_env>>2]|0;
 $94 = ((($v4_env)) + 4|0);
 $95 = HEAP32[$94>>2]|0;
 $96 = ((($v4_env)) + 8|0);
 $97 = HEAP32[$96>>2]|0;
 $98 = ((($v4_env)) + 12|0);
 $99 = HEAP32[$98>>2]|0;
 $100 = HEAP32[$v4_env_step>>2]|0;
 $101 = ((($v4_env_step)) + 4|0);
 $102 = HEAP32[$101>>2]|0;
 $103 = ((($v4_env_step)) + 8|0);
 $104 = HEAP32[$103>>2]|0;
 $105 = ((($v4_env_step)) + 12|0);
 $106 = HEAP32[$105>>2]|0;
 HEAP32[$vararg_buffer>>2] = $82;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $84;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $86;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $88;
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 HEAP32[$vararg_ptr4>>2] = $90;
 $vararg_ptr5 = ((($vararg_buffer)) + 20|0);
 HEAP32[$vararg_ptr5>>2] = $92;
 $vararg_ptr6 = ((($vararg_buffer)) + 24|0);
 HEAP32[$vararg_ptr6>>2] = $93;
 $vararg_ptr7 = ((($vararg_buffer)) + 28|0);
 HEAP32[$vararg_ptr7>>2] = $95;
 $vararg_ptr8 = ((($vararg_buffer)) + 32|0);
 HEAP32[$vararg_ptr8>>2] = $97;
 $vararg_ptr9 = ((($vararg_buffer)) + 36|0);
 HEAP32[$vararg_ptr9>>2] = $99;
 $vararg_ptr10 = ((($vararg_buffer)) + 40|0);
 HEAP32[$vararg_ptr10>>2] = $100;
 $vararg_ptr11 = ((($vararg_buffer)) + 44|0);
 HEAP32[$vararg_ptr11>>2] = $102;
 $vararg_ptr12 = ((($vararg_buffer)) + 48|0);
 HEAP32[$vararg_ptr12>>2] = $104;
 $vararg_ptr13 = ((($vararg_buffer)) + 52|0);
 HEAP32[$vararg_ptr13>>2] = $106;
 _HleVerboseMessage($81,(gb + (6184) | 0),$vararg_buffer);
 $i = 0;
 while(1) {
  $107 = $i;
  $108 = ($107|0)<(192);
  if (!($108)) {
   break;
  }
  $109 = $pitch_accu;
  $110 = $109 & 64512;
  $111 = $110 >>> 8;
  $112 = ((gb + (2280) | 0) + ($111<<1)|0);
  $lut = $112;
  $113 = $pitch_accu;
  $114 = $113 >>> 16;
  $115 = $sample;
  $116 = (($115) + ($114<<1)|0);
  $sample = $116;
  $117 = $pitch_accu;
  $118 = $117 & 65535;
  $pitch_accu = $118;
  $119 = $pitch_step;
  $120 = $pitch_accu;
  $121 = (($120) + ($119))|0;
  $pitch_accu = $121;
  $122 = $sample;
  $123 = $sample_end;
  $124 = $122;
  $125 = $123;
  $126 = (($124) - ($125))|0;
  $127 = (($126|0) / 2)&-1;
  $dist = $127;
  $128 = $dist;
  $129 = ($128|0)>=(0);
  if ($129) {
   $130 = $sample_restart;
   $131 = $dist;
   $132 = (($130) + ($131<<1)|0);
   $sample = $132;
  }
  $133 = $sample;
  $134 = $lut;
  $135 = (_dot4($133,$134)|0);
  $136 = (_clamp_s16_106($135)|0);
  $v = $136;
  $k = 0;
  while(1) {
   $137 = $k;
   $138 = ($137|0)<(4);
   if (!($138)) {
    break;
   }
   $139 = $v;
   $140 = $139 << 16 >> 16;
   $141 = $k;
   $142 = (($v4_env) + ($141<<2)|0);
   $143 = HEAP32[$142>>2]|0;
   $144 = $143 >> 16;
   $145 = Math_imul($140, $144)|0;
   $146 = $145 >> 15;
   $accu = $146;
   $147 = $accu;
   $148 = (_clamp_s16_106($147)|0);
   $149 = $k;
   $150 = (($v4) + ($149<<1)|0);
   HEAP16[$150>>1] = $148;
   $151 = $accu;
   $152 = $k;
   $153 = (($v4_dst) + ($152<<2)|0);
   $154 = HEAP32[$153>>2]|0;
   $155 = HEAP16[$154>>1]|0;
   $156 = $155 << 16 >> 16;
   $157 = (($151) + ($156))|0;
   $158 = (_clamp_s16_106($157)|0);
   $159 = $k;
   $160 = (($v4_dst) + ($159<<2)|0);
   $161 = HEAP32[$160>>2]|0;
   HEAP16[$161>>1] = $158;
   $162 = $k;
   $163 = (($v4_dst) + ($162<<2)|0);
   $164 = HEAP32[$163>>2]|0;
   $165 = ((($164)) + 2|0);
   HEAP32[$163>>2] = $165;
   $166 = $k;
   $167 = (($v4_env_step) + ($166<<2)|0);
   $168 = HEAP32[$167>>2]|0;
   $169 = $k;
   $170 = (($v4_env) + ($169<<2)|0);
   $171 = HEAP32[$170>>2]|0;
   $172 = (($171) + ($168))|0;
   HEAP32[$170>>2] = $172;
   $173 = $k;
   $174 = (($173) + 1)|0;
   $k = $174;
  }
  $175 = $i;
  $176 = (($175) + 1)|0;
  $i = $176;
 }
 $177 = $0;
 $178 = $6;
 _dram_store_u16_103($177,$v4,$178,4);
 $179 = $0;
 $180 = ((($179)) + 84|0);
 $181 = HEAP32[$180>>2]|0;
 $182 = HEAP16[$v4>>1]|0;
 $183 = $182 << 16 >> 16;
 $184 = ((($v4)) + 2|0);
 $185 = HEAP16[$184>>1]|0;
 $186 = $185 << 16 >> 16;
 $187 = ((($v4)) + 4|0);
 $188 = HEAP16[$187>>1]|0;
 $189 = $188 << 16 >> 16;
 $190 = ((($v4)) + 6|0);
 $191 = HEAP16[$190>>1]|0;
 $192 = $191 << 16 >> 16;
 HEAP32[$vararg_buffer14>>2] = $183;
 $vararg_ptr17 = ((($vararg_buffer14)) + 4|0);
 HEAP32[$vararg_ptr17>>2] = $186;
 $vararg_ptr18 = ((($vararg_buffer14)) + 8|0);
 HEAP32[$vararg_ptr18>>2] = $189;
 $vararg_ptr19 = ((($vararg_buffer14)) + 12|0);
 HEAP32[$vararg_ptr19>>2] = $192;
 _HleVerboseMessage($181,(gb + (6350) | 0),$vararg_buffer14);
 STACKTOP = sp;return;
}
function _dot4($x,$y) {
 $x = $x|0;
 $y = $y|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $accu = 0, $i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $y;
 $accu = 0;
 $i = 0;
 while(1) {
  $2 = $i;
  $3 = ($2>>>0)<(4);
  $4 = $accu;
  if (!($3)) {
   break;
  }
  $5 = $i;
  $6 = $0;
  $7 = (($6) + ($5<<1)|0);
  $8 = HEAP16[$7>>1]|0;
  $9 = $8 << 16 >> 16;
  $10 = $i;
  $11 = $1;
  $12 = (($11) + ($10<<1)|0);
  $13 = HEAP16[$12>>1]|0;
  $14 = $13 << 16 >> 16;
  $15 = Math_imul($9, $14)|0;
  $16 = $15 >> 15;
  $17 = (($4) + ($16))|0;
  $18 = (_clamp_s16_106($17)|0);
  $19 = $18 << 16 >> 16;
  $accu = $19;
  $20 = $i;
  $21 = (($20) + 1)|0;
  $i = $21;
 }
 STACKTOP = sp;return ($4|0);
}
function _dma_cat8($hle,$dst,$catsrc_ptr) {
 $hle = $hle|0;
 $dst = $dst|0;
 $catsrc_ptr = $catsrc_ptr|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count1 = 0, $count2 = 0, $ptr1 = 0, $ptr2 = 0, $size1 = 0, $size2 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $dst;
 $2 = $catsrc_ptr;
 $3 = $0;
 $4 = $2;
 $5 = (($4) + 0)|0;
 $6 = (_dram_u32_100($3,$5)|0);
 $7 = HEAP32[$6>>2]|0;
 $ptr1 = $7;
 $8 = $0;
 $9 = $2;
 $10 = (($9) + 4)|0;
 $11 = (_dram_u32_100($8,$10)|0);
 $12 = HEAP32[$11>>2]|0;
 $ptr2 = $12;
 $13 = $0;
 $14 = $2;
 $15 = (($14) + 8)|0;
 $16 = (_dram_u16_102($13,$15)|0);
 $17 = HEAP16[$16>>1]|0;
 $size1 = $17;
 $18 = $0;
 $19 = $2;
 $20 = (($19) + 10)|0;
 $21 = (_dram_u16_102($18,$20)|0);
 $22 = HEAP16[$21>>1]|0;
 $size2 = $22;
 $23 = $size1;
 $24 = $23&65535;
 $count1 = $24;
 $25 = $size2;
 $26 = $25&65535;
 $count2 = $26;
 $27 = $0;
 $28 = ((($27)) + 84|0);
 $29 = HEAP32[$28>>2]|0;
 $30 = $ptr1;
 $31 = $ptr2;
 $32 = $size1;
 $33 = $32&65535;
 $34 = $size2;
 $35 = $34&65535;
 HEAP32[$vararg_buffer>>2] = $30;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $31;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $33;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $35;
 _HleVerboseMessage($29,(gb + (6456) | 0),$vararg_buffer);
 $36 = $0;
 $37 = $1;
 $38 = $ptr1;
 $39 = $count1;
 _dram_load_u8($36,$37,$38,$39);
 $40 = $size2;
 $41 = $40&65535;
 $42 = ($41|0)==(0);
 if ($42) {
  STACKTOP = sp;return;
 }
 $43 = $0;
 $44 = $1;
 $45 = $count1;
 $46 = (($44) + ($45)|0);
 $47 = $ptr2;
 $48 = $count2;
 _dram_load_u8($43,$46,$47,$48);
 STACKTOP = sp;return;
}
function _adpcm_decode_frames($hle,$dst,$src,$table,$count,$skip_samples) {
 $hle = $hle|0;
 $dst = $dst|0;
 $src = $src|0;
 $table = $table|0;
 $count = $count|0;
 $skip_samples = $skip_samples|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $9 = 0, $book = 0, $c2 = 0, $frame = 0, $i = 0, $jump_gap = 0, $nibbles = 0, $rshift = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $frame = sp + 40|0;
 $0 = $hle;
 $1 = $dst;
 $2 = $src;
 $3 = $table;
 $4 = $count;
 $5 = $skip_samples;
 $6 = $2;
 $7 = ((($6)) + 8|0);
 $nibbles = $7;
 $jump_gap = 0;
 $8 = $0;
 $9 = ((($8)) + 84|0);
 $10 = HEAP32[$9>>2]|0;
 $11 = $4;
 $12 = $11&255;
 $13 = $5;
 $14 = $13&255;
 HEAP32[$vararg_buffer>>2] = $12;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $14;
 _HleVerboseMessage($10,(gb + (6424) | 0),$vararg_buffer);
 $15 = $5;
 $16 = $15&255;
 $17 = ($16|0)>=(32);
 if ($17) {
  $jump_gap = 1;
  $18 = $nibbles;
  $19 = ((($18)) + 16|0);
  $nibbles = $19;
  $20 = $2;
  $21 = ((($20)) + 4|0);
  $2 = $21;
 }
 $i = 0;
 while(1) {
  $22 = $i;
  $23 = $4;
  $24 = $23&255;
  $25 = ($22>>>0)<($24>>>0);
  if (!($25)) {
   break;
  }
  $26 = $nibbles;
  $27 = HEAP8[$26>>0]|0;
  $c2 = $27;
  $28 = $c2;
  $29 = $28&255;
  $30 = $29 & 240;
  $31 = $3;
  $32 = (($31) + ($30<<1)|0);
  $book = $32;
  $33 = $c2;
  $34 = $33&255;
  $35 = $34 & 15;
  $rshift = $35;
  $36 = $2;
  $37 = $nibbles;
  $38 = $rshift;
  _adpcm_predict_frame($frame,$36,$37,$38);
  $39 = $1;
  ;HEAP16[$39>>1]=HEAP16[$frame>>1]|0;HEAP16[$39+2>>1]=HEAP16[$frame+2>>1]|0;
  $40 = $1;
  $41 = ((($40)) + 4|0);
  $42 = ((($frame)) + 4|0);
  $43 = $book;
  $44 = $1;
  _adpcm_compute_residuals($41,$42,$43,$44,6);
  $45 = $1;
  $46 = ((($45)) + 16|0);
  $47 = ((($frame)) + 16|0);
  $48 = $book;
  $49 = $1;
  $50 = ((($49)) + 12|0);
  _adpcm_compute_residuals($46,$47,$48,$50,8);
  $51 = $1;
  $52 = ((($51)) + 32|0);
  $53 = ((($frame)) + 32|0);
  $54 = $book;
  $55 = $1;
  $56 = ((($55)) + 28|0);
  _adpcm_compute_residuals($52,$53,$54,$56,8);
  $57 = $1;
  $58 = ((($57)) + 48|0);
  $59 = ((($frame)) + 48|0);
  $60 = $book;
  $61 = $1;
  $62 = ((($61)) + 44|0);
  _adpcm_compute_residuals($58,$59,$60,$62,8);
  $63 = $jump_gap;
  $64 = $63&1;
  if ($64) {
   $65 = $nibbles;
   $66 = ((($65)) + 8|0);
   $nibbles = $66;
   $67 = $2;
   $68 = ((($67)) + 32|0);
   $2 = $68;
  }
  $69 = $jump_gap;
  $70 = $69&1;
  $71 = $70 ^ 1;
  $72 = $71&1;
  $jump_gap = $72;
  $73 = $nibbles;
  $74 = ((($73)) + 16|0);
  $nibbles = $74;
  $75 = $2;
  $76 = ((($75)) + 4|0);
  $2 = $76;
  $77 = $1;
  $78 = ((($77)) + 64|0);
  $1 = $78;
  $79 = $i;
  $80 = (($79) + 1)|0;
  $i = $80;
 }
 STACKTOP = sp;return;
}
function _adpcm_predict_frame($dst,$src,$nibbles,$rshift) {
 $dst = $dst|0;
 $src = $src|0;
 $nibbles = $nibbles|0;
 $rshift = $rshift|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $byte = 0, $i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $dst;
 $1 = $src;
 $2 = $nibbles;
 $3 = $rshift;
 $4 = $1;
 $5 = HEAP8[$4>>0]|0;
 $6 = $5&255;
 $7 = $6 << 8;
 $8 = $1;
 $9 = ((($8)) + 1|0);
 $10 = HEAP8[$9>>0]|0;
 $11 = $10&255;
 $12 = $7 | $11;
 $13 = $12&65535;
 $14 = $0;
 $15 = ((($14)) + 2|0);
 $0 = $15;
 HEAP16[$14>>1] = $13;
 $16 = $1;
 $17 = ((($16)) + 2|0);
 $18 = HEAP8[$17>>0]|0;
 $19 = $18&255;
 $20 = $19 << 8;
 $21 = $1;
 $22 = ((($21)) + 3|0);
 $23 = HEAP8[$22>>0]|0;
 $24 = $23&255;
 $25 = $20 | $24;
 $26 = $25&65535;
 $27 = $0;
 $28 = ((($27)) + 2|0);
 $0 = $28;
 HEAP16[$27>>1] = $26;
 $i = 1;
 while(1) {
  $29 = $i;
  $30 = ($29>>>0)<(16);
  if (!($30)) {
   break;
  }
  $31 = $i;
  $32 = $2;
  $33 = (($32) + ($31)|0);
  $34 = HEAP8[$33>>0]|0;
  $byte = $34;
  $35 = $byte;
  $36 = $3;
  $37 = (_adpcm_predict_sample_110($35,-16,8,$36)|0);
  $38 = $0;
  $39 = ((($38)) + 2|0);
  $0 = $39;
  HEAP16[$38>>1] = $37;
  $40 = $byte;
  $41 = $3;
  $42 = (_adpcm_predict_sample_110($40,15,12,$41)|0);
  $43 = $0;
  $44 = ((($43)) + 2|0);
  $0 = $44;
  HEAP16[$43>>1] = $42;
  $45 = $i;
  $46 = (($45) + 1)|0;
  $i = $46;
 }
 STACKTOP = sp;return;
}
function _adpcm_predict_sample_110($byte,$mask,$lshift,$rshift) {
 $byte = $byte|0;
 $mask = $mask|0;
 $lshift = $lshift|0;
 $rshift = $rshift|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $sample = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $byte;
 $1 = $mask;
 $2 = $lshift;
 $3 = $rshift;
 $4 = $0;
 $5 = $4&255;
 $6 = $1;
 $7 = $6&255;
 $8 = $5 & $7;
 $9 = $8&65535;
 $10 = $9&65535;
 $11 = $2;
 $12 = $10 << $11;
 $13 = $12&65535;
 $sample = $13;
 $14 = $3;
 $15 = $sample;
 $16 = $15 << 16 >> 16;
 $17 = $16 >> $14;
 $18 = $17&65535;
 $sample = $18;
 $19 = $sample;
 STACKTOP = sp;return ($19|0);
}
function _dram_load_u8($hle,$dst,$address,$count) {
 $hle = $hle|0;
 $dst = $dst|0;
 $address = $address|0;
 $count = $count|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $hle;
 $1 = $dst;
 $2 = $address;
 $3 = $count;
 $4 = $1;
 $5 = $0;
 $6 = HEAP32[$5>>2]|0;
 $7 = $2;
 $8 = $7 & 16777215;
 $9 = $3;
 _load_u8($4,$6,$8,$9);
 STACKTOP = sp;return;
}
function _align_111($x,$amount) {
 $x = $x|0;
 $amount = $amount|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $x;
 $1 = $amount;
 $2 = $1;
 $3 = (($2) + -1)|0;
 $1 = $3;
 $4 = $0;
 $5 = $1;
 $6 = (($4) + ($5))|0;
 $7 = $1;
 $8 = $7 ^ -1;
 $9 = $6 & $8;
 STACKTOP = sp;return ($9|0);
}
function _dma_cat16($hle,$dst,$catsrc_ptr) {
 $hle = $hle|0;
 $dst = $dst|0;
 $catsrc_ptr = $catsrc_ptr|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $count1 = 0, $count2 = 0, $ptr1 = 0, $ptr2 = 0, $size1 = 0, $size2 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0;
 var $vararg_ptr3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $hle;
 $1 = $dst;
 $2 = $catsrc_ptr;
 $3 = $0;
 $4 = $2;
 $5 = (($4) + 0)|0;
 $6 = (_dram_u32_100($3,$5)|0);
 $7 = HEAP32[$6>>2]|0;
 $ptr1 = $7;
 $8 = $0;
 $9 = $2;
 $10 = (($9) + 4)|0;
 $11 = (_dram_u32_100($8,$10)|0);
 $12 = HEAP32[$11>>2]|0;
 $ptr2 = $12;
 $13 = $0;
 $14 = $2;
 $15 = (($14) + 8)|0;
 $16 = (_dram_u16_102($13,$15)|0);
 $17 = HEAP16[$16>>1]|0;
 $size1 = $17;
 $18 = $0;
 $19 = $2;
 $20 = (($19) + 10)|0;
 $21 = (_dram_u16_102($18,$20)|0);
 $22 = HEAP16[$21>>1]|0;
 $size2 = $22;
 $23 = $size1;
 $24 = $23&65535;
 $25 = $24 >> 1;
 $count1 = $25;
 $26 = $size2;
 $27 = $26&65535;
 $28 = $27 >> 1;
 $count2 = $28;
 $29 = $0;
 $30 = ((($29)) + 84|0);
 $31 = HEAP32[$30>>2]|0;
 $32 = $ptr1;
 $33 = $ptr2;
 $34 = $size1;
 $35 = $34&65535;
 $36 = $size2;
 $37 = $36&65535;
 HEAP32[$vararg_buffer>>2] = $32;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = $33;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $35;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $37;
 _HleVerboseMessage($31,(gb + (6456) | 0),$vararg_buffer);
 $38 = $0;
 $39 = $1;
 $40 = $ptr1;
 $41 = $count1;
 _dram_load_u16_101($38,$39,$40,$41);
 $42 = $size2;
 $43 = $42&65535;
 $44 = ($43|0)==(0);
 if ($44) {
  STACKTOP = sp;return;
 }
 $45 = $0;
 $46 = $1;
 $47 = $count1;
 $48 = (($46) + ($47<<1)|0);
 $49 = $ptr2;
 $50 = $count2;
 _dram_load_u16_101($45,$48,$49,$50);
 STACKTOP = sp;return;
}
function _u16_115($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $1;
 $3 = $2 & 1;
 $4 = ($3|0)==(0);
 if ($4) {
  $5 = $0;
  $6 = $1;
  $7 = $6 ^ 2;
  $8 = (($5) + ($7)|0);
  STACKTOP = sp;return ($8|0);
 } else {
  ___assert_fail(((gb + (6603) | 0)|0),((gb + (6622) | 0)|0),74,((gb + (6641) | 0)|0));
  // unreachable;
 }
 return (0)|0;
}
function _u32_119($buffer,$address) {
 $buffer = $buffer|0;
 $address = $address|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $buffer;
 $1 = $address;
 $2 = $1;
 $3 = $2 & 3;
 $4 = ($3|0)==(0);
 if ($4) {
  $5 = $0;
  $6 = $1;
  $7 = (($5) + ($6)|0);
  STACKTOP = sp;return ($7|0);
 } else {
  ___assert_fail(((gb + (6645) | 0)|0),((gb + (6622) | 0)|0),80,((gb + (6664) | 0)|0));
  // unreachable;
 }
 return (0)|0;
}
function _HleVerboseMessage($UNUSED_user_defined,$message,$varargs) {
 $UNUSED_user_defined = $UNUSED_user_defined|0;
 $message = $message|0;
 $varargs = $varargs|0;
 var $0 = 0, $1 = 0, $2 = 0, $args = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $args = sp;
 $0 = $UNUSED_user_defined;
 $1 = $message;
 HEAP32[$args>>2] = $varargs;
 $2 = $1;
 _DebugMessage(5,$2,$args);
 STACKTOP = sp;return;
}
function _HleErrorMessage($UNUSED_user_defined,$message,$varargs) {
 $UNUSED_user_defined = $UNUSED_user_defined|0;
 $message = $message|0;
 $varargs = $varargs|0;
 var $0 = 0, $1 = 0, $2 = 0, $args = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $args = sp;
 $0 = $UNUSED_user_defined;
 $1 = $message;
 HEAP32[$args>>2] = $varargs;
 $2 = $1;
 _DebugMessage(1,$2,$args);
 STACKTOP = sp;return;
}
function _HleWarnMessage($UNUSED_user_defined,$message,$varargs) {
 $UNUSED_user_defined = $UNUSED_user_defined|0;
 $message = $message|0;
 $varargs = $varargs|0;
 var $0 = 0, $1 = 0, $2 = 0, $args = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $args = sp;
 $0 = $UNUSED_user_defined;
 $1 = $message;
 HEAP32[$args>>2] = $varargs;
 $2 = $1;
 _DebugMessage(2,$2,$args);
 STACKTOP = sp;return;
}
function _HleCheckInterrupts($UNUSED_user_defined) {
 $UNUSED_user_defined = $UNUSED_user_defined|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_user_defined;
 $1 = HEAP32[(gb + (6720) | 0)>>2]|0;
 $2 = ($1|0)==(0|0);
 if ($2) {
  STACKTOP = sp;return;
 }
 $3 = HEAP32[(gb + (6720) | 0)>>2]|0;
 mftCall_v($3|0);
 STACKTOP = sp;return;
}
function _HleProcessDlistList($UNUSED_user_defined) {
 $UNUSED_user_defined = $UNUSED_user_defined|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_user_defined;
 $1 = HEAP32[(gb + (6724) | 0)>>2]|0;
 $2 = ($1|0)==(0|0);
 if ($2) {
  STACKTOP = sp;return;
 }
 $3 = HEAP32[(gb + (6724) | 0)>>2]|0;
 mftCall_v($3|0);
 STACKTOP = sp;return;
}
function _HleProcessAlistList($UNUSED_user_defined) {
 $UNUSED_user_defined = $UNUSED_user_defined|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_user_defined;
 $1 = HEAP32[(gb + (6728) | 0)>>2]|0;
 $2 = ($1|0)==(0|0);
 if ($2) {
  STACKTOP = sp;return;
 }
 $3 = HEAP32[(gb + (6728) | 0)>>2]|0;
 mftCall_v($3|0);
 STACKTOP = sp;return;
}
function _HleProcessRdpList($UNUSED_user_defined) {
 $UNUSED_user_defined = $UNUSED_user_defined|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_user_defined;
 $1 = HEAP32[(gb + (6732) | 0)>>2]|0;
 $2 = ($1|0)==(0|0);
 if ($2) {
  STACKTOP = sp;return;
 }
 $3 = HEAP32[(gb + (6732) | 0)>>2]|0;
 mftCall_v($3|0);
 STACKTOP = sp;return;
}
function _HleShowCFB($UNUSED_user_defined) {
 $UNUSED_user_defined = $UNUSED_user_defined|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_user_defined;
 $1 = HEAP32[(gb + (6736) | 0)>>2]|0;
 $2 = ($1|0)==(0|0);
 if ($2) {
  STACKTOP = sp;return;
 }
 $3 = HEAP32[(gb + (6736) | 0)>>2]|0;
 mftCall_v($3|0);
 STACKTOP = sp;return;
}
function _PluginStartup($UNUSED_CoreLibHandle,$Context,$DebugCallback) {
 $UNUSED_CoreLibHandle = $UNUSED_CoreLibHandle|0;
 $Context = $Context|0;
 $DebugCallback = $DebugCallback|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_CoreLibHandle;
 $1 = $Context;
 $2 = $DebugCallback;
 $3 = $2;
 HEAP32[(gb + (6740) | 0)>>2] = $3;
 $4 = $1;
 HEAP32[(gb + (6744) | 0)>>2] = $4;
 HEAP32[(gb + (6748) | 0)>>2] = 1;
 STACKTOP = sp;return 0;
}
function _PluginShutdown() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $1 = HEAP32[(gb + (6748) | 0)>>2]|0;
 $2 = ($1|0)!=(0);
 if ($2) {
  HEAP32[(gb + (6740) | 0)>>2] = 0;
  HEAP32[(gb + (6744) | 0)>>2] = 0;
  HEAP32[(gb + (6748) | 0)>>2] = 0;
  $0 = 0;
  $3 = $0;
  STACKTOP = sp;return ($3|0);
 } else {
  $0 = 1;
  $3 = $0;
  STACKTOP = sp;return ($3|0);
 }
 return (0)|0;
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
  HEAP32[$7>>2] = 1;
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
  HEAP32[$16>>2] = (gb + (6668) | 0);
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
function _DoRspCycles($Cycles) {
 $Cycles = $Cycles|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $Cycles;
 _hle_execute((gb + (6752) | 0));
 $1 = $0;
 STACKTOP = sp;return ($1|0);
}
function _InitiateRSP($Rsp_Info,$UNUSED_CycleCount) {
 $Rsp_Info = $Rsp_Info|0;
 $UNUSED_CycleCount = $UNUSED_CycleCount|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $UNUSED_CycleCount;
 $1 = HEAP32[$Rsp_Info>>2]|0;
 $2 = ((($Rsp_Info)) + 4|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ((($Rsp_Info)) + 8|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = ((($Rsp_Info)) + 12|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = ((($Rsp_Info)) + 16|0);
 $9 = HEAP32[$8>>2]|0;
 $10 = ((($Rsp_Info)) + 20|0);
 $11 = HEAP32[$10>>2]|0;
 $12 = ((($Rsp_Info)) + 24|0);
 $13 = HEAP32[$12>>2]|0;
 $14 = ((($Rsp_Info)) + 28|0);
 $15 = HEAP32[$14>>2]|0;
 $16 = ((($Rsp_Info)) + 32|0);
 $17 = HEAP32[$16>>2]|0;
 $18 = ((($Rsp_Info)) + 36|0);
 $19 = HEAP32[$18>>2]|0;
 $20 = ((($Rsp_Info)) + 40|0);
 $21 = HEAP32[$20>>2]|0;
 $22 = ((($Rsp_Info)) + 44|0);
 $23 = HEAP32[$22>>2]|0;
 $24 = ((($Rsp_Info)) + 48|0);
 $25 = HEAP32[$24>>2]|0;
 $26 = ((($Rsp_Info)) + 52|0);
 $27 = HEAP32[$26>>2]|0;
 $28 = ((($Rsp_Info)) + 56|0);
 $29 = HEAP32[$28>>2]|0;
 $30 = ((($Rsp_Info)) + 60|0);
 $31 = HEAP32[$30>>2]|0;
 $32 = ((($Rsp_Info)) + 64|0);
 $33 = HEAP32[$32>>2]|0;
 $34 = ((($Rsp_Info)) + 68|0);
 $35 = HEAP32[$34>>2]|0;
 $36 = ((($Rsp_Info)) + 72|0);
 $37 = HEAP32[$36>>2]|0;
 $38 = ((($Rsp_Info)) + 76|0);
 $39 = HEAP32[$38>>2]|0;
 $40 = ((($Rsp_Info)) + 80|0);
 $41 = HEAP32[$40>>2]|0;
 _hle_init((gb + (6752) | 0),$1,$3,$5,$7,$9,$11,$13,$15,$17,$19,$21,$23,$25,$27,$29,$31,$33,$35,$37,$39,$41,0);
 $42 = ((($Rsp_Info)) + 84|0);
 $43 = HEAP32[$42>>2]|0;
 HEAP32[(gb + (6720) | 0)>>2] = $43;
 $44 = ((($Rsp_Info)) + 88|0);
 $45 = HEAP32[$44>>2]|0;
 HEAP32[(gb + (6724) | 0)>>2] = $45;
 $46 = ((($Rsp_Info)) + 92|0);
 $47 = HEAP32[$46>>2]|0;
 HEAP32[(gb + (6728) | 0)>>2] = $47;
 $48 = ((($Rsp_Info)) + 96|0);
 $49 = HEAP32[$48>>2]|0;
 HEAP32[(gb + (6732) | 0)>>2] = $49;
 $50 = ((($Rsp_Info)) + 100|0);
 $51 = HEAP32[$50>>2]|0;
 HEAP32[(gb + (6736) | 0)>>2] = $51;
 STACKTOP = sp;return;
}
function _RomClosed() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function _DebugMessage($level,$message,$args) {
 $level = $level|0;
 $message = $message|0;
 $args = $args|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $msgbuf = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1040|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $msgbuf = sp + 16|0;
 $0 = $level;
 $1 = $message;
 $2 = $args;
 $3 = HEAP32[(gb + (6740) | 0)>>2]|0;
 $4 = ($3|0)==(0|0);
 if ($4) {
  STACKTOP = sp;return;
 }
 $5 = $1;
 $6 = $2;
 (_vsprintf(($msgbuf|0),($5|0),($6|0))|0);
 $7 = HEAP32[(gb + (6740) | 0)>>2]|0;
 $8 = HEAP32[(gb + (6744) | 0)>>2]|0;
 $9 = $0;
 mftCall_viii($7|0,($8|0),($9|0),($msgbuf|0));
 STACKTOP = sp;return;
}
function runPostSets() {
 var temp = 0;

 HEAP32[(gb + (0) | 0) >> 2] = (fb + (1) | 0);

 HEAP32[(gb + (4) | 0) >> 2] = (fb + (2) | 0);

 HEAP32[(gb + (8) | 0) >> 2] = (fb + (3) | 0);

 HEAP32[(gb + (12) | 0) >> 2] = (fb + (4) | 0);

 HEAP32[(gb + (16) | 0) >> 2] = (fb + (5) | 0);

 HEAP32[(gb + (20) | 0) >> 2] = (fb + (6) | 0);

 HEAP32[(gb + (24) | 0) >> 2] = (fb + (7) | 0);

 HEAP32[(gb + (28) | 0) >> 2] = (fb + (8) | 0);

 HEAP32[(gb + (32) | 0) >> 2] = (fb + (9) | 0);

 HEAP32[(gb + (36) | 0) >> 2] = (fb + (10) | 0);

 HEAP32[(gb + (40) | 0) >> 2] = (fb + (11) | 0);

 HEAP32[(gb + (44) | 0) >> 2] = (fb + (12) | 0);

 HEAP32[(gb + (48) | 0) >> 2] = (fb + (13) | 0);

 HEAP32[(gb + (52) | 0) >> 2] = (fb + (14) | 0);

 HEAP32[(gb + (56) | 0) >> 2] = (fb + (15) | 0);

 HEAP32[(gb + (60) | 0) >> 2] = (fb + (16) | 0);

 HEAP32[(gb + (64) | 0) >> 2] = (fb + (1) | 0);

 HEAP32[(gb + (68) | 0) >> 2] = (fb + (2) | 0);

 HEAP32[(gb + (72) | 0) >> 2] = (fb + (3) | 0);

 HEAP32[(gb + (76) | 0) >> 2] = (fb + (17) | 0);

 HEAP32[(gb + (80) | 0) >> 2] = (fb + (5) | 0);

 HEAP32[(gb + (84) | 0) >> 2] = (fb + (6) | 0);

 HEAP32[(gb + (88) | 0) >> 2] = (fb + (7) | 0);

 HEAP32[(gb + (92) | 0) >> 2] = (fb + (8) | 0);

 HEAP32[(gb + (96) | 0) >> 2] = (fb + (9) | 0);

 HEAP32[(gb + (100) | 0) >> 2] = (fb + (10) | 0);

 HEAP32[(gb + (104) | 0) >> 2] = (fb + (11) | 0);

 HEAP32[(gb + (108) | 0) >> 2] = (fb + (12) | 0);

 HEAP32[(gb + (112) | 0) >> 2] = (fb + (13) | 0);

 HEAP32[(gb + (116) | 0) >> 2] = (fb + (14) | 0);

 HEAP32[(gb + (120) | 0) >> 2] = (fb + (15) | 0);

 HEAP32[(gb + (124) | 0) >> 2] = (fb + (16) | 0);

 HEAP32[(gb + (128) | 0) >> 2] = (fb + (1) | 0);

 HEAP32[(gb + (132) | 0) >> 2] = (fb + (2) | 0);

 HEAP32[(gb + (136) | 0) >> 2] = (fb + (3) | 0);

 HEAP32[(gb + (140) | 0) >> 2] = (fb + (17) | 0);

 HEAP32[(gb + (144) | 0) >> 2] = (fb + (5) | 0);

 HEAP32[(gb + (148) | 0) >> 2] = (fb + (6) | 0);

 HEAP32[(gb + (152) | 0) >> 2] = (fb + (7) | 0);

 HEAP32[(gb + (156) | 0) >> 2] = (fb + (8) | 0);

 HEAP32[(gb + (160) | 0) >> 2] = (fb + (9) | 0);

 HEAP32[(gb + (164) | 0) >> 2] = (fb + (10) | 0);

 HEAP32[(gb + (168) | 0) >> 2] = (fb + (11) | 0);

 HEAP32[(gb + (172) | 0) >> 2] = (fb + (12) | 0);

 HEAP32[(gb + (176) | 0) >> 2] = (fb + (13) | 0);

 HEAP32[(gb + (180) | 0) >> 2] = (fb + (14) | 0);

 HEAP32[(gb + (184) | 0) >> 2] = (fb + (15) | 0);

 HEAP32[(gb + (188) | 0) >> 2] = (fb + (16) | 0);

 HEAP32[(gb + (192) | 0) >> 2] = (fb + (18) | 0);

 HEAP32[(gb + (196) | 0) >> 2] = (fb + (19) | 0);

 HEAP32[(gb + (200) | 0) >> 2] = (fb + (20) | 0);

 HEAP32[(gb + (204) | 0) >> 2] = (fb + (21) | 0);

 HEAP32[(gb + (208) | 0) >> 2] = (fb + (22) | 0);

 HEAP32[(gb + (212) | 0) >> 2] = (fb + (23) | 0);

 HEAP32[(gb + (216) | 0) >> 2] = (fb + (24) | 0);

 HEAP32[(gb + (220) | 0) >> 2] = (fb + (25) | 0);

 HEAP32[(gb + (224) | 0) >> 2] = (fb + (25) | 0);

 HEAP32[(gb + (228) | 0) >> 2] = (fb + (26) | 0);

 HEAP32[(gb + (232) | 0) >> 2] = (fb + (27) | 0);

 HEAP32[(gb + (236) | 0) >> 2] = (fb + (28) | 0);

 HEAP32[(gb + (240) | 0) >> 2] = (fb + (29) | 0);

 HEAP32[(gb + (244) | 0) >> 2] = (fb + (30) | 0);

 HEAP32[(gb + (248) | 0) >> 2] = (fb + (31) | 0);

 HEAP32[(gb + (252) | 0) >> 2] = (fb + (32) | 0);

 HEAP32[(gb + (256) | 0) >> 2] = (fb + (18) | 0);

 HEAP32[(gb + (260) | 0) >> 2] = (fb + (19) | 0);

 HEAP32[(gb + (264) | 0) >> 2] = (fb + (20) | 0);

 HEAP32[(gb + (268) | 0) >> 2] = (fb + (21) | 0);

 HEAP32[(gb + (272) | 0) >> 2] = (fb + (22) | 0);

 HEAP32[(gb + (276) | 0) >> 2] = (fb + (23) | 0);

 HEAP32[(gb + (280) | 0) >> 2] = (fb + (24) | 0);

 HEAP32[(gb + (284) | 0) >> 2] = (fb + (25) | 0);

 HEAP32[(gb + (288) | 0) >> 2] = (fb + (25) | 0);

 HEAP32[(gb + (292) | 0) >> 2] = (fb + (26) | 0);

 HEAP32[(gb + (296) | 0) >> 2] = (fb + (27) | 0);

 HEAP32[(gb + (300) | 0) >> 2] = (fb + (28) | 0);

 HEAP32[(gb + (304) | 0) >> 2] = (fb + (29) | 0);

 HEAP32[(gb + (308) | 0) >> 2] = (fb + (30) | 0);

 HEAP32[(gb + (312) | 0) >> 2] = (fb + (31) | 0);

 HEAP32[(gb + (316) | 0) >> 2] = (fb + (32) | 0);

 HEAP32[(gb + (320) | 0) >> 2] = (fb + (18) | 0);

 HEAP32[(gb + (324) | 0) >> 2] = (fb + (19) | 0);

 HEAP32[(gb + (328) | 0) >> 2] = (fb + (20) | 0);

 HEAP32[(gb + (332) | 0) >> 2] = (fb + (21) | 0);

 HEAP32[(gb + (336) | 0) >> 2] = (fb + (22) | 0);

 HEAP32[(gb + (340) | 0) >> 2] = (fb + (23) | 0);

 HEAP32[(gb + (344) | 0) >> 2] = (fb + (24) | 0);

 HEAP32[(gb + (348) | 0) >> 2] = (fb + (29) | 0);

 HEAP32[(gb + (352) | 0) >> 2] = (fb + (29) | 0);

 HEAP32[(gb + (356) | 0) >> 2] = (fb + (26) | 0);

 HEAP32[(gb + (360) | 0) >> 2] = (fb + (27) | 0);

 HEAP32[(gb + (364) | 0) >> 2] = (fb + (28) | 0);

 HEAP32[(gb + (368) | 0) >> 2] = (fb + (29) | 0);

 HEAP32[(gb + (372) | 0) >> 2] = (fb + (30) | 0);

 HEAP32[(gb + (376) | 0) >> 2] = (fb + (31) | 0);

 HEAP32[(gb + (380) | 0) >> 2] = (fb + (32) | 0);

 HEAP32[(gb + (384) | 0) >> 2] = (fb + (33) | 0);

 HEAP32[(gb + (388) | 0) >> 2] = (fb + (19) | 0);

 HEAP32[(gb + (392) | 0) >> 2] = (fb + (20) | 0);

 HEAP32[(gb + (396) | 0) >> 2] = (fb + (21) | 0);
 runPostSets1();
}
function runPostSets1() {
 var temp = 0;

 HEAP32[(gb + (400) | 0) >> 2] = (fb + (22) | 0);

 HEAP32[(gb + (404) | 0) >> 2] = (fb + (23) | 0);

 HEAP32[(gb + (408) | 0) >> 2] = (fb + (24) | 0);

 HEAP32[(gb + (412) | 0) >> 2] = (fb + (34) | 0);

 HEAP32[(gb + (416) | 0) >> 2] = (fb + (35) | 0);

 HEAP32[(gb + (420) | 0) >> 2] = (fb + (26) | 0);

 HEAP32[(gb + (424) | 0) >> 2] = (fb + (27) | 0);

 HEAP32[(gb + (428) | 0) >> 2] = (fb + (28) | 0);

 HEAP32[(gb + (432) | 0) >> 2] = (fb + (29) | 0);

 HEAP32[(gb + (436) | 0) >> 2] = (fb + (30) | 0);

 HEAP32[(gb + (440) | 0) >> 2] = (fb + (36) | 0);

 HEAP32[(gb + (444) | 0) >> 2] = (fb + (32) | 0);

 HEAP32[(gb + (448) | 0) >> 2] = (fb + (33) | 0);

 HEAP32[(gb + (452) | 0) >> 2] = (fb + (19) | 0);

 HEAP32[(gb + (456) | 0) >> 2] = (fb + (20) | 0);

 HEAP32[(gb + (460) | 0) >> 2] = (fb + (21) | 0);

 HEAP32[(gb + (464) | 0) >> 2] = (fb + (22) | 0);

 HEAP32[(gb + (468) | 0) >> 2] = (fb + (23) | 0);

 HEAP32[(gb + (472) | 0) >> 2] = (fb + (24) | 0);

 HEAP32[(gb + (476) | 0) >> 2] = (fb + (34) | 0);

 HEAP32[(gb + (480) | 0) >> 2] = (fb + (35) | 0);

 HEAP32[(gb + (484) | 0) >> 2] = (fb + (26) | 0);

 HEAP32[(gb + (488) | 0) >> 2] = (fb + (27) | 0);

 HEAP32[(gb + (492) | 0) >> 2] = (fb + (28) | 0);

 HEAP32[(gb + (496) | 0) >> 2] = (fb + (29) | 0);

 HEAP32[(gb + (500) | 0) >> 2] = (fb + (30) | 0);

 HEAP32[(gb + (504) | 0) >> 2] = (fb + (36) | 0);

 HEAP32[(gb + (508) | 0) >> 2] = (fb + (32) | 0);

 HEAP32[(gb + (512) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (516) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (520) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (524) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (528) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (532) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (536) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (540) | 0) >> 2] = (fb + (41) | 0);

 HEAP32[(gb + (544) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (548) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (552) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (556) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (560) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (564) | 0) >> 2] = (fb + (46) | 0);

 HEAP32[(gb + (568) | 0) >> 2] = (fb + (47) | 0);

 HEAP32[(gb + (572) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (576) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (580) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (584) | 0) >> 2] = (fb + (51) | 0);

 HEAP32[(gb + (588) | 0) >> 2] = (fb + (52) | 0);

 HEAP32[(gb + (592) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (596) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (600) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (604) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (608) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (612) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (616) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (620) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (624) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (628) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (632) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (636) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (640) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (644) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (648) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (652) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (656) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (660) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (664) | 0) >> 2] = (fb + (57) | 0);

 HEAP32[(gb + (668) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (672) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (676) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (680) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (684) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (688) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (692) | 0) >> 2] = (fb + (46) | 0);

 HEAP32[(gb + (696) | 0) >> 2] = (fb + (47) | 0);

 HEAP32[(gb + (700) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (704) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (708) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (712) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (716) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (720) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (724) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (728) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (732) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (736) | 0) >> 2] = (fb + (60) | 0);

 HEAP32[(gb + (740) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (744) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (748) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (752) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (756) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (760) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (764) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (768) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (772) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (776) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (780) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (784) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (788) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (792) | 0) >> 2] = (fb + (57) | 0);

 HEAP32[(gb + (796) | 0) >> 2] = (fb + (37) | 0);
 runPostSets2();
}
function runPostSets2() {
 var temp = 0;

 HEAP32[(gb + (800) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (804) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (808) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (812) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (816) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (820) | 0) >> 2] = (fb + (46) | 0);

 HEAP32[(gb + (824) | 0) >> 2] = (fb + (47) | 0);

 HEAP32[(gb + (828) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (832) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (836) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (840) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (844) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (848) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (852) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (856) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (860) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (864) | 0) >> 2] = (fb + (60) | 0);

 HEAP32[(gb + (868) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (872) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (876) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (880) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (884) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (888) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (892) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (896) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (900) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (904) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (908) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (912) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (916) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (920) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (924) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (928) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (932) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (936) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (940) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (944) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (948) | 0) >> 2] = (fb + (63) | 0);

 HEAP32[(gb + (952) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (956) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (960) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (964) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (968) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (972) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (976) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (980) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (984) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (988) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (992) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (996) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1000) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (1004) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1008) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1012) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1016) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1020) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1024) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1028) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (1032) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (1036) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1040) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (1044) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (1048) | 0) >> 2] = (fb + (57) | 0);

 HEAP32[(gb + (1052) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1056) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (1060) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1064) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (1068) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (1072) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (1076) | 0) >> 2] = (fb + (63) | 0);

 HEAP32[(gb + (1080) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1084) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (1088) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (1092) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (1096) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (1100) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (1104) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (1108) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (1112) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (1116) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1120) | 0) >> 2] = (fb + (60) | 0);

 HEAP32[(gb + (1124) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1128) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (1132) | 0) >> 2] = (fb + (64) | 0);

 HEAP32[(gb + (1136) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1140) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1144) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1148) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1152) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1156) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (1160) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (1164) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1168) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (1172) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (1176) | 0) >> 2] = (fb + (57) | 0);

 HEAP32[(gb + (1180) | 0) >> 2] = (fb + (64) | 0);

 HEAP32[(gb + (1184) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (1188) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (1192) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (1196) | 0) >> 2] = (fb + (44) | 0);
 runPostSets3();
}
function runPostSets3() {
 var temp = 0;

 HEAP32[(gb + (1200) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (1204) | 0) >> 2] = (fb + (63) | 0);

 HEAP32[(gb + (1208) | 0) >> 2] = (fb + (60) | 0);

 HEAP32[(gb + (1212) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (1216) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (1220) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (1224) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (1228) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (1232) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (1236) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (1240) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (1244) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1248) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1252) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (1256) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (1260) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1264) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (1268) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (1272) | 0) >> 2] = (fb + (57) | 0);

 HEAP32[(gb + (1276) | 0) >> 2] = (fb + (64) | 0);

 HEAP32[(gb + (1280) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (1284) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (1288) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (1292) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (1296) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (1300) | 0) >> 2] = (fb + (63) | 0);

 HEAP32[(gb + (1304) | 0) >> 2] = (fb + (60) | 0);

 HEAP32[(gb + (1308) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (1312) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (1316) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (1320) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (1324) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (1328) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (1332) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (1336) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (1340) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1344) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1348) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (1352) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (1356) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1360) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (1364) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (1368) | 0) >> 2] = (fb + (57) | 0);

 HEAP32[(gb + (1372) | 0) >> 2] = (fb + (64) | 0);

 HEAP32[(gb + (1376) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (1380) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (1384) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (1388) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (1392) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (1396) | 0) >> 2] = (fb + (63) | 0);

 HEAP32[(gb + (1400) | 0) >> 2] = (fb + (60) | 0);

 HEAP32[(gb + (1404) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (1408) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (1412) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (1416) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (1420) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (1424) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (1428) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (1432) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (1436) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1440) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1444) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (1448) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (1452) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1456) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (1460) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (1464) | 0) >> 2] = (fb + (57) | 0);

 HEAP32[(gb + (1468) | 0) >> 2] = (fb + (64) | 0);

 HEAP32[(gb + (1472) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (1476) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (1480) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (1484) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (1488) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (1492) | 0) >> 2] = (fb + (63) | 0);

 HEAP32[(gb + (1496) | 0) >> 2] = (fb + (60) | 0);

 HEAP32[(gb + (1500) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (1504) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (1508) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (1512) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (1516) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (1520) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (1524) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (1528) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (1532) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1536) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1540) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (1544) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (1548) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1552) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (1556) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (1560) | 0) >> 2] = (fb + (57) | 0);

 HEAP32[(gb + (1564) | 0) >> 2] = (fb + (64) | 0);

 HEAP32[(gb + (1568) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (1572) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (1576) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (1580) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (1584) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (1588) | 0) >> 2] = (fb + (63) | 0);

 HEAP32[(gb + (1592) | 0) >> 2] = (fb + (60) | 0);

 HEAP32[(gb + (1596) | 0) >> 2] = (fb + (48) | 0);
 runPostSets4();
}
function runPostSets4() {
 var temp = 0;

 HEAP32[(gb + (1600) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (1604) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (1608) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (1612) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (1616) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (1620) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (1624) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (1628) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1632) | 0) >> 2] = (fb + (61) | 0);

 HEAP32[(gb + (1636) | 0) >> 2] = (fb + (38) | 0);

 HEAP32[(gb + (1640) | 0) >> 2] = (fb + (39) | 0);

 HEAP32[(gb + (1644) | 0) >> 2] = (fb + (37) | 0);

 HEAP32[(gb + (1648) | 0) >> 2] = (fb + (56) | 0);

 HEAP32[(gb + (1652) | 0) >> 2] = (fb + (40) | 0);

 HEAP32[(gb + (1656) | 0) >> 2] = (fb + (57) | 0);

 HEAP32[(gb + (1660) | 0) >> 2] = (fb + (64) | 0);

 HEAP32[(gb + (1664) | 0) >> 2] = (fb + (42) | 0);

 HEAP32[(gb + (1668) | 0) >> 2] = (fb + (62) | 0);

 HEAP32[(gb + (1672) | 0) >> 2] = (fb + (43) | 0);

 HEAP32[(gb + (1676) | 0) >> 2] = (fb + (44) | 0);

 HEAP32[(gb + (1680) | 0) >> 2] = (fb + (45) | 0);

 HEAP32[(gb + (1684) | 0) >> 2] = (fb + (63) | 0);

 HEAP32[(gb + (1688) | 0) >> 2] = (fb + (60) | 0);

 HEAP32[(gb + (1692) | 0) >> 2] = (fb + (48) | 0);

 HEAP32[(gb + (1696) | 0) >> 2] = (fb + (49) | 0);

 HEAP32[(gb + (1700) | 0) >> 2] = (fb + (50) | 0);

 HEAP32[(gb + (1704) | 0) >> 2] = (fb + (58) | 0);

 HEAP32[(gb + (1708) | 0) >> 2] = (fb + (59) | 0);

 HEAP32[(gb + (1712) | 0) >> 2] = (fb + (53) | 0);

 HEAP32[(gb + (1716) | 0) >> 2] = (fb + (54) | 0);

 HEAP32[(gb + (1720) | 0) >> 2] = (fb + (55) | 0);

 HEAP32[(gb + (1724) | 0) >> 2] = (fb + (61) | 0);
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
 ptr = ptr | 0;p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 127 | 0))) { return FUNCTION_TABLE_iiiii[(ptr-fb)&127](p0|0,p1|0,p2|0,p3|0)|0;  }return ftCall_iiiii(ptr|0,p0|0,p1|0,p2|0,p3|0)|0;
}
function mftCall_viiii(ptr,p0,p1,p2,p3) {
 ptr = ptr | 0;p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 127 | 0))) {  FUNCTION_TABLE_viiii[(ptr-fb)&127](p0|0,p1|0,p2|0,p3|0); return; } ftCall_viiii(ptr|0,p0|0,p1|0,p2|0,p3|0);
}
function mftCall_vii(ptr,p0,p1) {
 ptr = ptr | 0;p0 = p0|0;p1 = p1|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 127 | 0))) {  FUNCTION_TABLE_vii[(ptr-fb)&127](p0|0,p1|0); return; } ftCall_vii(ptr|0,p0|0,p1|0);
}
function mftCall_viii(ptr,p0,p1,p2) {
 ptr = ptr | 0;p0 = p0|0;p1 = p1|0;p2 = p2|0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 127 | 0))) {  FUNCTION_TABLE_viii[(ptr-fb)&127](p0|0,p1|0,p2|0); return; } ftCall_viii(ptr|0,p0|0,p1|0,p2|0);
}
function mftCall_v(ptr) {
 ptr = ptr | 0; if (((ptr|0) >= (fb|0)) & ((ptr|0) < (fb + 0 | 0))) {  FUNCTION_TABLE_v[(ptr-fb)&0](); return; } ftCall_v(ptr|0);
}

  
//iiiii = ftCall_iiiii;


//viiii = ftCall_viiii;


//vii = ftCall_vii;


//viii = ftCall_viii;


//v = ftCall_v;

function b0(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_iiiii(0);return 0;
}
function b1(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_viiii(1);
}
function b2(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_vii(2);
}
function b3(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_viii(3);
}
function b4() {
 ; nullFunc_v(4);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiiii = [b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,_adpcm_predict_frame_4bits,_adpcm_predict_frame_2bits,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,b0,b0,b0];
var FUNCTION_TABLE_viiii = [b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,_EmitYUVTileLine,_EmitRGBATileLine,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1];
var FUNCTION_TABLE_vii = [b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,_RescaleYSubBlock,_RescaleUVSubBlock,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2];
var FUNCTION_TABLE_viii = [b3,_SPNOOP,_ADPCM,_CLEARBUFF,_ENVMIXER,_LOADBUFF,_RESAMPLE,_SAVEBUFF,_SEGMENT,_SETBUFF,_SETVOL,_DMEMMOVE,_LOADADPCM,_MIXER,_INTERLEAVE,_POLEF,_SETLOOP,_ENVMIXER_GE,_SPNOOP_17,_ADPCM_3,_CLEARBUFF_4,_ENVMIXER_5,_LOADBUFF_6,_RESAMPLE_7,_SAVEBUFF_8,_NAUDIO_0000,_SETVOL_9,_DMEMMOVE_10,_LOADADPCM_11
,_MIXER_12,_INTERLEAVE_13,_NAUDIO_02B0,_SETLOOP_14,_UNKNOWN,_MP3,_MP3ADDY,_NAUDIO_14,_SPNOOP_21,_ADPCM_19,_CLEARBUFF_20,_RESAMPLE_22,_SEGMENT_35,_SETBUFF_23,_DMEMMOVE_24,_LOADADPCM_25,_MIXER_26,_INTERLEAVE_MK,_POLEF_34,_SETLOOP_28,_NEAD_16,_INTERL,_ENVSETUP1_MK,_ENVMIXER_MK,_LOADBUFF_30,_SAVEBUFF_31,_ENVSETUP2,_ADDMIXER,_RESAMPLE_ZOH,_ENVSETUP1
,_ENVMIXER_29,_HILOGAIN,_UNKNOWN_18,_DUPLICATE,_INTERLEAVE_27,_FILTER,b3,b3,b3,b3,b3,b3,_mix_sfx_with_main_subframes_v1,_mix_sfx_with_main_subframes_v2,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3,b3,b3,b3,b3];
var FUNCTION_TABLE_v = [b4];

  return { _alist_process_nead_oot: _alist_process_nead_oot, _alist_process_nead_fz: _alist_process_nead_fz, _SAVEBUFF_31: _SAVEBUFF_31, _alist_clear: _alist_clear, _adpcm_predict_frame_4bits: _adpcm_predict_frame_4bits, _FILTER: _FILTER, _SETBUFF: _SETBUFF, _store_u8: _store_u8, _rdot: _rdot, _ENVMIXER_MK: _ENVMIXER_MK, _RescaleUVSubBlock: _RescaleUVSubBlock, _HleProcessRdpList: _HleProcessRdpList, _UNKNOWN: _UNKNOWN, _InitiateRSP: _InitiateRSP, _alist_get_address: _alist_get_address, _MP3: _MP3, _INTERL: _INTERL, _NEAD_16: _NEAD_16, _alist_adpcm: _alist_adpcm, _RescaleYSubBlock: _RescaleYSubBlock, _CLEARBUFF_20: _CLEARBUFF_20, _PluginStartup: _PluginStartup, _alist_iirf: _alist_iirf, _alist_process_audio: _alist_process_audio, _DoRspCycles: _DoRspCycles, _bitshift64Ashr: _bitshift64Ashr, _POLEF_34: _POLEF_34, _SAVEBUFF: _SAVEBUFF, _CLEARBUFF: _CLEARBUFF, _ENVSETUP2: _ENVSETUP2, _jpeg_decode_OB: _jpeg_decode_OB, _SEGMENT: _SEGMENT, _PluginShutdown: _PluginShutdown, _ENVMIXER: _ENVMIXER, _SETLOOP_14: _SETLOOP_14, _HleProcessDlistList: _HleProcessDlistList, _alist_process_audio_bc: _alist_process_audio_bc, stackAlloc: stackAlloc, _DMEMMOVE_10: _DMEMMOVE_10, _alist_process_nead_ac: _alist_process_nead_ac, _alist_process_naudio_dk: _alist_process_naudio_dk, _DMEMMOVE_24: _DMEMMOVE_24, _RESAMPLE: _RESAMPLE, _PluginGetVersion: _PluginGetVersion, _ENVSETUP1: _ENVSETUP1, _adpcm_compute_residuals: _adpcm_compute_residuals, _musyx_v2_task: _musyx_v2_task, _MP3ADDY: _MP3ADDY, _SPNOOP_21: _SPNOOP_21, _MIXER_26: _MIXER_26, _MIXER_12: _MIXER_12, _SPNOOP_17: _SPNOOP_17, _alist_process_naudio: _alist_process_naudio, stackSave: stackSave, _SETBUFF_23: _SETBUFF_23, _INTERLEAVE_13: _INTERLEAVE_13, _store_u32: _store_u32, _alist_filter: _alist_filter, runPostSets: runPostSets, _alist_process_nead_mm: _alist_process_nead_mm, _alist_add: _alist_add, _ENVMIXER_GE: _ENVMIXER_GE, _alist_process_nead_mk: _alist_process_nead_mk, _LOADADPCM_25: _LOADADPCM_25, _load_u32: _load_u32, _INTERLEAVE_MK: _INTERLEAVE_MK, _alist_envmix_lin: _alist_envmix_lin, _POLEF: _POLEF, _musyx_v1_task: _musyx_v1_task, _RESAMPLE_22: _RESAMPLE_22, _EmitYUVTileLine: _EmitYUVTileLine, _SETVOL: _SETVOL, _alist_process_naudio_cbfd: _alist_process_naudio_cbfd, _mp3_task: _mp3_task, _jpeg_decode_PS: _jpeg_decode_PS, _LOADADPCM_11: _LOADADPCM_11, _RomClosed: _RomClosed, _HleWarnMessage: _HleWarnMessage, _alist_envmix_nead: _alist_envmix_nead, _alist_copy_every_other_sample: _alist_copy_every_other_sample, _HILOGAIN: _HILOGAIN, _ADPCM_19: _ADPCM_19, _LOADBUFF: _LOADBUFF, _alist_process_nead_ys: _alist_process_nead_ys, _alist_copy_blocks: _alist_copy_blocks, _alist_multQ44: _alist_multQ44, _i64Subtract: _i64Subtract, _alist_process_nead_mmb: _alist_process_nead_mmb, setThrew: setThrew, _alist_process_naudio_mp3: _alist_process_naudio_mp3, _INTERLEAVE: _INTERLEAVE, _HleCheckInterrupts: _HleCheckInterrupts, _alist_resample: _alist_resample, _DMEMMOVE: _DMEMMOVE, _INTERLEAVE_27: _INTERLEAVE_27, _ADPCM: _ADPCM, _SETLOOP: _SETLOOP, _HleProcessAlistList: _HleProcessAlistList, _HleVerboseMessage: _HleVerboseMessage, _alist_interleave: _alist_interleave, _LOADADPCM: _LOADADPCM, _cicx105_ucode: _cicx105_ucode, _alist_set_address: _alist_set_address, _SETLOOP_28: _SETLOOP_28, _alist_polef: _alist_polef, _SETVOL_9: _SETVOL_9, _LOADBUFF_6: _LOADBUFF_6, _SAVEBUFF_8: _SAVEBUFF_8, _ADPCM_3: _ADPCM_3, _HleShowCFB: _HleShowCFB, _alist_process_nead_1080: _alist_process_nead_1080, _MIXER: _MIXER, _ENVMIXER_29: _ENVMIXER_29, _alist_move: _alist_move, _LOADBUFF_30: _LOADBUFF_30, _i64Add: _i64Add, _adpcm_predict_frame_2bits: _adpcm_predict_frame_2bits, _NAUDIO_02B0: _NAUDIO_02B0, _alist_mix: _alist_mix, _NAUDIO_0000: _NAUDIO_0000, _alist_save: _alist_save, _hle_execute: _hle_execute, _SPNOOP: _SPNOOP, stackRestore: stackRestore, _HleErrorMessage: _HleErrorMessage, _ENVSETUP1_MK: _ENVSETUP1_MK, _alist_process_naudio_bk: _alist_process_naudio_bk, _NAUDIO_14: _NAUDIO_14, _alist_load: _alist_load, _store_u16: _store_u16, _SEGMENT_35: _SEGMENT_35, _alist_envmix_exp: _alist_envmix_exp, _DUPLICATE: _DUPLICATE, _UNKNOWN_18: _UNKNOWN_18, _alist_process_nead_wrjb: _alist_process_nead_wrjb, _CLEARBUFF_4: _CLEARBUFF_4, _EmitRGBATileLine: _EmitRGBATileLine, establishStackSpace: establishStackSpace, _hle_init: _hle_init, _alist_repeat64: _alist_repeat64, _alist_process: _alist_process, _load_u8: _load_u8, _ADDMIXER: _ADDMIXER, _alist_process_audio_ge: _alist_process_audio_ge, _ENVMIXER_5: _ENVMIXER_5, _mix_sfx_with_main_subframes_v2: _mix_sfx_with_main_subframes_v2, _RESAMPLE_7: _RESAMPLE_7, _jpeg_decode_PS0: _jpeg_decode_PS0, _RESAMPLE_ZOH: _RESAMPLE_ZOH, _alist_envmix_ge: _alist_envmix_ge, _load_u16: _load_u16, _alist_process_nead_sfj: _alist_process_nead_sfj, _alist_process_nead_sf: _alist_process_nead_sf, _mix_sfx_with_main_subframes_v1: _mix_sfx_with_main_subframes_v1, _alist_resample_zoh: _alist_resample_zoh };
})
// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);
var real__alist_process_nead_oot = asm["_alist_process_nead_oot"]; asm["_alist_process_nead_oot"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_oot.apply(null, arguments);
};

var real__alist_process_nead_fz = asm["_alist_process_nead_fz"]; asm["_alist_process_nead_fz"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_fz.apply(null, arguments);
};

var real__alist_envmix_nead = asm["_alist_envmix_nead"]; asm["_alist_envmix_nead"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_envmix_nead.apply(null, arguments);
};

var real__alist_copy_every_other_sample = asm["_alist_copy_every_other_sample"]; asm["_alist_copy_every_other_sample"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_copy_every_other_sample.apply(null, arguments);
};

var real__RomClosed = asm["_RomClosed"]; asm["_RomClosed"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__RomClosed.apply(null, arguments);
};

var real__alist_process_nead_ys = asm["_alist_process_nead_ys"]; asm["_alist_process_nead_ys"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_ys.apply(null, arguments);
};

var real__alist_copy_blocks = asm["_alist_copy_blocks"]; asm["_alist_copy_blocks"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_copy_blocks.apply(null, arguments);
};

var real__alist_multQ44 = asm["_alist_multQ44"]; asm["_alist_multQ44"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_multQ44.apply(null, arguments);
};

var real__rdot = asm["_rdot"]; asm["_rdot"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__rdot.apply(null, arguments);
};

var real__alist_process_nead_mmb = asm["_alist_process_nead_mmb"]; asm["_alist_process_nead_mmb"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_mmb.apply(null, arguments);
};

var real__HleProcessRdpList = asm["_HleProcessRdpList"]; asm["_HleProcessRdpList"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__HleProcessRdpList.apply(null, arguments);
};

var real__alist_process_naudio_mp3 = asm["_alist_process_naudio_mp3"]; asm["_alist_process_naudio_mp3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_naudio_mp3.apply(null, arguments);
};

var real__InitiateRSP = asm["_InitiateRSP"]; asm["_InitiateRSP"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__InitiateRSP.apply(null, arguments);
};

var real__alist_get_address = asm["_alist_get_address"]; asm["_alist_get_address"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_get_address.apply(null, arguments);
};

var real__alist_process_audio_ge = asm["_alist_process_audio_ge"]; asm["_alist_process_audio_ge"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_audio_ge.apply(null, arguments);
};

var real__alist_adpcm = asm["_alist_adpcm"]; asm["_alist_adpcm"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_adpcm.apply(null, arguments);
};

var real__alist_resample = asm["_alist_resample"]; asm["_alist_resample"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_resample.apply(null, arguments);
};

var real__alist_process_nead_1080 = asm["_alist_process_nead_1080"]; asm["_alist_process_nead_1080"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_1080.apply(null, arguments);
};

var real__alist_add = asm["_alist_add"]; asm["_alist_add"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_add.apply(null, arguments);
};

var real__PluginStartup = asm["_PluginStartup"]; asm["_PluginStartup"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__PluginStartup.apply(null, arguments);
};

var real__alist_clear = asm["_alist_clear"]; asm["_alist_clear"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_clear.apply(null, arguments);
};

var real__load_u32 = asm["_load_u32"]; asm["_load_u32"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__load_u32.apply(null, arguments);
};

var real__alist_interleave = asm["_alist_interleave"]; asm["_alist_interleave"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_interleave.apply(null, arguments);
};

var real__DoRspCycles = asm["_DoRspCycles"]; asm["_DoRspCycles"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__DoRspCycles.apply(null, arguments);
};

var real__bitshift64Ashr = asm["_bitshift64Ashr"]; asm["_bitshift64Ashr"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Ashr.apply(null, arguments);
};

var real__cicx105_ucode = asm["_cicx105_ucode"]; asm["_cicx105_ucode"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__cicx105_ucode.apply(null, arguments);
};

var real__jpeg_decode_OB = asm["_jpeg_decode_OB"]; asm["_jpeg_decode_OB"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__jpeg_decode_OB.apply(null, arguments);
};

var real__alist_set_address = asm["_alist_set_address"]; asm["_alist_set_address"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_set_address.apply(null, arguments);
};

var real__PluginShutdown = asm["_PluginShutdown"]; asm["_PluginShutdown"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__PluginShutdown.apply(null, arguments);
};

var real__alist_polef = asm["_alist_polef"]; asm["_alist_polef"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_polef.apply(null, arguments);
};

var real__HleWarnMessage = asm["_HleWarnMessage"]; asm["_HleWarnMessage"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__HleWarnMessage.apply(null, arguments);
};

var real__alist_process_nead_wrjb = asm["_alist_process_nead_wrjb"]; asm["_alist_process_nead_wrjb"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_wrjb.apply(null, arguments);
};

var real__HleProcessDlistList = asm["_HleProcessDlistList"]; asm["_HleProcessDlistList"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__HleProcessDlistList.apply(null, arguments);
};

var real__alist_process_audio_bc = asm["_alist_process_audio_bc"]; asm["_alist_process_audio_bc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_audio_bc.apply(null, arguments);
};

var real__alist_process_nead_sf = asm["_alist_process_nead_sf"]; asm["_alist_process_nead_sf"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_sf.apply(null, arguments);
};

var real__alist_process_naudio_dk = asm["_alist_process_naudio_dk"]; asm["_alist_process_naudio_dk"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_naudio_dk.apply(null, arguments);
};

var real__HleShowCFB = asm["_HleShowCFB"]; asm["_HleShowCFB"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__HleShowCFB.apply(null, arguments);
};

var real__alist_process_naudio_cbfd = asm["_alist_process_naudio_cbfd"]; asm["_alist_process_naudio_cbfd"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_naudio_cbfd.apply(null, arguments);
};

var real__alist_process_nead_ac = asm["_alist_process_nead_ac"]; asm["_alist_process_nead_ac"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_ac.apply(null, arguments);
};

var real__store_u8 = asm["_store_u8"]; asm["_store_u8"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__store_u8.apply(null, arguments);
};

var real__alist_process_nead_sfj = asm["_alist_process_nead_sfj"]; asm["_alist_process_nead_sfj"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_sfj.apply(null, arguments);
};

var real__i64Add = asm["_i64Add"]; asm["_i64Add"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Add.apply(null, arguments);
};

var real__alist_mix = asm["_alist_mix"]; asm["_alist_mix"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_mix.apply(null, arguments);
};

var real__alist_save = asm["_alist_save"]; asm["_alist_save"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_save.apply(null, arguments);
};

var real__hle_execute = asm["_hle_execute"]; asm["_hle_execute"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__hle_execute.apply(null, arguments);
};

var real__alist_process_audio = asm["_alist_process_audio"]; asm["_alist_process_audio"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_audio.apply(null, arguments);
};

var real__HleErrorMessage = asm["_HleErrorMessage"]; asm["_HleErrorMessage"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__HleErrorMessage.apply(null, arguments);
};

var real__alist_load = asm["_alist_load"]; asm["_alist_load"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_load.apply(null, arguments);
};

var real__i64Subtract = asm["_i64Subtract"]; asm["_i64Subtract"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Subtract.apply(null, arguments);
};

var real__alist_envmix_ge = asm["_alist_envmix_ge"]; asm["_alist_envmix_ge"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_envmix_ge.apply(null, arguments);
};

var real__adpcm_compute_residuals = asm["_adpcm_compute_residuals"]; asm["_adpcm_compute_residuals"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__adpcm_compute_residuals.apply(null, arguments);
};

var real__alist_process_naudio = asm["_alist_process_naudio"]; asm["_alist_process_naudio"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_naudio.apply(null, arguments);
};

var real__store_u16 = asm["_store_u16"]; asm["_store_u16"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__store_u16.apply(null, arguments);
};

var real__alist_envmix_exp = asm["_alist_envmix_exp"]; asm["_alist_envmix_exp"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_envmix_exp.apply(null, arguments);
};

var real__musyx_v2_task = asm["_musyx_v2_task"]; asm["_musyx_v2_task"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__musyx_v2_task.apply(null, arguments);
};

var real__mp3_task = asm["_mp3_task"]; asm["_mp3_task"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__mp3_task.apply(null, arguments);
};

var real__store_u32 = asm["_store_u32"]; asm["_store_u32"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__store_u32.apply(null, arguments);
};

var real__alist_filter = asm["_alist_filter"]; asm["_alist_filter"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_filter.apply(null, arguments);
};

var real__alist_move = asm["_alist_move"]; asm["_alist_move"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_move.apply(null, arguments);
};

var real__alist_process_nead_mm = asm["_alist_process_nead_mm"]; asm["_alist_process_nead_mm"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_mm.apply(null, arguments);
};

var real__hle_init = asm["_hle_init"]; asm["_hle_init"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__hle_init.apply(null, arguments);
};

var real__alist_iirf = asm["_alist_iirf"]; asm["_alist_iirf"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_iirf.apply(null, arguments);
};

var real__alist_repeat64 = asm["_alist_repeat64"]; asm["_alist_repeat64"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_repeat64.apply(null, arguments);
};

var real__alist_process = asm["_alist_process"]; asm["_alist_process"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process.apply(null, arguments);
};

var real__load_u8 = asm["_load_u8"]; asm["_load_u8"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__load_u8.apply(null, arguments);
};

var real__alist_process_nead_mk = asm["_alist_process_nead_mk"]; asm["_alist_process_nead_mk"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_nead_mk.apply(null, arguments);
};

var real__HleCheckInterrupts = asm["_HleCheckInterrupts"]; asm["_HleCheckInterrupts"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__HleCheckInterrupts.apply(null, arguments);
};

var real__HleVerboseMessage = asm["_HleVerboseMessage"]; asm["_HleVerboseMessage"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__HleVerboseMessage.apply(null, arguments);
};

var real__alist_envmix_lin = asm["_alist_envmix_lin"]; asm["_alist_envmix_lin"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_envmix_lin.apply(null, arguments);
};

var real__musyx_v1_task = asm["_musyx_v1_task"]; asm["_musyx_v1_task"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__musyx_v1_task.apply(null, arguments);
};

var real__jpeg_decode_PS0 = asm["_jpeg_decode_PS0"]; asm["_jpeg_decode_PS0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__jpeg_decode_PS0.apply(null, arguments);
};

var real__PluginGetVersion = asm["_PluginGetVersion"]; asm["_PluginGetVersion"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__PluginGetVersion.apply(null, arguments);
};

var real__alist_process_naudio_bk = asm["_alist_process_naudio_bk"]; asm["_alist_process_naudio_bk"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_process_naudio_bk.apply(null, arguments);
};

var real__load_u16 = asm["_load_u16"]; asm["_load_u16"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__load_u16.apply(null, arguments);
};

var real__HleProcessAlistList = asm["_HleProcessAlistList"]; asm["_HleProcessAlistList"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__HleProcessAlistList.apply(null, arguments);
};

var real__jpeg_decode_PS = asm["_jpeg_decode_PS"]; asm["_jpeg_decode_PS"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__jpeg_decode_PS.apply(null, arguments);
};

var real__alist_resample_zoh = asm["_alist_resample_zoh"]; asm["_alist_resample_zoh"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__alist_resample_zoh.apply(null, arguments);
};
var _alist_process_nead_oot = Module["_alist_process_nead_oot"] = asm["_alist_process_nead_oot"];
var _alist_process_nead_fz = Module["_alist_process_nead_fz"] = asm["_alist_process_nead_fz"];
var _alist_envmix_nead = Module["_alist_envmix_nead"] = asm["_alist_envmix_nead"];
var _alist_copy_every_other_sample = Module["_alist_copy_every_other_sample"] = asm["_alist_copy_every_other_sample"];
var _RomClosed = Module["_RomClosed"] = asm["_RomClosed"];
var _alist_process_nead_ys = Module["_alist_process_nead_ys"] = asm["_alist_process_nead_ys"];
var _alist_copy_blocks = Module["_alist_copy_blocks"] = asm["_alist_copy_blocks"];
var _alist_multQ44 = Module["_alist_multQ44"] = asm["_alist_multQ44"];
var _rdot = Module["_rdot"] = asm["_rdot"];
var _alist_process_nead_mmb = Module["_alist_process_nead_mmb"] = asm["_alist_process_nead_mmb"];
var _HleProcessRdpList = Module["_HleProcessRdpList"] = asm["_HleProcessRdpList"];
var _alist_process_naudio_mp3 = Module["_alist_process_naudio_mp3"] = asm["_alist_process_naudio_mp3"];
var _InitiateRSP = Module["_InitiateRSP"] = asm["_InitiateRSP"];
var _alist_get_address = Module["_alist_get_address"] = asm["_alist_get_address"];
var _alist_process_audio_ge = Module["_alist_process_audio_ge"] = asm["_alist_process_audio_ge"];
var _alist_adpcm = Module["_alist_adpcm"] = asm["_alist_adpcm"];
var _alist_resample = Module["_alist_resample"] = asm["_alist_resample"];
var _alist_process_nead_1080 = Module["_alist_process_nead_1080"] = asm["_alist_process_nead_1080"];
var _alist_add = Module["_alist_add"] = asm["_alist_add"];
var _PluginStartup = Module["_PluginStartup"] = asm["_PluginStartup"];
var _alist_clear = Module["_alist_clear"] = asm["_alist_clear"];
var _load_u32 = Module["_load_u32"] = asm["_load_u32"];
var _alist_interleave = Module["_alist_interleave"] = asm["_alist_interleave"];
var _DoRspCycles = Module["_DoRspCycles"] = asm["_DoRspCycles"];
var _bitshift64Ashr = Module["_bitshift64Ashr"] = asm["_bitshift64Ashr"];
var _cicx105_ucode = Module["_cicx105_ucode"] = asm["_cicx105_ucode"];
var _jpeg_decode_OB = Module["_jpeg_decode_OB"] = asm["_jpeg_decode_OB"];
var _alist_set_address = Module["_alist_set_address"] = asm["_alist_set_address"];
var _PluginShutdown = Module["_PluginShutdown"] = asm["_PluginShutdown"];
var _alist_polef = Module["_alist_polef"] = asm["_alist_polef"];
var _HleWarnMessage = Module["_HleWarnMessage"] = asm["_HleWarnMessage"];
var _alist_process_nead_wrjb = Module["_alist_process_nead_wrjb"] = asm["_alist_process_nead_wrjb"];
var _HleProcessDlistList = Module["_HleProcessDlistList"] = asm["_HleProcessDlistList"];
var _alist_process_audio_bc = Module["_alist_process_audio_bc"] = asm["_alist_process_audio_bc"];
var _alist_process_nead_sf = Module["_alist_process_nead_sf"] = asm["_alist_process_nead_sf"];
var _alist_process_naudio_dk = Module["_alist_process_naudio_dk"] = asm["_alist_process_naudio_dk"];
var _HleShowCFB = Module["_HleShowCFB"] = asm["_HleShowCFB"];
var _alist_process_naudio_cbfd = Module["_alist_process_naudio_cbfd"] = asm["_alist_process_naudio_cbfd"];
var _alist_process_nead_ac = Module["_alist_process_nead_ac"] = asm["_alist_process_nead_ac"];
var _store_u8 = Module["_store_u8"] = asm["_store_u8"];
var _alist_process_nead_sfj = Module["_alist_process_nead_sfj"] = asm["_alist_process_nead_sfj"];
var _i64Add = Module["_i64Add"] = asm["_i64Add"];
var _alist_mix = Module["_alist_mix"] = asm["_alist_mix"];
var _alist_save = Module["_alist_save"] = asm["_alist_save"];
var _hle_execute = Module["_hle_execute"] = asm["_hle_execute"];
var _alist_process_audio = Module["_alist_process_audio"] = asm["_alist_process_audio"];
var _HleErrorMessage = Module["_HleErrorMessage"] = asm["_HleErrorMessage"];
var _alist_load = Module["_alist_load"] = asm["_alist_load"];
var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];
var _alist_envmix_ge = Module["_alist_envmix_ge"] = asm["_alist_envmix_ge"];
var _adpcm_compute_residuals = Module["_adpcm_compute_residuals"] = asm["_adpcm_compute_residuals"];
var _alist_process_naudio = Module["_alist_process_naudio"] = asm["_alist_process_naudio"];
var _store_u16 = Module["_store_u16"] = asm["_store_u16"];
var _alist_envmix_exp = Module["_alist_envmix_exp"] = asm["_alist_envmix_exp"];
var _musyx_v2_task = Module["_musyx_v2_task"] = asm["_musyx_v2_task"];
var _mp3_task = Module["_mp3_task"] = asm["_mp3_task"];
var _store_u32 = Module["_store_u32"] = asm["_store_u32"];
var _alist_filter = Module["_alist_filter"] = asm["_alist_filter"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var _alist_move = Module["_alist_move"] = asm["_alist_move"];
var _alist_process_nead_mm = Module["_alist_process_nead_mm"] = asm["_alist_process_nead_mm"];
var _hle_init = Module["_hle_init"] = asm["_hle_init"];
var _alist_iirf = Module["_alist_iirf"] = asm["_alist_iirf"];
var _alist_repeat64 = Module["_alist_repeat64"] = asm["_alist_repeat64"];
var _alist_process = Module["_alist_process"] = asm["_alist_process"];
var _load_u8 = Module["_load_u8"] = asm["_load_u8"];
var _alist_process_nead_mk = Module["_alist_process_nead_mk"] = asm["_alist_process_nead_mk"];
var _HleCheckInterrupts = Module["_HleCheckInterrupts"] = asm["_HleCheckInterrupts"];
var _HleVerboseMessage = Module["_HleVerboseMessage"] = asm["_HleVerboseMessage"];
var _alist_envmix_lin = Module["_alist_envmix_lin"] = asm["_alist_envmix_lin"];
var _musyx_v1_task = Module["_musyx_v1_task"] = asm["_musyx_v1_task"];
var _jpeg_decode_PS0 = Module["_jpeg_decode_PS0"] = asm["_jpeg_decode_PS0"];
var _PluginGetVersion = Module["_PluginGetVersion"] = asm["_PluginGetVersion"];
var _alist_process_naudio_bk = Module["_alist_process_naudio_bk"] = asm["_alist_process_naudio_bk"];
var _load_u16 = Module["_load_u16"] = asm["_load_u16"];
var _HleProcessAlistList = Module["_HleProcessAlistList"] = asm["_HleProcessAlistList"];
var _jpeg_decode_PS = Module["_jpeg_decode_PS"] = asm["_jpeg_decode_PS"];
var _alist_resample_zoh = Module["_alist_resample_zoh"] = asm["_alist_resample_zoh"];

function b0(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_iiiii(0);return 0;
}
function b1(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_viiii(1);
}
function b2(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_vii(2);
}
function b3(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_viii(3);
}
function b4() {
 ; nullFunc_v(4);
}

var SIDE_FUNCTION_TABLE_iiiii = [b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,asm['_adpcm_predict_frame_4bits'],asm['_adpcm_predict_frame_2bits'],b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,b0,b0,b0];
var SIDE_FUNCTION_TABLE_viiii = [b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,asm['_EmitYUVTileLine'],asm['_EmitRGBATileLine'],b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1,b1,b1,b1,b1];
var SIDE_FUNCTION_TABLE_vii = [b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,asm['_RescaleYSubBlock'],asm['_RescaleUVSubBlock'],b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2];
var SIDE_FUNCTION_TABLE_viii = [b3,asm['_SPNOOP'],asm['_ADPCM'],asm['_CLEARBUFF'],asm['_ENVMIXER'],asm['_LOADBUFF'],asm['_RESAMPLE'],asm['_SAVEBUFF'],asm['_SEGMENT'],asm['_SETBUFF'],asm['_SETVOL'],asm['_DMEMMOVE'],asm['_LOADADPCM'],asm['_MIXER'],asm['_INTERLEAVE'],asm['_POLEF'],asm['_SETLOOP'],asm['_ENVMIXER_GE'],asm['_SPNOOP_17'],asm['_ADPCM_3'],asm['_CLEARBUFF_4'],asm['_ENVMIXER_5'],asm['_LOADBUFF_6'],asm['_RESAMPLE_7'],asm['_SAVEBUFF_8'],asm['_NAUDIO_0000'],asm['_SETVOL_9'],asm['_DMEMMOVE_10'],asm['_LOADADPCM_11']
,asm['_MIXER_12'],asm['_INTERLEAVE_13'],asm['_NAUDIO_02B0'],asm['_SETLOOP_14'],asm['_UNKNOWN'],asm['_MP3'],asm['_MP3ADDY'],asm['_NAUDIO_14'],asm['_SPNOOP_21'],asm['_ADPCM_19'],asm['_CLEARBUFF_20'],asm['_RESAMPLE_22'],asm['_SEGMENT_35'],asm['_SETBUFF_23'],asm['_DMEMMOVE_24'],asm['_LOADADPCM_25'],asm['_MIXER_26'],asm['_INTERLEAVE_MK'],asm['_POLEF_34'],asm['_SETLOOP_28'],asm['_NEAD_16'],asm['_INTERL'],asm['_ENVSETUP1_MK'],asm['_ENVMIXER_MK'],asm['_LOADBUFF_30'],asm['_SAVEBUFF_31'],asm['_ENVSETUP2'],asm['_ADDMIXER'],asm['_RESAMPLE_ZOH'],asm['_ENVSETUP1']
,asm['_ENVMIXER_29'],asm['_HILOGAIN'],asm['_UNKNOWN_18'],asm['_DUPLICATE'],asm['_INTERLEAVE_27'],asm['_FILTER'],b3,b3,b3,b3,b3,b3,asm['_mix_sfx_with_main_subframes_v1'],asm['_mix_sfx_with_main_subframes_v2'],b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3,b3,b3,b3,b3];
var SIDE_FUNCTION_TABLE_v = [b4];
Module["dynCall_iiiii"] = dynCall_iiiii
Module["dynCall_viiii"] = dynCall_viiii
Module["dynCall_vii"] = dynCall_vii
Module["dynCall_viii"] = dynCall_viii
Module["dynCall_v"] = dynCall_v
Module["FUNCTION_TABLE_iiiii"] = SIDE_FUNCTION_TABLE_iiiii;
Module["FUNCTION_TABLE_viiii"] = SIDE_FUNCTION_TABLE_viiii;
Module["FUNCTION_TABLE_vii"] = SIDE_FUNCTION_TABLE_vii;
Module["FUNCTION_TABLE_viii"] = SIDE_FUNCTION_TABLE_viii;
Module["FUNCTION_TABLE_v"] = SIDE_FUNCTION_TABLE_v;

var NAMED_GLOBALS = { "RESAMPLE_LUT": 2280 };
for (var named in NAMED_GLOBALS) {
  Module['_' + named] = gb + NAMED_GLOBALS[named];
}
Module['NAMED_GLOBALS'] = NAMED_GLOBALS;
;

Runtime.registerFunctions(['iiiii', 'viiii', 'vii', 'viii', 'v'], Module);



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




