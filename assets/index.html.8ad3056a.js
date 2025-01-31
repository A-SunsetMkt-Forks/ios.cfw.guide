import{_ as u,r,o as d,c as p,e as l,a as i,b as a,d as o,w as s}from"./app.6c3de1a2.js";const c={},m={href:"https://github.com/palera1n/palen1x/releases",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},g={class:"custom-container tip"};function b(S,e){const n=r("ExternalLinkIcon"),t=r("router-link");return d(),p("div",null,[e[14]||(e[14]=l('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Se si sta cercando di utilizzare un software Virtual Machine di qualche tipo da Windows (es. Virtualbox, VMWare, Sottosistema Windows per Linux, ecc) non si avr\xE0 successo seguendo questa guida, e avrai bisogno di un supporto avviabile come una chiavetta USB e di seguire i passaggi seguenti.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.</p></div><p>palen1x \xE8 una distro Linux avviabile in live che consente di eseguire rapidamente palera1n su un dispositivo compatibile. palera1n \xE8 in grado di eseguire il jailbreak su dispositivi iOS da A8(X) ad A11 su iOS 15.0 o successivi</p><p>Sui dispositivi con A11, <strong>devi disabilitare il pin di sblocco</strong> e non sarai in grado di utilizzare il pin, o altre funzionalit\xE0 SEP, finch\xE9 non fai il boot allo stato di iOS stock. Le funzionalit\xE0 SEP comprendono funzioni come un codice di sblocco, Face ID/Touch ID e Apple Pay.</p><p>Inoltre, se il tuo \xE8 un dispostivo A11 con iOS 16 a cui \xE8 stato impostato un codice di sblocco precedentemente, dovrai <strong>cancellare il contenuto e le impostazioni</strong> per poter eseguire il jailbreak.</p><h2 id="requisiti" tabindex="-1"><a class="header-anchor" href="#requisiti" aria-hidden="true">#</a> Requisiti</h2>',6)),i("ul",null,[e[3]||(e[3]=i("li",null,[a("Unit\xE0 USB da 128MB o superiore "),i("ul",null,[i("li",null,"Se non hai un'unit\xE0 USB, ma hai un'altra forma di hardware rimovibile supportato (es. Un CD o DVD), \xE8 possibile utilizzarlo invece di un'unit\xE0 USB")])],-1)),i("li",null,[e[1]||(e[1]=a("L\u2019ultima versione di ")),i("a",m,[e[0]||(e[0]=a("palen1x")),o(n)])]),i("li",null,[i("a",v,[e[2]||(e[2]=a("Ventoy")),o(n)])])]),e[15]||(e[15]=l('<h2 id="installare-ventoy" tabindex="-1"><a class="header-anchor" href="#installare-ventoy" aria-hidden="true">#</a> Installare Ventoy</h2><ol><li>Scarica ed estrai il contenuto del file <code>Ventoy.zip</code></li><li>Inserisci l&#39;unit\xE0 USB se non l&#39;hai gi\xE0 fatto e apri il file <code>Ventoy2Disk.exe</code></li><li>Seleziona l&#39;unit\xE0 USB dalla quale vuoi avviare palen1x <ul><li>Questa unit\xE0 USB verr\xE0 completamente cancellata</li><li>Assicurati di eseguire il backup di tutti i dati importanti in anticipo</li></ul></li><li>Fai clic su <code>Install</code> e conferma di essere ok con il cancellare l&#39;unit\xE0 USB <ul><li>Non rimuovere l&#39;unit\xE0 USB fino a quando il processo non sar\xE0 completato</li></ul></li><li>Una volta installato, copia il file iso di palen1x che hai scaricato sul drive USB</li></ol><h2 id="avviare-palen1x" tabindex="-1"><a class="header-anchor" href="#avviare-palen1x" aria-hidden="true">#</a> Avviare palen1x</h2><ol><li>Riavvia il pc, vai nelle impostazioni del BIOS e disabilita il Secure Boot, quindi entra nel boot picker e seleziona l&#39;unit\xE0 USB da avviare <ul><li>Questo \xE8 diverso per ogni computer</li><li>Cerca il tuo PC o la marca della scheda madre per scoprire come entrare nelle impostazioni del BIOS se non sei sicuro</li></ul></li><li>Premi Invio una volta che visualizzi la schermata di Ventoy per avviare palen1x</li></ol><h2 id="eseguire-palera1n" tabindex="-1"><a class="header-anchor" href="#eseguire-palera1n" aria-hidden="true">#</a> Eseguire palera1n</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div>',6)),i("ol",null,[e[7]||(e[7]=i("li",null,[a("Once you have loaded palen1x, select "),i("code",null,"Shell")],-1)),e[8]||(e[8]=i("li",null,[a("Type "),i("code",null,"palera1n -e thid_should_crash=0")],-1)),i("li",null,[e[5]||(e[5]=a("Segui le istruzioni sullo schermo per entrare in ")),o(t,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>e[4]||(e[4]=[a("modalit\xE0 DFU")])),_:1}),e[6]||(e[6]=a("."))])]),e[16]||(e[16]=l('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Dispostitivi con A9(X) o precedenti hanno un problema in cui si bloccheranno a met\xE0 di questo processo in pongoOS. Per risolvere questo problema, dovrai fare quanto segue:</p><ol><li>Nella finestra del terminale, premere <code>Control</code> + <code>C</code> sulla tastiera</li><li>Rerun the command that you just ran</li></ol><p>You&#39;ll need to do this every time you rejailbreak your device as well.</p></div><p>Una volta che il dispositivo si avvia, aprire l&#39;app palera1n loader e toccare <code>Sileo</code>. Dopo un po &#39;di tempo, ti verr\xE0 chiesto di impostare un codice di accesso per utilizzare comandi da riga di comando, poi<code>Sileo</code> dovrebbe essere sulla schermata iniziale.</p>',2)),i("div",g,[e[12]||(e[12]=i("p",{class:"custom-container-title"},"TIP",-1)),e[13]||(e[13]=i("p",null,"Per rieseguire il jailbreak il tuo dispositivo, esegui semplicemente il comando che hai appena eseguito e poi ripeti qualsiasi altro passaggio applicabile.",-1)),i("p",null,[e[10]||(e[10]=a("Alternatively, if you are on 15.0 to 15.8.1, you can use ")),o(t,{to:"/installing-meowbrek2"},{default:s(()=>e[9]||(e[9]=[a("meowbrek2")])),_:1}),e[11]||(e[11]=a(" per rieseguire il jailbreak."))])])])}var f=u(c,[["render",b],["__file","index.html.vue"]]);export{f as default};
