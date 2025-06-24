(function (designSystem, adminjs, React$1, PropTypes) {
  'use strict';

  function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

  var React__default = /*#__PURE__*/_interopDefault(React$1);
  var PropTypes__default = /*#__PURE__*/_interopDefault(PropTypes);

  const Dashboard = () => {
    const [data, setData] = React$1.useState(null);
    const api = new adminjs.ApiClient();
    React$1.useEffect(() => {
      api.getDashboard().then(response => {
        setData(response.data);
      }).catch(error => {
        console.error("Dashboard API error:", error);
      });
    }, []);
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "grey",
      padding: "xl"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
      mb: "xl"
    }, "Welcome to the Admin Dashboard"));
  };

  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var dist$1 = {};

  var fileSelector = {};

  var file = {};

  (function (exports) {
  	Object.defineProperty(exports, "__esModule", { value: true });
  	exports.COMMON_MIME_TYPES = void 0;
  	exports.toFileWithPath = toFileWithPath;
  	exports.COMMON_MIME_TYPES = new Map([
  	    // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
  	    ['1km', 'application/vnd.1000minds.decision-model+xml'],
  	    ['3dml', 'text/vnd.in3d.3dml'],
  	    ['3ds', 'image/x-3ds'],
  	    ['3g2', 'video/3gpp2'],
  	    ['3gp', 'video/3gp'],
  	    ['3gpp', 'video/3gpp'],
  	    ['3mf', 'model/3mf'],
  	    ['7z', 'application/x-7z-compressed'],
  	    ['7zip', 'application/x-7z-compressed'],
  	    ['123', 'application/vnd.lotus-1-2-3'],
  	    ['aab', 'application/x-authorware-bin'],
  	    ['aac', 'audio/x-acc'],
  	    ['aam', 'application/x-authorware-map'],
  	    ['aas', 'application/x-authorware-seg'],
  	    ['abw', 'application/x-abiword'],
  	    ['ac', 'application/vnd.nokia.n-gage.ac+xml'],
  	    ['ac3', 'audio/ac3'],
  	    ['acc', 'application/vnd.americandynamics.acc'],
  	    ['ace', 'application/x-ace-compressed'],
  	    ['acu', 'application/vnd.acucobol'],
  	    ['acutc', 'application/vnd.acucorp'],
  	    ['adp', 'audio/adpcm'],
  	    ['aep', 'application/vnd.audiograph'],
  	    ['afm', 'application/x-font-type1'],
  	    ['afp', 'application/vnd.ibm.modcap'],
  	    ['ahead', 'application/vnd.ahead.space'],
  	    ['ai', 'application/pdf'],
  	    ['aif', 'audio/x-aiff'],
  	    ['aifc', 'audio/x-aiff'],
  	    ['aiff', 'audio/x-aiff'],
  	    ['air', 'application/vnd.adobe.air-application-installer-package+zip'],
  	    ['ait', 'application/vnd.dvb.ait'],
  	    ['ami', 'application/vnd.amiga.ami'],
  	    ['amr', 'audio/amr'],
  	    ['apk', 'application/vnd.android.package-archive'],
  	    ['apng', 'image/apng'],
  	    ['appcache', 'text/cache-manifest'],
  	    ['application', 'application/x-ms-application'],
  	    ['apr', 'application/vnd.lotus-approach'],
  	    ['arc', 'application/x-freearc'],
  	    ['arj', 'application/x-arj'],
  	    ['asc', 'application/pgp-signature'],
  	    ['asf', 'video/x-ms-asf'],
  	    ['asm', 'text/x-asm'],
  	    ['aso', 'application/vnd.accpac.simply.aso'],
  	    ['asx', 'video/x-ms-asf'],
  	    ['atc', 'application/vnd.acucorp'],
  	    ['atom', 'application/atom+xml'],
  	    ['atomcat', 'application/atomcat+xml'],
  	    ['atomdeleted', 'application/atomdeleted+xml'],
  	    ['atomsvc', 'application/atomsvc+xml'],
  	    ['atx', 'application/vnd.antix.game-component'],
  	    ['au', 'audio/x-au'],
  	    ['avi', 'video/x-msvideo'],
  	    ['avif', 'image/avif'],
  	    ['aw', 'application/applixware'],
  	    ['azf', 'application/vnd.airzip.filesecure.azf'],
  	    ['azs', 'application/vnd.airzip.filesecure.azs'],
  	    ['azv', 'image/vnd.airzip.accelerator.azv'],
  	    ['azw', 'application/vnd.amazon.ebook'],
  	    ['b16', 'image/vnd.pco.b16'],
  	    ['bat', 'application/x-msdownload'],
  	    ['bcpio', 'application/x-bcpio'],
  	    ['bdf', 'application/x-font-bdf'],
  	    ['bdm', 'application/vnd.syncml.dm+wbxml'],
  	    ['bdoc', 'application/x-bdoc'],
  	    ['bed', 'application/vnd.realvnc.bed'],
  	    ['bh2', 'application/vnd.fujitsu.oasysprs'],
  	    ['bin', 'application/octet-stream'],
  	    ['blb', 'application/x-blorb'],
  	    ['blorb', 'application/x-blorb'],
  	    ['bmi', 'application/vnd.bmi'],
  	    ['bmml', 'application/vnd.balsamiq.bmml+xml'],
  	    ['bmp', 'image/bmp'],
  	    ['book', 'application/vnd.framemaker'],
  	    ['box', 'application/vnd.previewsystems.box'],
  	    ['boz', 'application/x-bzip2'],
  	    ['bpk', 'application/octet-stream'],
  	    ['bpmn', 'application/octet-stream'],
  	    ['bsp', 'model/vnd.valve.source.compiled-map'],
  	    ['btif', 'image/prs.btif'],
  	    ['buffer', 'application/octet-stream'],
  	    ['bz', 'application/x-bzip'],
  	    ['bz2', 'application/x-bzip2'],
  	    ['c', 'text/x-c'],
  	    ['c4d', 'application/vnd.clonk.c4group'],
  	    ['c4f', 'application/vnd.clonk.c4group'],
  	    ['c4g', 'application/vnd.clonk.c4group'],
  	    ['c4p', 'application/vnd.clonk.c4group'],
  	    ['c4u', 'application/vnd.clonk.c4group'],
  	    ['c11amc', 'application/vnd.cluetrust.cartomobile-config'],
  	    ['c11amz', 'application/vnd.cluetrust.cartomobile-config-pkg'],
  	    ['cab', 'application/vnd.ms-cab-compressed'],
  	    ['caf', 'audio/x-caf'],
  	    ['cap', 'application/vnd.tcpdump.pcap'],
  	    ['car', 'application/vnd.curl.car'],
  	    ['cat', 'application/vnd.ms-pki.seccat'],
  	    ['cb7', 'application/x-cbr'],
  	    ['cba', 'application/x-cbr'],
  	    ['cbr', 'application/x-cbr'],
  	    ['cbt', 'application/x-cbr'],
  	    ['cbz', 'application/x-cbr'],
  	    ['cc', 'text/x-c'],
  	    ['cco', 'application/x-cocoa'],
  	    ['cct', 'application/x-director'],
  	    ['ccxml', 'application/ccxml+xml'],
  	    ['cdbcmsg', 'application/vnd.contact.cmsg'],
  	    ['cda', 'application/x-cdf'],
  	    ['cdf', 'application/x-netcdf'],
  	    ['cdfx', 'application/cdfx+xml'],
  	    ['cdkey', 'application/vnd.mediastation.cdkey'],
  	    ['cdmia', 'application/cdmi-capability'],
  	    ['cdmic', 'application/cdmi-container'],
  	    ['cdmid', 'application/cdmi-domain'],
  	    ['cdmio', 'application/cdmi-object'],
  	    ['cdmiq', 'application/cdmi-queue'],
  	    ['cdr', 'application/cdr'],
  	    ['cdx', 'chemical/x-cdx'],
  	    ['cdxml', 'application/vnd.chemdraw+xml'],
  	    ['cdy', 'application/vnd.cinderella'],
  	    ['cer', 'application/pkix-cert'],
  	    ['cfs', 'application/x-cfs-compressed'],
  	    ['cgm', 'image/cgm'],
  	    ['chat', 'application/x-chat'],
  	    ['chm', 'application/vnd.ms-htmlhelp'],
  	    ['chrt', 'application/vnd.kde.kchart'],
  	    ['cif', 'chemical/x-cif'],
  	    ['cii', 'application/vnd.anser-web-certificate-issue-initiation'],
  	    ['cil', 'application/vnd.ms-artgalry'],
  	    ['cjs', 'application/node'],
  	    ['cla', 'application/vnd.claymore'],
  	    ['class', 'application/octet-stream'],
  	    ['clkk', 'application/vnd.crick.clicker.keyboard'],
  	    ['clkp', 'application/vnd.crick.clicker.palette'],
  	    ['clkt', 'application/vnd.crick.clicker.template'],
  	    ['clkw', 'application/vnd.crick.clicker.wordbank'],
  	    ['clkx', 'application/vnd.crick.clicker'],
  	    ['clp', 'application/x-msclip'],
  	    ['cmc', 'application/vnd.cosmocaller'],
  	    ['cmdf', 'chemical/x-cmdf'],
  	    ['cml', 'chemical/x-cml'],
  	    ['cmp', 'application/vnd.yellowriver-custom-menu'],
  	    ['cmx', 'image/x-cmx'],
  	    ['cod', 'application/vnd.rim.cod'],
  	    ['coffee', 'text/coffeescript'],
  	    ['com', 'application/x-msdownload'],
  	    ['conf', 'text/plain'],
  	    ['cpio', 'application/x-cpio'],
  	    ['cpp', 'text/x-c'],
  	    ['cpt', 'application/mac-compactpro'],
  	    ['crd', 'application/x-mscardfile'],
  	    ['crl', 'application/pkix-crl'],
  	    ['crt', 'application/x-x509-ca-cert'],
  	    ['crx', 'application/x-chrome-extension'],
  	    ['cryptonote', 'application/vnd.rig.cryptonote'],
  	    ['csh', 'application/x-csh'],
  	    ['csl', 'application/vnd.citationstyles.style+xml'],
  	    ['csml', 'chemical/x-csml'],
  	    ['csp', 'application/vnd.commonspace'],
  	    ['csr', 'application/octet-stream'],
  	    ['css', 'text/css'],
  	    ['cst', 'application/x-director'],
  	    ['csv', 'text/csv'],
  	    ['cu', 'application/cu-seeme'],
  	    ['curl', 'text/vnd.curl'],
  	    ['cww', 'application/prs.cww'],
  	    ['cxt', 'application/x-director'],
  	    ['cxx', 'text/x-c'],
  	    ['dae', 'model/vnd.collada+xml'],
  	    ['daf', 'application/vnd.mobius.daf'],
  	    ['dart', 'application/vnd.dart'],
  	    ['dataless', 'application/vnd.fdsn.seed'],
  	    ['davmount', 'application/davmount+xml'],
  	    ['dbf', 'application/vnd.dbf'],
  	    ['dbk', 'application/docbook+xml'],
  	    ['dcr', 'application/x-director'],
  	    ['dcurl', 'text/vnd.curl.dcurl'],
  	    ['dd2', 'application/vnd.oma.dd2+xml'],
  	    ['ddd', 'application/vnd.fujixerox.ddd'],
  	    ['ddf', 'application/vnd.syncml.dmddf+xml'],
  	    ['dds', 'image/vnd.ms-dds'],
  	    ['deb', 'application/x-debian-package'],
  	    ['def', 'text/plain'],
  	    ['deploy', 'application/octet-stream'],
  	    ['der', 'application/x-x509-ca-cert'],
  	    ['dfac', 'application/vnd.dreamfactory'],
  	    ['dgc', 'application/x-dgc-compressed'],
  	    ['dic', 'text/x-c'],
  	    ['dir', 'application/x-director'],
  	    ['dis', 'application/vnd.mobius.dis'],
  	    ['disposition-notification', 'message/disposition-notification'],
  	    ['dist', 'application/octet-stream'],
  	    ['distz', 'application/octet-stream'],
  	    ['djv', 'image/vnd.djvu'],
  	    ['djvu', 'image/vnd.djvu'],
  	    ['dll', 'application/octet-stream'],
  	    ['dmg', 'application/x-apple-diskimage'],
  	    ['dmn', 'application/octet-stream'],
  	    ['dmp', 'application/vnd.tcpdump.pcap'],
  	    ['dms', 'application/octet-stream'],
  	    ['dna', 'application/vnd.dna'],
  	    ['doc', 'application/msword'],
  	    ['docm', 'application/vnd.ms-word.template.macroEnabled.12'],
  	    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  	    ['dot', 'application/msword'],
  	    ['dotm', 'application/vnd.ms-word.template.macroEnabled.12'],
  	    ['dotx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.template'],
  	    ['dp', 'application/vnd.osgi.dp'],
  	    ['dpg', 'application/vnd.dpgraph'],
  	    ['dra', 'audio/vnd.dra'],
  	    ['drle', 'image/dicom-rle'],
  	    ['dsc', 'text/prs.lines.tag'],
  	    ['dssc', 'application/dssc+der'],
  	    ['dtb', 'application/x-dtbook+xml'],
  	    ['dtd', 'application/xml-dtd'],
  	    ['dts', 'audio/vnd.dts'],
  	    ['dtshd', 'audio/vnd.dts.hd'],
  	    ['dump', 'application/octet-stream'],
  	    ['dvb', 'video/vnd.dvb.file'],
  	    ['dvi', 'application/x-dvi'],
  	    ['dwd', 'application/atsc-dwd+xml'],
  	    ['dwf', 'model/vnd.dwf'],
  	    ['dwg', 'image/vnd.dwg'],
  	    ['dxf', 'image/vnd.dxf'],
  	    ['dxp', 'application/vnd.spotfire.dxp'],
  	    ['dxr', 'application/x-director'],
  	    ['ear', 'application/java-archive'],
  	    ['ecelp4800', 'audio/vnd.nuera.ecelp4800'],
  	    ['ecelp7470', 'audio/vnd.nuera.ecelp7470'],
  	    ['ecelp9600', 'audio/vnd.nuera.ecelp9600'],
  	    ['ecma', 'application/ecmascript'],
  	    ['edm', 'application/vnd.novadigm.edm'],
  	    ['edx', 'application/vnd.novadigm.edx'],
  	    ['efif', 'application/vnd.picsel'],
  	    ['ei6', 'application/vnd.pg.osasli'],
  	    ['elc', 'application/octet-stream'],
  	    ['emf', 'image/emf'],
  	    ['eml', 'message/rfc822'],
  	    ['emma', 'application/emma+xml'],
  	    ['emotionml', 'application/emotionml+xml'],
  	    ['emz', 'application/x-msmetafile'],
  	    ['eol', 'audio/vnd.digital-winds'],
  	    ['eot', 'application/vnd.ms-fontobject'],
  	    ['eps', 'application/postscript'],
  	    ['epub', 'application/epub+zip'],
  	    ['es', 'application/ecmascript'],
  	    ['es3', 'application/vnd.eszigno3+xml'],
  	    ['esa', 'application/vnd.osgi.subsystem'],
  	    ['esf', 'application/vnd.epson.esf'],
  	    ['et3', 'application/vnd.eszigno3+xml'],
  	    ['etx', 'text/x-setext'],
  	    ['eva', 'application/x-eva'],
  	    ['evy', 'application/x-envoy'],
  	    ['exe', 'application/octet-stream'],
  	    ['exi', 'application/exi'],
  	    ['exp', 'application/express'],
  	    ['exr', 'image/aces'],
  	    ['ext', 'application/vnd.novadigm.ext'],
  	    ['ez', 'application/andrew-inset'],
  	    ['ez2', 'application/vnd.ezpix-album'],
  	    ['ez3', 'application/vnd.ezpix-package'],
  	    ['f', 'text/x-fortran'],
  	    ['f4v', 'video/mp4'],
  	    ['f77', 'text/x-fortran'],
  	    ['f90', 'text/x-fortran'],
  	    ['fbs', 'image/vnd.fastbidsheet'],
  	    ['fcdt', 'application/vnd.adobe.formscentral.fcdt'],
  	    ['fcs', 'application/vnd.isac.fcs'],
  	    ['fdf', 'application/vnd.fdf'],
  	    ['fdt', 'application/fdt+xml'],
  	    ['fe_launch', 'application/vnd.denovo.fcselayout-link'],
  	    ['fg5', 'application/vnd.fujitsu.oasysgp'],
  	    ['fgd', 'application/x-director'],
  	    ['fh', 'image/x-freehand'],
  	    ['fh4', 'image/x-freehand'],
  	    ['fh5', 'image/x-freehand'],
  	    ['fh7', 'image/x-freehand'],
  	    ['fhc', 'image/x-freehand'],
  	    ['fig', 'application/x-xfig'],
  	    ['fits', 'image/fits'],
  	    ['flac', 'audio/x-flac'],
  	    ['fli', 'video/x-fli'],
  	    ['flo', 'application/vnd.micrografx.flo'],
  	    ['flv', 'video/x-flv'],
  	    ['flw', 'application/vnd.kde.kivio'],
  	    ['flx', 'text/vnd.fmi.flexstor'],
  	    ['fly', 'text/vnd.fly'],
  	    ['fm', 'application/vnd.framemaker'],
  	    ['fnc', 'application/vnd.frogans.fnc'],
  	    ['fo', 'application/vnd.software602.filler.form+xml'],
  	    ['for', 'text/x-fortran'],
  	    ['fpx', 'image/vnd.fpx'],
  	    ['frame', 'application/vnd.framemaker'],
  	    ['fsc', 'application/vnd.fsc.weblaunch'],
  	    ['fst', 'image/vnd.fst'],
  	    ['ftc', 'application/vnd.fluxtime.clip'],
  	    ['fti', 'application/vnd.anser-web-funds-transfer-initiation'],
  	    ['fvt', 'video/vnd.fvt'],
  	    ['fxp', 'application/vnd.adobe.fxp'],
  	    ['fxpl', 'application/vnd.adobe.fxp'],
  	    ['fzs', 'application/vnd.fuzzysheet'],
  	    ['g2w', 'application/vnd.geoplan'],
  	    ['g3', 'image/g3fax'],
  	    ['g3w', 'application/vnd.geospace'],
  	    ['gac', 'application/vnd.groove-account'],
  	    ['gam', 'application/x-tads'],
  	    ['gbr', 'application/rpki-ghostbusters'],
  	    ['gca', 'application/x-gca-compressed'],
  	    ['gdl', 'model/vnd.gdl'],
  	    ['gdoc', 'application/vnd.google-apps.document'],
  	    ['geo', 'application/vnd.dynageo'],
  	    ['geojson', 'application/geo+json'],
  	    ['gex', 'application/vnd.geometry-explorer'],
  	    ['ggb', 'application/vnd.geogebra.file'],
  	    ['ggt', 'application/vnd.geogebra.tool'],
  	    ['ghf', 'application/vnd.groove-help'],
  	    ['gif', 'image/gif'],
  	    ['gim', 'application/vnd.groove-identity-message'],
  	    ['glb', 'model/gltf-binary'],
  	    ['gltf', 'model/gltf+json'],
  	    ['gml', 'application/gml+xml'],
  	    ['gmx', 'application/vnd.gmx'],
  	    ['gnumeric', 'application/x-gnumeric'],
  	    ['gpg', 'application/gpg-keys'],
  	    ['gph', 'application/vnd.flographit'],
  	    ['gpx', 'application/gpx+xml'],
  	    ['gqf', 'application/vnd.grafeq'],
  	    ['gqs', 'application/vnd.grafeq'],
  	    ['gram', 'application/srgs'],
  	    ['gramps', 'application/x-gramps-xml'],
  	    ['gre', 'application/vnd.geometry-explorer'],
  	    ['grv', 'application/vnd.groove-injector'],
  	    ['grxml', 'application/srgs+xml'],
  	    ['gsf', 'application/x-font-ghostscript'],
  	    ['gsheet', 'application/vnd.google-apps.spreadsheet'],
  	    ['gslides', 'application/vnd.google-apps.presentation'],
  	    ['gtar', 'application/x-gtar'],
  	    ['gtm', 'application/vnd.groove-tool-message'],
  	    ['gtw', 'model/vnd.gtw'],
  	    ['gv', 'text/vnd.graphviz'],
  	    ['gxf', 'application/gxf'],
  	    ['gxt', 'application/vnd.geonext'],
  	    ['gz', 'application/gzip'],
  	    ['gzip', 'application/gzip'],
  	    ['h', 'text/x-c'],
  	    ['h261', 'video/h261'],
  	    ['h263', 'video/h263'],
  	    ['h264', 'video/h264'],
  	    ['hal', 'application/vnd.hal+xml'],
  	    ['hbci', 'application/vnd.hbci'],
  	    ['hbs', 'text/x-handlebars-template'],
  	    ['hdd', 'application/x-virtualbox-hdd'],
  	    ['hdf', 'application/x-hdf'],
  	    ['heic', 'image/heic'],
  	    ['heics', 'image/heic-sequence'],
  	    ['heif', 'image/heif'],
  	    ['heifs', 'image/heif-sequence'],
  	    ['hej2', 'image/hej2k'],
  	    ['held', 'application/atsc-held+xml'],
  	    ['hh', 'text/x-c'],
  	    ['hjson', 'application/hjson'],
  	    ['hlp', 'application/winhlp'],
  	    ['hpgl', 'application/vnd.hp-hpgl'],
  	    ['hpid', 'application/vnd.hp-hpid'],
  	    ['hps', 'application/vnd.hp-hps'],
  	    ['hqx', 'application/mac-binhex40'],
  	    ['hsj2', 'image/hsj2'],
  	    ['htc', 'text/x-component'],
  	    ['htke', 'application/vnd.kenameaapp'],
  	    ['htm', 'text/html'],
  	    ['html', 'text/html'],
  	    ['hvd', 'application/vnd.yamaha.hv-dic'],
  	    ['hvp', 'application/vnd.yamaha.hv-voice'],
  	    ['hvs', 'application/vnd.yamaha.hv-script'],
  	    ['i2g', 'application/vnd.intergeo'],
  	    ['icc', 'application/vnd.iccprofile'],
  	    ['ice', 'x-conference/x-cooltalk'],
  	    ['icm', 'application/vnd.iccprofile'],
  	    ['ico', 'image/x-icon'],
  	    ['ics', 'text/calendar'],
  	    ['ief', 'image/ief'],
  	    ['ifb', 'text/calendar'],
  	    ['ifm', 'application/vnd.shana.informed.formdata'],
  	    ['iges', 'model/iges'],
  	    ['igl', 'application/vnd.igloader'],
  	    ['igm', 'application/vnd.insors.igm'],
  	    ['igs', 'model/iges'],
  	    ['igx', 'application/vnd.micrografx.igx'],
  	    ['iif', 'application/vnd.shana.informed.interchange'],
  	    ['img', 'application/octet-stream'],
  	    ['imp', 'application/vnd.accpac.simply.imp'],
  	    ['ims', 'application/vnd.ms-ims'],
  	    ['in', 'text/plain'],
  	    ['ini', 'text/plain'],
  	    ['ink', 'application/inkml+xml'],
  	    ['inkml', 'application/inkml+xml'],
  	    ['install', 'application/x-install-instructions'],
  	    ['iota', 'application/vnd.astraea-software.iota'],
  	    ['ipfix', 'application/ipfix'],
  	    ['ipk', 'application/vnd.shana.informed.package'],
  	    ['irm', 'application/vnd.ibm.rights-management'],
  	    ['irp', 'application/vnd.irepository.package+xml'],
  	    ['iso', 'application/x-iso9660-image'],
  	    ['itp', 'application/vnd.shana.informed.formtemplate'],
  	    ['its', 'application/its+xml'],
  	    ['ivp', 'application/vnd.immervision-ivp'],
  	    ['ivu', 'application/vnd.immervision-ivu'],
  	    ['jad', 'text/vnd.sun.j2me.app-descriptor'],
  	    ['jade', 'text/jade'],
  	    ['jam', 'application/vnd.jam'],
  	    ['jar', 'application/java-archive'],
  	    ['jardiff', 'application/x-java-archive-diff'],
  	    ['java', 'text/x-java-source'],
  	    ['jhc', 'image/jphc'],
  	    ['jisp', 'application/vnd.jisp'],
  	    ['jls', 'image/jls'],
  	    ['jlt', 'application/vnd.hp-jlyt'],
  	    ['jng', 'image/x-jng'],
  	    ['jnlp', 'application/x-java-jnlp-file'],
  	    ['joda', 'application/vnd.joost.joda-archive'],
  	    ['jp2', 'image/jp2'],
  	    ['jpe', 'image/jpeg'],
  	    ['jpeg', 'image/jpeg'],
  	    ['jpf', 'image/jpx'],
  	    ['jpg', 'image/jpeg'],
  	    ['jpg2', 'image/jp2'],
  	    ['jpgm', 'video/jpm'],
  	    ['jpgv', 'video/jpeg'],
  	    ['jph', 'image/jph'],
  	    ['jpm', 'video/jpm'],
  	    ['jpx', 'image/jpx'],
  	    ['js', 'application/javascript'],
  	    ['json', 'application/json'],
  	    ['json5', 'application/json5'],
  	    ['jsonld', 'application/ld+json'],
  	    // https://jsonlines.org/
  	    ['jsonl', 'application/jsonl'],
  	    ['jsonml', 'application/jsonml+json'],
  	    ['jsx', 'text/jsx'],
  	    ['jxr', 'image/jxr'],
  	    ['jxra', 'image/jxra'],
  	    ['jxrs', 'image/jxrs'],
  	    ['jxs', 'image/jxs'],
  	    ['jxsc', 'image/jxsc'],
  	    ['jxsi', 'image/jxsi'],
  	    ['jxss', 'image/jxss'],
  	    ['kar', 'audio/midi'],
  	    ['karbon', 'application/vnd.kde.karbon'],
  	    ['kdb', 'application/octet-stream'],
  	    ['kdbx', 'application/x-keepass2'],
  	    ['key', 'application/x-iwork-keynote-sffkey'],
  	    ['kfo', 'application/vnd.kde.kformula'],
  	    ['kia', 'application/vnd.kidspiration'],
  	    ['kml', 'application/vnd.google-earth.kml+xml'],
  	    ['kmz', 'application/vnd.google-earth.kmz'],
  	    ['kne', 'application/vnd.kinar'],
  	    ['knp', 'application/vnd.kinar'],
  	    ['kon', 'application/vnd.kde.kontour'],
  	    ['kpr', 'application/vnd.kde.kpresenter'],
  	    ['kpt', 'application/vnd.kde.kpresenter'],
  	    ['kpxx', 'application/vnd.ds-keypoint'],
  	    ['ksp', 'application/vnd.kde.kspread'],
  	    ['ktr', 'application/vnd.kahootz'],
  	    ['ktx', 'image/ktx'],
  	    ['ktx2', 'image/ktx2'],
  	    ['ktz', 'application/vnd.kahootz'],
  	    ['kwd', 'application/vnd.kde.kword'],
  	    ['kwt', 'application/vnd.kde.kword'],
  	    ['lasxml', 'application/vnd.las.las+xml'],
  	    ['latex', 'application/x-latex'],
  	    ['lbd', 'application/vnd.llamagraphics.life-balance.desktop'],
  	    ['lbe', 'application/vnd.llamagraphics.life-balance.exchange+xml'],
  	    ['les', 'application/vnd.hhe.lesson-player'],
  	    ['less', 'text/less'],
  	    ['lgr', 'application/lgr+xml'],
  	    ['lha', 'application/octet-stream'],
  	    ['link66', 'application/vnd.route66.link66+xml'],
  	    ['list', 'text/plain'],
  	    ['list3820', 'application/vnd.ibm.modcap'],
  	    ['listafp', 'application/vnd.ibm.modcap'],
  	    ['litcoffee', 'text/coffeescript'],
  	    ['lnk', 'application/x-ms-shortcut'],
  	    ['log', 'text/plain'],
  	    ['lostxml', 'application/lost+xml'],
  	    ['lrf', 'application/octet-stream'],
  	    ['lrm', 'application/vnd.ms-lrm'],
  	    ['ltf', 'application/vnd.frogans.ltf'],
  	    ['lua', 'text/x-lua'],
  	    ['luac', 'application/x-lua-bytecode'],
  	    ['lvp', 'audio/vnd.lucent.voice'],
  	    ['lwp', 'application/vnd.lotus-wordpro'],
  	    ['lzh', 'application/octet-stream'],
  	    ['m1v', 'video/mpeg'],
  	    ['m2a', 'audio/mpeg'],
  	    ['m2v', 'video/mpeg'],
  	    ['m3a', 'audio/mpeg'],
  	    ['m3u', 'text/plain'],
  	    ['m3u8', 'application/vnd.apple.mpegurl'],
  	    ['m4a', 'audio/x-m4a'],
  	    ['m4p', 'application/mp4'],
  	    ['m4s', 'video/iso.segment'],
  	    ['m4u', 'application/vnd.mpegurl'],
  	    ['m4v', 'video/x-m4v'],
  	    ['m13', 'application/x-msmediaview'],
  	    ['m14', 'application/x-msmediaview'],
  	    ['m21', 'application/mp21'],
  	    ['ma', 'application/mathematica'],
  	    ['mads', 'application/mads+xml'],
  	    ['maei', 'application/mmt-aei+xml'],
  	    ['mag', 'application/vnd.ecowin.chart'],
  	    ['maker', 'application/vnd.framemaker'],
  	    ['man', 'text/troff'],
  	    ['manifest', 'text/cache-manifest'],
  	    ['map', 'application/json'],
  	    ['mar', 'application/octet-stream'],
  	    ['markdown', 'text/markdown'],
  	    ['mathml', 'application/mathml+xml'],
  	    ['mb', 'application/mathematica'],
  	    ['mbk', 'application/vnd.mobius.mbk'],
  	    ['mbox', 'application/mbox'],
  	    ['mc1', 'application/vnd.medcalcdata'],
  	    ['mcd', 'application/vnd.mcd'],
  	    ['mcurl', 'text/vnd.curl.mcurl'],
  	    ['md', 'text/markdown'],
  	    ['mdb', 'application/x-msaccess'],
  	    ['mdi', 'image/vnd.ms-modi'],
  	    ['mdx', 'text/mdx'],
  	    ['me', 'text/troff'],
  	    ['mesh', 'model/mesh'],
  	    ['meta4', 'application/metalink4+xml'],
  	    ['metalink', 'application/metalink+xml'],
  	    ['mets', 'application/mets+xml'],
  	    ['mfm', 'application/vnd.mfmp'],
  	    ['mft', 'application/rpki-manifest'],
  	    ['mgp', 'application/vnd.osgeo.mapguide.package'],
  	    ['mgz', 'application/vnd.proteus.magazine'],
  	    ['mid', 'audio/midi'],
  	    ['midi', 'audio/midi'],
  	    ['mie', 'application/x-mie'],
  	    ['mif', 'application/vnd.mif'],
  	    ['mime', 'message/rfc822'],
  	    ['mj2', 'video/mj2'],
  	    ['mjp2', 'video/mj2'],
  	    ['mjs', 'application/javascript'],
  	    ['mk3d', 'video/x-matroska'],
  	    ['mka', 'audio/x-matroska'],
  	    ['mkd', 'text/x-markdown'],
  	    ['mks', 'video/x-matroska'],
  	    ['mkv', 'video/x-matroska'],
  	    ['mlp', 'application/vnd.dolby.mlp'],
  	    ['mmd', 'application/vnd.chipnuts.karaoke-mmd'],
  	    ['mmf', 'application/vnd.smaf'],
  	    ['mml', 'text/mathml'],
  	    ['mmr', 'image/vnd.fujixerox.edmics-mmr'],
  	    ['mng', 'video/x-mng'],
  	    ['mny', 'application/x-msmoney'],
  	    ['mobi', 'application/x-mobipocket-ebook'],
  	    ['mods', 'application/mods+xml'],
  	    ['mov', 'video/quicktime'],
  	    ['movie', 'video/x-sgi-movie'],
  	    ['mp2', 'audio/mpeg'],
  	    ['mp2a', 'audio/mpeg'],
  	    ['mp3', 'audio/mpeg'],
  	    ['mp4', 'video/mp4'],
  	    ['mp4a', 'audio/mp4'],
  	    ['mp4s', 'application/mp4'],
  	    ['mp4v', 'video/mp4'],
  	    ['mp21', 'application/mp21'],
  	    ['mpc', 'application/vnd.mophun.certificate'],
  	    ['mpd', 'application/dash+xml'],
  	    ['mpe', 'video/mpeg'],
  	    ['mpeg', 'video/mpeg'],
  	    ['mpg', 'video/mpeg'],
  	    ['mpg4', 'video/mp4'],
  	    ['mpga', 'audio/mpeg'],
  	    ['mpkg', 'application/vnd.apple.installer+xml'],
  	    ['mpm', 'application/vnd.blueice.multipass'],
  	    ['mpn', 'application/vnd.mophun.application'],
  	    ['mpp', 'application/vnd.ms-project'],
  	    ['mpt', 'application/vnd.ms-project'],
  	    ['mpy', 'application/vnd.ibm.minipay'],
  	    ['mqy', 'application/vnd.mobius.mqy'],
  	    ['mrc', 'application/marc'],
  	    ['mrcx', 'application/marcxml+xml'],
  	    ['ms', 'text/troff'],
  	    ['mscml', 'application/mediaservercontrol+xml'],
  	    ['mseed', 'application/vnd.fdsn.mseed'],
  	    ['mseq', 'application/vnd.mseq'],
  	    ['msf', 'application/vnd.epson.msf'],
  	    ['msg', 'application/vnd.ms-outlook'],
  	    ['msh', 'model/mesh'],
  	    ['msi', 'application/x-msdownload'],
  	    ['msl', 'application/vnd.mobius.msl'],
  	    ['msm', 'application/octet-stream'],
  	    ['msp', 'application/octet-stream'],
  	    ['msty', 'application/vnd.muvee.style'],
  	    ['mtl', 'model/mtl'],
  	    ['mts', 'model/vnd.mts'],
  	    ['mus', 'application/vnd.musician'],
  	    ['musd', 'application/mmt-usd+xml'],
  	    ['musicxml', 'application/vnd.recordare.musicxml+xml'],
  	    ['mvb', 'application/x-msmediaview'],
  	    ['mvt', 'application/vnd.mapbox-vector-tile'],
  	    ['mwf', 'application/vnd.mfer'],
  	    ['mxf', 'application/mxf'],
  	    ['mxl', 'application/vnd.recordare.musicxml'],
  	    ['mxmf', 'audio/mobile-xmf'],
  	    ['mxml', 'application/xv+xml'],
  	    ['mxs', 'application/vnd.triscape.mxs'],
  	    ['mxu', 'video/vnd.mpegurl'],
  	    ['n-gage', 'application/vnd.nokia.n-gage.symbian.install'],
  	    ['n3', 'text/n3'],
  	    ['nb', 'application/mathematica'],
  	    ['nbp', 'application/vnd.wolfram.player'],
  	    ['nc', 'application/x-netcdf'],
  	    ['ncx', 'application/x-dtbncx+xml'],
  	    ['nfo', 'text/x-nfo'],
  	    ['ngdat', 'application/vnd.nokia.n-gage.data'],
  	    ['nitf', 'application/vnd.nitf'],
  	    ['nlu', 'application/vnd.neurolanguage.nlu'],
  	    ['nml', 'application/vnd.enliven'],
  	    ['nnd', 'application/vnd.noblenet-directory'],
  	    ['nns', 'application/vnd.noblenet-sealer'],
  	    ['nnw', 'application/vnd.noblenet-web'],
  	    ['npx', 'image/vnd.net-fpx'],
  	    ['nq', 'application/n-quads'],
  	    ['nsc', 'application/x-conference'],
  	    ['nsf', 'application/vnd.lotus-notes'],
  	    ['nt', 'application/n-triples'],
  	    ['ntf', 'application/vnd.nitf'],
  	    ['numbers', 'application/x-iwork-numbers-sffnumbers'],
  	    ['nzb', 'application/x-nzb'],
  	    ['oa2', 'application/vnd.fujitsu.oasys2'],
  	    ['oa3', 'application/vnd.fujitsu.oasys3'],
  	    ['oas', 'application/vnd.fujitsu.oasys'],
  	    ['obd', 'application/x-msbinder'],
  	    ['obgx', 'application/vnd.openblox.game+xml'],
  	    ['obj', 'model/obj'],
  	    ['oda', 'application/oda'],
  	    ['odb', 'application/vnd.oasis.opendocument.database'],
  	    ['odc', 'application/vnd.oasis.opendocument.chart'],
  	    ['odf', 'application/vnd.oasis.opendocument.formula'],
  	    ['odft', 'application/vnd.oasis.opendocument.formula-template'],
  	    ['odg', 'application/vnd.oasis.opendocument.graphics'],
  	    ['odi', 'application/vnd.oasis.opendocument.image'],
  	    ['odm', 'application/vnd.oasis.opendocument.text-master'],
  	    ['odp', 'application/vnd.oasis.opendocument.presentation'],
  	    ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
  	    ['odt', 'application/vnd.oasis.opendocument.text'],
  	    ['oga', 'audio/ogg'],
  	    ['ogex', 'model/vnd.opengex'],
  	    ['ogg', 'audio/ogg'],
  	    ['ogv', 'video/ogg'],
  	    ['ogx', 'application/ogg'],
  	    ['omdoc', 'application/omdoc+xml'],
  	    ['onepkg', 'application/onenote'],
  	    ['onetmp', 'application/onenote'],
  	    ['onetoc', 'application/onenote'],
  	    ['onetoc2', 'application/onenote'],
  	    ['opf', 'application/oebps-package+xml'],
  	    ['opml', 'text/x-opml'],
  	    ['oprc', 'application/vnd.palm'],
  	    ['opus', 'audio/ogg'],
  	    ['org', 'text/x-org'],
  	    ['osf', 'application/vnd.yamaha.openscoreformat'],
  	    ['osfpvg', 'application/vnd.yamaha.openscoreformat.osfpvg+xml'],
  	    ['osm', 'application/vnd.openstreetmap.data+xml'],
  	    ['otc', 'application/vnd.oasis.opendocument.chart-template'],
  	    ['otf', 'font/otf'],
  	    ['otg', 'application/vnd.oasis.opendocument.graphics-template'],
  	    ['oth', 'application/vnd.oasis.opendocument.text-web'],
  	    ['oti', 'application/vnd.oasis.opendocument.image-template'],
  	    ['otp', 'application/vnd.oasis.opendocument.presentation-template'],
  	    ['ots', 'application/vnd.oasis.opendocument.spreadsheet-template'],
  	    ['ott', 'application/vnd.oasis.opendocument.text-template'],
  	    ['ova', 'application/x-virtualbox-ova'],
  	    ['ovf', 'application/x-virtualbox-ovf'],
  	    ['owl', 'application/rdf+xml'],
  	    ['oxps', 'application/oxps'],
  	    ['oxt', 'application/vnd.openofficeorg.extension'],
  	    ['p', 'text/x-pascal'],
  	    ['p7a', 'application/x-pkcs7-signature'],
  	    ['p7b', 'application/x-pkcs7-certificates'],
  	    ['p7c', 'application/pkcs7-mime'],
  	    ['p7m', 'application/pkcs7-mime'],
  	    ['p7r', 'application/x-pkcs7-certreqresp'],
  	    ['p7s', 'application/pkcs7-signature'],
  	    ['p8', 'application/pkcs8'],
  	    ['p10', 'application/x-pkcs10'],
  	    ['p12', 'application/x-pkcs12'],
  	    ['pac', 'application/x-ns-proxy-autoconfig'],
  	    ['pages', 'application/x-iwork-pages-sffpages'],
  	    ['pas', 'text/x-pascal'],
  	    ['paw', 'application/vnd.pawaafile'],
  	    ['pbd', 'application/vnd.powerbuilder6'],
  	    ['pbm', 'image/x-portable-bitmap'],
  	    ['pcap', 'application/vnd.tcpdump.pcap'],
  	    ['pcf', 'application/x-font-pcf'],
  	    ['pcl', 'application/vnd.hp-pcl'],
  	    ['pclxl', 'application/vnd.hp-pclxl'],
  	    ['pct', 'image/x-pict'],
  	    ['pcurl', 'application/vnd.curl.pcurl'],
  	    ['pcx', 'image/x-pcx'],
  	    ['pdb', 'application/x-pilot'],
  	    ['pde', 'text/x-processing'],
  	    ['pdf', 'application/pdf'],
  	    ['pem', 'application/x-x509-user-cert'],
  	    ['pfa', 'application/x-font-type1'],
  	    ['pfb', 'application/x-font-type1'],
  	    ['pfm', 'application/x-font-type1'],
  	    ['pfr', 'application/font-tdpfr'],
  	    ['pfx', 'application/x-pkcs12'],
  	    ['pgm', 'image/x-portable-graymap'],
  	    ['pgn', 'application/x-chess-pgn'],
  	    ['pgp', 'application/pgp'],
  	    ['php', 'application/x-httpd-php'],
  	    ['php3', 'application/x-httpd-php'],
  	    ['php4', 'application/x-httpd-php'],
  	    ['phps', 'application/x-httpd-php-source'],
  	    ['phtml', 'application/x-httpd-php'],
  	    ['pic', 'image/x-pict'],
  	    ['pkg', 'application/octet-stream'],
  	    ['pki', 'application/pkixcmp'],
  	    ['pkipath', 'application/pkix-pkipath'],
  	    ['pkpass', 'application/vnd.apple.pkpass'],
  	    ['pl', 'application/x-perl'],
  	    ['plb', 'application/vnd.3gpp.pic-bw-large'],
  	    ['plc', 'application/vnd.mobius.plc'],
  	    ['plf', 'application/vnd.pocketlearn'],
  	    ['pls', 'application/pls+xml'],
  	    ['pm', 'application/x-perl'],
  	    ['pml', 'application/vnd.ctc-posml'],
  	    ['png', 'image/png'],
  	    ['pnm', 'image/x-portable-anymap'],
  	    ['portpkg', 'application/vnd.macports.portpkg'],
  	    ['pot', 'application/vnd.ms-powerpoint'],
  	    ['potm', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12'],
  	    ['potx', 'application/vnd.openxmlformats-officedocument.presentationml.template'],
  	    ['ppa', 'application/vnd.ms-powerpoint'],
  	    ['ppam', 'application/vnd.ms-powerpoint.addin.macroEnabled.12'],
  	    ['ppd', 'application/vnd.cups-ppd'],
  	    ['ppm', 'image/x-portable-pixmap'],
  	    ['pps', 'application/vnd.ms-powerpoint'],
  	    ['ppsm', 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'],
  	    ['ppsx', 'application/vnd.openxmlformats-officedocument.presentationml.slideshow'],
  	    ['ppt', 'application/powerpoint'],
  	    ['pptm', 'application/vnd.ms-powerpoint.presentation.macroEnabled.12'],
  	    ['pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
  	    ['pqa', 'application/vnd.palm'],
  	    ['prc', 'application/x-pilot'],
  	    ['pre', 'application/vnd.lotus-freelance'],
  	    ['prf', 'application/pics-rules'],
  	    ['provx', 'application/provenance+xml'],
  	    ['ps', 'application/postscript'],
  	    ['psb', 'application/vnd.3gpp.pic-bw-small'],
  	    ['psd', 'application/x-photoshop'],
  	    ['psf', 'application/x-font-linux-psf'],
  	    ['pskcxml', 'application/pskc+xml'],
  	    ['pti', 'image/prs.pti'],
  	    ['ptid', 'application/vnd.pvi.ptid1'],
  	    ['pub', 'application/x-mspublisher'],
  	    ['pvb', 'application/vnd.3gpp.pic-bw-var'],
  	    ['pwn', 'application/vnd.3m.post-it-notes'],
  	    ['pya', 'audio/vnd.ms-playready.media.pya'],
  	    ['pyv', 'video/vnd.ms-playready.media.pyv'],
  	    ['qam', 'application/vnd.epson.quickanime'],
  	    ['qbo', 'application/vnd.intu.qbo'],
  	    ['qfx', 'application/vnd.intu.qfx'],
  	    ['qps', 'application/vnd.publishare-delta-tree'],
  	    ['qt', 'video/quicktime'],
  	    ['qwd', 'application/vnd.quark.quarkxpress'],
  	    ['qwt', 'application/vnd.quark.quarkxpress'],
  	    ['qxb', 'application/vnd.quark.quarkxpress'],
  	    ['qxd', 'application/vnd.quark.quarkxpress'],
  	    ['qxl', 'application/vnd.quark.quarkxpress'],
  	    ['qxt', 'application/vnd.quark.quarkxpress'],
  	    ['ra', 'audio/x-realaudio'],
  	    ['ram', 'audio/x-pn-realaudio'],
  	    ['raml', 'application/raml+yaml'],
  	    ['rapd', 'application/route-apd+xml'],
  	    ['rar', 'application/x-rar'],
  	    ['ras', 'image/x-cmu-raster'],
  	    ['rcprofile', 'application/vnd.ipunplugged.rcprofile'],
  	    ['rdf', 'application/rdf+xml'],
  	    ['rdz', 'application/vnd.data-vision.rdz'],
  	    ['relo', 'application/p2p-overlay+xml'],
  	    ['rep', 'application/vnd.businessobjects'],
  	    ['res', 'application/x-dtbresource+xml'],
  	    ['rgb', 'image/x-rgb'],
  	    ['rif', 'application/reginfo+xml'],
  	    ['rip', 'audio/vnd.rip'],
  	    ['ris', 'application/x-research-info-systems'],
  	    ['rl', 'application/resource-lists+xml'],
  	    ['rlc', 'image/vnd.fujixerox.edmics-rlc'],
  	    ['rld', 'application/resource-lists-diff+xml'],
  	    ['rm', 'audio/x-pn-realaudio'],
  	    ['rmi', 'audio/midi'],
  	    ['rmp', 'audio/x-pn-realaudio-plugin'],
  	    ['rms', 'application/vnd.jcp.javame.midlet-rms'],
  	    ['rmvb', 'application/vnd.rn-realmedia-vbr'],
  	    ['rnc', 'application/relax-ng-compact-syntax'],
  	    ['rng', 'application/xml'],
  	    ['roa', 'application/rpki-roa'],
  	    ['roff', 'text/troff'],
  	    ['rp9', 'application/vnd.cloanto.rp9'],
  	    ['rpm', 'audio/x-pn-realaudio-plugin'],
  	    ['rpss', 'application/vnd.nokia.radio-presets'],
  	    ['rpst', 'application/vnd.nokia.radio-preset'],
  	    ['rq', 'application/sparql-query'],
  	    ['rs', 'application/rls-services+xml'],
  	    ['rsa', 'application/x-pkcs7'],
  	    ['rsat', 'application/atsc-rsat+xml'],
  	    ['rsd', 'application/rsd+xml'],
  	    ['rsheet', 'application/urc-ressheet+xml'],
  	    ['rss', 'application/rss+xml'],
  	    ['rtf', 'text/rtf'],
  	    ['rtx', 'text/richtext'],
  	    ['run', 'application/x-makeself'],
  	    ['rusd', 'application/route-usd+xml'],
  	    ['rv', 'video/vnd.rn-realvideo'],
  	    ['s', 'text/x-asm'],
  	    ['s3m', 'audio/s3m'],
  	    ['saf', 'application/vnd.yamaha.smaf-audio'],
  	    ['sass', 'text/x-sass'],
  	    ['sbml', 'application/sbml+xml'],
  	    ['sc', 'application/vnd.ibm.secure-container'],
  	    ['scd', 'application/x-msschedule'],
  	    ['scm', 'application/vnd.lotus-screencam'],
  	    ['scq', 'application/scvp-cv-request'],
  	    ['scs', 'application/scvp-cv-response'],
  	    ['scss', 'text/x-scss'],
  	    ['scurl', 'text/vnd.curl.scurl'],
  	    ['sda', 'application/vnd.stardivision.draw'],
  	    ['sdc', 'application/vnd.stardivision.calc'],
  	    ['sdd', 'application/vnd.stardivision.impress'],
  	    ['sdkd', 'application/vnd.solent.sdkm+xml'],
  	    ['sdkm', 'application/vnd.solent.sdkm+xml'],
  	    ['sdp', 'application/sdp'],
  	    ['sdw', 'application/vnd.stardivision.writer'],
  	    ['sea', 'application/octet-stream'],
  	    ['see', 'application/vnd.seemail'],
  	    ['seed', 'application/vnd.fdsn.seed'],
  	    ['sema', 'application/vnd.sema'],
  	    ['semd', 'application/vnd.semd'],
  	    ['semf', 'application/vnd.semf'],
  	    ['senmlx', 'application/senml+xml'],
  	    ['sensmlx', 'application/sensml+xml'],
  	    ['ser', 'application/java-serialized-object'],
  	    ['setpay', 'application/set-payment-initiation'],
  	    ['setreg', 'application/set-registration-initiation'],
  	    ['sfd-hdstx', 'application/vnd.hydrostatix.sof-data'],
  	    ['sfs', 'application/vnd.spotfire.sfs'],
  	    ['sfv', 'text/x-sfv'],
  	    ['sgi', 'image/sgi'],
  	    ['sgl', 'application/vnd.stardivision.writer-global'],
  	    ['sgm', 'text/sgml'],
  	    ['sgml', 'text/sgml'],
  	    ['sh', 'application/x-sh'],
  	    ['shar', 'application/x-shar'],
  	    ['shex', 'text/shex'],
  	    ['shf', 'application/shf+xml'],
  	    ['shtml', 'text/html'],
  	    ['sid', 'image/x-mrsid-image'],
  	    ['sieve', 'application/sieve'],
  	    ['sig', 'application/pgp-signature'],
  	    ['sil', 'audio/silk'],
  	    ['silo', 'model/mesh'],
  	    ['sis', 'application/vnd.symbian.install'],
  	    ['sisx', 'application/vnd.symbian.install'],
  	    ['sit', 'application/x-stuffit'],
  	    ['sitx', 'application/x-stuffitx'],
  	    ['siv', 'application/sieve'],
  	    ['skd', 'application/vnd.koan'],
  	    ['skm', 'application/vnd.koan'],
  	    ['skp', 'application/vnd.koan'],
  	    ['skt', 'application/vnd.koan'],
  	    ['sldm', 'application/vnd.ms-powerpoint.slide.macroenabled.12'],
  	    ['sldx', 'application/vnd.openxmlformats-officedocument.presentationml.slide'],
  	    ['slim', 'text/slim'],
  	    ['slm', 'text/slim'],
  	    ['sls', 'application/route-s-tsid+xml'],
  	    ['slt', 'application/vnd.epson.salt'],
  	    ['sm', 'application/vnd.stepmania.stepchart'],
  	    ['smf', 'application/vnd.stardivision.math'],
  	    ['smi', 'application/smil'],
  	    ['smil', 'application/smil'],
  	    ['smv', 'video/x-smv'],
  	    ['smzip', 'application/vnd.stepmania.package'],
  	    ['snd', 'audio/basic'],
  	    ['snf', 'application/x-font-snf'],
  	    ['so', 'application/octet-stream'],
  	    ['spc', 'application/x-pkcs7-certificates'],
  	    ['spdx', 'text/spdx'],
  	    ['spf', 'application/vnd.yamaha.smaf-phrase'],
  	    ['spl', 'application/x-futuresplash'],
  	    ['spot', 'text/vnd.in3d.spot'],
  	    ['spp', 'application/scvp-vp-response'],
  	    ['spq', 'application/scvp-vp-request'],
  	    ['spx', 'audio/ogg'],
  	    ['sql', 'application/x-sql'],
  	    ['src', 'application/x-wais-source'],
  	    ['srt', 'application/x-subrip'],
  	    ['sru', 'application/sru+xml'],
  	    ['srx', 'application/sparql-results+xml'],
  	    ['ssdl', 'application/ssdl+xml'],
  	    ['sse', 'application/vnd.kodak-descriptor'],
  	    ['ssf', 'application/vnd.epson.ssf'],
  	    ['ssml', 'application/ssml+xml'],
  	    ['sst', 'application/octet-stream'],
  	    ['st', 'application/vnd.sailingtracker.track'],
  	    ['stc', 'application/vnd.sun.xml.calc.template'],
  	    ['std', 'application/vnd.sun.xml.draw.template'],
  	    ['stf', 'application/vnd.wt.stf'],
  	    ['sti', 'application/vnd.sun.xml.impress.template'],
  	    ['stk', 'application/hyperstudio'],
  	    ['stl', 'model/stl'],
  	    ['stpx', 'model/step+xml'],
  	    ['stpxz', 'model/step-xml+zip'],
  	    ['stpz', 'model/step+zip'],
  	    ['str', 'application/vnd.pg.format'],
  	    ['stw', 'application/vnd.sun.xml.writer.template'],
  	    ['styl', 'text/stylus'],
  	    ['stylus', 'text/stylus'],
  	    ['sub', 'text/vnd.dvb.subtitle'],
  	    ['sus', 'application/vnd.sus-calendar'],
  	    ['susp', 'application/vnd.sus-calendar'],
  	    ['sv4cpio', 'application/x-sv4cpio'],
  	    ['sv4crc', 'application/x-sv4crc'],
  	    ['svc', 'application/vnd.dvb.service'],
  	    ['svd', 'application/vnd.svd'],
  	    ['svg', 'image/svg+xml'],
  	    ['svgz', 'image/svg+xml'],
  	    ['swa', 'application/x-director'],
  	    ['swf', 'application/x-shockwave-flash'],
  	    ['swi', 'application/vnd.aristanetworks.swi'],
  	    ['swidtag', 'application/swid+xml'],
  	    ['sxc', 'application/vnd.sun.xml.calc'],
  	    ['sxd', 'application/vnd.sun.xml.draw'],
  	    ['sxg', 'application/vnd.sun.xml.writer.global'],
  	    ['sxi', 'application/vnd.sun.xml.impress'],
  	    ['sxm', 'application/vnd.sun.xml.math'],
  	    ['sxw', 'application/vnd.sun.xml.writer'],
  	    ['t', 'text/troff'],
  	    ['t3', 'application/x-t3vm-image'],
  	    ['t38', 'image/t38'],
  	    ['taglet', 'application/vnd.mynfc'],
  	    ['tao', 'application/vnd.tao.intent-module-archive'],
  	    ['tap', 'image/vnd.tencent.tap'],
  	    ['tar', 'application/x-tar'],
  	    ['tcap', 'application/vnd.3gpp2.tcap'],
  	    ['tcl', 'application/x-tcl'],
  	    ['td', 'application/urc-targetdesc+xml'],
  	    ['teacher', 'application/vnd.smart.teacher'],
  	    ['tei', 'application/tei+xml'],
  	    ['teicorpus', 'application/tei+xml'],
  	    ['tex', 'application/x-tex'],
  	    ['texi', 'application/x-texinfo'],
  	    ['texinfo', 'application/x-texinfo'],
  	    ['text', 'text/plain'],
  	    ['tfi', 'application/thraud+xml'],
  	    ['tfm', 'application/x-tex-tfm'],
  	    ['tfx', 'image/tiff-fx'],
  	    ['tga', 'image/x-tga'],
  	    ['tgz', 'application/x-tar'],
  	    ['thmx', 'application/vnd.ms-officetheme'],
  	    ['tif', 'image/tiff'],
  	    ['tiff', 'image/tiff'],
  	    ['tk', 'application/x-tcl'],
  	    ['tmo', 'application/vnd.tmobile-livetv'],
  	    ['toml', 'application/toml'],
  	    ['torrent', 'application/x-bittorrent'],
  	    ['tpl', 'application/vnd.groove-tool-template'],
  	    ['tpt', 'application/vnd.trid.tpt'],
  	    ['tr', 'text/troff'],
  	    ['tra', 'application/vnd.trueapp'],
  	    ['trig', 'application/trig'],
  	    ['trm', 'application/x-msterminal'],
  	    ['ts', 'video/mp2t'],
  	    ['tsd', 'application/timestamped-data'],
  	    ['tsv', 'text/tab-separated-values'],
  	    ['ttc', 'font/collection'],
  	    ['ttf', 'font/ttf'],
  	    ['ttl', 'text/turtle'],
  	    ['ttml', 'application/ttml+xml'],
  	    ['twd', 'application/vnd.simtech-mindmapper'],
  	    ['twds', 'application/vnd.simtech-mindmapper'],
  	    ['txd', 'application/vnd.genomatix.tuxedo'],
  	    ['txf', 'application/vnd.mobius.txf'],
  	    ['txt', 'text/plain'],
  	    ['u8dsn', 'message/global-delivery-status'],
  	    ['u8hdr', 'message/global-headers'],
  	    ['u8mdn', 'message/global-disposition-notification'],
  	    ['u8msg', 'message/global'],
  	    ['u32', 'application/x-authorware-bin'],
  	    ['ubj', 'application/ubjson'],
  	    ['udeb', 'application/x-debian-package'],
  	    ['ufd', 'application/vnd.ufdl'],
  	    ['ufdl', 'application/vnd.ufdl'],
  	    ['ulx', 'application/x-glulx'],
  	    ['umj', 'application/vnd.umajin'],
  	    ['unityweb', 'application/vnd.unity'],
  	    ['uoml', 'application/vnd.uoml+xml'],
  	    ['uri', 'text/uri-list'],
  	    ['uris', 'text/uri-list'],
  	    ['urls', 'text/uri-list'],
  	    ['usdz', 'model/vnd.usdz+zip'],
  	    ['ustar', 'application/x-ustar'],
  	    ['utz', 'application/vnd.uiq.theme'],
  	    ['uu', 'text/x-uuencode'],
  	    ['uva', 'audio/vnd.dece.audio'],
  	    ['uvd', 'application/vnd.dece.data'],
  	    ['uvf', 'application/vnd.dece.data'],
  	    ['uvg', 'image/vnd.dece.graphic'],
  	    ['uvh', 'video/vnd.dece.hd'],
  	    ['uvi', 'image/vnd.dece.graphic'],
  	    ['uvm', 'video/vnd.dece.mobile'],
  	    ['uvp', 'video/vnd.dece.pd'],
  	    ['uvs', 'video/vnd.dece.sd'],
  	    ['uvt', 'application/vnd.dece.ttml+xml'],
  	    ['uvu', 'video/vnd.uvvu.mp4'],
  	    ['uvv', 'video/vnd.dece.video'],
  	    ['uvva', 'audio/vnd.dece.audio'],
  	    ['uvvd', 'application/vnd.dece.data'],
  	    ['uvvf', 'application/vnd.dece.data'],
  	    ['uvvg', 'image/vnd.dece.graphic'],
  	    ['uvvh', 'video/vnd.dece.hd'],
  	    ['uvvi', 'image/vnd.dece.graphic'],
  	    ['uvvm', 'video/vnd.dece.mobile'],
  	    ['uvvp', 'video/vnd.dece.pd'],
  	    ['uvvs', 'video/vnd.dece.sd'],
  	    ['uvvt', 'application/vnd.dece.ttml+xml'],
  	    ['uvvu', 'video/vnd.uvvu.mp4'],
  	    ['uvvv', 'video/vnd.dece.video'],
  	    ['uvvx', 'application/vnd.dece.unspecified'],
  	    ['uvvz', 'application/vnd.dece.zip'],
  	    ['uvx', 'application/vnd.dece.unspecified'],
  	    ['uvz', 'application/vnd.dece.zip'],
  	    ['vbox', 'application/x-virtualbox-vbox'],
  	    ['vbox-extpack', 'application/x-virtualbox-vbox-extpack'],
  	    ['vcard', 'text/vcard'],
  	    ['vcd', 'application/x-cdlink'],
  	    ['vcf', 'text/x-vcard'],
  	    ['vcg', 'application/vnd.groove-vcard'],
  	    ['vcs', 'text/x-vcalendar'],
  	    ['vcx', 'application/vnd.vcx'],
  	    ['vdi', 'application/x-virtualbox-vdi'],
  	    ['vds', 'model/vnd.sap.vds'],
  	    ['vhd', 'application/x-virtualbox-vhd'],
  	    ['vis', 'application/vnd.visionary'],
  	    ['viv', 'video/vnd.vivo'],
  	    ['vlc', 'application/videolan'],
  	    ['vmdk', 'application/x-virtualbox-vmdk'],
  	    ['vob', 'video/x-ms-vob'],
  	    ['vor', 'application/vnd.stardivision.writer'],
  	    ['vox', 'application/x-authorware-bin'],
  	    ['vrml', 'model/vrml'],
  	    ['vsd', 'application/vnd.visio'],
  	    ['vsf', 'application/vnd.vsf'],
  	    ['vss', 'application/vnd.visio'],
  	    ['vst', 'application/vnd.visio'],
  	    ['vsw', 'application/vnd.visio'],
  	    ['vtf', 'image/vnd.valve.source.texture'],
  	    ['vtt', 'text/vtt'],
  	    ['vtu', 'model/vnd.vtu'],
  	    ['vxml', 'application/voicexml+xml'],
  	    ['w3d', 'application/x-director'],
  	    ['wad', 'application/x-doom'],
  	    ['wadl', 'application/vnd.sun.wadl+xml'],
  	    ['war', 'application/java-archive'],
  	    ['wasm', 'application/wasm'],
  	    ['wav', 'audio/x-wav'],
  	    ['wax', 'audio/x-ms-wax'],
  	    ['wbmp', 'image/vnd.wap.wbmp'],
  	    ['wbs', 'application/vnd.criticaltools.wbs+xml'],
  	    ['wbxml', 'application/wbxml'],
  	    ['wcm', 'application/vnd.ms-works'],
  	    ['wdb', 'application/vnd.ms-works'],
  	    ['wdp', 'image/vnd.ms-photo'],
  	    ['weba', 'audio/webm'],
  	    ['webapp', 'application/x-web-app-manifest+json'],
  	    ['webm', 'video/webm'],
  	    ['webmanifest', 'application/manifest+json'],
  	    ['webp', 'image/webp'],
  	    ['wg', 'application/vnd.pmi.widget'],
  	    ['wgt', 'application/widget'],
  	    ['wks', 'application/vnd.ms-works'],
  	    ['wm', 'video/x-ms-wm'],
  	    ['wma', 'audio/x-ms-wma'],
  	    ['wmd', 'application/x-ms-wmd'],
  	    ['wmf', 'image/wmf'],
  	    ['wml', 'text/vnd.wap.wml'],
  	    ['wmlc', 'application/wmlc'],
  	    ['wmls', 'text/vnd.wap.wmlscript'],
  	    ['wmlsc', 'application/vnd.wap.wmlscriptc'],
  	    ['wmv', 'video/x-ms-wmv'],
  	    ['wmx', 'video/x-ms-wmx'],
  	    ['wmz', 'application/x-msmetafile'],
  	    ['woff', 'font/woff'],
  	    ['woff2', 'font/woff2'],
  	    ['word', 'application/msword'],
  	    ['wpd', 'application/vnd.wordperfect'],
  	    ['wpl', 'application/vnd.ms-wpl'],
  	    ['wps', 'application/vnd.ms-works'],
  	    ['wqd', 'application/vnd.wqd'],
  	    ['wri', 'application/x-mswrite'],
  	    ['wrl', 'model/vrml'],
  	    ['wsc', 'message/vnd.wfa.wsc'],
  	    ['wsdl', 'application/wsdl+xml'],
  	    ['wspolicy', 'application/wspolicy+xml'],
  	    ['wtb', 'application/vnd.webturbo'],
  	    ['wvx', 'video/x-ms-wvx'],
  	    ['x3d', 'model/x3d+xml'],
  	    ['x3db', 'model/x3d+fastinfoset'],
  	    ['x3dbz', 'model/x3d+binary'],
  	    ['x3dv', 'model/x3d-vrml'],
  	    ['x3dvz', 'model/x3d+vrml'],
  	    ['x3dz', 'model/x3d+xml'],
  	    ['x32', 'application/x-authorware-bin'],
  	    ['x_b', 'model/vnd.parasolid.transmit.binary'],
  	    ['x_t', 'model/vnd.parasolid.transmit.text'],
  	    ['xaml', 'application/xaml+xml'],
  	    ['xap', 'application/x-silverlight-app'],
  	    ['xar', 'application/vnd.xara'],
  	    ['xav', 'application/xcap-att+xml'],
  	    ['xbap', 'application/x-ms-xbap'],
  	    ['xbd', 'application/vnd.fujixerox.docuworks.binder'],
  	    ['xbm', 'image/x-xbitmap'],
  	    ['xca', 'application/xcap-caps+xml'],
  	    ['xcs', 'application/calendar+xml'],
  	    ['xdf', 'application/xcap-diff+xml'],
  	    ['xdm', 'application/vnd.syncml.dm+xml'],
  	    ['xdp', 'application/vnd.adobe.xdp+xml'],
  	    ['xdssc', 'application/dssc+xml'],
  	    ['xdw', 'application/vnd.fujixerox.docuworks'],
  	    ['xel', 'application/xcap-el+xml'],
  	    ['xenc', 'application/xenc+xml'],
  	    ['xer', 'application/patch-ops-error+xml'],
  	    ['xfdf', 'application/vnd.adobe.xfdf'],
  	    ['xfdl', 'application/vnd.xfdl'],
  	    ['xht', 'application/xhtml+xml'],
  	    ['xhtml', 'application/xhtml+xml'],
  	    ['xhvml', 'application/xv+xml'],
  	    ['xif', 'image/vnd.xiff'],
  	    ['xl', 'application/excel'],
  	    ['xla', 'application/vnd.ms-excel'],
  	    ['xlam', 'application/vnd.ms-excel.addin.macroEnabled.12'],
  	    ['xlc', 'application/vnd.ms-excel'],
  	    ['xlf', 'application/xliff+xml'],
  	    ['xlm', 'application/vnd.ms-excel'],
  	    ['xls', 'application/vnd.ms-excel'],
  	    ['xlsb', 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'],
  	    ['xlsm', 'application/vnd.ms-excel.sheet.macroEnabled.12'],
  	    ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  	    ['xlt', 'application/vnd.ms-excel'],
  	    ['xltm', 'application/vnd.ms-excel.template.macroEnabled.12'],
  	    ['xltx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.template'],
  	    ['xlw', 'application/vnd.ms-excel'],
  	    ['xm', 'audio/xm'],
  	    ['xml', 'application/xml'],
  	    ['xns', 'application/xcap-ns+xml'],
  	    ['xo', 'application/vnd.olpc-sugar'],
  	    ['xop', 'application/xop+xml'],
  	    ['xpi', 'application/x-xpinstall'],
  	    ['xpl', 'application/xproc+xml'],
  	    ['xpm', 'image/x-xpixmap'],
  	    ['xpr', 'application/vnd.is-xpr'],
  	    ['xps', 'application/vnd.ms-xpsdocument'],
  	    ['xpw', 'application/vnd.intercon.formnet'],
  	    ['xpx', 'application/vnd.intercon.formnet'],
  	    ['xsd', 'application/xml'],
  	    ['xsl', 'application/xml'],
  	    ['xslt', 'application/xslt+xml'],
  	    ['xsm', 'application/vnd.syncml+xml'],
  	    ['xspf', 'application/xspf+xml'],
  	    ['xul', 'application/vnd.mozilla.xul+xml'],
  	    ['xvm', 'application/xv+xml'],
  	    ['xvml', 'application/xv+xml'],
  	    ['xwd', 'image/x-xwindowdump'],
  	    ['xyz', 'chemical/x-xyz'],
  	    ['xz', 'application/x-xz'],
  	    ['yaml', 'text/yaml'],
  	    ['yang', 'application/yang'],
  	    ['yin', 'application/yin+xml'],
  	    ['yml', 'text/yaml'],
  	    ['ymp', 'text/x-suse-ymp'],
  	    ['z', 'application/x-compress'],
  	    ['z1', 'application/x-zmachine'],
  	    ['z2', 'application/x-zmachine'],
  	    ['z3', 'application/x-zmachine'],
  	    ['z4', 'application/x-zmachine'],
  	    ['z5', 'application/x-zmachine'],
  	    ['z6', 'application/x-zmachine'],
  	    ['z7', 'application/x-zmachine'],
  	    ['z8', 'application/x-zmachine'],
  	    ['zaz', 'application/vnd.zzazz.deck+xml'],
  	    ['zip', 'application/zip'],
  	    ['zir', 'application/vnd.zul'],
  	    ['zirz', 'application/vnd.zul'],
  	    ['zmm', 'application/vnd.handheld-entertainment+xml'],
  	    ['zsh', 'text/x-scriptzsh']
  	]);
  	function toFileWithPath(file, path, h) {
  	    var f = withMimeType(file);
  	    var webkitRelativePath = file.webkitRelativePath;
  	    var p = typeof path === 'string'
  	        ? path
  	        // If <input webkitdirectory> is set,
  	        // the File will have a {webkitRelativePath} property
  	        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
  	        : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
  	            ? webkitRelativePath
  	            : "./".concat(file.name);
  	    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
  	        setObjProp(f, 'path', p);
  	    }
  	    if (h !== undefined) {
  	        Object.defineProperty(f, 'handle', {
  	            value: h,
  	            writable: false,
  	            configurable: false,
  	            enumerable: true
  	        });
  	    }
  	    // Always populate a relative path so that even electron apps have access to a relativePath value
  	    setObjProp(f, 'relativePath', p);
  	    return f;
  	}
  	function withMimeType(file) {
  	    var name = file.name;
  	    var hasExtension = name && name.lastIndexOf('.') !== -1;
  	    if (hasExtension && !file.type) {
  	        var ext = name.split('.')
  	            .pop().toLowerCase();
  	        var type = exports.COMMON_MIME_TYPES.get(ext);
  	        if (type) {
  	            Object.defineProperty(file, 'type', {
  	                value: type,
  	                writable: false,
  	                configurable: false,
  	                enumerable: true
  	            });
  	        }
  	    }
  	    return file;
  	}
  	function setObjProp(f, key, value) {
  	    Object.defineProperty(f, key, {
  	        value: value,
  	        writable: false,
  	        configurable: false,
  	        enumerable: true
  	    });
  	}
  	
  } (file));

  var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  };
  var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
          }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
  };
  Object.defineProperty(fileSelector, "__esModule", { value: true });
  fileSelector.fromEvent = fromEvent;
  var file_1 = file;
  var FILES_TO_IGNORE = [
      // Thumbnail cache files for macOS and Windows
      '.DS_Store', // macOs
      'Thumbs.db' // Windows
  ];
  /**
   * Convert a DragEvent's DataTrasfer object to a list of File objects
   * NOTE: If some of the items are folders,
   * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
   *
   * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg
   * and a list of File objects will be returned.
   *
   * @param evt
   */
  function fromEvent(evt) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              if (isObject$1(evt) && isDataTransfer(evt.dataTransfer)) {
                  return [2 /*return*/, getDataTransferFiles(evt.dataTransfer, evt.type)];
              }
              else if (isChangeEvt(evt)) {
                  return [2 /*return*/, getInputFiles(evt)];
              }
              else if (Array.isArray(evt) && evt.every(function (item) { return 'getFile' in item && typeof item.getFile === 'function'; })) {
                  return [2 /*return*/, getFsHandleFiles(evt)];
              }
              return [2 /*return*/, []];
          });
      });
  }
  function isDataTransfer(value) {
      return isObject$1(value);
  }
  function isChangeEvt(value) {
      return isObject$1(value) && isObject$1(value.target);
  }
  function isObject$1(v) {
      return typeof v === 'object' && v !== null;
  }
  function getInputFiles(evt) {
      return fromList(evt.target.files).map(function (file) { return (0, file_1.toFileWithPath)(file); });
  }
  // Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
  function getFsHandleFiles(handles) {
      return __awaiter(this, void 0, void 0, function () {
          var files;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0: return [4 /*yield*/, Promise.all(handles.map(function (h) { return h.getFile(); }))];
                  case 1:
                      files = _a.sent();
                      return [2 /*return*/, files.map(function (file) { return (0, file_1.toFileWithPath)(file); })];
              }
          });
      });
  }
  function getDataTransferFiles(dt, type) {
      return __awaiter(this, void 0, void 0, function () {
          var items, files;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      if (!dt.items) return [3 /*break*/, 2];
                      items = fromList(dt.items)
                          .filter(function (item) { return item.kind === 'file'; });
                      // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                      // only 'dragstart' and 'drop' has access to the data (source node)
                      if (type !== 'drop') {
                          return [2 /*return*/, items];
                      }
                      return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                  case 1:
                      files = _a.sent();
                      return [2 /*return*/, noIgnoredFiles(flatten(files))];
                  case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                          .map(function (file) { return (0, file_1.toFileWithPath)(file); }))];
              }
          });
      });
  }
  function noIgnoredFiles(files) {
      return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
  }
  // IE11 does not support Array.from()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
  // https://developer.mozilla.org/en-US/docs/Web/API/FileList
  // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
  function fromList(items) {
      if (items === null) {
          return [];
      }
      var files = [];
      // tslint:disable: prefer-for-of
      for (var i = 0; i < items.length; i++) {
          var file = items[i];
          files.push(file);
      }
      return files;
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
  function toFilePromises(item) {
      if (typeof item.webkitGetAsEntry !== 'function') {
          return fromDataTransferItem(item);
      }
      var entry = item.webkitGetAsEntry();
      // Safari supports dropping an image node from a different window and can be retrieved using
      // the DataTransferItem.getAsFile() API
      // NOTE: FileSystemEntry.file() throws if trying to get the file
      if (entry && entry.isDirectory) {
          return fromDirEntry(entry);
      }
      return fromDataTransferItem(item, entry);
  }
  function flatten(items) {
      return items.reduce(function (acc, files) { return __spreadArray(__spreadArray([], __read(acc), false), __read((Array.isArray(files) ? flatten(files) : [files])), false); }, []);
  }
  function fromDataTransferItem(item, entry) {
      return __awaiter(this, void 0, void 0, function () {
          var h, file_2, file, fwp;
          var _a;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      if (!(globalThis.isSecureContext && typeof item.getAsFileSystemHandle === 'function')) return [3 /*break*/, 3];
                      return [4 /*yield*/, item.getAsFileSystemHandle()];
                  case 1:
                      h = _b.sent();
                      if (h === null) {
                          throw new Error("".concat(item, " is not a File"));
                      }
                      if (!(h !== undefined)) return [3 /*break*/, 3];
                      return [4 /*yield*/, h.getFile()];
                  case 2:
                      file_2 = _b.sent();
                      file_2.handle = h;
                      return [2 /*return*/, (0, file_1.toFileWithPath)(file_2)];
                  case 3:
                      file = item.getAsFile();
                      if (!file) {
                          throw new Error("".concat(item, " is not a File"));
                      }
                      fwp = (0, file_1.toFileWithPath)(file, (_a = entry === null || entry === void 0 ? void 0 : entry.fullPath) !== null && _a !== void 0 ? _a : undefined);
                      return [2 /*return*/, fwp];
              }
          });
      });
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
  function fromEntry(entry) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
          });
      });
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
  function fromDirEntry(entry) {
      var reader = entry.createReader();
      return new Promise(function (resolve, reject) {
          var entries = [];
          function readEntries() {
              var _this = this;
              // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
              // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
              reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                  var files, err_1, items;
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0:
                              if (!!batch.length) return [3 /*break*/, 5];
                              _a.label = 1;
                          case 1:
                              _a.trys.push([1, 3, , 4]);
                              return [4 /*yield*/, Promise.all(entries)];
                          case 2:
                              files = _a.sent();
                              resolve(files);
                              return [3 /*break*/, 4];
                          case 3:
                              err_1 = _a.sent();
                              reject(err_1);
                              return [3 /*break*/, 4];
                          case 4: return [3 /*break*/, 6];
                          case 5:
                              items = Promise.all(batch.map(fromEntry));
                              entries.push(items);
                              // Continue reading
                              readEntries();
                              _a.label = 6;
                          case 6: return [2 /*return*/];
                      }
                  });
              }); }, function (err) {
                  reject(err);
              });
          }
          readEntries();
      });
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
  function fromFileEntry(entry) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              return [2 /*return*/, new Promise(function (resolve, reject) {
                      entry.file(function (file) {
                          var fwp = (0, file_1.toFileWithPath)(file, entry.fullPath);
                          resolve(fwp);
                      }, function (err) {
                          reject(err);
                      });
                  })];
          });
      });
  }

  (function (exports) {
  	Object.defineProperty(exports, "__esModule", { value: true });
  	exports.fromEvent = void 0;
  	var file_selector_1 = fileSelector;
  	Object.defineProperty(exports, "fromEvent", { enumerable: true, get: function () { return file_selector_1.fromEvent; } });
  	
  } (dist$1));

  var dist=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:false,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=true,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:true,get:n});},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:true});},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:true,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){r.__esModule=true,r.default=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(",");if(0===t.length)return  true;var n=e.name||"",o=(e.type||"").toLowerCase(),u=o.replace(/\/.*$/,"");return t.some((function(e){var r=e.trim().toLowerCase();return "."===r.charAt(0)?n.toLowerCase().endsWith(r):r.endsWith("/*")?u===r.replace(/\/.*$/,""):o===r}))}return  true};}]);

  var _accepts = /*@__PURE__*/getDefaultExportFromCjs(dist);

  function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

  function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

  function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

  function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
  var accepts = typeof _accepts === "function" ? _accepts : _accepts.default; // Error codes

  var FILE_INVALID_TYPE = "file-invalid-type";
  var FILE_TOO_LARGE = "file-too-large";
  var FILE_TOO_SMALL = "file-too-small";
  var TOO_MANY_FILES = "too-many-files";
  /**
   *
   * @param {string} accept
   */

  var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr() {
    var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var acceptArr = accept.split(",");
    var msg = acceptArr.length > 1 ? "one of ".concat(acceptArr.join(", ")) : acceptArr[0];
    return {
      code: FILE_INVALID_TYPE,
      message: "File type must be ".concat(msg)
    };
  };
  var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
    return {
      code: FILE_TOO_LARGE,
      message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
    };
  };
  var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
    return {
      code: FILE_TOO_SMALL,
      message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
    };
  };
  var TOO_MANY_FILES_REJECTION = {
    code: TOO_MANY_FILES,
    message: "Too many files"
  };
  /**
   * Check if file is accepted.
   *
   * Firefox versions prior to 53 return a bogus MIME type for every file drag,
   * so dragovers with that MIME type will always be accepted.
   *
   * @param {File} file
   * @param {string} accept
   * @returns
   */

  function fileAccepted(file, accept) {
    var isAcceptable = file.type === "application/x-moz-file" || accepts(file, accept);
    return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
  }
  function fileMatchSize(file, minSize, maxSize) {
    if (isDefined(file.size)) {
      if (isDefined(minSize) && isDefined(maxSize)) {
        if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
        if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
      } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
    }

    return [true, null];
  }

  function isDefined(value) {
    return value !== undefined && value !== null;
  }
  /**
   *
   * @param {object} options
   * @param {File[]} options.files
   * @param {string} [options.accept]
   * @param {number} [options.minSize]
   * @param {number} [options.maxSize]
   * @param {boolean} [options.multiple]
   * @param {number} [options.maxFiles]
   * @param {(f: File) => FileError|FileError[]|null} [options.validator]
   * @returns
   */


  function allFilesAccepted(_ref) {
    var files = _ref.files,
        accept = _ref.accept,
        minSize = _ref.minSize,
        maxSize = _ref.maxSize,
        multiple = _ref.multiple,
        maxFiles = _ref.maxFiles,
        validator = _ref.validator;

    if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
      return false;
    }

    return files.every(function (file) {
      var _fileAccepted = fileAccepted(file, accept),
          _fileAccepted2 = _slicedToArray$1(_fileAccepted, 1),
          accepted = _fileAccepted2[0];

      var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
          _fileMatchSize2 = _slicedToArray$1(_fileMatchSize, 1),
          sizeMatch = _fileMatchSize2[0];

      var customErrors = validator ? validator(file) : null;
      return accepted && sizeMatch && !customErrors;
    });
  } // React's synthetic events has event.isPropagationStopped,
  // but to remain compatibility with other libs (Preact) fall back
  // to check event.cancelBubble

  function isPropagationStopped(event) {
    if (typeof event.isPropagationStopped === "function") {
      return event.isPropagationStopped();
    } else if (typeof event.cancelBubble !== "undefined") {
      return event.cancelBubble;
    }

    return false;
  }
  function isEvtWithFiles(event) {
    if (!event.dataTransfer) {
      return !!event.target && !!event.target.files;
    } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


    return Array.prototype.some.call(event.dataTransfer.types, function (type) {
      return type === "Files" || type === "application/x-moz-file";
    });
  }

  function onDocumentDragOver(event) {
    event.preventDefault();
  }

  function isIe(userAgent) {
    return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
  }

  function isEdge(userAgent) {
    return userAgent.indexOf("Edge/") !== -1;
  }

  function isIeOrEdge() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
    return isIe(userAgent) || isEdge(userAgent);
  }
  /**
   * This is intended to be used to compose event handlers
   * They are executed in order until one of them calls `event.isPropagationStopped()`.
   * Note that the check is done on the first invoke too,
   * meaning that if propagation was stopped before invoking the fns,
   * no handlers will be executed.
   *
   * @param {Function} fns the event hanlder functions
   * @return {Function} the event handler to add to an element
   */

  function composeEventHandlers() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return fns.some(function (fn) {
        if (!isPropagationStopped(event) && fn) {
          fn.apply(void 0, [event].concat(args));
        }

        return isPropagationStopped(event);
      });
    };
  }
  /**
   * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
   * is supported by the browser.
   * @returns {boolean}
   */

  function canUseFileSystemAccessAPI() {
    return "showOpenFilePicker" in window;
  }
  /**
   * Convert the `{accept}` dropzone prop to the
   * `{types}` option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
   *
   * @param {AcceptProp} accept
   * @returns {{accept: string[]}[]}
   */

  function pickerOptionsFromAccept(accept) {
    if (isDefined(accept)) {
      var acceptForPicker = Object.entries(accept).filter(function (_ref2) {
        var _ref3 = _slicedToArray$1(_ref2, 2),
            mimeType = _ref3[0],
            ext = _ref3[1];

        var ok = true;

        if (!isMIMEType(mimeType)) {
          console.warn("Skipped \"".concat(mimeType, "\" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types."));
          ok = false;
        }

        if (!Array.isArray(ext) || !ext.every(isExt)) {
          console.warn("Skipped \"".concat(mimeType, "\" because an invalid file extension was provided."));
          ok = false;
        }

        return ok;
      }).reduce(function (agg, _ref4) {
        var _ref5 = _slicedToArray$1(_ref4, 2),
            mimeType = _ref5[0],
            ext = _ref5[1];

        return _objectSpread$1(_objectSpread$1({}, agg), {}, _defineProperty$1({}, mimeType, ext));
      }, {});
      return [{
        // description is required due to https://crbug.com/1264708
        description: "Files",
        accept: acceptForPicker
      }];
    }

    return accept;
  }
  /**
   * Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
   * @param {AcceptProp} accept
   * @returns {string}
   */

  function acceptPropAsAcceptAttr(accept) {
    if (isDefined(accept)) {
      return Object.entries(accept).reduce(function (a, _ref6) {
        var _ref7 = _slicedToArray$1(_ref6, 2),
            mimeType = _ref7[0],
            ext = _ref7[1];

        return [].concat(_toConsumableArray$1(a), [mimeType], _toConsumableArray$1(ext));
      }, []) // Silently discard invalid entries as pickerOptionsFromAccept warns about these
      .filter(function (v) {
        return isMIMEType(v) || isExt(v);
      }).join(",");
    }

    return undefined;
  }
  /**
   * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
   * @param {any} v
   * @returns {boolean} True if v is an abort exception.
   */

  function isAbort(v) {
    return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
  }
  /**
   * Check if v is a security error.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
   * @param {any} v
   * @returns {boolean} True if v is a security error.
   */

  function isSecurityError(v) {
    return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
  }
  /**
   * Check if v is a MIME type string.
   *
   * See accepted format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
   *
   * @param {string} v
   */

  function isMIMEType(v) {
    return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || v === "application/*" || /\w+\/[-+.\w]+/g.test(v);
  }
  /**
   * Check if v is a file extension.
   * @param {string} v
   */

  function isExt(v) {
    return /^.*\.[\w]+$/.test(v);
  }
  /**
   * @typedef {Object.<string, string[]>} AcceptProp
   */

  /**
   * @typedef {object} FileError
   * @property {string} message
   * @property {ErrorCode|string} code
   */

  /**
   * @typedef {"file-invalid-type"|"file-too-large"|"file-too-small"|"too-many-files"} ErrorCode
   */

  var _excluded = ["children"],
      _excluded2 = ["open"],
      _excluded3 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      _excluded4 = ["refKey", "onChange", "onClick"];

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
  /**
   * Convenience wrapper component for the `useDropzone` hook
   *
   * ```jsx
   * <Dropzone>
   *   {({getRootProps, getInputProps}) => (
   *     <div {...getRootProps()}>
   *       <input {...getInputProps()} />
   *       <p>Drag 'n' drop some files here, or click to select files</p>
   *     </div>
   *   )}
   * </Dropzone>
   * ```
   */

  var Dropzone = /*#__PURE__*/React$1.forwardRef(function (_ref, ref) {
    var children = _ref.children,
        params = _objectWithoutProperties(_ref, _excluded);

    var _useDropzone = useDropzone(params),
        open = _useDropzone.open,
        props = _objectWithoutProperties(_useDropzone, _excluded2);

    React$1.useImperativeHandle(ref, function () {
      return {
        open: open
      };
    }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

    return /*#__PURE__*/React__default.default.createElement(React$1.Fragment, null, children(_objectSpread(_objectSpread({}, props), {}, {
      open: open
    })));
  });
  Dropzone.displayName = "Dropzone"; // Add default props for react-docgen

  var defaultProps = {
    disabled: false,
    getFilesFromEvent: dist$1.fromEvent,
    maxSize: Infinity,
    minSize: 0,
    multiple: true,
    maxFiles: 0,
    preventDropOnDocument: true,
    noClick: false,
    noKeyboard: false,
    noDrag: false,
    noDragEventsBubbling: false,
    validator: null,
    useFsAccessApi: false,
    autoFocus: false
  };
  Dropzone.defaultProps = defaultProps;
  Dropzone.propTypes = {
    /**
     * Render function that exposes the dropzone state and prop getter fns
     *
     * @param {object} params
     * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
     * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
     * @param {Function} params.open Open the native file selection dialog
     * @param {boolean} params.isFocused Dropzone area is in focus
     * @param {boolean} params.isFileDialogActive File dialog is opened
     * @param {boolean} params.isDragActive Active drag is in progress
     * @param {boolean} params.isDragAccept Dragged files are accepted
     * @param {boolean} params.isDragReject Some dragged files are rejected
     * @param {File[]} params.acceptedFiles Accepted files
     * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
     */
    children: PropTypes__default.default.func,

    /**
     * Set accepted file types.
     * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
     * Keep in mind that mime type determination is not reliable across platforms. CSV files,
     * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
     * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
     */
    accept: PropTypes__default.default.objectOf(PropTypes__default.default.arrayOf(PropTypes__default.default.string)),

    /**
     * Allow drag 'n' drop (or selection from the file dialog) of multiple files
     */
    multiple: PropTypes__default.default.bool,

    /**
     * If false, allow dropped items to take over the current browser window
     */
    preventDropOnDocument: PropTypes__default.default.bool,

    /**
     * If true, disables click to open the native file selection dialog
     */
    noClick: PropTypes__default.default.bool,

    /**
     * If true, disables SPACE/ENTER to open the native file selection dialog.
     * Note that it also stops tracking the focus state.
     */
    noKeyboard: PropTypes__default.default.bool,

    /**
     * If true, disables drag 'n' drop
     */
    noDrag: PropTypes__default.default.bool,

    /**
     * If true, stops drag event propagation to parents
     */
    noDragEventsBubbling: PropTypes__default.default.bool,

    /**
     * Minimum file size (in bytes)
     */
    minSize: PropTypes__default.default.number,

    /**
     * Maximum file size (in bytes)
     */
    maxSize: PropTypes__default.default.number,

    /**
     * Maximum accepted number of files
     * The default value is 0 which means there is no limitation to how many files are accepted.
     */
    maxFiles: PropTypes__default.default.number,

    /**
     * Enable/disable the dropzone
     */
    disabled: PropTypes__default.default.bool,

    /**
     * Use this to provide a custom file aggregator
     *
     * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
     */
    getFilesFromEvent: PropTypes__default.default.func,

    /**
     * Cb for when closing the file dialog with no selection
     */
    onFileDialogCancel: PropTypes__default.default.func,

    /**
     * Cb for when opening the file dialog
     */
    onFileDialogOpen: PropTypes__default.default.func,

    /**
     * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
     * to open the file picker instead of using an `<input type="file">` click event.
     */
    useFsAccessApi: PropTypes__default.default.bool,

    /**
     * Set to true to focus the root element on render
     */
    autoFocus: PropTypes__default.default.bool,

    /**
     * Cb for when the `dragenter` event occurs.
     *
     * @param {DragEvent} event
     */
    onDragEnter: PropTypes__default.default.func,

    /**
     * Cb for when the `dragleave` event occurs
     *
     * @param {DragEvent} event
     */
    onDragLeave: PropTypes__default.default.func,

    /**
     * Cb for when the `dragover` event occurs
     *
     * @param {DragEvent} event
     */
    onDragOver: PropTypes__default.default.func,

    /**
     * Cb for when the `drop` event occurs.
     * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
     *
     * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
     * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
     * If `multiple` is set to false and additional files are dropped,
     * all files besides the first will be rejected.
     * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
     *
     * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
     * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
     *
     * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
     * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
     *
     * ```js
     * function onDrop(acceptedFiles) {
     *   const req = request.post('/upload')
     *   acceptedFiles.forEach(file => {
     *     req.attach(file.name, file)
     *   })
     *   req.end(callback)
     * }
     * ```
     *
     * @param {File[]} acceptedFiles
     * @param {FileRejection[]} fileRejections
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */
    onDrop: PropTypes__default.default.func,

    /**
     * Cb for when the `drop` event occurs.
     * Note that if no files are accepted, this callback is not invoked.
     *
     * @param {File[]} files
     * @param {(DragEvent|Event)} event
     */
    onDropAccepted: PropTypes__default.default.func,

    /**
     * Cb for when the `drop` event occurs.
     * Note that if no files are rejected, this callback is not invoked.
     *
     * @param {FileRejection[]} fileRejections
     * @param {(DragEvent|Event)} event
     */
    onDropRejected: PropTypes__default.default.func,

    /**
     * Cb for when there's some error from any of the promises.
     *
     * @param {Error} error
     */
    onError: PropTypes__default.default.func,

    /**
     * Custom validation function. It must return null if there's no errors.
     * @param {File} file
     * @returns {FileError|FileError[]|null}
     */
    validator: PropTypes__default.default.func
  };
  /**
   * A function that is invoked for the `dragenter`,
   * `dragover` and `dragleave` events.
   * It is not invoked if the items are not files (such as link, text, etc.).
   *
   * @callback dragCb
   * @param {DragEvent} event
   */

  /**
   * A function that is invoked for the `drop` or input change event.
   * It is not invoked if the items are not files (such as link, text, etc.).
   *
   * @callback dropCb
   * @param {File[]} acceptedFiles List of accepted files
   * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */

  /**
   * A function that is invoked for the `drop` or input change event.
   * It is not invoked if the items are files (such as link, text, etc.).
   *
   * @callback dropAcceptedCb
   * @param {File[]} files List of accepted files that meet the given criteria
   * (`accept`, `multiple`, `minSize`, `maxSize`)
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */

  /**
   * A function that is invoked for the `drop` or input change event.
   *
   * @callback dropRejectedCb
   * @param {File[]} files List of rejected files that do not meet the given criteria
   * (`accept`, `multiple`, `minSize`, `maxSize`)
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */

  /**
   * A function that is used aggregate files,
   * in a asynchronous fashion, from drag or input change events.
   *
   * @callback getFilesFromEvent
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   * @returns {(File[]|Promise<File[]>)}
   */

  /**
   * An object with the current dropzone state.
   *
   * @typedef {object} DropzoneState
   * @property {boolean} isFocused Dropzone area is in focus
   * @property {boolean} isFileDialogActive File dialog is opened
   * @property {boolean} isDragActive Active drag is in progress
   * @property {boolean} isDragAccept Dragged files are accepted
   * @property {boolean} isDragReject Some dragged files are rejected
   * @property {File[]} acceptedFiles Accepted files
   * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
   */

  /**
   * An object with the dropzone methods.
   *
   * @typedef {object} DropzoneMethods
   * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
   * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
   * @property {Function} open Open the native file selection dialog
   */

  var initialState = {
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    acceptedFiles: [],
    fileRejections: []
  };
  /**
   * A React hook that creates a drag 'n' drop area.
   *
   * ```jsx
   * function MyDropzone(props) {
   *   const {getRootProps, getInputProps} = useDropzone({
   *     onDrop: acceptedFiles => {
   *       // do something with the File objects, e.g. upload to some server
   *     }
   *   });
   *   return (
   *     <div {...getRootProps()}>
   *       <input {...getInputProps()} />
   *       <p>Drag and drop some files here, or click to select files</p>
   *     </div>
   *   )
   * }
   * ```
   *
   * @function useDropzone
   *
   * @param {object} props
   * @param {import("./utils").AcceptProp} [props.accept] Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
   * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
   * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
   * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
   * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
   * @param {number} [props.minSize=0] Minimum file size (in bytes)
   * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
   * @param {boolean} [props.disabled=false] Enable/disable the dropzone
   * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
   * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
   * @param {boolean} [props.useFsAccessApi] Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   * @param {boolean} autoFocus Set to true to auto focus the root element.
   * @param {Function} [props.onFileDialogOpen] Cb for when opening the file dialog
   * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
   * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
   * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
   * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be an object with keys as a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) and the value an array of file extensions (optional).
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   * @param {dropAcceptedCb} [props.onDropAccepted]
   * @param {dropRejectedCb} [props.onDropRejected]
   * @param {(error: Error) => void} [props.onError]
   *
   * @returns {DropzoneState & DropzoneMethods}
   */

  function useDropzone() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props),
        accept = _defaultProps$props.accept,
        disabled = _defaultProps$props.disabled,
        getFilesFromEvent = _defaultProps$props.getFilesFromEvent,
        maxSize = _defaultProps$props.maxSize,
        minSize = _defaultProps$props.minSize,
        multiple = _defaultProps$props.multiple,
        maxFiles = _defaultProps$props.maxFiles,
        onDragEnter = _defaultProps$props.onDragEnter,
        onDragLeave = _defaultProps$props.onDragLeave,
        onDragOver = _defaultProps$props.onDragOver,
        onDrop = _defaultProps$props.onDrop,
        onDropAccepted = _defaultProps$props.onDropAccepted,
        onDropRejected = _defaultProps$props.onDropRejected,
        onFileDialogCancel = _defaultProps$props.onFileDialogCancel,
        onFileDialogOpen = _defaultProps$props.onFileDialogOpen,
        useFsAccessApi = _defaultProps$props.useFsAccessApi,
        autoFocus = _defaultProps$props.autoFocus,
        preventDropOnDocument = _defaultProps$props.preventDropOnDocument,
        noClick = _defaultProps$props.noClick,
        noKeyboard = _defaultProps$props.noKeyboard,
        noDrag = _defaultProps$props.noDrag,
        noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling,
        onError = _defaultProps$props.onError,
        validator = _defaultProps$props.validator;

    var acceptAttr = React$1.useMemo(function () {
      return acceptPropAsAcceptAttr(accept);
    }, [accept]);
    var pickerTypes = React$1.useMemo(function () {
      return pickerOptionsFromAccept(accept);
    }, [accept]);
    var onFileDialogOpenCb = React$1.useMemo(function () {
      return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop$1;
    }, [onFileDialogOpen]);
    var onFileDialogCancelCb = React$1.useMemo(function () {
      return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop$1;
    }, [onFileDialogCancel]);
    /**
     * @constant
     * @type {React.MutableRefObject<HTMLElement>}
     */

    var rootRef = React$1.useRef(null);
    var inputRef = React$1.useRef(null);

    var _useReducer = React$1.useReducer(reducer, initialState),
        _useReducer2 = _slicedToArray(_useReducer, 2),
        state = _useReducer2[0],
        dispatch = _useReducer2[1];

    var isFocused = state.isFocused,
        isFileDialogActive = state.isFileDialogActive;
    var fsAccessApiWorksRef = React$1.useRef(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI()); // Update file dialog active state when the window is focused on

    var onWindowFocus = function onWindowFocus() {
      // Execute the timeout only if the file dialog is opened in the browser
      if (!fsAccessApiWorksRef.current && isFileDialogActive) {
        setTimeout(function () {
          if (inputRef.current) {
            var files = inputRef.current.files;

            if (!files.length) {
              dispatch({
                type: "closeDialog"
              });
              onFileDialogCancelCb();
            }
          }
        }, 300);
      }
    };

    React$1.useEffect(function () {
      window.addEventListener("focus", onWindowFocus, false);
      return function () {
        window.removeEventListener("focus", onWindowFocus, false);
      };
    }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
    var dragTargetsRef = React$1.useRef([]);

    var onDocumentDrop = function onDocumentDrop(event) {
      if (rootRef.current && rootRef.current.contains(event.target)) {
        // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
        return;
      }

      event.preventDefault();
      dragTargetsRef.current = [];
    };

    React$1.useEffect(function () {
      if (preventDropOnDocument) {
        document.addEventListener("dragover", onDocumentDragOver, false);
        document.addEventListener("drop", onDocumentDrop, false);
      }

      return function () {
        if (preventDropOnDocument) {
          document.removeEventListener("dragover", onDocumentDragOver);
          document.removeEventListener("drop", onDocumentDrop);
        }
      };
    }, [rootRef, preventDropOnDocument]); // Auto focus the root when autoFocus is true

    React$1.useEffect(function () {
      if (!disabled && autoFocus && rootRef.current) {
        rootRef.current.focus();
      }

      return function () {};
    }, [rootRef, autoFocus, disabled]);
    var onErrCb = React$1.useCallback(function (e) {
      if (onError) {
        onError(e);
      } else {
        // Let the user know something's gone wrong if they haven't provided the onError cb.
        console.error(e);
      }
    }, [onError]);
    var onDragEnterCb = React$1.useCallback(function (event) {
      event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

      event.persist();
      stopPropagation(event);
      dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then(function (files) {
          if (isPropagationStopped(event) && !noDragEventsBubbling) {
            return;
          }

          var fileCount = files.length;
          var isDragAccept = fileCount > 0 && allFilesAccepted({
            files: files,
            accept: acceptAttr,
            minSize: minSize,
            maxSize: maxSize,
            multiple: multiple,
            maxFiles: maxFiles,
            validator: validator
          });
          var isDragReject = fileCount > 0 && !isDragAccept;
          dispatch({
            isDragAccept: isDragAccept,
            isDragReject: isDragReject,
            isDragActive: true,
            type: "setDraggedFiles"
          });

          if (onDragEnter) {
            onDragEnter(event);
          }
        }).catch(function (e) {
          return onErrCb(e);
        });
      }
    }, [getFilesFromEvent, onDragEnter, onErrCb, noDragEventsBubbling, acceptAttr, minSize, maxSize, multiple, maxFiles, validator]);
    var onDragOverCb = React$1.useCallback(function (event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event);
      var hasFiles = isEvtWithFiles(event);

      if (hasFiles && event.dataTransfer) {
        try {
          event.dataTransfer.dropEffect = "copy";
        } catch (_unused) {}
        /* eslint-disable-line no-empty */

      }

      if (hasFiles && onDragOver) {
        onDragOver(event);
      }

      return false;
    }, [onDragOver, noDragEventsBubbling]);
    var onDragLeaveCb = React$1.useCallback(function (event) {
      event.preventDefault();
      event.persist();
      stopPropagation(event); // Only deactivate once the dropzone and all children have been left

      var targets = dragTargetsRef.current.filter(function (target) {
        return rootRef.current && rootRef.current.contains(target);
      }); // Make sure to remove a target present multiple times only once
      // (Firefox may fire dragenter/dragleave multiple times on the same element)

      var targetIdx = targets.indexOf(event.target);

      if (targetIdx !== -1) {
        targets.splice(targetIdx, 1);
      }

      dragTargetsRef.current = targets;

      if (targets.length > 0) {
        return;
      }

      dispatch({
        type: "setDraggedFiles",
        isDragActive: false,
        isDragAccept: false,
        isDragReject: false
      });

      if (isEvtWithFiles(event) && onDragLeave) {
        onDragLeave(event);
      }
    }, [rootRef, onDragLeave, noDragEventsBubbling]);
    var setFiles = React$1.useCallback(function (files, event) {
      var acceptedFiles = [];
      var fileRejections = [];
      files.forEach(function (file) {
        var _fileAccepted = fileAccepted(file, acceptAttr),
            _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
            accepted = _fileAccepted2[0],
            acceptError = _fileAccepted2[1];

        var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
            _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
            sizeMatch = _fileMatchSize2[0],
            sizeError = _fileMatchSize2[1];

        var customErrors = validator ? validator(file) : null;

        if (accepted && sizeMatch && !customErrors) {
          acceptedFiles.push(file);
        } else {
          var errors = [acceptError, sizeError];

          if (customErrors) {
            errors = errors.concat(customErrors);
          }

          fileRejections.push({
            file: file,
            errors: errors.filter(function (e) {
              return e;
            })
          });
        }
      });

      if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
        // Reject everything and empty accepted files
        acceptedFiles.forEach(function (file) {
          fileRejections.push({
            file: file,
            errors: [TOO_MANY_FILES_REJECTION]
          });
        });
        acceptedFiles.splice(0);
      }

      dispatch({
        acceptedFiles: acceptedFiles,
        fileRejections: fileRejections,
        isDragReject: fileRejections.length > 0,
        type: "setFiles"
      });

      if (onDrop) {
        onDrop(acceptedFiles, fileRejections, event);
      }

      if (fileRejections.length > 0 && onDropRejected) {
        onDropRejected(fileRejections, event);
      }

      if (acceptedFiles.length > 0 && onDropAccepted) {
        onDropAccepted(acceptedFiles, event);
      }
    }, [dispatch, multiple, acceptAttr, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
    var onDropCb = React$1.useCallback(function (event) {
      event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

      event.persist();
      stopPropagation(event);
      dragTargetsRef.current = [];

      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then(function (files) {
          if (isPropagationStopped(event) && !noDragEventsBubbling) {
            return;
          }

          setFiles(files, event);
        }).catch(function (e) {
          return onErrCb(e);
        });
      }

      dispatch({
        type: "reset"
      });
    }, [getFilesFromEvent, setFiles, onErrCb, noDragEventsBubbling]); // Fn for opening the file dialog programmatically

    var openFileDialog = React$1.useCallback(function () {
      // No point to use FS access APIs if context is not secure
      // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
      if (fsAccessApiWorksRef.current) {
        dispatch({
          type: "openDialog"
        });
        onFileDialogOpenCb(); // https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker

        var opts = {
          multiple: multiple,
          types: pickerTypes
        };
        window.showOpenFilePicker(opts).then(function (handles) {
          return getFilesFromEvent(handles);
        }).then(function (files) {
          setFiles(files, null);
          dispatch({
            type: "closeDialog"
          });
        }).catch(function (e) {
          // AbortError means the user canceled
          if (isAbort(e)) {
            onFileDialogCancelCb(e);
            dispatch({
              type: "closeDialog"
            });
          } else if (isSecurityError(e)) {
            fsAccessApiWorksRef.current = false; // CORS, so cannot use this API
            // Try using the input

            if (inputRef.current) {
              inputRef.current.value = null;
              inputRef.current.click();
            } else {
              onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
            }
          } else {
            onErrCb(e);
          }
        });
        return;
      }

      if (inputRef.current) {
        dispatch({
          type: "openDialog"
        });
        onFileDialogOpenCb();
        inputRef.current.value = null;
        inputRef.current.click();
      }
    }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, onErrCb, pickerTypes, multiple]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

    var onKeyDownCb = React$1.useCallback(function (event) {
      // Ignore keyboard events bubbling up the DOM tree
      if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
        return;
      }

      if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault();
        openFileDialog();
      }
    }, [rootRef, openFileDialog]); // Update focus state for the dropzone

    var onFocusCb = React$1.useCallback(function () {
      dispatch({
        type: "focus"
      });
    }, []);
    var onBlurCb = React$1.useCallback(function () {
      dispatch({
        type: "blur"
      });
    }, []); // Cb to open the file dialog when click occurs on the dropzone

    var onClickCb = React$1.useCallback(function () {
      if (noClick) {
        return;
      } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
      // to ensure React can handle state changes
      // See: https://github.com/react-dropzone/react-dropzone/issues/450


      if (isIeOrEdge()) {
        setTimeout(openFileDialog, 0);
      } else {
        openFileDialog();
      }
    }, [noClick, openFileDialog]);

    var composeHandler = function composeHandler(fn) {
      return disabled ? null : fn;
    };

    var composeKeyboardHandler = function composeKeyboardHandler(fn) {
      return noKeyboard ? null : composeHandler(fn);
    };

    var composeDragHandler = function composeDragHandler(fn) {
      return noDrag ? null : composeHandler(fn);
    };

    var stopPropagation = function stopPropagation(event) {
      if (noDragEventsBubbling) {
        event.stopPropagation();
      }
    };

    var getRootProps = React$1.useMemo(function () {
      return function () {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$refKey = _ref2.refKey,
            refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey,
            role = _ref2.role,
            onKeyDown = _ref2.onKeyDown,
            onFocus = _ref2.onFocus,
            onBlur = _ref2.onBlur,
            onClick = _ref2.onClick,
            onDragEnter = _ref2.onDragEnter,
            onDragOver = _ref2.onDragOver,
            onDragLeave = _ref2.onDragLeave,
            onDrop = _ref2.onDrop,
            rest = _objectWithoutProperties(_ref2, _excluded3);

        return _objectSpread(_objectSpread(_defineProperty({
          onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
          onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
          onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
          onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
          onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
          onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
          onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
          onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb)),
          role: typeof role === "string" && role !== "" ? role : "presentation"
        }, refKey, rootRef), !disabled && !noKeyboard ? {
          tabIndex: 0
        } : {}), rest);
      };
    }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
    var onInputElementClick = React$1.useCallback(function (event) {
      event.stopPropagation();
    }, []);
    var getInputProps = React$1.useMemo(function () {
      return function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref3$refKey = _ref3.refKey,
            refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey,
            onChange = _ref3.onChange,
            onClick = _ref3.onClick,
            rest = _objectWithoutProperties(_ref3, _excluded4);

        var inputProps = _defineProperty({
          accept: acceptAttr,
          multiple: multiple,
          type: "file",
          style: {
            border: 0,
            clip: "rect(0, 0, 0, 0)",
            clipPath: "inset(50%)",
            height: "1px",
            margin: "0 -1px -1px 0",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            width: "1px",
            whiteSpace: "nowrap"
          },
          onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
          onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
          tabIndex: -1
        }, refKey, inputRef);

        return _objectSpread(_objectSpread({}, inputProps), rest);
      };
    }, [inputRef, accept, multiple, onDropCb, disabled]);
    return _objectSpread(_objectSpread({}, state), {}, {
      isFocused: isFocused && !disabled,
      getRootProps: getRootProps,
      getInputProps: getInputProps,
      rootRef: rootRef,
      inputRef: inputRef,
      open: composeHandler(openFileDialog)
    });
  }
  /**
   * @param {DropzoneState} state
   * @param {{type: string} & DropzoneState} action
   * @returns {DropzoneState}
   */

  function reducer(state, action) {
    /* istanbul ignore next */
    switch (action.type) {
      case "focus":
        return _objectSpread(_objectSpread({}, state), {}, {
          isFocused: true
        });

      case "blur":
        return _objectSpread(_objectSpread({}, state), {}, {
          isFocused: false
        });

      case "openDialog":
        return _objectSpread(_objectSpread({}, initialState), {}, {
          isFileDialogActive: true
        });

      case "closeDialog":
        return _objectSpread(_objectSpread({}, state), {}, {
          isFileDialogActive: false
        });

      case "setDraggedFiles":
        return _objectSpread(_objectSpread({}, state), {}, {
          isDragActive: action.isDragActive,
          isDragAccept: action.isDragAccept,
          isDragReject: action.isDragReject
        });

      case "setFiles":
        return _objectSpread(_objectSpread({}, state), {}, {
          acceptedFiles: action.acceptedFiles,
          fileRejections: action.fileRejections,
          isDragReject: action.isDragReject
        });

      case "reset":
        return _objectSpread({}, initialState);

      default:
        return state;
    }
  }

  function noop$1() {}

  function bind(fn, thisArg) {
    return function wrap() {
      return fn.apply(thisArg, arguments);
    };
  }

  // utils is a library of generic helper functions non-specific to axios

  const {toString} = Object.prototype;
  const {getPrototypeOf} = Object;
  const {iterator, toStringTag} = Symbol;

  const kindOf = (cache => thing => {
      const str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(Object.create(null));

  const kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type
  };

  const typeOfTest = type => thing => typeof thing === type;

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   *
   * @returns {boolean} True if value is an Array, otherwise false
   */
  const {isArray} = Array;

  /**
   * Determine if a value is undefined
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  const isUndefined = typeOfTest('undefined');

  /**
   * Determine if a value is a Buffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
      && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  const isArrayBuffer = kindOfTest('ArrayBuffer');


  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    let result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a String, otherwise false
   */
  const isString = typeOfTest('string');

  /**
   * Determine if a value is a Function
   *
   * @param {*} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  const isFunction = typeOfTest('function');

  /**
   * Determine if a value is a Number
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Number, otherwise false
   */
  const isNumber = typeOfTest('number');

  /**
   * Determine if a value is an Object
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an Object, otherwise false
   */
  const isObject = (thing) => thing !== null && typeof thing === 'object';

  /**
   * Determine if a value is a Boolean
   *
   * @param {*} thing The value to test
   * @returns {boolean} True if value is a Boolean, otherwise false
   */
  const isBoolean = thing => thing === true || thing === false;

  /**
   * Determine if a value is a plain Object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a plain Object, otherwise false
   */
  const isPlainObject = (val) => {
    if (kindOf(val) !== 'object') {
      return false;
    }

    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
  };

  /**
   * Determine if a value is a Date
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Date, otherwise false
   */
  const isDate = kindOfTest('Date');

  /**
   * Determine if a value is a File
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  const isFile = kindOfTest('File');

  /**
   * Determine if a value is a Blob
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  const isBlob = kindOfTest('Blob');

  /**
   * Determine if a value is a FileList
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a File, otherwise false
   */
  const isFileList = kindOfTest('FileList');

  /**
   * Determine if a value is a Stream
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  const isStream = (val) => isObject(val) && isFunction(val.pipe);

  /**
   * Determine if a value is a FormData
   *
   * @param {*} thing The value to test
   *
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  const isFormData = (thing) => {
    let kind;
    return thing && (
      (typeof FormData === 'function' && thing instanceof FormData) || (
        isFunction(thing.append) && (
          (kind = kindOf(thing)) === 'formdata' ||
          // detect form-data instance
          (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
        )
      )
    )
  };

  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  const isURLSearchParams = kindOfTest('URLSearchParams');

  const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   *
   * @returns {String} The String freed of excess whitespace
   */
  const trim = (str) => str.trim ?
    str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   *
   * @param {Boolean} [allOwnKeys = false]
   * @returns {any}
   */
  function forEach(obj, fn, {allOwnKeys = false} = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }

    let i;
    let l;

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }

    if (isArray(obj)) {
      // Iterate over array values
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;

      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }

  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }

  const _global = (() => {
    /*eslint no-undef:0*/
    if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
  })();

  const isContextDefined = (context) => !isUndefined(context) && context !== _global;

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   *
   * @returns {Object} Result of all merge properties
   */
  function merge(/* obj1, obj2, obj3, ... */) {
    const {caseless} = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };

    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   *
   * @param {Boolean} [allOwnKeys]
   * @returns {Object} The resulting value of object a
   */
  const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, {allOwnKeys});
    return a;
  };

  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   *
   * @returns {string} content value without BOM
   */
  const stripBOM = (content) => {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  };

  /**
   * Inherit the prototype methods from one constructor into another
   * @param {function} constructor
   * @param {function} superConstructor
   * @param {object} [props]
   * @param {object} [descriptors]
   *
   * @returns {void}
   */
  const inherits = (constructor, superConstructor, props, descriptors) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };

  /**
   * Resolve object with deep prototype chain to a flat object
   * @param {Object} sourceObj source object
   * @param {Object} [destObj]
   * @param {Function|Boolean} [filter]
   * @param {Function} [propFilter]
   *
   * @returns {Object}
   */
  const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};

    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;

    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

    return destObj;
  };

  /**
   * Determines whether a string ends with the characters of a specified string
   *
   * @param {String} str
   * @param {String} searchString
   * @param {Number} [position= 0]
   *
   * @returns {boolean}
   */
  const endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === undefined || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };


  /**
   * Returns new array from array like object or null if failed
   *
   * @param {*} [thing]
   *
   * @returns {?Array}
   */
  const toArray = (thing) => {
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };

  /**
   * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
   * thing passed in is an instance of Uint8Array
   *
   * @param {TypedArray}
   *
   * @returns {Array}
   */
  // eslint-disable-next-line func-names
  const isTypedArray = (TypedArray => {
    // eslint-disable-next-line func-names
    return thing => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

  /**
   * For each entry in the object, call the function with the key and value.
   *
   * @param {Object<any, any>} obj - The object to iterate over.
   * @param {Function} fn - The function to call for each entry.
   *
   * @returns {void}
   */
  const forEachEntry = (obj, fn) => {
    const generator = obj && obj[iterator];

    const _iterator = generator.call(obj);

    let result;

    while ((result = _iterator.next()) && !result.done) {
      const pair = result.value;
      fn.call(obj, pair[0], pair[1]);
    }
  };

  /**
   * It takes a regular expression and a string, and returns an array of all the matches
   *
   * @param {string} regExp - The regular expression to match against.
   * @param {string} str - The string to search.
   *
   * @returns {Array<boolean>}
   */
  const matchAll = (regExp, str) => {
    let matches;
    const arr = [];

    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }

    return arr;
  };

  /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
  const isHTMLForm = kindOfTest('HTMLFormElement');

  const toCamelCase = str => {
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };

  /* Creating a function that will check if an object has a property. */
  const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

  /**
   * Determine if a value is a RegExp object
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a RegExp object, otherwise false
   */
  const isRegExp = kindOfTest('RegExp');

  const reduceDescriptors = (obj, reducer) => {
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};

    forEach(descriptors, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });

    Object.defineProperties(obj, reducedDescriptors);
  };

  /**
   * Makes all methods read-only
   * @param {Object} obj
   */

  const freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      // skip restricted props in strict mode
      if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
        return false;
      }

      const value = obj[name];

      if (!isFunction(value)) return;

      descriptor.enumerable = false;

      if ('writable' in descriptor) {
        descriptor.writable = false;
        return;
      }

      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error('Can not rewrite read-only method \'' + name + '\'');
        };
      }
    });
  };

  const toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};

    const define = (arr) => {
      arr.forEach(value => {
        obj[value] = true;
      });
    };

    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

    return obj;
  };

  const noop = () => {};

  const toFiniteNumber = (value, defaultValue) => {
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
  };

  /**
   * If the thing is a FormData object, return true, otherwise return false.
   *
   * @param {unknown} thing - The thing to check.
   *
   * @returns {boolean}
   */
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
  }

  const toJSONObject = (obj) => {
    const stack = new Array(10);

    const visit = (source, i) => {

      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }

        if(!('toJSON' in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};

          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });

          stack[i] = undefined;

          return target;
        }
      }

      return source;
    };

    return visit(obj, 0);
  };

  const isAsyncFn = kindOfTest('AsyncFunction');

  const isThenable = (thing) =>
    thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

  // original code
  // https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

  const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
    if (setImmediateSupported) {
      return setImmediate;
    }

    return postMessageSupported ? ((token, callbacks) => {
      _global.addEventListener("message", ({source, data}) => {
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      }, false);

      return (cb) => {
        callbacks.push(cb);
        _global.postMessage(token, "*");
      }
    })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
  })(
    typeof setImmediate === 'function',
    isFunction(_global.postMessage)
  );

  const asap = typeof queueMicrotask !== 'undefined' ?
    queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

  // *********************


  const isIterable = (thing) => thing != null && isFunction(thing[iterator]);


  var utils$1 = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap,
    isIterable
  };

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  function AxiosError$1(message, code, config, request, response) {
    Error.call(this);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error()).stack;
    }

    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status ? response.status : null;
    }
  }

  utils$1.inherits(AxiosError$1, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils$1.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });

  const prototype$1 = AxiosError$1.prototype;
  const descriptors = {};

  [
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL'
  // eslint-disable-next-line func-names
  ].forEach(code => {
    descriptors[code] = {value: code};
  });

  Object.defineProperties(AxiosError$1, descriptors);
  Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

  // eslint-disable-next-line func-names
  AxiosError$1.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype$1);

    utils$1.toFlatObject(error, axiosError, function filter(obj) {
      return obj !== Error.prototype;
    }, prop => {
      return prop !== 'isAxiosError';
    });

    AxiosError$1.call(axiosError, error.message, code, config, request, response);

    axiosError.cause = error;

    axiosError.name = error.name;

    customProps && Object.assign(axiosError, customProps);

    return axiosError;
  };

  // eslint-disable-next-line strict
  var httpAdapter = null;

  /**
   * Determines if the given thing is a array or js object.
   *
   * @param {string} thing - The object or array to be visited.
   *
   * @returns {boolean}
   */
  function isVisitable(thing) {
    return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
  }

  /**
   * It removes the brackets from the end of a string
   *
   * @param {string} key - The key of the parameter.
   *
   * @returns {string} the key without the brackets.
   */
  function removeBrackets(key) {
    return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
  }

  /**
   * It takes a path, a key, and a boolean, and returns a string
   *
   * @param {string} path - The path to the current key.
   * @param {string} key - The key of the current object being iterated over.
   * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
   *
   * @returns {string} The path to the current key.
   */
  function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
      // eslint-disable-next-line no-param-reassign
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
  }

  /**
   * If the array is an array and none of its elements are visitable, then it's a flat array.
   *
   * @param {Array<any>} arr - The array to check
   *
   * @returns {boolean}
   */
  function isFlatArray(arr) {
    return utils$1.isArray(arr) && !arr.some(isVisitable);
  }

  const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });

  /**
   * Convert a data object to FormData
   *
   * @param {Object} obj
   * @param {?Object} [formData]
   * @param {?Object} [options]
   * @param {Function} [options.visitor]
   * @param {Boolean} [options.metaTokens = true]
   * @param {Boolean} [options.dots = false]
   * @param {?Boolean} [options.indexes = false]
   *
   * @returns {Object}
   **/

  /**
   * It converts an object into a FormData object
   *
   * @param {Object<any, any>} obj - The object to convert to form data.
   * @param {string} formData - The FormData object to append to.
   * @param {Object<string, any>} options
   *
   * @returns
   */
  function toFormData$1(obj, formData, options) {
    if (!utils$1.isObject(obj)) {
      throw new TypeError('target must be an object');
    }

    // eslint-disable-next-line no-param-reassign
    formData = formData || new (FormData)();

    // eslint-disable-next-line no-param-reassign
    options = utils$1.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      return !utils$1.isUndefined(source[option]);
    });

    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

    if (!utils$1.isFunction(visitor)) {
      throw new TypeError('visitor must be a function');
    }

    function convertValue(value) {
      if (value === null) return '';

      if (utils$1.isDate(value)) {
        return value.toISOString();
      }

      if (utils$1.isBoolean(value)) {
        return value.toString();
      }

      if (!useBlob && utils$1.isBlob(value)) {
        throw new AxiosError$1('Blob is not supported. Use a Buffer instead.');
      }

      if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
        return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
      }

      return value;
    }

    /**
     * Default visitor.
     *
     * @param {*} value
     * @param {String|Number} key
     * @param {Array<String|Number>} path
     * @this {FormData}
     *
     * @returns {boolean} return true to visit the each prop of the value recursively
     */
    function defaultVisitor(value, key, path) {
      let arr = value;

      if (value && !path && typeof value === 'object') {
        if (utils$1.endsWith(key, '{}')) {
          // eslint-disable-next-line no-param-reassign
          key = metaTokens ? key : key.slice(0, -2);
          // eslint-disable-next-line no-param-reassign
          value = JSON.stringify(value);
        } else if (
          (utils$1.isArray(value) && isFlatArray(value)) ||
          ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
          )) {
          // eslint-disable-next-line no-param-reassign
          key = removeBrackets(key);

          arr.forEach(function each(el, index) {
            !(utils$1.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
              convertValue(el)
            );
          });
          return false;
        }
      }

      if (isVisitable(value)) {
        return true;
      }

      formData.append(renderKey(path, key, dots), convertValue(value));

      return false;
    }

    const stack = [];

    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });

    function build(value, path) {
      if (utils$1.isUndefined(value)) return;

      if (stack.indexOf(value) !== -1) {
        throw Error('Circular reference detected in ' + path.join('.'));
      }

      stack.push(value);

      utils$1.forEach(value, function each(el, key) {
        const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
          formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
        );

        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });

      stack.pop();
    }

    if (!utils$1.isObject(obj)) {
      throw new TypeError('data must be an object');
    }

    build(obj);

    return formData;
  }

  /**
   * It encodes a string by replacing all characters that are not in the unreserved set with
   * their percent-encoded equivalents
   *
   * @param {string} str - The string to encode.
   *
   * @returns {string} The encoded string.
   */
  function encode$1(str) {
    const charMap = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }

  /**
   * It takes a params object and converts it to a FormData object
   *
   * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
   * @param {Object<string, any>} options - The options object passed to the Axios constructor.
   *
   * @returns {void}
   */
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];

    params && toFormData$1(params, this, options);
  }

  const prototype = AxiosURLSearchParams.prototype;

  prototype.append = function append(name, value) {
    this._pairs.push([name, value]);
  };

  prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode$1);
    } : encode$1;

    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
  };

  /**
   * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
   * URI encoded counterparts
   *
   * @param {string} val The value to be encoded.
   *
   * @returns {string} The encoded value.
   */
  function encode(val) {
    return encodeURIComponent(val).
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @param {?(object|Function)} options
   *
   * @returns {string} The formatted url
   */
  function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
    
    const _encode = options && options.encode || encode;

    if (utils$1.isFunction(options)) {
      options = {
        serialize: options
      };
    } 

    const serializeFn = options && options.serialize;

    let serializedParams;

    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils$1.isURLSearchParams(params) ?
        params.toString() :
        new AxiosURLSearchParams(params, options).toString(_encode);
    }

    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");

      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  }

  class InterceptorManager {
    constructor() {
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }

    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn) {
      utils$1.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  }

  var transitionalDefaults = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

  var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

  var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

  var platform$1 = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams$1,
      FormData: FormData$1,
      Blob: Blob$1
    },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  };

  const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

  const _navigator = typeof navigator === 'object' && navigator || undefined;

  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   *
   * @returns {boolean}
   */
  const hasStandardBrowserEnv = hasBrowserEnv &&
    (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

  /**
   * Determine if we're running in a standard browser webWorker environment
   *
   * Although the `isStandardBrowserEnv` method indicates that
   * `allows axios to run in a web worker`, the WebWorker will still be
   * filtered out due to its judgment standard
   * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
   * This leads to a problem when axios post `FormData` in webWorker
   */
  const hasStandardBrowserWebWorkerEnv = (() => {
    return (
      typeof WorkerGlobalScope !== 'undefined' &&
      // eslint-disable-next-line no-undef
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts === 'function'
    );
  })();

  const origin = hasBrowserEnv && window.location.href || 'http://localhost';

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hasBrowserEnv: hasBrowserEnv,
    hasStandardBrowserEnv: hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
    navigator: _navigator,
    origin: origin
  });

  var platform = {
    ...utils,
    ...platform$1
  };

  function toURLEncodedForm(data, options) {
    return toFormData$1(data, new platform.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform.isNode && utils$1.isBuffer(value)) {
          this.append(key, value.toString('base64'));
          return false;
        }

        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  /**
   * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
   *
   * @param {string} name - The name of the property to get.
   *
   * @returns An array of strings.
   */
  function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
      return match[0] === '[]' ? '' : match[1] || match[0];
    });
  }

  /**
   * Convert an array to an object.
   *
   * @param {Array<any>} arr - The array to convert to an object.
   *
   * @returns An object with the same keys and values as the array.
   */
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }

  /**
   * It takes a FormData object and returns a JavaScript object
   *
   * @param {string} formData The FormData object to convert to JSON.
   *
   * @returns {Object<string, any> | null} The converted object.
   */
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];

      if (name === '__proto__') return true;

      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils$1.isArray(target) ? target.length : name;

      if (isLast) {
        if (utils$1.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }

        return !isNumericKey;
      }

      if (!target[name] || !utils$1.isObject(target[name])) {
        target[name] = [];
      }

      const result = buildPath(path, value, target[name], index);

      if (result && utils$1.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }

      return !isNumericKey;
    }

    if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
      const obj = {};

      utils$1.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });

      return obj;
    }

    return null;
  }

  /**
   * It takes a string, tries to parse it, and if it fails, it returns the stringified version
   * of the input
   *
   * @param {any} rawValue - The value to be stringified.
   * @param {Function} parser - A function that parses a string into a JavaScript object.
   * @param {Function} encoder - A function that takes a value and returns a string.
   *
   * @returns {string} A stringified version of the rawValue.
   */
  function stringifySafely(rawValue, parser, encoder) {
    if (utils$1.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$1.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }

    return (encoder || JSON.stringify)(rawValue);
  }

  const defaults = {

    transitional: transitionalDefaults,

    adapter: ['xhr', 'http', 'fetch'],

    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || '';
      const hasJSONContentType = contentType.indexOf('application/json') > -1;
      const isObjectPayload = utils$1.isObject(data);

      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }

      const isFormData = utils$1.isFormData(data);

      if (isFormData) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }

      if (utils$1.isArrayBuffer(data) ||
        utils$1.isBuffer(data) ||
        utils$1.isStream(data) ||
        utils$1.isFile(data) ||
        utils$1.isBlob(data) ||
        utils$1.isReadableStream(data)
      ) {
        return data;
      }
      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$1.isURLSearchParams(data)) {
        headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
        return data.toString();
      }

      let isFileList;

      if (isObjectPayload) {
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }

        if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
          const _FormData = this.env && this.env.FormData;

          return toFormData$1(
            isFileList ? {'files[]': data} : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }

      if (isObjectPayload || hasJSONContentType ) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }

      return data;
    }],

    transformResponse: [function transformResponse(data) {
      const transitional = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const JSONRequested = this.responseType === 'json';

      if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
        return data;
      }

      if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;

        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }

      return data;
    }],

    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    maxContentLength: -1,
    maxBodyLength: -1,

    env: {
      FormData: platform.classes.FormData,
      Blob: platform.classes.Blob
    },

    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },

    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': undefined
      }
    }
  };

  utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
    defaults.headers[method] = {};
  });

  // RawAxiosHeaders whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  const ignoreDuplicateOf = utils$1.toObjectSet([
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
  ]);

  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} rawHeaders Headers needing to be parsed
   *
   * @returns {Object} Headers parsed into an object
   */
  var parseHeaders = rawHeaders => {
    const parsed = {};
    let key;
    let val;
    let i;

    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();

      if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
        return;
      }

      if (key === 'set-cookie') {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    });

    return parsed;
  };

  const $internals = Symbol('internals');

  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }

  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }

    return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
  }

  function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;

    while ((match = tokensRE.exec(str))) {
      tokens[match[1]] = match[2];
    }

    return tokens;
  }

  const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

  function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (utils$1.isFunction(filter)) {
      return filter.call(this, value, header);
    }

    if (isHeaderNameFilter) {
      value = header;
    }

    if (!utils$1.isString(value)) return;

    if (utils$1.isString(filter)) {
      return value.indexOf(filter) !== -1;
    }

    if (utils$1.isRegExp(filter)) {
      return filter.test(value);
    }
  }

  function formatHeader(header) {
    return header.trim()
      .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
        return char.toUpperCase() + str;
      });
  }

  function buildAccessors(obj, header) {
    const accessorName = utils$1.toCamelCase(' ' + header);

    ['get', 'set', 'has'].forEach(methodName => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }

  let AxiosHeaders$1 = class AxiosHeaders {
    constructor(headers) {
      headers && this.set(headers);
    }

    set(header, valueOrRewrite, rewrite) {
      const self = this;

      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);

        if (!lHeader) {
          throw new Error('header name must be a non-empty string');
        }

        const key = utils$1.findKey(self, lHeader);

        if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
          self[key || _header] = normalizeValue(_value);
        }
      }

      const setHeaders = (headers, _rewrite) =>
        utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

      if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
        let obj = {}, dest, key;
        for (const entry of header) {
          if (!utils$1.isArray(entry)) {
            throw TypeError('Object iterator must return a key-value pair');
          }

          obj[key = entry[0]] = (dest = obj[key]) ?
            (utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]]) : entry[1];
        }

        setHeaders(obj, valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }

      return this;
    }

    get(header, parser) {
      header = normalizeHeader(header);

      if (header) {
        const key = utils$1.findKey(this, header);

        if (key) {
          const value = this[key];

          if (!parser) {
            return value;
          }

          if (parser === true) {
            return parseTokens(value);
          }

          if (utils$1.isFunction(parser)) {
            return parser.call(this, value, key);
          }

          if (utils$1.isRegExp(parser)) {
            return parser.exec(value);
          }

          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }

    has(header, matcher) {
      header = normalizeHeader(header);

      if (header) {
        const key = utils$1.findKey(this, header);

        return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }

      return false;
    }

    delete(header, matcher) {
      const self = this;
      let deleted = false;

      function deleteHeader(_header) {
        _header = normalizeHeader(_header);

        if (_header) {
          const key = utils$1.findKey(self, _header);

          if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
            delete self[key];

            deleted = true;
          }
        }
      }

      if (utils$1.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }

      return deleted;
    }

    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;

      while (i--) {
        const key = keys[i];
        if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }

      return deleted;
    }

    normalize(format) {
      const self = this;
      const headers = {};

      utils$1.forEach(this, (value, header) => {
        const key = utils$1.findKey(headers, header);

        if (key) {
          self[key] = normalizeValue(value);
          delete self[header];
          return;
        }

        const normalized = format ? formatHeader(header) : String(header).trim();

        if (normalized !== header) {
          delete self[header];
        }

        self[normalized] = normalizeValue(value);

        headers[normalized] = true;
      });

      return this;
    }

    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }

    toJSON(asStrings) {
      const obj = Object.create(null);

      utils$1.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
      });

      return obj;
    }

    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }

    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
    }

    getSetCookie() {
      return this.get("set-cookie") || [];
    }

    get [Symbol.toStringTag]() {
      return 'AxiosHeaders';
    }

    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }

    static concat(first, ...targets) {
      const computed = new this(first);

      targets.forEach((target) => computed.set(target));

      return computed;
    }

    static accessor(header) {
      const internals = this[$internals] = (this[$internals] = {
        accessors: {}
      });

      const accessors = internals.accessors;
      const prototype = this.prototype;

      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);

        if (!accessors[lHeader]) {
          buildAccessors(prototype, _header);
          accessors[lHeader] = true;
        }
      }

      utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

      return this;
    }
  };

  AxiosHeaders$1.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

  // reserved names hotfix
  utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({value}, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    }
  });

  utils$1.freezeMethods(AxiosHeaders$1);

  /**
   * Transform the data for a request or a response
   *
   * @param {Array|Function} fns A single function or Array of functions
   * @param {?Object} response The response object
   *
   * @returns {*} The resulting transformed data
   */
  function transformData(fns, response) {
    const config = this || defaults;
    const context = response || config;
    const headers = AxiosHeaders$1.from(context.headers);
    let data = context.data;

    utils$1.forEach(fns, function transform(fn) {
      data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });

    headers.normalize();

    return data;
  }

  function isCancel$1(value) {
    return !!(value && value.__CANCEL__);
  }

  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  function CanceledError$1(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    AxiosError$1.call(this, message == null ? 'canceled' : message, AxiosError$1.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
  }

  utils$1.inherits(CanceledError$1, AxiosError$1, {
    __CANCEL__: true
  });

  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   *
   * @returns {object} The response.
   */
  function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError$1(
        'Request failed with status code ' + response.status,
        [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
  }

  /**
   * Calculate data maxRate
   * @param {Number} [samplesCount= 10]
   * @param {Number} [min= 1000]
   * @returns {Function}
   */
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;

    min = min !== undefined ? min : 1000;

    return function push(chunkLength) {
      const now = Date.now();

      const startedAt = timestamps[tail];

      if (!firstSampleTS) {
        firstSampleTS = now;
      }

      bytes[head] = chunkLength;
      timestamps[head] = now;

      let i = tail;
      let bytesCount = 0;

      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }

      head = (head + 1) % samplesCount;

      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }

      if (now - firstSampleTS < min) {
        return;
      }

      const passed = startedAt && now - startedAt;

      return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
  }

  /**
   * Throttle decorator
   * @param {Function} fn
   * @param {Number} freq
   * @return {Function}
   */
  function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;

    const invoke = (args, now = Date.now()) => {
      timestamp = now;
      lastArgs = null;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(null, args);
    };

    const throttled = (...args) => {
      const now = Date.now();
      const passed = now - timestamp;
      if ( passed >= threshold) {
        invoke(args, now);
      } else {
        lastArgs = args;
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            invoke(lastArgs);
          }, threshold - passed);
        }
      }
    };

    const flush = () => lastArgs && invoke(lastArgs);

    return [throttled, flush];
  }

  const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
    let bytesNotified = 0;
    const _speedometer = speedometer(50, 250);

    return throttle(e => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : undefined;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;

      bytesNotified = loaded;

      const data = {
        loaded,
        total,
        progress: total ? (loaded / total) : undefined,
        bytes: progressBytes,
        rate: rate ? rate : undefined,
        estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
        event: e,
        lengthComputable: total != null,
        [isDownloadStream ? 'download' : 'upload']: true
      };

      listener(data);
    }, freq);
  };

  const progressEventDecorator = (total, throttled) => {
    const lengthComputable = total != null;

    return [(loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }), throttled[1]];
  };

  const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));

  var isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
    url = new URL(url, platform.origin);

    return (
      origin.protocol === url.protocol &&
      origin.host === url.host &&
      (isMSIE || origin.port === url.port)
    );
  })(
    new URL(platform.origin),
    platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
  ) : () => true;

  var cookies = platform.hasStandardBrowserEnv ?

    // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure) {
        const cookie = [name + '=' + encodeURIComponent(value)];

        utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

        utils$1.isString(path) && cookie.push('path=' + path);

        utils$1.isString(domain) && cookie.push('domain=' + domain);

        secure === true && cookie.push('secure');

        document.cookie = cookie.join('; ');
      },

      read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    }

    :

    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {},
      read() {
        return null;
      },
      remove() {}
    };

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   *
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   *
   * @returns {string} The combined URL
   */
  function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  }

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   *
   * @returns {string} The combined full path
   */
  function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !isAbsoluteURL(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   *
   * @returns {Object} New object resulting from merging config2 to config1
   */
  function mergeConfig$1(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};

    function getMergedValue(target, source, prop, caseless) {
      if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
        return utils$1.merge.call({caseless}, target, source);
      } else if (utils$1.isPlainObject(source)) {
        return utils$1.merge({}, source);
      } else if (utils$1.isArray(source)) {
        return source.slice();
      }
      return source;
    }

    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, prop , caseless) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(a, b, prop , caseless);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(undefined, a, prop , caseless);
      }
    }

    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(undefined, b);
      }
    }

    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
      if (!utils$1.isUndefined(b)) {
        return getMergedValue(undefined, b);
      } else if (!utils$1.isUndefined(a)) {
        return getMergedValue(undefined, a);
      }
    }

    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(undefined, a);
      }
    }

    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
    };

    utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge(config1[prop], config2[prop], prop);
      (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
    });

    return config;
  }

  var resolveConfig = (config) => {
    const newConfig = mergeConfig$1({}, config);

    let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

    newConfig.headers = headers = AxiosHeaders$1.from(headers);

    newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);

    // HTTP basic authentication
    if (auth) {
      headers.set('Authorization', 'Basic ' +
        btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
      );
    }

    let contentType;

    if (utils$1.isFormData(data)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        headers.setContentType(undefined); // Let the browser set it
      } else if ((contentType = headers.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.

    if (platform.hasStandardBrowserEnv) {
      withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

      if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
        // Add xsrf header
        const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

        if (xsrfValue) {
          headers.set(xsrfHeaderName, xsrfValue);
        }
      }
    }

    return newConfig;
  };

  const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

  var xhrAdapter = isXHRAdapterSupported && function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
      let {responseType, onUploadProgress, onDownloadProgress} = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;

      function done() {
        flushUpload && flushUpload(); // flush events
        flushDownload && flushDownload(); // flush events

        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

        _config.signal && _config.signal.removeEventListener('abort', onCanceled);
      }

      let request = new XMLHttpRequest();

      request.open(_config.method.toUpperCase(), _config.url, true);

      // Set the request timeout in MS
      request.timeout = _config.timeout;

      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        const responseHeaders = AxiosHeaders$1.from(
          'getAllResponseHeaders' in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
          request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };

        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);

        // Clean up request
        request = null;
      }

      if ('onloadend' in request) {
        // Use onloadend if available
        request.onloadend = onloadend;
      } else {
        // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }
          // readystate handler is calling before onerror or ontimeout handlers,
          // so we should call onloadend on the next 'tick'
          setTimeout(onloadend);
        };
      }

      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }

        reject(new AxiosError$1('Request aborted', AxiosError$1.ECONNABORTED, config, request));

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(new AxiosError$1('Network Error', AxiosError$1.ERR_NETWORK, config, request));

        // Clean up request
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
        const transitional = _config.transitional || transitionalDefaults;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(new AxiosError$1(
          timeoutErrorMessage,
          transitional.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
          config,
          request));

        // Clean up request
        request = null;
      };

      // Remove Content-Type if data is undefined
      requestData === undefined && requestHeaders.setContentType(null);

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }

      // Add withCredentials to request if needed
      if (!utils$1.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = _config.responseType;
      }

      // Handle progress if needed
      if (onDownloadProgress) {
        ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
        request.addEventListener('progress', downloadThrottled);
      }

      // Not all browsers support upload events
      if (onUploadProgress && request.upload) {
        ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

        request.upload.addEventListener('progress', uploadThrottled);

        request.upload.addEventListener('loadend', flushUpload);
      }

      if (_config.cancelToken || _config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = cancel => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
          request.abort();
          request = null;
        };

        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
        }
      }

      const protocol = parseProtocol(_config.url);

      if (protocol && platform.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError$1('Unsupported protocol ' + protocol + ':', AxiosError$1.ERR_BAD_REQUEST, config));
        return;
      }


      // Send the request
      request.send(requestData || null);
    });
  };

  const composeSignals = (signals, timeout) => {
    const {length} = (signals = signals ? signals.filter(Boolean) : []);

    if (timeout || length) {
      let controller = new AbortController();

      let aborted;

      const onabort = function (reason) {
        if (!aborted) {
          aborted = true;
          unsubscribe();
          const err = reason instanceof Error ? reason : this.reason;
          controller.abort(err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err));
        }
      };

      let timer = timeout && setTimeout(() => {
        timer = null;
        onabort(new AxiosError$1(`timeout ${timeout} of ms exceeded`, AxiosError$1.ETIMEDOUT));
      }, timeout);

      const unsubscribe = () => {
        if (signals) {
          timer && clearTimeout(timer);
          timer = null;
          signals.forEach(signal => {
            signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
          });
          signals = null;
        }
      };

      signals.forEach((signal) => signal.addEventListener('abort', onabort));

      const {signal} = controller;

      signal.unsubscribe = () => utils$1.asap(unsubscribe);

      return signal;
    }
  };

  const streamChunk = function* (chunk, chunkSize) {
    let len = chunk.byteLength;

    if (len < chunkSize) {
      yield chunk;
      return;
    }

    let pos = 0;
    let end;

    while (pos < len) {
      end = pos + chunkSize;
      yield chunk.slice(pos, end);
      pos = end;
    }
  };

  const readBytes = async function* (iterable, chunkSize) {
    for await (const chunk of readStream(iterable)) {
      yield* streamChunk(chunk, chunkSize);
    }
  };

  const readStream = async function* (stream) {
    if (stream[Symbol.asyncIterator]) {
      yield* stream;
      return;
    }

    const reader = stream.getReader();
    try {
      for (;;) {
        const {done, value} = await reader.read();
        if (done) {
          break;
        }
        yield value;
      }
    } finally {
      await reader.cancel();
    }
  };

  const trackStream = (stream, chunkSize, onProgress, onFinish) => {
    const iterator = readBytes(stream, chunkSize);

    let bytes = 0;
    let done;
    let _onFinish = (e) => {
      if (!done) {
        done = true;
        onFinish && onFinish(e);
      }
    };

    return new ReadableStream({
      async pull(controller) {
        try {
          const {done, value} = await iterator.next();

          if (done) {
           _onFinish();
            controller.close();
            return;
          }

          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator.return();
      }
    }, {
      highWaterMark: 2
    })
  };

  const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
  const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

  // used only inside the fetch adapter
  const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
      ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
      async (str) => new Uint8Array(await new Response(str).arrayBuffer())
  );

  const test = (fn, ...args) => {
    try {
      return !!fn(...args);
    } catch (e) {
      return false
    }
  };

  const supportsRequestStream = isReadableStreamSupported && test(() => {
    let duplexAccessed = false;

    const hasContentType = new Request(platform.origin, {
      body: new ReadableStream(),
      method: 'POST',
      get duplex() {
        duplexAccessed = true;
        return 'half';
      },
    }).headers.has('Content-Type');

    return duplexAccessed && !hasContentType;
  });

  const DEFAULT_CHUNK_SIZE = 64 * 1024;

  const supportsResponseStream = isReadableStreamSupported &&
    test(() => utils$1.isReadableStream(new Response('').body));


  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };

  isFetchSupported && (((res) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
      !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? (res) => res[type]() :
        (_, config) => {
          throw new AxiosError$1(`Response type '${type}' is not supported`, AxiosError$1.ERR_NOT_SUPPORT, config);
        });
    });
  })(new Response));

  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }

    if(utils$1.isBlob(body)) {
      return body.size;
    }

    if(utils$1.isSpecCompliantForm(body)) {
      const _request = new Request(platform.origin, {
        method: 'POST',
        body,
      });
      return (await _request.arrayBuffer()).byteLength;
    }

    if(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }

    if(utils$1.isURLSearchParams(body)) {
      body = body + '';
    }

    if(utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };

  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());

    return length == null ? getBodyLength(body) : length;
  };

  var fetchAdapter = isFetchSupported && (async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = 'same-origin',
      fetchOptions
    } = resolveConfig(config);

    responseType = responseType ? (responseType + '').toLowerCase() : 'text';

    let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

    let request;

    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
        composedSignal.unsubscribe();
    });

    let requestContentLength;

    try {
      if (
        onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
        (requestContentLength = await resolveBodyLength(headers, data)) !== 0
      ) {
        let _request = new Request(url, {
          method: 'POST',
          body: data,
          duplex: "half"
        });

        let contentTypeHeader;

        if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
          headers.setContentType(contentTypeHeader);
        }

        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );

          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }

      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? 'include' : 'omit';
      }

      // Cloudflare Workers throws when credentials are defined
      // see https://github.com/cloudflare/workerd/issues/902
      const isCredentialsSupported = "credentials" in Request.prototype;
      request = new Request(url, {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : undefined
      });

      let response = await fetch(request, fetchOptions);

      const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

      if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
        const options = {};

        ['status', 'statusText', 'headers'].forEach(prop => {
          options[prop] = response[prop];
        });

        const responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));

        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];

        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }

      responseType = responseType || 'text';

      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

      !isStreamResponse && unsubscribe && unsubscribe();

      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders$1.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      })
    } catch (err) {
      unsubscribe && unsubscribe();

      if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError$1('Network Error', AxiosError$1.ERR_NETWORK, config, request),
          {
            cause: err.cause || err
          }
        )
      }

      throw AxiosError$1.from(err, err && err.code, config, request);
    }
  });

  const knownAdapters = {
    http: httpAdapter,
    xhr: xhrAdapter,
    fetch: fetchAdapter
  };

  utils$1.forEach(knownAdapters, (fn, value) => {
    if (fn) {
      try {
        Object.defineProperty(fn, 'name', {value});
      } catch (e) {
        // eslint-disable-next-line no-empty
      }
      Object.defineProperty(fn, 'adapterName', {value});
    }
  });

  const renderReason = (reason) => `- ${reason}`;

  const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

  var adapters = {
    getAdapter: (adapters) => {
      adapters = utils$1.isArray(adapters) ? adapters : [adapters];

      const {length} = adapters;
      let nameOrAdapter;
      let adapter;

      const rejectedReasons = {};

      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        let id;

        adapter = nameOrAdapter;

        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

          if (adapter === undefined) {
            throw new AxiosError$1(`Unknown adapter '${id}'`);
          }
        }

        if (adapter) {
          break;
        }

        rejectedReasons[id || '#' + i] = adapter;
      }

      if (!adapter) {

        const reasons = Object.entries(rejectedReasons)
          .map(([id, state]) => `adapter ${id} ` +
            (state === false ? 'is not supported by the environment' : 'is not available in the build')
          );

        let s = length ?
          (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
          'as no adapter specified';

        throw new AxiosError$1(
          `There is no suitable adapter to dispatch the request ` + s,
          'ERR_NOT_SUPPORT'
        );
      }

      return adapter;
    },
    adapters: knownAdapters
  };

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   *
   * @param {Object} config The config that is to be used for the request
   *
   * @returns {void}
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }

    if (config.signal && config.signal.aborted) {
      throw new CanceledError$1(null, config);
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);

    config.headers = AxiosHeaders$1.from(config.headers);

    // Transform request data
    config.data = transformData.call(
      config,
      config.transformRequest
    );

    if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
      config.headers.setContentType('application/x-www-form-urlencoded', false);
    }

    const adapter = adapters.getAdapter(config.adapter || defaults.adapter);

    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );

      response.headers = AxiosHeaders$1.from(response.headers);

      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel$1(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }

      return Promise.reject(reason);
    });
  }

  const VERSION$1 = "1.10.0";

  const validators$1 = {};

  // eslint-disable-next-line func-names
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
    validators$1[type] = function validator(thing) {
      return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  });

  const deprecatedWarnings = {};

  /**
   * Transitional option validator
   *
   * @param {function|boolean?} validator - set to false if the transitional option has been removed
   * @param {string?} version - deprecated version / removed since version
   * @param {string?} message - some message with additional info
   *
   * @returns {function}
   */
  validators$1.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return '[Axios v' + VERSION$1 + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }

    // eslint-disable-next-line func-names
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError$1(
          formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
          AxiosError$1.ERR_DEPRECATED
        );
      }

      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        // eslint-disable-next-line no-console
        console.warn(
          formatMessage(
            opt,
            ' has been deprecated since v' + version + ' and will be removed in the near future'
          )
        );
      }

      return validator ? validator(value, opt, opts) : true;
    };
  };

  validators$1.spelling = function spelling(correctSpelling) {
    return (value, opt) => {
      // eslint-disable-next-line no-console
      console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
      return true;
    }
  };

  /**
   * Assert object's properties type
   *
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   *
   * @returns {object}
   */

  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
      throw new AxiosError$1('options must be an object', AxiosError$1.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === undefined || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError$1('option ' + opt + ' must be ' + result, AxiosError$1.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError$1('Unknown option ' + opt, AxiosError$1.ERR_BAD_OPTION);
      }
    }
  }

  var validator = {
    assertOptions,
    validators: validators$1
  };

  const validators = validator.validators;

  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   *
   * @return {Axios} A new instance of Axios
   */
  let Axios$1 = class Axios {
    constructor(instanceConfig) {
      this.defaults = instanceConfig || {};
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(configOrUrl, config) {
      try {
        return await this._request(configOrUrl, config);
      } catch (err) {
        if (err instanceof Error) {
          let dummy = {};

          Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

          // slice off the Error: ... line
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
          try {
            if (!err.stack) {
              err.stack = stack;
              // match without the 2 top stack lines
            } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
              err.stack += '\n' + stack;
            }
          } catch (e) {
            // ignore the case where "stack" is an un-writable property
          }
        }

        throw err;
      }
    }

    _request(configOrUrl, config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }

      config = mergeConfig$1(this.defaults, config);

      const {transitional, paramsSerializer, headers} = config;

      if (transitional !== undefined) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }

      if (paramsSerializer != null) {
        if (utils$1.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator.assertOptions(paramsSerializer, {
            encode: validators.function,
            serialize: validators.function
          }, true);
        }
      }

      // Set config.allowAbsoluteUrls
      if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
        config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
      } else {
        config.allowAbsoluteUrls = true;
      }

      validator.assertOptions(config, {
        baseUrl: validators.spelling('baseURL'),
        withXsrfToken: validators.spelling('withXSRFToken')
      }, true);

      // Set config.method
      config.method = (config.method || this.defaults.method || 'get').toLowerCase();

      // Flatten headers
      let contextHeaders = headers && utils$1.merge(
        headers.common,
        headers[config.method]
      );

      headers && utils$1.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (method) => {
          delete headers[method];
        }
      );

      config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

      // filter out skipped interceptors
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
          return;
        }

        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });

      let promise;
      let i = 0;
      let len;

      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), undefined];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;

        promise = Promise.resolve(config);

        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }

        return promise;
      }

      len = requestInterceptorChain.length;

      let newConfig = config;

      i = 0;

      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }

      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }

      i = 0;
      len = responseInterceptorChain.length;

      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }

      return promise;
    }

    getUri(config) {
      config = mergeConfig$1(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };

  // Provide aliases for supported request methods
  utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios$1.prototype[method] = function(url, config) {
      return this.request(mergeConfig$1(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });

  utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/

    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig$1(config || {}, {
          method,
          headers: isForm ? {
            'Content-Type': 'multipart/form-data'
          } : {},
          url,
          data
        }));
      };
    }

    Axios$1.prototype[method] = generateHTTPMethod();

    Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
  });

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @param {Function} executor The executor function.
   *
   * @returns {CancelToken}
   */
  let CancelToken$1 = class CancelToken {
    constructor(executor) {
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }

      let resolvePromise;

      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });

      const token = this;

      // eslint-disable-next-line func-names
      this.promise.then(cancel => {
        if (!token._listeners) return;

        let i = token._listeners.length;

        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });

      // eslint-disable-next-line func-names
      this.promise.then = onfulfilled => {
        let _resolve;
        // eslint-disable-next-line func-names
        const promise = new Promise(resolve => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);

        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };

        return promise;
      };

      executor(function cancel(message, config, request) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }

        token.reason = new CanceledError$1(message, config, request);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }

    /**
     * Subscribe to the cancel signal
     */

    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }

      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }

    /**
     * Unsubscribe from the cancel signal
     */

    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }

    toAbortSignal() {
      const controller = new AbortController();

      const abort = (err) => {
        controller.abort(err);
      };

      this.subscribe(abort);

      controller.signal.unsubscribe = () => this.unsubscribe(abort);

      return controller.signal;
    }

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   *
   * @returns {Function}
   */
  function spread$1(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   *
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  function isAxiosError$1(payload) {
    return utils$1.isObject(payload) && (payload.isAxiosError === true);
  }

  const HttpStatusCode$1 = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };

  Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
    HttpStatusCode$1[value] = key;
  });

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   *
   * @returns {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    const context = new Axios$1(defaultConfig);
    const instance = bind(Axios$1.prototype.request, context);

    // Copy axios.prototype to instance
    utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

    // Copy context to instance
    utils$1.extend(instance, context, null, {allOwnKeys: true});

    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
    };

    return instance;
  }

  // Create the default instance to be exported
  const axios = createInstance(defaults);

  // Expose Axios class to allow class inheritance
  axios.Axios = Axios$1;

  // Expose Cancel & CancelToken
  axios.CanceledError = CanceledError$1;
  axios.CancelToken = CancelToken$1;
  axios.isCancel = isCancel$1;
  axios.VERSION = VERSION$1;
  axios.toFormData = toFormData$1;

  // Expose AxiosError class
  axios.AxiosError = AxiosError$1;

  // alias for CanceledError for backward compatibility
  axios.Cancel = axios.CanceledError;

  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };

  axios.spread = spread$1;

  // Expose isAxiosError
  axios.isAxiosError = isAxiosError$1;

  // Expose mergeConfig
  axios.mergeConfig = mergeConfig$1;

  axios.AxiosHeaders = AxiosHeaders$1;

  axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

  axios.getAdapter = adapters.getAdapter;

  axios.HttpStatusCode = HttpStatusCode$1;

  axios.default = axios;

  // This module is intended to unwrap Axios default export as named.
  // Keep top-level export same with static properties
  // so that it can keep same with es module or cjs
  const {
    Axios,
    AxiosError,
    CanceledError,
    isCancel,
    CancelToken,
    VERSION,
    all,
    Cancel,
    isAxiosError,
    spread,
    toFormData,
    AxiosHeaders,
    HttpStatusCode,
    formToJSON,
    getAdapter,
    mergeConfig
  } = axios;

  const baseUrl = "https://tribes.africa";
  const API_URL = `${baseUrl}/api/v1`;
  const HttpPostRequest = async (path, data = {}) => {
    const headers = {
      Authorization: "UnAuthorized"
    };
    return new Promise((resolve, reject) => {
      axios.post(`${API_URL}${path}`, data, {
        headers: headers
      }).then(function (response) {
        try {
          if (response.data.code !== 200) {
            throw new Error(response.data.data);
          }
          resolve(response.data.data);
        } catch (error) {
          throw new Error(error.message);
        }
      }).catch(function (error) {
        reject(error.message);
      });
    });
  };

  const ImageUploader = props => {
    const {
      onChange,
      property,
      record
    } = props;
    const [isLoading, setIsLoading] = React$1.useState(false);
    const [msg, setMsg] = React$1.useState("Image uploading... Please do not save until the image is uploaded.");
    const [previewUrl, setPreviewUrl] = React$1.useState(null);

    // Initialize preview when editing existing data
    React$1.useEffect(() => {
      if (record?.params?.[property.name] && !previewUrl) {
        console.log(property.name);
        setPreviewUrl(record.params[property.name]);
      }
    }, [record, property.name, previewUrl]);
    const onDrop = React$1.useCallback(files => {
      if (files.length) {
        const file = files[0];
        const formData = new FormData();
        formData.append("file", file);
        setIsLoading(true);
        setMsg("Image uploading... Please do not save until the image is uploaded.");
        HttpPostRequest("/upload-file", formData).then(res => {
          setIsLoading(false);
          setMsg("Image uploaded successfully.");
          setPreviewUrl(res); // Assuming the response is the image URL
          onChange({
            ...record,
            params: {
              ...record.params,
              [property.name]: res
            }
          });
        }).catch(() => {
          setIsLoading(false);
          setMsg("Upload failed. Try again.");
        });
      }
    }, [onChange, property.name, record]);
    const onRemove = () => {
      setPreviewUrl(null);
      onChange({
        ...record,
        params: {
          ...record.params,
          [property.name]: null
        }
      });
    };
    const {
      getRootProps,
      getInputProps,
      isDragActive
    } = useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [".jpeg", ".jpg"],
        "image/png": [".png"]
      },
      multiple: false
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(designSystem.Text, {
      style: {
        display: "block",
        fontFamily: "Roboto, sansSerif",
        fontSize: "12px",
        lineHeight: "16px",
        marginBottom: "8px",
        fontWeight: "400"
      }
    }, property.name), previewUrl ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        border: "2px dashed #ccc",
        padding: "10px",
        textAlign: "center",
        marginBottom: "20px",
        borderRadius: "6px"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: '/backend' + previewUrl,
      alt: "Preview",
      style: {
        maxWidth: "100%",
        maxHeight: "200px",
        borderRadius: "6px"
      }
    }), /*#__PURE__*/React.createElement(designSystem.Button, {
      variant: "danger",
      size: "sm",
      onClick: onRemove,
      style: {
        position: "absolute",
        top: "10px",
        right: "10px",
        borderRadius: "50%",
        width: "28px",
        height: "28px",
        padding: "0",
        fontSize: "16px",
        lineHeight: "28px",
        textAlign: "center"
      }
    }, "\xD7")) : /*#__PURE__*/React.createElement("div", _extends({}, getRootProps(), {
      style: {
        border: "2px dashed #666",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        marginBottom: "40px",
        borderRadius: "6px"
      }
    }), /*#__PURE__*/React.createElement("input", getInputProps()), isLoading && /*#__PURE__*/React.createElement(designSystem.Label, {
      style: {
        color: "blue"
      }
    }, msg), isDragActive ? /*#__PURE__*/React.createElement("p", null, "Drop the image here ...") : /*#__PURE__*/React.createElement("p", null, "Drag and drop a JPG or PNG, or click to select")));
  };

  const ShowImage = ({
    property,
    record,
    view = "list"
  }) => {
    let image = record?.params?.[property.name];
    if (window.location.href.match('/show')) {
      view = 'show';
    }
    const styles = property.custom?.styles?.[view] || {
      height: 60,
      width: 60,
      borderRadius: '100%',
      objectFit: 'cover'
    };
    if (image && !image.startsWith('http')) {
      image = '/backend' + image;
    }
    if (!image) return /*#__PURE__*/React.createElement("div", null, "--");
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      style: styles,
      src: image,
      alt: "Image"
    }));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Dashboard = Dashboard;
  AdminJS.UserComponents.UploadImage = ImageUploader;
  AdminJS.UserComponents.ShowImage = ShowImage;

})(AdminJSDesignSystem, AdminJS, React, PropTypes);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9hZG1pbi9EYXNoYm9hcmQuanN4IiwiLi4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9maWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9maWxlLXNlbGVjdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9hdHRyLWFjY2VwdC9kaXN0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRyb3B6b25lL2Rpc3QvZXMvdXRpbHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtZHJvcHpvbmUvZGlzdC9lcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0Vycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL251bGwuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL0Zvcm1EYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvQmxvYi5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vY29tbW9uL3V0aWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NIZWFkZXJzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdGhyb3R0bGUuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcHJvZ3Jlc3NFdmVudFJlZHVjZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3Jlc29sdmVDb25maWcuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21wb3NlU2lnbmFscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90cmFja1N0cmVhbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMvZmV0Y2guanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZW52L2RhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdmFsaWRhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCIuLi9hZG1pbi9IdHRwUG9zdFJlcXVlc3QuanN4IiwiLi4vYWRtaW4vSW1hZ2VVcGxvYWRlci5qc3giLCIuLi9hZG1pbi9TaG93SW1hZ2UuanN4IiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIMiwgVGV4dCwgdGhlbWUgfSBmcm9tIFwiQGFkbWluanMvZGVzaWduLXN5c3RlbVwiO1xuaW1wb3J0IHsgQXBpQ2xpZW50IH0gZnJvbSBcImFkbWluanNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwaVxuICAgICAgLmdldERhc2hib2FyZCgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXNoYm9hcmQgQVBJIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCB2YXJpYW50PVwiZ3JleVwiIHBhZGRpbmc9XCJ4bFwiPlxuICAgICAgPEgyIG1iPVwieGxcIj5XZWxjb21lIHRvIHRoZSBBZG1pbiBEYXNoYm9hcmQ8L0gyPlxuXG4gICAgICB7LyogPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhXcmFwPVwid3JhcFwiIGdhcD1cImxnXCI+XG4gICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgIHdpZHRoPXtbXCIxMDAlXCIsIFwiY2FsYyg1MCUgLSAyMHB4KVwiLCBcImNhbGMoMzMuMzMlIC0gMjBweClcIiwgXCJjYWxjKDI1JSAtIDIwcHgpXCJdfSAvLyByZXNwb25zaXZlOiAxLWNvbCwgMi1jb2wsIDMtY29sLCA0LWNvbFxuICAgICAgICAgICAgICBoZWlnaHQ9ezI3MH1cbiAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGJveFNoYWRvdz1cImNhcmRcIlxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJ4bFwiXG4gICAgICAgICAgICAgIHBhZGRpbmc9XCJsZ1wiXG4gICAgICAgICAgICAgIG1hcmdpbj1cIjEwcHhcIlxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17MjB9IGZvbnRXZWlnaHQ9XCJzZW1pLWJvbGRcIiBtYj17Mzh9PlxuICAgICAgICAgICAgICAgIHtrZXl9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9ezQwfSBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPXt0aGVtZS5jb2xvcnMucHJpbWFyeTEwMH0+XG4gICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQm94PiAqL31cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DT01NT05fTUlNRV9UWVBFUyA9IHZvaWQgMDtcbmV4cG9ydHMudG9GaWxlV2l0aFBhdGggPSB0b0ZpbGVXaXRoUGF0aDtcbmV4cG9ydHMuQ09NTU9OX01JTUVfVFlQRVMgPSBuZXcgTWFwKFtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ3V6emxlL3BzcjcvYmxvYi8yZDkyNjA3OTllNzEzZjFjNDc1ZDNjNWZkYzNkNjU2MWZmNzQ0MWIyL3NyYy9NaW1lVHlwZS5waHBcbiAgICBbJzFrbScsICdhcHBsaWNhdGlvbi92bmQuMTAwMG1pbmRzLmRlY2lzaW9uLW1vZGVsK3htbCddLFxuICAgIFsnM2RtbCcsICd0ZXh0L3ZuZC5pbjNkLjNkbWwnXSxcbiAgICBbJzNkcycsICdpbWFnZS94LTNkcyddLFxuICAgIFsnM2cyJywgJ3ZpZGVvLzNncHAyJ10sXG4gICAgWyczZ3AnLCAndmlkZW8vM2dwJ10sXG4gICAgWyczZ3BwJywgJ3ZpZGVvLzNncHAnXSxcbiAgICBbJzNtZicsICdtb2RlbC8zbWYnXSxcbiAgICBbJzd6JywgJ2FwcGxpY2F0aW9uL3gtN3otY29tcHJlc3NlZCddLFxuICAgIFsnN3ppcCcsICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnXSxcbiAgICBbJzEyMycsICdhcHBsaWNhdGlvbi92bmQubG90dXMtMS0yLTMnXSxcbiAgICBbJ2FhYicsICdhcHBsaWNhdGlvbi94LWF1dGhvcndhcmUtYmluJ10sXG4gICAgWydhYWMnLCAnYXVkaW8veC1hY2MnXSxcbiAgICBbJ2FhbScsICdhcHBsaWNhdGlvbi94LWF1dGhvcndhcmUtbWFwJ10sXG4gICAgWydhYXMnLCAnYXBwbGljYXRpb24veC1hdXRob3J3YXJlLXNlZyddLFxuICAgIFsnYWJ3JywgJ2FwcGxpY2F0aW9uL3gtYWJpd29yZCddLFxuICAgIFsnYWMnLCAnYXBwbGljYXRpb24vdm5kLm5va2lhLm4tZ2FnZS5hYyt4bWwnXSxcbiAgICBbJ2FjMycsICdhdWRpby9hYzMnXSxcbiAgICBbJ2FjYycsICdhcHBsaWNhdGlvbi92bmQuYW1lcmljYW5keW5hbWljcy5hY2MnXSxcbiAgICBbJ2FjZScsICdhcHBsaWNhdGlvbi94LWFjZS1jb21wcmVzc2VkJ10sXG4gICAgWydhY3UnLCAnYXBwbGljYXRpb24vdm5kLmFjdWNvYm9sJ10sXG4gICAgWydhY3V0YycsICdhcHBsaWNhdGlvbi92bmQuYWN1Y29ycCddLFxuICAgIFsnYWRwJywgJ2F1ZGlvL2FkcGNtJ10sXG4gICAgWydhZXAnLCAnYXBwbGljYXRpb24vdm5kLmF1ZGlvZ3JhcGgnXSxcbiAgICBbJ2FmbScsICdhcHBsaWNhdGlvbi94LWZvbnQtdHlwZTEnXSxcbiAgICBbJ2FmcCcsICdhcHBsaWNhdGlvbi92bmQuaWJtLm1vZGNhcCddLFxuICAgIFsnYWhlYWQnLCAnYXBwbGljYXRpb24vdm5kLmFoZWFkLnNwYWNlJ10sXG4gICAgWydhaScsICdhcHBsaWNhdGlvbi9wZGYnXSxcbiAgICBbJ2FpZicsICdhdWRpby94LWFpZmYnXSxcbiAgICBbJ2FpZmMnLCAnYXVkaW8veC1haWZmJ10sXG4gICAgWydhaWZmJywgJ2F1ZGlvL3gtYWlmZiddLFxuICAgIFsnYWlyJywgJ2FwcGxpY2F0aW9uL3ZuZC5hZG9iZS5haXItYXBwbGljYXRpb24taW5zdGFsbGVyLXBhY2thZ2UremlwJ10sXG4gICAgWydhaXQnLCAnYXBwbGljYXRpb24vdm5kLmR2Yi5haXQnXSxcbiAgICBbJ2FtaScsICdhcHBsaWNhdGlvbi92bmQuYW1pZ2EuYW1pJ10sXG4gICAgWydhbXInLCAnYXVkaW8vYW1yJ10sXG4gICAgWydhcGsnLCAnYXBwbGljYXRpb24vdm5kLmFuZHJvaWQucGFja2FnZS1hcmNoaXZlJ10sXG4gICAgWydhcG5nJywgJ2ltYWdlL2FwbmcnXSxcbiAgICBbJ2FwcGNhY2hlJywgJ3RleHQvY2FjaGUtbWFuaWZlc3QnXSxcbiAgICBbJ2FwcGxpY2F0aW9uJywgJ2FwcGxpY2F0aW9uL3gtbXMtYXBwbGljYXRpb24nXSxcbiAgICBbJ2FwcicsICdhcHBsaWNhdGlvbi92bmQubG90dXMtYXBwcm9hY2gnXSxcbiAgICBbJ2FyYycsICdhcHBsaWNhdGlvbi94LWZyZWVhcmMnXSxcbiAgICBbJ2FyaicsICdhcHBsaWNhdGlvbi94LWFyaiddLFxuICAgIFsnYXNjJywgJ2FwcGxpY2F0aW9uL3BncC1zaWduYXR1cmUnXSxcbiAgICBbJ2FzZicsICd2aWRlby94LW1zLWFzZiddLFxuICAgIFsnYXNtJywgJ3RleHQveC1hc20nXSxcbiAgICBbJ2FzbycsICdhcHBsaWNhdGlvbi92bmQuYWNjcGFjLnNpbXBseS5hc28nXSxcbiAgICBbJ2FzeCcsICd2aWRlby94LW1zLWFzZiddLFxuICAgIFsnYXRjJywgJ2FwcGxpY2F0aW9uL3ZuZC5hY3Vjb3JwJ10sXG4gICAgWydhdG9tJywgJ2FwcGxpY2F0aW9uL2F0b20reG1sJ10sXG4gICAgWydhdG9tY2F0JywgJ2FwcGxpY2F0aW9uL2F0b21jYXQreG1sJ10sXG4gICAgWydhdG9tZGVsZXRlZCcsICdhcHBsaWNhdGlvbi9hdG9tZGVsZXRlZCt4bWwnXSxcbiAgICBbJ2F0b21zdmMnLCAnYXBwbGljYXRpb24vYXRvbXN2Yyt4bWwnXSxcbiAgICBbJ2F0eCcsICdhcHBsaWNhdGlvbi92bmQuYW50aXguZ2FtZS1jb21wb25lbnQnXSxcbiAgICBbJ2F1JywgJ2F1ZGlvL3gtYXUnXSxcbiAgICBbJ2F2aScsICd2aWRlby94LW1zdmlkZW8nXSxcbiAgICBbJ2F2aWYnLCAnaW1hZ2UvYXZpZiddLFxuICAgIFsnYXcnLCAnYXBwbGljYXRpb24vYXBwbGl4d2FyZSddLFxuICAgIFsnYXpmJywgJ2FwcGxpY2F0aW9uL3ZuZC5haXJ6aXAuZmlsZXNlY3VyZS5hemYnXSxcbiAgICBbJ2F6cycsICdhcHBsaWNhdGlvbi92bmQuYWlyemlwLmZpbGVzZWN1cmUuYXpzJ10sXG4gICAgWydhenYnLCAnaW1hZ2Uvdm5kLmFpcnppcC5hY2NlbGVyYXRvci5henYnXSxcbiAgICBbJ2F6dycsICdhcHBsaWNhdGlvbi92bmQuYW1hem9uLmVib29rJ10sXG4gICAgWydiMTYnLCAnaW1hZ2Uvdm5kLnBjby5iMTYnXSxcbiAgICBbJ2JhdCcsICdhcHBsaWNhdGlvbi94LW1zZG93bmxvYWQnXSxcbiAgICBbJ2JjcGlvJywgJ2FwcGxpY2F0aW9uL3gtYmNwaW8nXSxcbiAgICBbJ2JkZicsICdhcHBsaWNhdGlvbi94LWZvbnQtYmRmJ10sXG4gICAgWydiZG0nLCAnYXBwbGljYXRpb24vdm5kLnN5bmNtbC5kbSt3YnhtbCddLFxuICAgIFsnYmRvYycsICdhcHBsaWNhdGlvbi94LWJkb2MnXSxcbiAgICBbJ2JlZCcsICdhcHBsaWNhdGlvbi92bmQucmVhbHZuYy5iZWQnXSxcbiAgICBbJ2JoMicsICdhcHBsaWNhdGlvbi92bmQuZnVqaXRzdS5vYXN5c3BycyddLFxuICAgIFsnYmluJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnYmxiJywgJ2FwcGxpY2F0aW9uL3gtYmxvcmInXSxcbiAgICBbJ2Jsb3JiJywgJ2FwcGxpY2F0aW9uL3gtYmxvcmInXSxcbiAgICBbJ2JtaScsICdhcHBsaWNhdGlvbi92bmQuYm1pJ10sXG4gICAgWydibW1sJywgJ2FwcGxpY2F0aW9uL3ZuZC5iYWxzYW1pcS5ibW1sK3htbCddLFxuICAgIFsnYm1wJywgJ2ltYWdlL2JtcCddLFxuICAgIFsnYm9vaycsICdhcHBsaWNhdGlvbi92bmQuZnJhbWVtYWtlciddLFxuICAgIFsnYm94JywgJ2FwcGxpY2F0aW9uL3ZuZC5wcmV2aWV3c3lzdGVtcy5ib3gnXSxcbiAgICBbJ2JveicsICdhcHBsaWNhdGlvbi94LWJ6aXAyJ10sXG4gICAgWydicGsnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydicG1uJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnYnNwJywgJ21vZGVsL3ZuZC52YWx2ZS5zb3VyY2UuY29tcGlsZWQtbWFwJ10sXG4gICAgWydidGlmJywgJ2ltYWdlL3Bycy5idGlmJ10sXG4gICAgWydidWZmZXInLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydieicsICdhcHBsaWNhdGlvbi94LWJ6aXAnXSxcbiAgICBbJ2J6MicsICdhcHBsaWNhdGlvbi94LWJ6aXAyJ10sXG4gICAgWydjJywgJ3RleHQveC1jJ10sXG4gICAgWydjNGQnLCAnYXBwbGljYXRpb24vdm5kLmNsb25rLmM0Z3JvdXAnXSxcbiAgICBbJ2M0ZicsICdhcHBsaWNhdGlvbi92bmQuY2xvbmsuYzRncm91cCddLFxuICAgIFsnYzRnJywgJ2FwcGxpY2F0aW9uL3ZuZC5jbG9uay5jNGdyb3VwJ10sXG4gICAgWydjNHAnLCAnYXBwbGljYXRpb24vdm5kLmNsb25rLmM0Z3JvdXAnXSxcbiAgICBbJ2M0dScsICdhcHBsaWNhdGlvbi92bmQuY2xvbmsuYzRncm91cCddLFxuICAgIFsnYzExYW1jJywgJ2FwcGxpY2F0aW9uL3ZuZC5jbHVldHJ1c3QuY2FydG9tb2JpbGUtY29uZmlnJ10sXG4gICAgWydjMTFhbXonLCAnYXBwbGljYXRpb24vdm5kLmNsdWV0cnVzdC5jYXJ0b21vYmlsZS1jb25maWctcGtnJ10sXG4gICAgWydjYWInLCAnYXBwbGljYXRpb24vdm5kLm1zLWNhYi1jb21wcmVzc2VkJ10sXG4gICAgWydjYWYnLCAnYXVkaW8veC1jYWYnXSxcbiAgICBbJ2NhcCcsICdhcHBsaWNhdGlvbi92bmQudGNwZHVtcC5wY2FwJ10sXG4gICAgWydjYXInLCAnYXBwbGljYXRpb24vdm5kLmN1cmwuY2FyJ10sXG4gICAgWydjYXQnLCAnYXBwbGljYXRpb24vdm5kLm1zLXBraS5zZWNjYXQnXSxcbiAgICBbJ2NiNycsICdhcHBsaWNhdGlvbi94LWNiciddLFxuICAgIFsnY2JhJywgJ2FwcGxpY2F0aW9uL3gtY2JyJ10sXG4gICAgWydjYnInLCAnYXBwbGljYXRpb24veC1jYnInXSxcbiAgICBbJ2NidCcsICdhcHBsaWNhdGlvbi94LWNiciddLFxuICAgIFsnY2J6JywgJ2FwcGxpY2F0aW9uL3gtY2JyJ10sXG4gICAgWydjYycsICd0ZXh0L3gtYyddLFxuICAgIFsnY2NvJywgJ2FwcGxpY2F0aW9uL3gtY29jb2EnXSxcbiAgICBbJ2NjdCcsICdhcHBsaWNhdGlvbi94LWRpcmVjdG9yJ10sXG4gICAgWydjY3htbCcsICdhcHBsaWNhdGlvbi9jY3htbCt4bWwnXSxcbiAgICBbJ2NkYmNtc2cnLCAnYXBwbGljYXRpb24vdm5kLmNvbnRhY3QuY21zZyddLFxuICAgIFsnY2RhJywgJ2FwcGxpY2F0aW9uL3gtY2RmJ10sXG4gICAgWydjZGYnLCAnYXBwbGljYXRpb24veC1uZXRjZGYnXSxcbiAgICBbJ2NkZngnLCAnYXBwbGljYXRpb24vY2RmeCt4bWwnXSxcbiAgICBbJ2Nka2V5JywgJ2FwcGxpY2F0aW9uL3ZuZC5tZWRpYXN0YXRpb24uY2RrZXknXSxcbiAgICBbJ2NkbWlhJywgJ2FwcGxpY2F0aW9uL2NkbWktY2FwYWJpbGl0eSddLFxuICAgIFsnY2RtaWMnLCAnYXBwbGljYXRpb24vY2RtaS1jb250YWluZXInXSxcbiAgICBbJ2NkbWlkJywgJ2FwcGxpY2F0aW9uL2NkbWktZG9tYWluJ10sXG4gICAgWydjZG1pbycsICdhcHBsaWNhdGlvbi9jZG1pLW9iamVjdCddLFxuICAgIFsnY2RtaXEnLCAnYXBwbGljYXRpb24vY2RtaS1xdWV1ZSddLFxuICAgIFsnY2RyJywgJ2FwcGxpY2F0aW9uL2NkciddLFxuICAgIFsnY2R4JywgJ2NoZW1pY2FsL3gtY2R4J10sXG4gICAgWydjZHhtbCcsICdhcHBsaWNhdGlvbi92bmQuY2hlbWRyYXcreG1sJ10sXG4gICAgWydjZHknLCAnYXBwbGljYXRpb24vdm5kLmNpbmRlcmVsbGEnXSxcbiAgICBbJ2NlcicsICdhcHBsaWNhdGlvbi9wa2l4LWNlcnQnXSxcbiAgICBbJ2NmcycsICdhcHBsaWNhdGlvbi94LWNmcy1jb21wcmVzc2VkJ10sXG4gICAgWydjZ20nLCAnaW1hZ2UvY2dtJ10sXG4gICAgWydjaGF0JywgJ2FwcGxpY2F0aW9uL3gtY2hhdCddLFxuICAgIFsnY2htJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1odG1saGVscCddLFxuICAgIFsnY2hydCcsICdhcHBsaWNhdGlvbi92bmQua2RlLmtjaGFydCddLFxuICAgIFsnY2lmJywgJ2NoZW1pY2FsL3gtY2lmJ10sXG4gICAgWydjaWknLCAnYXBwbGljYXRpb24vdm5kLmFuc2VyLXdlYi1jZXJ0aWZpY2F0ZS1pc3N1ZS1pbml0aWF0aW9uJ10sXG4gICAgWydjaWwnLCAnYXBwbGljYXRpb24vdm5kLm1zLWFydGdhbHJ5J10sXG4gICAgWydjanMnLCAnYXBwbGljYXRpb24vbm9kZSddLFxuICAgIFsnY2xhJywgJ2FwcGxpY2F0aW9uL3ZuZC5jbGF5bW9yZSddLFxuICAgIFsnY2xhc3MnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydjbGtrJywgJ2FwcGxpY2F0aW9uL3ZuZC5jcmljay5jbGlja2VyLmtleWJvYXJkJ10sXG4gICAgWydjbGtwJywgJ2FwcGxpY2F0aW9uL3ZuZC5jcmljay5jbGlja2VyLnBhbGV0dGUnXSxcbiAgICBbJ2Nsa3QnLCAnYXBwbGljYXRpb24vdm5kLmNyaWNrLmNsaWNrZXIudGVtcGxhdGUnXSxcbiAgICBbJ2Nsa3cnLCAnYXBwbGljYXRpb24vdm5kLmNyaWNrLmNsaWNrZXIud29yZGJhbmsnXSxcbiAgICBbJ2Nsa3gnLCAnYXBwbGljYXRpb24vdm5kLmNyaWNrLmNsaWNrZXInXSxcbiAgICBbJ2NscCcsICdhcHBsaWNhdGlvbi94LW1zY2xpcCddLFxuICAgIFsnY21jJywgJ2FwcGxpY2F0aW9uL3ZuZC5jb3Ntb2NhbGxlciddLFxuICAgIFsnY21kZicsICdjaGVtaWNhbC94LWNtZGYnXSxcbiAgICBbJ2NtbCcsICdjaGVtaWNhbC94LWNtbCddLFxuICAgIFsnY21wJywgJ2FwcGxpY2F0aW9uL3ZuZC55ZWxsb3dyaXZlci1jdXN0b20tbWVudSddLFxuICAgIFsnY214JywgJ2ltYWdlL3gtY214J10sXG4gICAgWydjb2QnLCAnYXBwbGljYXRpb24vdm5kLnJpbS5jb2QnXSxcbiAgICBbJ2NvZmZlZScsICd0ZXh0L2NvZmZlZXNjcmlwdCddLFxuICAgIFsnY29tJywgJ2FwcGxpY2F0aW9uL3gtbXNkb3dubG9hZCddLFxuICAgIFsnY29uZicsICd0ZXh0L3BsYWluJ10sXG4gICAgWydjcGlvJywgJ2FwcGxpY2F0aW9uL3gtY3BpbyddLFxuICAgIFsnY3BwJywgJ3RleHQveC1jJ10sXG4gICAgWydjcHQnLCAnYXBwbGljYXRpb24vbWFjLWNvbXBhY3Rwcm8nXSxcbiAgICBbJ2NyZCcsICdhcHBsaWNhdGlvbi94LW1zY2FyZGZpbGUnXSxcbiAgICBbJ2NybCcsICdhcHBsaWNhdGlvbi9wa2l4LWNybCddLFxuICAgIFsnY3J0JywgJ2FwcGxpY2F0aW9uL3gteDUwOS1jYS1jZXJ0J10sXG4gICAgWydjcngnLCAnYXBwbGljYXRpb24veC1jaHJvbWUtZXh0ZW5zaW9uJ10sXG4gICAgWydjcnlwdG9ub3RlJywgJ2FwcGxpY2F0aW9uL3ZuZC5yaWcuY3J5cHRvbm90ZSddLFxuICAgIFsnY3NoJywgJ2FwcGxpY2F0aW9uL3gtY3NoJ10sXG4gICAgWydjc2wnLCAnYXBwbGljYXRpb24vdm5kLmNpdGF0aW9uc3R5bGVzLnN0eWxlK3htbCddLFxuICAgIFsnY3NtbCcsICdjaGVtaWNhbC94LWNzbWwnXSxcbiAgICBbJ2NzcCcsICdhcHBsaWNhdGlvbi92bmQuY29tbW9uc3BhY2UnXSxcbiAgICBbJ2NzcicsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2NzcycsICd0ZXh0L2NzcyddLFxuICAgIFsnY3N0JywgJ2FwcGxpY2F0aW9uL3gtZGlyZWN0b3InXSxcbiAgICBbJ2NzdicsICd0ZXh0L2NzdiddLFxuICAgIFsnY3UnLCAnYXBwbGljYXRpb24vY3Utc2VlbWUnXSxcbiAgICBbJ2N1cmwnLCAndGV4dC92bmQuY3VybCddLFxuICAgIFsnY3d3JywgJ2FwcGxpY2F0aW9uL3Bycy5jd3cnXSxcbiAgICBbJ2N4dCcsICdhcHBsaWNhdGlvbi94LWRpcmVjdG9yJ10sXG4gICAgWydjeHgnLCAndGV4dC94LWMnXSxcbiAgICBbJ2RhZScsICdtb2RlbC92bmQuY29sbGFkYSt4bWwnXSxcbiAgICBbJ2RhZicsICdhcHBsaWNhdGlvbi92bmQubW9iaXVzLmRhZiddLFxuICAgIFsnZGFydCcsICdhcHBsaWNhdGlvbi92bmQuZGFydCddLFxuICAgIFsnZGF0YWxlc3MnLCAnYXBwbGljYXRpb24vdm5kLmZkc24uc2VlZCddLFxuICAgIFsnZGF2bW91bnQnLCAnYXBwbGljYXRpb24vZGF2bW91bnQreG1sJ10sXG4gICAgWydkYmYnLCAnYXBwbGljYXRpb24vdm5kLmRiZiddLFxuICAgIFsnZGJrJywgJ2FwcGxpY2F0aW9uL2RvY2Jvb2sreG1sJ10sXG4gICAgWydkY3InLCAnYXBwbGljYXRpb24veC1kaXJlY3RvciddLFxuICAgIFsnZGN1cmwnLCAndGV4dC92bmQuY3VybC5kY3VybCddLFxuICAgIFsnZGQyJywgJ2FwcGxpY2F0aW9uL3ZuZC5vbWEuZGQyK3htbCddLFxuICAgIFsnZGRkJywgJ2FwcGxpY2F0aW9uL3ZuZC5mdWppeGVyb3guZGRkJ10sXG4gICAgWydkZGYnLCAnYXBwbGljYXRpb24vdm5kLnN5bmNtbC5kbWRkZit4bWwnXSxcbiAgICBbJ2RkcycsICdpbWFnZS92bmQubXMtZGRzJ10sXG4gICAgWydkZWInLCAnYXBwbGljYXRpb24veC1kZWJpYW4tcGFja2FnZSddLFxuICAgIFsnZGVmJywgJ3RleHQvcGxhaW4nXSxcbiAgICBbJ2RlcGxveScsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2RlcicsICdhcHBsaWNhdGlvbi94LXg1MDktY2EtY2VydCddLFxuICAgIFsnZGZhYycsICdhcHBsaWNhdGlvbi92bmQuZHJlYW1mYWN0b3J5J10sXG4gICAgWydkZ2MnLCAnYXBwbGljYXRpb24veC1kZ2MtY29tcHJlc3NlZCddLFxuICAgIFsnZGljJywgJ3RleHQveC1jJ10sXG4gICAgWydkaXInLCAnYXBwbGljYXRpb24veC1kaXJlY3RvciddLFxuICAgIFsnZGlzJywgJ2FwcGxpY2F0aW9uL3ZuZC5tb2JpdXMuZGlzJ10sXG4gICAgWydkaXNwb3NpdGlvbi1ub3RpZmljYXRpb24nLCAnbWVzc2FnZS9kaXNwb3NpdGlvbi1ub3RpZmljYXRpb24nXSxcbiAgICBbJ2Rpc3QnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydkaXN0eicsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2RqdicsICdpbWFnZS92bmQuZGp2dSddLFxuICAgIFsnZGp2dScsICdpbWFnZS92bmQuZGp2dSddLFxuICAgIFsnZGxsJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnZG1nJywgJ2FwcGxpY2F0aW9uL3gtYXBwbGUtZGlza2ltYWdlJ10sXG4gICAgWydkbW4nLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydkbXAnLCAnYXBwbGljYXRpb24vdm5kLnRjcGR1bXAucGNhcCddLFxuICAgIFsnZG1zJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnZG5hJywgJ2FwcGxpY2F0aW9uL3ZuZC5kbmEnXSxcbiAgICBbJ2RvYycsICdhcHBsaWNhdGlvbi9tc3dvcmQnXSxcbiAgICBbJ2RvY20nLCAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmQudGVtcGxhdGUubWFjcm9FbmFibGVkLjEyJ10sXG4gICAgWydkb2N4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50J10sXG4gICAgWydkb3QnLCAnYXBwbGljYXRpb24vbXN3b3JkJ10sXG4gICAgWydkb3RtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy13b3JkLnRlbXBsYXRlLm1hY3JvRW5hYmxlZC4xMiddLFxuICAgIFsnZG90eCcsICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC50ZW1wbGF0ZSddLFxuICAgIFsnZHAnLCAnYXBwbGljYXRpb24vdm5kLm9zZ2kuZHAnXSxcbiAgICBbJ2RwZycsICdhcHBsaWNhdGlvbi92bmQuZHBncmFwaCddLFxuICAgIFsnZHJhJywgJ2F1ZGlvL3ZuZC5kcmEnXSxcbiAgICBbJ2RybGUnLCAnaW1hZ2UvZGljb20tcmxlJ10sXG4gICAgWydkc2MnLCAndGV4dC9wcnMubGluZXMudGFnJ10sXG4gICAgWydkc3NjJywgJ2FwcGxpY2F0aW9uL2Rzc2MrZGVyJ10sXG4gICAgWydkdGInLCAnYXBwbGljYXRpb24veC1kdGJvb2sreG1sJ10sXG4gICAgWydkdGQnLCAnYXBwbGljYXRpb24veG1sLWR0ZCddLFxuICAgIFsnZHRzJywgJ2F1ZGlvL3ZuZC5kdHMnXSxcbiAgICBbJ2R0c2hkJywgJ2F1ZGlvL3ZuZC5kdHMuaGQnXSxcbiAgICBbJ2R1bXAnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydkdmInLCAndmlkZW8vdm5kLmR2Yi5maWxlJ10sXG4gICAgWydkdmknLCAnYXBwbGljYXRpb24veC1kdmknXSxcbiAgICBbJ2R3ZCcsICdhcHBsaWNhdGlvbi9hdHNjLWR3ZCt4bWwnXSxcbiAgICBbJ2R3ZicsICdtb2RlbC92bmQuZHdmJ10sXG4gICAgWydkd2cnLCAnaW1hZ2Uvdm5kLmR3ZyddLFxuICAgIFsnZHhmJywgJ2ltYWdlL3ZuZC5keGYnXSxcbiAgICBbJ2R4cCcsICdhcHBsaWNhdGlvbi92bmQuc3BvdGZpcmUuZHhwJ10sXG4gICAgWydkeHInLCAnYXBwbGljYXRpb24veC1kaXJlY3RvciddLFxuICAgIFsnZWFyJywgJ2FwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZSddLFxuICAgIFsnZWNlbHA0ODAwJywgJ2F1ZGlvL3ZuZC5udWVyYS5lY2VscDQ4MDAnXSxcbiAgICBbJ2VjZWxwNzQ3MCcsICdhdWRpby92bmQubnVlcmEuZWNlbHA3NDcwJ10sXG4gICAgWydlY2VscDk2MDAnLCAnYXVkaW8vdm5kLm51ZXJhLmVjZWxwOTYwMCddLFxuICAgIFsnZWNtYScsICdhcHBsaWNhdGlvbi9lY21hc2NyaXB0J10sXG4gICAgWydlZG0nLCAnYXBwbGljYXRpb24vdm5kLm5vdmFkaWdtLmVkbSddLFxuICAgIFsnZWR4JywgJ2FwcGxpY2F0aW9uL3ZuZC5ub3ZhZGlnbS5lZHgnXSxcbiAgICBbJ2VmaWYnLCAnYXBwbGljYXRpb24vdm5kLnBpY3NlbCddLFxuICAgIFsnZWk2JywgJ2FwcGxpY2F0aW9uL3ZuZC5wZy5vc2FzbGknXSxcbiAgICBbJ2VsYycsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2VtZicsICdpbWFnZS9lbWYnXSxcbiAgICBbJ2VtbCcsICdtZXNzYWdlL3JmYzgyMiddLFxuICAgIFsnZW1tYScsICdhcHBsaWNhdGlvbi9lbW1hK3htbCddLFxuICAgIFsnZW1vdGlvbm1sJywgJ2FwcGxpY2F0aW9uL2Vtb3Rpb25tbCt4bWwnXSxcbiAgICBbJ2VteicsICdhcHBsaWNhdGlvbi94LW1zbWV0YWZpbGUnXSxcbiAgICBbJ2VvbCcsICdhdWRpby92bmQuZGlnaXRhbC13aW5kcyddLFxuICAgIFsnZW90JywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0J10sXG4gICAgWydlcHMnLCAnYXBwbGljYXRpb24vcG9zdHNjcmlwdCddLFxuICAgIFsnZXB1YicsICdhcHBsaWNhdGlvbi9lcHViK3ppcCddLFxuICAgIFsnZXMnLCAnYXBwbGljYXRpb24vZWNtYXNjcmlwdCddLFxuICAgIFsnZXMzJywgJ2FwcGxpY2F0aW9uL3ZuZC5lc3ppZ25vMyt4bWwnXSxcbiAgICBbJ2VzYScsICdhcHBsaWNhdGlvbi92bmQub3NnaS5zdWJzeXN0ZW0nXSxcbiAgICBbJ2VzZicsICdhcHBsaWNhdGlvbi92bmQuZXBzb24uZXNmJ10sXG4gICAgWydldDMnLCAnYXBwbGljYXRpb24vdm5kLmVzemlnbm8zK3htbCddLFxuICAgIFsnZXR4JywgJ3RleHQveC1zZXRleHQnXSxcbiAgICBbJ2V2YScsICdhcHBsaWNhdGlvbi94LWV2YSddLFxuICAgIFsnZXZ5JywgJ2FwcGxpY2F0aW9uL3gtZW52b3knXSxcbiAgICBbJ2V4ZScsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2V4aScsICdhcHBsaWNhdGlvbi9leGknXSxcbiAgICBbJ2V4cCcsICdhcHBsaWNhdGlvbi9leHByZXNzJ10sXG4gICAgWydleHInLCAnaW1hZ2UvYWNlcyddLFxuICAgIFsnZXh0JywgJ2FwcGxpY2F0aW9uL3ZuZC5ub3ZhZGlnbS5leHQnXSxcbiAgICBbJ2V6JywgJ2FwcGxpY2F0aW9uL2FuZHJldy1pbnNldCddLFxuICAgIFsnZXoyJywgJ2FwcGxpY2F0aW9uL3ZuZC5lenBpeC1hbGJ1bSddLFxuICAgIFsnZXozJywgJ2FwcGxpY2F0aW9uL3ZuZC5lenBpeC1wYWNrYWdlJ10sXG4gICAgWydmJywgJ3RleHQveC1mb3J0cmFuJ10sXG4gICAgWydmNHYnLCAndmlkZW8vbXA0J10sXG4gICAgWydmNzcnLCAndGV4dC94LWZvcnRyYW4nXSxcbiAgICBbJ2Y5MCcsICd0ZXh0L3gtZm9ydHJhbiddLFxuICAgIFsnZmJzJywgJ2ltYWdlL3ZuZC5mYXN0Ymlkc2hlZXQnXSxcbiAgICBbJ2ZjZHQnLCAnYXBwbGljYXRpb24vdm5kLmFkb2JlLmZvcm1zY2VudHJhbC5mY2R0J10sXG4gICAgWydmY3MnLCAnYXBwbGljYXRpb24vdm5kLmlzYWMuZmNzJ10sXG4gICAgWydmZGYnLCAnYXBwbGljYXRpb24vdm5kLmZkZiddLFxuICAgIFsnZmR0JywgJ2FwcGxpY2F0aW9uL2ZkdCt4bWwnXSxcbiAgICBbJ2ZlX2xhdW5jaCcsICdhcHBsaWNhdGlvbi92bmQuZGVub3ZvLmZjc2VsYXlvdXQtbGluayddLFxuICAgIFsnZmc1JywgJ2FwcGxpY2F0aW9uL3ZuZC5mdWppdHN1Lm9hc3lzZ3AnXSxcbiAgICBbJ2ZnZCcsICdhcHBsaWNhdGlvbi94LWRpcmVjdG9yJ10sXG4gICAgWydmaCcsICdpbWFnZS94LWZyZWVoYW5kJ10sXG4gICAgWydmaDQnLCAnaW1hZ2UveC1mcmVlaGFuZCddLFxuICAgIFsnZmg1JywgJ2ltYWdlL3gtZnJlZWhhbmQnXSxcbiAgICBbJ2ZoNycsICdpbWFnZS94LWZyZWVoYW5kJ10sXG4gICAgWydmaGMnLCAnaW1hZ2UveC1mcmVlaGFuZCddLFxuICAgIFsnZmlnJywgJ2FwcGxpY2F0aW9uL3gteGZpZyddLFxuICAgIFsnZml0cycsICdpbWFnZS9maXRzJ10sXG4gICAgWydmbGFjJywgJ2F1ZGlvL3gtZmxhYyddLFxuICAgIFsnZmxpJywgJ3ZpZGVvL3gtZmxpJ10sXG4gICAgWydmbG8nLCAnYXBwbGljYXRpb24vdm5kLm1pY3JvZ3JhZnguZmxvJ10sXG4gICAgWydmbHYnLCAndmlkZW8veC1mbHYnXSxcbiAgICBbJ2ZsdycsICdhcHBsaWNhdGlvbi92bmQua2RlLmtpdmlvJ10sXG4gICAgWydmbHgnLCAndGV4dC92bmQuZm1pLmZsZXhzdG9yJ10sXG4gICAgWydmbHknLCAndGV4dC92bmQuZmx5J10sXG4gICAgWydmbScsICdhcHBsaWNhdGlvbi92bmQuZnJhbWVtYWtlciddLFxuICAgIFsnZm5jJywgJ2FwcGxpY2F0aW9uL3ZuZC5mcm9nYW5zLmZuYyddLFxuICAgIFsnZm8nLCAnYXBwbGljYXRpb24vdm5kLnNvZnR3YXJlNjAyLmZpbGxlci5mb3JtK3htbCddLFxuICAgIFsnZm9yJywgJ3RleHQveC1mb3J0cmFuJ10sXG4gICAgWydmcHgnLCAnaW1hZ2Uvdm5kLmZweCddLFxuICAgIFsnZnJhbWUnLCAnYXBwbGljYXRpb24vdm5kLmZyYW1lbWFrZXInXSxcbiAgICBbJ2ZzYycsICdhcHBsaWNhdGlvbi92bmQuZnNjLndlYmxhdW5jaCddLFxuICAgIFsnZnN0JywgJ2ltYWdlL3ZuZC5mc3QnXSxcbiAgICBbJ2Z0YycsICdhcHBsaWNhdGlvbi92bmQuZmx1eHRpbWUuY2xpcCddLFxuICAgIFsnZnRpJywgJ2FwcGxpY2F0aW9uL3ZuZC5hbnNlci13ZWItZnVuZHMtdHJhbnNmZXItaW5pdGlhdGlvbiddLFxuICAgIFsnZnZ0JywgJ3ZpZGVvL3ZuZC5mdnQnXSxcbiAgICBbJ2Z4cCcsICdhcHBsaWNhdGlvbi92bmQuYWRvYmUuZnhwJ10sXG4gICAgWydmeHBsJywgJ2FwcGxpY2F0aW9uL3ZuZC5hZG9iZS5meHAnXSxcbiAgICBbJ2Z6cycsICdhcHBsaWNhdGlvbi92bmQuZnV6enlzaGVldCddLFxuICAgIFsnZzJ3JywgJ2FwcGxpY2F0aW9uL3ZuZC5nZW9wbGFuJ10sXG4gICAgWydnMycsICdpbWFnZS9nM2ZheCddLFxuICAgIFsnZzN3JywgJ2FwcGxpY2F0aW9uL3ZuZC5nZW9zcGFjZSddLFxuICAgIFsnZ2FjJywgJ2FwcGxpY2F0aW9uL3ZuZC5ncm9vdmUtYWNjb3VudCddLFxuICAgIFsnZ2FtJywgJ2FwcGxpY2F0aW9uL3gtdGFkcyddLFxuICAgIFsnZ2JyJywgJ2FwcGxpY2F0aW9uL3Jwa2ktZ2hvc3RidXN0ZXJzJ10sXG4gICAgWydnY2EnLCAnYXBwbGljYXRpb24veC1nY2EtY29tcHJlc3NlZCddLFxuICAgIFsnZ2RsJywgJ21vZGVsL3ZuZC5nZGwnXSxcbiAgICBbJ2dkb2MnLCAnYXBwbGljYXRpb24vdm5kLmdvb2dsZS1hcHBzLmRvY3VtZW50J10sXG4gICAgWydnZW8nLCAnYXBwbGljYXRpb24vdm5kLmR5bmFnZW8nXSxcbiAgICBbJ2dlb2pzb24nLCAnYXBwbGljYXRpb24vZ2VvK2pzb24nXSxcbiAgICBbJ2dleCcsICdhcHBsaWNhdGlvbi92bmQuZ2VvbWV0cnktZXhwbG9yZXInXSxcbiAgICBbJ2dnYicsICdhcHBsaWNhdGlvbi92bmQuZ2VvZ2VicmEuZmlsZSddLFxuICAgIFsnZ2d0JywgJ2FwcGxpY2F0aW9uL3ZuZC5nZW9nZWJyYS50b29sJ10sXG4gICAgWydnaGYnLCAnYXBwbGljYXRpb24vdm5kLmdyb292ZS1oZWxwJ10sXG4gICAgWydnaWYnLCAnaW1hZ2UvZ2lmJ10sXG4gICAgWydnaW0nLCAnYXBwbGljYXRpb24vdm5kLmdyb292ZS1pZGVudGl0eS1tZXNzYWdlJ10sXG4gICAgWydnbGInLCAnbW9kZWwvZ2x0Zi1iaW5hcnknXSxcbiAgICBbJ2dsdGYnLCAnbW9kZWwvZ2x0Zitqc29uJ10sXG4gICAgWydnbWwnLCAnYXBwbGljYXRpb24vZ21sK3htbCddLFxuICAgIFsnZ214JywgJ2FwcGxpY2F0aW9uL3ZuZC5nbXgnXSxcbiAgICBbJ2dudW1lcmljJywgJ2FwcGxpY2F0aW9uL3gtZ251bWVyaWMnXSxcbiAgICBbJ2dwZycsICdhcHBsaWNhdGlvbi9ncGcta2V5cyddLFxuICAgIFsnZ3BoJywgJ2FwcGxpY2F0aW9uL3ZuZC5mbG9ncmFwaGl0J10sXG4gICAgWydncHgnLCAnYXBwbGljYXRpb24vZ3B4K3htbCddLFxuICAgIFsnZ3FmJywgJ2FwcGxpY2F0aW9uL3ZuZC5ncmFmZXEnXSxcbiAgICBbJ2dxcycsICdhcHBsaWNhdGlvbi92bmQuZ3JhZmVxJ10sXG4gICAgWydncmFtJywgJ2FwcGxpY2F0aW9uL3NyZ3MnXSxcbiAgICBbJ2dyYW1wcycsICdhcHBsaWNhdGlvbi94LWdyYW1wcy14bWwnXSxcbiAgICBbJ2dyZScsICdhcHBsaWNhdGlvbi92bmQuZ2VvbWV0cnktZXhwbG9yZXInXSxcbiAgICBbJ2dydicsICdhcHBsaWNhdGlvbi92bmQuZ3Jvb3ZlLWluamVjdG9yJ10sXG4gICAgWydncnhtbCcsICdhcHBsaWNhdGlvbi9zcmdzK3htbCddLFxuICAgIFsnZ3NmJywgJ2FwcGxpY2F0aW9uL3gtZm9udC1naG9zdHNjcmlwdCddLFxuICAgIFsnZ3NoZWV0JywgJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtYXBwcy5zcHJlYWRzaGVldCddLFxuICAgIFsnZ3NsaWRlcycsICdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWFwcHMucHJlc2VudGF0aW9uJ10sXG4gICAgWydndGFyJywgJ2FwcGxpY2F0aW9uL3gtZ3RhciddLFxuICAgIFsnZ3RtJywgJ2FwcGxpY2F0aW9uL3ZuZC5ncm9vdmUtdG9vbC1tZXNzYWdlJ10sXG4gICAgWydndHcnLCAnbW9kZWwvdm5kLmd0dyddLFxuICAgIFsnZ3YnLCAndGV4dC92bmQuZ3JhcGh2aXonXSxcbiAgICBbJ2d4ZicsICdhcHBsaWNhdGlvbi9neGYnXSxcbiAgICBbJ2d4dCcsICdhcHBsaWNhdGlvbi92bmQuZ2VvbmV4dCddLFxuICAgIFsnZ3onLCAnYXBwbGljYXRpb24vZ3ppcCddLFxuICAgIFsnZ3ppcCcsICdhcHBsaWNhdGlvbi9nemlwJ10sXG4gICAgWydoJywgJ3RleHQveC1jJ10sXG4gICAgWydoMjYxJywgJ3ZpZGVvL2gyNjEnXSxcbiAgICBbJ2gyNjMnLCAndmlkZW8vaDI2MyddLFxuICAgIFsnaDI2NCcsICd2aWRlby9oMjY0J10sXG4gICAgWydoYWwnLCAnYXBwbGljYXRpb24vdm5kLmhhbCt4bWwnXSxcbiAgICBbJ2hiY2knLCAnYXBwbGljYXRpb24vdm5kLmhiY2knXSxcbiAgICBbJ2hicycsICd0ZXh0L3gtaGFuZGxlYmFycy10ZW1wbGF0ZSddLFxuICAgIFsnaGRkJywgJ2FwcGxpY2F0aW9uL3gtdmlydHVhbGJveC1oZGQnXSxcbiAgICBbJ2hkZicsICdhcHBsaWNhdGlvbi94LWhkZiddLFxuICAgIFsnaGVpYycsICdpbWFnZS9oZWljJ10sXG4gICAgWydoZWljcycsICdpbWFnZS9oZWljLXNlcXVlbmNlJ10sXG4gICAgWydoZWlmJywgJ2ltYWdlL2hlaWYnXSxcbiAgICBbJ2hlaWZzJywgJ2ltYWdlL2hlaWYtc2VxdWVuY2UnXSxcbiAgICBbJ2hlajInLCAnaW1hZ2UvaGVqMmsnXSxcbiAgICBbJ2hlbGQnLCAnYXBwbGljYXRpb24vYXRzYy1oZWxkK3htbCddLFxuICAgIFsnaGgnLCAndGV4dC94LWMnXSxcbiAgICBbJ2hqc29uJywgJ2FwcGxpY2F0aW9uL2hqc29uJ10sXG4gICAgWydobHAnLCAnYXBwbGljYXRpb24vd2luaGxwJ10sXG4gICAgWydocGdsJywgJ2FwcGxpY2F0aW9uL3ZuZC5ocC1ocGdsJ10sXG4gICAgWydocGlkJywgJ2FwcGxpY2F0aW9uL3ZuZC5ocC1ocGlkJ10sXG4gICAgWydocHMnLCAnYXBwbGljYXRpb24vdm5kLmhwLWhwcyddLFxuICAgIFsnaHF4JywgJ2FwcGxpY2F0aW9uL21hYy1iaW5oZXg0MCddLFxuICAgIFsnaHNqMicsICdpbWFnZS9oc2oyJ10sXG4gICAgWydodGMnLCAndGV4dC94LWNvbXBvbmVudCddLFxuICAgIFsnaHRrZScsICdhcHBsaWNhdGlvbi92bmQua2VuYW1lYWFwcCddLFxuICAgIFsnaHRtJywgJ3RleHQvaHRtbCddLFxuICAgIFsnaHRtbCcsICd0ZXh0L2h0bWwnXSxcbiAgICBbJ2h2ZCcsICdhcHBsaWNhdGlvbi92bmQueWFtYWhhLmh2LWRpYyddLFxuICAgIFsnaHZwJywgJ2FwcGxpY2F0aW9uL3ZuZC55YW1haGEuaHYtdm9pY2UnXSxcbiAgICBbJ2h2cycsICdhcHBsaWNhdGlvbi92bmQueWFtYWhhLmh2LXNjcmlwdCddLFxuICAgIFsnaTJnJywgJ2FwcGxpY2F0aW9uL3ZuZC5pbnRlcmdlbyddLFxuICAgIFsnaWNjJywgJ2FwcGxpY2F0aW9uL3ZuZC5pY2Nwcm9maWxlJ10sXG4gICAgWydpY2UnLCAneC1jb25mZXJlbmNlL3gtY29vbHRhbGsnXSxcbiAgICBbJ2ljbScsICdhcHBsaWNhdGlvbi92bmQuaWNjcHJvZmlsZSddLFxuICAgIFsnaWNvJywgJ2ltYWdlL3gtaWNvbiddLFxuICAgIFsnaWNzJywgJ3RleHQvY2FsZW5kYXInXSxcbiAgICBbJ2llZicsICdpbWFnZS9pZWYnXSxcbiAgICBbJ2lmYicsICd0ZXh0L2NhbGVuZGFyJ10sXG4gICAgWydpZm0nLCAnYXBwbGljYXRpb24vdm5kLnNoYW5hLmluZm9ybWVkLmZvcm1kYXRhJ10sXG4gICAgWydpZ2VzJywgJ21vZGVsL2lnZXMnXSxcbiAgICBbJ2lnbCcsICdhcHBsaWNhdGlvbi92bmQuaWdsb2FkZXInXSxcbiAgICBbJ2lnbScsICdhcHBsaWNhdGlvbi92bmQuaW5zb3JzLmlnbSddLFxuICAgIFsnaWdzJywgJ21vZGVsL2lnZXMnXSxcbiAgICBbJ2lneCcsICdhcHBsaWNhdGlvbi92bmQubWljcm9ncmFmeC5pZ3gnXSxcbiAgICBbJ2lpZicsICdhcHBsaWNhdGlvbi92bmQuc2hhbmEuaW5mb3JtZWQuaW50ZXJjaGFuZ2UnXSxcbiAgICBbJ2ltZycsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2ltcCcsICdhcHBsaWNhdGlvbi92bmQuYWNjcGFjLnNpbXBseS5pbXAnXSxcbiAgICBbJ2ltcycsICdhcHBsaWNhdGlvbi92bmQubXMtaW1zJ10sXG4gICAgWydpbicsICd0ZXh0L3BsYWluJ10sXG4gICAgWydpbmknLCAndGV4dC9wbGFpbiddLFxuICAgIFsnaW5rJywgJ2FwcGxpY2F0aW9uL2lua21sK3htbCddLFxuICAgIFsnaW5rbWwnLCAnYXBwbGljYXRpb24vaW5rbWwreG1sJ10sXG4gICAgWydpbnN0YWxsJywgJ2FwcGxpY2F0aW9uL3gtaW5zdGFsbC1pbnN0cnVjdGlvbnMnXSxcbiAgICBbJ2lvdGEnLCAnYXBwbGljYXRpb24vdm5kLmFzdHJhZWEtc29mdHdhcmUuaW90YSddLFxuICAgIFsnaXBmaXgnLCAnYXBwbGljYXRpb24vaXBmaXgnXSxcbiAgICBbJ2lwaycsICdhcHBsaWNhdGlvbi92bmQuc2hhbmEuaW5mb3JtZWQucGFja2FnZSddLFxuICAgIFsnaXJtJywgJ2FwcGxpY2F0aW9uL3ZuZC5pYm0ucmlnaHRzLW1hbmFnZW1lbnQnXSxcbiAgICBbJ2lycCcsICdhcHBsaWNhdGlvbi92bmQuaXJlcG9zaXRvcnkucGFja2FnZSt4bWwnXSxcbiAgICBbJ2lzbycsICdhcHBsaWNhdGlvbi94LWlzbzk2NjAtaW1hZ2UnXSxcbiAgICBbJ2l0cCcsICdhcHBsaWNhdGlvbi92bmQuc2hhbmEuaW5mb3JtZWQuZm9ybXRlbXBsYXRlJ10sXG4gICAgWydpdHMnLCAnYXBwbGljYXRpb24vaXRzK3htbCddLFxuICAgIFsnaXZwJywgJ2FwcGxpY2F0aW9uL3ZuZC5pbW1lcnZpc2lvbi1pdnAnXSxcbiAgICBbJ2l2dScsICdhcHBsaWNhdGlvbi92bmQuaW1tZXJ2aXNpb24taXZ1J10sXG4gICAgWydqYWQnLCAndGV4dC92bmQuc3VuLmoybWUuYXBwLWRlc2NyaXB0b3InXSxcbiAgICBbJ2phZGUnLCAndGV4dC9qYWRlJ10sXG4gICAgWydqYW0nLCAnYXBwbGljYXRpb24vdm5kLmphbSddLFxuICAgIFsnamFyJywgJ2FwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZSddLFxuICAgIFsnamFyZGlmZicsICdhcHBsaWNhdGlvbi94LWphdmEtYXJjaGl2ZS1kaWZmJ10sXG4gICAgWydqYXZhJywgJ3RleHQveC1qYXZhLXNvdXJjZSddLFxuICAgIFsnamhjJywgJ2ltYWdlL2pwaGMnXSxcbiAgICBbJ2ppc3AnLCAnYXBwbGljYXRpb24vdm5kLmppc3AnXSxcbiAgICBbJ2pscycsICdpbWFnZS9qbHMnXSxcbiAgICBbJ2psdCcsICdhcHBsaWNhdGlvbi92bmQuaHAtamx5dCddLFxuICAgIFsnam5nJywgJ2ltYWdlL3gtam5nJ10sXG4gICAgWydqbmxwJywgJ2FwcGxpY2F0aW9uL3gtamF2YS1qbmxwLWZpbGUnXSxcbiAgICBbJ2pvZGEnLCAnYXBwbGljYXRpb24vdm5kLmpvb3N0LmpvZGEtYXJjaGl2ZSddLFxuICAgIFsnanAyJywgJ2ltYWdlL2pwMiddLFxuICAgIFsnanBlJywgJ2ltYWdlL2pwZWcnXSxcbiAgICBbJ2pwZWcnLCAnaW1hZ2UvanBlZyddLFxuICAgIFsnanBmJywgJ2ltYWdlL2pweCddLFxuICAgIFsnanBnJywgJ2ltYWdlL2pwZWcnXSxcbiAgICBbJ2pwZzInLCAnaW1hZ2UvanAyJ10sXG4gICAgWydqcGdtJywgJ3ZpZGVvL2pwbSddLFxuICAgIFsnanBndicsICd2aWRlby9qcGVnJ10sXG4gICAgWydqcGgnLCAnaW1hZ2UvanBoJ10sXG4gICAgWydqcG0nLCAndmlkZW8vanBtJ10sXG4gICAgWydqcHgnLCAnaW1hZ2UvanB4J10sXG4gICAgWydqcycsICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J10sXG4gICAgWydqc29uJywgJ2FwcGxpY2F0aW9uL2pzb24nXSxcbiAgICBbJ2pzb241JywgJ2FwcGxpY2F0aW9uL2pzb241J10sXG4gICAgWydqc29ubGQnLCAnYXBwbGljYXRpb24vbGQranNvbiddLFxuICAgIC8vIGh0dHBzOi8vanNvbmxpbmVzLm9yZy9cbiAgICBbJ2pzb25sJywgJ2FwcGxpY2F0aW9uL2pzb25sJ10sXG4gICAgWydqc29ubWwnLCAnYXBwbGljYXRpb24vanNvbm1sK2pzb24nXSxcbiAgICBbJ2pzeCcsICd0ZXh0L2pzeCddLFxuICAgIFsnanhyJywgJ2ltYWdlL2p4ciddLFxuICAgIFsnanhyYScsICdpbWFnZS9qeHJhJ10sXG4gICAgWydqeHJzJywgJ2ltYWdlL2p4cnMnXSxcbiAgICBbJ2p4cycsICdpbWFnZS9qeHMnXSxcbiAgICBbJ2p4c2MnLCAnaW1hZ2UvanhzYyddLFxuICAgIFsnanhzaScsICdpbWFnZS9qeHNpJ10sXG4gICAgWydqeHNzJywgJ2ltYWdlL2p4c3MnXSxcbiAgICBbJ2thcicsICdhdWRpby9taWRpJ10sXG4gICAgWydrYXJib24nLCAnYXBwbGljYXRpb24vdm5kLmtkZS5rYXJib24nXSxcbiAgICBbJ2tkYicsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2tkYngnLCAnYXBwbGljYXRpb24veC1rZWVwYXNzMiddLFxuICAgIFsna2V5JywgJ2FwcGxpY2F0aW9uL3gtaXdvcmsta2V5bm90ZS1zZmZrZXknXSxcbiAgICBbJ2tmbycsICdhcHBsaWNhdGlvbi92bmQua2RlLmtmb3JtdWxhJ10sXG4gICAgWydraWEnLCAnYXBwbGljYXRpb24vdm5kLmtpZHNwaXJhdGlvbiddLFxuICAgIFsna21sJywgJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtZWFydGgua21sK3htbCddLFxuICAgIFsna216JywgJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtZWFydGgua216J10sXG4gICAgWydrbmUnLCAnYXBwbGljYXRpb24vdm5kLmtpbmFyJ10sXG4gICAgWydrbnAnLCAnYXBwbGljYXRpb24vdm5kLmtpbmFyJ10sXG4gICAgWydrb24nLCAnYXBwbGljYXRpb24vdm5kLmtkZS5rb250b3VyJ10sXG4gICAgWydrcHInLCAnYXBwbGljYXRpb24vdm5kLmtkZS5rcHJlc2VudGVyJ10sXG4gICAgWydrcHQnLCAnYXBwbGljYXRpb24vdm5kLmtkZS5rcHJlc2VudGVyJ10sXG4gICAgWydrcHh4JywgJ2FwcGxpY2F0aW9uL3ZuZC5kcy1rZXlwb2ludCddLFxuICAgIFsna3NwJywgJ2FwcGxpY2F0aW9uL3ZuZC5rZGUua3NwcmVhZCddLFxuICAgIFsna3RyJywgJ2FwcGxpY2F0aW9uL3ZuZC5rYWhvb3R6J10sXG4gICAgWydrdHgnLCAnaW1hZ2Uva3R4J10sXG4gICAgWydrdHgyJywgJ2ltYWdlL2t0eDInXSxcbiAgICBbJ2t0eicsICdhcHBsaWNhdGlvbi92bmQua2Fob290eiddLFxuICAgIFsna3dkJywgJ2FwcGxpY2F0aW9uL3ZuZC5rZGUua3dvcmQnXSxcbiAgICBbJ2t3dCcsICdhcHBsaWNhdGlvbi92bmQua2RlLmt3b3JkJ10sXG4gICAgWydsYXN4bWwnLCAnYXBwbGljYXRpb24vdm5kLmxhcy5sYXMreG1sJ10sXG4gICAgWydsYXRleCcsICdhcHBsaWNhdGlvbi94LWxhdGV4J10sXG4gICAgWydsYmQnLCAnYXBwbGljYXRpb24vdm5kLmxsYW1hZ3JhcGhpY3MubGlmZS1iYWxhbmNlLmRlc2t0b3AnXSxcbiAgICBbJ2xiZScsICdhcHBsaWNhdGlvbi92bmQubGxhbWFncmFwaGljcy5saWZlLWJhbGFuY2UuZXhjaGFuZ2UreG1sJ10sXG4gICAgWydsZXMnLCAnYXBwbGljYXRpb24vdm5kLmhoZS5sZXNzb24tcGxheWVyJ10sXG4gICAgWydsZXNzJywgJ3RleHQvbGVzcyddLFxuICAgIFsnbGdyJywgJ2FwcGxpY2F0aW9uL2xncit4bWwnXSxcbiAgICBbJ2xoYScsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2xpbms2NicsICdhcHBsaWNhdGlvbi92bmQucm91dGU2Ni5saW5rNjYreG1sJ10sXG4gICAgWydsaXN0JywgJ3RleHQvcGxhaW4nXSxcbiAgICBbJ2xpc3QzODIwJywgJ2FwcGxpY2F0aW9uL3ZuZC5pYm0ubW9kY2FwJ10sXG4gICAgWydsaXN0YWZwJywgJ2FwcGxpY2F0aW9uL3ZuZC5pYm0ubW9kY2FwJ10sXG4gICAgWydsaXRjb2ZmZWUnLCAndGV4dC9jb2ZmZWVzY3JpcHQnXSxcbiAgICBbJ2xuaycsICdhcHBsaWNhdGlvbi94LW1zLXNob3J0Y3V0J10sXG4gICAgWydsb2cnLCAndGV4dC9wbGFpbiddLFxuICAgIFsnbG9zdHhtbCcsICdhcHBsaWNhdGlvbi9sb3N0K3htbCddLFxuICAgIFsnbHJmJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnbHJtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1scm0nXSxcbiAgICBbJ2x0ZicsICdhcHBsaWNhdGlvbi92bmQuZnJvZ2Fucy5sdGYnXSxcbiAgICBbJ2x1YScsICd0ZXh0L3gtbHVhJ10sXG4gICAgWydsdWFjJywgJ2FwcGxpY2F0aW9uL3gtbHVhLWJ5dGVjb2RlJ10sXG4gICAgWydsdnAnLCAnYXVkaW8vdm5kLmx1Y2VudC52b2ljZSddLFxuICAgIFsnbHdwJywgJ2FwcGxpY2F0aW9uL3ZuZC5sb3R1cy13b3JkcHJvJ10sXG4gICAgWydsemgnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydtMXYnLCAndmlkZW8vbXBlZyddLFxuICAgIFsnbTJhJywgJ2F1ZGlvL21wZWcnXSxcbiAgICBbJ20ydicsICd2aWRlby9tcGVnJ10sXG4gICAgWydtM2EnLCAnYXVkaW8vbXBlZyddLFxuICAgIFsnbTN1JywgJ3RleHQvcGxhaW4nXSxcbiAgICBbJ20zdTgnLCAnYXBwbGljYXRpb24vdm5kLmFwcGxlLm1wZWd1cmwnXSxcbiAgICBbJ200YScsICdhdWRpby94LW00YSddLFxuICAgIFsnbTRwJywgJ2FwcGxpY2F0aW9uL21wNCddLFxuICAgIFsnbTRzJywgJ3ZpZGVvL2lzby5zZWdtZW50J10sXG4gICAgWydtNHUnLCAnYXBwbGljYXRpb24vdm5kLm1wZWd1cmwnXSxcbiAgICBbJ200dicsICd2aWRlby94LW00diddLFxuICAgIFsnbTEzJywgJ2FwcGxpY2F0aW9uL3gtbXNtZWRpYXZpZXcnXSxcbiAgICBbJ20xNCcsICdhcHBsaWNhdGlvbi94LW1zbWVkaWF2aWV3J10sXG4gICAgWydtMjEnLCAnYXBwbGljYXRpb24vbXAyMSddLFxuICAgIFsnbWEnLCAnYXBwbGljYXRpb24vbWF0aGVtYXRpY2EnXSxcbiAgICBbJ21hZHMnLCAnYXBwbGljYXRpb24vbWFkcyt4bWwnXSxcbiAgICBbJ21hZWknLCAnYXBwbGljYXRpb24vbW10LWFlaSt4bWwnXSxcbiAgICBbJ21hZycsICdhcHBsaWNhdGlvbi92bmQuZWNvd2luLmNoYXJ0J10sXG4gICAgWydtYWtlcicsICdhcHBsaWNhdGlvbi92bmQuZnJhbWVtYWtlciddLFxuICAgIFsnbWFuJywgJ3RleHQvdHJvZmYnXSxcbiAgICBbJ21hbmlmZXN0JywgJ3RleHQvY2FjaGUtbWFuaWZlc3QnXSxcbiAgICBbJ21hcCcsICdhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgWydtYXInLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydtYXJrZG93bicsICd0ZXh0L21hcmtkb3duJ10sXG4gICAgWydtYXRobWwnLCAnYXBwbGljYXRpb24vbWF0aG1sK3htbCddLFxuICAgIFsnbWInLCAnYXBwbGljYXRpb24vbWF0aGVtYXRpY2EnXSxcbiAgICBbJ21iaycsICdhcHBsaWNhdGlvbi92bmQubW9iaXVzLm1iayddLFxuICAgIFsnbWJveCcsICdhcHBsaWNhdGlvbi9tYm94J10sXG4gICAgWydtYzEnLCAnYXBwbGljYXRpb24vdm5kLm1lZGNhbGNkYXRhJ10sXG4gICAgWydtY2QnLCAnYXBwbGljYXRpb24vdm5kLm1jZCddLFxuICAgIFsnbWN1cmwnLCAndGV4dC92bmQuY3VybC5tY3VybCddLFxuICAgIFsnbWQnLCAndGV4dC9tYXJrZG93biddLFxuICAgIFsnbWRiJywgJ2FwcGxpY2F0aW9uL3gtbXNhY2Nlc3MnXSxcbiAgICBbJ21kaScsICdpbWFnZS92bmQubXMtbW9kaSddLFxuICAgIFsnbWR4JywgJ3RleHQvbWR4J10sXG4gICAgWydtZScsICd0ZXh0L3Ryb2ZmJ10sXG4gICAgWydtZXNoJywgJ21vZGVsL21lc2gnXSxcbiAgICBbJ21ldGE0JywgJ2FwcGxpY2F0aW9uL21ldGFsaW5rNCt4bWwnXSxcbiAgICBbJ21ldGFsaW5rJywgJ2FwcGxpY2F0aW9uL21ldGFsaW5rK3htbCddLFxuICAgIFsnbWV0cycsICdhcHBsaWNhdGlvbi9tZXRzK3htbCddLFxuICAgIFsnbWZtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tZm1wJ10sXG4gICAgWydtZnQnLCAnYXBwbGljYXRpb24vcnBraS1tYW5pZmVzdCddLFxuICAgIFsnbWdwJywgJ2FwcGxpY2F0aW9uL3ZuZC5vc2dlby5tYXBndWlkZS5wYWNrYWdlJ10sXG4gICAgWydtZ3onLCAnYXBwbGljYXRpb24vdm5kLnByb3RldXMubWFnYXppbmUnXSxcbiAgICBbJ21pZCcsICdhdWRpby9taWRpJ10sXG4gICAgWydtaWRpJywgJ2F1ZGlvL21pZGknXSxcbiAgICBbJ21pZScsICdhcHBsaWNhdGlvbi94LW1pZSddLFxuICAgIFsnbWlmJywgJ2FwcGxpY2F0aW9uL3ZuZC5taWYnXSxcbiAgICBbJ21pbWUnLCAnbWVzc2FnZS9yZmM4MjInXSxcbiAgICBbJ21qMicsICd2aWRlby9tajInXSxcbiAgICBbJ21qcDInLCAndmlkZW8vbWoyJ10sXG4gICAgWydtanMnLCAnYXBwbGljYXRpb24vamF2YXNjcmlwdCddLFxuICAgIFsnbWszZCcsICd2aWRlby94LW1hdHJvc2thJ10sXG4gICAgWydta2EnLCAnYXVkaW8veC1tYXRyb3NrYSddLFxuICAgIFsnbWtkJywgJ3RleHQveC1tYXJrZG93biddLFxuICAgIFsnbWtzJywgJ3ZpZGVvL3gtbWF0cm9za2EnXSxcbiAgICBbJ21rdicsICd2aWRlby94LW1hdHJvc2thJ10sXG4gICAgWydtbHAnLCAnYXBwbGljYXRpb24vdm5kLmRvbGJ5Lm1scCddLFxuICAgIFsnbW1kJywgJ2FwcGxpY2F0aW9uL3ZuZC5jaGlwbnV0cy5rYXJhb2tlLW1tZCddLFxuICAgIFsnbW1mJywgJ2FwcGxpY2F0aW9uL3ZuZC5zbWFmJ10sXG4gICAgWydtbWwnLCAndGV4dC9tYXRobWwnXSxcbiAgICBbJ21tcicsICdpbWFnZS92bmQuZnVqaXhlcm94LmVkbWljcy1tbXInXSxcbiAgICBbJ21uZycsICd2aWRlby94LW1uZyddLFxuICAgIFsnbW55JywgJ2FwcGxpY2F0aW9uL3gtbXNtb25leSddLFxuICAgIFsnbW9iaScsICdhcHBsaWNhdGlvbi94LW1vYmlwb2NrZXQtZWJvb2snXSxcbiAgICBbJ21vZHMnLCAnYXBwbGljYXRpb24vbW9kcyt4bWwnXSxcbiAgICBbJ21vdicsICd2aWRlby9xdWlja3RpbWUnXSxcbiAgICBbJ21vdmllJywgJ3ZpZGVvL3gtc2dpLW1vdmllJ10sXG4gICAgWydtcDInLCAnYXVkaW8vbXBlZyddLFxuICAgIFsnbXAyYScsICdhdWRpby9tcGVnJ10sXG4gICAgWydtcDMnLCAnYXVkaW8vbXBlZyddLFxuICAgIFsnbXA0JywgJ3ZpZGVvL21wNCddLFxuICAgIFsnbXA0YScsICdhdWRpby9tcDQnXSxcbiAgICBbJ21wNHMnLCAnYXBwbGljYXRpb24vbXA0J10sXG4gICAgWydtcDR2JywgJ3ZpZGVvL21wNCddLFxuICAgIFsnbXAyMScsICdhcHBsaWNhdGlvbi9tcDIxJ10sXG4gICAgWydtcGMnLCAnYXBwbGljYXRpb24vdm5kLm1vcGh1bi5jZXJ0aWZpY2F0ZSddLFxuICAgIFsnbXBkJywgJ2FwcGxpY2F0aW9uL2Rhc2greG1sJ10sXG4gICAgWydtcGUnLCAndmlkZW8vbXBlZyddLFxuICAgIFsnbXBlZycsICd2aWRlby9tcGVnJ10sXG4gICAgWydtcGcnLCAndmlkZW8vbXBlZyddLFxuICAgIFsnbXBnNCcsICd2aWRlby9tcDQnXSxcbiAgICBbJ21wZ2EnLCAnYXVkaW8vbXBlZyddLFxuICAgIFsnbXBrZycsICdhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbCddLFxuICAgIFsnbXBtJywgJ2FwcGxpY2F0aW9uL3ZuZC5ibHVlaWNlLm11bHRpcGFzcyddLFxuICAgIFsnbXBuJywgJ2FwcGxpY2F0aW9uL3ZuZC5tb3BodW4uYXBwbGljYXRpb24nXSxcbiAgICBbJ21wcCcsICdhcHBsaWNhdGlvbi92bmQubXMtcHJvamVjdCddLFxuICAgIFsnbXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wcm9qZWN0J10sXG4gICAgWydtcHknLCAnYXBwbGljYXRpb24vdm5kLmlibS5taW5pcGF5J10sXG4gICAgWydtcXknLCAnYXBwbGljYXRpb24vdm5kLm1vYml1cy5tcXknXSxcbiAgICBbJ21yYycsICdhcHBsaWNhdGlvbi9tYXJjJ10sXG4gICAgWydtcmN4JywgJ2FwcGxpY2F0aW9uL21hcmN4bWwreG1sJ10sXG4gICAgWydtcycsICd0ZXh0L3Ryb2ZmJ10sXG4gICAgWydtc2NtbCcsICdhcHBsaWNhdGlvbi9tZWRpYXNlcnZlcmNvbnRyb2wreG1sJ10sXG4gICAgWydtc2VlZCcsICdhcHBsaWNhdGlvbi92bmQuZmRzbi5tc2VlZCddLFxuICAgIFsnbXNlcScsICdhcHBsaWNhdGlvbi92bmQubXNlcSddLFxuICAgIFsnbXNmJywgJ2FwcGxpY2F0aW9uL3ZuZC5lcHNvbi5tc2YnXSxcbiAgICBbJ21zZycsICdhcHBsaWNhdGlvbi92bmQubXMtb3V0bG9vayddLFxuICAgIFsnbXNoJywgJ21vZGVsL21lc2gnXSxcbiAgICBbJ21zaScsICdhcHBsaWNhdGlvbi94LW1zZG93bmxvYWQnXSxcbiAgICBbJ21zbCcsICdhcHBsaWNhdGlvbi92bmQubW9iaXVzLm1zbCddLFxuICAgIFsnbXNtJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnbXNwJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnbXN0eScsICdhcHBsaWNhdGlvbi92bmQubXV2ZWUuc3R5bGUnXSxcbiAgICBbJ210bCcsICdtb2RlbC9tdGwnXSxcbiAgICBbJ210cycsICdtb2RlbC92bmQubXRzJ10sXG4gICAgWydtdXMnLCAnYXBwbGljYXRpb24vdm5kLm11c2ljaWFuJ10sXG4gICAgWydtdXNkJywgJ2FwcGxpY2F0aW9uL21tdC11c2QreG1sJ10sXG4gICAgWydtdXNpY3htbCcsICdhcHBsaWNhdGlvbi92bmQucmVjb3JkYXJlLm11c2ljeG1sK3htbCddLFxuICAgIFsnbXZiJywgJ2FwcGxpY2F0aW9uL3gtbXNtZWRpYXZpZXcnXSxcbiAgICBbJ212dCcsICdhcHBsaWNhdGlvbi92bmQubWFwYm94LXZlY3Rvci10aWxlJ10sXG4gICAgWydtd2YnLCAnYXBwbGljYXRpb24vdm5kLm1mZXInXSxcbiAgICBbJ214ZicsICdhcHBsaWNhdGlvbi9teGYnXSxcbiAgICBbJ214bCcsICdhcHBsaWNhdGlvbi92bmQucmVjb3JkYXJlLm11c2ljeG1sJ10sXG4gICAgWydteG1mJywgJ2F1ZGlvL21vYmlsZS14bWYnXSxcbiAgICBbJ214bWwnLCAnYXBwbGljYXRpb24veHYreG1sJ10sXG4gICAgWydteHMnLCAnYXBwbGljYXRpb24vdm5kLnRyaXNjYXBlLm14cyddLFxuICAgIFsnbXh1JywgJ3ZpZGVvL3ZuZC5tcGVndXJsJ10sXG4gICAgWyduLWdhZ2UnLCAnYXBwbGljYXRpb24vdm5kLm5va2lhLm4tZ2FnZS5zeW1iaWFuLmluc3RhbGwnXSxcbiAgICBbJ24zJywgJ3RleHQvbjMnXSxcbiAgICBbJ25iJywgJ2FwcGxpY2F0aW9uL21hdGhlbWF0aWNhJ10sXG4gICAgWyduYnAnLCAnYXBwbGljYXRpb24vdm5kLndvbGZyYW0ucGxheWVyJ10sXG4gICAgWyduYycsICdhcHBsaWNhdGlvbi94LW5ldGNkZiddLFxuICAgIFsnbmN4JywgJ2FwcGxpY2F0aW9uL3gtZHRibmN4K3htbCddLFxuICAgIFsnbmZvJywgJ3RleHQveC1uZm8nXSxcbiAgICBbJ25nZGF0JywgJ2FwcGxpY2F0aW9uL3ZuZC5ub2tpYS5uLWdhZ2UuZGF0YSddLFxuICAgIFsnbml0ZicsICdhcHBsaWNhdGlvbi92bmQubml0ZiddLFxuICAgIFsnbmx1JywgJ2FwcGxpY2F0aW9uL3ZuZC5uZXVyb2xhbmd1YWdlLm5sdSddLFxuICAgIFsnbm1sJywgJ2FwcGxpY2F0aW9uL3ZuZC5lbmxpdmVuJ10sXG4gICAgWydubmQnLCAnYXBwbGljYXRpb24vdm5kLm5vYmxlbmV0LWRpcmVjdG9yeSddLFxuICAgIFsnbm5zJywgJ2FwcGxpY2F0aW9uL3ZuZC5ub2JsZW5ldC1zZWFsZXInXSxcbiAgICBbJ25udycsICdhcHBsaWNhdGlvbi92bmQubm9ibGVuZXQtd2ViJ10sXG4gICAgWyducHgnLCAnaW1hZ2Uvdm5kLm5ldC1mcHgnXSxcbiAgICBbJ25xJywgJ2FwcGxpY2F0aW9uL24tcXVhZHMnXSxcbiAgICBbJ25zYycsICdhcHBsaWNhdGlvbi94LWNvbmZlcmVuY2UnXSxcbiAgICBbJ25zZicsICdhcHBsaWNhdGlvbi92bmQubG90dXMtbm90ZXMnXSxcbiAgICBbJ250JywgJ2FwcGxpY2F0aW9uL24tdHJpcGxlcyddLFxuICAgIFsnbnRmJywgJ2FwcGxpY2F0aW9uL3ZuZC5uaXRmJ10sXG4gICAgWydudW1iZXJzJywgJ2FwcGxpY2F0aW9uL3gtaXdvcmstbnVtYmVycy1zZmZudW1iZXJzJ10sXG4gICAgWyduemInLCAnYXBwbGljYXRpb24veC1uemInXSxcbiAgICBbJ29hMicsICdhcHBsaWNhdGlvbi92bmQuZnVqaXRzdS5vYXN5czInXSxcbiAgICBbJ29hMycsICdhcHBsaWNhdGlvbi92bmQuZnVqaXRzdS5vYXN5czMnXSxcbiAgICBbJ29hcycsICdhcHBsaWNhdGlvbi92bmQuZnVqaXRzdS5vYXN5cyddLFxuICAgIFsnb2JkJywgJ2FwcGxpY2F0aW9uL3gtbXNiaW5kZXInXSxcbiAgICBbJ29iZ3gnLCAnYXBwbGljYXRpb24vdm5kLm9wZW5ibG94LmdhbWUreG1sJ10sXG4gICAgWydvYmonLCAnbW9kZWwvb2JqJ10sXG4gICAgWydvZGEnLCAnYXBwbGljYXRpb24vb2RhJ10sXG4gICAgWydvZGInLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5kYXRhYmFzZSddLFxuICAgIFsnb2RjJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuY2hhcnQnXSxcbiAgICBbJ29kZicsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmZvcm11bGEnXSxcbiAgICBbJ29kZnQnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5mb3JtdWxhLXRlbXBsYXRlJ10sXG4gICAgWydvZGcnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5ncmFwaGljcyddLFxuICAgIFsnb2RpJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuaW1hZ2UnXSxcbiAgICBbJ29kbScsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQtbWFzdGVyJ10sXG4gICAgWydvZHAnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nXSxcbiAgICBbJ29kcycsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0J10sXG4gICAgWydvZHQnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0J10sXG4gICAgWydvZ2EnLCAnYXVkaW8vb2dnJ10sXG4gICAgWydvZ2V4JywgJ21vZGVsL3ZuZC5vcGVuZ2V4J10sXG4gICAgWydvZ2cnLCAnYXVkaW8vb2dnJ10sXG4gICAgWydvZ3YnLCAndmlkZW8vb2dnJ10sXG4gICAgWydvZ3gnLCAnYXBwbGljYXRpb24vb2dnJ10sXG4gICAgWydvbWRvYycsICdhcHBsaWNhdGlvbi9vbWRvYyt4bWwnXSxcbiAgICBbJ29uZXBrZycsICdhcHBsaWNhdGlvbi9vbmVub3RlJ10sXG4gICAgWydvbmV0bXAnLCAnYXBwbGljYXRpb24vb25lbm90ZSddLFxuICAgIFsnb25ldG9jJywgJ2FwcGxpY2F0aW9uL29uZW5vdGUnXSxcbiAgICBbJ29uZXRvYzInLCAnYXBwbGljYXRpb24vb25lbm90ZSddLFxuICAgIFsnb3BmJywgJ2FwcGxpY2F0aW9uL29lYnBzLXBhY2thZ2UreG1sJ10sXG4gICAgWydvcG1sJywgJ3RleHQveC1vcG1sJ10sXG4gICAgWydvcHJjJywgJ2FwcGxpY2F0aW9uL3ZuZC5wYWxtJ10sXG4gICAgWydvcHVzJywgJ2F1ZGlvL29nZyddLFxuICAgIFsnb3JnJywgJ3RleHQveC1vcmcnXSxcbiAgICBbJ29zZicsICdhcHBsaWNhdGlvbi92bmQueWFtYWhhLm9wZW5zY29yZWZvcm1hdCddLFxuICAgIFsnb3NmcHZnJywgJ2FwcGxpY2F0aW9uL3ZuZC55YW1haGEub3BlbnNjb3JlZm9ybWF0Lm9zZnB2Zyt4bWwnXSxcbiAgICBbJ29zbScsICdhcHBsaWNhdGlvbi92bmQub3BlbnN0cmVldG1hcC5kYXRhK3htbCddLFxuICAgIFsnb3RjJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuY2hhcnQtdGVtcGxhdGUnXSxcbiAgICBbJ290ZicsICdmb250L290ZiddLFxuICAgIFsnb3RnJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuZ3JhcGhpY3MtdGVtcGxhdGUnXSxcbiAgICBbJ290aCcsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQtd2ViJ10sXG4gICAgWydvdGknLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5pbWFnZS10ZW1wbGF0ZSddLFxuICAgIFsnb3RwJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uLXRlbXBsYXRlJ10sXG4gICAgWydvdHMnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldC10ZW1wbGF0ZSddLFxuICAgIFsnb3R0JywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dC10ZW1wbGF0ZSddLFxuICAgIFsnb3ZhJywgJ2FwcGxpY2F0aW9uL3gtdmlydHVhbGJveC1vdmEnXSxcbiAgICBbJ292ZicsICdhcHBsaWNhdGlvbi94LXZpcnR1YWxib3gtb3ZmJ10sXG4gICAgWydvd2wnLCAnYXBwbGljYXRpb24vcmRmK3htbCddLFxuICAgIFsnb3hwcycsICdhcHBsaWNhdGlvbi9veHBzJ10sXG4gICAgWydveHQnLCAnYXBwbGljYXRpb24vdm5kLm9wZW5vZmZpY2VvcmcuZXh0ZW5zaW9uJ10sXG4gICAgWydwJywgJ3RleHQveC1wYXNjYWwnXSxcbiAgICBbJ3A3YScsICdhcHBsaWNhdGlvbi94LXBrY3M3LXNpZ25hdHVyZSddLFxuICAgIFsncDdiJywgJ2FwcGxpY2F0aW9uL3gtcGtjczctY2VydGlmaWNhdGVzJ10sXG4gICAgWydwN2MnLCAnYXBwbGljYXRpb24vcGtjczctbWltZSddLFxuICAgIFsncDdtJywgJ2FwcGxpY2F0aW9uL3BrY3M3LW1pbWUnXSxcbiAgICBbJ3A3cicsICdhcHBsaWNhdGlvbi94LXBrY3M3LWNlcnRyZXFyZXNwJ10sXG4gICAgWydwN3MnLCAnYXBwbGljYXRpb24vcGtjczctc2lnbmF0dXJlJ10sXG4gICAgWydwOCcsICdhcHBsaWNhdGlvbi9wa2NzOCddLFxuICAgIFsncDEwJywgJ2FwcGxpY2F0aW9uL3gtcGtjczEwJ10sXG4gICAgWydwMTInLCAnYXBwbGljYXRpb24veC1wa2NzMTInXSxcbiAgICBbJ3BhYycsICdhcHBsaWNhdGlvbi94LW5zLXByb3h5LWF1dG9jb25maWcnXSxcbiAgICBbJ3BhZ2VzJywgJ2FwcGxpY2F0aW9uL3gtaXdvcmstcGFnZXMtc2ZmcGFnZXMnXSxcbiAgICBbJ3BhcycsICd0ZXh0L3gtcGFzY2FsJ10sXG4gICAgWydwYXcnLCAnYXBwbGljYXRpb24vdm5kLnBhd2FhZmlsZSddLFxuICAgIFsncGJkJywgJ2FwcGxpY2F0aW9uL3ZuZC5wb3dlcmJ1aWxkZXI2J10sXG4gICAgWydwYm0nLCAnaW1hZ2UveC1wb3J0YWJsZS1iaXRtYXAnXSxcbiAgICBbJ3BjYXAnLCAnYXBwbGljYXRpb24vdm5kLnRjcGR1bXAucGNhcCddLFxuICAgIFsncGNmJywgJ2FwcGxpY2F0aW9uL3gtZm9udC1wY2YnXSxcbiAgICBbJ3BjbCcsICdhcHBsaWNhdGlvbi92bmQuaHAtcGNsJ10sXG4gICAgWydwY2x4bCcsICdhcHBsaWNhdGlvbi92bmQuaHAtcGNseGwnXSxcbiAgICBbJ3BjdCcsICdpbWFnZS94LXBpY3QnXSxcbiAgICBbJ3BjdXJsJywgJ2FwcGxpY2F0aW9uL3ZuZC5jdXJsLnBjdXJsJ10sXG4gICAgWydwY3gnLCAnaW1hZ2UveC1wY3gnXSxcbiAgICBbJ3BkYicsICdhcHBsaWNhdGlvbi94LXBpbG90J10sXG4gICAgWydwZGUnLCAndGV4dC94LXByb2Nlc3NpbmcnXSxcbiAgICBbJ3BkZicsICdhcHBsaWNhdGlvbi9wZGYnXSxcbiAgICBbJ3BlbScsICdhcHBsaWNhdGlvbi94LXg1MDktdXNlci1jZXJ0J10sXG4gICAgWydwZmEnLCAnYXBwbGljYXRpb24veC1mb250LXR5cGUxJ10sXG4gICAgWydwZmInLCAnYXBwbGljYXRpb24veC1mb250LXR5cGUxJ10sXG4gICAgWydwZm0nLCAnYXBwbGljYXRpb24veC1mb250LXR5cGUxJ10sXG4gICAgWydwZnInLCAnYXBwbGljYXRpb24vZm9udC10ZHBmciddLFxuICAgIFsncGZ4JywgJ2FwcGxpY2F0aW9uL3gtcGtjczEyJ10sXG4gICAgWydwZ20nLCAnaW1hZ2UveC1wb3J0YWJsZS1ncmF5bWFwJ10sXG4gICAgWydwZ24nLCAnYXBwbGljYXRpb24veC1jaGVzcy1wZ24nXSxcbiAgICBbJ3BncCcsICdhcHBsaWNhdGlvbi9wZ3AnXSxcbiAgICBbJ3BocCcsICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCddLFxuICAgIFsncGhwMycsICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCddLFxuICAgIFsncGhwNCcsICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCddLFxuICAgIFsncGhwcycsICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocC1zb3VyY2UnXSxcbiAgICBbJ3BodG1sJywgJ2FwcGxpY2F0aW9uL3gtaHR0cGQtcGhwJ10sXG4gICAgWydwaWMnLCAnaW1hZ2UveC1waWN0J10sXG4gICAgWydwa2cnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydwa2knLCAnYXBwbGljYXRpb24vcGtpeGNtcCddLFxuICAgIFsncGtpcGF0aCcsICdhcHBsaWNhdGlvbi9wa2l4LXBraXBhdGgnXSxcbiAgICBbJ3BrcGFzcycsICdhcHBsaWNhdGlvbi92bmQuYXBwbGUucGtwYXNzJ10sXG4gICAgWydwbCcsICdhcHBsaWNhdGlvbi94LXBlcmwnXSxcbiAgICBbJ3BsYicsICdhcHBsaWNhdGlvbi92bmQuM2dwcC5waWMtYnctbGFyZ2UnXSxcbiAgICBbJ3BsYycsICdhcHBsaWNhdGlvbi92bmQubW9iaXVzLnBsYyddLFxuICAgIFsncGxmJywgJ2FwcGxpY2F0aW9uL3ZuZC5wb2NrZXRsZWFybiddLFxuICAgIFsncGxzJywgJ2FwcGxpY2F0aW9uL3Bscyt4bWwnXSxcbiAgICBbJ3BtJywgJ2FwcGxpY2F0aW9uL3gtcGVybCddLFxuICAgIFsncG1sJywgJ2FwcGxpY2F0aW9uL3ZuZC5jdGMtcG9zbWwnXSxcbiAgICBbJ3BuZycsICdpbWFnZS9wbmcnXSxcbiAgICBbJ3BubScsICdpbWFnZS94LXBvcnRhYmxlLWFueW1hcCddLFxuICAgIFsncG9ydHBrZycsICdhcHBsaWNhdGlvbi92bmQubWFjcG9ydHMucG9ydHBrZyddLFxuICAgIFsncG90JywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50J10sXG4gICAgWydwb3RtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50LnByZXNlbnRhdGlvbi5tYWNyb0VuYWJsZWQuMTInXSxcbiAgICBbJ3BvdHgnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnRlbXBsYXRlJ10sXG4gICAgWydwcGEnLCAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnXSxcbiAgICBbJ3BwYW0nLCAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQuYWRkaW4ubWFjcm9FbmFibGVkLjEyJ10sXG4gICAgWydwcGQnLCAnYXBwbGljYXRpb24vdm5kLmN1cHMtcHBkJ10sXG4gICAgWydwcG0nLCAnaW1hZ2UveC1wb3J0YWJsZS1waXhtYXAnXSxcbiAgICBbJ3BwcycsICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCddLFxuICAgIFsncHBzbScsICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5zbGlkZXNob3cubWFjcm9FbmFibGVkLjEyJ10sXG4gICAgWydwcHN4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5zbGlkZXNob3cnXSxcbiAgICBbJ3BwdCcsICdhcHBsaWNhdGlvbi9wb3dlcnBvaW50J10sXG4gICAgWydwcHRtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50LnByZXNlbnRhdGlvbi5tYWNyb0VuYWJsZWQuMTInXSxcbiAgICBbJ3BwdHgnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbiddLFxuICAgIFsncHFhJywgJ2FwcGxpY2F0aW9uL3ZuZC5wYWxtJ10sXG4gICAgWydwcmMnLCAnYXBwbGljYXRpb24veC1waWxvdCddLFxuICAgIFsncHJlJywgJ2FwcGxpY2F0aW9uL3ZuZC5sb3R1cy1mcmVlbGFuY2UnXSxcbiAgICBbJ3ByZicsICdhcHBsaWNhdGlvbi9waWNzLXJ1bGVzJ10sXG4gICAgWydwcm92eCcsICdhcHBsaWNhdGlvbi9wcm92ZW5hbmNlK3htbCddLFxuICAgIFsncHMnLCAnYXBwbGljYXRpb24vcG9zdHNjcmlwdCddLFxuICAgIFsncHNiJywgJ2FwcGxpY2F0aW9uL3ZuZC4zZ3BwLnBpYy1idy1zbWFsbCddLFxuICAgIFsncHNkJywgJ2FwcGxpY2F0aW9uL3gtcGhvdG9zaG9wJ10sXG4gICAgWydwc2YnLCAnYXBwbGljYXRpb24veC1mb250LWxpbnV4LXBzZiddLFxuICAgIFsncHNrY3htbCcsICdhcHBsaWNhdGlvbi9wc2tjK3htbCddLFxuICAgIFsncHRpJywgJ2ltYWdlL3Bycy5wdGknXSxcbiAgICBbJ3B0aWQnLCAnYXBwbGljYXRpb24vdm5kLnB2aS5wdGlkMSddLFxuICAgIFsncHViJywgJ2FwcGxpY2F0aW9uL3gtbXNwdWJsaXNoZXInXSxcbiAgICBbJ3B2YicsICdhcHBsaWNhdGlvbi92bmQuM2dwcC5waWMtYnctdmFyJ10sXG4gICAgWydwd24nLCAnYXBwbGljYXRpb24vdm5kLjNtLnBvc3QtaXQtbm90ZXMnXSxcbiAgICBbJ3B5YScsICdhdWRpby92bmQubXMtcGxheXJlYWR5Lm1lZGlhLnB5YSddLFxuICAgIFsncHl2JywgJ3ZpZGVvL3ZuZC5tcy1wbGF5cmVhZHkubWVkaWEucHl2J10sXG4gICAgWydxYW0nLCAnYXBwbGljYXRpb24vdm5kLmVwc29uLnF1aWNrYW5pbWUnXSxcbiAgICBbJ3FibycsICdhcHBsaWNhdGlvbi92bmQuaW50dS5xYm8nXSxcbiAgICBbJ3FmeCcsICdhcHBsaWNhdGlvbi92bmQuaW50dS5xZngnXSxcbiAgICBbJ3FwcycsICdhcHBsaWNhdGlvbi92bmQucHVibGlzaGFyZS1kZWx0YS10cmVlJ10sXG4gICAgWydxdCcsICd2aWRlby9xdWlja3RpbWUnXSxcbiAgICBbJ3F3ZCcsICdhcHBsaWNhdGlvbi92bmQucXVhcmsucXVhcmt4cHJlc3MnXSxcbiAgICBbJ3F3dCcsICdhcHBsaWNhdGlvbi92bmQucXVhcmsucXVhcmt4cHJlc3MnXSxcbiAgICBbJ3F4YicsICdhcHBsaWNhdGlvbi92bmQucXVhcmsucXVhcmt4cHJlc3MnXSxcbiAgICBbJ3F4ZCcsICdhcHBsaWNhdGlvbi92bmQucXVhcmsucXVhcmt4cHJlc3MnXSxcbiAgICBbJ3F4bCcsICdhcHBsaWNhdGlvbi92bmQucXVhcmsucXVhcmt4cHJlc3MnXSxcbiAgICBbJ3F4dCcsICdhcHBsaWNhdGlvbi92bmQucXVhcmsucXVhcmt4cHJlc3MnXSxcbiAgICBbJ3JhJywgJ2F1ZGlvL3gtcmVhbGF1ZGlvJ10sXG4gICAgWydyYW0nLCAnYXVkaW8veC1wbi1yZWFsYXVkaW8nXSxcbiAgICBbJ3JhbWwnLCAnYXBwbGljYXRpb24vcmFtbCt5YW1sJ10sXG4gICAgWydyYXBkJywgJ2FwcGxpY2F0aW9uL3JvdXRlLWFwZCt4bWwnXSxcbiAgICBbJ3JhcicsICdhcHBsaWNhdGlvbi94LXJhciddLFxuICAgIFsncmFzJywgJ2ltYWdlL3gtY211LXJhc3RlciddLFxuICAgIFsncmNwcm9maWxlJywgJ2FwcGxpY2F0aW9uL3ZuZC5pcHVucGx1Z2dlZC5yY3Byb2ZpbGUnXSxcbiAgICBbJ3JkZicsICdhcHBsaWNhdGlvbi9yZGYreG1sJ10sXG4gICAgWydyZHonLCAnYXBwbGljYXRpb24vdm5kLmRhdGEtdmlzaW9uLnJkeiddLFxuICAgIFsncmVsbycsICdhcHBsaWNhdGlvbi9wMnAtb3ZlcmxheSt4bWwnXSxcbiAgICBbJ3JlcCcsICdhcHBsaWNhdGlvbi92bmQuYnVzaW5lc3NvYmplY3RzJ10sXG4gICAgWydyZXMnLCAnYXBwbGljYXRpb24veC1kdGJyZXNvdXJjZSt4bWwnXSxcbiAgICBbJ3JnYicsICdpbWFnZS94LXJnYiddLFxuICAgIFsncmlmJywgJ2FwcGxpY2F0aW9uL3JlZ2luZm8reG1sJ10sXG4gICAgWydyaXAnLCAnYXVkaW8vdm5kLnJpcCddLFxuICAgIFsncmlzJywgJ2FwcGxpY2F0aW9uL3gtcmVzZWFyY2gtaW5mby1zeXN0ZW1zJ10sXG4gICAgWydybCcsICdhcHBsaWNhdGlvbi9yZXNvdXJjZS1saXN0cyt4bWwnXSxcbiAgICBbJ3JsYycsICdpbWFnZS92bmQuZnVqaXhlcm94LmVkbWljcy1ybGMnXSxcbiAgICBbJ3JsZCcsICdhcHBsaWNhdGlvbi9yZXNvdXJjZS1saXN0cy1kaWZmK3htbCddLFxuICAgIFsncm0nLCAnYXVkaW8veC1wbi1yZWFsYXVkaW8nXSxcbiAgICBbJ3JtaScsICdhdWRpby9taWRpJ10sXG4gICAgWydybXAnLCAnYXVkaW8veC1wbi1yZWFsYXVkaW8tcGx1Z2luJ10sXG4gICAgWydybXMnLCAnYXBwbGljYXRpb24vdm5kLmpjcC5qYXZhbWUubWlkbGV0LXJtcyddLFxuICAgIFsncm12YicsICdhcHBsaWNhdGlvbi92bmQucm4tcmVhbG1lZGlhLXZiciddLFxuICAgIFsncm5jJywgJ2FwcGxpY2F0aW9uL3JlbGF4LW5nLWNvbXBhY3Qtc3ludGF4J10sXG4gICAgWydybmcnLCAnYXBwbGljYXRpb24veG1sJ10sXG4gICAgWydyb2EnLCAnYXBwbGljYXRpb24vcnBraS1yb2EnXSxcbiAgICBbJ3JvZmYnLCAndGV4dC90cm9mZiddLFxuICAgIFsncnA5JywgJ2FwcGxpY2F0aW9uL3ZuZC5jbG9hbnRvLnJwOSddLFxuICAgIFsncnBtJywgJ2F1ZGlvL3gtcG4tcmVhbGF1ZGlvLXBsdWdpbiddLFxuICAgIFsncnBzcycsICdhcHBsaWNhdGlvbi92bmQubm9raWEucmFkaW8tcHJlc2V0cyddLFxuICAgIFsncnBzdCcsICdhcHBsaWNhdGlvbi92bmQubm9raWEucmFkaW8tcHJlc2V0J10sXG4gICAgWydycScsICdhcHBsaWNhdGlvbi9zcGFycWwtcXVlcnknXSxcbiAgICBbJ3JzJywgJ2FwcGxpY2F0aW9uL3Jscy1zZXJ2aWNlcyt4bWwnXSxcbiAgICBbJ3JzYScsICdhcHBsaWNhdGlvbi94LXBrY3M3J10sXG4gICAgWydyc2F0JywgJ2FwcGxpY2F0aW9uL2F0c2MtcnNhdCt4bWwnXSxcbiAgICBbJ3JzZCcsICdhcHBsaWNhdGlvbi9yc2QreG1sJ10sXG4gICAgWydyc2hlZXQnLCAnYXBwbGljYXRpb24vdXJjLXJlc3NoZWV0K3htbCddLFxuICAgIFsncnNzJywgJ2FwcGxpY2F0aW9uL3Jzcyt4bWwnXSxcbiAgICBbJ3J0ZicsICd0ZXh0L3J0ZiddLFxuICAgIFsncnR4JywgJ3RleHQvcmljaHRleHQnXSxcbiAgICBbJ3J1bicsICdhcHBsaWNhdGlvbi94LW1ha2VzZWxmJ10sXG4gICAgWydydXNkJywgJ2FwcGxpY2F0aW9uL3JvdXRlLXVzZCt4bWwnXSxcbiAgICBbJ3J2JywgJ3ZpZGVvL3ZuZC5ybi1yZWFsdmlkZW8nXSxcbiAgICBbJ3MnLCAndGV4dC94LWFzbSddLFxuICAgIFsnczNtJywgJ2F1ZGlvL3MzbSddLFxuICAgIFsnc2FmJywgJ2FwcGxpY2F0aW9uL3ZuZC55YW1haGEuc21hZi1hdWRpbyddLFxuICAgIFsnc2FzcycsICd0ZXh0L3gtc2FzcyddLFxuICAgIFsnc2JtbCcsICdhcHBsaWNhdGlvbi9zYm1sK3htbCddLFxuICAgIFsnc2MnLCAnYXBwbGljYXRpb24vdm5kLmlibS5zZWN1cmUtY29udGFpbmVyJ10sXG4gICAgWydzY2QnLCAnYXBwbGljYXRpb24veC1tc3NjaGVkdWxlJ10sXG4gICAgWydzY20nLCAnYXBwbGljYXRpb24vdm5kLmxvdHVzLXNjcmVlbmNhbSddLFxuICAgIFsnc2NxJywgJ2FwcGxpY2F0aW9uL3NjdnAtY3YtcmVxdWVzdCddLFxuICAgIFsnc2NzJywgJ2FwcGxpY2F0aW9uL3NjdnAtY3YtcmVzcG9uc2UnXSxcbiAgICBbJ3Njc3MnLCAndGV4dC94LXNjc3MnXSxcbiAgICBbJ3NjdXJsJywgJ3RleHQvdm5kLmN1cmwuc2N1cmwnXSxcbiAgICBbJ3NkYScsICdhcHBsaWNhdGlvbi92bmQuc3RhcmRpdmlzaW9uLmRyYXcnXSxcbiAgICBbJ3NkYycsICdhcHBsaWNhdGlvbi92bmQuc3RhcmRpdmlzaW9uLmNhbGMnXSxcbiAgICBbJ3NkZCcsICdhcHBsaWNhdGlvbi92bmQuc3RhcmRpdmlzaW9uLmltcHJlc3MnXSxcbiAgICBbJ3Nka2QnLCAnYXBwbGljYXRpb24vdm5kLnNvbGVudC5zZGttK3htbCddLFxuICAgIFsnc2RrbScsICdhcHBsaWNhdGlvbi92bmQuc29sZW50LnNka20reG1sJ10sXG4gICAgWydzZHAnLCAnYXBwbGljYXRpb24vc2RwJ10sXG4gICAgWydzZHcnLCAnYXBwbGljYXRpb24vdm5kLnN0YXJkaXZpc2lvbi53cml0ZXInXSxcbiAgICBbJ3NlYScsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ3NlZScsICdhcHBsaWNhdGlvbi92bmQuc2VlbWFpbCddLFxuICAgIFsnc2VlZCcsICdhcHBsaWNhdGlvbi92bmQuZmRzbi5zZWVkJ10sXG4gICAgWydzZW1hJywgJ2FwcGxpY2F0aW9uL3ZuZC5zZW1hJ10sXG4gICAgWydzZW1kJywgJ2FwcGxpY2F0aW9uL3ZuZC5zZW1kJ10sXG4gICAgWydzZW1mJywgJ2FwcGxpY2F0aW9uL3ZuZC5zZW1mJ10sXG4gICAgWydzZW5tbHgnLCAnYXBwbGljYXRpb24vc2VubWwreG1sJ10sXG4gICAgWydzZW5zbWx4JywgJ2FwcGxpY2F0aW9uL3NlbnNtbCt4bWwnXSxcbiAgICBbJ3NlcicsICdhcHBsaWNhdGlvbi9qYXZhLXNlcmlhbGl6ZWQtb2JqZWN0J10sXG4gICAgWydzZXRwYXknLCAnYXBwbGljYXRpb24vc2V0LXBheW1lbnQtaW5pdGlhdGlvbiddLFxuICAgIFsnc2V0cmVnJywgJ2FwcGxpY2F0aW9uL3NldC1yZWdpc3RyYXRpb24taW5pdGlhdGlvbiddLFxuICAgIFsnc2ZkLWhkc3R4JywgJ2FwcGxpY2F0aW9uL3ZuZC5oeWRyb3N0YXRpeC5zb2YtZGF0YSddLFxuICAgIFsnc2ZzJywgJ2FwcGxpY2F0aW9uL3ZuZC5zcG90ZmlyZS5zZnMnXSxcbiAgICBbJ3NmdicsICd0ZXh0L3gtc2Z2J10sXG4gICAgWydzZ2knLCAnaW1hZ2Uvc2dpJ10sXG4gICAgWydzZ2wnLCAnYXBwbGljYXRpb24vdm5kLnN0YXJkaXZpc2lvbi53cml0ZXItZ2xvYmFsJ10sXG4gICAgWydzZ20nLCAndGV4dC9zZ21sJ10sXG4gICAgWydzZ21sJywgJ3RleHQvc2dtbCddLFxuICAgIFsnc2gnLCAnYXBwbGljYXRpb24veC1zaCddLFxuICAgIFsnc2hhcicsICdhcHBsaWNhdGlvbi94LXNoYXInXSxcbiAgICBbJ3NoZXgnLCAndGV4dC9zaGV4J10sXG4gICAgWydzaGYnLCAnYXBwbGljYXRpb24vc2hmK3htbCddLFxuICAgIFsnc2h0bWwnLCAndGV4dC9odG1sJ10sXG4gICAgWydzaWQnLCAnaW1hZ2UveC1tcnNpZC1pbWFnZSddLFxuICAgIFsnc2lldmUnLCAnYXBwbGljYXRpb24vc2lldmUnXSxcbiAgICBbJ3NpZycsICdhcHBsaWNhdGlvbi9wZ3Atc2lnbmF0dXJlJ10sXG4gICAgWydzaWwnLCAnYXVkaW8vc2lsayddLFxuICAgIFsnc2lsbycsICdtb2RlbC9tZXNoJ10sXG4gICAgWydzaXMnLCAnYXBwbGljYXRpb24vdm5kLnN5bWJpYW4uaW5zdGFsbCddLFxuICAgIFsnc2lzeCcsICdhcHBsaWNhdGlvbi92bmQuc3ltYmlhbi5pbnN0YWxsJ10sXG4gICAgWydzaXQnLCAnYXBwbGljYXRpb24veC1zdHVmZml0J10sXG4gICAgWydzaXR4JywgJ2FwcGxpY2F0aW9uL3gtc3R1ZmZpdHgnXSxcbiAgICBbJ3NpdicsICdhcHBsaWNhdGlvbi9zaWV2ZSddLFxuICAgIFsnc2tkJywgJ2FwcGxpY2F0aW9uL3ZuZC5rb2FuJ10sXG4gICAgWydza20nLCAnYXBwbGljYXRpb24vdm5kLmtvYW4nXSxcbiAgICBbJ3NrcCcsICdhcHBsaWNhdGlvbi92bmQua29hbiddLFxuICAgIFsnc2t0JywgJ2FwcGxpY2F0aW9uL3ZuZC5rb2FuJ10sXG4gICAgWydzbGRtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50LnNsaWRlLm1hY3JvZW5hYmxlZC4xMiddLFxuICAgIFsnc2xkeCcsICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwuc2xpZGUnXSxcbiAgICBbJ3NsaW0nLCAndGV4dC9zbGltJ10sXG4gICAgWydzbG0nLCAndGV4dC9zbGltJ10sXG4gICAgWydzbHMnLCAnYXBwbGljYXRpb24vcm91dGUtcy10c2lkK3htbCddLFxuICAgIFsnc2x0JywgJ2FwcGxpY2F0aW9uL3ZuZC5lcHNvbi5zYWx0J10sXG4gICAgWydzbScsICdhcHBsaWNhdGlvbi92bmQuc3RlcG1hbmlhLnN0ZXBjaGFydCddLFxuICAgIFsnc21mJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdGFyZGl2aXNpb24ubWF0aCddLFxuICAgIFsnc21pJywgJ2FwcGxpY2F0aW9uL3NtaWwnXSxcbiAgICBbJ3NtaWwnLCAnYXBwbGljYXRpb24vc21pbCddLFxuICAgIFsnc212JywgJ3ZpZGVvL3gtc212J10sXG4gICAgWydzbXppcCcsICdhcHBsaWNhdGlvbi92bmQuc3RlcG1hbmlhLnBhY2thZ2UnXSxcbiAgICBbJ3NuZCcsICdhdWRpby9iYXNpYyddLFxuICAgIFsnc25mJywgJ2FwcGxpY2F0aW9uL3gtZm9udC1zbmYnXSxcbiAgICBbJ3NvJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnc3BjJywgJ2FwcGxpY2F0aW9uL3gtcGtjczctY2VydGlmaWNhdGVzJ10sXG4gICAgWydzcGR4JywgJ3RleHQvc3BkeCddLFxuICAgIFsnc3BmJywgJ2FwcGxpY2F0aW9uL3ZuZC55YW1haGEuc21hZi1waHJhc2UnXSxcbiAgICBbJ3NwbCcsICdhcHBsaWNhdGlvbi94LWZ1dHVyZXNwbGFzaCddLFxuICAgIFsnc3BvdCcsICd0ZXh0L3ZuZC5pbjNkLnNwb3QnXSxcbiAgICBbJ3NwcCcsICdhcHBsaWNhdGlvbi9zY3ZwLXZwLXJlc3BvbnNlJ10sXG4gICAgWydzcHEnLCAnYXBwbGljYXRpb24vc2N2cC12cC1yZXF1ZXN0J10sXG4gICAgWydzcHgnLCAnYXVkaW8vb2dnJ10sXG4gICAgWydzcWwnLCAnYXBwbGljYXRpb24veC1zcWwnXSxcbiAgICBbJ3NyYycsICdhcHBsaWNhdGlvbi94LXdhaXMtc291cmNlJ10sXG4gICAgWydzcnQnLCAnYXBwbGljYXRpb24veC1zdWJyaXAnXSxcbiAgICBbJ3NydScsICdhcHBsaWNhdGlvbi9zcnUreG1sJ10sXG4gICAgWydzcngnLCAnYXBwbGljYXRpb24vc3BhcnFsLXJlc3VsdHMreG1sJ10sXG4gICAgWydzc2RsJywgJ2FwcGxpY2F0aW9uL3NzZGwreG1sJ10sXG4gICAgWydzc2UnLCAnYXBwbGljYXRpb24vdm5kLmtvZGFrLWRlc2NyaXB0b3InXSxcbiAgICBbJ3NzZicsICdhcHBsaWNhdGlvbi92bmQuZXBzb24uc3NmJ10sXG4gICAgWydzc21sJywgJ2FwcGxpY2F0aW9uL3NzbWwreG1sJ10sXG4gICAgWydzc3QnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydzdCcsICdhcHBsaWNhdGlvbi92bmQuc2FpbGluZ3RyYWNrZXIudHJhY2snXSxcbiAgICBbJ3N0YycsICdhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5jYWxjLnRlbXBsYXRlJ10sXG4gICAgWydzdGQnLCAnYXBwbGljYXRpb24vdm5kLnN1bi54bWwuZHJhdy50ZW1wbGF0ZSddLFxuICAgIFsnc3RmJywgJ2FwcGxpY2F0aW9uL3ZuZC53dC5zdGYnXSxcbiAgICBbJ3N0aScsICdhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5pbXByZXNzLnRlbXBsYXRlJ10sXG4gICAgWydzdGsnLCAnYXBwbGljYXRpb24vaHlwZXJzdHVkaW8nXSxcbiAgICBbJ3N0bCcsICdtb2RlbC9zdGwnXSxcbiAgICBbJ3N0cHgnLCAnbW9kZWwvc3RlcCt4bWwnXSxcbiAgICBbJ3N0cHh6JywgJ21vZGVsL3N0ZXAteG1sK3ppcCddLFxuICAgIFsnc3RweicsICdtb2RlbC9zdGVwK3ppcCddLFxuICAgIFsnc3RyJywgJ2FwcGxpY2F0aW9uL3ZuZC5wZy5mb3JtYXQnXSxcbiAgICBbJ3N0dycsICdhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC53cml0ZXIudGVtcGxhdGUnXSxcbiAgICBbJ3N0eWwnLCAndGV4dC9zdHlsdXMnXSxcbiAgICBbJ3N0eWx1cycsICd0ZXh0L3N0eWx1cyddLFxuICAgIFsnc3ViJywgJ3RleHQvdm5kLmR2Yi5zdWJ0aXRsZSddLFxuICAgIFsnc3VzJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdXMtY2FsZW5kYXInXSxcbiAgICBbJ3N1c3AnLCAnYXBwbGljYXRpb24vdm5kLnN1cy1jYWxlbmRhciddLFxuICAgIFsnc3Y0Y3BpbycsICdhcHBsaWNhdGlvbi94LXN2NGNwaW8nXSxcbiAgICBbJ3N2NGNyYycsICdhcHBsaWNhdGlvbi94LXN2NGNyYyddLFxuICAgIFsnc3ZjJywgJ2FwcGxpY2F0aW9uL3ZuZC5kdmIuc2VydmljZSddLFxuICAgIFsnc3ZkJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdmQnXSxcbiAgICBbJ3N2ZycsICdpbWFnZS9zdmcreG1sJ10sXG4gICAgWydzdmd6JywgJ2ltYWdlL3N2Zyt4bWwnXSxcbiAgICBbJ3N3YScsICdhcHBsaWNhdGlvbi94LWRpcmVjdG9yJ10sXG4gICAgWydzd2YnLCAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXSxcbiAgICBbJ3N3aScsICdhcHBsaWNhdGlvbi92bmQuYXJpc3RhbmV0d29ya3Muc3dpJ10sXG4gICAgWydzd2lkdGFnJywgJ2FwcGxpY2F0aW9uL3N3aWQreG1sJ10sXG4gICAgWydzeGMnLCAnYXBwbGljYXRpb24vdm5kLnN1bi54bWwuY2FsYyddLFxuICAgIFsnc3hkJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdW4ueG1sLmRyYXcnXSxcbiAgICBbJ3N4ZycsICdhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC53cml0ZXIuZ2xvYmFsJ10sXG4gICAgWydzeGknLCAnYXBwbGljYXRpb24vdm5kLnN1bi54bWwuaW1wcmVzcyddLFxuICAgIFsnc3htJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdW4ueG1sLm1hdGgnXSxcbiAgICBbJ3N4dycsICdhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC53cml0ZXInXSxcbiAgICBbJ3QnLCAndGV4dC90cm9mZiddLFxuICAgIFsndDMnLCAnYXBwbGljYXRpb24veC10M3ZtLWltYWdlJ10sXG4gICAgWyd0MzgnLCAnaW1hZ2UvdDM4J10sXG4gICAgWyd0YWdsZXQnLCAnYXBwbGljYXRpb24vdm5kLm15bmZjJ10sXG4gICAgWyd0YW8nLCAnYXBwbGljYXRpb24vdm5kLnRhby5pbnRlbnQtbW9kdWxlLWFyY2hpdmUnXSxcbiAgICBbJ3RhcCcsICdpbWFnZS92bmQudGVuY2VudC50YXAnXSxcbiAgICBbJ3RhcicsICdhcHBsaWNhdGlvbi94LXRhciddLFxuICAgIFsndGNhcCcsICdhcHBsaWNhdGlvbi92bmQuM2dwcDIudGNhcCddLFxuICAgIFsndGNsJywgJ2FwcGxpY2F0aW9uL3gtdGNsJ10sXG4gICAgWyd0ZCcsICdhcHBsaWNhdGlvbi91cmMtdGFyZ2V0ZGVzYyt4bWwnXSxcbiAgICBbJ3RlYWNoZXInLCAnYXBwbGljYXRpb24vdm5kLnNtYXJ0LnRlYWNoZXInXSxcbiAgICBbJ3RlaScsICdhcHBsaWNhdGlvbi90ZWkreG1sJ10sXG4gICAgWyd0ZWljb3JwdXMnLCAnYXBwbGljYXRpb24vdGVpK3htbCddLFxuICAgIFsndGV4JywgJ2FwcGxpY2F0aW9uL3gtdGV4J10sXG4gICAgWyd0ZXhpJywgJ2FwcGxpY2F0aW9uL3gtdGV4aW5mbyddLFxuICAgIFsndGV4aW5mbycsICdhcHBsaWNhdGlvbi94LXRleGluZm8nXSxcbiAgICBbJ3RleHQnLCAndGV4dC9wbGFpbiddLFxuICAgIFsndGZpJywgJ2FwcGxpY2F0aW9uL3RocmF1ZCt4bWwnXSxcbiAgICBbJ3RmbScsICdhcHBsaWNhdGlvbi94LXRleC10Zm0nXSxcbiAgICBbJ3RmeCcsICdpbWFnZS90aWZmLWZ4J10sXG4gICAgWyd0Z2EnLCAnaW1hZ2UveC10Z2EnXSxcbiAgICBbJ3RneicsICdhcHBsaWNhdGlvbi94LXRhciddLFxuICAgIFsndGhteCcsICdhcHBsaWNhdGlvbi92bmQubXMtb2ZmaWNldGhlbWUnXSxcbiAgICBbJ3RpZicsICdpbWFnZS90aWZmJ10sXG4gICAgWyd0aWZmJywgJ2ltYWdlL3RpZmYnXSxcbiAgICBbJ3RrJywgJ2FwcGxpY2F0aW9uL3gtdGNsJ10sXG4gICAgWyd0bW8nLCAnYXBwbGljYXRpb24vdm5kLnRtb2JpbGUtbGl2ZXR2J10sXG4gICAgWyd0b21sJywgJ2FwcGxpY2F0aW9uL3RvbWwnXSxcbiAgICBbJ3RvcnJlbnQnLCAnYXBwbGljYXRpb24veC1iaXR0b3JyZW50J10sXG4gICAgWyd0cGwnLCAnYXBwbGljYXRpb24vdm5kLmdyb292ZS10b29sLXRlbXBsYXRlJ10sXG4gICAgWyd0cHQnLCAnYXBwbGljYXRpb24vdm5kLnRyaWQudHB0J10sXG4gICAgWyd0cicsICd0ZXh0L3Ryb2ZmJ10sXG4gICAgWyd0cmEnLCAnYXBwbGljYXRpb24vdm5kLnRydWVhcHAnXSxcbiAgICBbJ3RyaWcnLCAnYXBwbGljYXRpb24vdHJpZyddLFxuICAgIFsndHJtJywgJ2FwcGxpY2F0aW9uL3gtbXN0ZXJtaW5hbCddLFxuICAgIFsndHMnLCAndmlkZW8vbXAydCddLFxuICAgIFsndHNkJywgJ2FwcGxpY2F0aW9uL3RpbWVzdGFtcGVkLWRhdGEnXSxcbiAgICBbJ3RzdicsICd0ZXh0L3RhYi1zZXBhcmF0ZWQtdmFsdWVzJ10sXG4gICAgWyd0dGMnLCAnZm9udC9jb2xsZWN0aW9uJ10sXG4gICAgWyd0dGYnLCAnZm9udC90dGYnXSxcbiAgICBbJ3R0bCcsICd0ZXh0L3R1cnRsZSddLFxuICAgIFsndHRtbCcsICdhcHBsaWNhdGlvbi90dG1sK3htbCddLFxuICAgIFsndHdkJywgJ2FwcGxpY2F0aW9uL3ZuZC5zaW10ZWNoLW1pbmRtYXBwZXInXSxcbiAgICBbJ3R3ZHMnLCAnYXBwbGljYXRpb24vdm5kLnNpbXRlY2gtbWluZG1hcHBlciddLFxuICAgIFsndHhkJywgJ2FwcGxpY2F0aW9uL3ZuZC5nZW5vbWF0aXgudHV4ZWRvJ10sXG4gICAgWyd0eGYnLCAnYXBwbGljYXRpb24vdm5kLm1vYml1cy50eGYnXSxcbiAgICBbJ3R4dCcsICd0ZXh0L3BsYWluJ10sXG4gICAgWyd1OGRzbicsICdtZXNzYWdlL2dsb2JhbC1kZWxpdmVyeS1zdGF0dXMnXSxcbiAgICBbJ3U4aGRyJywgJ21lc3NhZ2UvZ2xvYmFsLWhlYWRlcnMnXSxcbiAgICBbJ3U4bWRuJywgJ21lc3NhZ2UvZ2xvYmFsLWRpc3Bvc2l0aW9uLW5vdGlmaWNhdGlvbiddLFxuICAgIFsndThtc2cnLCAnbWVzc2FnZS9nbG9iYWwnXSxcbiAgICBbJ3UzMicsICdhcHBsaWNhdGlvbi94LWF1dGhvcndhcmUtYmluJ10sXG4gICAgWyd1YmonLCAnYXBwbGljYXRpb24vdWJqc29uJ10sXG4gICAgWyd1ZGViJywgJ2FwcGxpY2F0aW9uL3gtZGViaWFuLXBhY2thZ2UnXSxcbiAgICBbJ3VmZCcsICdhcHBsaWNhdGlvbi92bmQudWZkbCddLFxuICAgIFsndWZkbCcsICdhcHBsaWNhdGlvbi92bmQudWZkbCddLFxuICAgIFsndWx4JywgJ2FwcGxpY2F0aW9uL3gtZ2x1bHgnXSxcbiAgICBbJ3VtaicsICdhcHBsaWNhdGlvbi92bmQudW1hamluJ10sXG4gICAgWyd1bml0eXdlYicsICdhcHBsaWNhdGlvbi92bmQudW5pdHknXSxcbiAgICBbJ3VvbWwnLCAnYXBwbGljYXRpb24vdm5kLnVvbWwreG1sJ10sXG4gICAgWyd1cmknLCAndGV4dC91cmktbGlzdCddLFxuICAgIFsndXJpcycsICd0ZXh0L3VyaS1saXN0J10sXG4gICAgWyd1cmxzJywgJ3RleHQvdXJpLWxpc3QnXSxcbiAgICBbJ3VzZHonLCAnbW9kZWwvdm5kLnVzZHoremlwJ10sXG4gICAgWyd1c3RhcicsICdhcHBsaWNhdGlvbi94LXVzdGFyJ10sXG4gICAgWyd1dHonLCAnYXBwbGljYXRpb24vdm5kLnVpcS50aGVtZSddLFxuICAgIFsndXUnLCAndGV4dC94LXV1ZW5jb2RlJ10sXG4gICAgWyd1dmEnLCAnYXVkaW8vdm5kLmRlY2UuYXVkaW8nXSxcbiAgICBbJ3V2ZCcsICdhcHBsaWNhdGlvbi92bmQuZGVjZS5kYXRhJ10sXG4gICAgWyd1dmYnLCAnYXBwbGljYXRpb24vdm5kLmRlY2UuZGF0YSddLFxuICAgIFsndXZnJywgJ2ltYWdlL3ZuZC5kZWNlLmdyYXBoaWMnXSxcbiAgICBbJ3V2aCcsICd2aWRlby92bmQuZGVjZS5oZCddLFxuICAgIFsndXZpJywgJ2ltYWdlL3ZuZC5kZWNlLmdyYXBoaWMnXSxcbiAgICBbJ3V2bScsICd2aWRlby92bmQuZGVjZS5tb2JpbGUnXSxcbiAgICBbJ3V2cCcsICd2aWRlby92bmQuZGVjZS5wZCddLFxuICAgIFsndXZzJywgJ3ZpZGVvL3ZuZC5kZWNlLnNkJ10sXG4gICAgWyd1dnQnLCAnYXBwbGljYXRpb24vdm5kLmRlY2UudHRtbCt4bWwnXSxcbiAgICBbJ3V2dScsICd2aWRlby92bmQudXZ2dS5tcDQnXSxcbiAgICBbJ3V2dicsICd2aWRlby92bmQuZGVjZS52aWRlbyddLFxuICAgIFsndXZ2YScsICdhdWRpby92bmQuZGVjZS5hdWRpbyddLFxuICAgIFsndXZ2ZCcsICdhcHBsaWNhdGlvbi92bmQuZGVjZS5kYXRhJ10sXG4gICAgWyd1dnZmJywgJ2FwcGxpY2F0aW9uL3ZuZC5kZWNlLmRhdGEnXSxcbiAgICBbJ3V2dmcnLCAnaW1hZ2Uvdm5kLmRlY2UuZ3JhcGhpYyddLFxuICAgIFsndXZ2aCcsICd2aWRlby92bmQuZGVjZS5oZCddLFxuICAgIFsndXZ2aScsICdpbWFnZS92bmQuZGVjZS5ncmFwaGljJ10sXG4gICAgWyd1dnZtJywgJ3ZpZGVvL3ZuZC5kZWNlLm1vYmlsZSddLFxuICAgIFsndXZ2cCcsICd2aWRlby92bmQuZGVjZS5wZCddLFxuICAgIFsndXZ2cycsICd2aWRlby92bmQuZGVjZS5zZCddLFxuICAgIFsndXZ2dCcsICdhcHBsaWNhdGlvbi92bmQuZGVjZS50dG1sK3htbCddLFxuICAgIFsndXZ2dScsICd2aWRlby92bmQudXZ2dS5tcDQnXSxcbiAgICBbJ3V2dnYnLCAndmlkZW8vdm5kLmRlY2UudmlkZW8nXSxcbiAgICBbJ3V2dngnLCAnYXBwbGljYXRpb24vdm5kLmRlY2UudW5zcGVjaWZpZWQnXSxcbiAgICBbJ3V2dnonLCAnYXBwbGljYXRpb24vdm5kLmRlY2UuemlwJ10sXG4gICAgWyd1dngnLCAnYXBwbGljYXRpb24vdm5kLmRlY2UudW5zcGVjaWZpZWQnXSxcbiAgICBbJ3V2eicsICdhcHBsaWNhdGlvbi92bmQuZGVjZS56aXAnXSxcbiAgICBbJ3Zib3gnLCAnYXBwbGljYXRpb24veC12aXJ0dWFsYm94LXZib3gnXSxcbiAgICBbJ3Zib3gtZXh0cGFjaycsICdhcHBsaWNhdGlvbi94LXZpcnR1YWxib3gtdmJveC1leHRwYWNrJ10sXG4gICAgWyd2Y2FyZCcsICd0ZXh0L3ZjYXJkJ10sXG4gICAgWyd2Y2QnLCAnYXBwbGljYXRpb24veC1jZGxpbmsnXSxcbiAgICBbJ3ZjZicsICd0ZXh0L3gtdmNhcmQnXSxcbiAgICBbJ3ZjZycsICdhcHBsaWNhdGlvbi92bmQuZ3Jvb3ZlLXZjYXJkJ10sXG4gICAgWyd2Y3MnLCAndGV4dC94LXZjYWxlbmRhciddLFxuICAgIFsndmN4JywgJ2FwcGxpY2F0aW9uL3ZuZC52Y3gnXSxcbiAgICBbJ3ZkaScsICdhcHBsaWNhdGlvbi94LXZpcnR1YWxib3gtdmRpJ10sXG4gICAgWyd2ZHMnLCAnbW9kZWwvdm5kLnNhcC52ZHMnXSxcbiAgICBbJ3ZoZCcsICdhcHBsaWNhdGlvbi94LXZpcnR1YWxib3gtdmhkJ10sXG4gICAgWyd2aXMnLCAnYXBwbGljYXRpb24vdm5kLnZpc2lvbmFyeSddLFxuICAgIFsndml2JywgJ3ZpZGVvL3ZuZC52aXZvJ10sXG4gICAgWyd2bGMnLCAnYXBwbGljYXRpb24vdmlkZW9sYW4nXSxcbiAgICBbJ3ZtZGsnLCAnYXBwbGljYXRpb24veC12aXJ0dWFsYm94LXZtZGsnXSxcbiAgICBbJ3ZvYicsICd2aWRlby94LW1zLXZvYiddLFxuICAgIFsndm9yJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdGFyZGl2aXNpb24ud3JpdGVyJ10sXG4gICAgWyd2b3gnLCAnYXBwbGljYXRpb24veC1hdXRob3J3YXJlLWJpbiddLFxuICAgIFsndnJtbCcsICdtb2RlbC92cm1sJ10sXG4gICAgWyd2c2QnLCAnYXBwbGljYXRpb24vdm5kLnZpc2lvJ10sXG4gICAgWyd2c2YnLCAnYXBwbGljYXRpb24vdm5kLnZzZiddLFxuICAgIFsndnNzJywgJ2FwcGxpY2F0aW9uL3ZuZC52aXNpbyddLFxuICAgIFsndnN0JywgJ2FwcGxpY2F0aW9uL3ZuZC52aXNpbyddLFxuICAgIFsndnN3JywgJ2FwcGxpY2F0aW9uL3ZuZC52aXNpbyddLFxuICAgIFsndnRmJywgJ2ltYWdlL3ZuZC52YWx2ZS5zb3VyY2UudGV4dHVyZSddLFxuICAgIFsndnR0JywgJ3RleHQvdnR0J10sXG4gICAgWyd2dHUnLCAnbW9kZWwvdm5kLnZ0dSddLFxuICAgIFsndnhtbCcsICdhcHBsaWNhdGlvbi92b2ljZXhtbCt4bWwnXSxcbiAgICBbJ3czZCcsICdhcHBsaWNhdGlvbi94LWRpcmVjdG9yJ10sXG4gICAgWyd3YWQnLCAnYXBwbGljYXRpb24veC1kb29tJ10sXG4gICAgWyd3YWRsJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdW4ud2FkbCt4bWwnXSxcbiAgICBbJ3dhcicsICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnXSxcbiAgICBbJ3dhc20nLCAnYXBwbGljYXRpb24vd2FzbSddLFxuICAgIFsnd2F2JywgJ2F1ZGlvL3gtd2F2J10sXG4gICAgWyd3YXgnLCAnYXVkaW8veC1tcy13YXgnXSxcbiAgICBbJ3dibXAnLCAnaW1hZ2Uvdm5kLndhcC53Ym1wJ10sXG4gICAgWyd3YnMnLCAnYXBwbGljYXRpb24vdm5kLmNyaXRpY2FsdG9vbHMud2JzK3htbCddLFxuICAgIFsnd2J4bWwnLCAnYXBwbGljYXRpb24vd2J4bWwnXSxcbiAgICBbJ3djbScsICdhcHBsaWNhdGlvbi92bmQubXMtd29ya3MnXSxcbiAgICBbJ3dkYicsICdhcHBsaWNhdGlvbi92bmQubXMtd29ya3MnXSxcbiAgICBbJ3dkcCcsICdpbWFnZS92bmQubXMtcGhvdG8nXSxcbiAgICBbJ3dlYmEnLCAnYXVkaW8vd2VibSddLFxuICAgIFsnd2ViYXBwJywgJ2FwcGxpY2F0aW9uL3gtd2ViLWFwcC1tYW5pZmVzdCtqc29uJ10sXG4gICAgWyd3ZWJtJywgJ3ZpZGVvL3dlYm0nXSxcbiAgICBbJ3dlYm1hbmlmZXN0JywgJ2FwcGxpY2F0aW9uL21hbmlmZXN0K2pzb24nXSxcbiAgICBbJ3dlYnAnLCAnaW1hZ2Uvd2VicCddLFxuICAgIFsnd2cnLCAnYXBwbGljYXRpb24vdm5kLnBtaS53aWRnZXQnXSxcbiAgICBbJ3dndCcsICdhcHBsaWNhdGlvbi93aWRnZXQnXSxcbiAgICBbJ3drcycsICdhcHBsaWNhdGlvbi92bmQubXMtd29ya3MnXSxcbiAgICBbJ3dtJywgJ3ZpZGVvL3gtbXMtd20nXSxcbiAgICBbJ3dtYScsICdhdWRpby94LW1zLXdtYSddLFxuICAgIFsnd21kJywgJ2FwcGxpY2F0aW9uL3gtbXMtd21kJ10sXG4gICAgWyd3bWYnLCAnaW1hZ2Uvd21mJ10sXG4gICAgWyd3bWwnLCAndGV4dC92bmQud2FwLndtbCddLFxuICAgIFsnd21sYycsICdhcHBsaWNhdGlvbi93bWxjJ10sXG4gICAgWyd3bWxzJywgJ3RleHQvdm5kLndhcC53bWxzY3JpcHQnXSxcbiAgICBbJ3dtbHNjJywgJ2FwcGxpY2F0aW9uL3ZuZC53YXAud21sc2NyaXB0YyddLFxuICAgIFsnd212JywgJ3ZpZGVvL3gtbXMtd212J10sXG4gICAgWyd3bXgnLCAndmlkZW8veC1tcy13bXgnXSxcbiAgICBbJ3dteicsICdhcHBsaWNhdGlvbi94LW1zbWV0YWZpbGUnXSxcbiAgICBbJ3dvZmYnLCAnZm9udC93b2ZmJ10sXG4gICAgWyd3b2ZmMicsICdmb250L3dvZmYyJ10sXG4gICAgWyd3b3JkJywgJ2FwcGxpY2F0aW9uL21zd29yZCddLFxuICAgIFsnd3BkJywgJ2FwcGxpY2F0aW9uL3ZuZC53b3JkcGVyZmVjdCddLFxuICAgIFsnd3BsJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy13cGwnXSxcbiAgICBbJ3dwcycsICdhcHBsaWNhdGlvbi92bmQubXMtd29ya3MnXSxcbiAgICBbJ3dxZCcsICdhcHBsaWNhdGlvbi92bmQud3FkJ10sXG4gICAgWyd3cmknLCAnYXBwbGljYXRpb24veC1tc3dyaXRlJ10sXG4gICAgWyd3cmwnLCAnbW9kZWwvdnJtbCddLFxuICAgIFsnd3NjJywgJ21lc3NhZ2Uvdm5kLndmYS53c2MnXSxcbiAgICBbJ3dzZGwnLCAnYXBwbGljYXRpb24vd3NkbCt4bWwnXSxcbiAgICBbJ3dzcG9saWN5JywgJ2FwcGxpY2F0aW9uL3dzcG9saWN5K3htbCddLFxuICAgIFsnd3RiJywgJ2FwcGxpY2F0aW9uL3ZuZC53ZWJ0dXJibyddLFxuICAgIFsnd3Z4JywgJ3ZpZGVvL3gtbXMtd3Z4J10sXG4gICAgWyd4M2QnLCAnbW9kZWwveDNkK3htbCddLFxuICAgIFsneDNkYicsICdtb2RlbC94M2QrZmFzdGluZm9zZXQnXSxcbiAgICBbJ3gzZGJ6JywgJ21vZGVsL3gzZCtiaW5hcnknXSxcbiAgICBbJ3gzZHYnLCAnbW9kZWwveDNkLXZybWwnXSxcbiAgICBbJ3gzZHZ6JywgJ21vZGVsL3gzZCt2cm1sJ10sXG4gICAgWyd4M2R6JywgJ21vZGVsL3gzZCt4bWwnXSxcbiAgICBbJ3gzMicsICdhcHBsaWNhdGlvbi94LWF1dGhvcndhcmUtYmluJ10sXG4gICAgWyd4X2InLCAnbW9kZWwvdm5kLnBhcmFzb2xpZC50cmFuc21pdC5iaW5hcnknXSxcbiAgICBbJ3hfdCcsICdtb2RlbC92bmQucGFyYXNvbGlkLnRyYW5zbWl0LnRleHQnXSxcbiAgICBbJ3hhbWwnLCAnYXBwbGljYXRpb24veGFtbCt4bWwnXSxcbiAgICBbJ3hhcCcsICdhcHBsaWNhdGlvbi94LXNpbHZlcmxpZ2h0LWFwcCddLFxuICAgIFsneGFyJywgJ2FwcGxpY2F0aW9uL3ZuZC54YXJhJ10sXG4gICAgWyd4YXYnLCAnYXBwbGljYXRpb24veGNhcC1hdHQreG1sJ10sXG4gICAgWyd4YmFwJywgJ2FwcGxpY2F0aW9uL3gtbXMteGJhcCddLFxuICAgIFsneGJkJywgJ2FwcGxpY2F0aW9uL3ZuZC5mdWppeGVyb3guZG9jdXdvcmtzLmJpbmRlciddLFxuICAgIFsneGJtJywgJ2ltYWdlL3gteGJpdG1hcCddLFxuICAgIFsneGNhJywgJ2FwcGxpY2F0aW9uL3hjYXAtY2Fwcyt4bWwnXSxcbiAgICBbJ3hjcycsICdhcHBsaWNhdGlvbi9jYWxlbmRhcit4bWwnXSxcbiAgICBbJ3hkZicsICdhcHBsaWNhdGlvbi94Y2FwLWRpZmYreG1sJ10sXG4gICAgWyd4ZG0nLCAnYXBwbGljYXRpb24vdm5kLnN5bmNtbC5kbSt4bWwnXSxcbiAgICBbJ3hkcCcsICdhcHBsaWNhdGlvbi92bmQuYWRvYmUueGRwK3htbCddLFxuICAgIFsneGRzc2MnLCAnYXBwbGljYXRpb24vZHNzYyt4bWwnXSxcbiAgICBbJ3hkdycsICdhcHBsaWNhdGlvbi92bmQuZnVqaXhlcm94LmRvY3V3b3JrcyddLFxuICAgIFsneGVsJywgJ2FwcGxpY2F0aW9uL3hjYXAtZWwreG1sJ10sXG4gICAgWyd4ZW5jJywgJ2FwcGxpY2F0aW9uL3hlbmMreG1sJ10sXG4gICAgWyd4ZXInLCAnYXBwbGljYXRpb24vcGF0Y2gtb3BzLWVycm9yK3htbCddLFxuICAgIFsneGZkZicsICdhcHBsaWNhdGlvbi92bmQuYWRvYmUueGZkZiddLFxuICAgIFsneGZkbCcsICdhcHBsaWNhdGlvbi92bmQueGZkbCddLFxuICAgIFsneGh0JywgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCddLFxuICAgIFsneGh0bWwnLCAnYXBwbGljYXRpb24veGh0bWwreG1sJ10sXG4gICAgWyd4aHZtbCcsICdhcHBsaWNhdGlvbi94dit4bWwnXSxcbiAgICBbJ3hpZicsICdpbWFnZS92bmQueGlmZiddLFxuICAgIFsneGwnLCAnYXBwbGljYXRpb24vZXhjZWwnXSxcbiAgICBbJ3hsYScsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnXSxcbiAgICBbJ3hsYW0nLCAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLmFkZGluLm1hY3JvRW5hYmxlZC4xMiddLFxuICAgIFsneGxjJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCddLFxuICAgIFsneGxmJywgJ2FwcGxpY2F0aW9uL3hsaWZmK3htbCddLFxuICAgIFsneGxtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCddLFxuICAgIFsneGxzJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCddLFxuICAgIFsneGxzYicsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuc2hlZXQuYmluYXJ5Lm1hY3JvRW5hYmxlZC4xMiddLFxuICAgIFsneGxzbScsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwuc2hlZXQubWFjcm9FbmFibGVkLjEyJ10sXG4gICAgWyd4bHN4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0J10sXG4gICAgWyd4bHQnLCAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJ10sXG4gICAgWyd4bHRtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC50ZW1wbGF0ZS5tYWNyb0VuYWJsZWQuMTInXSxcbiAgICBbJ3hsdHgnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwudGVtcGxhdGUnXSxcbiAgICBbJ3hsdycsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnXSxcbiAgICBbJ3htJywgJ2F1ZGlvL3htJ10sXG4gICAgWyd4bWwnLCAnYXBwbGljYXRpb24veG1sJ10sXG4gICAgWyd4bnMnLCAnYXBwbGljYXRpb24veGNhcC1ucyt4bWwnXSxcbiAgICBbJ3hvJywgJ2FwcGxpY2F0aW9uL3ZuZC5vbHBjLXN1Z2FyJ10sXG4gICAgWyd4b3AnLCAnYXBwbGljYXRpb24veG9wK3htbCddLFxuICAgIFsneHBpJywgJ2FwcGxpY2F0aW9uL3gteHBpbnN0YWxsJ10sXG4gICAgWyd4cGwnLCAnYXBwbGljYXRpb24veHByb2MreG1sJ10sXG4gICAgWyd4cG0nLCAnaW1hZ2UveC14cGl4bWFwJ10sXG4gICAgWyd4cHInLCAnYXBwbGljYXRpb24vdm5kLmlzLXhwciddLFxuICAgIFsneHBzJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy14cHNkb2N1bWVudCddLFxuICAgIFsneHB3JywgJ2FwcGxpY2F0aW9uL3ZuZC5pbnRlcmNvbi5mb3JtbmV0J10sXG4gICAgWyd4cHgnLCAnYXBwbGljYXRpb24vdm5kLmludGVyY29uLmZvcm1uZXQnXSxcbiAgICBbJ3hzZCcsICdhcHBsaWNhdGlvbi94bWwnXSxcbiAgICBbJ3hzbCcsICdhcHBsaWNhdGlvbi94bWwnXSxcbiAgICBbJ3hzbHQnLCAnYXBwbGljYXRpb24veHNsdCt4bWwnXSxcbiAgICBbJ3hzbScsICdhcHBsaWNhdGlvbi92bmQuc3luY21sK3htbCddLFxuICAgIFsneHNwZicsICdhcHBsaWNhdGlvbi94c3BmK3htbCddLFxuICAgIFsneHVsJywgJ2FwcGxpY2F0aW9uL3ZuZC5tb3ppbGxhLnh1bCt4bWwnXSxcbiAgICBbJ3h2bScsICdhcHBsaWNhdGlvbi94dit4bWwnXSxcbiAgICBbJ3h2bWwnLCAnYXBwbGljYXRpb24veHYreG1sJ10sXG4gICAgWyd4d2QnLCAnaW1hZ2UveC14d2luZG93ZHVtcCddLFxuICAgIFsneHl6JywgJ2NoZW1pY2FsL3gteHl6J10sXG4gICAgWyd4eicsICdhcHBsaWNhdGlvbi94LXh6J10sXG4gICAgWyd5YW1sJywgJ3RleHQveWFtbCddLFxuICAgIFsneWFuZycsICdhcHBsaWNhdGlvbi95YW5nJ10sXG4gICAgWyd5aW4nLCAnYXBwbGljYXRpb24veWluK3htbCddLFxuICAgIFsneW1sJywgJ3RleHQveWFtbCddLFxuICAgIFsneW1wJywgJ3RleHQveC1zdXNlLXltcCddLFxuICAgIFsneicsICdhcHBsaWNhdGlvbi94LWNvbXByZXNzJ10sXG4gICAgWyd6MScsICdhcHBsaWNhdGlvbi94LXptYWNoaW5lJ10sXG4gICAgWyd6MicsICdhcHBsaWNhdGlvbi94LXptYWNoaW5lJ10sXG4gICAgWyd6MycsICdhcHBsaWNhdGlvbi94LXptYWNoaW5lJ10sXG4gICAgWyd6NCcsICdhcHBsaWNhdGlvbi94LXptYWNoaW5lJ10sXG4gICAgWyd6NScsICdhcHBsaWNhdGlvbi94LXptYWNoaW5lJ10sXG4gICAgWyd6NicsICdhcHBsaWNhdGlvbi94LXptYWNoaW5lJ10sXG4gICAgWyd6NycsICdhcHBsaWNhdGlvbi94LXptYWNoaW5lJ10sXG4gICAgWyd6OCcsICdhcHBsaWNhdGlvbi94LXptYWNoaW5lJ10sXG4gICAgWyd6YXonLCAnYXBwbGljYXRpb24vdm5kLnp6YXp6LmRlY2sreG1sJ10sXG4gICAgWyd6aXAnLCAnYXBwbGljYXRpb24vemlwJ10sXG4gICAgWyd6aXInLCAnYXBwbGljYXRpb24vdm5kLnp1bCddLFxuICAgIFsnemlyeicsICdhcHBsaWNhdGlvbi92bmQuenVsJ10sXG4gICAgWyd6bW0nLCAnYXBwbGljYXRpb24vdm5kLmhhbmRoZWxkLWVudGVydGFpbm1lbnQreG1sJ10sXG4gICAgWyd6c2gnLCAndGV4dC94LXNjcmlwdHpzaCddXG5dKTtcbmZ1bmN0aW9uIHRvRmlsZVdpdGhQYXRoKGZpbGUsIHBhdGgsIGgpIHtcbiAgICB2YXIgZiA9IHdpdGhNaW1lVHlwZShmaWxlKTtcbiAgICB2YXIgd2Via2l0UmVsYXRpdmVQYXRoID0gZmlsZS53ZWJraXRSZWxhdGl2ZVBhdGg7XG4gICAgdmFyIHAgPSB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBwYXRoXG4gICAgICAgIC8vIElmIDxpbnB1dCB3ZWJraXRkaXJlY3Rvcnk+IGlzIHNldCxcbiAgICAgICAgLy8gdGhlIEZpbGUgd2lsbCBoYXZlIGEge3dlYmtpdFJlbGF0aXZlUGF0aH0gcHJvcGVydHlcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxJbnB1dEVsZW1lbnQvd2Via2l0ZGlyZWN0b3J5XG4gICAgICAgIDogdHlwZW9mIHdlYmtpdFJlbGF0aXZlUGF0aCA9PT0gJ3N0cmluZycgJiYgd2Via2l0UmVsYXRpdmVQYXRoLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gd2Via2l0UmVsYXRpdmVQYXRoXG4gICAgICAgICAgICA6IFwiLi9cIi5jb25jYXQoZmlsZS5uYW1lKTtcbiAgICBpZiAodHlwZW9mIGYucGF0aCAhPT0gJ3N0cmluZycpIHsgLy8gb24gZWxlY3Ryb24sIHBhdGggaXMgYWxyZWFkeSBzZXQgdG8gdGhlIGFic29sdXRlIHBhdGhcbiAgICAgICAgc2V0T2JqUHJvcChmLCAncGF0aCcsIHApO1xuICAgIH1cbiAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCAnaGFuZGxlJywge1xuICAgICAgICAgICAgdmFsdWU6IGgsXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQWx3YXlzIHBvcHVsYXRlIGEgcmVsYXRpdmUgcGF0aCBzbyB0aGF0IGV2ZW4gZWxlY3Ryb24gYXBwcyBoYXZlIGFjY2VzcyB0byBhIHJlbGF0aXZlUGF0aCB2YWx1ZVxuICAgIHNldE9ialByb3AoZiwgJ3JlbGF0aXZlUGF0aCcsIHApO1xuICAgIHJldHVybiBmO1xufVxuZnVuY3Rpb24gd2l0aE1pbWVUeXBlKGZpbGUpIHtcbiAgICB2YXIgbmFtZSA9IGZpbGUubmFtZTtcbiAgICB2YXIgaGFzRXh0ZW5zaW9uID0gbmFtZSAmJiBuYW1lLmxhc3RJbmRleE9mKCcuJykgIT09IC0xO1xuICAgIGlmIChoYXNFeHRlbnNpb24gJiYgIWZpbGUudHlwZSkge1xuICAgICAgICB2YXIgZXh0ID0gbmFtZS5zcGxpdCgnLicpXG4gICAgICAgICAgICAucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIHR5cGUgPSBleHBvcnRzLkNPTU1PTl9NSU1FX1RZUEVTLmdldChleHQpO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZpbGUsICd0eXBlJywge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaWxlO1xufVxuZnVuY3Rpb24gc2V0T2JqUHJvcChmLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIGtleSwge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZyb21FdmVudCA9IGZyb21FdmVudDtcbnZhciBmaWxlXzEgPSByZXF1aXJlKFwiLi9maWxlXCIpO1xudmFyIEZJTEVTX1RPX0lHTk9SRSA9IFtcbiAgICAvLyBUaHVtYm5haWwgY2FjaGUgZmlsZXMgZm9yIG1hY09TIGFuZCBXaW5kb3dzXG4gICAgJy5EU19TdG9yZScsIC8vIG1hY09zXG4gICAgJ1RodW1icy5kYicgLy8gV2luZG93c1xuXTtcbi8qKlxuICogQ29udmVydCBhIERyYWdFdmVudCdzIERhdGFUcmFzZmVyIG9iamVjdCB0byBhIGxpc3Qgb2YgRmlsZSBvYmplY3RzXG4gKiBOT1RFOiBJZiBzb21lIG9mIHRoZSBpdGVtcyBhcmUgZm9sZGVycyxcbiAqIGV2ZXJ5dGhpbmcgd2lsbCBiZSBmbGF0dGVuZWQgYW5kIHBsYWNlZCBpbiB0aGUgc2FtZSBsaXN0IGJ1dCB0aGUgcGF0aHMgd2lsbCBiZSBrZXB0IGFzIGEge3BhdGh9IHByb3BlcnR5LlxuICpcbiAqIEVYUEVSSU1FTlRBTDogQSBsaXN0IG9mIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtSGFuZGxlIG9iamVjdHMgY2FuIGFsc28gYmUgcGFzc2VkIGFzIGFuIGFyZ1xuICogYW5kIGEgbGlzdCBvZiBGaWxlIG9iamVjdHMgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0gZXZ0XG4gKi9cbmZ1bmN0aW9uIGZyb21FdmVudChldnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChldnQpICYmIGlzRGF0YVRyYW5zZmVyKGV2dC5kYXRhVHJhbnNmZXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldERhdGFUcmFuc2ZlckZpbGVzKGV2dC5kYXRhVHJhbnNmZXIsIGV2dC50eXBlKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0NoYW5nZUV2dChldnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldElucHV0RmlsZXMoZXZ0KV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGV2dCkgJiYgZXZ0LmV2ZXJ5KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAnZ2V0RmlsZScgaW4gaXRlbSAmJiB0eXBlb2YgaXRlbS5nZXRGaWxlID09PSAnZnVuY3Rpb24nOyB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXRGc0hhbmRsZUZpbGVzKGV2dCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFtdXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0RhdGFUcmFuc2Zlcih2YWx1ZSkge1xuICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0NoYW5nZUV2dCh2YWx1ZSkge1xuICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgaXNPYmplY3QodmFsdWUudGFyZ2V0KTtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdvYmplY3QnICYmIHYgIT09IG51bGw7XG59XG5mdW5jdGlvbiBnZXRJbnB1dEZpbGVzKGV2dCkge1xuICAgIHJldHVybiBmcm9tTGlzdChldnQudGFyZ2V0LmZpbGVzKS5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuICgwLCBmaWxlXzEudG9GaWxlV2l0aFBhdGgpKGZpbGUpOyB9KTtcbn1cbi8vIEVlIGV4cGVjdCBlYWNoIGhhbmRsZSB0byBiZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUZpbGVIYW5kbGVcbmZ1bmN0aW9uIGdldEZzSGFuZGxlRmlsZXMoaGFuZGxlcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZpbGVzO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChoYW5kbGVzLm1hcChmdW5jdGlvbiAoaCkgeyByZXR1cm4gaC5nZXRGaWxlKCk7IH0pKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZpbGVzLm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gKDAsIGZpbGVfMS50b0ZpbGVXaXRoUGF0aCkoZmlsZSk7IH0pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREYXRhVHJhbnNmZXJGaWxlcyhkdCwgdHlwZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZW1zLCBmaWxlcztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkdC5pdGVtcykgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gZnJvbUxpc3QoZHQuaXRlbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmtpbmQgPT09ICdmaWxlJzsgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFjY29yZGluZyB0byBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9kbmQuaHRtbCNkbmRldmVudHMsXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgJ2RyYWdzdGFydCcgYW5kICdkcm9wJyBoYXMgYWNjZXNzIHRvIHRoZSBkYXRhIChzb3VyY2Ugbm9kZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdkcm9wJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGl0ZW1zXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChpdGVtcy5tYXAodG9GaWxlUHJvbWlzZXMpKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5vSWdub3JlZEZpbGVzKGZsYXR0ZW4oZmlsZXMpKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qLywgbm9JZ25vcmVkRmlsZXMoZnJvbUxpc3QoZHQuZmlsZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiAoMCwgZmlsZV8xLnRvRmlsZVdpdGhQYXRoKShmaWxlKTsgfSkpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBub0lnbm9yZWRGaWxlcyhmaWxlcykge1xuICAgIHJldHVybiBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIEZJTEVTX1RPX0lHTk9SRS5pbmRleE9mKGZpbGUubmFtZSkgPT09IC0xOyB9KTtcbn1cbi8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBBcnJheS5mcm9tKClcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2Zyb20jQnJvd3Nlcl9jb21wYXRpYmlsaXR5XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZUxpc3Rcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EYXRhVHJhbnNmZXJJdGVtTGlzdFxuZnVuY3Rpb24gZnJvbUxpc3QoaXRlbXMpIHtcbiAgICBpZiAoaXRlbXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgZmlsZXMgPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTogcHJlZmVyLWZvci1vZlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGZpbGUgPSBpdGVtc1tpXTtcbiAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVzO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RhdGFUcmFuc2Zlckl0ZW1cbmZ1bmN0aW9uIHRvRmlsZVByb21pc2VzKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0ud2Via2l0R2V0QXNFbnRyeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZnJvbURhdGFUcmFuc2Zlckl0ZW0oaXRlbSk7XG4gICAgfVxuICAgIHZhciBlbnRyeSA9IGl0ZW0ud2Via2l0R2V0QXNFbnRyeSgpO1xuICAgIC8vIFNhZmFyaSBzdXBwb3J0cyBkcm9wcGluZyBhbiBpbWFnZSBub2RlIGZyb20gYSBkaWZmZXJlbnQgd2luZG93IGFuZCBjYW4gYmUgcmV0cmlldmVkIHVzaW5nXG4gICAgLy8gdGhlIERhdGFUcmFuc2Zlckl0ZW0uZ2V0QXNGaWxlKCkgQVBJXG4gICAgLy8gTk9URTogRmlsZVN5c3RlbUVudHJ5LmZpbGUoKSB0aHJvd3MgaWYgdHJ5aW5nIHRvIGdldCB0aGUgZmlsZVxuICAgIGlmIChlbnRyeSAmJiBlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgICByZXR1cm4gZnJvbURpckVudHJ5KGVudHJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21EYXRhVHJhbnNmZXJJdGVtKGl0ZW0sIGVudHJ5KTtcbn1cbmZ1bmN0aW9uIGZsYXR0ZW4oaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZpbGVzKSB7IHJldHVybiBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChhY2MpLCBmYWxzZSksIF9fcmVhZCgoQXJyYXkuaXNBcnJheShmaWxlcykgPyBmbGF0dGVuKGZpbGVzKSA6IFtmaWxlc10pKSwgZmFsc2UpOyB9LCBbXSk7XG59XG5mdW5jdGlvbiBmcm9tRGF0YVRyYW5zZmVySXRlbShpdGVtLCBlbnRyeSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGgsIGZpbGVfMiwgZmlsZSwgZndwO1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuaXNTZWN1cmVDb250ZXh0ICYmIHR5cGVvZiBpdGVtLmdldEFzRmlsZVN5c3RlbUhhbmRsZSA9PT0gJ2Z1bmN0aW9uJykpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpdGVtLmdldEFzRmlsZVN5c3RlbUhhbmRsZSgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGggPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoaXRlbSwgXCIgaXMgbm90IGEgRmlsZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaCAhPT0gdW5kZWZpbmVkKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGguZ2V0RmlsZSgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGZpbGVfMiA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsZV8yLmhhbmRsZSA9IGg7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAoMCwgZmlsZV8xLnRvRmlsZVdpdGhQYXRoKShmaWxlXzIpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChpdGVtLCBcIiBpcyBub3QgYSBGaWxlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmd3AgPSAoMCwgZmlsZV8xLnRvRmlsZVdpdGhQYXRoKShmaWxlLCAoX2EgPSBlbnRyeSA9PT0gbnVsbCB8fCBlbnRyeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZW50cnkuZnVsbFBhdGgpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmd3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRW50cnlcbmZ1bmN0aW9uIGZyb21FbnRyeShlbnRyeSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGVudHJ5LmlzRGlyZWN0b3J5ID8gZnJvbURpckVudHJ5KGVudHJ5KSA6IGZyb21GaWxlRW50cnkoZW50cnkpXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbURpcmVjdG9yeUVudHJ5XG5mdW5jdGlvbiBmcm9tRGlyRW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVhZGVyID0gZW50cnkuY3JlYXRlUmVhZGVyKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICAgICAgZnVuY3Rpb24gcmVhZEVudHJpZXMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1EaXJlY3RvcnlFbnRyeS9jcmVhdGVSZWFkZXJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRGlyZWN0b3J5UmVhZGVyL3JlYWRFbnRyaWVzXG4gICAgICAgICAgICByZWFkZXIucmVhZEVudHJpZXMoZnVuY3Rpb24gKGJhdGNoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGVzLCBlcnJfMSwgaXRlbXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhYmF0Y2gubGVuZ3RoKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLmFsbChlbnRyaWVzKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBQcm9taXNlLmFsbChiYXRjaC5tYXAoZnJvbUVudHJ5KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcy5wdXNoKGl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSByZWFkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7IH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgfSk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUZpbGVFbnRyeVxuZnVuY3Rpb24gZnJvbUZpbGVFbnRyeShlbnRyeSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZmlsZShmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZ3cCA9ICgwLCBmaWxlXzEudG9GaWxlV2l0aFBhdGgpKGZpbGUsIGVudHJ5LmZ1bGxQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZndwKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWxlLXNlbGVjdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcm9tRXZlbnQgPSB2b2lkIDA7XG52YXIgZmlsZV9zZWxlY3Rvcl8xID0gcmVxdWlyZShcIi4vZmlsZS1zZWxlY3RvclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImZyb21FdmVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmlsZV9zZWxlY3Rvcl8xLmZyb21FdmVudDsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciByPXt9O2Z1bmN0aW9uIHQobil7aWYocltuXSlyZXR1cm4gcltuXS5leHBvcnRzO3ZhciBvPXJbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHQpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHQubT1lLHQuYz1yLHQuZD1mdW5jdGlvbihlLHIsbil7dC5vKGUscil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2VudW1lcmFibGU6ITAsZ2V0Om59KX0sdC5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHQudD1mdW5jdGlvbihlLHIpe2lmKDEmciYmKGU9dChlKSksOCZyKXJldHVybiBlO2lmKDQmciYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHQucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZyJiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSl0LmQobixvLGZ1bmN0aW9uKHIpe3JldHVybiBlW3JdfS5iaW5kKG51bGwsbykpO3JldHVybiBufSx0Lm49ZnVuY3Rpb24oZSl7dmFyIHI9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChyLFwiYVwiLHIpLHJ9LHQubz1mdW5jdGlvbihlLHIpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLHIsdCl7XCJ1c2Ugc3RyaWN0XCI7ci5fX2VzTW9kdWxlPSEwLHIuZGVmYXVsdD1mdW5jdGlvbihlLHIpe2lmKGUmJnIpe3ZhciB0PUFycmF5LmlzQXJyYXkocik/cjpyLnNwbGl0KFwiLFwiKTtpZigwPT09dC5sZW5ndGgpcmV0dXJuITA7dmFyIG49ZS5uYW1lfHxcIlwiLG89KGUudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKSx1PW8ucmVwbGFjZSgvXFwvLiokLyxcIlwiKTtyZXR1cm4gdC5zb21lKChmdW5jdGlvbihlKXt2YXIgcj1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiLlwiPT09ci5jaGFyQXQoMCk/bi50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKHIpOnIuZW5kc1dpdGgoXCIvKlwiKT91PT09ci5yZXBsYWNlKC9cXC8uKiQvLFwiXCIpOm89PT1yfSkpfXJldHVybiEwfX1dKTsiLCJmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuaW1wb3J0IF9hY2NlcHRzIGZyb20gXCJhdHRyLWFjY2VwdFwiO1xudmFyIGFjY2VwdHMgPSB0eXBlb2YgX2FjY2VwdHMgPT09IFwiZnVuY3Rpb25cIiA/IF9hY2NlcHRzIDogX2FjY2VwdHMuZGVmYXVsdDsgLy8gRXJyb3IgY29kZXNcblxuZXhwb3J0IHZhciBGSUxFX0lOVkFMSURfVFlQRSA9IFwiZmlsZS1pbnZhbGlkLXR5cGVcIjtcbmV4cG9ydCB2YXIgRklMRV9UT09fTEFSR0UgPSBcImZpbGUtdG9vLWxhcmdlXCI7XG5leHBvcnQgdmFyIEZJTEVfVE9PX1NNQUxMID0gXCJmaWxlLXRvby1zbWFsbFwiO1xuZXhwb3J0IHZhciBUT09fTUFOWV9GSUxFUyA9IFwidG9vLW1hbnktZmlsZXNcIjtcbmV4cG9ydCB2YXIgRXJyb3JDb2RlID0ge1xuICBGaWxlSW52YWxpZFR5cGU6IEZJTEVfSU5WQUxJRF9UWVBFLFxuICBGaWxlVG9vTGFyZ2U6IEZJTEVfVE9PX0xBUkdFLFxuICBGaWxlVG9vU21hbGw6IEZJTEVfVE9PX1NNQUxMLFxuICBUb29NYW55RmlsZXM6IFRPT19NQU5ZX0ZJTEVTXG59O1xuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFjY2VwdFxuICovXG5cbmV4cG9ydCB2YXIgZ2V0SW52YWxpZFR5cGVSZWplY3Rpb25FcnIgPSBmdW5jdGlvbiBnZXRJbnZhbGlkVHlwZVJlamVjdGlvbkVycigpIHtcbiAgdmFyIGFjY2VwdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogXCJcIjtcbiAgdmFyIGFjY2VwdEFyciA9IGFjY2VwdC5zcGxpdChcIixcIik7XG4gIHZhciBtc2cgPSBhY2NlcHRBcnIubGVuZ3RoID4gMSA/IFwib25lIG9mIFwiLmNvbmNhdChhY2NlcHRBcnIuam9pbihcIiwgXCIpKSA6IGFjY2VwdEFyclswXTtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBGSUxFX0lOVkFMSURfVFlQRSxcbiAgICBtZXNzYWdlOiBcIkZpbGUgdHlwZSBtdXN0IGJlIFwiLmNvbmNhdChtc2cpXG4gIH07XG59O1xuZXhwb3J0IHZhciBnZXRUb29MYXJnZVJlamVjdGlvbkVyciA9IGZ1bmN0aW9uIGdldFRvb0xhcmdlUmVqZWN0aW9uRXJyKG1heFNpemUpIHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBGSUxFX1RPT19MQVJHRSxcbiAgICBtZXNzYWdlOiBcIkZpbGUgaXMgbGFyZ2VyIHRoYW4gXCIuY29uY2F0KG1heFNpemUsIFwiIFwiKS5jb25jYXQobWF4U2l6ZSA9PT0gMSA/IFwiYnl0ZVwiIDogXCJieXRlc1wiKVxuICB9O1xufTtcbmV4cG9ydCB2YXIgZ2V0VG9vU21hbGxSZWplY3Rpb25FcnIgPSBmdW5jdGlvbiBnZXRUb29TbWFsbFJlamVjdGlvbkVycihtaW5TaXplKSB7XG4gIHJldHVybiB7XG4gICAgY29kZTogRklMRV9UT09fU01BTEwsXG4gICAgbWVzc2FnZTogXCJGaWxlIGlzIHNtYWxsZXIgdGhhbiBcIi5jb25jYXQobWluU2l6ZSwgXCIgXCIpLmNvbmNhdChtaW5TaXplID09PSAxID8gXCJieXRlXCIgOiBcImJ5dGVzXCIpXG4gIH07XG59O1xuZXhwb3J0IHZhciBUT09fTUFOWV9GSUxFU19SRUpFQ1RJT04gPSB7XG4gIGNvZGU6IFRPT19NQU5ZX0ZJTEVTLFxuICBtZXNzYWdlOiBcIlRvbyBtYW55IGZpbGVzXCJcbn07XG4vKipcbiAqIENoZWNrIGlmIGZpbGUgaXMgYWNjZXB0ZWQuXG4gKlxuICogRmlyZWZveCB2ZXJzaW9ucyBwcmlvciB0byA1MyByZXR1cm4gYSBib2d1cyBNSU1FIHR5cGUgZm9yIGV2ZXJ5IGZpbGUgZHJhZyxcbiAqIHNvIGRyYWdvdmVycyB3aXRoIHRoYXQgTUlNRSB0eXBlIHdpbGwgYWx3YXlzIGJlIGFjY2VwdGVkLlxuICpcbiAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICogQHBhcmFtIHtzdHJpbmd9IGFjY2VwdFxuICogQHJldHVybnNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsZUFjY2VwdGVkKGZpbGUsIGFjY2VwdCkge1xuICB2YXIgaXNBY2NlcHRhYmxlID0gZmlsZS50eXBlID09PSBcImFwcGxpY2F0aW9uL3gtbW96LWZpbGVcIiB8fCBhY2NlcHRzKGZpbGUsIGFjY2VwdCk7XG4gIHJldHVybiBbaXNBY2NlcHRhYmxlLCBpc0FjY2VwdGFibGUgPyBudWxsIDogZ2V0SW52YWxpZFR5cGVSZWplY3Rpb25FcnIoYWNjZXB0KV07XG59XG5leHBvcnQgZnVuY3Rpb24gZmlsZU1hdGNoU2l6ZShmaWxlLCBtaW5TaXplLCBtYXhTaXplKSB7XG4gIGlmIChpc0RlZmluZWQoZmlsZS5zaXplKSkge1xuICAgIGlmIChpc0RlZmluZWQobWluU2l6ZSkgJiYgaXNEZWZpbmVkKG1heFNpemUpKSB7XG4gICAgICBpZiAoZmlsZS5zaXplID4gbWF4U2l6ZSkgcmV0dXJuIFtmYWxzZSwgZ2V0VG9vTGFyZ2VSZWplY3Rpb25FcnIobWF4U2l6ZSldO1xuICAgICAgaWYgKGZpbGUuc2l6ZSA8IG1pblNpemUpIHJldHVybiBbZmFsc2UsIGdldFRvb1NtYWxsUmVqZWN0aW9uRXJyKG1pblNpemUpXTtcbiAgICB9IGVsc2UgaWYgKGlzRGVmaW5lZChtaW5TaXplKSAmJiBmaWxlLnNpemUgPCBtaW5TaXplKSByZXR1cm4gW2ZhbHNlLCBnZXRUb29TbWFsbFJlamVjdGlvbkVycihtaW5TaXplKV07ZWxzZSBpZiAoaXNEZWZpbmVkKG1heFNpemUpICYmIGZpbGUuc2l6ZSA+IG1heFNpemUpIHJldHVybiBbZmFsc2UsIGdldFRvb0xhcmdlUmVqZWN0aW9uRXJyKG1heFNpemUpXTtcbiAgfVxuXG4gIHJldHVybiBbdHJ1ZSwgbnVsbF07XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge0ZpbGVbXX0gb3B0aW9ucy5maWxlc1xuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmFjY2VwdF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5taW5TaXplXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFNpemVdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm11bHRpcGxlXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heEZpbGVzXVxuICogQHBhcmFtIHsoZjogRmlsZSkgPT4gRmlsZUVycm9yfEZpbGVFcnJvcltdfG51bGx9IFtvcHRpb25zLnZhbGlkYXRvcl1cbiAqIEByZXR1cm5zXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gYWxsRmlsZXNBY2NlcHRlZChfcmVmKSB7XG4gIHZhciBmaWxlcyA9IF9yZWYuZmlsZXMsXG4gICAgICBhY2NlcHQgPSBfcmVmLmFjY2VwdCxcbiAgICAgIG1pblNpemUgPSBfcmVmLm1pblNpemUsXG4gICAgICBtYXhTaXplID0gX3JlZi5tYXhTaXplLFxuICAgICAgbXVsdGlwbGUgPSBfcmVmLm11bHRpcGxlLFxuICAgICAgbWF4RmlsZXMgPSBfcmVmLm1heEZpbGVzLFxuICAgICAgdmFsaWRhdG9yID0gX3JlZi52YWxpZGF0b3I7XG5cbiAgaWYgKCFtdWx0aXBsZSAmJiBmaWxlcy5sZW5ndGggPiAxIHx8IG11bHRpcGxlICYmIG1heEZpbGVzID49IDEgJiYgZmlsZXMubGVuZ3RoID4gbWF4RmlsZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gZmlsZXMuZXZlcnkoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICB2YXIgX2ZpbGVBY2NlcHRlZCA9IGZpbGVBY2NlcHRlZChmaWxlLCBhY2NlcHQpLFxuICAgICAgICBfZmlsZUFjY2VwdGVkMiA9IF9zbGljZWRUb0FycmF5KF9maWxlQWNjZXB0ZWQsIDEpLFxuICAgICAgICBhY2NlcHRlZCA9IF9maWxlQWNjZXB0ZWQyWzBdO1xuXG4gICAgdmFyIF9maWxlTWF0Y2hTaXplID0gZmlsZU1hdGNoU2l6ZShmaWxlLCBtaW5TaXplLCBtYXhTaXplKSxcbiAgICAgICAgX2ZpbGVNYXRjaFNpemUyID0gX3NsaWNlZFRvQXJyYXkoX2ZpbGVNYXRjaFNpemUsIDEpLFxuICAgICAgICBzaXplTWF0Y2ggPSBfZmlsZU1hdGNoU2l6ZTJbMF07XG5cbiAgICB2YXIgY3VzdG9tRXJyb3JzID0gdmFsaWRhdG9yID8gdmFsaWRhdG9yKGZpbGUpIDogbnVsbDtcbiAgICByZXR1cm4gYWNjZXB0ZWQgJiYgc2l6ZU1hdGNoICYmICFjdXN0b21FcnJvcnM7XG4gIH0pO1xufSAvLyBSZWFjdCdzIHN5bnRoZXRpYyBldmVudHMgaGFzIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkLFxuLy8gYnV0IHRvIHJlbWFpbiBjb21wYXRpYmlsaXR5IHdpdGggb3RoZXIgbGlicyAoUHJlYWN0KSBmYWxsIGJhY2tcbi8vIHRvIGNoZWNrIGV2ZW50LmNhbmNlbEJ1YmJsZVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9wYWdhdGlvblN0b3BwZWQoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV2ZW50LmNhbmNlbEJ1YmJsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBldmVudC5jYW5jZWxCdWJibGU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFdnRXaXRoRmlsZXMoZXZlbnQpIHtcbiAgaWYgKCFldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICByZXR1cm4gISFldmVudC50YXJnZXQgJiYgISFldmVudC50YXJnZXQuZmlsZXM7XG4gIH0gLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RhdGFUcmFuc2Zlci90eXBlc1xuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTF9EcmFnX2FuZF9Ecm9wX0FQSS9SZWNvbW1lbmRlZF9kcmFnX3R5cGVzI2ZpbGVcblxuXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcywgZnVuY3Rpb24gKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSA9PT0gXCJGaWxlc1wiIHx8IHR5cGUgPT09IFwiYXBwbGljYXRpb24veC1tb3otZmlsZVwiO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0tpbmRGaWxlKGl0ZW0pIHtcbiAgcmV0dXJuIF90eXBlb2YoaXRlbSkgPT09IFwib2JqZWN0XCIgJiYgaXRlbSAhPT0gbnVsbCAmJiBpdGVtLmtpbmQgPT09IFwiZmlsZVwiO1xufSAvLyBhbGxvdyB0aGUgZW50aXJlIGRvY3VtZW50IHRvIGJlIGEgZHJhZyB0YXJnZXRcblxuZXhwb3J0IGZ1bmN0aW9uIG9uRG9jdW1lbnREcmFnT3ZlcihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBpc0llKHVzZXJBZ2VudCkge1xuICByZXR1cm4gdXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpICE9PSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZihcIlRyaWRlbnQvXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaXNFZGdlKHVzZXJBZ2VudCkge1xuICByZXR1cm4gdXNlckFnZW50LmluZGV4T2YoXCJFZGdlL1wiKSAhPT0gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0llT3JFZGdlKCkge1xuICB2YXIgdXNlckFnZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIGlzSWUodXNlckFnZW50KSB8fCBpc0VkZ2UodXNlckFnZW50KTtcbn1cbi8qKlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIHRvIGNvbXBvc2UgZXZlbnQgaGFuZGxlcnNcbiAqIFRoZXkgYXJlIGV4ZWN1dGVkIGluIG9yZGVyIHVudGlsIG9uZSBvZiB0aGVtIGNhbGxzIGBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpYC5cbiAqIE5vdGUgdGhhdCB0aGUgY2hlY2sgaXMgZG9uZSBvbiB0aGUgZmlyc3QgaW52b2tlIHRvbyxcbiAqIG1lYW5pbmcgdGhhdCBpZiBwcm9wYWdhdGlvbiB3YXMgc3RvcHBlZCBiZWZvcmUgaW52b2tpbmcgdGhlIGZucyxcbiAqIG5vIGhhbmRsZXJzIHdpbGwgYmUgZXhlY3V0ZWQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5zIHRoZSBldmVudCBoYW5sZGVyIGZ1bmN0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IHRoZSBldmVudCBoYW5kbGVyIHRvIGFkZCB0byBhbiBlbGVtZW50XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VFdmVudEhhbmRsZXJzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZuc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm5zLnNvbWUoZnVuY3Rpb24gKGZuKSB7XG4gICAgICBpZiAoIWlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KSAmJiBmbikge1xuICAgICAgICBmbi5hcHBseSh2b2lkIDAsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KTtcbiAgICB9KTtcbiAgfTtcbn1cbi8qKlxuICogY2FuVXNlRmlsZVN5c3RlbUFjY2Vzc0FQSSBjaGVja3MgaWYgdGhlIFtGaWxlIFN5c3RlbSBBY2Nlc3MgQVBJXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZV9TeXN0ZW1fQWNjZXNzX0FQSSlcbiAqIGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5Vc2VGaWxlU3lzdGVtQWNjZXNzQVBJKCkge1xuICByZXR1cm4gXCJzaG93T3BlbkZpbGVQaWNrZXJcIiBpbiB3aW5kb3c7XG59XG4vKipcbiAqIENvbnZlcnQgdGhlIGB7YWNjZXB0fWAgZHJvcHpvbmUgcHJvcCB0byB0aGVcbiAqIGB7dHlwZXN9YCBvcHRpb24gZm9yIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cvc2hvd09wZW5GaWxlUGlja2VyXG4gKlxuICogQHBhcmFtIHtBY2NlcHRQcm9wfSBhY2NlcHRcbiAqIEByZXR1cm5zIHt7YWNjZXB0OiBzdHJpbmdbXX1bXX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGlja2VyT3B0aW9uc0Zyb21BY2NlcHQoYWNjZXB0KSB7XG4gIGlmIChpc0RlZmluZWQoYWNjZXB0KSkge1xuICAgIHZhciBhY2NlcHRGb3JQaWNrZXIgPSBPYmplY3QuZW50cmllcyhhY2NlcHQpLmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBfcmVmMyA9IF9zbGljZWRUb0FycmF5KF9yZWYyLCAyKSxcbiAgICAgICAgICBtaW1lVHlwZSA9IF9yZWYzWzBdLFxuICAgICAgICAgIGV4dCA9IF9yZWYzWzFdO1xuXG4gICAgICB2YXIgb2sgPSB0cnVlO1xuXG4gICAgICBpZiAoIWlzTUlNRVR5cGUobWltZVR5cGUpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlNraXBwZWQgXFxcIlwiLmNvbmNhdChtaW1lVHlwZSwgXCJcXFwiIGJlY2F1c2UgaXQgaXMgbm90IGEgdmFsaWQgTUlNRSB0eXBlLiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL01JTUVfdHlwZXMvQ29tbW9uX3R5cGVzIGZvciBhIGxpc3Qgb2YgdmFsaWQgTUlNRSB0eXBlcy5cIikpO1xuICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0KSB8fCAhZXh0LmV2ZXJ5KGlzRXh0KSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTa2lwcGVkIFxcXCJcIi5jb25jYXQobWltZVR5cGUsIFwiXFxcIiBiZWNhdXNlIGFuIGludmFsaWQgZmlsZSBleHRlbnNpb24gd2FzIHByb3ZpZGVkLlwiKSk7XG4gICAgICAgIG9rID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvaztcbiAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFnZywgX3JlZjQpIHtcbiAgICAgIHZhciBfcmVmNSA9IF9zbGljZWRUb0FycmF5KF9yZWY0LCAyKSxcbiAgICAgICAgICBtaW1lVHlwZSA9IF9yZWY1WzBdLFxuICAgICAgICAgIGV4dCA9IF9yZWY1WzFdO1xuXG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBhZ2cpLCB7fSwgX2RlZmluZVByb3BlcnR5KHt9LCBtaW1lVHlwZSwgZXh0KSk7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBbe1xuICAgICAgLy8gZGVzY3JpcHRpb24gaXMgcmVxdWlyZWQgZHVlIHRvIGh0dHBzOi8vY3JidWcuY29tLzEyNjQ3MDhcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZpbGVzXCIsXG4gICAgICBhY2NlcHQ6IGFjY2VwdEZvclBpY2tlclxuICAgIH1dO1xuICB9XG5cbiAgcmV0dXJuIGFjY2VwdDtcbn1cbi8qKlxuICogQ29udmVydCB0aGUgYHthY2NlcHR9YCBkcm9wem9uZSBwcm9wIHRvIGFuIGFycmF5IG9mIE1JTUUgdHlwZXMvZXh0ZW5zaW9ucy5cbiAqIEBwYXJhbSB7QWNjZXB0UHJvcH0gYWNjZXB0XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhY2NlcHRQcm9wQXNBY2NlcHRBdHRyKGFjY2VwdCkge1xuICBpZiAoaXNEZWZpbmVkKGFjY2VwdCkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoYWNjZXB0KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIF9yZWY2KSB7XG4gICAgICB2YXIgX3JlZjcgPSBfc2xpY2VkVG9BcnJheShfcmVmNiwgMiksXG4gICAgICAgICAgbWltZVR5cGUgPSBfcmVmN1swXSxcbiAgICAgICAgICBleHQgPSBfcmVmN1sxXTtcblxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYSksIFttaW1lVHlwZV0sIF90b0NvbnN1bWFibGVBcnJheShleHQpKTtcbiAgICB9LCBbXSkgLy8gU2lsZW50bHkgZGlzY2FyZCBpbnZhbGlkIGVudHJpZXMgYXMgcGlja2VyT3B0aW9uc0Zyb21BY2NlcHQgd2FybnMgYWJvdXQgdGhlc2VcbiAgICAuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gaXNNSU1FVHlwZSh2KSB8fCBpc0V4dCh2KTtcbiAgICB9KS5qb2luKFwiLFwiKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4vKipcbiAqIENoZWNrIGlmIHYgaXMgYW4gZXhjZXB0aW9uIGNhdXNlZCBieSBhYm9ydGluZyBhIHJlcXVlc3QgKGUuZyB3aW5kb3cuc2hvd09wZW5GaWxlUGlja2VyKCkpLlxuICpcbiAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NRXhjZXB0aW9uLlxuICogQHBhcmFtIHthbnl9IHZcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHYgaXMgYW4gYWJvcnQgZXhjZXB0aW9uLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fib3J0KHYpIHtcbiAgcmV0dXJuIHYgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiYgKHYubmFtZSA9PT0gXCJBYm9ydEVycm9yXCIgfHwgdi5jb2RlID09PSB2LkFCT1JUX0VSUik7XG59XG4vKipcbiAqIENoZWNrIGlmIHYgaXMgYSBzZWN1cml0eSBlcnJvci5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUV4Y2VwdGlvbi5cbiAqIEBwYXJhbSB7YW55fSB2XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2IGlzIGEgc2VjdXJpdHkgZXJyb3IuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2VjdXJpdHlFcnJvcih2KSB7XG4gIHJldHVybiB2IGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmICh2Lm5hbWUgPT09IFwiU2VjdXJpdHlFcnJvclwiIHx8IHYuY29kZSA9PT0gdi5TRUNVUklUWV9FUlIpO1xufVxuLyoqXG4gKiBDaGVjayBpZiB2IGlzIGEgTUlNRSB0eXBlIHN0cmluZy5cbiAqXG4gKiBTZWUgYWNjZXB0ZWQgZm9ybWF0OiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQvZmlsZSN1bmlxdWVfZmlsZV90eXBlX3NwZWNpZmllcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNNSU1FVHlwZSh2KSB7XG4gIHJldHVybiB2ID09PSBcImF1ZGlvLypcIiB8fCB2ID09PSBcInZpZGVvLypcIiB8fCB2ID09PSBcImltYWdlLypcIiB8fCB2ID09PSBcInRleHQvKlwiIHx8IHYgPT09IFwiYXBwbGljYXRpb24vKlwiIHx8IC9cXHcrXFwvWy0rLlxcd10rL2cudGVzdCh2KTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgdiBpcyBhIGZpbGUgZXh0ZW5zaW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHZcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNFeHQodikge1xuICByZXR1cm4gL14uKlxcLltcXHddKyQvLnRlc3Qodik7XG59XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3QuPHN0cmluZywgc3RyaW5nW10+fSBBY2NlcHRQcm9wXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBGaWxlRXJyb3JcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcHJvcGVydHkge0Vycm9yQ29kZXxzdHJpbmd9IGNvZGVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtcImZpbGUtaW52YWxpZC10eXBlXCJ8XCJmaWxlLXRvby1sYXJnZVwifFwiZmlsZS10b28tc21hbGxcInxcInRvby1tYW55LWZpbGVzXCJ9IEVycm9yQ29kZVxuICovIiwidmFyIF9leGNsdWRlZCA9IFtcImNoaWxkcmVuXCJdLFxuICAgIF9leGNsdWRlZDIgPSBbXCJvcGVuXCJdLFxuICAgIF9leGNsdWRlZDMgPSBbXCJyZWZLZXlcIiwgXCJyb2xlXCIsIFwib25LZXlEb3duXCIsIFwib25Gb2N1c1wiLCBcIm9uQmx1clwiLCBcIm9uQ2xpY2tcIiwgXCJvbkRyYWdFbnRlclwiLCBcIm9uRHJhZ092ZXJcIiwgXCJvbkRyYWdMZWF2ZVwiLCBcIm9uRHJvcFwiXSxcbiAgICBfZXhjbHVkZWQ0ID0gW1wicmVmS2V5XCIsIFwib25DaGFuZ2VcIiwgXCJvbkNsaWNrXCJdO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7IHZhciBrZXksIGk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qIGVzbGludCBwcmVmZXItdGVtcGxhdGU6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlTWVtbywgdXNlUmVkdWNlciwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tIFwiZmlsZS1zZWxlY3RvclwiO1xuaW1wb3J0IHsgYWNjZXB0UHJvcEFzQWNjZXB0QXR0ciwgYWxsRmlsZXNBY2NlcHRlZCwgY29tcG9zZUV2ZW50SGFuZGxlcnMsIGZpbGVBY2NlcHRlZCwgZmlsZU1hdGNoU2l6ZSwgY2FuVXNlRmlsZVN5c3RlbUFjY2Vzc0FQSSwgaXNBYm9ydCwgaXNFdnRXaXRoRmlsZXMsIGlzSWVPckVkZ2UsIGlzUHJvcGFnYXRpb25TdG9wcGVkLCBpc1NlY3VyaXR5RXJyb3IsIG9uRG9jdW1lbnREcmFnT3ZlciwgcGlja2VyT3B0aW9uc0Zyb21BY2NlcHQsIFRPT19NQU5ZX0ZJTEVTX1JFSkVDVElPTiB9IGZyb20gXCIuL3V0aWxzL2luZGV4LmpzXCI7XG4vKipcbiAqIENvbnZlbmllbmNlIHdyYXBwZXIgY29tcG9uZW50IGZvciB0aGUgYHVzZURyb3B6b25lYCBob29rXG4gKlxuICogYGBganN4XG4gKiA8RHJvcHpvbmU+XG4gKiAgIHsoe2dldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wc30pID0+IChcbiAqICAgICA8ZGl2IHsuLi5nZXRSb290UHJvcHMoKX0+XG4gKiAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAqICAgICAgIDxwPkRyYWcgJ24nIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XG4gKiAgICAgPC9kaXY+XG4gKiAgICl9XG4gKiA8L0Ryb3B6b25lPlxuICogYGBgXG4gKi9cblxudmFyIERyb3B6b25lID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgcGFyYW1zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgdmFyIF91c2VEcm9wem9uZSA9IHVzZURyb3B6b25lKHBhcmFtcyksXG4gICAgICBvcGVuID0gX3VzZURyb3B6b25lLm9wZW4sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdXNlRHJvcHpvbmUsIF9leGNsdWRlZDIpO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IG9wZW5cbiAgICB9O1xuICB9LCBbb3Blbl0pOyAvLyBUT0RPOiBGaWd1cmUgb3V0IHdoeSByZWFjdC1zdHlsZWd1aWRpc3QgY2Fubm90IGNyZWF0ZSBkb2NzIGlmIHdlIGRvbid0IHJldHVybiBhIGpzeCBlbGVtZW50XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBjaGlsZHJlbihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICBvcGVuOiBvcGVuXG4gIH0pKSk7XG59KTtcbkRyb3B6b25lLmRpc3BsYXlOYW1lID0gXCJEcm9wem9uZVwiOyAvLyBBZGQgZGVmYXVsdCBwcm9wcyBmb3IgcmVhY3QtZG9jZ2VuXG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZ2V0RmlsZXNGcm9tRXZlbnQ6IGZyb21FdmVudCxcbiAgbWF4U2l6ZTogSW5maW5pdHksXG4gIG1pblNpemU6IDAsXG4gIG11bHRpcGxlOiB0cnVlLFxuICBtYXhGaWxlczogMCxcbiAgcHJldmVudERyb3BPbkRvY3VtZW50OiB0cnVlLFxuICBub0NsaWNrOiBmYWxzZSxcbiAgbm9LZXlib2FyZDogZmFsc2UsXG4gIG5vRHJhZzogZmFsc2UsXG4gIG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiBmYWxzZSxcbiAgdmFsaWRhdG9yOiBudWxsLFxuICB1c2VGc0FjY2Vzc0FwaTogZmFsc2UsXG4gIGF1dG9Gb2N1czogZmFsc2Vcbn07XG5Ecm9wem9uZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5Ecm9wem9uZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBSZW5kZXIgZnVuY3Rpb24gdGhhdCBleHBvc2VzIHRoZSBkcm9wem9uZSBzdGF0ZSBhbmQgcHJvcCBnZXR0ZXIgZm5zXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyYW1zLmdldFJvb3RQcm9wcyBSZXR1cm5zIHRoZSBwcm9wcyB5b3Ugc2hvdWxkIGFwcGx5IHRvIHRoZSByb290IGRyb3AgY29udGFpbmVyIHlvdSByZW5kZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyYW1zLmdldElucHV0UHJvcHMgUmV0dXJucyB0aGUgcHJvcHMgeW91IHNob3VsZCBhcHBseSB0byBoaWRkZW4gZmlsZSBpbnB1dCB5b3UgcmVuZGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcmFtcy5vcGVuIE9wZW4gdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2dcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNGb2N1c2VkIERyb3B6b25lIGFyZWEgaXMgaW4gZm9jdXNcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNGaWxlRGlhbG9nQWN0aXZlIEZpbGUgZGlhbG9nIGlzIG9wZW5lZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pc0RyYWdBY3RpdmUgQWN0aXZlIGRyYWcgaXMgaW4gcHJvZ3Jlc3NcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNEcmFnQWNjZXB0IERyYWdnZWQgZmlsZXMgYXJlIGFjY2VwdGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlzRHJhZ1JlamVjdCBTb21lIGRyYWdnZWQgZmlsZXMgYXJlIHJlamVjdGVkXG4gICAqIEBwYXJhbSB7RmlsZVtdfSBwYXJhbXMuYWNjZXB0ZWRGaWxlcyBBY2NlcHRlZCBmaWxlc1xuICAgKiBAcGFyYW0ge0ZpbGVSZWplY3Rpb25bXX0gcGFyYW1zLmZpbGVSZWplY3Rpb25zIFJlamVjdGVkIGZpbGVzIGFuZCB3aHkgdGhleSB3ZXJlIHJlamVjdGVkXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFNldCBhY2NlcHRlZCBmaWxlIHR5cGVzLlxuICAgKiBDaGVja291dCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93L3Nob3dPcGVuRmlsZVBpY2tlciB0eXBlcyBvcHRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqIEtlZXAgaW4gbWluZCB0aGF0IG1pbWUgdHlwZSBkZXRlcm1pbmF0aW9uIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgcGxhdGZvcm1zLiBDU1YgZmlsZXMsXG4gICAqIGZvciBleGFtcGxlLCBhcmUgcmVwb3J0ZWQgYXMgdGV4dC9wbGFpbiB1bmRlciBtYWNPUyBidXQgYXMgYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsIHVuZGVyXG4gICAqIFdpbmRvd3MuIEluIHNvbWUgY2FzZXMgdGhlcmUgbWlnaHQgbm90IGJlIGEgbWltZSB0eXBlIHNldCBhdCBhbGwgKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1kcm9wem9uZS9yZWFjdC1kcm9wem9uZS9pc3N1ZXMvMjc2KS5cbiAgICovXG4gIGFjY2VwdDogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpKSxcblxuICAvKipcbiAgICogQWxsb3cgZHJhZyAnbicgZHJvcCAob3Igc2VsZWN0aW9uIGZyb20gdGhlIGZpbGUgZGlhbG9nKSBvZiBtdWx0aXBsZSBmaWxlc1xuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBmYWxzZSwgYWxsb3cgZHJvcHBlZCBpdGVtcyB0byB0YWtlIG92ZXIgdGhlIGN1cnJlbnQgYnJvd3NlciB3aW5kb3dcbiAgICovXG4gIHByZXZlbnREcm9wT25Eb2N1bWVudDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGRpc2FibGVzIGNsaWNrIHRvIG9wZW4gdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2dcbiAgICovXG4gIG5vQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBkaXNhYmxlcyBTUEFDRS9FTlRFUiB0byBvcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nLlxuICAgKiBOb3RlIHRoYXQgaXQgYWxzbyBzdG9wcyB0cmFja2luZyB0aGUgZm9jdXMgc3RhdGUuXG4gICAqL1xuICBub0tleWJvYXJkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZGlzYWJsZXMgZHJhZyAnbicgZHJvcFxuICAgKi9cbiAgbm9EcmFnOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgc3RvcHMgZHJhZyBldmVudCBwcm9wYWdhdGlvbiB0byBwYXJlbnRzXG4gICAqL1xuICBub0RyYWdFdmVudHNCdWJibGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE1pbmltdW0gZmlsZSBzaXplIChpbiBieXRlcylcbiAgICovXG4gIG1pblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIE1heGltdW0gZmlsZSBzaXplIChpbiBieXRlcylcbiAgICovXG4gIG1heFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIE1heGltdW0gYWNjZXB0ZWQgbnVtYmVyIG9mIGZpbGVzXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAgd2hpY2ggbWVhbnMgdGhlcmUgaXMgbm8gbGltaXRhdGlvbiB0byBob3cgbWFueSBmaWxlcyBhcmUgYWNjZXB0ZWQuXG4gICAqL1xuICBtYXhGaWxlczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogRW5hYmxlL2Rpc2FibGUgdGhlIGRyb3B6b25lXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIHRvIHByb3ZpZGUgYSBjdXN0b20gZmlsZSBhZ2dyZWdhdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudHxBcnJheTxGaWxlU3lzdGVtRmlsZUhhbmRsZT4pfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gICAqL1xuICBnZXRGaWxlc0Zyb21FdmVudDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIGNsb3NpbmcgdGhlIGZpbGUgZGlhbG9nIHdpdGggbm8gc2VsZWN0aW9uXG4gICAqL1xuICBvbkZpbGVEaWFsb2dDYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiBvcGVuaW5nIHRoZSBmaWxlIGRpYWxvZ1xuICAgKi9cbiAgb25GaWxlRGlhbG9nT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHVzZSB0aGUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVfU3lzdGVtX0FjY2Vzc19BUElcbiAgICogdG8gb3BlbiB0aGUgZmlsZSBwaWNrZXIgaW5zdGVhZCBvZiB1c2luZyBhbiBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YCBjbGljayBldmVudC5cbiAgICovXG4gIHVzZUZzQWNjZXNzQXBpOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gZm9jdXMgdGhlIHJvb3QgZWxlbWVudCBvbiByZW5kZXJcbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJhZ2VudGVyYCBldmVudCBvY2N1cnMuXG4gICAqXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBldmVudFxuICAgKi9cbiAgb25EcmFnRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyYWdsZWF2ZWAgZXZlbnQgb2NjdXJzXG4gICAqXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBldmVudFxuICAgKi9cbiAgb25EcmFnTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyYWdvdmVyYCBldmVudCBvY2N1cnNcbiAgICpcbiAgICogQHBhcmFtIHtEcmFnRXZlbnR9IGV2ZW50XG4gICAqL1xuICBvbkRyYWdPdmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcm9wYCBldmVudCBvY2N1cnMuXG4gICAqIE5vdGUgdGhhdCB0aGlzIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIGBnZXRGaWxlc0Zyb21FdmVudGAgY2FsbGJhY2sgaXMgZG9uZS5cbiAgICpcbiAgICogRmlsZXMgYXJlIGFjY2VwdGVkIG9yIHJlamVjdGVkIGJhc2VkIG9uIHRoZSBgYWNjZXB0YCwgYG11bHRpcGxlYCwgYG1pblNpemVgIGFuZCBgbWF4U2l6ZWAgcHJvcHMuXG4gICAqIGBhY2NlcHRgIG11c3QgYmUgYSB2YWxpZCBbTUlNRSB0eXBlXShodHRwOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL21lZGlhLXR5cGVzL21lZGlhLXR5cGVzLnhodG1sKSBhY2NvcmRpbmcgdG8gW2lucHV0IGVsZW1lbnQgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly93d3cudzMub3JnL3dpa2kvSFRNTC9FbGVtZW50cy9pbnB1dC9maWxlKSBvciBhIHZhbGlkIGZpbGUgZXh0ZW5zaW9uLlxuICAgKiBJZiBgbXVsdGlwbGVgIGlzIHNldCB0byBmYWxzZSBhbmQgYWRkaXRpb25hbCBmaWxlcyBhcmUgZHJvcHBlZCxcbiAgICogYWxsIGZpbGVzIGJlc2lkZXMgdGhlIGZpcnN0IHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAqIEFueSBmaWxlIHdoaWNoIGRvZXMgbm90IGhhdmUgYSBzaXplIGluIHRoZSBbYG1pblNpemVgLCBgbWF4U2l6ZWBdIHJhbmdlLCB3aWxsIGJlIHJlamVjdGVkIGFzIHdlbGwuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGUgYG9uRHJvcGAgY2FsbGJhY2sgd2lsbCBhbHdheXMgYmUgaW52b2tlZCByZWdhcmRsZXNzIGlmIHRoZSBkcm9wcGVkIGZpbGVzIHdlcmUgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQuXG4gICAqIElmIHlvdSdkIGxpa2UgdG8gcmVhY3QgdG8gYSBzcGVjaWZpYyBzY2VuYXJpbywgdXNlIHRoZSBgb25Ecm9wQWNjZXB0ZWRgL2BvbkRyb3BSZWplY3RlZGAgcHJvcHMuXG4gICAqXG4gICAqIGBvbkRyb3BgIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhbiBhcnJheSBvZiBbRmlsZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGUpIG9iamVjdHMgd2hpY2ggeW91IGNhbiB0aGVuIHByb2Nlc3MgYW5kIHNlbmQgdG8gYSBzZXJ2ZXIuXG4gICAqIEZvciBleGFtcGxlLCB3aXRoIFtTdXBlckFnZW50XShodHRwczovL2dpdGh1Yi5jb20vdmlzaW9ubWVkaWEvc3VwZXJhZ2VudCkgYXMgYSBodHRwL2FqYXggbGlicmFyeTpcbiAgICpcbiAgICogYGBganNcbiAgICogZnVuY3Rpb24gb25Ecm9wKGFjY2VwdGVkRmlsZXMpIHtcbiAgICogICBjb25zdCByZXEgPSByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICAgKiAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICogICAgIHJlcS5hdHRhY2goZmlsZS5uYW1lLCBmaWxlKVxuICAgKiAgIH0pXG4gICAqICAgcmVxLmVuZChjYWxsYmFjaylcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtGaWxlW119IGFjY2VwdGVkRmlsZXNcbiAgICogQHBhcmFtIHtGaWxlUmVqZWN0aW9uW119IGZpbGVSZWplY3Rpb25zXG4gICAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAgICovXG4gIG9uRHJvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJvcGAgZXZlbnQgb2NjdXJzLlxuICAgKiBOb3RlIHRoYXQgaWYgbm8gZmlsZXMgYXJlIGFjY2VwdGVkLCB0aGlzIGNhbGxiYWNrIGlzIG5vdCBpbnZva2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZpbGVbXX0gZmlsZXNcbiAgICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnRcbiAgICovXG4gIG9uRHJvcEFjY2VwdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcm9wYCBldmVudCBvY2N1cnMuXG4gICAqIE5vdGUgdGhhdCBpZiBubyBmaWxlcyBhcmUgcmVqZWN0ZWQsIHRoaXMgY2FsbGJhY2sgaXMgbm90IGludm9rZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RmlsZVJlamVjdGlvbltdfSBmaWxlUmVqZWN0aW9uc1xuICAgKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudFxuICAgKi9cbiAgb25Ecm9wUmVqZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGVyZSdzIHNvbWUgZXJyb3IgZnJvbSBhbnkgb2YgdGhlIHByb21pc2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICAgKi9cbiAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9uLiBJdCBtdXN0IHJldHVybiBudWxsIGlmIHRoZXJlJ3Mgbm8gZXJyb3JzLlxuICAgKiBAcGFyYW0ge0ZpbGV9IGZpbGVcbiAgICogQHJldHVybnMge0ZpbGVFcnJvcnxGaWxlRXJyb3JbXXxudWxsfVxuICAgKi9cbiAgdmFsaWRhdG9yOiBQcm9wVHlwZXMuZnVuY1xufTtcbmV4cG9ydCBkZWZhdWx0IERyb3B6b25lO1xuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBmb3IgdGhlIGBkcmFnZW50ZXJgLFxuICogYGRyYWdvdmVyYCBhbmQgYGRyYWdsZWF2ZWAgZXZlbnRzLlxuICogSXQgaXMgbm90IGludm9rZWQgaWYgdGhlIGl0ZW1zIGFyZSBub3QgZmlsZXMgKHN1Y2ggYXMgbGluaywgdGV4dCwgZXRjLikuXG4gKlxuICogQGNhbGxiYWNrIGRyYWdDYlxuICogQHBhcmFtIHtEcmFnRXZlbnR9IGV2ZW50XG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBmb3IgdGhlIGBkcm9wYCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQuXG4gKiBJdCBpcyBub3QgaW52b2tlZCBpZiB0aGUgaXRlbXMgYXJlIG5vdCBmaWxlcyAoc3VjaCBhcyBsaW5rLCB0ZXh0LCBldGMuKS5cbiAqXG4gKiBAY2FsbGJhY2sgZHJvcENiXG4gKiBAcGFyYW0ge0ZpbGVbXX0gYWNjZXB0ZWRGaWxlcyBMaXN0IG9mIGFjY2VwdGVkIGZpbGVzXG4gKiBAcGFyYW0ge0ZpbGVSZWplY3Rpb25bXX0gZmlsZVJlamVjdGlvbnMgTGlzdCBvZiByZWplY3RlZCBmaWxlcyBhbmQgd2h5IHRoZXkgd2VyZSByZWplY3RlZFxuICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnQgQSBkcmFnIGV2ZW50IG9yIGlucHV0IGNoYW5nZSBldmVudCAoaWYgZmlsZXMgd2VyZSBzZWxlY3RlZCB2aWEgdGhlIGZpbGUgZGlhbG9nKVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJvcGAgb3IgaW5wdXQgY2hhbmdlIGV2ZW50LlxuICogSXQgaXMgbm90IGludm9rZWQgaWYgdGhlIGl0ZW1zIGFyZSBmaWxlcyAoc3VjaCBhcyBsaW5rLCB0ZXh0LCBldGMuKS5cbiAqXG4gKiBAY2FsbGJhY2sgZHJvcEFjY2VwdGVkQ2JcbiAqIEBwYXJhbSB7RmlsZVtdfSBmaWxlcyBMaXN0IG9mIGFjY2VwdGVkIGZpbGVzIHRoYXQgbWVldCB0aGUgZ2l2ZW4gY3JpdGVyaWFcbiAqIChgYWNjZXB0YCwgYG11bHRpcGxlYCwgYG1pblNpemVgLCBgbWF4U2l6ZWApXG4gKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCBmb3IgdGhlIGBkcm9wYCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQuXG4gKlxuICogQGNhbGxiYWNrIGRyb3BSZWplY3RlZENiXG4gKiBAcGFyYW0ge0ZpbGVbXX0gZmlsZXMgTGlzdCBvZiByZWplY3RlZCBmaWxlcyB0aGF0IGRvIG5vdCBtZWV0IHRoZSBnaXZlbiBjcml0ZXJpYVxuICogKGBhY2NlcHRgLCBgbXVsdGlwbGVgLCBgbWluU2l6ZWAsIGBtYXhTaXplYClcbiAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIGFnZ3JlZ2F0ZSBmaWxlcyxcbiAqIGluIGEgYXN5bmNocm9ub3VzIGZhc2hpb24sIGZyb20gZHJhZyBvciBpbnB1dCBjaGFuZ2UgZXZlbnRzLlxuICpcbiAqIEBjYWxsYmFjayBnZXRGaWxlc0Zyb21FdmVudFxuICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50fEFycmF5PEZpbGVTeXN0ZW1GaWxlSGFuZGxlPil9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAqIEByZXR1cm5zIHsoRmlsZVtdfFByb21pc2U8RmlsZVtdPil9XG4gKi9cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCBkcm9wem9uZSBzdGF0ZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBEcm9wem9uZVN0YXRlXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRm9jdXNlZCBEcm9wem9uZSBhcmVhIGlzIGluIGZvY3VzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRmlsZURpYWxvZ0FjdGl2ZSBGaWxlIGRpYWxvZyBpcyBvcGVuZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNEcmFnQWN0aXZlIEFjdGl2ZSBkcmFnIGlzIGluIHByb2dyZXNzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRHJhZ0FjY2VwdCBEcmFnZ2VkIGZpbGVzIGFyZSBhY2NlcHRlZFxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0RyYWdSZWplY3QgU29tZSBkcmFnZ2VkIGZpbGVzIGFyZSByZWplY3RlZFxuICogQHByb3BlcnR5IHtGaWxlW119IGFjY2VwdGVkRmlsZXMgQWNjZXB0ZWQgZmlsZXNcbiAqIEBwcm9wZXJ0eSB7RmlsZVJlamVjdGlvbltdfSBmaWxlUmVqZWN0aW9ucyBSZWplY3RlZCBmaWxlcyBhbmQgd2h5IHRoZXkgd2VyZSByZWplY3RlZFxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggdGhlIGRyb3B6b25lIG1ldGhvZHMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRHJvcHpvbmVNZXRob2RzXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRSb290UHJvcHMgUmV0dXJucyB0aGUgcHJvcHMgeW91IHNob3VsZCBhcHBseSB0byB0aGUgcm9vdCBkcm9wIGNvbnRhaW5lciB5b3UgcmVuZGVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRJbnB1dFByb3BzIFJldHVybnMgdGhlIHByb3BzIHlvdSBzaG91bGQgYXBwbHkgdG8gaGlkZGVuIGZpbGUgaW5wdXQgeW91IHJlbmRlclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gb3BlbiBPcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nXG4gKi9cblxudmFyIGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgaXNGaWxlRGlhbG9nQWN0aXZlOiBmYWxzZSxcbiAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcbiAgaXNEcmFnQWNjZXB0OiBmYWxzZSxcbiAgaXNEcmFnUmVqZWN0OiBmYWxzZSxcbiAgYWNjZXB0ZWRGaWxlczogW10sXG4gIGZpbGVSZWplY3Rpb25zOiBbXVxufTtcbi8qKlxuICogQSBSZWFjdCBob29rIHRoYXQgY3JlYXRlcyBhIGRyYWcgJ24nIGRyb3AgYXJlYS5cbiAqXG4gKiBgYGBqc3hcbiAqIGZ1bmN0aW9uIE15RHJvcHpvbmUocHJvcHMpIHtcbiAqICAgY29uc3Qge2dldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wc30gPSB1c2VEcm9wem9uZSh7XG4gKiAgICAgb25Ecm9wOiBhY2NlcHRlZEZpbGVzID0+IHtcbiAqICAgICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBGaWxlIG9iamVjdHMsIGUuZy4gdXBsb2FkIHRvIHNvbWUgc2VydmVyXG4gKiAgICAgfVxuICogICB9KTtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2IHsuLi5nZXRSb290UHJvcHMoKX0+XG4gKiAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAqICAgICAgIDxwPkRyYWcgYW5kIGRyb3Agc29tZSBmaWxlcyBoZXJlLCBvciBjbGljayB0byBzZWxlY3QgZmlsZXM8L3A+XG4gKiAgICAgPC9kaXY+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBmdW5jdGlvbiB1c2VEcm9wem9uZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtpbXBvcnQoXCIuL3V0aWxzXCIpLkFjY2VwdFByb3B9IFtwcm9wcy5hY2NlcHRdIFNldCBhY2NlcHRlZCBmaWxlIHR5cGVzLlxuICogQ2hlY2tvdXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL3dpbmRvdy9zaG93T3BlbkZpbGVQaWNrZXIgdHlwZXMgb3B0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICogS2VlcCBpbiBtaW5kIHRoYXQgbWltZSB0eXBlIGRldGVybWluYXRpb24gaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBwbGF0Zm9ybXMuIENTViBmaWxlcyxcbiAqIGZvciBleGFtcGxlLCBhcmUgcmVwb3J0ZWQgYXMgdGV4dC9wbGFpbiB1bmRlciBtYWNPUyBidXQgYXMgYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsIHVuZGVyXG4gKiBXaW5kb3dzLiBJbiBzb21lIGNhc2VzIHRoZXJlIG1pZ2h0IG5vdCBiZSBhIG1pbWUgdHlwZSBzZXQgYXQgYWxsIChodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtZHJvcHpvbmUvcmVhY3QtZHJvcHpvbmUvaXNzdWVzLzI3NikuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5tdWx0aXBsZT10cnVlXSBBbGxvdyBkcmFnICduJyBkcm9wIChvciBzZWxlY3Rpb24gZnJvbSB0aGUgZmlsZSBkaWFsb2cpIG9mIG11bHRpcGxlIGZpbGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5wcmV2ZW50RHJvcE9uRG9jdW1lbnQ9dHJ1ZV0gSWYgZmFsc2UsIGFsbG93IGRyb3BwZWQgaXRlbXMgdG8gdGFrZSBvdmVyIHRoZSBjdXJyZW50IGJyb3dzZXIgd2luZG93XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5ub0NsaWNrPWZhbHNlXSBJZiB0cnVlLCBkaXNhYmxlcyBjbGljayB0byBvcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5ub0tleWJvYXJkPWZhbHNlXSBJZiB0cnVlLCBkaXNhYmxlcyBTUEFDRS9FTlRFUiB0byBvcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nLlxuICogTm90ZSB0aGF0IGl0IGFsc28gc3RvcHMgdHJhY2tpbmcgdGhlIGZvY3VzIHN0YXRlLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMubm9EcmFnPWZhbHNlXSBJZiB0cnVlLCBkaXNhYmxlcyBkcmFnICduJyBkcm9wXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5ub0RyYWdFdmVudHNCdWJibGluZz1mYWxzZV0gSWYgdHJ1ZSwgc3RvcHMgZHJhZyBldmVudCBwcm9wYWdhdGlvbiB0byBwYXJlbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gW3Byb3BzLm1pblNpemU9MF0gTWluaW11bSBmaWxlIHNpemUgKGluIGJ5dGVzKVxuICogQHBhcmFtIHtudW1iZXJ9IFtwcm9wcy5tYXhTaXplPUluZmluaXR5XSBNYXhpbXVtIGZpbGUgc2l6ZSAoaW4gYnl0ZXMpXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcm9wcy5kaXNhYmxlZD1mYWxzZV0gRW5hYmxlL2Rpc2FibGUgdGhlIGRyb3B6b25lXG4gKiBAcGFyYW0ge2dldEZpbGVzRnJvbUV2ZW50fSBbcHJvcHMuZ2V0RmlsZXNGcm9tRXZlbnRdIFVzZSB0aGlzIHRvIHByb3ZpZGUgYSBjdXN0b20gZmlsZSBhZ2dyZWdhdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcHMub25GaWxlRGlhbG9nQ2FuY2VsXSBDYiBmb3Igd2hlbiBjbG9zaW5nIHRoZSBmaWxlIGRpYWxvZyB3aXRoIG5vIHNlbGVjdGlvblxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMudXNlRnNBY2Nlc3NBcGldIFNldCB0byB0cnVlIHRvIHVzZSB0aGUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVfU3lzdGVtX0FjY2Vzc19BUElcbiAqIHRvIG9wZW4gdGhlIGZpbGUgcGlja2VyIGluc3RlYWQgb2YgdXNpbmcgYW4gYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmAgY2xpY2sgZXZlbnQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9Gb2N1cyBTZXQgdG8gdHJ1ZSB0byBhdXRvIGZvY3VzIHRoZSByb290IGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcHMub25GaWxlRGlhbG9nT3Blbl0gQ2IgZm9yIHdoZW4gb3BlbmluZyB0aGUgZmlsZSBkaWFsb2dcbiAqIEBwYXJhbSB7ZHJhZ0NifSBbcHJvcHMub25EcmFnRW50ZXJdIENiIGZvciB3aGVuIHRoZSBgZHJhZ2VudGVyYCBldmVudCBvY2N1cnMuXG4gKiBAcGFyYW0ge2RyYWdDYn0gW3Byb3BzLm9uRHJhZ0xlYXZlXSBDYiBmb3Igd2hlbiB0aGUgYGRyYWdsZWF2ZWAgZXZlbnQgb2NjdXJzXG4gKiBAcGFyYW0ge2RyYWdDYn0gW3Byb3BzLm9uRHJhZ092ZXJdIENiIGZvciB3aGVuIHRoZSBgZHJhZ292ZXJgIGV2ZW50IG9jY3Vyc1xuICogQHBhcmFtIHtkcm9wQ2J9IFtwcm9wcy5vbkRyb3BdIENiIGZvciB3aGVuIHRoZSBgZHJvcGAgZXZlbnQgb2NjdXJzLlxuICogTm90ZSB0aGF0IHRoaXMgY2FsbGJhY2sgaXMgaW52b2tlZCBhZnRlciB0aGUgYGdldEZpbGVzRnJvbUV2ZW50YCBjYWxsYmFjayBpcyBkb25lLlxuICpcbiAqIEZpbGVzIGFyZSBhY2NlcHRlZCBvciByZWplY3RlZCBiYXNlZCBvbiB0aGUgYGFjY2VwdGAsIGBtdWx0aXBsZWAsIGBtaW5TaXplYCBhbmQgYG1heFNpemVgIHByb3BzLlxuICogYGFjY2VwdGAgbXVzdCBiZSBhbiBvYmplY3Qgd2l0aCBrZXlzIGFzIGEgdmFsaWQgW01JTUUgdHlwZV0oaHR0cDovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy9tZWRpYS10eXBlcy54aHRtbCkgYWNjb3JkaW5nIHRvIFtpbnB1dCBlbGVtZW50IHNwZWNpZmljYXRpb25dKGh0dHBzOi8vd3d3LnczLm9yZy93aWtpL0hUTUwvRWxlbWVudHMvaW5wdXQvZmlsZSkgYW5kIHRoZSB2YWx1ZSBhbiBhcnJheSBvZiBmaWxlIGV4dGVuc2lvbnMgKG9wdGlvbmFsKS5cbiAqIElmIGBtdWx0aXBsZWAgaXMgc2V0IHRvIGZhbHNlIGFuZCBhZGRpdGlvbmFsIGZpbGVzIGFyZSBkcm9wcGVkLFxuICogYWxsIGZpbGVzIGJlc2lkZXMgdGhlIGZpcnN0IHdpbGwgYmUgcmVqZWN0ZWQuXG4gKiBBbnkgZmlsZSB3aGljaCBkb2VzIG5vdCBoYXZlIGEgc2l6ZSBpbiB0aGUgW2BtaW5TaXplYCwgYG1heFNpemVgXSByYW5nZSwgd2lsbCBiZSByZWplY3RlZCBhcyB3ZWxsLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgYG9uRHJvcGAgY2FsbGJhY2sgd2lsbCBhbHdheXMgYmUgaW52b2tlZCByZWdhcmRsZXNzIGlmIHRoZSBkcm9wcGVkIGZpbGVzIHdlcmUgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQuXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHJlYWN0IHRvIGEgc3BlY2lmaWMgc2NlbmFyaW8sIHVzZSB0aGUgYG9uRHJvcEFjY2VwdGVkYC9gb25Ecm9wUmVqZWN0ZWRgIHByb3BzLlxuICpcbiAqIGBvbkRyb3BgIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhbiBhcnJheSBvZiBbRmlsZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGUpIG9iamVjdHMgd2hpY2ggeW91IGNhbiB0aGVuIHByb2Nlc3MgYW5kIHNlbmQgdG8gYSBzZXJ2ZXIuXG4gKiBGb3IgZXhhbXBsZSwgd2l0aCBbU3VwZXJBZ2VudF0oaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3N1cGVyYWdlbnQpIGFzIGEgaHR0cC9hamF4IGxpYnJhcnk6XG4gKlxuICogYGBganNcbiAqIGZ1bmN0aW9uIG9uRHJvcChhY2NlcHRlZEZpbGVzKSB7XG4gKiAgIGNvbnN0IHJlcSA9IHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAqICAgICByZXEuYXR0YWNoKGZpbGUubmFtZSwgZmlsZSlcbiAqICAgfSlcbiAqICAgcmVxLmVuZChjYWxsYmFjaylcbiAqIH1cbiAqIGBgYFxuICogQHBhcmFtIHtkcm9wQWNjZXB0ZWRDYn0gW3Byb3BzLm9uRHJvcEFjY2VwdGVkXVxuICogQHBhcmFtIHtkcm9wUmVqZWN0ZWRDYn0gW3Byb3BzLm9uRHJvcFJlamVjdGVkXVxuICogQHBhcmFtIHsoZXJyb3I6IEVycm9yKSA9PiB2b2lkfSBbcHJvcHMub25FcnJvcl1cbiAqXG4gKiBAcmV0dXJucyB7RHJvcHpvbmVTdGF0ZSAmIERyb3B6b25lTWV0aG9kc31cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJvcHpvbmUoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF9kZWZhdWx0UHJvcHMkcHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRQcm9wcyksIHByb3BzKSxcbiAgICAgIGFjY2VwdCA9IF9kZWZhdWx0UHJvcHMkcHJvcHMuYWNjZXB0LFxuICAgICAgZGlzYWJsZWQgPSBfZGVmYXVsdFByb3BzJHByb3BzLmRpc2FibGVkLFxuICAgICAgZ2V0RmlsZXNGcm9tRXZlbnQgPSBfZGVmYXVsdFByb3BzJHByb3BzLmdldEZpbGVzRnJvbUV2ZW50LFxuICAgICAgbWF4U2l6ZSA9IF9kZWZhdWx0UHJvcHMkcHJvcHMubWF4U2l6ZSxcbiAgICAgIG1pblNpemUgPSBfZGVmYXVsdFByb3BzJHByb3BzLm1pblNpemUsXG4gICAgICBtdWx0aXBsZSA9IF9kZWZhdWx0UHJvcHMkcHJvcHMubXVsdGlwbGUsXG4gICAgICBtYXhGaWxlcyA9IF9kZWZhdWx0UHJvcHMkcHJvcHMubWF4RmlsZXMsXG4gICAgICBvbkRyYWdFbnRlciA9IF9kZWZhdWx0UHJvcHMkcHJvcHMub25EcmFnRW50ZXIsXG4gICAgICBvbkRyYWdMZWF2ZSA9IF9kZWZhdWx0UHJvcHMkcHJvcHMub25EcmFnTGVhdmUsXG4gICAgICBvbkRyYWdPdmVyID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5vbkRyYWdPdmVyLFxuICAgICAgb25Ecm9wID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5vbkRyb3AsXG4gICAgICBvbkRyb3BBY2NlcHRlZCA9IF9kZWZhdWx0UHJvcHMkcHJvcHMub25Ecm9wQWNjZXB0ZWQsXG4gICAgICBvbkRyb3BSZWplY3RlZCA9IF9kZWZhdWx0UHJvcHMkcHJvcHMub25Ecm9wUmVqZWN0ZWQsXG4gICAgICBvbkZpbGVEaWFsb2dDYW5jZWwgPSBfZGVmYXVsdFByb3BzJHByb3BzLm9uRmlsZURpYWxvZ0NhbmNlbCxcbiAgICAgIG9uRmlsZURpYWxvZ09wZW4gPSBfZGVmYXVsdFByb3BzJHByb3BzLm9uRmlsZURpYWxvZ09wZW4sXG4gICAgICB1c2VGc0FjY2Vzc0FwaSA9IF9kZWZhdWx0UHJvcHMkcHJvcHMudXNlRnNBY2Nlc3NBcGksXG4gICAgICBhdXRvRm9jdXMgPSBfZGVmYXVsdFByb3BzJHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIHByZXZlbnREcm9wT25Eb2N1bWVudCA9IF9kZWZhdWx0UHJvcHMkcHJvcHMucHJldmVudERyb3BPbkRvY3VtZW50LFxuICAgICAgbm9DbGljayA9IF9kZWZhdWx0UHJvcHMkcHJvcHMubm9DbGljayxcbiAgICAgIG5vS2V5Ym9hcmQgPSBfZGVmYXVsdFByb3BzJHByb3BzLm5vS2V5Ym9hcmQsXG4gICAgICBub0RyYWcgPSBfZGVmYXVsdFByb3BzJHByb3BzLm5vRHJhZyxcbiAgICAgIG5vRHJhZ0V2ZW50c0J1YmJsaW5nID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5ub0RyYWdFdmVudHNCdWJibGluZyxcbiAgICAgIG9uRXJyb3IgPSBfZGVmYXVsdFByb3BzJHByb3BzLm9uRXJyb3IsXG4gICAgICB2YWxpZGF0b3IgPSBfZGVmYXVsdFByb3BzJHByb3BzLnZhbGlkYXRvcjtcblxuICB2YXIgYWNjZXB0QXR0ciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhY2NlcHRQcm9wQXNBY2NlcHRBdHRyKGFjY2VwdCk7XG4gIH0sIFthY2NlcHRdKTtcbiAgdmFyIHBpY2tlclR5cGVzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBpY2tlck9wdGlvbnNGcm9tQWNjZXB0KGFjY2VwdCk7XG4gIH0sIFthY2NlcHRdKTtcbiAgdmFyIG9uRmlsZURpYWxvZ09wZW5DYiA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2Ygb25GaWxlRGlhbG9nT3BlbiA9PT0gXCJmdW5jdGlvblwiID8gb25GaWxlRGlhbG9nT3BlbiA6IG5vb3A7XG4gIH0sIFtvbkZpbGVEaWFsb2dPcGVuXSk7XG4gIHZhciBvbkZpbGVEaWFsb2dDYW5jZWxDYiA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2Ygb25GaWxlRGlhbG9nQ2FuY2VsID09PSBcImZ1bmN0aW9uXCIgPyBvbkZpbGVEaWFsb2dDYW5jZWwgOiBub29wO1xuICB9LCBbb25GaWxlRGlhbG9nQ2FuY2VsXSk7XG4gIC8qKlxuICAgKiBAY29uc3RhbnRcbiAgICogQHR5cGUge1JlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+fVxuICAgKi9cblxuICB2YXIgcm9vdFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKSxcbiAgICAgIF91c2VSZWR1Y2VyMiA9IF9zbGljZWRUb0FycmF5KF91c2VSZWR1Y2VyLCAyKSxcbiAgICAgIHN0YXRlID0gX3VzZVJlZHVjZXIyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlUmVkdWNlcjJbMV07XG5cbiAgdmFyIGlzRm9jdXNlZCA9IHN0YXRlLmlzRm9jdXNlZCxcbiAgICAgIGlzRmlsZURpYWxvZ0FjdGl2ZSA9IHN0YXRlLmlzRmlsZURpYWxvZ0FjdGl2ZTtcbiAgdmFyIGZzQWNjZXNzQXBpV29ya3NSZWYgPSB1c2VSZWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuaXNTZWN1cmVDb250ZXh0ICYmIHVzZUZzQWNjZXNzQXBpICYmIGNhblVzZUZpbGVTeXN0ZW1BY2Nlc3NBUEkoKSk7IC8vIFVwZGF0ZSBmaWxlIGRpYWxvZyBhY3RpdmUgc3RhdGUgd2hlbiB0aGUgd2luZG93IGlzIGZvY3VzZWQgb25cblxuICB2YXIgb25XaW5kb3dGb2N1cyA9IGZ1bmN0aW9uIG9uV2luZG93Rm9jdXMoKSB7XG4gICAgLy8gRXhlY3V0ZSB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBmaWxlIGRpYWxvZyBpcyBvcGVuZWQgaW4gdGhlIGJyb3dzZXJcbiAgICBpZiAoIWZzQWNjZXNzQXBpV29ya3NSZWYuY3VycmVudCAmJiBpc0ZpbGVEaWFsb2dBY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICAgIHZhciBmaWxlcyA9IGlucHV0UmVmLmN1cnJlbnQuZmlsZXM7XG5cbiAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiBcImNsb3NlRGlhbG9nXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb25GaWxlRGlhbG9nQ2FuY2VsQ2IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBvbldpbmRvd0ZvY3VzLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgb25XaW5kb3dGb2N1cywgZmFsc2UpO1xuICAgIH07XG4gIH0sIFtpbnB1dFJlZiwgaXNGaWxlRGlhbG9nQWN0aXZlLCBvbkZpbGVEaWFsb2dDYW5jZWxDYiwgZnNBY2Nlc3NBcGlXb3Jrc1JlZl0pO1xuICB2YXIgZHJhZ1RhcmdldHNSZWYgPSB1c2VSZWYoW10pO1xuXG4gIHZhciBvbkRvY3VtZW50RHJvcCA9IGZ1bmN0aW9uIG9uRG9jdW1lbnREcm9wKGV2ZW50KSB7XG4gICAgaWYgKHJvb3RSZWYuY3VycmVudCAmJiByb290UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgLy8gSWYgd2UgaW50ZXJjZXB0ZWQgYW4gZXZlbnQgZm9yIG91ciBpbnN0YW5jZSwgbGV0IGl0IHByb3BhZ2F0ZSBkb3duIHRvIHRoZSBpbnN0YW5jZSdzIG9uRHJvcCBoYW5kbGVyXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkcmFnVGFyZ2V0c1JlZi5jdXJyZW50ID0gW107XG4gIH07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJldmVudERyb3BPbkRvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25Eb2N1bWVudERyYWdPdmVyLCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBvbkRvY3VtZW50RHJvcCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJldmVudERyb3BPbkRvY3VtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBvbkRvY3VtZW50RHJhZ092ZXIpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBvbkRvY3VtZW50RHJvcCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3Jvb3RSZWYsIHByZXZlbnREcm9wT25Eb2N1bWVudF0pOyAvLyBBdXRvIGZvY3VzIHRoZSByb290IHdoZW4gYXV0b0ZvY3VzIGlzIHRydWVcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghZGlzYWJsZWQgJiYgYXV0b0ZvY3VzICYmIHJvb3RSZWYuY3VycmVudCkge1xuICAgICAgcm9vdFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHt9O1xuICB9LCBbcm9vdFJlZiwgYXV0b0ZvY3VzLCBkaXNhYmxlZF0pO1xuICB2YXIgb25FcnJDYiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgIG9uRXJyb3IoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExldCB0aGUgdXNlciBrbm93IHNvbWV0aGluZydzIGdvbmUgd3JvbmcgaWYgdGhleSBoYXZlbid0IHByb3ZpZGVkIHRoZSBvbkVycm9yIGNiLlxuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH0sIFtvbkVycm9yXSk7XG4gIHZhciBvbkRyYWdFbnRlckNiID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUGVyc2lzdCBoZXJlIGJlY2F1c2Ugd2UgbmVlZCB0aGUgZXZlbnQgbGF0ZXIgYWZ0ZXIgZ2V0RmlsZXNGcm9tRXZlbnQoKSBpcyBkb25lXG5cbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICBkcmFnVGFyZ2V0c1JlZi5jdXJyZW50ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShkcmFnVGFyZ2V0c1JlZi5jdXJyZW50KSwgW2V2ZW50LnRhcmdldF0pO1xuXG4gICAgaWYgKGlzRXZ0V2l0aEZpbGVzKGV2ZW50KSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldEZpbGVzRnJvbUV2ZW50KGV2ZW50KSkudGhlbihmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgaWYgKGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KSAmJiAhbm9EcmFnRXZlbnRzQnViYmxpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlsZUNvdW50ID0gZmlsZXMubGVuZ3RoO1xuICAgICAgICB2YXIgaXNEcmFnQWNjZXB0ID0gZmlsZUNvdW50ID4gMCAmJiBhbGxGaWxlc0FjY2VwdGVkKHtcbiAgICAgICAgICBmaWxlczogZmlsZXMsXG4gICAgICAgICAgYWNjZXB0OiBhY2NlcHRBdHRyLFxuICAgICAgICAgIG1pblNpemU6IG1pblNpemUsXG4gICAgICAgICAgbWF4U2l6ZTogbWF4U2l6ZSxcbiAgICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGUsXG4gICAgICAgICAgbWF4RmlsZXM6IG1heEZpbGVzLFxuICAgICAgICAgIHZhbGlkYXRvcjogdmFsaWRhdG9yXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaXNEcmFnUmVqZWN0ID0gZmlsZUNvdW50ID4gMCAmJiAhaXNEcmFnQWNjZXB0O1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgaXNEcmFnQWNjZXB0OiBpc0RyYWdBY2NlcHQsXG4gICAgICAgICAgaXNEcmFnUmVqZWN0OiBpc0RyYWdSZWplY3QsXG4gICAgICAgICAgaXNEcmFnQWN0aXZlOiB0cnVlLFxuICAgICAgICAgIHR5cGU6IFwic2V0RHJhZ2dlZEZpbGVzXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9uRHJhZ0VudGVyKSB7XG4gICAgICAgICAgb25EcmFnRW50ZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gb25FcnJDYihlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2dldEZpbGVzRnJvbUV2ZW50LCBvbkRyYWdFbnRlciwgb25FcnJDYiwgbm9EcmFnRXZlbnRzQnViYmxpbmcsIGFjY2VwdEF0dHIsIG1pblNpemUsIG1heFNpemUsIG11bHRpcGxlLCBtYXhGaWxlcywgdmFsaWRhdG9yXSk7XG4gIHZhciBvbkRyYWdPdmVyQ2IgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIHZhciBoYXNGaWxlcyA9IGlzRXZ0V2l0aEZpbGVzKGV2ZW50KTtcblxuICAgIGlmIChoYXNGaWxlcyAmJiBldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJjb3B5XCI7XG4gICAgICB9IGNhdGNoIChfdW51c2VkKSB7fVxuICAgICAgLyogZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eSAqL1xuXG4gICAgfVxuXG4gICAgaWYgKGhhc0ZpbGVzICYmIG9uRHJhZ092ZXIpIHtcbiAgICAgIG9uRHJhZ092ZXIoZXZlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSwgW29uRHJhZ092ZXIsIG5vRHJhZ0V2ZW50c0J1YmJsaW5nXSk7XG4gIHZhciBvbkRyYWdMZWF2ZUNiID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KTsgLy8gT25seSBkZWFjdGl2YXRlIG9uY2UgdGhlIGRyb3B6b25lIGFuZCBhbGwgY2hpbGRyZW4gaGF2ZSBiZWVuIGxlZnRcblxuICAgIHZhciB0YXJnZXRzID0gZHJhZ1RhcmdldHNSZWYuY3VycmVudC5maWx0ZXIoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgcmV0dXJuIHJvb3RSZWYuY3VycmVudCAmJiByb290UmVmLmN1cnJlbnQuY29udGFpbnModGFyZ2V0KTtcbiAgICB9KTsgLy8gTWFrZSBzdXJlIHRvIHJlbW92ZSBhIHRhcmdldCBwcmVzZW50IG11bHRpcGxlIHRpbWVzIG9ubHkgb25jZVxuICAgIC8vIChGaXJlZm94IG1heSBmaXJlIGRyYWdlbnRlci9kcmFnbGVhdmUgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgZWxlbWVudClcblxuICAgIHZhciB0YXJnZXRJZHggPSB0YXJnZXRzLmluZGV4T2YoZXZlbnQudGFyZ2V0KTtcblxuICAgIGlmICh0YXJnZXRJZHggIT09IC0xKSB7XG4gICAgICB0YXJnZXRzLnNwbGljZSh0YXJnZXRJZHgsIDEpO1xuICAgIH1cblxuICAgIGRyYWdUYXJnZXRzUmVmLmN1cnJlbnQgPSB0YXJnZXRzO1xuXG4gICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwic2V0RHJhZ2dlZEZpbGVzXCIsXG4gICAgICBpc0RyYWdBY3RpdmU6IGZhbHNlLFxuICAgICAgaXNEcmFnQWNjZXB0OiBmYWxzZSxcbiAgICAgIGlzRHJhZ1JlamVjdDogZmFsc2VcbiAgICB9KTtcblxuICAgIGlmIChpc0V2dFdpdGhGaWxlcyhldmVudCkgJiYgb25EcmFnTGVhdmUpIHtcbiAgICAgIG9uRHJhZ0xlYXZlKGV2ZW50KTtcbiAgICB9XG4gIH0sIFtyb290UmVmLCBvbkRyYWdMZWF2ZSwgbm9EcmFnRXZlbnRzQnViYmxpbmddKTtcbiAgdmFyIHNldEZpbGVzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGZpbGVzLCBldmVudCkge1xuICAgIHZhciBhY2NlcHRlZEZpbGVzID0gW107XG4gICAgdmFyIGZpbGVSZWplY3Rpb25zID0gW107XG4gICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgdmFyIF9maWxlQWNjZXB0ZWQgPSBmaWxlQWNjZXB0ZWQoZmlsZSwgYWNjZXB0QXR0ciksXG4gICAgICAgICAgX2ZpbGVBY2NlcHRlZDIgPSBfc2xpY2VkVG9BcnJheShfZmlsZUFjY2VwdGVkLCAyKSxcbiAgICAgICAgICBhY2NlcHRlZCA9IF9maWxlQWNjZXB0ZWQyWzBdLFxuICAgICAgICAgIGFjY2VwdEVycm9yID0gX2ZpbGVBY2NlcHRlZDJbMV07XG5cbiAgICAgIHZhciBfZmlsZU1hdGNoU2l6ZSA9IGZpbGVNYXRjaFNpemUoZmlsZSwgbWluU2l6ZSwgbWF4U2l6ZSksXG4gICAgICAgICAgX2ZpbGVNYXRjaFNpemUyID0gX3NsaWNlZFRvQXJyYXkoX2ZpbGVNYXRjaFNpemUsIDIpLFxuICAgICAgICAgIHNpemVNYXRjaCA9IF9maWxlTWF0Y2hTaXplMlswXSxcbiAgICAgICAgICBzaXplRXJyb3IgPSBfZmlsZU1hdGNoU2l6ZTJbMV07XG5cbiAgICAgIHZhciBjdXN0b21FcnJvcnMgPSB2YWxpZGF0b3IgPyB2YWxpZGF0b3IoZmlsZSkgOiBudWxsO1xuXG4gICAgICBpZiAoYWNjZXB0ZWQgJiYgc2l6ZU1hdGNoICYmICFjdXN0b21FcnJvcnMpIHtcbiAgICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVycm9ycyA9IFthY2NlcHRFcnJvciwgc2l6ZUVycm9yXTtcblxuICAgICAgICBpZiAoY3VzdG9tRXJyb3JzKSB7XG4gICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChjdXN0b21FcnJvcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsZVJlamVjdGlvbnMucHVzaCh7XG4gICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICBlcnJvcnM6IGVycm9ycy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFtdWx0aXBsZSAmJiBhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IDEgfHwgbXVsdGlwbGUgJiYgbWF4RmlsZXMgPj0gMSAmJiBhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IG1heEZpbGVzKSB7XG4gICAgICAvLyBSZWplY3QgZXZlcnl0aGluZyBhbmQgZW1wdHkgYWNjZXB0ZWQgZmlsZXNcbiAgICAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICBmaWxlUmVqZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgIGVycm9yczogW1RPT19NQU5ZX0ZJTEVTX1JFSkVDVElPTl1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGFjY2VwdGVkRmlsZXMuc3BsaWNlKDApO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIGFjY2VwdGVkRmlsZXM6IGFjY2VwdGVkRmlsZXMsXG4gICAgICBmaWxlUmVqZWN0aW9uczogZmlsZVJlamVjdGlvbnMsXG4gICAgICBpc0RyYWdSZWplY3Q6IGZpbGVSZWplY3Rpb25zLmxlbmd0aCA+IDAsXG4gICAgICB0eXBlOiBcInNldEZpbGVzXCJcbiAgICB9KTtcblxuICAgIGlmIChvbkRyb3ApIHtcbiAgICAgIG9uRHJvcChhY2NlcHRlZEZpbGVzLCBmaWxlUmVqZWN0aW9ucywgZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChmaWxlUmVqZWN0aW9ucy5sZW5ndGggPiAwICYmIG9uRHJvcFJlamVjdGVkKSB7XG4gICAgICBvbkRyb3BSZWplY3RlZChmaWxlUmVqZWN0aW9ucywgZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChhY2NlcHRlZEZpbGVzLmxlbmd0aCA+IDAgJiYgb25Ecm9wQWNjZXB0ZWQpIHtcbiAgICAgIG9uRHJvcEFjY2VwdGVkKGFjY2VwdGVkRmlsZXMsIGV2ZW50KTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgbXVsdGlwbGUsIGFjY2VwdEF0dHIsIG1pblNpemUsIG1heFNpemUsIG1heEZpbGVzLCBvbkRyb3AsIG9uRHJvcEFjY2VwdGVkLCBvbkRyb3BSZWplY3RlZCwgdmFsaWRhdG9yXSk7XG4gIHZhciBvbkRyb3BDYiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFBlcnNpc3QgaGVyZSBiZWNhdXNlIHdlIG5lZWQgdGhlIGV2ZW50IGxhdGVyIGFmdGVyIGdldEZpbGVzRnJvbUV2ZW50KCkgaXMgZG9uZVxuXG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCk7XG4gICAgZHJhZ1RhcmdldHNSZWYuY3VycmVudCA9IFtdO1xuXG4gICAgaWYgKGlzRXZ0V2l0aEZpbGVzKGV2ZW50KSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGdldEZpbGVzRnJvbUV2ZW50KGV2ZW50KSkudGhlbihmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgaWYgKGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KSAmJiAhbm9EcmFnRXZlbnRzQnViYmxpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRGaWxlcyhmaWxlcywgZXZlbnQpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIG9uRXJyQ2IoZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcInJlc2V0XCJcbiAgICB9KTtcbiAgfSwgW2dldEZpbGVzRnJvbUV2ZW50LCBzZXRGaWxlcywgb25FcnJDYiwgbm9EcmFnRXZlbnRzQnViYmxpbmddKTsgLy8gRm4gZm9yIG9wZW5pbmcgdGhlIGZpbGUgZGlhbG9nIHByb2dyYW1tYXRpY2FsbHlcblxuICB2YXIgb3BlbkZpbGVEaWFsb2cgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgLy8gTm8gcG9pbnQgdG8gdXNlIEZTIGFjY2VzcyBBUElzIGlmIGNvbnRleHQgaXMgbm90IHNlY3VyZVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyZV9Db250ZXh0cyNmZWF0dXJlX2RldGVjdGlvblxuICAgIGlmIChmc0FjY2Vzc0FwaVdvcmtzUmVmLmN1cnJlbnQpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJvcGVuRGlhbG9nXCJcbiAgICAgIH0pO1xuICAgICAgb25GaWxlRGlhbG9nT3BlbkNiKCk7IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cvc2hvd09wZW5GaWxlUGlja2VyXG5cbiAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGUsXG4gICAgICAgIHR5cGVzOiBwaWNrZXJUeXBlc1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5zaG93T3BlbkZpbGVQaWNrZXIob3B0cykudGhlbihmdW5jdGlvbiAoaGFuZGxlcykge1xuICAgICAgICByZXR1cm4gZ2V0RmlsZXNGcm9tRXZlbnQoaGFuZGxlcyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICBzZXRGaWxlcyhmaWxlcywgbnVsbCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcImNsb3NlRGlhbG9nXCJcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBBYm9ydEVycm9yIG1lYW5zIHRoZSB1c2VyIGNhbmNlbGVkXG4gICAgICAgIGlmIChpc0Fib3J0KGUpKSB7XG4gICAgICAgICAgb25GaWxlRGlhbG9nQ2FuY2VsQ2IoZSk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJjbG9zZURpYWxvZ1wiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNTZWN1cml0eUVycm9yKGUpKSB7XG4gICAgICAgICAgZnNBY2Nlc3NBcGlXb3Jrc1JlZi5jdXJyZW50ID0gZmFsc2U7IC8vIENPUlMsIHNvIGNhbm5vdCB1c2UgdGhpcyBBUElcbiAgICAgICAgICAvLyBUcnkgdXNpbmcgdGhlIGlucHV0XG5cbiAgICAgICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9uRXJyQ2IobmV3IEVycm9yKFwiQ2Fubm90IG9wZW4gdGhlIGZpbGUgcGlja2VyIGJlY2F1c2UgdGhlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlX1N5c3RlbV9BY2Nlc3NfQVBJIGlzIG5vdCBzdXBwb3J0ZWQgYW5kIG5vIDxpbnB1dD4gd2FzIHByb3ZpZGVkLlwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uRXJyQ2IoZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwib3BlbkRpYWxvZ1wiXG4gICAgICB9KTtcbiAgICAgIG9uRmlsZURpYWxvZ09wZW5DYigpO1xuICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2gsIG9uRmlsZURpYWxvZ09wZW5DYiwgb25GaWxlRGlhbG9nQ2FuY2VsQ2IsIHVzZUZzQWNjZXNzQXBpLCBzZXRGaWxlcywgb25FcnJDYiwgcGlja2VyVHlwZXMsIG11bHRpcGxlXSk7IC8vIENiIHRvIG9wZW4gdGhlIGZpbGUgZGlhbG9nIHdoZW4gU1BBQ0UvRU5URVIgb2NjdXJzIG9uIHRoZSBkcm9wem9uZVxuXG4gIHZhciBvbktleURvd25DYiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIElnbm9yZSBrZXlib2FyZCBldmVudHMgYnViYmxpbmcgdXAgdGhlIERPTSB0cmVlXG4gICAgaWYgKCFyb290UmVmLmN1cnJlbnQgfHwgIXJvb3RSZWYuY3VycmVudC5pc0VxdWFsTm9kZShldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCIgXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvcGVuRmlsZURpYWxvZygpO1xuICAgIH1cbiAgfSwgW3Jvb3RSZWYsIG9wZW5GaWxlRGlhbG9nXSk7IC8vIFVwZGF0ZSBmb2N1cyBzdGF0ZSBmb3IgdGhlIGRyb3B6b25lXG5cbiAgdmFyIG9uRm9jdXNDYiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcImZvY3VzXCJcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgb25CbHVyQ2IgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJibHVyXCJcbiAgICB9KTtcbiAgfSwgW10pOyAvLyBDYiB0byBvcGVuIHRoZSBmaWxlIGRpYWxvZyB3aGVuIGNsaWNrIG9jY3VycyBvbiB0aGUgZHJvcHpvbmVcblxuICB2YXIgb25DbGlja0NiID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChub0NsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJbiBJRTExL0VkZ2UgdGhlIGZpbGUtYnJvd3NlciBkaWFsb2cgaXMgYmxvY2tpbmcsIHRoZXJlZm9yZSwgdXNlIHNldFRpbWVvdXQoKVxuICAgIC8vIHRvIGVuc3VyZSBSZWFjdCBjYW4gaGFuZGxlIHN0YXRlIGNoYW5nZXNcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1kcm9wem9uZS9yZWFjdC1kcm9wem9uZS9pc3N1ZXMvNDUwXG5cblxuICAgIGlmIChpc0llT3JFZGdlKCkpIHtcbiAgICAgIHNldFRpbWVvdXQob3BlbkZpbGVEaWFsb2csIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuRmlsZURpYWxvZygpO1xuICAgIH1cbiAgfSwgW25vQ2xpY2ssIG9wZW5GaWxlRGlhbG9nXSk7XG5cbiAgdmFyIGNvbXBvc2VIYW5kbGVyID0gZnVuY3Rpb24gY29tcG9zZUhhbmRsZXIoZm4pIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgPyBudWxsIDogZm47XG4gIH07XG5cbiAgdmFyIGNvbXBvc2VLZXlib2FyZEhhbmRsZXIgPSBmdW5jdGlvbiBjb21wb3NlS2V5Ym9hcmRIYW5kbGVyKGZuKSB7XG4gICAgcmV0dXJuIG5vS2V5Ym9hcmQgPyBudWxsIDogY29tcG9zZUhhbmRsZXIoZm4pO1xuICB9O1xuXG4gIHZhciBjb21wb3NlRHJhZ0hhbmRsZXIgPSBmdW5jdGlvbiBjb21wb3NlRHJhZ0hhbmRsZXIoZm4pIHtcbiAgICByZXR1cm4gbm9EcmFnID8gbnVsbCA6IGNvbXBvc2VIYW5kbGVyKGZuKTtcbiAgfTtcblxuICB2YXIgc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgaWYgKG5vRHJhZ0V2ZW50c0J1YmJsaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldFJvb3RQcm9wcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgIF9yZWYyJHJlZktleSA9IF9yZWYyLnJlZktleSxcbiAgICAgICAgICByZWZLZXkgPSBfcmVmMiRyZWZLZXkgPT09IHZvaWQgMCA/IFwicmVmXCIgOiBfcmVmMiRyZWZLZXksXG4gICAgICAgICAgcm9sZSA9IF9yZWYyLnJvbGUsXG4gICAgICAgICAgb25LZXlEb3duID0gX3JlZjIub25LZXlEb3duLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcmVmMi5vbkZvY3VzLFxuICAgICAgICAgIG9uQmx1ciA9IF9yZWYyLm9uQmx1cixcbiAgICAgICAgICBvbkNsaWNrID0gX3JlZjIub25DbGljayxcbiAgICAgICAgICBvbkRyYWdFbnRlciA9IF9yZWYyLm9uRHJhZ0VudGVyLFxuICAgICAgICAgIG9uRHJhZ092ZXIgPSBfcmVmMi5vbkRyYWdPdmVyLFxuICAgICAgICAgIG9uRHJhZ0xlYXZlID0gX3JlZjIub25EcmFnTGVhdmUsXG4gICAgICAgICAgb25Ecm9wID0gX3JlZjIub25Ecm9wLFxuICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIF9leGNsdWRlZDMpO1xuXG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9kZWZpbmVQcm9wZXJ0eSh7XG4gICAgICAgIG9uS2V5RG93bjogY29tcG9zZUtleWJvYXJkSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbktleURvd24sIG9uS2V5RG93bkNiKSksXG4gICAgICAgIG9uRm9jdXM6IGNvbXBvc2VLZXlib2FyZEhhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25Gb2N1cywgb25Gb2N1c0NiKSksXG4gICAgICAgIG9uQmx1cjogY29tcG9zZUtleWJvYXJkSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkJsdXIsIG9uQmx1ckNiKSksXG4gICAgICAgIG9uQ2xpY2s6IGNvbXBvc2VIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIG9uQ2xpY2tDYikpLFxuICAgICAgICBvbkRyYWdFbnRlcjogY29tcG9zZURyYWdIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRHJhZ0VudGVyLCBvbkRyYWdFbnRlckNiKSksXG4gICAgICAgIG9uRHJhZ092ZXI6IGNvbXBvc2VEcmFnSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkRyYWdPdmVyLCBvbkRyYWdPdmVyQ2IpKSxcbiAgICAgICAgb25EcmFnTGVhdmU6IGNvbXBvc2VEcmFnSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkRyYWdMZWF2ZSwgb25EcmFnTGVhdmVDYikpLFxuICAgICAgICBvbkRyb3A6IGNvbXBvc2VEcmFnSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkRyb3AsIG9uRHJvcENiKSksXG4gICAgICAgIHJvbGU6IHR5cGVvZiByb2xlID09PSBcInN0cmluZ1wiICYmIHJvbGUgIT09IFwiXCIgPyByb2xlIDogXCJwcmVzZW50YXRpb25cIlxuICAgICAgfSwgcmVmS2V5LCByb290UmVmKSwgIWRpc2FibGVkICYmICFub0tleWJvYXJkID8ge1xuICAgICAgICB0YWJJbmRleDogMFxuICAgICAgfSA6IHt9KSwgcmVzdCk7XG4gICAgfTtcbiAgfSwgW3Jvb3RSZWYsIG9uS2V5RG93bkNiLCBvbkZvY3VzQ2IsIG9uQmx1ckNiLCBvbkNsaWNrQ2IsIG9uRHJhZ0VudGVyQ2IsIG9uRHJhZ092ZXJDYiwgb25EcmFnTGVhdmVDYiwgb25Ecm9wQ2IsIG5vS2V5Ym9hcmQsIG5vRHJhZywgZGlzYWJsZWRdKTtcbiAgdmFyIG9uSW5wdXRFbGVtZW50Q2xpY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSwgW10pO1xuICB2YXIgZ2V0SW5wdXRQcm9wcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICAgIF9yZWYzJHJlZktleSA9IF9yZWYzLnJlZktleSxcbiAgICAgICAgICByZWZLZXkgPSBfcmVmMyRyZWZLZXkgPT09IHZvaWQgMCA/IFwicmVmXCIgOiBfcmVmMyRyZWZLZXksXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcmVmMy5vbkNoYW5nZSxcbiAgICAgICAgICBvbkNsaWNrID0gX3JlZjMub25DbGljayxcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYzLCBfZXhjbHVkZWQ0KTtcblxuICAgICAgdmFyIGlucHV0UHJvcHMgPSBfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgICBhY2NlcHQ6IGFjY2VwdEF0dHIsXG4gICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAgIGNsaXA6IFwicmVjdCgwLCAwLCAwLCAwKVwiLFxuICAgICAgICAgIGNsaXBQYXRoOiBcImluc2V0KDUwJSlcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMXB4XCIsXG4gICAgICAgICAgbWFyZ2luOiBcIjAgLTFweCAtMXB4IDBcIixcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIlxuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZTogY29tcG9zZUhhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25DaGFuZ2UsIG9uRHJvcENiKSksXG4gICAgICAgIG9uQ2xpY2s6IGNvbXBvc2VIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIG9uSW5wdXRFbGVtZW50Q2xpY2spKSxcbiAgICAgICAgdGFiSW5kZXg6IC0xXG4gICAgICB9LCByZWZLZXksIGlucHV0UmVmKTtcblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaW5wdXRQcm9wcyksIHJlc3QpO1xuICAgIH07XG4gIH0sIFtpbnB1dFJlZiwgYWNjZXB0LCBtdWx0aXBsZSwgb25Ecm9wQ2IsIGRpc2FibGVkXSk7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlKSwge30sIHtcbiAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCAmJiAhZGlzYWJsZWQsXG4gICAgZ2V0Um9vdFByb3BzOiBnZXRSb290UHJvcHMsXG4gICAgZ2V0SW5wdXRQcm9wczogZ2V0SW5wdXRQcm9wcyxcbiAgICByb290UmVmOiByb290UmVmLFxuICAgIGlucHV0UmVmOiBpbnB1dFJlZixcbiAgICBvcGVuOiBjb21wb3NlSGFuZGxlcihvcGVuRmlsZURpYWxvZylcbiAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7RHJvcHpvbmVTdGF0ZX0gc3RhdGVcbiAqIEBwYXJhbSB7e3R5cGU6IHN0cmluZ30gJiBEcm9wem9uZVN0YXRlfSBhY3Rpb25cbiAqIEByZXR1cm5zIHtEcm9wem9uZVN0YXRlfVxuICovXG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcImZvY3VzXCI6XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSksIHt9LCB7XG4gICAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICBjYXNlIFwiYmx1clwiOlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgIGNhc2UgXCJvcGVuRGlhbG9nXCI6XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpbml0aWFsU3RhdGUpLCB7fSwge1xuICAgICAgICBpc0ZpbGVEaWFsb2dBY3RpdmU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBcImNsb3NlRGlhbG9nXCI6XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSksIHt9LCB7XG4gICAgICAgIGlzRmlsZURpYWxvZ0FjdGl2ZTogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBcInNldERyYWdnZWRGaWxlc1wiOlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgICAgICBpc0RyYWdBY3RpdmU6IGFjdGlvbi5pc0RyYWdBY3RpdmUsXG4gICAgICAgIGlzRHJhZ0FjY2VwdDogYWN0aW9uLmlzRHJhZ0FjY2VwdCxcbiAgICAgICAgaXNEcmFnUmVqZWN0OiBhY3Rpb24uaXNEcmFnUmVqZWN0XG4gICAgICB9KTtcblxuICAgIGNhc2UgXCJzZXRGaWxlc1wiOlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgICAgICBhY2NlcHRlZEZpbGVzOiBhY3Rpb24uYWNjZXB0ZWRGaWxlcyxcbiAgICAgICAgZmlsZVJlamVjdGlvbnM6IGFjdGlvbi5maWxlUmVqZWN0aW9ucyxcbiAgICAgICAgaXNEcmFnUmVqZWN0OiBhY3Rpb24uaXNEcmFnUmVqZWN0XG4gICAgICB9KTtcblxuICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIGluaXRpYWxTdGF0ZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgeyBFcnJvckNvZGUgfSBmcm9tIFwiLi91dGlscy9pbmRleC5qc1wiOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG5jb25zdCB7dG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcbmNvbnN0IHtnZXRQcm90b3R5cGVPZn0gPSBPYmplY3Q7XG5jb25zdCB7aXRlcmF0b3IsIHRvU3RyaW5nVGFnfSA9IFN5bWJvbDtcblxuY29uc3Qga2luZE9mID0gKGNhY2hlID0+IHRoaW5nID0+IHtcbiAgICBjb25zdCBzdHIgPSB0b1N0cmluZy5jYWxsKHRoaW5nKTtcbiAgICByZXR1cm4gY2FjaGVbc3RyXSB8fCAoY2FjaGVbc3RyXSA9IHN0ci5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKSk7XG59KShPYmplY3QuY3JlYXRlKG51bGwpKTtcblxuY29uc3Qga2luZE9mVGVzdCA9ICh0eXBlKSA9PiB7XG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiAodGhpbmcpID0+IGtpbmRPZih0aGluZykgPT09IHR5cGVcbn1cblxuY29uc3QgdHlwZU9mVGVzdCA9IHR5cGUgPT4gdGhpbmcgPT4gdHlwZW9mIHRoaW5nID09PSB0eXBlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3Qge2lzQXJyYXl9ID0gQXJyYXk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVbmRlZmluZWQgPSB0eXBlT2ZUZXN0KCd1bmRlZmluZWQnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiBpc0Z1bmN0aW9uKHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcikgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNBcnJheUJ1ZmZlciA9IGtpbmRPZlRlc3QoJ0FycmF5QnVmZmVyJyk7XG5cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICBsZXQgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmIChpc0FycmF5QnVmZmVyKHZhbC5idWZmZXIpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyaW5nID0gdHlwZU9mVGVzdCgnc3RyaW5nJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGdW5jdGlvbiA9IHR5cGVPZlRlc3QoJ2Z1bmN0aW9uJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNOdW1iZXIgPSB0eXBlT2ZUZXN0KCdudW1iZXInKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNPYmplY3QgPSAodGhpbmcpID0+IHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCb29sZWFuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCb29sZWFuLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCb29sZWFuID0gdGhpbmcgPT4gdGhpbmcgPT09IHRydWUgfHwgdGhpbmcgPT09IGZhbHNlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUGxhaW5PYmplY3QgPSAodmFsKSA9PiB7XG4gIGlmIChraW5kT2YodmFsKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBwcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gKHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkgPT09IG51bGwpICYmICEodG9TdHJpbmdUYWcgaW4gdmFsKSAmJiAhKGl0ZXJhdG9yIGluIHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0RhdGUgPSBraW5kT2ZUZXN0KCdEYXRlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGUgPSBraW5kT2ZUZXN0KCdGaWxlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jsb2IgPSBraW5kT2ZUZXN0KCdCbG9iJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlTGlzdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlTGlzdCA9IGtpbmRPZlRlc3QoJ0ZpbGVMaXN0Jyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJlYW0gPSAodmFsKSA9PiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Zvcm1EYXRhID0gKHRoaW5nKSA9PiB7XG4gIGxldCBraW5kO1xuICByZXR1cm4gdGhpbmcgJiYgKFxuICAgICh0eXBlb2YgRm9ybURhdGEgPT09ICdmdW5jdGlvbicgJiYgdGhpbmcgaW5zdGFuY2VvZiBGb3JtRGF0YSkgfHwgKFxuICAgICAgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIChcbiAgICAgICAgKGtpbmQgPSBraW5kT2YodGhpbmcpKSA9PT0gJ2Zvcm1kYXRhJyB8fFxuICAgICAgICAvLyBkZXRlY3QgZm9ybS1kYXRhIGluc3RhbmNlXG4gICAgICAgIChraW5kID09PSAnb2JqZWN0JyAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRvU3RyaW5nKSAmJiB0aGluZy50b1N0cmluZygpID09PSAnW29iamVjdCBGb3JtRGF0YV0nKVxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVUkxTZWFyY2hQYXJhbXMgPSBraW5kT2ZUZXN0KCdVUkxTZWFyY2hQYXJhbXMnKTtcblxuY29uc3QgW2lzUmVhZGFibGVTdHJlYW0sIGlzUmVxdWVzdCwgaXNSZXNwb25zZSwgaXNIZWFkZXJzXSA9IFsnUmVhZGFibGVTdHJlYW0nLCAnUmVxdWVzdCcsICdSZXNwb25zZScsICdIZWFkZXJzJ10ubWFwKGtpbmRPZlRlc3QpO1xuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5jb25zdCB0cmltID0gKHN0cikgPT4gc3RyLnRyaW0gP1xuICBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFthbGxPd25LZXlzID0gZmFsc2VdXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4sIHthbGxPd25LZXlzID0gZmFsc2V9ID0ge30pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaTtcbiAgbGV0IGw7XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGNvbnN0IGtleXMgPSBhbGxPd25LZXlzID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKSA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGtleTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmosIGtleSkge1xuICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIGxldCBfa2V5O1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIF9rZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgPT09IF9rZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIF9rZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBfZ2xvYmFsID0gKCgpID0+IHtcbiAgLyplc2xpbnQgbm8tdW5kZWY6MCovXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIHJldHVybiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpXG59KSgpO1xuXG5jb25zdCBpc0NvbnRleHREZWZpbmVkID0gKGNvbnRleHQpID0+ICFpc1VuZGVmaW5lZChjb250ZXh0KSAmJiBjb250ZXh0ICE9PSBfZ2xvYmFsO1xuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIGNvbnN0IHtjYXNlbGVzc30gPSBpc0NvbnRleHREZWZpbmVkKHRoaXMpICYmIHRoaXMgfHwge307XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCBhc3NpZ25WYWx1ZSA9ICh2YWwsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEtleSA9IGNhc2VsZXNzICYmIGZpbmRLZXkocmVzdWx0LCBrZXkpIHx8IGtleTtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRbdGFyZ2V0S2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHJlc3VsdFt0YXJnZXRLZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBhcmd1bWVudHNbaV0gJiYgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5c11cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuY29uc3QgZXh0ZW5kID0gKGEsIGIsIHRoaXNBcmcsIHthbGxPd25LZXlzfT0ge30pID0+IHtcbiAgZm9yRWFjaChiLCAodmFsLCBrZXkpID0+IHtcbiAgICBpZiAodGhpc0FyZyAmJiBpc0Z1bmN0aW9uKHZhbCkpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSwge2FsbE93bktleXN9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjb250ZW50IHZhbHVlIHdpdGhvdXQgQk9NXG4gKi9cbmNvbnN0IHN0cmlwQk9NID0gKGNvbnRlbnQpID0+IHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDb25zdHJ1Y3RvclxuICogQHBhcmFtIHtvYmplY3R9IFtwcm9wc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbZGVzY3JpcHRvcnNdXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmNvbnN0IGluaGVyaXRzID0gKGNvbnN0cnVjdG9yLCBzdXBlckNvbnN0cnVjdG9yLCBwcm9wcywgZGVzY3JpcHRvcnMpID0+IHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZSwgZGVzY3JpcHRvcnMpO1xuICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLCAnc3VwZXInLCB7XG4gICAgdmFsdWU6IHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlXG4gIH0pO1xuICBwcm9wcyAmJiBPYmplY3QuYXNzaWduKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJlc29sdmUgb2JqZWN0IHdpdGggZGVlcCBwcm90b3R5cGUgY2hhaW4gdG8gYSBmbGF0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZU9iaiBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gW2Rlc3RPYmpdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufEJvb2xlYW59IFtmaWx0ZXJdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcEZpbHRlcl1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCB0b0ZsYXRPYmplY3QgPSAoc291cmNlT2JqLCBkZXN0T2JqLCBmaWx0ZXIsIHByb3BGaWx0ZXIpID0+IHtcbiAgbGV0IHByb3BzO1xuICBsZXQgaTtcbiAgbGV0IHByb3A7XG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xuXG4gIGRlc3RPYmogPSBkZXN0T2JqIHx8IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgaWYgKHNvdXJjZU9iaiA9PSBudWxsKSByZXR1cm4gZGVzdE9iajtcblxuICBkbyB7XG4gICAgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VPYmopO1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGlmICgoIXByb3BGaWx0ZXIgfHwgcHJvcEZpbHRlcihwcm9wLCBzb3VyY2VPYmosIGRlc3RPYmopKSAmJiAhbWVyZ2VkW3Byb3BdKSB7XG4gICAgICAgIGRlc3RPYmpbcHJvcF0gPSBzb3VyY2VPYmpbcHJvcF07XG4gICAgICAgIG1lcmdlZFtwcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZU9iaiA9IGZpbHRlciAhPT0gZmFsc2UgJiYgZ2V0UHJvdG90eXBlT2Yoc291cmNlT2JqKTtcbiAgfSB3aGlsZSAoc291cmNlT2JqICYmICghZmlsdGVyIHx8IGZpbHRlcihzb3VyY2VPYmosIGRlc3RPYmopKSAmJiBzb3VyY2VPYmogIT09IE9iamVjdC5wcm90b3R5cGUpO1xuXG4gIHJldHVybiBkZXN0T2JqO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIHN0cmluZyBlbmRzIHdpdGggdGhlIGNoYXJhY3RlcnMgb2YgYSBzcGVjaWZpZWQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaFN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbj0gMF1cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgZW5kc1dpdGggPSAoc3RyLCBzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSA9PiB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCBwb3NpdGlvbiA+IHN0ci5sZW5ndGgpIHtcbiAgICBwb3NpdGlvbiA9IHN0ci5sZW5ndGg7XG4gIH1cbiAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgY29uc3QgbGFzdEluZGV4ID0gc3RyLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbik7XG4gIHJldHVybiBsYXN0SW5kZXggIT09IC0xICYmIGxhc3RJbmRleCA9PT0gcG9zaXRpb247XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIG5ldyBhcnJheSBmcm9tIGFycmF5IGxpa2Ugb2JqZWN0IG9yIG51bGwgaWYgZmFpbGVkXG4gKlxuICogQHBhcmFtIHsqfSBbdGhpbmddXG4gKlxuICogQHJldHVybnMgez9BcnJheX1cbiAqL1xuY29uc3QgdG9BcnJheSA9ICh0aGluZykgPT4ge1xuICBpZiAoIXRoaW5nKSByZXR1cm4gbnVsbDtcbiAgaWYgKGlzQXJyYXkodGhpbmcpKSByZXR1cm4gdGhpbmc7XG4gIGxldCBpID0gdGhpbmcubGVuZ3RoO1xuICBpZiAoIWlzTnVtYmVyKGkpKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXJyID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tID4gMCkge1xuICAgIGFycltpXSA9IHRoaW5nW2ldO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbi8qKlxuICogQ2hlY2tpbmcgaWYgdGhlIFVpbnQ4QXJyYXkgZXhpc3RzIGFuZCBpZiBpdCBkb2VzLCBpdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlXG4gKiB0aGluZyBwYXNzZWQgaW4gaXMgYW4gaW5zdGFuY2Ugb2YgVWludDhBcnJheVxuICpcbiAqIEBwYXJhbSB7VHlwZWRBcnJheX1cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5jb25zdCBpc1R5cGVkQXJyYXkgPSAoVHlwZWRBcnJheSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiB0aGluZyA9PiB7XG4gICAgcmV0dXJuIFR5cGVkQXJyYXkgJiYgdGhpbmcgaW5zdGFuY2VvZiBUeXBlZEFycmF5O1xuICB9O1xufSkodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIGdldFByb3RvdHlwZU9mKFVpbnQ4QXJyYXkpKTtcblxuLyoqXG4gKiBGb3IgZWFjaCBlbnRyeSBpbiB0aGUgb2JqZWN0LCBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBrZXkgYW5kIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGVudHJ5LlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBmb3JFYWNoRW50cnkgPSAob2JqLCBmbikgPT4ge1xuICBjb25zdCBnZW5lcmF0b3IgPSBvYmogJiYgb2JqW2l0ZXJhdG9yXTtcblxuICBjb25zdCBfaXRlcmF0b3IgPSBnZW5lcmF0b3IuY2FsbChvYmopO1xuXG4gIGxldCByZXN1bHQ7XG5cbiAgd2hpbGUgKChyZXN1bHQgPSBfaXRlcmF0b3IubmV4dCgpKSAmJiAhcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBwYWlyID0gcmVzdWx0LnZhbHVlO1xuICAgIGZuLmNhbGwob2JqLCBwYWlyWzBdLCBwYWlyWzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIGFuZCBhIHN0cmluZywgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBtYXRjaGVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZ0V4cCAtIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXk8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG1hdGNoQWxsID0gKHJlZ0V4cCwgc3RyKSA9PiB7XG4gIGxldCBtYXRjaGVzO1xuICBjb25zdCBhcnIgPSBbXTtcblxuICB3aGlsZSAoKG1hdGNoZXMgPSByZWdFeHAuZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIGFyci5wdXNoKG1hdGNoZXMpO1xuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuLyogQ2hlY2tpbmcgaWYgdGhlIGtpbmRPZlRlc3QgZnVuY3Rpb24gcmV0dXJucyB0cnVlIHdoZW4gcGFzc2VkIGFuIEhUTUxGb3JtRWxlbWVudC4gKi9cbmNvbnN0IGlzSFRNTEZvcm0gPSBraW5kT2ZUZXN0KCdIVE1MRm9ybUVsZW1lbnQnKTtcblxuY29uc3QgdG9DYW1lbENhc2UgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWy1fXFxzXShbYS16XFxkXSkoXFx3KikvZyxcbiAgICBmdW5jdGlvbiByZXBsYWNlcihtLCBwMSwgcDIpIHtcbiAgICAgIHJldHVybiBwMS50b1VwcGVyQ2FzZSgpICsgcDI7XG4gICAgfVxuICApO1xufTtcblxuLyogQ3JlYXRpbmcgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgaWYgYW4gb2JqZWN0IGhhcyBhIHByb3BlcnR5LiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSAoKHtoYXNPd25Qcm9wZXJ0eX0pID0+IChvYmosIHByb3ApID0+IGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkoT2JqZWN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1JlZ0V4cCA9IGtpbmRPZlRlc3QoJ1JlZ0V4cCcpO1xuXG5jb25zdCByZWR1Y2VEZXNjcmlwdG9ycyA9IChvYmosIHJlZHVjZXIpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopO1xuICBjb25zdCByZWR1Y2VkRGVzY3JpcHRvcnMgPSB7fTtcblxuICBmb3JFYWNoKGRlc2NyaXB0b3JzLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIGxldCByZXQ7XG4gICAgaWYgKChyZXQgPSByZWR1Y2VyKGRlc2NyaXB0b3IsIG5hbWUsIG9iaikpICE9PSBmYWxzZSkge1xuICAgICAgcmVkdWNlZERlc2NyaXB0b3JzW25hbWVdID0gcmV0IHx8IGRlc2NyaXB0b3I7XG4gICAgfVxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHJlZHVjZWREZXNjcmlwdG9ycyk7XG59XG5cbi8qKlxuICogTWFrZXMgYWxsIG1ldGhvZHMgcmVhZC1vbmx5XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuY29uc3QgZnJlZXplTWV0aG9kcyA9IChvYmopID0+IHtcbiAgcmVkdWNlRGVzY3JpcHRvcnMob2JqLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIC8vIHNraXAgcmVzdHJpY3RlZCBwcm9wcyBpbiBzdHJpY3QgbW9kZVxuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikgJiYgWydhcmd1bWVudHMnLCAnY2FsbGVyJywgJ2NhbGxlZSddLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBvYmpbbmFtZV07XG5cbiAgICBpZiAoIWlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm47XG5cbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBmYWxzZTtcblxuICAgIGlmICgnd3JpdGFibGUnIGluIGRlc2NyaXB0b3IpIHtcbiAgICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICBkZXNjcmlwdG9yLnNldCA9ICgpID0+IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0NhbiBub3QgcmV3cml0ZSByZWFkLW9ubHkgbWV0aG9kIFxcJycgKyBuYW1lICsgJ1xcJycpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCB0b09iamVjdFNldCA9IChhcnJheU9yU3RyaW5nLCBkZWxpbWl0ZXIpID0+IHtcbiAgY29uc3Qgb2JqID0ge307XG5cbiAgY29uc3QgZGVmaW5lID0gKGFycikgPT4ge1xuICAgIGFyci5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIG9ialt2YWx1ZV0gPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgaXNBcnJheShhcnJheU9yU3RyaW5nKSA/IGRlZmluZShhcnJheU9yU3RyaW5nKSA6IGRlZmluZShTdHJpbmcoYXJyYXlPclN0cmluZykuc3BsaXQoZGVsaW1pdGVyKSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHRvRmluaXRlTnVtYmVyID0gKHZhbHVlLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlID0gK3ZhbHVlKSA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuXG4vKipcbiAqIElmIHRoZSB0aGluZyBpcyBhIEZvcm1EYXRhIG9iamVjdCwgcmV0dXJuIHRydWUsIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB0aGluZyAtIFRoZSB0aGluZyB0byBjaGVjay5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTcGVjQ29tcGxpYW50Rm9ybSh0aGluZykge1xuICByZXR1cm4gISEodGhpbmcgJiYgaXNGdW5jdGlvbih0aGluZy5hcHBlbmQpICYmIHRoaW5nW3RvU3RyaW5nVGFnXSA9PT0gJ0Zvcm1EYXRhJyAmJiB0aGluZ1tpdGVyYXRvcl0pO1xufVxuXG5jb25zdCB0b0pTT05PYmplY3QgPSAob2JqKSA9PiB7XG4gIGNvbnN0IHN0YWNrID0gbmV3IEFycmF5KDEwKTtcblxuICBjb25zdCB2aXNpdCA9IChzb3VyY2UsIGkpID0+IHtcblxuICAgIGlmIChpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICBpZiAoc3RhY2suaW5kZXhPZihzb3VyY2UpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighKCd0b0pTT04nIGluIHNvdXJjZSkpIHtcbiAgICAgICAgc3RhY2tbaV0gPSBzb3VyY2U7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGlzQXJyYXkoc291cmNlKSA/IFtdIDoge307XG5cbiAgICAgICAgZm9yRWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodmFsdWUsIGkgKyAxKTtcbiAgICAgICAgICAhaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSAmJiAodGFyZ2V0W2tleV0gPSByZWR1Y2VkVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGFja1tpXSA9IHVuZGVmaW5lZDtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICByZXR1cm4gdmlzaXQob2JqLCAwKTtcbn1cblxuY29uc3QgaXNBc3luY0ZuID0ga2luZE9mVGVzdCgnQXN5bmNGdW5jdGlvbicpO1xuXG5jb25zdCBpc1RoZW5hYmxlID0gKHRoaW5nKSA9PlxuICB0aGluZyAmJiAoaXNPYmplY3QodGhpbmcpIHx8IGlzRnVuY3Rpb24odGhpbmcpKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLnRoZW4pICYmIGlzRnVuY3Rpb24odGhpbmcuY2F0Y2gpO1xuXG4vLyBvcmlnaW5hbCBjb2RlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGlnaXRhbEJyYWluSlMvQXhpb3NQcm9taXNlL2Jsb2IvMTZkZWFiMTM3MTBlYzA5Nzc5OTIyMTMxZjNmYTU5NTQzMjBmODNhYi9saWIvdXRpbHMuanMjTDExLUwzNFxuXG5jb25zdCBfc2V0SW1tZWRpYXRlID0gKChzZXRJbW1lZGlhdGVTdXBwb3J0ZWQsIHBvc3RNZXNzYWdlU3VwcG9ydGVkKSA9PiB7XG4gIGlmIChzZXRJbW1lZGlhdGVTdXBwb3J0ZWQpIHtcbiAgICByZXR1cm4gc2V0SW1tZWRpYXRlO1xuICB9XG5cbiAgcmV0dXJuIHBvc3RNZXNzYWdlU3VwcG9ydGVkID8gKCh0b2tlbiwgY2FsbGJhY2tzKSA9PiB7XG4gICAgX2dsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoe3NvdXJjZSwgZGF0YX0pID0+IHtcbiAgICAgIGlmIChzb3VyY2UgPT09IF9nbG9iYWwgJiYgZGF0YSA9PT0gdG9rZW4pIHtcbiAgICAgICAgY2FsbGJhY2tzLmxlbmd0aCAmJiBjYWxsYmFja3Muc2hpZnQoKSgpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcblxuICAgIHJldHVybiAoY2IpID0+IHtcbiAgICAgIGNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgIF9nbG9iYWwucG9zdE1lc3NhZ2UodG9rZW4sIFwiKlwiKTtcbiAgICB9XG4gIH0pKGBheGlvc0Ake01hdGgucmFuZG9tKCl9YCwgW10pIDogKGNiKSA9PiBzZXRUaW1lb3V0KGNiKTtcbn0pKFxuICB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nLFxuICBpc0Z1bmN0aW9uKF9nbG9iYWwucG9zdE1lc3NhZ2UpXG4pO1xuXG5jb25zdCBhc2FwID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrICE9PSAndW5kZWZpbmVkJyA/XG4gIHF1ZXVlTWljcm90YXNrLmJpbmQoX2dsb2JhbCkgOiAoIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLm5leHRUaWNrIHx8IF9zZXRJbW1lZGlhdGUpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKipcblxuXG5jb25zdCBpc0l0ZXJhYmxlID0gKHRoaW5nKSA9PiB0aGluZyAhPSBudWxsICYmIGlzRnVuY3Rpb24odGhpbmdbaXRlcmF0b3JdKTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmcsXG4gIGlzTnVtYmVyLFxuICBpc0Jvb2xlYW4sXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBpc1JlYWRhYmxlU3RyZWFtLFxuICBpc1JlcXVlc3QsXG4gIGlzUmVzcG9uc2UsXG4gIGlzSGVhZGVycyxcbiAgaXNVbmRlZmluZWQsXG4gIGlzRGF0ZSxcbiAgaXNGaWxlLFxuICBpc0Jsb2IsXG4gIGlzUmVnRXhwLFxuICBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzVHlwZWRBcnJheSxcbiAgaXNGaWxlTGlzdCxcbiAgZm9yRWFjaCxcbiAgbWVyZ2UsXG4gIGV4dGVuZCxcbiAgdHJpbSxcbiAgc3RyaXBCT00sXG4gIGluaGVyaXRzLFxuICB0b0ZsYXRPYmplY3QsXG4gIGtpbmRPZixcbiAga2luZE9mVGVzdCxcbiAgZW5kc1dpdGgsXG4gIHRvQXJyYXksXG4gIGZvckVhY2hFbnRyeSxcbiAgbWF0Y2hBbGwsXG4gIGlzSFRNTEZvcm0sXG4gIGhhc093blByb3BlcnR5LFxuICBoYXNPd25Qcm9wOiBoYXNPd25Qcm9wZXJ0eSwgLy8gYW4gYWxpYXMgdG8gYXZvaWQgRVNMaW50IG5vLXByb3RvdHlwZS1idWlsdGlucyBkZXRlY3Rpb25cbiAgcmVkdWNlRGVzY3JpcHRvcnMsXG4gIGZyZWV6ZU1ldGhvZHMsXG4gIHRvT2JqZWN0U2V0LFxuICB0b0NhbWVsQ2FzZSxcbiAgbm9vcCxcbiAgdG9GaW5pdGVOdW1iZXIsXG4gIGZpbmRLZXksXG4gIGdsb2JhbDogX2dsb2JhbCxcbiAgaXNDb250ZXh0RGVmaW5lZCxcbiAgaXNTcGVjQ29tcGxpYW50Rm9ybSxcbiAgdG9KU09OT2JqZWN0LFxuICBpc0FzeW5jRm4sXG4gIGlzVGhlbmFibGUsXG4gIHNldEltbWVkaWF0ZTogX3NldEltbWVkaWF0ZSxcbiAgYXNhcCxcbiAgaXNJdGVyYWJsZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIEF4aW9zRXJyb3IobWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5uYW1lID0gJ0F4aW9zRXJyb3InO1xuICBjb2RlICYmICh0aGlzLmNvZGUgPSBjb2RlKTtcbiAgY29uZmlnICYmICh0aGlzLmNvbmZpZyA9IGNvbmZpZyk7XG4gIHJlcXVlc3QgJiYgKHRoaXMucmVxdWVzdCA9IHJlcXVlc3QpO1xuICBpZiAocmVzcG9uc2UpIHtcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXMgPyByZXNwb25zZS5zdGF0dXMgOiBudWxsO1xuICB9XG59XG5cbnV0aWxzLmluaGVyaXRzKEF4aW9zRXJyb3IsIEVycm9yLCB7XG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHV0aWxzLnRvSlNPTk9iamVjdCh0aGlzLmNvbmZpZyksXG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzXG4gICAgfTtcbiAgfVxufSk7XG5cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zRXJyb3IucHJvdG90eXBlO1xuY29uc3QgZGVzY3JpcHRvcnMgPSB7fTtcblxuW1xuICAnRVJSX0JBRF9PUFRJT05fVkFMVUUnLFxuICAnRVJSX0JBRF9PUFRJT04nLFxuICAnRUNPTk5BQk9SVEVEJyxcbiAgJ0VUSU1FRE9VVCcsXG4gICdFUlJfTkVUV09SSycsXG4gICdFUlJfRlJfVE9PX01BTllfUkVESVJFQ1RTJyxcbiAgJ0VSUl9ERVBSRUNBVEVEJyxcbiAgJ0VSUl9CQURfUkVTUE9OU0UnLFxuICAnRVJSX0JBRF9SRVFVRVNUJyxcbiAgJ0VSUl9DQU5DRUxFRCcsXG4gICdFUlJfTk9UX1NVUFBPUlQnLFxuICAnRVJSX0lOVkFMSURfVVJMJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbl0uZm9yRWFjaChjb2RlID0+IHtcbiAgZGVzY3JpcHRvcnNbY29kZV0gPSB7dmFsdWU6IGNvZGV9O1xufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEF4aW9zRXJyb3IsIGRlc2NyaXB0b3JzKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsICdpc0F4aW9zRXJyb3InLCB7dmFsdWU6IHRydWV9KTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbkF4aW9zRXJyb3IuZnJvbSA9IChlcnJvciwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSwgY3VzdG9tUHJvcHMpID0+IHtcbiAgY29uc3QgYXhpb3NFcnJvciA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcblxuICB1dGlscy50b0ZsYXRPYmplY3QoZXJyb3IsIGF4aW9zRXJyb3IsIGZ1bmN0aW9uIGZpbHRlcihvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBFcnJvci5wcm90b3R5cGU7XG4gIH0sIHByb3AgPT4ge1xuICAgIHJldHVybiBwcm9wICE9PSAnaXNBeGlvc0Vycm9yJztcbiAgfSk7XG5cbiAgQXhpb3NFcnJvci5jYWxsKGF4aW9zRXJyb3IsIGVycm9yLm1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpO1xuXG4gIGF4aW9zRXJyb3IuY2F1c2UgPSBlcnJvcjtcblxuICBheGlvc0Vycm9yLm5hbWUgPSBlcnJvci5uYW1lO1xuXG4gIGN1c3RvbVByb3BzICYmIE9iamVjdC5hc3NpZ24oYXhpb3NFcnJvciwgY3VzdG9tUHJvcHMpO1xuXG4gIHJldHVybiBheGlvc0Vycm9yO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NFcnJvcjtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBzdHJpY3RcbmV4cG9ydCBkZWZhdWx0IG51bGw7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuLy8gdGVtcG9yYXJ5IGhvdGZpeCB0byBhdm9pZCBjaXJjdWxhciByZWZlcmVuY2VzIHVudGlsIEF4aW9zVVJMU2VhcmNoUGFyYW1zIGlzIHJlZmFjdG9yZWRcbmltcG9ydCBQbGF0Zm9ybUZvcm1EYXRhIGZyb20gJy4uL3BsYXRmb3JtL25vZGUvY2xhc3Nlcy9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gdGhpbmcgaXMgYSBhcnJheSBvciBqcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRoaW5nIC0gVGhlIG9iamVjdCBvciBhcnJheSB0byBiZSB2aXNpdGVkLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1Zpc2l0YWJsZSh0aGluZykge1xuICByZXR1cm4gdXRpbHMuaXNQbGFpbk9iamVjdCh0aGluZykgfHwgdXRpbHMuaXNBcnJheSh0aGluZyk7XG59XG5cbi8qKlxuICogSXQgcmVtb3ZlcyB0aGUgYnJhY2tldHMgZnJvbSB0aGUgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHBhcmFtZXRlci5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUga2V5IHdpdGhvdXQgdGhlIGJyYWNrZXRzLlxuICovXG5mdW5jdGlvbiByZW1vdmVCcmFja2V0cyhrZXkpIHtcbiAgcmV0dXJuIHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykgPyBrZXkuc2xpY2UoMCwgLTIpIDoga2V5O1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGF0aCwgYSBrZXksIGFuZCBhIGJvb2xlYW4sIGFuZCByZXR1cm5zIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkb3RzIC0gSWYgdHJ1ZSwgdGhlIGtleSB3aWxsIGJlIHJlbmRlcmVkIHdpdGggZG90cyBpbnN0ZWFkIG9mIGJyYWNrZXRzLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cykge1xuICBpZiAoIXBhdGgpIHJldHVybiBrZXk7XG4gIHJldHVybiBwYXRoLmNvbmNhdChrZXkpLm1hcChmdW5jdGlvbiBlYWNoKHRva2VuLCBpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdG9rZW4gPSByZW1vdmVCcmFja2V0cyh0b2tlbik7XG4gICAgcmV0dXJuICFkb3RzICYmIGkgPyAnWycgKyB0b2tlbiArICddJyA6IHRva2VuO1xuICB9KS5qb2luKGRvdHMgPyAnLicgOiAnJyk7XG59XG5cbi8qKlxuICogSWYgdGhlIGFycmF5IGlzIGFuIGFycmF5IGFuZCBub25lIG9mIGl0cyBlbGVtZW50cyBhcmUgdmlzaXRhYmxlLCB0aGVuIGl0J3MgYSBmbGF0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmxhdEFycmF5KGFycikge1xuICByZXR1cm4gdXRpbHMuaXNBcnJheShhcnIpICYmICFhcnIuc29tZShpc1Zpc2l0YWJsZSk7XG59XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSB1dGlscy50b0ZsYXRPYmplY3QodXRpbHMsIHt9LCBudWxsLCBmdW5jdGlvbiBmaWx0ZXIocHJvcCkge1xuICByZXR1cm4gL15pc1tBLVpdLy50ZXN0KHByb3ApO1xufSk7XG5cbi8qKlxuICogQ29udmVydCBhIGRhdGEgb2JqZWN0IHRvIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHs/T2JqZWN0fSBbZm9ybURhdGFdXG4gKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmlzaXRvcl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWV0YVRva2VucyA9IHRydWVdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRvdHMgPSBmYWxzZV1cbiAqIEBwYXJhbSB7P0Jvb2xlYW59IFtvcHRpb25zLmluZGV4ZXMgPSBmYWxzZV1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICoqL1xuXG4vKipcbiAqIEl0IGNvbnZlcnRzIGFuIG9iamVjdCBpbnRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gZm9ybSBkYXRhLlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIC0gVGhlIEZvcm1EYXRhIG9iamVjdCB0byBhcHBlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiB0b0Zvcm1EYXRhKG9iaiwgZm9ybURhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBuZXcgKFBsYXRmb3JtRm9ybURhdGEgfHwgRm9ybURhdGEpKCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIG9wdGlvbnMgPSB1dGlscy50b0ZsYXRPYmplY3Qob3B0aW9ucywge1xuICAgIG1ldGFUb2tlbnM6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgaW5kZXhlczogZmFsc2VcbiAgfSwgZmFsc2UsIGZ1bmN0aW9uIGRlZmluZWQob3B0aW9uLCBzb3VyY2UpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgICByZXR1cm4gIXV0aWxzLmlzVW5kZWZpbmVkKHNvdXJjZVtvcHRpb25dKTtcbiAgfSk7XG5cbiAgY29uc3QgbWV0YVRva2VucyA9IG9wdGlvbnMubWV0YVRva2VucztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGNvbnN0IHZpc2l0b3IgPSBvcHRpb25zLnZpc2l0b3IgfHwgZGVmYXVsdFZpc2l0b3I7XG4gIGNvbnN0IGRvdHMgPSBvcHRpb25zLmRvdHM7XG4gIGNvbnN0IGluZGV4ZXMgPSBvcHRpb25zLmluZGV4ZXM7XG4gIGNvbnN0IF9CbG9iID0gb3B0aW9ucy5CbG9iIHx8IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBCbG9iO1xuICBjb25zdCB1c2VCbG9iID0gX0Jsb2IgJiYgdXRpbHMuaXNTcGVjQ29tcGxpYW50Rm9ybShmb3JtRGF0YSk7XG5cbiAgaWYgKCF1dGlscy5pc0Z1bmN0aW9uKHZpc2l0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmlzaXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuXG4gICAgaWYgKHV0aWxzLmlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoIXVzZUJsb2IgJiYgdXRpbHMuaXNCbG9iKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ0Jsb2IgaXMgbm90IHN1cHBvcnRlZC4gVXNlIGEgQnVmZmVyIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIodmFsdWUpIHx8IHV0aWxzLmlzVHlwZWRBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB1c2VCbG9iICYmIHR5cGVvZiBCbG9iID09PSAnZnVuY3Rpb24nID8gbmV3IEJsb2IoW3ZhbHVlXSkgOiBCdWZmZXIuZnJvbSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmlzaXRvci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IGtleVxuICAgKiBAcGFyYW0ge0FycmF5PFN0cmluZ3xOdW1iZXI+fSBwYXRoXG4gICAqIEB0aGlzIHtGb3JtRGF0YX1cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybiB0cnVlIHRvIHZpc2l0IHRoZSBlYWNoIHByb3Agb2YgdGhlIHZhbHVlIHJlY3Vyc2l2ZWx5XG4gICAqL1xuICBmdW5jdGlvbiBkZWZhdWx0VmlzaXRvcih2YWx1ZSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGFyciA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlICYmICFwYXRoICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh1dGlscy5lbmRzV2l0aChrZXksICd7fScpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSBtZXRhVG9rZW5zID8ga2V5IDoga2V5LnNsaWNlKDAsIC0yKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKHV0aWxzLmlzQXJyYXkodmFsdWUpICYmIGlzRmxhdEFycmF5KHZhbHVlKSkgfHxcbiAgICAgICAgKCh1dGlscy5pc0ZpbGVMaXN0KHZhbHVlKSB8fCB1dGlscy5lbmRzV2l0aChrZXksICdbXScpKSAmJiAoYXJyID0gdXRpbHMudG9BcnJheSh2YWx1ZSkpXG4gICAgICAgICkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IHJlbW92ZUJyYWNrZXRzKGtleSk7XG5cbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gZWFjaChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgICBpbmRleGVzID09PSB0cnVlID8gcmVuZGVyS2V5KFtrZXldLCBpbmRleCwgZG90cykgOiAoaW5kZXhlcyA9PT0gbnVsbCA/IGtleSA6IGtleSArICdbXScpLFxuICAgICAgICAgICAgY29udmVydFZhbHVlKGVsKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVmlzaXRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpLCBjb252ZXJ0VmFsdWUodmFsdWUpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHN0YWNrID0gW107XG5cbiAgY29uc3QgZXhwb3NlZEhlbHBlcnMgPSBPYmplY3QuYXNzaWduKHByZWRpY2F0ZXMsIHtcbiAgICBkZWZhdWx0VmlzaXRvcixcbiAgICBjb252ZXJ0VmFsdWUsXG4gICAgaXNWaXNpdGFibGVcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYnVpbGQodmFsdWUsIHBhdGgpIHtcbiAgICBpZiAodXRpbHMuaXNVbmRlZmluZWQodmFsdWUpKSByZXR1cm47XG5cbiAgICBpZiAoc3RhY2suaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGVkIGluICcgKyBwYXRoLmpvaW4oJy4nKSk7XG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWx1ZSk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiBlYWNoKGVsLCBrZXkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiB2aXNpdG9yLmNhbGwoXG4gICAgICAgIGZvcm1EYXRhLCBlbCwgdXRpbHMuaXNTdHJpbmcoa2V5KSA/IGtleS50cmltKCkgOiBrZXksIHBhdGgsIGV4cG9zZWRIZWxwZXJzXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIGJ1aWxkKGVsLCBwYXRoID8gcGF0aC5jb25jYXQoa2V5KSA6IFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YWNrLnBvcCgpO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgYnVpbGQob2JqKTtcblxuICByZXR1cm4gZm9ybURhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRm9ybURhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogSXQgZW5jb2RlcyBhIHN0cmluZyBieSByZXBsYWNpbmcgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGluIHRoZSB1bnJlc2VydmVkIHNldCB3aXRoXG4gKiB0aGVpciBwZXJjZW50LWVuY29kZWQgZXF1aXZhbGVudHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gIGNvbnN0IGNoYXJNYXAgPSB7XG4gICAgJyEnOiAnJTIxJyxcbiAgICBcIidcIjogJyUyNycsXG4gICAgJygnOiAnJTI4JyxcbiAgICAnKSc6ICclMjknLFxuICAgICd+JzogJyU3RScsXG4gICAgJyUyMCc6ICcrJyxcbiAgICAnJTAwJzogJ1xceDAwJ1xuICB9O1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XG4gICAgcmV0dXJuIGNoYXJNYXBbbWF0Y2hdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhcmFtcyBvYmplY3QgYW5kIGNvbnZlcnRzIGl0IHRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBGb3JtRGF0YSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIHRoZSBBeGlvcyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKSB7XG4gIHRoaXMuX3BhaXJzID0gW107XG5cbiAgcGFyYW1zICYmIHRvRm9ybURhdGEocGFyYW1zLCB0aGlzLCBvcHRpb25zKTtcbn1cblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX3BhaXJzLnB1c2goW25hbWUsIHZhbHVlXSk7XG59O1xuXG5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhlbmNvZGVyKSB7XG4gIGNvbnN0IF9lbmNvZGUgPSBlbmNvZGVyID8gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZW5jb2Rlci5jYWxsKHRoaXMsIHZhbHVlLCBlbmNvZGUpO1xuICB9IDogZW5jb2RlO1xuXG4gIHJldHVybiB0aGlzLl9wYWlycy5tYXAoZnVuY3Rpb24gZWFjaChwYWlyKSB7XG4gICAgcmV0dXJuIF9lbmNvZGUocGFpclswXSkgKyAnPScgKyBfZW5jb2RlKHBhaXJbMV0pO1xuICB9LCAnJykuam9pbignJicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5cbi8qKlxuICogSXQgcmVwbGFjZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY2hhcmFjdGVycyBgOmAsIGAkYCwgYCxgLCBgK2AsIGBbYCwgYW5kIGBdYCB3aXRoIHRoZWlyXG4gKiBVUkkgZW5jb2RlZCBjb3VudGVycGFydHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHs/KG9iamVjdHxGdW5jdGlvbil9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgb3B0aW9ucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIFxuICBjb25zdCBfZW5jb2RlID0gb3B0aW9ucyAmJiBvcHRpb25zLmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgc2VyaWFsaXplOiBvcHRpb25zXG4gICAgfTtcbiAgfSBcblxuICBjb25zdCBzZXJpYWxpemVGbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemU7XG5cbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHNlcmlhbGl6ZUZuKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHNlcmlhbGl6ZUZuKHBhcmFtcywgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykgP1xuICAgICAgcGFyYW1zLnRvU3RyaW5nKCkgOlxuICAgICAgbmV3IEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykudG9TdHJpbmcoX2VuY29kZSk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIGNvbnN0IGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG5jbGFzcyBJbnRlcmNlcHRvck1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAgICovXG4gIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkLCBvcHRpb25zKSB7XG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICAgIGZ1bGZpbGxlZCxcbiAgICAgIHJlamVjdGVkLFxuICAgICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgICBydW5XaGVuOiBvcHRpb25zID8gb3B0aW9ucy5ydW5XaGVuIDogbnVsbFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAgICpcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgaW50ZXJjZXB0b3Igd2FzIHJlbW92ZWQsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBlamVjdChpZCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgaW50ZXJjZXB0b3JzIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAgICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZm9yRWFjaChmbikge1xuICAgIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgICAgZm4oaCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2Vcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnID8gVVJMU2VhcmNoUGFyYW1zIDogQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBGb3JtRGF0YSA6IG51bGw7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnID8gQmxvYiA6IG51bGxcbiIsImltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcydcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuL2NsYXNzZXMvRm9ybURhdGEuanMnXG5pbXBvcnQgQmxvYiBmcm9tICcuL2NsYXNzZXMvQmxvYi5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0Jyb3dzZXI6IHRydWUsXG4gIGNsYXNzZXM6IHtcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgRm9ybURhdGEsXG4gICAgQmxvYlxuICB9LFxuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmaWxlJywgJ2Jsb2InLCAndXJsJywgJ2RhdGEnXVxufTtcbiIsImNvbnN0IGhhc0Jyb3dzZXJFbnYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5jb25zdCBfbmF2aWdhdG9yID0gdHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yIHx8IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlckVudiA9IGhhc0Jyb3dzZXJFbnYgJiZcbiAgKCFfbmF2aWdhdG9yIHx8IFsnUmVhY3ROYXRpdmUnLCAnTmF0aXZlU2NyaXB0JywgJ05TJ10uaW5kZXhPZihfbmF2aWdhdG9yLnByb2R1Y3QpIDwgMCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIHdlYldvcmtlciBlbnZpcm9ubWVudFxuICpcbiAqIEFsdGhvdWdoIHRoZSBgaXNTdGFuZGFyZEJyb3dzZXJFbnZgIG1ldGhvZCBpbmRpY2F0ZXMgdGhhdFxuICogYGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyYCwgdGhlIFdlYldvcmtlciB3aWxsIHN0aWxsIGJlXG4gKiBmaWx0ZXJlZCBvdXQgZHVlIHRvIGl0cyBqdWRnbWVudCBzdGFuZGFyZFxuICogYHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdgLlxuICogVGhpcyBsZWFkcyB0byBhIHByb2JsZW0gd2hlbiBheGlvcyBwb3N0IGBGb3JtRGF0YWAgaW4gd2ViV29ya2VyXG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudiA9ICgoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSAmJlxuICAgIHR5cGVvZiBzZWxmLmltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbidcbiAgKTtcbn0pKCk7XG5cbmNvbnN0IG9yaWdpbiA9IGhhc0Jyb3dzZXJFbnYgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJ2h0dHA6Ly9sb2NhbGhvc3QnO1xuXG5leHBvcnQge1xuICBoYXNCcm93c2VyRW52LFxuICBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYsXG4gIGhhc1N0YW5kYXJkQnJvd3NlckVudixcbiAgX25hdmlnYXRvciBhcyBuYXZpZ2F0b3IsXG4gIG9yaWdpblxufVxuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4vbm9kZS9pbmRleC5qcyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2NvbW1vbi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4udXRpbHMsXG4gIC4uLnBsYXRmb3JtXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b0Zvcm1EYXRhKGRhdGEsIG5ldyBwbGF0Zm9ybS5jbGFzc2VzLlVSTFNlYXJjaFBhcmFtcygpLCBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpdG9yOiBmdW5jdGlvbih2YWx1ZSwga2V5LCBwYXRoLCBoZWxwZXJzKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaXNOb2RlICYmIHV0aWxzLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlbHBlcnMuZGVmYXVsdFZpc2l0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMpKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZyBsaWtlIGBmb29beF1beV1bel1gIGFuZCByZXR1cm5zIGFuIGFycmF5IGxpa2UgYFsnZm9vJywgJ3gnLCAneScsICd6J11cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKlxuICogQHJldHVybnMgQW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQcm9wUGF0aChuYW1lKSB7XG4gIC8vIGZvb1t4XVt5XVt6XVxuICAvLyBmb28ueC55LnpcbiAgLy8gZm9vLXgteS16XG4gIC8vIGZvbyB4IHkgelxuICByZXR1cm4gdXRpbHMubWF0Y2hBbGwoL1xcdyt8XFxbKFxcdyopXS9nLCBuYW1lKS5tYXAobWF0Y2ggPT4ge1xuICAgIHJldHVybiBtYXRjaFswXSA9PT0gJ1tdJyA/ICcnIDogbWF0Y2hbMV0gfHwgbWF0Y2hbMF07XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNvbnZlcnQgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleXMgYW5kIHZhbHVlcyBhcyB0aGUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXJyKTtcbiAgbGV0IGk7XG4gIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICBsZXQga2V5O1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIG9ialtrZXldID0gYXJyW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIEZvcm1EYXRhIG9iamVjdCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gY29udmVydCB0byBKU09OLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCBhbnk+IHwgbnVsbH0gVGhlIGNvbnZlcnRlZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZvcm1EYXRhVG9KU09OKGZvcm1EYXRhKSB7XG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0LCBpbmRleCkge1xuICAgIGxldCBuYW1lID0gcGF0aFtpbmRleCsrXTtcblxuICAgIGlmIChuYW1lID09PSAnX19wcm90b19fJykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBpc051bWVyaWNLZXkgPSBOdW1iZXIuaXNGaW5pdGUoK25hbWUpO1xuICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID49IHBhdGgubGVuZ3RoO1xuICAgIG5hbWUgPSAhbmFtZSAmJiB1dGlscy5pc0FycmF5KHRhcmdldCkgPyB0YXJnZXQubGVuZ3RoIDogbmFtZTtcblxuICAgIGlmIChpc0xhc3QpIHtcbiAgICAgIGlmICh1dGlscy5oYXNPd25Qcm9wKHRhcmdldCwgbmFtZSkpIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gW3RhcmdldFtuYW1lXSwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0W25hbWVdIHx8ICF1dGlscy5pc09iamVjdCh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldFtuYW1lXSwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCAmJiB1dGlscy5pc0FycmF5KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IGFycmF5VG9PYmplY3QodGFyZ2V0W25hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc0Zvcm1EYXRhKGZvcm1EYXRhKSAmJiB1dGlscy5pc0Z1bmN0aW9uKGZvcm1EYXRhLmVudHJpZXMpKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoRW50cnkoZm9ybURhdGEsIChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgYnVpbGRQYXRoKHBhcnNlUHJvcFBhdGgobmFtZSksIHZhbHVlLCBvYmosIDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtRGF0YVRvSlNPTjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCB0b1VSTEVuY29kZWRGb3JtIGZyb20gJy4uL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IGZvcm1EYXRhVG9KU09OIGZyb20gJy4uL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nLCB0cmllcyB0byBwYXJzZSBpdCwgYW5kIGlmIGl0IGZhaWxzLCBpdCByZXR1cm5zIHRoZSBzdHJpbmdpZmllZCB2ZXJzaW9uXG4gKiBvZiB0aGUgaW5wdXRcbiAqXG4gKiBAcGFyYW0ge2FueX0gcmF3VmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgc3RyaW5naWZpZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJzZXIgLSBBIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIGEgc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVuY29kZXIgLSBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHN0cmluZy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZ2lmaWVkIHZlcnNpb24gb2YgdGhlIHJhd1ZhbHVlLlxuICovXG5mdW5jdGlvbiBzdHJpbmdpZnlTYWZlbHkocmF3VmFsdWUsIHBhcnNlciwgZW5jb2Rlcikge1xuICBpZiAodXRpbHMuaXNTdHJpbmcocmF3VmFsdWUpKSB7XG4gICAgdHJ5IHtcbiAgICAgIChwYXJzZXIgfHwgSlNPTi5wYXJzZSkocmF3VmFsdWUpO1xuICAgICAgcmV0dXJuIHV0aWxzLnRyaW0ocmF3VmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgIT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGVuY29kZXIgfHwgSlNPTi5zdHJpbmdpZnkpKHJhd1ZhbHVlKTtcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG5cbiAgdHJhbnNpdGlvbmFsOiB0cmFuc2l0aW9uYWxEZWZhdWx0cyxcblxuICBhZGFwdGVyOiBbJ3hocicsICdodHRwJywgJ2ZldGNoJ10sXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXRDb250ZW50VHlwZSgpIHx8ICcnO1xuICAgIGNvbnN0IGhhc0pTT05Db250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xO1xuICAgIGNvbnN0IGlzT2JqZWN0UGF5bG9hZCA9IHV0aWxzLmlzT2JqZWN0KGRhdGEpO1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCAmJiB1dGlscy5pc0hUTUxGb3JtKGRhdGEpKSB7XG4gICAgICBkYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRm9ybURhdGEgPSB1dGlscy5pc0Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgaWYgKGlzRm9ybURhdGEpIHtcbiAgICAgIHJldHVybiBoYXNKU09OQ29udGVudFR5cGUgPyBKU09OLnN0cmluZ2lmeShmb3JtRGF0YVRvSlNPTihkYXRhKSkgOiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1JlYWRhYmxlU3RyZWFtKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnLCBmYWxzZSk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGxldCBpc0ZpbGVMaXN0O1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCkge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgdGhpcy5mb3JtU2VyaWFsaXplcikudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChpc0ZpbGVMaXN0ID0gdXRpbHMuaXNGaWxlTGlzdChkYXRhKSkgfHwgY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpID4gLTEpIHtcbiAgICAgICAgY29uc3QgX0Zvcm1EYXRhID0gdGhpcy5lbnYgJiYgdGhpcy5lbnYuRm9ybURhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRvRm9ybURhdGEoXG4gICAgICAgICAgaXNGaWxlTGlzdCA/IHsnZmlsZXNbXSc6IGRhdGF9IDogZGF0YSxcbiAgICAgICAgICBfRm9ybURhdGEgJiYgbmV3IF9Gb3JtRGF0YSgpLFxuICAgICAgICAgIHRoaXMuZm9ybVNlcmlhbGl6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkIHx8IGhhc0pTT05Db250ZW50VHlwZSApIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nLCBmYWxzZSk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgY29uc3QgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgIGNvbnN0IEpTT05SZXF1ZXN0ZWQgPSB0aGlzLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nO1xuXG4gICAgaWYgKHV0aWxzLmlzUmVzcG9uc2UoZGF0YSkgfHwgdXRpbHMuaXNSZWFkYWJsZVN0cmVhbShkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEgJiYgdXRpbHMuaXNTdHJpbmcoZGF0YSkgJiYgKChmb3JjZWRKU09OUGFyc2luZyAmJiAhdGhpcy5yZXNwb25zZVR5cGUpIHx8IEpTT05SZXF1ZXN0ZWQpKSB7XG4gICAgICBjb25zdCBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgICBjb25zdCBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiBKU09OUmVxdWVzdGVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgdGhpcywgbnVsbCwgdGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIGVudjoge1xuICAgIEZvcm1EYXRhOiBwbGF0Zm9ybS5jbGFzc2VzLkZvcm1EYXRhLFxuICAgIEJsb2I6IHBsYXRmb3JtLmNsYXNzZXMuQmxvYlxuICB9LFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH0sXG5cbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCddLCAobWV0aG9kKSA9PiB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8vIFJhd0F4aW9zSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbmNvbnN0IGlnbm9yZUR1cGxpY2F0ZU9mID0gdXRpbHMudG9PYmplY3RTZXQoW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl0pO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3SGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKlxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgcmF3SGVhZGVycyA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQga2V5O1xuICBsZXQgdmFsO1xuICBsZXQgaTtcblxuICByYXdIZWFkZXJzICYmIHJhd0hlYWRlcnMuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gbGluZS5zdWJzdHJpbmcoaSArIDEpLnRyaW0oKTtcblxuICAgIGlmICgha2V5IHx8IChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZltrZXldKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgaWYgKHBhcnNlZFtrZXldKSB7XG4gICAgICAgIHBhcnNlZFtrZXldLnB1c2godmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gW3ZhbF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBwYXJzZUhlYWRlcnMgZnJvbSAnLi4vaGVscGVycy9wYXJzZUhlYWRlcnMuanMnO1xuXG5jb25zdCAkaW50ZXJuYWxzID0gU3ltYm9sKCdpbnRlcm5hbHMnKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyICYmIFN0cmluZyhoZWFkZXIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAobm9ybWFsaXplVmFsdWUpIDogU3RyaW5nKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUb2tlbnMoc3RyKSB7XG4gIGNvbnN0IHRva2VucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IHRva2Vuc1JFID0gLyhbXlxccyw7PV0rKVxccyooPzo9XFxzKihbXiw7XSspKT8vZztcbiAgbGV0IG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSB0b2tlbnNSRS5leGVjKHN0cikpKSB7XG4gICAgdG9rZW5zW21hdGNoWzFdXSA9IG1hdGNoWzJdO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuY29uc3QgaXNWYWxpZEhlYWRlck5hbWUgPSAoc3RyKSA9PiAvXlstX2EtekEtWjAtOV5gfH4sISMkJSYnKisuXSskLy50ZXN0KHN0ci50cmltKCkpO1xuXG5mdW5jdGlvbiBtYXRjaEhlYWRlclZhbHVlKGNvbnRleHQsIHZhbHVlLCBoZWFkZXIsIGZpbHRlciwgaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcywgdmFsdWUsIGhlYWRlcik7XG4gIH1cblxuICBpZiAoaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gICAgdmFsdWUgPSBoZWFkZXI7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlKSkgcmV0dXJuO1xuXG4gIGlmICh1dGlscy5pc1N0cmluZyhmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XG4gIH1cblxuICBpZiAodXRpbHMuaXNSZWdFeHAoZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIudGVzdCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0SGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyLnRyaW0oKVxuICAgIC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyhbYS16XFxkXSkoXFx3KikvZywgKHcsIGNoYXIsIHN0cikgPT4ge1xuICAgICAgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKSArIHN0cjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRBY2Nlc3NvcnMob2JqLCBoZWFkZXIpIHtcbiAgY29uc3QgYWNjZXNzb3JOYW1lID0gdXRpbHMudG9DYW1lbENhc2UoJyAnICsgaGVhZGVyKTtcblxuICBbJ2dldCcsICdzZXQnLCAnaGFzJ10uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBtZXRob2ROYW1lICsgYWNjZXNzb3JOYW1lLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIGhlYWRlciwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5jbGFzcyBBeGlvc0hlYWRlcnMge1xuICBjb25zdHJ1Y3RvcihoZWFkZXJzKSB7XG4gICAgaGVhZGVycyAmJiB0aGlzLnNldChoZWFkZXJzKTtcbiAgfVxuXG4gIHNldChoZWFkZXIsIHZhbHVlT3JSZXdyaXRlLCByZXdyaXRlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFsSGVhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGVhZGVyIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBsSGVhZGVyKTtcblxuICAgICAgaWYoIWtleSB8fCBzZWxmW2tleV0gPT09IHVuZGVmaW5lZCB8fCBfcmV3cml0ZSA9PT0gdHJ1ZSB8fCAoX3Jld3JpdGUgPT09IHVuZGVmaW5lZCAmJiBzZWxmW2tleV0gIT09IGZhbHNlKSkge1xuICAgICAgICBzZWxmW2tleSB8fCBfaGVhZGVyXSA9IG5vcm1hbGl6ZVZhbHVlKF92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGVhZGVycyA9IChoZWFkZXJzLCBfcmV3cml0ZSkgPT5cbiAgICAgIHV0aWxzLmZvckVhY2goaGVhZGVycywgKF92YWx1ZSwgX2hlYWRlcikgPT4gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpKTtcblxuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KGhlYWRlcikgfHwgaGVhZGVyIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgc2V0SGVhZGVycyhoZWFkZXIsIHZhbHVlT3JSZXdyaXRlKVxuICAgIH0gZWxzZSBpZih1dGlscy5pc1N0cmluZyhoZWFkZXIpICYmIChoZWFkZXIgPSBoZWFkZXIudHJpbSgpKSAmJiAhaXNWYWxpZEhlYWRlck5hbWUoaGVhZGVyKSkge1xuICAgICAgc2V0SGVhZGVycyhwYXJzZUhlYWRlcnMoaGVhZGVyKSwgdmFsdWVPclJld3JpdGUpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoaGVhZGVyKSAmJiB1dGlscy5pc0l0ZXJhYmxlKGhlYWRlcikpIHtcbiAgICAgIGxldCBvYmogPSB7fSwgZGVzdCwga2V5O1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBoZWFkZXIpIHtcbiAgICAgICAgaWYgKCF1dGlscy5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgIHRocm93IFR5cGVFcnJvcignT2JqZWN0IGl0ZXJhdG9yIG11c3QgcmV0dXJuIGEga2V5LXZhbHVlIHBhaXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9ialtrZXkgPSBlbnRyeVswXV0gPSAoZGVzdCA9IG9ialtrZXldKSA/XG4gICAgICAgICAgKHV0aWxzLmlzQXJyYXkoZGVzdCkgPyBbLi4uZGVzdCwgZW50cnlbMV1dIDogW2Rlc3QsIGVudHJ5WzFdXSkgOiBlbnRyeVsxXTtcbiAgICAgIH1cblxuICAgICAgc2V0SGVhZGVycyhvYmosIHZhbHVlT3JSZXdyaXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIgIT0gbnVsbCAmJiBzZXRIZWFkZXIodmFsdWVPclJld3JpdGUsIGhlYWRlciwgcmV3cml0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoaGVhZGVyLCBwYXJzZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcblxuICAgICAgICBpZiAoIXBhcnNlcikge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZXIgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbnModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuY2FsbCh0aGlzLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1JlZ0V4cChwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5leGVjKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcnNlciBtdXN0IGJlIGJvb2xlYW58cmVnZXhwfGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICByZXR1cm4gISEoa2V5ICYmIHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRlbGV0ZShoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlSGVhZGVyKF9oZWFkZXIpIHtcbiAgICAgIF9oZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmIChfaGVhZGVyKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgX2hlYWRlcik7XG5cbiAgICAgICAgaWYgKGtleSAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZShzZWxmLCBzZWxmW2tleV0sIGtleSwgbWF0Y2hlcikpKSB7XG4gICAgICAgICAgZGVsZXRlIHNlbGZba2V5XTtcblxuICAgICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXkoaGVhZGVyKSkge1xuICAgICAgaGVhZGVyLmZvckVhY2goZGVsZXRlSGVhZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlSGVhZGVyKGhlYWRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cblxuICBjbGVhcihtYXRjaGVyKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZighbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyLCB0cnVlKSkge1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIG5vcm1hbGl6ZShmb3JtYXQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KGhlYWRlcnMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgc2VsZltrZXldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBmb3JtYXQgPyBmb3JtYXRIZWFkZXIoaGVhZGVyKSA6IFN0cmluZyhoZWFkZXIpLnRyaW0oKTtcblxuICAgICAgaWYgKG5vcm1hbGl6ZWQgIT09IGhlYWRlcikge1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgfVxuXG4gICAgICBzZWxmW25vcm1hbGl6ZWRdID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuXG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWRdID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29uY2F0KC4uLnRhcmdldHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5jb25jYXQodGhpcywgLi4udGFyZ2V0cyk7XG4gIH1cblxuICB0b0pTT04oYXNTdHJpbmdzKSB7XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlICYmIChvYmpbaGVhZGVyXSA9IGFzU3RyaW5ncyAmJiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKS5tYXAoKFtoZWFkZXIsIHZhbHVlXSkgPT4gaGVhZGVyICsgJzogJyArIHZhbHVlKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIGdldFNldENvb2tpZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCJzZXQtY29va2llXCIpIHx8IFtdO1xuICB9XG5cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiAnQXhpb3NIZWFkZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgdGhpcyA/IHRoaW5nIDogbmV3IHRoaXModGhpbmcpO1xuICB9XG5cbiAgc3RhdGljIGNvbmNhdChmaXJzdCwgLi4udGFyZ2V0cykge1xuICAgIGNvbnN0IGNvbXB1dGVkID0gbmV3IHRoaXMoZmlyc3QpO1xuXG4gICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGNvbXB1dGVkLnNldCh0YXJnZXQpKTtcblxuICAgIHJldHVybiBjb21wdXRlZDtcbiAgfVxuXG4gIHN0YXRpYyBhY2Nlc3NvcihoZWFkZXIpIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzWyRpbnRlcm5hbHNdID0gKHRoaXNbJGludGVybmFsc10gPSB7XG4gICAgICBhY2Nlc3NvcnM6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSBpbnRlcm5hbHMuYWNjZXNzb3JzO1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFhY2Nlc3NvcnNbbEhlYWRlcl0pIHtcbiAgICAgICAgYnVpbGRBY2Nlc3NvcnMocHJvdG90eXBlLCBfaGVhZGVyKTtcbiAgICAgICAgYWNjZXNzb3JzW2xIZWFkZXJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlscy5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuZm9yRWFjaChkZWZpbmVBY2Nlc3NvcikgOiBkZWZpbmVBY2Nlc3NvcihoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFsnQ29udGVudC1UeXBlJywgJ0NvbnRlbnQtTGVuZ3RoJywgJ0FjY2VwdCcsICdBY2NlcHQtRW5jb2RpbmcnLCAnVXNlci1BZ2VudCcsICdBdXRob3JpemF0aW9uJ10pO1xuXG4vLyByZXNlcnZlZCBuYW1lcyBob3RmaXhcbnV0aWxzLnJlZHVjZURlc2NyaXB0b3JzKEF4aW9zSGVhZGVycy5wcm90b3R5cGUsICh7dmFsdWV9LCBrZXkpID0+IHtcbiAgbGV0IG1hcHBlZCA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpOyAvLyBtYXAgYHNldGAgPT4gYFNldGBcbiAgcmV0dXJuIHtcbiAgICBnZXQ6ICgpID0+IHZhbHVlLFxuICAgIHNldChoZWFkZXJWYWx1ZSkge1xuICAgICAgdGhpc1ttYXBwZWRdID0gaGVhZGVyVmFsdWU7XG4gICAgfVxuICB9XG59KTtcblxudXRpbHMuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0hlYWRlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHBhcmFtIHs/T2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2Ugb2JqZWN0XG4gKlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGZucywgcmVzcG9uc2UpIHtcbiAgY29uc3QgY29uZmlnID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgY29uc3QgY29udGV4dCA9IHJlc3BvbnNlIHx8IGNvbmZpZztcbiAgY29uc3QgaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbnRleHQuaGVhZGVycyk7XG4gIGxldCBkYXRhID0gY29udGV4dC5kYXRhO1xuXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb25maWcsIGRhdGEsIGhlYWRlcnMubm9ybWFsaXplKCksIHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzIDogdW5kZWZpbmVkKTtcbiAgfSk7XG5cbiAgaGVhZGVycy5ub3JtYWxpemUoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxlZEVycm9yYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3Q9fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gcmVxdWVzdCBUaGUgcmVxdWVzdC5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsZWRFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBBeGlvc0Vycm9yLmNhbGwodGhpcywgbWVzc2FnZSA9PSBudWxsID8gJ2NhbmNlbGVkJyA6IG1lc3NhZ2UsIEF4aW9zRXJyb3IuRVJSX0NBTkNFTEVELCBjb25maWcsIHJlcXVlc3QpO1xuICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG59XG5cbnV0aWxzLmluaGVyaXRzKENhbmNlbGVkRXJyb3IsIEF4aW9zRXJyb3IsIHtcbiAgX19DQU5DRUxfXzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGVkRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gVGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICBjb25zdCB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgW0F4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0VdW01hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAtIDRdLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VQcm90b2NvbCh1cmwpIHtcbiAgY29uc3QgbWF0Y2ggPSAvXihbLStcXHddezEsMjV9KSg6P1xcL1xcL3w6KS8uZXhlYyh1cmwpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGRhdGEgbWF4UmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtzYW1wbGVzQ291bnQ9IDEwXVxuICogQHBhcmFtIHtOdW1iZXJ9IFttaW49IDEwMDBdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHNwZWVkb21ldGVyKHNhbXBsZXNDb3VudCwgbWluKSB7XG4gIHNhbXBsZXNDb3VudCA9IHNhbXBsZXNDb3VudCB8fCAxMDtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgY29uc3QgdGltZXN0YW1wcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBsZXQgaGVhZCA9IDA7XG4gIGxldCB0YWlsID0gMDtcbiAgbGV0IGZpcnN0U2FtcGxlVFM7XG5cbiAgbWluID0gbWluICE9PSB1bmRlZmluZWQgPyBtaW4gOiAxMDAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiBwdXNoKGNodW5rTGVuZ3RoKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHRpbWVzdGFtcHNbdGFpbF07XG5cbiAgICBpZiAoIWZpcnN0U2FtcGxlVFMpIHtcbiAgICAgIGZpcnN0U2FtcGxlVFMgPSBub3c7XG4gICAgfVxuXG4gICAgYnl0ZXNbaGVhZF0gPSBjaHVua0xlbmd0aDtcbiAgICB0aW1lc3RhbXBzW2hlYWRdID0gbm93O1xuXG4gICAgbGV0IGkgPSB0YWlsO1xuICAgIGxldCBieXRlc0NvdW50ID0gMDtcblxuICAgIHdoaWxlIChpICE9PSBoZWFkKSB7XG4gICAgICBieXRlc0NvdW50ICs9IGJ5dGVzW2krK107XG4gICAgICBpID0gaSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBoZWFkID0gKGhlYWQgKyAxKSAlIHNhbXBsZXNDb3VudDtcblxuICAgIGlmIChoZWFkID09PSB0YWlsKSB7XG4gICAgICB0YWlsID0gKHRhaWwgKyAxKSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBpZiAobm93IC0gZmlyc3RTYW1wbGVUUyA8IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhc3NlZCA9IHN0YXJ0ZWRBdCAmJiBub3cgLSBzdGFydGVkQXQ7XG5cbiAgICByZXR1cm4gcGFzc2VkID8gTWF0aC5yb3VuZChieXRlc0NvdW50ICogMTAwMCAvIHBhc3NlZCkgOiB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWVkb21ldGVyO1xuIiwiLyoqXG4gKiBUaHJvdHRsZSBkZWNvcmF0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge051bWJlcn0gZnJlcVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCBmcmVxKSB7XG4gIGxldCB0aW1lc3RhbXAgPSAwO1xuICBsZXQgdGhyZXNob2xkID0gMTAwMCAvIGZyZXE7XG4gIGxldCBsYXN0QXJncztcbiAgbGV0IHRpbWVyO1xuXG4gIGNvbnN0IGludm9rZSA9IChhcmdzLCBub3cgPSBEYXRlLm5vdygpKSA9PiB7XG4gICAgdGltZXN0YW1wID0gbm93O1xuICAgIGxhc3RBcmdzID0gbnVsbDtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9XG5cbiAgY29uc3QgdGhyb3R0bGVkID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHBhc3NlZCA9IG5vdyAtIHRpbWVzdGFtcDtcbiAgICBpZiAoIHBhc3NlZCA+PSB0aHJlc2hvbGQpIHtcbiAgICAgIGludm9rZShhcmdzLCBub3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgICBpZiAoIXRpbWVyKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICAgIGludm9rZShsYXN0QXJncylcbiAgICAgICAgfSwgdGhyZXNob2xkIC0gcGFzc2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBmbHVzaCA9ICgpID0+IGxhc3RBcmdzICYmIGludm9rZShsYXN0QXJncyk7XG5cbiAgcmV0dXJuIFt0aHJvdHRsZWQsIGZsdXNoXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhyb3R0bGU7XG4iLCJpbXBvcnQgc3BlZWRvbWV0ZXIgZnJvbSBcIi4vc3BlZWRvbWV0ZXIuanNcIjtcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwiLi90aHJvdHRsZS5qc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi91dGlscy5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NFdmVudFJlZHVjZXIgPSAobGlzdGVuZXIsIGlzRG93bmxvYWRTdHJlYW0sIGZyZXEgPSAzKSA9PiB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG5cbiAgcmV0dXJuIHRocm90dGxlKGUgPT4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm9ncmVzc0J5dGVzID0gbG9hZGVkIC0gYnl0ZXNOb3RpZmllZDtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBsb2FkZWQgPD0gdG90YWw7XG5cbiAgICBieXRlc05vdGlmaWVkID0gbG9hZGVkO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxvYWRlZCxcbiAgICAgIHRvdGFsLFxuICAgICAgcHJvZ3Jlc3M6IHRvdGFsID8gKGxvYWRlZCAvIHRvdGFsKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ5dGVzOiBwcm9ncmVzc0J5dGVzLFxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBlc3RpbWF0ZWQ6IHJhdGUgJiYgdG90YWwgJiYgaW5SYW5nZSA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBsZW5ndGhDb21wdXRhYmxlOiB0b3RhbCAhPSBudWxsLFxuICAgICAgW2lzRG93bmxvYWRTdHJlYW0gPyAnZG93bmxvYWQnIDogJ3VwbG9hZCddOiB0cnVlXG4gICAgfTtcblxuICAgIGxpc3RlbmVyKGRhdGEpO1xuICB9LCBmcmVxKTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzRXZlbnREZWNvcmF0b3IgPSAodG90YWwsIHRocm90dGxlZCkgPT4ge1xuICBjb25zdCBsZW5ndGhDb21wdXRhYmxlID0gdG90YWwgIT0gbnVsbDtcblxuICByZXR1cm4gWyhsb2FkZWQpID0+IHRocm90dGxlZFswXSh7XG4gICAgbGVuZ3RoQ29tcHV0YWJsZSxcbiAgICB0b3RhbCxcbiAgICBsb2FkZWRcbiAgfSksIHRocm90dGxlZFsxXV07XG59XG5cbmV4cG9ydCBjb25zdCBhc3luY0RlY29yYXRvciA9IChmbikgPT4gKC4uLmFyZ3MpID0+IHV0aWxzLmFzYXAoKCkgPT4gZm4oLi4uYXJncykpO1xuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52ID8gKChvcmlnaW4sIGlzTVNJRSkgPT4gKHVybCkgPT4ge1xuICB1cmwgPSBuZXcgVVJMKHVybCwgcGxhdGZvcm0ub3JpZ2luKTtcblxuICByZXR1cm4gKFxuICAgIG9yaWdpbi5wcm90b2NvbCA9PT0gdXJsLnByb3RvY29sICYmXG4gICAgb3JpZ2luLmhvc3QgPT09IHVybC5ob3N0ICYmXG4gICAgKGlzTVNJRSB8fCBvcmlnaW4ucG9ydCA9PT0gdXJsLnBvcnQpXG4gICk7XG59KShcbiAgbmV3IFVSTChwbGF0Zm9ybS5vcmlnaW4pLFxuICBwbGF0Zm9ybS5uYXZpZ2F0b3IgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChwbGF0Zm9ybS5uYXZpZ2F0b3IudXNlckFnZW50KVxuKSA6ICgpID0+IHRydWU7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICB7XG4gICAgd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBbbmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSldO1xuXG4gICAgICB1dGlscy5pc051bWJlcihleHBpcmVzKSAmJiBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG5cbiAgICAgIHV0aWxzLmlzU3RyaW5nKHBhdGgpICYmIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcblxuICAgICAgdXRpbHMuaXNTdHJpbmcoZG9tYWluKSAmJiBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuXG4gICAgICBzZWN1cmUgPT09IHRydWUgJiYgY29va2llLnB1c2goJ3NlY3VyZScpO1xuXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICB9LFxuXG4gICAgcmVhZChuYW1lKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgIH0sXG5cbiAgICByZW1vdmUobmFtZSkge1xuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICB9XG4gIH1cblxuICA6XG5cbiAgLy8gTm9uLXN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICB7XG4gICAgd3JpdGUoKSB7fSxcbiAgICByZWFkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmUoKSB7fVxuICB9O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLz9cXC8kLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XG5pbXBvcnQgY29tYmluZVVSTHMgZnJvbSAnLi4vaGVscGVycy9jb21iaW5lVVJMcy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCwgYWxsb3dBYnNvbHV0ZVVybHMpIHtcbiAgbGV0IGlzUmVsYXRpdmVVcmwgPSAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpO1xuICBpZiAoYmFzZVVSTCAmJiAoaXNSZWxhdGl2ZVVybCB8fCBhbGxvd0Fic29sdXRlVXJscyA9PSBmYWxzZSkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi9BeGlvc0hlYWRlcnMuanNcIjtcblxuY29uc3QgaGVhZGVyc1RvT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyBpbnN0YW5jZW9mIEF4aW9zSGVhZGVycyA/IHsgLi4udGhpbmcgfSA6IHRoaW5nO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICBjb25zdCBjb25maWcgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSwgcHJvcCwgY2FzZWxlc3MpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlLmNhbGwoe2Nhc2VsZXNzfSwgdGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKGEsIGIsIHByb3AgLCBjYXNlbGVzcykge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiLCBwcm9wICwgY2FzZWxlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhLCBwcm9wICwgY2FzZWxlc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMoYSwgYiwgcHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWVyZ2VNYXAgPSB7XG4gICAgdXJsOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIG1ldGhvZDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBkYXRhOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGJhc2VVUkw6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVxdWVzdDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXNwb25zZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBwYXJhbXNTZXJpYWxpemVyOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dE1lc3NhZ2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhYU1JGVG9rZW46IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYWRhcHRlcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZVR5cGU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkNvb2tpZU5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkhlYWRlck5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25VcGxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgZGVjb21wcmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhDb250ZW50TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heEJvZHlMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYmVmb3JlUmVkaXJlY3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNwb3J0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwc0FnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGNhbmNlbFRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHNvY2tldFBhdGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VFbmNvZGluZzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB2YWxpZGF0ZVN0YXR1czogbWVyZ2VEaXJlY3RLZXlzLFxuICAgIGhlYWRlcnM6IChhLCBiICwgcHJvcCkgPT4gbWVyZ2VEZWVwUHJvcGVydGllcyhoZWFkZXJzVG9PYmplY3QoYSksIGhlYWRlcnNUb09iamVjdChiKSxwcm9wLCB0cnVlKVxuICB9O1xuXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnMSwgY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIGNvbnN0IG1lcmdlID0gbWVyZ2VNYXBbcHJvcF0gfHwgbWVyZ2VEZWVwUHJvcGVydGllcztcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IG1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0sIHByb3ApO1xuICAgICh1dGlscy5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cykgfHwgKGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1ZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsImltcG9ydCBwbGF0Zm9ybSBmcm9tIFwiLi4vcGxhdGZvcm0vaW5kZXguanNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBpc1VSTFNhbWVPcmlnaW4gZnJvbSBcIi4vaXNVUkxTYW1lT3JpZ2luLmpzXCI7XG5pbXBvcnQgY29va2llcyBmcm9tIFwiLi9jb29raWVzLmpzXCI7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tIFwiLi4vY29yZS9idWlsZEZ1bGxQYXRoLmpzXCI7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSBcIi4uL2NvcmUvbWVyZ2VDb25maWcuanNcIjtcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzXCI7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSBcIi4vYnVpbGRVUkwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbmZpZykgPT4ge1xuICBjb25zdCBuZXdDb25maWcgPSBtZXJnZUNvbmZpZyh7fSwgY29uZmlnKTtcblxuICBsZXQge2RhdGEsIHdpdGhYU1JGVG9rZW4sIHhzcmZIZWFkZXJOYW1lLCB4c3JmQ29va2llTmFtZSwgaGVhZGVycywgYXV0aH0gPSBuZXdDb25maWc7XG5cbiAgbmV3Q29uZmlnLmhlYWRlcnMgPSBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oaGVhZGVycyk7XG5cbiAgbmV3Q29uZmlnLnVybCA9IGJ1aWxkVVJMKGJ1aWxkRnVsbFBhdGgobmV3Q29uZmlnLmJhc2VVUkwsIG5ld0NvbmZpZy51cmwsIG5ld0NvbmZpZy5hbGxvd0Fic29sdXRlVXJscyksIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKTtcblxuICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gIGlmIChhdXRoKSB7XG4gICAgaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArXG4gICAgICBidG9hKChhdXRoLnVzZXJuYW1lIHx8ICcnKSArICc6JyArIChhdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgucGFzc3dvcmQpKSA6ICcnKSlcbiAgICApO1xuICB9XG5cbiAgbGV0IGNvbnRlbnRUeXBlO1xuXG4gIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpKSB7XG4gICAgaWYgKHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudiB8fCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYpIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUodW5kZWZpbmVkKTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH0gZWxzZSBpZiAoKGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXRDb250ZW50VHlwZSgpKSAhPT0gZmFsc2UpIHtcbiAgICAgIC8vIGZpeCBzZW1pY29sb24gZHVwbGljYXRpb24gaXNzdWUgZm9yIFJlYWN0TmF0aXZlIEZvcm1EYXRhIGltcGxlbWVudGF0aW9uXG4gICAgICBjb25zdCBbdHlwZSwgLi4udG9rZW5zXSA9IGNvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKS5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKS5maWx0ZXIoQm9vbGVhbikgOiBbXTtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoW3R5cGUgfHwgJ211bHRpcGFydC9mb3JtLWRhdGEnLCAuLi50b2tlbnNdLmpvaW4oJzsgJykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB4c3JmIGhlYWRlclxuICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cblxuICBpZiAocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52KSB7XG4gICAgd2l0aFhTUkZUb2tlbiAmJiB1dGlscy5pc0Z1bmN0aW9uKHdpdGhYU1JGVG9rZW4pICYmICh3aXRoWFNSRlRva2VuID0gd2l0aFhTUkZUb2tlbihuZXdDb25maWcpKTtcblxuICAgIGlmICh3aXRoWFNSRlRva2VuIHx8ICh3aXRoWFNSRlRva2VuICE9PSBmYWxzZSAmJiBpc1VSTFNhbWVPcmlnaW4obmV3Q29uZmlnLnVybCkpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IHhzcmZIZWFkZXJOYW1lICYmIHhzcmZDb29raWVOYW1lICYmIGNvb2tpZXMucmVhZCh4c3JmQ29va2llTmFtZSk7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgaGVhZGVycy5zZXQoeHNyZkhlYWRlck5hbWUsIHhzcmZWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0NvbmZpZztcbn1cblxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHNldHRsZSBmcm9tICcuLy4uL2NvcmUvc2V0dGxlLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBwYXJzZVByb3RvY29sIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQge3Byb2dyZXNzRXZlbnRSZWR1Y2VyfSBmcm9tICcuLi9oZWxwZXJzL3Byb2dyZXNzRXZlbnRSZWR1Y2VyLmpzJztcbmltcG9ydCByZXNvbHZlQ29uZmlnIGZyb20gXCIuLi9oZWxwZXJzL3Jlc29sdmVDb25maWcuanNcIjtcblxuY29uc3QgaXNYSFJBZGFwdGVyU3VwcG9ydGVkID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgaXNYSFJBZGFwdGVyU3VwcG9ydGVkICYmIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBjb25zdCBfY29uZmlnID0gcmVzb2x2ZUNvbmZpZyhjb25maWcpO1xuICAgIGxldCByZXF1ZXN0RGF0YSA9IF9jb25maWcuZGF0YTtcbiAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKF9jb25maWcuaGVhZGVycykubm9ybWFsaXplKCk7XG4gICAgbGV0IHtyZXNwb25zZVR5cGUsIG9uVXBsb2FkUHJvZ3Jlc3MsIG9uRG93bmxvYWRQcm9ncmVzc30gPSBfY29uZmlnO1xuICAgIGxldCBvbkNhbmNlbGVkO1xuICAgIGxldCB1cGxvYWRUaHJvdHRsZWQsIGRvd25sb2FkVGhyb3R0bGVkO1xuICAgIGxldCBmbHVzaFVwbG9hZCwgZmx1c2hEb3dubG9hZDtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBmbHVzaFVwbG9hZCAmJiBmbHVzaFVwbG9hZCgpOyAvLyBmbHVzaCBldmVudHNcbiAgICAgIGZsdXNoRG93bmxvYWQgJiYgZmx1c2hEb3dubG9hZCgpOyAvLyBmbHVzaCBldmVudHNcblxuICAgICAgX2NvbmZpZy5jYW5jZWxUb2tlbiAmJiBfY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuXG4gICAgICBfY29uZmlnLnNpZ25hbCAmJiBfY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICByZXF1ZXN0Lm9wZW4oX2NvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgX2NvbmZpZy51cmwsIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBfY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKFxuICAgICAgICAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ICYmIHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nID9cbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKGZ1bmN0aW9uIF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCBmdW5jdGlvbiBfcmVqZWN0KGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoJ29ubG9hZGVuZCcgaW4gcmVxdWVzdCkge1xuICAgICAgLy8gVXNlIG9ubG9hZGVuZCBpZiBhdmFpbGFibGVcbiAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gb25sb2FkZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlIHRvIGVtdWxhdGUgb25sb2FkZW5kXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVhZHlzdGF0ZSBoYW5kbGVyIGlzIGNhbGxpbmcgYmVmb3JlIG9uZXJyb3Igb3Igb250aW1lb3V0IGhhbmRsZXJzLFxuICAgICAgICAvLyBzbyB3ZSBzaG91bGQgY2FsbCBvbmxvYWRlbmQgb24gdGhlIG5leHQgJ3RpY2snXG4gICAgICAgIHNldFRpbWVvdXQob25sb2FkZW5kKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBBeGlvc0Vycm9yLkVDT05OQUJPUlRFRCwgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdOZXR3b3JrIEVycm9yJywgQXhpb3NFcnJvci5FUlJfTkVUV09SSywgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIGxldCB0aW1lb3V0RXJyb3JNZXNzYWdlID0gX2NvbmZpZy50aW1lb3V0ID8gJ3RpbWVvdXQgb2YgJyArIF9jb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBfY29uZmlnLnRyYW5zaXRpb25hbCB8fCB0cmFuc2l0aW9uYWxEZWZhdWx0cztcbiAgICAgIGlmIChfY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IF9jb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICByZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkICYmIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKG51bGwpO1xuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMudG9KU09OKCksIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKF9jb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIV9jb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IF9jb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAob25Eb3dubG9hZFByb2dyZXNzKSB7XG4gICAgICAoW2Rvd25sb2FkVGhyb3R0bGVkLCBmbHVzaERvd25sb2FkXSA9IHByb2dyZXNzRXZlbnRSZWR1Y2VyKG9uRG93bmxvYWRQcm9ncmVzcywgdHJ1ZSkpO1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGRvd25sb2FkVGhyb3R0bGVkKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmIChvblVwbG9hZFByb2dyZXNzICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICAoW3VwbG9hZFRocm90dGxlZCwgZmx1c2hVcGxvYWRdID0gcHJvZ3Jlc3NFdmVudFJlZHVjZXIob25VcGxvYWRQcm9ncmVzcykpO1xuXG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHVwbG9hZFRocm90dGxlZCk7XG5cbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmbHVzaFVwbG9hZCk7XG4gICAgfVxuXG4gICAgaWYgKF9jb25maWcuY2FuY2VsVG9rZW4gfHwgX2NvbmZpZy5zaWduYWwpIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBvbkNhbmNlbGVkID0gY2FuY2VsID0+IHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdCghY2FuY2VsIHx8IGNhbmNlbC50eXBlID8gbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnLCByZXF1ZXN0KSA6IGNhbmNlbCk7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBfY29uZmlnLmNhbmNlbFRva2VuICYmIF9jb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgaWYgKF9jb25maWcuc2lnbmFsKSB7XG4gICAgICAgIF9jb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBfY29uZmlnLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VQcm90b2NvbChfY29uZmlnLnVybCk7XG5cbiAgICBpZiAocHJvdG9jb2wgJiYgcGxhdGZvcm0ucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdVbnN1cHBvcnRlZCBwcm90b2NvbCAnICsgcHJvdG9jb2wgKyAnOicsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSBcIi4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzXCI7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tIFwiLi4vY29yZS9BeGlvc0Vycm9yLmpzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5jb25zdCBjb21wb3NlU2lnbmFscyA9IChzaWduYWxzLCB0aW1lb3V0KSA9PiB7XG4gIGNvbnN0IHtsZW5ndGh9ID0gKHNpZ25hbHMgPSBzaWduYWxzID8gc2lnbmFscy5maWx0ZXIoQm9vbGVhbikgOiBbXSk7XG5cbiAgaWYgKHRpbWVvdXQgfHwgbGVuZ3RoKSB7XG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBsZXQgYWJvcnRlZDtcblxuICAgIGNvbnN0IG9uYWJvcnQgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBpZiAoIWFib3J0ZWQpIHtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGNvbnN0IGVyciA9IHJlYXNvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVhc29uIDogdGhpcy5yZWFzb247XG4gICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoZXJyIGluc3RhbmNlb2YgQXhpb3NFcnJvciA/IGVyciA6IG5ldyBDYW5jZWxlZEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBlcnIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGltZXIgPSB0aW1lb3V0ICYmIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgb25hYm9ydChuZXcgQXhpb3NFcnJvcihgdGltZW91dCAke3RpbWVvdXR9IG9mIG1zIGV4Y2VlZGVkYCwgQXhpb3NFcnJvci5FVElNRURPVVQpKVxuICAgIH0sIHRpbWVvdXQpXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIGlmIChzaWduYWxzKSB7XG4gICAgICAgIHRpbWVyICYmIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgc2lnbmFscy5mb3JFYWNoKHNpZ25hbCA9PiB7XG4gICAgICAgICAgc2lnbmFsLnVuc3Vic2NyaWJlID8gc2lnbmFsLnVuc3Vic2NyaWJlKG9uYWJvcnQpIDogc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzaWduYWxzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaWduYWxzLmZvckVhY2goKHNpZ25hbCkgPT4gc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCkpO1xuXG4gICAgY29uc3Qge3NpZ25hbH0gPSBjb250cm9sbGVyO1xuXG4gICAgc2lnbmFsLnVuc3Vic2NyaWJlID0gKCkgPT4gdXRpbHMuYXNhcCh1bnN1YnNjcmliZSk7XG5cbiAgICByZXR1cm4gc2lnbmFsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2VTaWduYWxzO1xuIiwiXG5leHBvcnQgY29uc3Qgc3RyZWFtQ2h1bmsgPSBmdW5jdGlvbiogKGNodW5rLCBjaHVua1NpemUpIHtcbiAgbGV0IGxlbiA9IGNodW5rLmJ5dGVMZW5ndGg7XG5cbiAgaWYgKCFjaHVua1NpemUgfHwgbGVuIDwgY2h1bmtTaXplKSB7XG4gICAgeWllbGQgY2h1bms7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHBvcyA9IDA7XG4gIGxldCBlbmQ7XG5cbiAgd2hpbGUgKHBvcyA8IGxlbikge1xuICAgIGVuZCA9IHBvcyArIGNodW5rU2l6ZTtcbiAgICB5aWVsZCBjaHVuay5zbGljZShwb3MsIGVuZCk7XG4gICAgcG9zID0gZW5kO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWFkQnl0ZXMgPSBhc3luYyBmdW5jdGlvbiogKGl0ZXJhYmxlLCBjaHVua1NpemUpIHtcbiAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiByZWFkU3RyZWFtKGl0ZXJhYmxlKSkge1xuICAgIHlpZWxkKiBzdHJlYW1DaHVuayhjaHVuaywgY2h1bmtTaXplKTtcbiAgfVxufVxuXG5jb25zdCByZWFkU3RyZWFtID0gYXN5bmMgZnVuY3Rpb24qIChzdHJlYW0pIHtcbiAgaWYgKHN0cmVhbVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHtcbiAgICB5aWVsZCogc3RyZWFtO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgdHJ5IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB7ZG9uZSwgdmFsdWV9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IHJlYWRlci5jYW5jZWwoKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tTdHJlYW0gPSAoc3RyZWFtLCBjaHVua1NpemUsIG9uUHJvZ3Jlc3MsIG9uRmluaXNoKSA9PiB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gcmVhZEJ5dGVzKHN0cmVhbSwgY2h1bmtTaXplKTtcblxuICBsZXQgYnl0ZXMgPSAwO1xuICBsZXQgZG9uZTtcbiAgbGV0IF9vbkZpbmlzaCA9IChlKSA9PiB7XG4gICAgaWYgKCFkb25lKSB7XG4gICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIG9uRmluaXNoICYmIG9uRmluaXNoKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW0oe1xuICAgIGFzeW5jIHB1bGwoY29udHJvbGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge2RvbmUsIHZhbHVlfSA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgX29uRmluaXNoKCk7XG4gICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSB2YWx1ZS5ieXRlTGVuZ3RoO1xuICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgIGxldCBsb2FkZWRCeXRlcyA9IGJ5dGVzICs9IGxlbjtcbiAgICAgICAgICBvblByb2dyZXNzKGxvYWRlZEJ5dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLmVucXVldWUobmV3IFVpbnQ4QXJyYXkodmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfb25GaW5pc2goZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2FuY2VsKHJlYXNvbikge1xuICAgICAgX29uRmluaXNoKHJlYXNvbik7XG4gICAgICByZXR1cm4gaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgfVxuICB9LCB7XG4gICAgaGlnaFdhdGVyTWFyazogMlxuICB9KVxufVxuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gXCIuLi9wbGF0Zm9ybS9pbmRleC5qc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSBcIi4uL2NvcmUvQXhpb3NFcnJvci5qc1wiO1xuaW1wb3J0IGNvbXBvc2VTaWduYWxzIGZyb20gXCIuLi9oZWxwZXJzL2NvbXBvc2VTaWduYWxzLmpzXCI7XG5pbXBvcnQge3RyYWNrU3RyZWFtfSBmcm9tIFwiLi4vaGVscGVycy90cmFja1N0cmVhbS5qc1wiO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi4vY29yZS9BeGlvc0hlYWRlcnMuanNcIjtcbmltcG9ydCB7cHJvZ3Jlc3NFdmVudFJlZHVjZXIsIHByb2dyZXNzRXZlbnREZWNvcmF0b3IsIGFzeW5jRGVjb3JhdG9yfSBmcm9tIFwiLi4vaGVscGVycy9wcm9ncmVzc0V2ZW50UmVkdWNlci5qc1wiO1xuaW1wb3J0IHJlc29sdmVDb25maWcgZnJvbSBcIi4uL2hlbHBlcnMvcmVzb2x2ZUNvbmZpZy5qc1wiO1xuaW1wb3J0IHNldHRsZSBmcm9tIFwiLi4vY29yZS9zZXR0bGUuanNcIjtcblxuY29uc3QgaXNGZXRjaFN1cHBvcnRlZCA9IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgUmVzcG9uc2UgPT09ICdmdW5jdGlvbic7XG5jb25zdCBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkID0gaXNGZXRjaFN1cHBvcnRlZCAmJiB0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09ICdmdW5jdGlvbic7XG5cbi8vIHVzZWQgb25seSBpbnNpZGUgdGhlIGZldGNoIGFkYXB0ZXJcbmNvbnN0IGVuY29kZVRleHQgPSBpc0ZldGNoU3VwcG9ydGVkICYmICh0eXBlb2YgVGV4dEVuY29kZXIgPT09ICdmdW5jdGlvbicgP1xuICAgICgoZW5jb2RlcikgPT4gKHN0cikgPT4gZW5jb2Rlci5lbmNvZGUoc3RyKSkobmV3IFRleHRFbmNvZGVyKCkpIDpcbiAgICBhc3luYyAoc3RyKSA9PiBuZXcgVWludDhBcnJheShhd2FpdCBuZXcgUmVzcG9uc2Uoc3RyKS5hcnJheUJ1ZmZlcigpKVxuKTtcblxuY29uc3QgdGVzdCA9IChmbiwgLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiAhIWZuKC4uLmFyZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3Qgc3VwcG9ydHNSZXF1ZXN0U3RyZWFtID0gaXNSZWFkYWJsZVN0cmVhbVN1cHBvcnRlZCAmJiB0ZXN0KCgpID0+IHtcbiAgbGV0IGR1cGxleEFjY2Vzc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgaGFzQ29udGVudFR5cGUgPSBuZXcgUmVxdWVzdChwbGF0Zm9ybS5vcmlnaW4sIHtcbiAgICBib2R5OiBuZXcgUmVhZGFibGVTdHJlYW0oKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBnZXQgZHVwbGV4KCkge1xuICAgICAgZHVwbGV4QWNjZXNzZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuICdoYWxmJztcbiAgICB9LFxuICB9KS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJyk7XG5cbiAgcmV0dXJuIGR1cGxleEFjY2Vzc2VkICYmICFoYXNDb250ZW50VHlwZTtcbn0pO1xuXG5jb25zdCBERUZBVUxUX0NIVU5LX1NJWkUgPSA2NCAqIDEwMjQ7XG5cbmNvbnN0IHN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gPSBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkICYmXG4gIHRlc3QoKCkgPT4gdXRpbHMuaXNSZWFkYWJsZVN0cmVhbShuZXcgUmVzcG9uc2UoJycpLmJvZHkpKTtcblxuXG5jb25zdCByZXNvbHZlcnMgPSB7XG4gIHN0cmVhbTogc3VwcG9ydHNSZXNwb25zZVN0cmVhbSAmJiAoKHJlcykgPT4gcmVzLmJvZHkpXG59O1xuXG5pc0ZldGNoU3VwcG9ydGVkICYmICgoKHJlcykgPT4ge1xuICBbJ3RleHQnLCAnYXJyYXlCdWZmZXInLCAnYmxvYicsICdmb3JtRGF0YScsICdzdHJlYW0nXS5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICFyZXNvbHZlcnNbdHlwZV0gJiYgKHJlc29sdmVyc1t0eXBlXSA9IHV0aWxzLmlzRnVuY3Rpb24ocmVzW3R5cGVdKSA/IChyZXMpID0+IHJlc1t0eXBlXSgpIDpcbiAgICAgIChfLCBjb25maWcpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoYFJlc3BvbnNlIHR5cGUgJyR7dHlwZX0nIGlzIG5vdCBzdXBwb3J0ZWRgLCBBeGlvc0Vycm9yLkVSUl9OT1RfU1VQUE9SVCwgY29uZmlnKTtcbiAgICAgIH0pXG4gIH0pO1xufSkobmV3IFJlc3BvbnNlKSk7XG5cbmNvbnN0IGdldEJvZHlMZW5ndGggPSBhc3luYyAoYm9keSkgPT4ge1xuICBpZiAoYm9keSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZih1dGlscy5pc0Jsb2IoYm9keSkpIHtcbiAgICByZXR1cm4gYm9keS5zaXplO1xuICB9XG5cbiAgaWYodXRpbHMuaXNTcGVjQ29tcGxpYW50Rm9ybShib2R5KSkge1xuICAgIGNvbnN0IF9yZXF1ZXN0ID0gbmV3IFJlcXVlc3QocGxhdGZvcm0ub3JpZ2luLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHksXG4gICAgfSk7XG4gICAgcmV0dXJuIChhd2FpdCBfcmVxdWVzdC5hcnJheUJ1ZmZlcigpKS5ieXRlTGVuZ3RoO1xuICB9XG5cbiAgaWYodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkgfHwgdXRpbHMuaXNBcnJheUJ1ZmZlcihib2R5KSkge1xuICAgIHJldHVybiBib2R5LmJ5dGVMZW5ndGg7XG4gIH1cblxuICBpZih1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhib2R5KSkge1xuICAgIGJvZHkgPSBib2R5ICsgJyc7XG4gIH1cblxuICBpZih1dGlscy5pc1N0cmluZyhib2R5KSkge1xuICAgIHJldHVybiAoYXdhaXQgZW5jb2RlVGV4dChib2R5KSkuYnl0ZUxlbmd0aDtcbiAgfVxufVxuXG5jb25zdCByZXNvbHZlQm9keUxlbmd0aCA9IGFzeW5jIChoZWFkZXJzLCBib2R5KSA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IHV0aWxzLnRvRmluaXRlTnVtYmVyKGhlYWRlcnMuZ2V0Q29udGVudExlbmd0aCgpKTtcblxuICByZXR1cm4gbGVuZ3RoID09IG51bGwgPyBnZXRCb2R5TGVuZ3RoKGJvZHkpIDogbGVuZ3RoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0ZldGNoU3VwcG9ydGVkICYmIChhc3luYyAoY29uZmlnKSA9PiB7XG4gIGxldCB7XG4gICAgdXJsLFxuICAgIG1ldGhvZCxcbiAgICBkYXRhLFxuICAgIHNpZ25hbCxcbiAgICBjYW5jZWxUb2tlbixcbiAgICB0aW1lb3V0LFxuICAgIG9uRG93bmxvYWRQcm9ncmVzcyxcbiAgICBvblVwbG9hZFByb2dyZXNzLFxuICAgIHJlc3BvbnNlVHlwZSxcbiAgICBoZWFkZXJzLFxuICAgIHdpdGhDcmVkZW50aWFscyA9ICdzYW1lLW9yaWdpbicsXG4gICAgZmV0Y2hPcHRpb25zXG4gIH0gPSByZXNvbHZlQ29uZmlnKGNvbmZpZyk7XG5cbiAgcmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlID8gKHJlc3BvbnNlVHlwZSArICcnKS50b0xvd2VyQ2FzZSgpIDogJ3RleHQnO1xuXG4gIGxldCBjb21wb3NlZFNpZ25hbCA9IGNvbXBvc2VTaWduYWxzKFtzaWduYWwsIGNhbmNlbFRva2VuICYmIGNhbmNlbFRva2VuLnRvQWJvcnRTaWduYWwoKV0sIHRpbWVvdXQpO1xuXG4gIGxldCByZXF1ZXN0O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gY29tcG9zZWRTaWduYWwgJiYgY29tcG9zZWRTaWduYWwudW5zdWJzY3JpYmUgJiYgKCgpID0+IHtcbiAgICAgIGNvbXBvc2VkU2lnbmFsLnVuc3Vic2NyaWJlKCk7XG4gIH0pO1xuXG4gIGxldCByZXF1ZXN0Q29udGVudExlbmd0aDtcblxuICB0cnkge1xuICAgIGlmIChcbiAgICAgIG9uVXBsb2FkUHJvZ3Jlc3MgJiYgc3VwcG9ydHNSZXF1ZXN0U3RyZWFtICYmIG1ldGhvZCAhPT0gJ2dldCcgJiYgbWV0aG9kICE9PSAnaGVhZCcgJiZcbiAgICAgIChyZXF1ZXN0Q29udGVudExlbmd0aCA9IGF3YWl0IHJlc29sdmVCb2R5TGVuZ3RoKGhlYWRlcnMsIGRhdGEpKSAhPT0gMFxuICAgICkge1xuICAgICAgbGV0IF9yZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICBkdXBsZXg6IFwiaGFsZlwiXG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUeXBlSGVhZGVyO1xuXG4gICAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSAmJiAoY29udGVudFR5cGVIZWFkZXIgPSBfcmVxdWVzdC5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpKSB7XG4gICAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoY29udGVudFR5cGVIZWFkZXIpXG4gICAgICB9XG5cbiAgICAgIGlmIChfcmVxdWVzdC5ib2R5KSB7XG4gICAgICAgIGNvbnN0IFtvblByb2dyZXNzLCBmbHVzaF0gPSBwcm9ncmVzc0V2ZW50RGVjb3JhdG9yKFxuICAgICAgICAgIHJlcXVlc3RDb250ZW50TGVuZ3RoLFxuICAgICAgICAgIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGFzeW5jRGVjb3JhdG9yKG9uVXBsb2FkUHJvZ3Jlc3MpKVxuICAgICAgICApO1xuXG4gICAgICAgIGRhdGEgPSB0cmFja1N0cmVhbShfcmVxdWVzdC5ib2R5LCBERUZBVUxUX0NIVU5LX1NJWkUsIG9uUHJvZ3Jlc3MsIGZsdXNoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXV0aWxzLmlzU3RyaW5nKHdpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHdpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdvbWl0JztcbiAgICB9XG5cbiAgICAvLyBDbG91ZGZsYXJlIFdvcmtlcnMgdGhyb3dzIHdoZW4gY3JlZGVudGlhbHMgYXJlIGRlZmluZWRcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Nsb3VkZmxhcmUvd29ya2VyZC9pc3N1ZXMvOTAyXG4gICAgY29uc3QgaXNDcmVkZW50aWFsc1N1cHBvcnRlZCA9IFwiY3JlZGVudGlhbHNcIiBpbiBSZXF1ZXN0LnByb3RvdHlwZTtcbiAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XG4gICAgICAuLi5mZXRjaE9wdGlvbnMsXG4gICAgICBzaWduYWw6IGNvbXBvc2VkU2lnbmFsLFxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMubm9ybWFsaXplKCkudG9KU09OKCksXG4gICAgICBib2R5OiBkYXRhLFxuICAgICAgZHVwbGV4OiBcImhhbGZcIixcbiAgICAgIGNyZWRlbnRpYWxzOiBpc0NyZWRlbnRpYWxzU3VwcG9ydGVkID8gd2l0aENyZWRlbnRpYWxzIDogdW5kZWZpbmVkXG4gICAgfSk7XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0LCBmZXRjaE9wdGlvbnMpO1xuXG4gICAgY29uc3QgaXNTdHJlYW1SZXNwb25zZSA9IHN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gJiYgKHJlc3BvbnNlVHlwZSA9PT0gJ3N0cmVhbScgfHwgcmVzcG9uc2VUeXBlID09PSAncmVzcG9uc2UnKTtcblxuICAgIGlmIChzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtICYmIChvbkRvd25sb2FkUHJvZ3Jlc3MgfHwgKGlzU3RyZWFtUmVzcG9uc2UgJiYgdW5zdWJzY3JpYmUpKSkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG4gICAgICBbJ3N0YXR1cycsICdzdGF0dXNUZXh0JywgJ2hlYWRlcnMnXS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICBvcHRpb25zW3Byb3BdID0gcmVzcG9uc2VbcHJvcF07XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzcG9uc2VDb250ZW50TGVuZ3RoID0gdXRpbHMudG9GaW5pdGVOdW1iZXIocmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtbGVuZ3RoJykpO1xuXG4gICAgICBjb25zdCBbb25Qcm9ncmVzcywgZmx1c2hdID0gb25Eb3dubG9hZFByb2dyZXNzICYmIHByb2dyZXNzRXZlbnREZWNvcmF0b3IoXG4gICAgICAgIHJlc3BvbnNlQ29udGVudExlbmd0aCxcbiAgICAgICAgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoYXN5bmNEZWNvcmF0b3Iob25Eb3dubG9hZFByb2dyZXNzKSwgdHJ1ZSlcbiAgICAgICkgfHwgW107XG5cbiAgICAgIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKFxuICAgICAgICB0cmFja1N0cmVhbShyZXNwb25zZS5ib2R5LCBERUZBVUxUX0NIVU5LX1NJWkUsIG9uUHJvZ3Jlc3MsICgpID0+IHtcbiAgICAgICAgICBmbHVzaCAmJiBmbHVzaCgpO1xuICAgICAgICAgIHVuc3Vic2NyaWJlICYmIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0pLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIHJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZSB8fCAndGV4dCc7XG5cbiAgICBsZXQgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzb2x2ZXJzW3V0aWxzLmZpbmRLZXkocmVzb2x2ZXJzLCByZXNwb25zZVR5cGUpIHx8ICd0ZXh0J10ocmVzcG9uc2UsIGNvbmZpZyk7XG5cbiAgICAhaXNTdHJlYW1SZXNwb25zZSAmJiB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xuXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBoZWFkZXJzOiBBeGlvc0hlYWRlcnMuZnJvbShyZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdFxuICAgICAgfSlcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xuXG4gICAgaWYgKGVyciAmJiBlcnIubmFtZSA9PT0gJ1R5cGVFcnJvcicgJiYgL0xvYWQgZmFpbGVkfGZldGNoL2kudGVzdChlcnIubWVzc2FnZSkpIHtcbiAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIG5ldyBBeGlvc0Vycm9yKCdOZXR3b3JrIEVycm9yJywgQXhpb3NFcnJvci5FUlJfTkVUV09SSywgY29uZmlnLCByZXF1ZXN0KSxcbiAgICAgICAge1xuICAgICAgICAgIGNhdXNlOiBlcnIuY2F1c2UgfHwgZXJyXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZXJyLCBlcnIgJiYgZXJyLmNvZGUsIGNvbmZpZywgcmVxdWVzdCk7XG4gIH1cbn0pO1xuXG5cbiIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgaHR0cEFkYXB0ZXIgZnJvbSAnLi9odHRwLmpzJztcbmltcG9ydCB4aHJBZGFwdGVyIGZyb20gJy4veGhyLmpzJztcbmltcG9ydCBmZXRjaEFkYXB0ZXIgZnJvbSAnLi9mZXRjaC5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tIFwiLi4vY29yZS9BeGlvc0Vycm9yLmpzXCI7XG5cbmNvbnN0IGtub3duQWRhcHRlcnMgPSB7XG4gIGh0dHA6IGh0dHBBZGFwdGVyLFxuICB4aHI6IHhockFkYXB0ZXIsXG4gIGZldGNoOiBmZXRjaEFkYXB0ZXJcbn1cblxudXRpbHMuZm9yRWFjaChrbm93bkFkYXB0ZXJzLCAoZm4sIHZhbHVlKSA9PiB7XG4gIGlmIChmbikge1xuICAgIHRyeSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICduYW1lJywge3ZhbHVlfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ2FkYXB0ZXJOYW1lJywge3ZhbHVlfSk7XG4gIH1cbn0pO1xuXG5jb25zdCByZW5kZXJSZWFzb24gPSAocmVhc29uKSA9PiBgLSAke3JlYXNvbn1gO1xuXG5jb25zdCBpc1Jlc29sdmVkSGFuZGxlID0gKGFkYXB0ZXIpID0+IHV0aWxzLmlzRnVuY3Rpb24oYWRhcHRlcikgfHwgYWRhcHRlciA9PT0gbnVsbCB8fCBhZGFwdGVyID09PSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRBZGFwdGVyOiAoYWRhcHRlcnMpID0+IHtcbiAgICBhZGFwdGVycyA9IHV0aWxzLmlzQXJyYXkoYWRhcHRlcnMpID8gYWRhcHRlcnMgOiBbYWRhcHRlcnNdO1xuXG4gICAgY29uc3Qge2xlbmd0aH0gPSBhZGFwdGVycztcbiAgICBsZXQgbmFtZU9yQWRhcHRlcjtcbiAgICBsZXQgYWRhcHRlcjtcblxuICAgIGNvbnN0IHJlamVjdGVkUmVhc29ucyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbmFtZU9yQWRhcHRlciA9IGFkYXB0ZXJzW2ldO1xuICAgICAgbGV0IGlkO1xuXG4gICAgICBhZGFwdGVyID0gbmFtZU9yQWRhcHRlcjtcblxuICAgICAgaWYgKCFpc1Jlc29sdmVkSGFuZGxlKG5hbWVPckFkYXB0ZXIpKSB7XG4gICAgICAgIGFkYXB0ZXIgPSBrbm93bkFkYXB0ZXJzWyhpZCA9IFN0cmluZyhuYW1lT3JBZGFwdGVyKSkudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKGBVbmtub3duIGFkYXB0ZXIgJyR7aWR9J2ApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZWplY3RlZFJlYXNvbnNbaWQgfHwgJyMnICsgaV0gPSBhZGFwdGVyO1xuICAgIH1cblxuICAgIGlmICghYWRhcHRlcikge1xuXG4gICAgICBjb25zdCByZWFzb25zID0gT2JqZWN0LmVudHJpZXMocmVqZWN0ZWRSZWFzb25zKVxuICAgICAgICAubWFwKChbaWQsIHN0YXRlXSkgPT4gYGFkYXB0ZXIgJHtpZH0gYCArXG4gICAgICAgICAgKHN0YXRlID09PSBmYWxzZSA/ICdpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBlbnZpcm9ubWVudCcgOiAnaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgYnVpbGQnKVxuICAgICAgICApO1xuXG4gICAgICBsZXQgcyA9IGxlbmd0aCA/XG4gICAgICAgIChyZWFzb25zLmxlbmd0aCA+IDEgPyAnc2luY2UgOlxcbicgKyByZWFzb25zLm1hcChyZW5kZXJSZWFzb24pLmpvaW4oJ1xcbicpIDogJyAnICsgcmVuZGVyUmVhc29uKHJlYXNvbnNbMF0pKSA6XG4gICAgICAgICdhcyBubyBhZGFwdGVyIHNwZWNpZmllZCc7XG5cbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBgVGhlcmUgaXMgbm8gc3VpdGFibGUgYWRhcHRlciB0byBkaXNwYXRjaCB0aGUgcmVxdWVzdCBgICsgcyxcbiAgICAgICAgJ0VSUl9OT1RfU1VQUE9SVCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG4gIH0sXG4gIGFkYXB0ZXJzOiBrbm93bkFkYXB0ZXJzXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0cmFuc2Zvcm1EYXRhIGZyb20gJy4vdHJhbnNmb3JtRGF0YS5qcyc7XG5pbXBvcnQgaXNDYW5jZWwgZnJvbSAnLi4vY2FuY2VsL2lzQ2FuY2VsLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcbmltcG9ydCBhZGFwdGVycyBmcm9tIFwiLi4vYWRhcHRlcnMvYWRhcHRlcnMuanNcIjtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbmZpZy5oZWFkZXJzKTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgIGNvbmZpZyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5kZXhPZihjb25maWcubWV0aG9kKSAhPT0gLTEpIHtcbiAgICBjb25maWcuaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgYWRhcHRlciA9IGFkYXB0ZXJzLmdldEFkYXB0ZXIoY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcik7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICBjb25maWcsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICByZXNwb25zZVxuICAgICk7XG5cbiAgICByZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVhc29uLnJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCBWRVJTSU9OID0gXCIxLjEwLjBcIjsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi4vZW52L2RhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuWydvYmplY3QnLCAnYm9vbGVhbicsICdudW1iZXInLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ3N5bWJvbCddLmZvckVhY2goKHR5cGUsIGkpID0+IHtcbiAgdmFsaWRhdG9yc1t0eXBlXSA9IGZ1bmN0aW9uIHZhbGlkYXRvcih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IHR5cGUgfHwgJ2EnICsgKGkgPCAxID8gJ24gJyA6ICcgJykgKyB0eXBlO1xuICB9O1xufSk7XG5cbmNvbnN0IGRlcHJlY2F0ZWRXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbnxib29sZWFuP30gdmFsaWRhdG9yIC0gc2V0IHRvIGZhbHNlIGlmIHRoZSB0cmFuc2l0aW9uYWwgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWRcbiAqIEBwYXJhbSB7c3RyaW5nP30gdmVyc2lvbiAtIGRlcHJlY2F0ZWQgdmVyc2lvbiAvIHJlbW92ZWQgc2luY2UgdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmc/fSBtZXNzYWdlIC0gc29tZSBtZXNzYWdlIHdpdGggYWRkaXRpb25hbCBpbmZvXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG52YWxpZGF0b3JzLnRyYW5zaXRpb25hbCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25hbCh2YWxpZGF0b3IsIHZlcnNpb24sIG1lc3NhZ2UpIHtcbiAgZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShvcHQsIGRlc2MpIHtcbiAgICByZXR1cm4gJ1tBeGlvcyB2JyArIFZFUlNJT04gKyAnXSBUcmFuc2l0aW9uYWwgb3B0aW9uIFxcJycgKyBvcHQgKyAnXFwnJyArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuICh2YWx1ZSwgb3B0LCBvcHRzKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSksXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0RFUFJFQ0FURURcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yID8gdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdHMpIDogdHJ1ZTtcbiAgfTtcbn07XG5cbnZhbGlkYXRvcnMuc3BlbGxpbmcgPSBmdW5jdGlvbiBzcGVsbGluZyhjb3JyZWN0U3BlbGxpbmcpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYCR7b3B0fSBpcyBsaWtlbHkgYSBtaXNzcGVsbGluZyBvZiAke2NvcnJlY3RTcGVsbGluZ31gKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgY29uc3Qgb3B0ID0ga2V5c1tpXTtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBzY2hlbWFbb3B0XTtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuLi9oZWxwZXJzL2J1aWxkVVJMLmpzJztcbmltcG9ydCBJbnRlcmNlcHRvck1hbmFnZXIgZnJvbSAnLi9JbnRlcmNlcHRvck1hbmFnZXIuanMnO1xuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdC5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4vQXhpb3NIZWFkZXJzLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5jbGFzcyBBeGlvcyB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gY29uZmlnT3JVcmwgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICAgKiBAcGFyYW0gez9PYmplY3R9IGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gICAqL1xuICBhc3luYyByZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3JlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgbGV0IGR1bW15ID0ge307XG5cbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPyBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShkdW1teSkgOiAoZHVtbXkgPSBuZXcgRXJyb3IoKSk7XG5cbiAgICAgICAgLy8gc2xpY2Ugb2ZmIHRoZSBFcnJvcjogLi4uIGxpbmVcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBkdW1teS5zdGFjayA/IGR1bW15LnN0YWNrLnJlcGxhY2UoL14uK1xcbi8sICcnKSA6ICcnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghZXJyLnN0YWNrKSB7XG4gICAgICAgICAgICBlcnIuc3RhY2sgPSBzdGFjaztcbiAgICAgICAgICAgIC8vIG1hdGNoIHdpdGhvdXQgdGhlIDIgdG9wIHN0YWNrIGxpbmVzXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGFjayAmJiAhU3RyaW5nKGVyci5zdGFjaykuZW5kc1dpdGgoc3RhY2sucmVwbGFjZSgvXi4rXFxuLitcXG4vLCAnJykpKSB7XG4gICAgICAgICAgICBlcnIuc3RhY2sgKz0gJ1xcbicgKyBzdGFja1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlnbm9yZSB0aGUgY2FzZSB3aGVyZSBcInN0YWNrXCIgaXMgYW4gdW4td3JpdGFibGUgcHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgX3JlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgICBpZiAodHlwZW9mIGNvbmZpZ09yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgY29uZmlnLnVybCA9IGNvbmZpZ09yVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcbiAgICB9XG5cbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gICAgY29uc3Qge3RyYW5zaXRpb25hbCwgcGFyYW1zU2VyaWFsaXplciwgaGVhZGVyc30gPSBjb25maWc7XG5cbiAgICBpZiAodHJhbnNpdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHRyYW5zaXRpb25hbCwge1xuICAgICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgZm9yY2VkSlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbilcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zU2VyaWFsaXplciAhPSBudWxsKSB7XG4gICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJhbXNTZXJpYWxpemVyKSkge1xuICAgICAgICBjb25maWcucGFyYW1zU2VyaWFsaXplciA9IHtcbiAgICAgICAgICBzZXJpYWxpemU6IHBhcmFtc1NlcmlhbGl6ZXJcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMocGFyYW1zU2VyaWFsaXplciwge1xuICAgICAgICAgIGVuY29kZTogdmFsaWRhdG9ycy5mdW5jdGlvbixcbiAgICAgICAgICBzZXJpYWxpemU6IHZhbGlkYXRvcnMuZnVuY3Rpb25cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvbmZpZy5hbGxvd0Fic29sdXRlVXJsc1xuICAgIGlmIChjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5hbGxvd0Fic29sdXRlVXJscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMgPSB0aGlzLmRlZmF1bHRzLmFsbG93QWJzb2x1dGVVcmxzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKGNvbmZpZywge1xuICAgICAgYmFzZVVybDogdmFsaWRhdG9ycy5zcGVsbGluZygnYmFzZVVSTCcpLFxuICAgICAgd2l0aFhzcmZUb2tlbjogdmFsaWRhdG9ycy5zcGVsbGluZygnd2l0aFhTUkZUb2tlbicpXG4gICAgfSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICAgIGNvbmZpZy5tZXRob2QgPSAoY29uZmlnLm1ldGhvZCB8fCB0aGlzLmRlZmF1bHRzLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICAgIGxldCBjb250ZXh0SGVhZGVycyA9IGhlYWRlcnMgJiYgdXRpbHMubWVyZ2UoXG4gICAgICBoZWFkZXJzLmNvbW1vbixcbiAgICAgIGhlYWRlcnNbY29uZmlnLm1ldGhvZF1cbiAgICApO1xuXG4gICAgaGVhZGVycyAmJiB1dGlscy5mb3JFYWNoKFxuICAgICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgICAobWV0aG9kKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBoZWFkZXJzW21ldGhvZF07XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmNvbmNhdChjb250ZXh0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICBsZXQgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIGlmICh0eXBlb2YgaW50ZXJjZXB0b3IucnVuV2hlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnRlcmNlcHRvci5ydW5XaGVuKGNvbmZpZykgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzICYmIGludGVyY2VwdG9yLnN5bmNocm9ub3VzO1xuXG4gICAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb21pc2U7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBsZW47XG5cbiAgICBpZiAoIXN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycykge1xuICAgICAgY29uc3QgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LmJpbmQodGhpcyksIHVuZGVmaW5lZF07XG4gICAgICBjaGFpbi51bnNoaWZ0LmFwcGx5KGNoYWluLCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBjaGFpbi5wdXNoLmFwcGx5KGNoYWluLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgbGVuID0gY2hhaW4ubGVuZ3RoO1xuXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW5baSsrXSwgY2hhaW5baSsrXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGxlbiA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIGxldCBuZXdDb25maWcgPSBjb25maWc7XG5cbiAgICBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBjb25zdCBvbkZ1bGZpbGxlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICBjb25zdCBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBvblJlamVjdGVkLmNhbGwodGhpcywgZXJyb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcHJvbWlzZSA9IGRpc3BhdGNoUmVxdWVzdC5jYWxsKHRoaXMsIG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgaSA9IDA7XG4gICAgbGVuID0gcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBnZXRVcmkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgICBjb25zdCBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwsIGNvbmZpZy5hbGxvd0Fic29sdXRlVXJscyk7XG4gICAgcmV0dXJuIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcik7XG4gIH1cbn1cblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2QsXG4gICAgICB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVIVFRQTWV0aG9kKGlzRm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBodHRwTWV0aG9kKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IGlzRm9ybSA/IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgIH0gOiB7fSxcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhXG4gICAgICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZ2VuZXJhdGVIVFRQTWV0aG9kKCk7XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZCArICdGb3JtJ10gPSBnZW5lcmF0ZUhUVFBNZXRob2QodHJ1ZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vQ2FuY2VsZWRFcnJvci5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybnMge0NhbmNlbFRva2VufVxuICovXG5jbGFzcyBDYW5jZWxUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XG4gICAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlUHJvbWlzZTtcblxuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IHRoaXM7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuKGNhbmNlbCA9PiB7XG4gICAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgICAgbGV0IGkgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgdG9rZW4uX2xpc3RlbmVyc1tpXShjYW5jZWwpO1xuICAgICAgfVxuICAgICAgdG9rZW4uX2xpc3RlbmVycyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuID0gb25mdWxmaWxsZWQgPT4ge1xuICAgICAgbGV0IF9yZXNvbHZlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdG9rZW4uc3Vic2NyaWJlKHJlc29sdmUpO1xuICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB9KS50aGVuKG9uZnVsZmlsbGVkKTtcblxuICAgICAgcHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiByZWplY3QoKSB7XG4gICAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gICAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICAgKi9cbiAgdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIHRocm93IHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICBsaXN0ZW5lcih0aGlzLnJlYXNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgdG9BYm9ydFNpZ25hbCgpIHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgY29uc3QgYWJvcnQgPSAoZXJyKSA9PiB7XG4gICAgICBjb250cm9sbGVyLmFib3J0KGVycik7XG4gICAgfTtcblxuICAgIHRoaXMuc3Vic2NyaWJlKGFib3J0KTtcblxuICAgIGNvbnRyb2xsZXIuc2lnbmFsLnVuc3Vic2NyaWJlID0gKCkgPT4gdGhpcy51bnN1YnNjcmliZShhYm9ydCk7XG5cbiAgICByZXR1cm4gY29udHJvbGxlci5zaWduYWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICAgKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICAgKi9cbiAgc3RhdGljIHNvdXJjZSgpIHtcbiAgICBsZXQgY2FuY2VsO1xuICAgIGNvbnN0IHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICAgIGNhbmNlbCA9IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuLFxuICAgICAgY2FuY2VsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHBheWxvYWQpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59XG4iLCJjb25zdCBIdHRwU3RhdHVzQ29kZSA9IHtcbiAgQ29udGludWU6IDEwMCxcbiAgU3dpdGNoaW5nUHJvdG9jb2xzOiAxMDEsXG4gIFByb2Nlc3Npbmc6IDEwMixcbiAgRWFybHlIaW50czogMTAzLFxuICBPazogMjAwLFxuICBDcmVhdGVkOiAyMDEsXG4gIEFjY2VwdGVkOiAyMDIsXG4gIE5vbkF1dGhvcml0YXRpdmVJbmZvcm1hdGlvbjogMjAzLFxuICBOb0NvbnRlbnQ6IDIwNCxcbiAgUmVzZXRDb250ZW50OiAyMDUsXG4gIFBhcnRpYWxDb250ZW50OiAyMDYsXG4gIE11bHRpU3RhdHVzOiAyMDcsXG4gIEFscmVhZHlSZXBvcnRlZDogMjA4LFxuICBJbVVzZWQ6IDIyNixcbiAgTXVsdGlwbGVDaG9pY2VzOiAzMDAsXG4gIE1vdmVkUGVybWFuZW50bHk6IDMwMSxcbiAgRm91bmQ6IDMwMixcbiAgU2VlT3RoZXI6IDMwMyxcbiAgTm90TW9kaWZpZWQ6IDMwNCxcbiAgVXNlUHJveHk6IDMwNSxcbiAgVW51c2VkOiAzMDYsXG4gIFRlbXBvcmFyeVJlZGlyZWN0OiAzMDcsXG4gIFBlcm1hbmVudFJlZGlyZWN0OiAzMDgsXG4gIEJhZFJlcXVlc3Q6IDQwMCxcbiAgVW5hdXRob3JpemVkOiA0MDEsXG4gIFBheW1lbnRSZXF1aXJlZDogNDAyLFxuICBGb3JiaWRkZW46IDQwMyxcbiAgTm90Rm91bmQ6IDQwNCxcbiAgTWV0aG9kTm90QWxsb3dlZDogNDA1LFxuICBOb3RBY2NlcHRhYmxlOiA0MDYsXG4gIFByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZDogNDA3LFxuICBSZXF1ZXN0VGltZW91dDogNDA4LFxuICBDb25mbGljdDogNDA5LFxuICBHb25lOiA0MTAsXG4gIExlbmd0aFJlcXVpcmVkOiA0MTEsXG4gIFByZWNvbmRpdGlvbkZhaWxlZDogNDEyLFxuICBQYXlsb2FkVG9vTGFyZ2U6IDQxMyxcbiAgVXJpVG9vTG9uZzogNDE0LFxuICBVbnN1cHBvcnRlZE1lZGlhVHlwZTogNDE1LFxuICBSYW5nZU5vdFNhdGlzZmlhYmxlOiA0MTYsXG4gIEV4cGVjdGF0aW9uRmFpbGVkOiA0MTcsXG4gIEltQVRlYXBvdDogNDE4LFxuICBNaXNkaXJlY3RlZFJlcXVlc3Q6IDQyMSxcbiAgVW5wcm9jZXNzYWJsZUVudGl0eTogNDIyLFxuICBMb2NrZWQ6IDQyMyxcbiAgRmFpbGVkRGVwZW5kZW5jeTogNDI0LFxuICBUb29FYXJseTogNDI1LFxuICBVcGdyYWRlUmVxdWlyZWQ6IDQyNixcbiAgUHJlY29uZGl0aW9uUmVxdWlyZWQ6IDQyOCxcbiAgVG9vTWFueVJlcXVlc3RzOiA0MjksXG4gIFJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZTogNDMxLFxuICBVbmF2YWlsYWJsZUZvckxlZ2FsUmVhc29uczogNDUxLFxuICBJbnRlcm5hbFNlcnZlckVycm9yOiA1MDAsXG4gIE5vdEltcGxlbWVudGVkOiA1MDEsXG4gIEJhZEdhdGV3YXk6IDUwMixcbiAgU2VydmljZVVuYXZhaWxhYmxlOiA1MDMsXG4gIEdhdGV3YXlUaW1lb3V0OiA1MDQsXG4gIEh0dHBWZXJzaW9uTm90U3VwcG9ydGVkOiA1MDUsXG4gIFZhcmlhbnRBbHNvTmVnb3RpYXRlczogNTA2LFxuICBJbnN1ZmZpY2llbnRTdG9yYWdlOiA1MDcsXG4gIExvb3BEZXRlY3RlZDogNTA4LFxuICBOb3RFeHRlbmRlZDogNTEwLFxuICBOZXR3b3JrQXV0aGVudGljYXRpb25SZXF1aXJlZDogNTExLFxufTtcblxuT2JqZWN0LmVudHJpZXMoSHR0cFN0YXR1c0NvZGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICBIdHRwU3RhdHVzQ29kZVt2YWx1ZV0gPSBrZXk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSHR0cFN0YXR1c0NvZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcbmltcG9ydCBBeGlvcyBmcm9tICcuL2NvcmUvQXhpb3MuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vY29yZS9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbFRva2VuIGZyb20gJy4vY2FuY2VsL0NhbmNlbFRva2VuLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4vZW52L2RhdGEuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHNwcmVhZCBmcm9tICcuL2hlbHBlcnMvc3ByZWFkLmpzJztcbmltcG9ydCBpc0F4aW9zRXJyb3IgZnJvbSAnLi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL2NvcmUvQXhpb3NIZWFkZXJzLmpzXCI7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSAnLi9hZGFwdGVycy9hZGFwdGVycy5qcyc7XG5pbXBvcnQgSHR0cFN0YXR1c0NvZGUgZnJvbSAnLi9oZWxwZXJzL0h0dHBTdGF0dXNDb2RlLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm5zIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICBjb25zdCBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICBjb25zdCBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0LCB7YWxsT3duS2V5czogdHJ1ZX0pO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQsIG51bGwsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuY29uc3QgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWxlZEVycm9yID0gQ2FuY2VsZWRFcnJvcjtcbmF4aW9zLkNhbmNlbFRva2VuID0gQ2FuY2VsVG9rZW47XG5heGlvcy5pc0NhbmNlbCA9IGlzQ2FuY2VsO1xuYXhpb3MuVkVSU0lPTiA9IFZFUlNJT047XG5heGlvcy50b0Zvcm1EYXRhID0gdG9Gb3JtRGF0YTtcblxuLy8gRXhwb3NlIEF4aW9zRXJyb3IgY2xhc3NcbmF4aW9zLkF4aW9zRXJyb3IgPSBBeGlvc0Vycm9yO1xuXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuYXhpb3MuQ2FuY2VsID0gYXhpb3MuQ2FuY2VsZWRFcnJvcjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gc3ByZWFkO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSBpc0F4aW9zRXJyb3I7XG5cbi8vIEV4cG9zZSBtZXJnZUNvbmZpZ1xuYXhpb3MubWVyZ2VDb25maWcgPSBtZXJnZUNvbmZpZztcblxuYXhpb3MuQXhpb3NIZWFkZXJzID0gQXhpb3NIZWFkZXJzO1xuXG5heGlvcy5mb3JtVG9KU09OID0gdGhpbmcgPT4gZm9ybURhdGFUb0pTT04odXRpbHMuaXNIVE1MRm9ybSh0aGluZykgPyBuZXcgRm9ybURhdGEodGhpbmcpIDogdGhpbmcpO1xuXG5heGlvcy5nZXRBZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcjtcblxuYXhpb3MuSHR0cFN0YXR1c0NvZGUgPSBIdHRwU3RhdHVzQ29kZTtcblxuYXhpb3MuZGVmYXVsdCA9IGF4aW9zO1xuXG4vLyB0aGlzIG1vZHVsZSBzaG91bGQgb25seSBoYXZlIGEgZGVmYXVsdCBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IGF4aW9zXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi9saWIvYXhpb3MuanMnO1xuXG4vLyBUaGlzIG1vZHVsZSBpcyBpbnRlbmRlZCB0byB1bndyYXAgQXhpb3MgZGVmYXVsdCBleHBvcnQgYXMgbmFtZWQuXG4vLyBLZWVwIHRvcC1sZXZlbCBleHBvcnQgc2FtZSB3aXRoIHN0YXRpYyBwcm9wZXJ0aWVzXG4vLyBzbyB0aGF0IGl0IGNhbiBrZWVwIHNhbWUgd2l0aCBlcyBtb2R1bGUgb3IgY2pzXG5jb25zdCB7XG4gIEF4aW9zLFxuICBBeGlvc0Vycm9yLFxuICBDYW5jZWxlZEVycm9yLFxuICBpc0NhbmNlbCxcbiAgQ2FuY2VsVG9rZW4sXG4gIFZFUlNJT04sXG4gIGFsbCxcbiAgQ2FuY2VsLFxuICBpc0F4aW9zRXJyb3IsXG4gIHNwcmVhZCxcbiAgdG9Gb3JtRGF0YSxcbiAgQXhpb3NIZWFkZXJzLFxuICBIdHRwU3RhdHVzQ29kZSxcbiAgZm9ybVRvSlNPTixcbiAgZ2V0QWRhcHRlcixcbiAgbWVyZ2VDb25maWdcbn0gPSBheGlvcztcblxuZXhwb3J0IHtcbiAgYXhpb3MgYXMgZGVmYXVsdCxcbiAgQXhpb3MsXG4gIEF4aW9zRXJyb3IsXG4gIENhbmNlbGVkRXJyb3IsXG4gIGlzQ2FuY2VsLFxuICBDYW5jZWxUb2tlbixcbiAgVkVSU0lPTixcbiAgYWxsLFxuICBDYW5jZWwsXG4gIGlzQXhpb3NFcnJvcixcbiAgc3ByZWFkLFxuICB0b0Zvcm1EYXRhLFxuICBBeGlvc0hlYWRlcnMsXG4gIEh0dHBTdGF0dXNDb2RlLFxuICBmb3JtVG9KU09OLFxuICBnZXRBZGFwdGVyLFxuICBtZXJnZUNvbmZpZ1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBiYXNlVXJsID0gXCJodHRwczovL3RyaWJlcy5hZnJpY2FcIjtcbmNvbnN0IEFQSV9VUkwgPSBgJHtiYXNlVXJsfS9hcGkvdjFgO1xuXG5jb25zdCBIdHRwUG9zdFJlcXVlc3QgPSBhc3luYyAocGF0aCwgZGF0YSA9IHt9KSA9PiB7XG4gIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246IFwiVW5BdXRob3JpemVkXCIgfTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtBUElfVVJMfSR7cGF0aH1gLCBkYXRhLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSHR0cFBvc3RSZXF1ZXN0O1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XG5pbXBvcnQgeyBUZXh0LCBMYWJlbCwgQnV0dG9uIH0gZnJvbSBcIkBhZG1pbmpzL2Rlc2lnbi1zeXN0ZW1cIjtcbmltcG9ydCBIdHRwUG9zdFJlcXVlc3QgZnJvbSBcIi4vSHR0cFBvc3RSZXF1ZXN0XCI7XG5cbmNvbnN0IEltYWdlVXBsb2FkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKFwiSW1hZ2UgdXBsb2FkaW5nLi4uIFBsZWFzZSBkbyBub3Qgc2F2ZSB1bnRpbCB0aGUgaW1hZ2UgaXMgdXBsb2FkZWQuXCIpO1xuICBjb25zdCBbcHJldmlld1VybCwgc2V0UHJldmlld1VybF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBJbml0aWFsaXplIHByZXZpZXcgd2hlbiBlZGl0aW5nIGV4aXN0aW5nIGRhdGFcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSAmJiAhcHJldmlld1VybCkge1xuICAgICAgY29uc29sZS5sb2cocHJvcGVydHkubmFtZSk7XG4gICAgICBzZXRQcmV2aWV3VXJsKHJlY29yZC5wYXJhbXNbcHJvcGVydHkubmFtZV0pO1xuICAgIH1cbiAgfSwgW3JlY29yZCwgcHJvcGVydHkubmFtZSwgcHJldmlld1VybF0pO1xuXG4gIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKFxuICAgIChmaWxlcykgPT4ge1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBmaWxlID0gZmlsZXNbMF07XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG5cbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRNc2coXCJJbWFnZSB1cGxvYWRpbmcuLi4gUGxlYXNlIGRvIG5vdCBzYXZlIHVudGlsIHRoZSBpbWFnZSBpcyB1cGxvYWRlZC5cIik7XG5cbiAgICAgICAgSHR0cFBvc3RSZXF1ZXN0KFwiL3VwbG9hZC1maWxlXCIsIGZvcm1EYXRhKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRNc2coXCJJbWFnZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgICAgICAgICAgc2V0UHJldmlld1VybChyZXMpOyAvLyBBc3N1bWluZyB0aGUgcmVzcG9uc2UgaXMgdGhlIGltYWdlIFVSTFxuICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAuLi5yZWNvcmQsXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlY29yZC5wYXJhbXMsXG4gICAgICAgICAgICAgICAgW3Byb3BlcnR5Lm5hbWVdOiByZXMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0TXNnKFwiVXBsb2FkIGZhaWxlZC4gVHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkNoYW5nZSwgcHJvcGVydHkubmFtZSwgcmVjb3JkXVxuICApO1xuXG4gIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgIHNldFByZXZpZXdVcmwobnVsbCk7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4ucmVjb3JkLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLnJlY29yZC5wYXJhbXMsXG4gICAgICAgIFtwcm9wZXJ0eS5uYW1lXTogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuICAgIG9uRHJvcCxcbiAgICBhY2NlcHQ6IHtcbiAgICAgIFwiaW1hZ2UvanBlZ1wiOiBbXCIuanBlZ1wiLCBcIi5qcGdcIl0sXG4gICAgICBcImltYWdlL3BuZ1wiOiBbXCIucG5nXCJdLFxuICAgIH0sXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGV4dFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICBmb250RmFtaWx5OiBcIlJvYm90bywgc2Fuc1NlcmlmXCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTZweFwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcbiAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcGVydHkubmFtZX1cbiAgICAgIDwvVGV4dD5cblxuICAgICAge3ByZXZpZXdVcmwgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggZGFzaGVkICNjY2NcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZyBzcmM9eycvYmFja2VuZCcgKyBwcmV2aWV3VXJsfSBhbHQ9XCJQcmV2aWV3XCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCBtYXhIZWlnaHQ6IFwiMjAwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19IC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICB0b3A6IFwiMTBweFwiLFxuICAgICAgICAgICAgICByaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMjhweFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjhweFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjI4cHhcIixcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDDl1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKCl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggZGFzaGVkICM2NjZcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI0MHB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPExhYmVsIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT57bXNnfTwvTGFiZWw+fVxuICAgICAgICAgIHtpc0RyYWdBY3RpdmUgPyA8cD5Ecm9wIHRoZSBpbWFnZSBoZXJlIC4uLjwvcD4gOiA8cD5EcmFnIGFuZCBkcm9wIGEgSlBHIG9yIFBORywgb3IgY2xpY2sgdG8gc2VsZWN0PC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VVcGxvYWRlcjtcbiIsImNvbnN0IFNob3dJbWFnZSA9ICh7IHByb3BlcnR5LCByZWNvcmQsIHZpZXcgPSBcImxpc3RcIiB9KSA9PiB7XG4gIGxldCBpbWFnZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV07XG5cblxuICBpZih3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgnL3Nob3cnKSl7XG4gICAgdmlldyA9ICdzaG93J1xuICB9XG5cbiAgY29uc3Qgc3R5bGVzID0gcHJvcGVydHkuY3VzdG9tPy5zdHlsZXM/Llt2aWV3XSB8fCB7XG4gICAgaGVpZ2h0OiA2MCxcbiAgICB3aWR0aDogNjAsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgb2JqZWN0Rml0IDogJ2NvdmVyJ1xuICB9O1xuXG4gIGlmIChpbWFnZSAmJiAhaW1hZ2Uuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgaW1hZ2UgPSAnL2JhY2tlbmQnICsgaW1hZ2U7XG4gIH1cblxuICBpZiAoIWltYWdlKSByZXR1cm4gPGRpdj4tLTwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW1nIHN0eWxlPXtzdHlsZXN9IHNyYz17aW1hZ2V9IGFsdD1cIkltYWdlXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dJbWFnZTtcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuLi9hZG1pbi9EYXNoYm9hcmQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkRhc2hib2FyZCA9IERhc2hib2FyZFxuaW1wb3J0IFVwbG9hZEltYWdlIGZyb20gJy4uL2FkbWluL0ltYWdlVXBsb2FkZXInXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZEltYWdlID0gVXBsb2FkSW1hZ2VcbmltcG9ydCBTaG93SW1hZ2UgZnJvbSAnLi4vYWRtaW4vU2hvd0ltYWdlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5TaG93SW1hZ2UgPSBTaG93SW1hZ2UiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsImFwaSIsIkFwaUNsaWVudCIsInVzZUVmZmVjdCIsImdldERhc2hib2FyZCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQm94IiwidmFyaWFudCIsInBhZGRpbmciLCJIMiIsIm1iIiwidGhpcyIsInJlcXVpcmUkJDAiLCJpc09iamVjdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsIm93bktleXMiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwiZm9yd2FyZFJlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJGcmFnbWVudCIsImZyb21FdmVudCIsIlByb3BUeXBlcyIsInVzZU1lbW8iLCJub29wIiwidXNlUmVmIiwidXNlUmVkdWNlciIsInVzZUNhbGxiYWNrIiwiQXhpb3NFcnJvciIsInV0aWxzIiwicHJvdG90eXBlIiwidG9Gb3JtRGF0YSIsImVuY29kZSIsIlVSTFNlYXJjaFBhcmFtcyIsIkZvcm1EYXRhIiwiQmxvYiIsInBsYXRmb3JtIiwiQXhpb3NIZWFkZXJzIiwiaXNDYW5jZWwiLCJDYW5jZWxlZEVycm9yIiwibWVyZ2VDb25maWciLCJWRVJTSU9OIiwidmFsaWRhdG9ycyIsIkF4aW9zIiwic3ByZWFkIiwiaXNBeGlvc0Vycm9yIiwiSHR0cFN0YXR1c0NvZGUiLCJDYW5jZWxUb2tlbiIsImJhc2VVcmwiLCJBUElfVVJMIiwiSHR0cFBvc3RSZXF1ZXN0IiwicGF0aCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInBvc3QiLCJjb2RlIiwiRXJyb3IiLCJtZXNzYWdlIiwiSW1hZ2VVcGxvYWRlciIsInByb3BzIiwib25DaGFuZ2UiLCJwcm9wZXJ0eSIsInJlY29yZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1zZyIsInNldE1zZyIsInByZXZpZXdVcmwiLCJzZXRQcmV2aWV3VXJsIiwicGFyYW1zIiwibmFtZSIsImxvZyIsIm9uRHJvcCIsImZpbGVzIiwibGVuZ3RoIiwiZmlsZSIsImZvcm1EYXRhIiwiYXBwZW5kIiwicmVzIiwib25SZW1vdmUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwidXNlRHJvcHpvbmUiLCJhY2NlcHQiLCJtdWx0aXBsZSIsIlRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsInBvc2l0aW9uIiwiYm9yZGVyIiwidGV4dEFsaWduIiwiYm9yZGVyUmFkaXVzIiwic3JjIiwiYWx0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJCdXR0b24iLCJzaXplIiwib25DbGljayIsInRvcCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJfZXh0ZW5kcyIsImN1cnNvciIsIkxhYmVsIiwiY29sb3IiLCJTaG93SW1hZ2UiLCJ2aWV3IiwiaW1hZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtYXRjaCIsInN0eWxlcyIsImN1c3RvbSIsIm9iamVjdEZpdCIsInN0YXJ0c1dpdGgiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJVcGxvYWRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7RUFJQSxNQUFNQSxTQUFTLEdBQUdBLE1BQU07SUFDdEIsTUFBTSxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHQyxnQkFBUSxDQUFDLElBQUksQ0FBQztFQUN0QyxFQUFBLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxpQkFBUyxFQUFFO0VBRTNCQyxFQUFBQSxpQkFBUyxDQUFDLE1BQU07TUFDZEYsR0FBRyxDQUNBRyxZQUFZLEVBQUUsQ0FDZEMsSUFBSSxDQUFFQyxRQUFRLElBQUs7RUFDbEJQLE1BQUFBLE9BQU8sQ0FBQ08sUUFBUSxDQUFDUixJQUFJLENBQUM7RUFDeEIsS0FBQyxDQUFDLENBQ0RTLEtBQUssQ0FBRUMsS0FBSyxJQUFLO0VBQ2hCQyxNQUFBQSxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0VBQzlDLEtBQUMsQ0FBQztLQUNMLEVBQUUsRUFBRSxDQUFDO0VBRU4sRUFBQSxvQkFDRUUsc0JBQUEsQ0FBQUMsYUFBQSxDQUFDQyxnQkFBRyxFQUFBO0VBQUNDLElBQUFBLE9BQU8sRUFBQyxNQUFNO0VBQUNDLElBQUFBLE9BQU8sRUFBQztFQUFJLEdBQUEsZUFDOUJKLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ0ksZUFBRSxFQUFBO0VBQUNDLElBQUFBLEVBQUUsRUFBQztLQUFLLEVBQUEsZ0NBQWtDLENBNkIzQyxDQUFDO0VBRVYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQ25ERCxNQUFNLENBQUMsY0FBYyxDQUFBLE9BQUEsRUFBVSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7RUFDN0QsQ0FBQSxPQUFBLENBQUEsaUJBQUEsR0FBNEIsTUFBTTtFQUNsQyxDQUFBLE9BQUEsQ0FBQSxjQUFBLEdBQXlCLGNBQWM7R0FDdkMsT0FBNEIs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QUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQzlHLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0VBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7RUFDakcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0VBQ3BHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztFQUNwSCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7RUFDN0UsS0FBSyxDQUFDO0VBQ04sQ0FBQztFQUNELElBQUksV0FBVyxHQUFHLENBQUNBLGNBQUksSUFBSUEsY0FBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUU7RUFDekUsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxVQUFVLEdBQUcsUUFBUSxHQUFHLE1BQU0sRUFBRSxTQUFTLENBQUM7RUFDcE0sSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUMvSixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUNwRSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtFQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUM7RUFDckUsUUFBUSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtFQUN0RCxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztFQUN4SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0VBQ25ELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztFQUN4QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtFQUN2RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FB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QUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENB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LENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDOztFQUUvZixTQUFTRCxpQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8s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QUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxXQUFXLElBQUksMENBQTBDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8saUJBQWlCLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztFQUU5WixTQUFTLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDOztFQUVyTCxTQUFTLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQzs7RUFFL2YsU0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDOztFQUVuRSxTQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUks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RCxNQUFNLEdBQUdOLElBQUksQ0FBQyxJQUFJO0VBQ2hETixJQUFBQSxNQUFNLEVBQUUsRUFBRTtFQUNWRCxJQUFBQSxLQUFLLEVBQUUsRUFBRTtFQUNUVixJQUFBQSxZQUFZLEVBQUUsTUFBTTtFQUNwQnlCLElBQUFBLFNBQVMsRUFBRztLQUNiO0lBRUQsSUFBSVAsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ1EsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO01BQ3RDUixLQUFLLEdBQUcsVUFBVSxHQUFHQSxLQUFLO0VBQzVCO0lBRUEsSUFBSSxDQUFDQSxLQUFLLEVBQUUsb0JBQU81SCxLQUFBLENBQUFDLGFBQUEsQ0FBSyxLQUFBLEVBQUEsSUFBQSxFQUFBLElBQU8sQ0FBQztFQUVoQyxFQUFBLG9CQUNFRCxLQUFBLENBQUFDLGFBQUEsQ0FDRUQsS0FBQUEsRUFBQUEsSUFBQUEsZUFBQUEsS0FBQSxDQUFBQyxhQUFBLENBQUEsS0FBQSxFQUFBO0VBQUsrRixJQUFBQSxLQUFLLEVBQUVpQyxNQUFPO0VBQUN0QixJQUFBQSxHQUFHLEVBQUVpQixLQUFNO0VBQUNoQixJQUFBQSxHQUFHLEVBQUM7RUFBTyxHQUFFLENBQzFDLENBQUM7RUFFVixDQUFDOztFQzFCRHlCLE9BQU8sQ0FBQ0MsY0FBYyxHQUFHLEVBQUU7RUFFM0JELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDbkosU0FBUyxHQUFHQSxTQUFTO0VBRTVDa0osT0FBTyxDQUFDQyxjQUFjLENBQUNDLFdBQVcsR0FBR0EsYUFBVztFQUVoREYsT0FBTyxDQUFDQyxjQUFjLENBQUNaLFNBQVMsR0FBR0EsU0FBUzs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NSw0Niw0Nyw0OCw0OSw1MCw1MSw1Miw1Myw1NCw1NSw1Nl19
