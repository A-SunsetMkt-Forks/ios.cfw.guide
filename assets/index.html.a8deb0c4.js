import{_ as p}from"./sideloadly_win.6263388d.js";import{_ as u,r as l,o as h,c,a as o,b as t,d as i,e as s,w as a}from"./app.6c3de1a2.js";const m={},f={href:"https://web.archive.org/web/20240121141909/http://wall.supplies/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://web.archive.org/web/20240121141903/https://wall.supplies/OLD%20iPhone%20HACKED.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/LukeZGD/ohd/releases",target:"_blank",rel:"noopener noreferrer"},y={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.apple.com/itunes/download/win64",target:"_blank",rel:"noopener noreferrer"},v={class:"custom-container tip"};function k(D,e){const n=l("ExternalLinkIcon"),d=l("RouterLink"),r=l("router-link");return h(),c("div",null,[e[21]||(e[21]=o("p",null,"HomeDepot is capable of jailbreaking every 32-bit iOS device on firmware version 9.1 up to 9.3.4, as well as A5(X) devices on 8.0 to 8.4.1.",-1)),e[22]||(e[22]=o("p",null,"Note that the HomeDepot jailbreak is not \u201Cpersistent\u201D (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.",-1)),e[23]||(e[23]=o("p",null,"Due to how custom applications are installed to the device, in most cases you will need to reinstall the HomeDepot jailbreak application to your device every 7 days from your computer.",-1)),e[24]||(e[24]=o("p",null,"We will use the Sideloadly tool to install the HomeDepot jailbreak application to your iOS device for use in the next step.",-1)),e[25]||(e[25]=o("h2",{id:"downloads",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),t(" Downloads")],-1)),e[26]||(e[26]=o("div",{class:"custom-container tip",id:"ifJailbreaksAppSigned"},[o("p",null,[t(" HomeDepot is currently signed at "),o("a",{href:"https://jailbreaks.app/legacy.html",target:"_blank"},"jailbreaks.app"),t(" for easy installation without a computer. ")])],-1)),o("ul",null,[o("li",null,[e[6]||(e[6]=t("The latest version of HomeDepot for your iOS version: ")),o("ul",null,[o("li",null,[e[1]||(e[1]=t("Home Depot for ")),o("a",f,[e[0]||(e[0]=t("iOS 9.1-9.3.4")),i(n)])]),o("li",null,[e[5]||(e[5]=t("Home Depot for ")),o("a",g,[e[2]||(e[2]=t("iOS 8.0-8.4.1")),i(n)]),o("ul",null,[o("li",null,[e[4]||(e[4]=t("You also need to get the latest version of the ")),o("a",w,[e[3]||(e[3]=t("ohd patcher")),i(n)])])])])])]),o("li",null,[e[8]||(e[8]=t("The latest version of ")),o("a",y,[e[7]||(e[7]=t("Sideloadly")),i(n)])]),o("li",null,[e[10]||(e[10]=t("The latest version of ")),o("a",b,[e[9]||(e[9]=t("iTunes")),i(n)]),e[11]||(e[11]=t(" if on Windows."))])]),e[27]||(e[27]=s('<p><img src="'+p+'" alt="A screenshot of the Sideloadly application (Windows)"></p><h2 id="patching-home-depot" tabindex="-1"><a class="header-anchor" href="#patching-home-depot" aria-hidden="true">#</a> Patching Home Depot</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is only needed on iOS 8.0 to 8.4.1, it is not needed for iOS 9.1 to 9.3.4.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><h3 id="macos-and-linux" tabindex="-1"><a class="header-anchor" href="#macos-and-linux" aria-hidden="true">#</a> macOS and Linux</h3><ol><li>Open your Terminal application</li><li>Change directory to the folder where you saved the script and h3lix.ipa files <ul><li>If you saved them to Downloads, this would be <code>cd ~/Downloads</code></li></ul></li><li>Type <code>./patch.sh</code> in the terminal</li><li>Drag and drop the MixtapePlayer <code>.ipa</code> file into the terminal</li><li>Press Enter</li></ol></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><ol><li>Drag the MixtapePlayer <code>.ipa</code> onto the patch.cmd file</li></ol></div><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the HomeDepot <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple Account</li><li>Enter in your password</li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple Account&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple Account&gt;&quot;</code></li></ol><p>The HomeDepot application can now be opened from home screen.</p><h2 id="running-homedepot" tabindex="-1"><a class="header-anchor" href="#running-homedepot" aria-hidden="true">#</a> Running HomeDepot</h2><ol><li>Open the HomeDepot application from your home screen</li><li>Tap <code>Prepare for Jailbreak</code> -&gt; <code>Accept</code> -&gt; <code>Dismiss</code> -&gt; <code>Proceed with Jailbreak</code> -&gt; <code>Begin Installation</code> -&gt; <code>Use Provided Offsets</code></li></ol><p>When jailbreaking for a second time, an option called &quot;Kickstart Jailbreak&quot; will replace &quot;Prepare for Jailbreak&quot;. Tap that instead.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If your device crashes or restarts unexpectedly and the jailbreak isn&#39;t installed, simply try running the exploit again until it does work.</p></div><h2 id="untethering" tabindex="-1"><a class="header-anchor" href="#untethering" aria-hidden="true">#</a> Untethering</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>These steps are only applicable for devices on 9.1 to 9.3.4 - A5(X) devices on 8.0 to 8.4.1 should skip this step.</p></div><p>This is an optional step which allows the jailbreak to run automatically when your device is booted. This means that you won&#39;t have to re-jailbreak through the HomeDepot app after your device is turned off.</p>',18)),o("p",null,[e[13]||(e[13]=t("You will have to use Cydia to install the untether. If you are unfamiliar with how Cydia works, please read ")),i(d,{to:"/installing-homedepot/using-cydia.html"},{default:a(()=>e[12]||(e[12]=[t("Using Cydia")])),_:1}),e[14]||(e[14]=t(" first, before returning to this page."))]),e[28]||(e[28]=s("<ol><li>Open the Cydia application</li><li>Check the &quot;Sources&quot; tab and ensure &quot;LukeZGD&#39;s Repo&quot; is added <ul><li>If you can&#39;t find it, tap <code>Edit</code> -&gt; <code>+</code> and enter <code>lukezgd.github.io/repo</code></li></ul></li><li>Open the &quot;Search&quot; tab and enter &quot;UntetherHomeDepot&quot;</li><li>Tap on the tweak and then tap &quot;Install&quot; in the top right-hand corner of the screen</li><li>Confirm the installation</li></ol><p>Once finished, you will be prompted to reboot your device.</p>",2)),o("p",null,[e[16]||(e[16]=t("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install ")),i(r,{to:"/faq/#what-are-tweaks"},{default:a(()=>e[15]||(e[15]=[t("tweaks")])),_:1}),e[17]||(e[17]=t(", themes and more."))]),o("div",v,[e[20]||(e[20]=o("p",{class:"custom-container-title"},"TIP",-1)),o("p",null,[e[19]||(e[19]=t("If you wish to use a more modern package manager, continue to ")),i(r,{to:"/installing-zebra"},{default:a(()=>e[18]||(e[18]=[t("Installing Zebra")])),_:1})])])])}var S=u(m,[["render",k],["__file","index.html.vue"]]);export{S as default};
