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
  '[     NaN.NaN] systemd[1]: UNTANGLING MULTIDIMENSIONAL ASYNCHRONOUS SPAGHETTI.',
  '[     NaN.NaN] systemd[1]: TRANSCENDING REALITY.',
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
  '[   11.994205] (Happiness is attainable in this life).',
  '[   11.994211] (((CRUMCH)))',
  '[   12.004919] media: Linux media interface: v0.10',
  '[   12.073206] Linux video capture interface: v2.00',
  '[   12.130751] intel_rapl: Found RAPL domain package',
  '[   12.130753] intel_rapl: Found RAPL domain core',
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
    var value = Math.floor(Math.random()*125);
    if (value < 10) { return 500; }
    return value ;
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
