(function(){var loadHandler=window['sl_{9B7E1ACD-FE32-41D7-8304-031CE5D38424}'];loadHandler&&loadHandler(54, '<div id="spr0_937fc"><div id="spr1_937fc" class="kern slide"><img id="img1_937fc" src="data/img3.png" width="960px" height="540px" alt="" style="left:0px;top:0px;"/><a id="hl0_937fc" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(1, this);return false;" style="left:905.506px;top:222px;"><div id="svg3_937fc" style="left:0px;top:0px;"><svg width="55" height="40" viewBox="0 0 55 40"><path fill="#bbe0e3" fill-opacity="0" d="M0,0 h54.494 v40 h-54.494 Z"/></svg></div></a><div id="spr3_937fc" style="left:905.506px;top:222px;"><div style="width:0px;"><a id="hl1_937fc" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(1, this);return false;"><span id="txt0_937fc" style="left:9.6px;top:1.764px;">d</span></a></div></div><a id="hl2_937fc" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(326, this);return false;" style="left:905.506px;top:272.055px;"><div id="svg4_937fc" style="left:0px;top:0px;"><svg width="55" height="30" viewBox="0 0 55 30"><path fill="#bbe0e3" fill-opacity="0" d="M0,0 h54.494 v29.081 h-54.494 Z"/></svg></div></a><div id="spr4_937fc" style="left:905.506px;top:272.055px;"><div style="width:0px;"><a id="hl3_937fc" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(326, this);return false;"><span id="txt1_937fc" style="left:9.6px;top:2.776px;">d</span></a></div></div><div id="spr5_937fc" style="left:464px;top:504.919px;"><div style="width:0px;"><span id="txt2_937fc" class="nokern" data-width="300.722656" style="left:73.433px;top:4.798px;">PTXv2: Section 4, Module 1 - Caendra Inc. © 2020</span></div></div><div id="svg5_937fc" style="left:31.3px;top:501.094px;"><svg width="875" height="6" viewBox="-2.667 -1.333 875 6"><g fill="#c00000" stroke="none"><path stroke="#c00000" stroke-width="2.667" stroke-linecap="butt" transform="translate(-33.966309,-502.427063)" d="M33.966,503.76 H903.354"/></g></svg></div><a id="hl4_937fc" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(1, this);return false;" style="left:905.506px;top:222px;"><div id="svg8_937fc" style="left:0px;top:0px;"><svg width="55" height="40" viewBox="0 0 55 40"><path fill="#bbe0e3" fill-opacity="0" d="M0,0 h54.494 v40 h-54.494 Z"/></svg></div></a><div id="spr6_937fc" style="left:905.506px;top:222px;"><div style="width:0px;"><a id="hl5_937fc" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(1, this);return false;"><span id="txt3_937fc" style="left:9.6px;top:1.764px;">d</span></a></div></div><a id="hl6_937fc" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(326, this);return false;" style="left:905.506px;top:272.055px;"><div id="svg9_937fc" style="left:0px;top:0px;"><svg width="55" height="30" viewBox="0 0 55 30"><path fill="#bbe0e3" fill-opacity="0" d="M0,0 h54.494 v29.081 h-54.494 Z"/></svg></div></a><div id="spr7_937fc" style="left:905.506px;top:272.055px;"><div style="width:0px;"><a id="hl7_937fc" href="#" onclick="document.getElementById(\'coreSpr_588484\').getCore().processTriggerEffect(this);document.getElementById(\'coreSpr_588484\').getCore().gotoSlide(326, this);return false;"><span id="txt4_937fc" style="left:9.6px;top:2.776px;">d</span></a></div></div></div><div id="spr2_937fc" class="kern slide"><div id="spr8_937fc" style="left:457.32px;top:133.922px;"><div style="width:0px;"><span id="txt5_937fc" data-width="411.318359" style="left:9.6px;top:16.369px;">In this case, the bypass was simplified. The 32</span></div><div style="width:0px;"><span id="txt6_937fc" data-width="393.876953" style="left:9.6px;top:35.569px;">bits patch was removed and its only working</span></div><div style="width:0px;"><span id="txt7_937fc" data-width="370.390625" style="left:9.6px;top:54.769px;">against 64 bits. GetProcAddress was also</span></div><div style="width:0px;"><span id="txt8_937fc" data-width="243.544922" style="left:9.6px;top:73.969px;">removed from Win32 class.</span></div><div style="width:0px;"><span id="txt9_937fc" data-width="421.826172" style="left:9.6px;top:121.594px;">Once the IntPtr to amsi.dll is obtained in line 12,</span></div><div style="width:0px;"><span id="txt10_937fc" data-width="374.472656" style="left:9.6px;top:141.169px;">we add 0x2540 to it in line 14 to locate the</span></div><div style="width:0px;"><span id="txt11_937fc" data-width="228.525391" style="left:9.6px;top:160.369px;">AmsiScanBuffer Address.</span></div><div style="width:0px;"><span id="txt12_937fc" data-width="401.123047" style="left:9.6px;top:207.994px;">Having the AmsiScanBuffer address, the next</span></div><div style="width:0px;"><span id="txt13_937fc" data-width="367.119141" style="left:9.6px;top:227.569px;">step is to change memory permissions to</span></div><div style="width:0px;"><span id="txt14_937fc" data-width="406.582031" style="left:9.6px;top:246.769px;">PAGE_EXECUTE_READWRITE, apply the patch</span></div><div style="width:0px;"><span id="txt15_937fc" data-width="342.080078" style="left:9.6px;top:265.969px;">via Marshall.Copy and restore memory</span></div><div style="width:0px;"><span id="txt16_937fc" data-width="424.355469" style="left:9.6px;top:285.169px;">protections to PAGE_EXECUTE_READ (Lines 16-</span></div><div style="width:0px;"><span id="txt17_937fc" data-width="22.460938" style="left:9.6px;top:304.527px;">21</span></div><div style="width:0px;"><span id="txt18_937fc" data-width="12.216797" style="left:31.933px;top:304.527px;">).</span></div></div><div id="spr9_937fc" style="left:34.91px;top:6px;"><div style="width:0px;"><span id="txt19_937fc" data-width="160.160812" style="left:9.6px;top:27.438px;">1.2 AMSI</span></div></div><div id="spr10_937fc" style="left:832.34px;top:504.755px;"><div style="width:0px;"><span id="txt20_937fc" class="nokern" data-width="36.692707" style="left:9.6px;top:4.798px;">|  p.55</span></div></div><div id="spr11_937fc" style="left:30.75px;top:150.75px;"><img id="img0_937fc" src="data/img37.png" width="432.75" height="313.5" alt=""/></div></div></div>');})();