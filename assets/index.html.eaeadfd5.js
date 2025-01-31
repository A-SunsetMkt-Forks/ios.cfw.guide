import{_ as u,r as n,o as d,c as p,e as s,a as e,b as o,d as l,w as t}from"./app.6c3de1a2.js";const b={},v={href:"https://tsssaver.1conan.com/v2/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://repo.1conan.com/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://www.apple.com/itunes/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://tsssaver.1conan.com/v2/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://itunes.apple.com/us/app/ax-cpu/id1048174418?mt=8",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/airsquared/blobsaver/releases",target:"_blank",rel:"noopener noreferrer"},f={href:"https://cadoth.net/~nyuszika7h/ios-builds/libimobiledevice-static-linux.tar.gz",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/verygenericname/SSHRD_Script",target:"_blank",rel:"noopener noreferrer"},k={href:"https://apt.arx8x.net",target:"_blank",rel:"noopener noreferrer"},q={href:"https://shsh.host",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/tihmstar/img4tool",target:"_blank",rel:"noopener noreferrer"};function O(A,i){const a=n("ExternalLinkIcon"),r=n("router-link");return d(),p("div",null,[i[56]||(i[56]=s('<p>Questo ti guider\xE0 nel processo di salvataggio dei blobs che sono necessari se si desidera effettuare il downgrade ad una versione di iOS o iPadOS pi\xF9 vecchia e non pi\xF9 firmata. Ci sono diversi metodi che puoi provare. Per i dispositivi unjailbroken, \xE8 necessario utilizzare il metodo &quot;Computer&quot;.</p><h2 id="salvare-i-blobs-con-shshd" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-con-shshd" aria-hidden="true">#</a> Salvare i blobs con shshd</h2><p>shshd \xE8 un tweak utilizzato per il salvataggio automatico dei blobs. Una volta che l&#39;hai installato, non dovrai preoccuparti di salvare manualmente i blobs in quanto gestisce tutto in background. Devi essere in jailbroken per usare shshd. Se non sei jailbroken, segui <a href="#saving-blobs-with-tss-saver-website">Salvare i blobs con il sito web di TSS Saver</a>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>shshd \xE8 compatibile solo con i jailbreak che si basano su Procursus, come Taurine, Odyssey, Chimera e Odysseyra1n. Se stai usando unc0ver o checkra1n, segui <a href="#saving-blobs-with-tss-saver-app">Salvare i blobs con l&#39;App di TSS Saver</a>.</p></div><ol><li>Apri il gestore dei pacchetti</li><li>Cerca il pacchetto <code>shshd</code></li><li>Scarica e installa il pacchetto</li><li>Premi &quot;Fatto&quot; quando viene richiesto</li></ol>',5)),e("p",null,[i[1]||(i[1]=o("I blobs verranno salvati in automatico quando installi shshd, ogni volta che si ri-esegue il jailbreak, e ogni settimana. I blobs sono disponibili sul sito web ")),e("a",v,[i[0]||(i[0]=o("TSS saver")),l(a)]),i[2]||(i[2]=o('. Per recuperarli, vai su "retrieve" e inserisci il tuo ECID.'))]),i[57]||(i[57]=s('<h3 id="eseguire-shshd-manualmente" tabindex="-1"><a class="header-anchor" href="#eseguire-shshd-manualmente" aria-hidden="true">#</a> Eseguire shshd manualmente</h3><p>Non dovresti aver bisogno di eseguire shshd manualmente, ma pu\xF2 essere eseguito attraverso un terminale.</p><ol><li>Fai SSH nel tuo dispositivo o scarica NewTerm 2</li><li>Digita <code>sudo /usr/sbin/shshd</code> nel terminale <ul><li>Se richiesto per una password, inserisci la password di root (quella predefinita \xE8 impostata su <code>alpine</code>)</li></ul></li></ol><h2 id="salvare-i-blobs-con-l-app-di-tss-saver" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-con-l-app-di-tss-saver" aria-hidden="true">#</a> Salvare i blobs con l&#39;App di TSS Saver</h2><p>L&#39;app TSS Saver pu\xF2 essere installata su dispositivi jailbroken e consente di salvare facilmente i tuoi blobs solamente con un clic. Se non sei jailbroken, segui <a href="#saving-blobs-with-tss-saver-website">Salvare i blobs con il sito web di TSS Saver</a>.</p>',5)),e("ol",null,[e("li",null,[i[5]||(i[5]=o("Aggiungi ")),e("a",m,[i[3]||(i[3]=o("repo.1conan.com")),l(a)]),i[6]||(i[6]=o(" alle sorgenti nel tuo ")),l(r,{to:"/it_IT/package-managers"},{default:t(()=>i[4]||(i[4]=[o("gestore di pacchetti preferito")])),_:1})]),i[7]||(i[7]=e("li",null,[o("Scarica e installa TSS Saver "),e("ul",null,[e("li",null,[o("Se stai usando unc0ver su iOS 14, scarica e installa anche "),e("code",null,"libkrw")]),e("li",null,[o("Se stai usando Taurine su iOS 14, scarica e installa "),e("code",null,"libkernrw")])])],-1)),i[8]||(i[8]=e("li",null,'Premi "Save Blobs"',-1)),i[9]||(i[9]=e("li",null,'Una volta ricevuto il messaggio di conferma, clicca "Open"',-1))]),i[58]||(i[58]=s('<h2 id="salvare-i-blobs-con-il-sito-web-di-tss-saver" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-con-il-sito-web-di-tss-saver" aria-hidden="true">#</a> Salvare i blobs con il sito web di TSS Saver</h2><p>Il sito web di TSS Saver consente di salvare i blobs del dispositivo inserendo alcune informazioni specifiche del dispositivo. Una volta salvati, \xE8 quindi possibile accedere ai blobs inserendo queste informazioni di nuovo.</p><p>Gli utenti con un dispositivo A12+ devono essere jailbroken per poter utilizzare il sito web di TSS Saver, visto che \xE8 un requisito per impostare i valori di ApNoncs e Generator Se non sei jailbroken, segui <a href="#saving-blobs-with-blobsaver">Salvare i blobs con blobsaver</a></p><h3 id="ottenere-generatore-e-apnonce-solo-a12-jailbroken" tabindex="-1"><a class="header-anchor" href="#ottenere-generatore-e-apnonce-solo-a12-jailbroken" aria-hidden="true">#</a> Ottenere Generatore e ApNonce (solo A12+ Jailbroken)</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se stai usando unc0ver o Taurine su iOS 14, installa rispettivamente libkrw o libkernrw.</p></div><ol><li>Apri un&#39;app Terminale ed esegui <code>sudo dimentio &gt; dimentio.txt</code><ul><li>In alternativa, puoi ottenere il tuo Generatore e ApNonce dalla sezione Generator nell&#39;App di TSS Saver</li></ul></li><li>Vai a /var/mobile su Filza e apri dimentio.txt</li><li>Copiare il numero 0x dopo <code>Current nonce is</code> nella parte inferiore del file di testo cos\xEC come il numero che viene dopo <code>entangled nonce:</code>. Il numero 0x \xE8 il tuo Generatore, e il numero del nonce entangled \xE8 il tuo ApNonce. Tienili al sicuro da qualche parte, ne avrai bisogno pi\xF9 tardi</li><li>Segui il resto di questa guida</li></ol><h3 id="salvare-i-blobs-tutti-i-dispositivi" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-tutti-i-dispositivi" aria-hidden="true">#</a> Salvare i blobs (Tutti i Dispositivi)</h3>',7)),e("ol",null,[i[21]||(i[21]=e("li",null,"Collega il tuo dispositivo iOS al tuo Mac o PC",-1)),e("li",null,[i[13]||(i[13]=o("Apri iTunes o Finder ")),e("ul",null,[e("li",null,[i[11]||(i[11]=o("Gli utenti Windows devono scaricare la versione ")),e("a",c,[i[10]||(i[10]=o("normale")),l(a)]),i[12]||(i[12]=o(", NON la versione del Windows Store"))])])]),i[22]||(i[22]=e("li",null,"Vai alla pagina di riepilogo del dispositivo",-1)),i[23]||(i[23]=e("li",null,[o("Fai clic due volte sul campo Numero seriale "),e("ul",null,[e("li",null,"Esso dovrebbe cambiare per mostrare il tuo numero ECID")])],-1)),i[24]||(i[24]=e("li",null,"Appuntati l'ECID da qualche parte in modo da poterlo leggere pi\xF9 tardi",-1)),e("li",null,[i[15]||(i[15]=o("Apri il sito web ")),e("a",g,[i[14]||(i[14]=o("TSS Saver")),l(a)])]),i[25]||(i[25]=e("li",null,"Inserisci l'ECID del tuo dispositivo",-1)),e("li",null,[i[20]||(i[20]=o("Seleziona il tuo dispositivo ")),e("ul",null,[e("li",null,[i[17]||(i[17]=o("Gli utenti con iPhone 6S, 6S Plus e iPhone SE avranno bisogno di ottenere la loro board configuration tramite ")),e("a",S,[i[16]||(i[16]=o("AX-CPU")),l(a)]),i[18]||(i[18]=o(" sull'App Store"))]),i[19]||(i[19]=e("li",null,"Gli utenti con A12+ dovranno inserire ApNonce e Generator",-1))])]),i[26]||(i[26]=e("li",null,"Fai clic su Submit",-1))]),i[59]||(i[59]=e("h2",{id:"salvare-i-blobs-con-blobsaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#salvare-i-blobs-con-blobsaver","aria-hidden":"true"},"#"),o(" Salvare i blobs con blobsaver")],-1)),i[60]||(i[60]=e("p",null,"blobsaver \xE8 un programma per PC multipiattaforma, compatibile con Windows, macOS e Linux, che ti permette di salvare facilmente i tuoi blobs su qualsiasi dispositivo, jailbroken o meno. Non \xE8 conveniente come le altre opzioni, ma funziona con la maggior parte dei dispositivi.",-1)),i[61]||(i[61]=e("h3",{id:"blobsaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blobsaver","aria-hidden":"true"},"#"),o(" blobsaver")],-1)),e("ol",null,[e("li",null,[i[28]||(i[28]=o("Scarica, installa e avvia l'ultima versione di ")),e("a",h,[i[27]||(i[27]=o("blobsaver")),l(a)])]),i[29]||(i[29]=e("li",null,"Connetti il tuo dispositivo iOS al tuo computer e assicurati che sia sbloccato",-1)),i[30]||(i[30]=e("li",null,'Clicca sul primo pulsante "Read from device", che inserir\xE0 il tuo ECID e le informazioni del dispositivo nel programma',-1)),i[31]||(i[31]=e("li",null,"Se il tuo dispositivo iOS non \xE8 A12 o superiore, non \xE8 necessario ottenere un APNonce e si pu\xF2 saltare il passo successivo",-1))]),i[62]||(i[62]=s('<h3 id="ottenere-apnonce-e-generator-specifici-per-il-dispositivo" tabindex="-1"><a class="header-anchor" href="#ottenere-apnonce-e-generator-specifici-per-il-dispositivo" aria-hidden="true">#</a> Ottenere APNonce e generator specifici per il dispositivo</h3><p>Assicurati che il tuo dispositivo sia sbloccato e connesso al tuo computer durante questo processo.</p><ol><li>Clicca sul secondo pulsante &quot;Read from device&quot; accanto al campo APNonce</li><li>Se sei jailbroken o hai generatore/apnonce gi\xE0 impostati sul tuo dispositivo, seleziona &quot;Jailbroken&quot;. Altrimenti, seleziona &quot;Unjailbroken&quot;</li></ol><p>Il dispositivo si riavvier\xE0 in modalit\xE0 di recupero pi\xF9 volte. Quando si riavvia in modalit\xE0 normale, sblocca il dispositivo iOS.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Se rimani bloccato in modalit\xE0 di recupero, prova a utilizzare l&#39;opzione &quot;Exit Recovery Mode&quot; dal menu &quot;Help&quot; su blobsaver.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Questi valori possono essere riutilizzati in qualsiasi momento per salvare i blobs se jailbroken o meno.</p></div><h3 id="salvare-i-blobs" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs" aria-hidden="true">#</a> Salvare i Blobs</h3><ol><li>Una volta compilate tutte le informazioni, fai clic su &quot;Go&quot; per salvare i blobs</li><li>\xC8 inoltre possibile fare clic su &quot;Save device&quot; per salvare le informazioni del dispositivo corrente, in modo da poter salvare i blobs per esso in modo pi\xF9 veloce</li></ol><h3 id="salvare-i-blobs-automaticamente-in-background" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-automaticamente-in-background" aria-hidden="true">#</a> Salvare i blobs automaticamente in background</h3><ol><li>\xC8 possibile impostare blobsaver per salvare i blobs automaticamente in background, senza dover aprire manualmente blobsaver</li><li>Una volta che si dispone di uno o pi\xF9 dispositivi salvati, fare clic su &quot;Background Settings&quot; per iniziare a configurarlo</li><li>Seleziona per quali dispositivi si desidera salvare automaticamente i blobs in background, e blobsaver li tester\xE0 per assicurarsi che le informazioni del dispositivo siano corrette</li><li>\xC8 successivamente possibile modificare la frequenza con la quale i blobs vengono salvati, utilizzando il pulsante &quot;Change Frequency&quot;</li><li>Una volta pronto, fai clic su &quot;Start Background&quot; per attivarlo</li><li>Ora puoi chiudere blobsaver e i blobs saranno salvati automaticamente in background durante l&#39;intervallo impostato</li></ol><h2 id="salvataggio-dei-blobs-onboard" tabindex="-1"><a class="header-anchor" href="#salvataggio-dei-blobs-onboard" aria-hidden="true">#</a> Salvataggio dei Blobs Onboard</h2><p>Il salvataggio dei Blobs Onboard \xE8 il processo di salvataggio la firma precedente dell&#39;ultimo aggiornamento che hai eseguito, e la conversione di essa in un blob utilizzabile. Dato che hai aggiornato mentre la versione era ancora firmata, puoi riutilizzare questi blobs, ed essi saranno ancora validi. Tuttavia, il tipo di blobs che verr\xE0 salvato dipender\xE0 da come si \xE8 aggiornato alla versione corrente.</p><h3 id="blobs-onboard-ota" tabindex="-1"><a class="header-anchor" href="#blobs-onboard-ota" aria-hidden="true">#</a> Blobs Onboard OTA</h3><p>Se hai aggiornato alla versione della quale vuoi salvare i Blobs Onboard utilizzando l&#39;app Impostazioni tramite aggiornamento over-the-air, allora i blobs saranno &quot;Blobs OTA&quot;. Questi blobs richiedono un <strong>exploit bootrom</strong> per essere utilizzati, e <strong>solo</strong> con l&#39;argomento <code>--use-pwndfu</code> su FutureRestore possono essere usati.</p><h3 id="blobs-onboard-itunes" tabindex="-1"><a class="header-anchor" href="#blobs-onboard-itunes" aria-hidden="true">#</a> Blobs Onboard iTunes</h3><p>Se hai aggiornato/ripristinato alla versione della quale vuoi salvare i Blobs Onboard utilizzando iTunes / Finder, allora i Blobs Onboard saranno salvati come blobs normali e sarete in grado di usarli. Tuttavia, differiscono a seconda che si sia ripristinato o aggiornato utilizzando un computer.</p><p>Se <em>hai ripristinato</em> usando un computer, i tuoi blobs saranno &quot;Erase&quot; blobs, e <strong>non</strong> potranno essere utilizzati con l&#39;opzione &quot;Update (-u)&quot; su FutureRestore.</p><p>Se hai <em>aggiornato</em> usando un computer, i tuoi blobs saranno &quot;Update&quot; blobs, e potranno essere utilizzati <strong>solo</strong> con l&#39;opzione &quot;Update (-u)&quot; su FutureRestore.</p><h3 id="salvare-i-blobs-onboard" tabindex="-1"><a class="header-anchor" href="#salvare-i-blobs-onboard" aria-hidden="true">#</a> Salvare i Blobs Onboard</h3><h3 id="utilizzando-deverser" tabindex="-1"><a class="header-anchor" href="#utilizzando-deverser" aria-hidden="true">#</a> Utilizzando Deverser</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Per utilizzare questo metodo \xE8 necessario un pc Linux o macOS e un dispositivo jailbroken con OpenSSH installato.</p><p>Su checkra1n/odysseyra1n, non hai bisogno di OpenSSH, ma \xE8 consigliato per i principianti.</p></div>',21)),e("ol",null,[i[38]||(i[38]=s("<li>Sul tuo pc Linux o macOS, esegui <code>git clone https://github.com/joshuah345/deverser.git &amp;&amp; cd deverser</code> per scaricare la sorgente di Deverser da GitHub <ul><li>Se hai gi\xE0 fatto ci\xF2, esegui <code>cd deverser</code> e <code>git pull</code> per ottenere le ultime modifiche</li></ul></li><li>Esegui <code>chmod +x deverser.sh</code> per consentirne l&#39;esecuzione, poi esegui <code>./deverser.sh</code> per avviare lo script</li><li>Rispondi <code>Yes</code> se viene chiesto di installare img4tool <ul><li>img4tool converte il file grezzo nel tuo blob SHSH utilizzabile</li></ul></li>",3)),e("li",null,[i[37]||(i[37]=o("Inserisci l'indirizzo IP del dispositivo ")),e("ul",null,[e("li",null,[i[35]||(i[35]=o("Su checkra1n/odysseyra1n, puoi eseguire iproxy se vuoi. ")),e("ul",null,[i[34]||(i[34]=e("li",null,[o("Su macOS, in un'altra finestra terminale, installa libimobiledevice con "),e("code",null,"brew install libimobiledevice libirecovery"),o(", poi esegui "),e("code",null,"sudo iproxy 22 44")],-1)),e("li",null,[i[33]||(i[33]=o("Su Linux, \xE8 consigliaro utilizzare OpenSSH sul dispositivo, ma se si desidera installare manualmente libimobiledevice, un link ai binary sono ")),e("a",f,[i[32]||(i[32]=o("qui")),l(a)])])])]),i[36]||(i[36]=e("li",null,"Per utilizzare OpenSSH, installalo sul tuo dispositivo e ottieni l'indirizzo IP del dispositivo dalle impostazioni Wi-Fi",-1))])]),i[39]||(i[39]=e("li",null,[o("Lo script ti chieder\xE0 di inserire due volte la password di root del tuo dispositivo "),e("ul",null,[e("li",null,[o("Se non sei sicuro, \xE8 probabilmente "),e("code",null,"alpine")])])],-1))]),i[63]||(i[63]=e("p",null,[o("Puoi trovare il tuo blob chiamato "),e("code",null,"(il TUO ECID).dumped.shsh"),o(" nella directory dove hai eseguito Deverser (di solito ~/deverser).")],-1)),i[64]||(i[64]=e("h3",{id:"utilizzando-una-ramdisk-ssh",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#utilizzando-una-ramdisk-ssh","aria-hidden":"true"},"#"),o(" Utilizzando una Ramdisk SSH")],-1)),i[65]||(i[65]=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"Per utilizzare questo metodo \xE8 necessario un pc Linux o macOS e un dispositivo vulnerabile a checkm8 su iOS 12+."),e("p",null,"Questo \xE8 un metodo pi\xF9 avanzato e non \xE8 comsigliato ai principianti.")],-1)),e("ol",null,[e("li",null,[i[41]||(i[41]=o("Vai su ")),e("a",z,[i[40]||(i[40]=o("questo link")),l(a)]),i[42]||(i[42]=o(" e imposta la ramdisk ")),i[43]||(i[43]=e("ul",null,[e("li",null,[o("Utilizzare "),e("code",null,"14.8"),o(" come versione ramdisk \xE8 consigliato, ma \xE8 possibile sceglierne una qualsiasi")])],-1))]),i[44]||(i[44]=e("li",null,[o("Esegui "),e("code",null,"./sshrd.sh dump-blobs")],-1)),i[45]||(i[45]=e("li",null,[o("Infine, esegui "),e("code",null,"./sshrd.sh ssh"),o(", poi esegui "),e("code",null,"reboot"),o(" nella sessione SSH. "),e("ul",null,[e("li",null,"Anche il riavvio forzato funzioner\xE0")])],-1))]),i[66]||(i[66]=e("p",null,[o("Puoi trovare il tuo blob chiamato "),e("code",null,"dumped.shsh"),o(" nella directory in cui hai clonato la repo (di solito ~/SSHRD_Script).")],-1)),i[67]||(i[67]=e("h3",{id:"utilizzando-system-info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#utilizzando-system-info","aria-hidden":"true"},"#"),o(" Utilizzando System Info")],-1)),i[68]||(i[68]=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"Questo metodo attualmente non funziona e non riuscirai a ottenere il tuo blob.")],-1)),e("ol",null,[e("li",null,[i[48]||(i[48]=o("Aggiungi la repo ")),e("a",k,[i[46]||(i[46]=o("https://apt.arx8x.net")),l(a)]),i[49]||(i[49]=o(" sul tuo ")),l(r,{to:"/package-managers"},{default:t(()=>i[47]||(i[47]=[o("gestore di pacchetti preferito")])),_:1})]),i[50]||(i[50]=s('<li>Scarica il Tweak <code>System Info</code> <img src="https://imgur.com/a/g8XZPrM" alt=""></li><li>Dopo aver scaricato System Info, apri le Impostazioni e vai su <code>Generali &gt; Info</code></li><li>Scorri verso il basso fino a <code>ECID</code></li><li>Esegui uno swipe verso sinistra su <code>ECID</code> e clicca <code>APTicket</code></li><li>Clicca su <code>Submit</code></li>',5))]),e("p",null,[i[52]||(i[52]=o('Apparir\xE0 un popup con il messaggio "APTicket Submitted" una volta terminato. Ora puoi accedere ai tuoi blobs su ')),e("a",q,[i[51]||(i[51]=o("shsh.host")),l(a)]),i[53]||(i[53]=o("."))]),i[69]||(i[69]=e("h3",{id:"verificare-il-tipo-di-blob",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#verificare-il-tipo-di-blob","aria-hidden":"true"},"#"),o(" Verificare il Tipo di Blob")],-1)),e("p",null,[i[55]||(i[55]=o("Per verificare i tipi di blobs che possiedi, usa ")),e("a",x,[i[54]||(i[54]=o("img4tool")),l(a)])]),i[70]||(i[70]=e("ol",null,[e("li",null,[o("Scarica gli zip IPSW e OTA da internet, estrai il file BuildManifest.plist da entrambi gli iPSW. "),e("ul",null,[e("li",null,"Google \xE8 tuo amico")])]),e("li",null,[o("Esegui "),e("code",null,"img4tool -v IPSW_BuildManifest.plist -s blob.shsh2 e img4tool -v OTA_BuildManifest.plist -s blob.shsh2")]),e("li",null,"Scorri attraverso l'output e controlla con quale BuildManifest img4tool ha riportato un successo.")],-1))])}var T=u(b,[["render",O],["__file","index.html.vue"]]);export{T as default};
