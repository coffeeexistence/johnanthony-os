var messages = [
  '[    6.438874] EXT4-fs (sdd6): mounted filesystem with ordered data mode. Opts: (null)',
  '[    7.424084] systemd[1]: Failed to insert module "kdbus": Function not implemented',
  '[    7.553566] systemd[1]: Detected architecture x86-64.',
  '[    7.553441] systemd[1]: systemd 225 running in system mode. (+PAM +AUDIT +SELINUX +IMA +APPARMOR +SMACK +SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT +GNUTLS +ACL +XZ -LZ4 +SECCOMP +BLKID -ELFUTILS +KMOD -IDN)     ',
  '[    7.561302] systemd[1]: Set hostname to <johnanthony-dev>.',
  '[    8.495905] systemd[1]: Set up automount Arbitrary Executable File Formats File System Automount Point.',
  '[    8.495939] systemd[1]: Started Forward Password Requests to Wall Directory Watch.',
  '[    8.495946] systemd[1]: Reached target Encrypted Volumes.',
  '[    8.495951] systemd[1]: Reached target User and Group Name Lookups.',
  '[    8.495960] systemd[1]: Reached target Remote File Systems (Pre).',
  '[    8.495977] systemd[1]: Created slice Root Slice.',
  '[    8.495997] systemd[1]: Listening on /dev/initctl Compatibility Named Pipe.',
  '[    8.496045] systemd[1]: Created slice User and Session Slice.',
  '[    8.496062] systemd[1]: Listening on fsck to fsckd communication Socket.',
  '[    8.496075] systemd[1]: Listening on udev Kernel Socket.',
  '[    8.496115] systemd[1]: Listening on Journal Audit Socket.',
  '[    8.496162] systemd[1]: Created slice System Slice.',
  '[    8.496172] systemd[1]: Reached target Slices.',
  '[    8.496218] systemd[1]: Created slice system-getty.slice.',
  '[    8.496263] systemd[1]: Created slice system-postgresql.slice.',
  '[    8.496535] systemd[1]: Starting Increase datagram queue length...',
  '[    8.496573] systemd[1]: Listening on Journal Socket.',
  '[    8.496935] systemd[1]: Starting Create list of required static device nodes for the current kernel...',
  '[    8.601862] systemd[1]: Starting Load Kernel Modules...',
  '[    8.602151] systemd[1]: Started Read required files in advance.',
  '[    8.602684] systemd[1]: Started Braille Device Support.',
  '[    8.603015] systemd[1]: Mounting POSIX Message Queue File System...',
  '[    8.603339] systemd[1]: Starting Setup Virtual Console...',
  '[    8.603630] systemd[1]: Starting Uncomplicated firewall...',
  '[    8.603954] systemd[1]: Mounting Huge Pages File System...',
  '[    8.764407] systemd[1]: Mounting Debug File System...',
  '[    8.764454] systemd[1]: Listening on udev Control Socket.',
  '[    8.764756] systemd[1]: Starting udev Coldplug all Devices...',
  '[    8.764805] systemd[1]: Listening on Journal Socket (/dev/log).',
  '[    8.765467] systemd[1]: Started Create list of required static device nodes for the current kernel.',
  '[    8.765593] systemd[1]: Started Setup Virtual Console.',
  '[    8.766948] systemd[1]: Starting Create Static Device Nodes in /dev...',
  '[    8.790601] systemd[1]: Started Uncomplicated firewall.',
  '[    8.872677] systemd[1]: Mounted Debug File System.',
  '[    8.872708] systemd[1]: Mounted Huge Pages File System.',
  '[    8.872735] systemd[1]: Mounted POSIX Message Queue File System.',
  '[    8.873143] systemd[1]: Started Increase datagram queue length.',
  '[    8.874857] systemd[1]: Started udev Coldplug all Devices.',
  '[    8.876937] systemd[1]: Listening on Syslog Socket.',
  '[    8.877298] systemd[1]: Starting Journal Service...',
  '[    9.376839] lp: driver loaded but no devices found',
  '[    9.383456] ppdev: user-space parallel port driver',
  '[    9.520629] systemd[1]: Started Journal Service.',
  '[   10.044493] EXT4-fs (sdd6): re-mounted. Opts: errors=remount-ro',
  '[   10.3316202] ACPI Warning: SystemIO range 0x0000000000000428-0x000000000000042F conflicts with OpRegion 0x0000000000000400-0x000000000000047F (\PMIO) (20150619/utaddress-254)',
  '[   10.316206] ACPI: If an ACPI driver is available for this device, you should use it instead of the native driver',
  '[   10.316209] ACPI Warning: SystemIO range 0x0000000000000540-0x000000000000054F conflicts with OpRegion 0x0000000000000500-0x0000000000000563 (\GPIO) (20150619/utaddress-254)',
  '[   10.316211] ACPI: If an ACPI driver is available for this device, you should use it instead of the native driver',
  '[   10.316212] ACPI Warning: SystemIO range 0x0000000000000530-0x000000000000053F conflicts with OpRegion 0x0000000000000500-0x0000000000000563 (\GPIO) (20150619/utaddress-254)',
  '[   10.316213] ACPI: If an ACPI driver is available for this device, you should use it instead of the native driver',
  '[   10.316214] ACPI Warning: SystemIO range 0x0000000000000500-0x000000000000052F conflicts with OpRegion 0x0000000000000500-0x000000000000051F (\LED_) (20150619/utaddress-254)',
  '[   10.316216] ACPI Warning: SystemIO range 0x0000000000000500-0x000000000000052F conflicts with OpRegion 0x0000000000000500-0x0000000000000563 (\GPIO) (20150619/utaddress-254)',
  '[   10.316217] ACPI: If an ACPI driver is available for this device, you should use it instead of the native driver',
  '[   10.316218] lpc_ich: Resource conflict(s) found affecting gpio_ich',
  '[   10.334215] EDAC MC: Ver: 3.0.0',
  '[   10.479456] systemd-journald[306]: Received request to flush runtime journal from PID 1',
  '[   10.592448] AVX version of gcm_enc/dec engaged.',
  '[   10.592451] AES CTR mode by8 optimization enabled',
  '[   10.698998] shpchp: Standard Hot Plug PCI Controller Driver version: 0.4',
  '[   11.231553] snd_hda_intel 0000:01:00.1: Handle VGA-switcheroo audio client',
  '[   11.231556] snd_hda_intel 0000:01:00.1: Force to non-snoop mode',
  '[   11.333721] input: HDA ATI HDMI HDMI/DP,pcm=3 as /devices/pci0000:00/0000:00:01.0/0000:01:00.1/sound/card1/input12',
  '[   11.333762] input: HDA ATI HDMI HDMI/DP,pcm=7 as /devices/pci0000:00/0000:00:01.0/0000:01:00.1/sound/card1/input13',
  '[   11.333797] input: HDA ATI HDMI HDMI/DP,pcm=8 as /devices/pci0000:00/0000:00:01.0/0000:01:00.1/sound/card1/input14',
  '[   11.333841] input: HDA ATI HDMI HDMI/DP,pcm=9 as /devices/pci0000:00/0000:00:01.0/0000:01:00.1/sound/card1/input15',
  '[   11.333877] input: HDA ATI HDMI HDMI/DP,pcm=10 as /devices/pci0000:00/0000:00:01.0/0000:01:00.1/sound/card1/input16',
  '[   11.333911] input: HDA ATI HDMI HDMI/DP,pcm=11 as /devices/pci0000:00/0000:00:01.0/0000:01:00.1/sound/card1/input17',
  '[   11.467936] snd_hda_codec_via hdaudioC0D2: autoconfig for VT2020: line_outs=3 (0x24/0x25/0x26/0x0/0x0) type:line',
  '[   11.467939] snd_hda_codec_via hdaudioC0D2:    speaker_outs=0 (0x0/0x0/0x0/0x0/0x0)',
  '[   11.467940] snd_hda_codec_via hdaudioC0D2:    hp_outs=1 (0x28/0x0/0x0/0x0/0x0)',
  '[   11.467941] snd_hda_codec_via hdaudioC0D2:    mono: mono_out=0x0',
  '[   11.467942] snd_hda_codec_via hdaudioC0D2:    dig-out=0x2d/0x2e',
  '[   11.467942] snd_hda_codec_via hdaudioC0D2:    inputs:',
  '[   11.467944] snd_hda_codec_via hdaudioC0D2:      Front Mic=0x29',
  '[   11.467945] snd_hda_codec_via hdaudioC0D2:      Rear Mic=0x2b',
  '[   11.467946] snd_hda_codec_via hdaudioC0D2:      Line=0x2a',
  '[   11.475624] input: HDA Intel PCH Front Mic as /devices/pci0000:00/0000:00:1b.0/sound/card0/input18',
  '[   11.475663] input: HDA Intel PCH Rear Mic as /devices/pci0000:00/0000:00:1b.0/sound/card0/input19',
  '[   11.475696] input: HDA Intel PCH Line as /devices/pci0000:00/0000:00:1b.0/sound/card0/input20',
  '[   11.475727] input: HDA Intel PCH Line Out Front as /devices/pci0000:00/0000:00:1b.0/sound/card0/input21',
  '[   11.475759] input: HDA Intel PCH Line Out Surround as /devices/pci0000:00/0000:00:1b.0/sound/card0/input22',
  '[   11.475789] input: HDA Intel PCH Line Out CLFE as /devices/pci0000:00/0000:00:1b.0/sound/card0/input23',
  '[   11.475820] input: HDA Intel PCH Front Headphone as /devices/pci0000:00/0000:00:1b.0/sound/card0/input24',
  '[   11.965324] Adding 7810044k swap on /dev/sdb6.  Priority:-1 extents:1 across:7810044k FS',
  '[   11.994192] Bluetooth: Core ver 2.20',
  '[   11.994201] NET: Registered protocol family 31',
  '[   11.994202] Bluetooth: HCI device and connection manager initialized',
  '[   11.994204] Bluetooth: HCI socket layer initialized',
  '[   11.994205] Bluetooth: L2CAP socket layer initialized',
  '[   11.994211] Bluetooth: SCO socket layer initialized',
  '[   12.004919] media: Linux media interface: v0.10',
  '[   12.073206] Linux video capture interface: v2.00',
  '[   12.130751] intel_rapl: Found RAPL domain package',
  '[   12.130753] intel_rapl: Found RAPL domain core',
  '[   12.179474] usbcore: registered new interface driver btusb',
  '[   12.356354] ath: EEPROM regdomain: 0x21',
  '[   12.356355] ath: EEPROM indicates we should expect a direct regpair map',
  '[   12.356356] ath: Country alpha2 being used: AU',
  '[   12.356357] ath: Regpair used: 0x21',
  '[   12.397217] ieee80211 phy0: Selected rate control algorithm "minstrel_ht"',
  '[   12.397414] ieee80211 phy0: Atheros AR9300 Rev:3 mem=0xffffc900021c0000, irq=17',
  '[   12.398328] ath9k 0000:02:00.0 wlp2s0: renamed from wlan0',
  '[   13.073003] cfg80211: World regulatory domain updated:',
  '[   13.073006] cfg80211:  DFS Master region: unset',
  '[   13.073007] cfg80211:   (start_freq - end_freq @ bandwidth), (max_antenna_gain, max_eirp), (dfs_cac_time)',
  '[   13.073008] cfg80211:   (2402000 KHz - 2472000 KHz @ 40000 KHz), (N/A, 2000 mBm), (N/A)',
  '[   13.073009] cfg80211:   (2457000 KHz - 2482000 KHz @ 40000 KHz), (N/A, 2000 mBm), (N/A)',
  '[   13.073010] cfg80211:   (2474000 KHz - 2494000 KHz @ 20000 KHz), (N/A, 2000 mBm), (N/A)',
  '[   13.073011] cfg80211:   (5170000 KHz - 5250000 KHz @ 80000 KHz, 160000 KHz AUTO), (N/A, 2000 mBm), (N/A)',
  '[   13.073012] cfg80211:   (5250000 KHz - 5330000 KHz @ 80000 KHz, 160000 KHz AUTO), (N/A, 2000 mBm), (0 s)',
  '[   13.073013] cfg80211:   (5490000 KHz - 5730000 KHz @ 160000 KHz), (N/A, 2000 mBm), (0 s)',
  '[   13.073014] cfg80211:   (5735000 KHz - 5835000 KHz @ 80000 KHz), (N/A, 2000 mBm), (N/A)',
  '[   13.073015] cfg80211:   (57240000 KHz - 63720000 KHz @ 2160000 KHz), (N/A, 0 mBm), (N/A)',
  '[   13.075598] cfg80211: Regulatory domain changed to country: AU',
  '[   13.075600] cfg80211:  DFS Master region: unset',
  '[   13.075601] cfg80211:   (start_freq - end_freq @ bandwidth), (max_antenna_gain, max_eirp), (dfs_cac_time)',
  '[   13.075602] cfg80211:   (2402000 KHz - 2482000 KHz @ 40000 KHz), (N/A, 2000 mBm), (N/A)',
  '[   13.075603] cfg80211:   (5170000 KHz - 5250000 KHz @ 80000 KHz, 160000 KHz AUTO), (N/A, 1700 mBm), (N/A)',
  '[   13.075604] cfg80211:   (5250000 KHz - 5330000 KHz @ 80000 KHz, 160000 KHz AUTO), (N/A, 2400 mBm), (0 s)',
  '[   13.075605] cfg80211:   (5490000 KHz - 5710000 KHz @ 160000 KHz), (N/A, 2400 mBm), (0 s)',
  '[   13.075606] cfg80211:   (5735000 KHz - 5835000 KHz @ 80000 KHz), (N/A, 3000 mBm), (N/A)',
  '[   13.525729] Adding 7835644k swap on /dev/sdd5.  Priority:-2 extents:1 across:7835644k FS',
  '[   13.652805] audit: type=1400 audit(1459139577.523:2): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/lightdm/lightdm-guest-session" pid=706 comm="apparmor_parser"',
  '[   13.652818] audit: type=1400 audit(1459139577.523:3): apparmor="STATUS" operation="profile_load" profile="unconfined" name="chromium" pid=706 comm="apparmor_parser"',
  '[   13.697703] audit: type=1400 audit(1459139577.571:4): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/sbin/dhclient" pid=706 comm="apparmor_parser"',
  '[   13.697716] audit: type=1400 audit(1459139577.571:5): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/NetworkManager/nm-dhcp-client.action" pid=706 comm="apparmor_parser"     ',
  '[   13.697719] audit: type=1400 audit(1459139577.571:6): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/NetworkManager/nm-dhcp-helper" pid=706 comm="apparmor_parser"',
  '[   13.697721] audit: type=1400 audit(1459139577.571:7): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/connman/scripts/dhclient-script" pid=706 comm="apparmor_parser"',
  '[   13.746515] audit: type=1400 audit(1459139577.615:8): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/bin/evince" pid=706 comm="apparmor_parser"',
  '[   13.746529] audit: type=1400 audit(1459139577.615:9): apparmor="STATUS" operation="profile_load" profile="unconfined" name="sanitized_helper" pid=706 comm="apparmor_parser"',
  '[   13.746532] audit: type=1400 audit(1459139577.615:10): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/bin/evince-previewer" pid=706 comm="apparmor_parser"',
  '[   13.746535] audit: type=1400 audit(1459139577.615:11): apparmor="STATUS" operation="profile_load" profile="unconfined" name="sanitized_helper" pid=706 comm="apparmor_parser"',
  '[   17.276440] usb 3-1.2: 3:1: cannot get freq at ep 0x82',
  '[   17.278297] usb 3-1.2: Warning! Unlikely big volume range (=7680), cval->res is probably wrong.',
  '[   17.278298] usb 3-1.2: [5] FU [Mic Capture Volume] ch = 1, val = 512/8192/1',
  '[   17.278484] uvcvideo: Found UVC 1.00 device HP Webcam 3100 (03f0:8e07)',
  '[   17.278499] usbcore: registered new interface driver snd-usb-audio',
  '[   17.281445] input: HP Webcam 3100 as /devices/pci0000:00/0000:00:1a.0/usb3/3-1/3-1.2/3-1.2:1.0/input/input25',
  '[   17.281512] usbcore: registered new interface driver uvcvideo',
  '[   17.281514] USB Video Class driver (1.1.1)',
  '[   18.081661] cgroup: new mount options do not match the existing superblock, will be ignored',
  '[   19.008926] Bluetooth: BNEP (Ethernet Emulation) ver 1.3',
  '[   19.008928] Bluetooth: BNEP filters: protocol multicast',
  '[   19.008931] Bluetooth: BNEP socket layer initialized',
  '[   20.851332] IPv6: ADDRCONF(NETDEV_UP): enp4s0: link is not ready',
  '[   20.851883] IPv6: ADDRCONF(NETDEV_UP): enp4s0: link is not ready',
  '[   20.854122] IPv6: ADDRCONF(NETDEV_UP): wlp2s0: link is not ready',
  '[   20.860302] IPv6: ADDRCONF(NETDEV_UP): wlp2s0: link is not ready',
  '[   21.249779] IPv6: ADDRCONF(NETDEV_UP): wlp2s0: link is not ready',
  '[   24.119992] wlp2s0: authenticate with 00:7f:28:e8:71:bc',
  '[   24.125808] wlp2s0: send auth to 00:7f:28:e8:71:bc (try 1/3)',
  '[   24.129894] wlp2s0: authenticated',
  '[   24.130954] wlp2s0: associate with 00:7f:28:e8:71:bc (try 1/3)',
  '[   24.134648] wlp2s0: RX AssocResp from 00:7f:28:e8:71:bc (capab=0x431 status=0 aid=3)',
  '[   24.134706] wlp2s0: associated',
  '[   24.134714] IPv6: ADDRCONF(NETDEV_CHANGE): wlp2s0: link becomes ready',
  '[   24.136581] cfg80211: Regulatory domain changed to country: US',
  '[   24.136583] cfg80211:  DFS Master region: FCC',
  '[   24.136584] cfg80211:   (start_freq - end_freq @ bandwidth), (max_antenna_gain, max_eirp), (dfs_cac_time)',
  '[   24.136585] cfg80211:   (2402000 KHz - 2472000 KHz @ 40000 KHz), (N/A, 3000 mBm), (N/A)',
  '[   24.136586] cfg80211:   (5170000 KHz - 5250000 KHz @ 80000 KHz, 160000 KHz AUTO), (N/A, 1700 mBm), (N/A)',
  '[   24.136587] cfg80211:   (5250000 KHz - 5330000 KHz @ 80000 KHz, 160000 KHz AUTO), (N/A, 2300 mBm), (0 s)',
  '[   24.136588] cfg80211:   (5735000 KHz - 5835000 KHz @ 80000 KHz), (N/A, 3000 mBm), (N/A)',
  '[   24.136589] cfg80211:   (57240000 KHz - 63720000 KHz @ 2160000 KHz), (N/A, 4000 mBm), (N/A)',
  '[   26.517379] vboxdrv: module verification failed: signature and/or required key missing - tainting kernel',
  '[   26.519829] vboxdrv: Found 8 processor cores',
  '[   26.536152] vboxdrv: TSC mode is Invariant, tentative frequency 3403350183 Hz',
  '[   26.536153] vboxdrv: Successfully loaded version 5.0.14_Ubuntu (interface 0x00240000)'
];


var preSplashController = function($timeout, $rootScope, $window) {
  var preSplash = this;

  $rootScope.$emit('changeBodyBackground', '#000000');

  preSplash.messagesArray = messages;
  preSplash.messageIndex = 0;


  preSplash.nextMessage = function() {
    if(preSplash.messageIndex < preSplash.messagesArray.length-1){
      preSplash.messageIndex++;
      $timeout(preSplash.nextMessage, preSplash.logInterval());
    } else {
      console.log('finshed');
      $rootScope.$emit('nextStage');
    }
  };

  var window = $window;

  preSplash.logInterval = function(){
    return Math.floor(Math.random()*85);
  };

  preSplash.active = function(index){
    return index < preSplash.messageIndex && index > (preSplash.messageIndex-preSplash.availableSpaces());
  };

  preSplash.availableSpaces = function(){
    var bootMessages = document.querySelectorAll(".boot-message");
    if(bootMessages.length > 0){
      return Math.floor(window.innerHeight/bootMessages[0].clientHeight);
    } else { return 10; }
  }


  $timeout(preSplash.nextMessage, 200);

  //setTimeout(myFunction, 3000)

}


function preSplash() {
	return {
		restrict: 'E',
		template: [
      '<div id="pre-splash">',
      '<div ng-repeat="message in preSplash.messagesArray" ng-if="preSplash.active($index);" class="boot-message">{{message}}</div>',
      '</div>'
    ].join(''),
		controller: ['$timeout', '$rootScope', '$window', preSplashController],
		controllerAs: 'preSplash',
		link: function(){

		}
	};
}

angular
	.module('app')
	.directive('preSplash', preSplash);
