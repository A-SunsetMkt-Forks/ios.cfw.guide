import{_ as u}from"./checkra1n.ace0089d.js";import{_ as d,r as s,o as p,c,a as t,b as o,d as n,e as l,w as r}from"./app.6c3de1a2.js";const h={},y={href:"https://checkra.in",target:"_blank",rel:"noopener noreferrer"},m={href:"https://checkra.in/releases/0.12.2-beta#all-downloads",target:"_blank",rel:"noopener noreferrer"},f={class:"custom-container tip"},g={href:"https://www.icloud.com/shortcuts/8d4e206d568d4aadb624b2a6191a3771",target:"_blank",rel:"noopener noreferrer"};function b(w,e){const i=s("ExternalLinkIcon"),a=s("router-link");return p(),c("div",null,[e[19]||(e[19]=t("h2",{id:"downloads",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),o(" Downloads")],-1)),t("ul",null,[t("li",null,[e[3]||(e[3]=o("The latest release of ")),t("a",y,[e[0]||(e[0]=o("checkra1n")),n(i)]),t("ul",null,[t("li",null,[e[2]||(e[2]=o("If you are on an A8X or A9X device, you should instead get the 0.12.2 release of ")),t("a",m,[e[1]||(e[1]=o("checkra1n")),n(i)])])])])]),e[20]||(e[20]=l('<p><img src="'+u+'" alt="A screenshot of the checkra1n application"></p><h2 id="installing-checkra1n" tabindex="-1"><a class="header-anchor" href="#installing-checkra1n" aria-hidden="true">#</a> Installing checkra1n</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you&#39;re using an Apple Silicon Mac and are attempting to jailbreak on A7 device or an A9X (not A9) to A10(X) device, you will be prompted during the process to unplug and replug the device and will need to do so.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode</p><p>If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.</p></div>',4)),t("ol",null,[e[10]||(e[10]=l("<li>Open checkra1n on your computer</li><li>Plug your iOS device into your computer <ul><li>If you&#39;re on an A11 device, you will need to head into <code>Options</code>, then enable the <code>Skip A11 BPR Check</code> option once it runs</li><li>If you&#39;re on iOS 14.6 or later, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li><li>If you&#39;re on an A8X or A9X device and are on iOS 14.4 to 14.4.2, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li></ul></li><li>Click <code>Start</code> -&gt; <code>Next</code> on checkra1n <ul><li>Your device will be put into recovery mode automatically</li></ul></li>",3)),t("li",null,[e[5]||(e[5]=o("You will now be presented with instructions in how to reboot your device into ")),n(a,{to:"/faq/#what-is-dfu-mode"},{default:r(()=>e[4]||(e[4]=[o("DFU mode")])),_:1}),e[6]||(e[6]=o(", click ")),e[7]||(e[7]=t("code",null,"Start",-1)),e[8]||(e[8]=o(" to begin ")),e[9]||(e[9]=t("ul",null,[t("li",null,"Follow the instructions until your device shows a black screen")],-1))]),e[11]||(e[11]=t("li",null,"After this, checkra1n should automatically install",-1))]),e[21]||(e[21]=l('<p>Your iOS device should now reboot.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>While you could, at this stage, install Cydia instead of continuing with the Odysseyra1n steps, we don&#39;t recommend it because of the fact that:</p><ul><li>People generally tend to have more stability when using Odysseyra1n instead of installing Cydia</li><li>Certain ease-of-use functionality (such as shshd, which automatically saves blobs for you when jailbroken) is not available</li><li>Some tweaks may require or be better tested with software that Odysseyra1n utilizes, rather than the software that is used when you choose to install Cydia</li></ul></div><p>To install Odysseyra1n, <u>do not</u> open the checkra1n app and install Cydia. Instead, follow the following instructions to install Sileo.</p><h2 id="the-odysseyra1n-script" tabindex="-1"><a class="header-anchor" href="#the-odysseyra1n-script" aria-hidden="true">#</a> The Odysseyra1n script</h2>',4)),t("div",f,[e[15]||(e[15]=t("p",{class:"custom-container-title"},"TIP",-1)),t("p",null,[e[13]||(e[13]=o("If you would prefer to do so, instead of running the script on your computer, you can run the Odysseyra1n script using the ")),t("a",g,[e[12]||(e[12]=o("shortcut")),n(i)]),e[14]||(e[14]=o(" by opening this page on your device and then clicking the shortcut hyperlink."))])]),e[22]||(e[22]=t("ol",null,[t("li",null,"Open the terminal app on your computer"),t("li",null,"Ensure that your computer is trusted by your device"),t("li",null,[o('Install "homebrew" by pasting and executing the following command: '),t("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"')]),t("li",null,[o('Install "iproxy" by pasting and executing the following command: '),t("code",null,"brew install libusbmuxd")]),t("li",null,[o("Install the Odysseyra1n script by pasting and executing the following command: "),t("code",null,'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coolstar/Odyssey-bootstrap/master/procursus-deploy-linux-macos.sh)"')])],-1)),t("p",null,[e[17]||(e[17]=o("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install ")),n(a,{to:"/faq/#what-are-tweaks"},{default:r(()=>e[16]||(e[16]=[o("tweaks")])),_:1}),e[18]||(e[18]=o(", themes, packages and more."))]),e[23]||(e[23]=l('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3))])}var S=d(h,[["render",b],["__file","index.html.vue"]]);export{S as default};
