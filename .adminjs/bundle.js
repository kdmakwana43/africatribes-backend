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
    }, "Welcome to the Admin Dashboard"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      flexWrap: "wrap",
      gap: "lg"
    }, data && Object.entries(data).map(([key, value]) => /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      key: key,
      width: ["100%", "calc(50% - 20px)", "calc(33.33% - 20px)", "calc(25% - 20px)"] // responsive: 1-col, 2-col, 3-col, 4-col
      ,
      height: 270,
      bg: "white",
      boxShadow: "card",
      borderRadius: "xl",
      padding: "lg",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      fontSize: 20,
      fontWeight: "semi-bold",
      mb: 38
    }, key), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      fontSize: 40,
      fontWeight: "bold",
      color: designSystem.theme.colors.primary100
    }, value)))));
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

      let response = await fetch(request);

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

  const VERSION$1 = "1.9.0";

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

  const baseUrl = "http://localhost:8080";
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
    }, "Profile"), previewUrl ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        border: "2px dashed #ccc",
        padding: "10px",
        textAlign: "center",
        marginBottom: "20px",
        borderRadius: "6px"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: previewUrl,
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
    view = "default"
  }) => {
    let image = record?.params?.[property.name];
    const styles = property.custom?.styles?.[view] || {
      height: 60,
      width: 60,
      borderRadius: '100%'
    };
    if (image && !image.startsWith('http')) {
      image = '/' + image;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9hZG1pbi9EYXNoYm9hcmQuanN4IiwiLi4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9maWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9maWxlLXNlbGVjdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9hdHRyLWFjY2VwdC9kaXN0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRyb3B6b25lL2Rpc3QvZXMvdXRpbHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtZHJvcHpvbmUvZGlzdC9lcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvc0Vycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL251bGwuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdG9Gb3JtRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9jbGFzc2VzL0Zvcm1EYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2NsYXNzZXMvQmxvYi5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vYnJvd3Nlci9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvcGxhdGZvcm0vY29tbW9uL3V0aWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3NIZWFkZXJzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdGhyb3R0bGUuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcHJvZ3Jlc3NFdmVudFJlZHVjZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3Jlc29sdmVDb25maWcuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21wb3NlU2lnbmFscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy90cmFja1N0cmVhbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMvZmV0Y2guanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZW52L2RhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdmFsaWRhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9IdHRwU3RhdHVzQ29kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCIuLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCIuLi9hZG1pbi9IdHRwUG9zdFJlcXVlc3QuanN4IiwiLi4vYWRtaW4vSW1hZ2VVcGxvYWRlci5qc3giLCIuLi9hZG1pbi9TaG93SW1hZ2UuanN4IiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBIMiwgVGV4dCwgdGhlbWUgfSBmcm9tIFwiQGFkbWluanMvZGVzaWduLXN5c3RlbVwiO1xuaW1wb3J0IHsgQXBpQ2xpZW50IH0gZnJvbSBcImFkbWluanNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwaVxuICAgICAgLmdldERhc2hib2FyZCgpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJEYXNoYm9hcmQgQVBJIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCB2YXJpYW50PVwiZ3JleVwiIHBhZGRpbmc9XCJ4bFwiPlxuICAgICAgPEgyIG1iPVwieGxcIj5XZWxjb21lIHRvIHRoZSBBZG1pbiBEYXNoYm9hcmQ8L0gyPlxuXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleFdyYXA9XCJ3cmFwXCIgZ2FwPVwibGdcIj5cbiAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgd2lkdGg9e1tcIjEwMCVcIiwgXCJjYWxjKDUwJSAtIDIwcHgpXCIsIFwiY2FsYygzMy4zMyUgLSAyMHB4KVwiLCBcImNhbGMoMjUlIC0gMjBweClcIl19IC8vIHJlc3BvbnNpdmU6IDEtY29sLCAyLWNvbCwgMy1jb2wsIDQtY29sXG4gICAgICAgICAgICAgIGhlaWdodD17MjcwfVxuICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcbiAgICAgICAgICAgICAgYm94U2hhZG93PVwiY2FyZFwiXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cInhsXCJcbiAgICAgICAgICAgICAgcGFkZGluZz1cImxnXCJcbiAgICAgICAgICAgICAgbWFyZ2luPVwiMTBweFwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsyMH0gZm9udFdlaWdodD1cInNlbWktYm9sZFwiIG1iPXszOH0+XG4gICAgICAgICAgICAgICAge2tleX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17NDB9IGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9e3RoZW1lLmNvbG9ycy5wcmltYXJ5MTAwfT5cbiAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ09NTU9OX01JTUVfVFlQRVMgPSB2b2lkIDA7XG5leHBvcnRzLnRvRmlsZVdpdGhQYXRoID0gdG9GaWxlV2l0aFBhdGg7XG5leHBvcnRzLkNPTU1PTl9NSU1FX1RZUEVTID0gbmV3IE1hcChbXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2d1enpsZS9wc3I3L2Jsb2IvMmQ5MjYwNzk5ZTcxM2YxYzQ3NWQzYzVmZGMzZDY1NjFmZjc0NDFiMi9zcmMvTWltZVR5cGUucGhwXG4gICAgWycxa20nLCAnYXBwbGljYXRpb24vdm5kLjEwMDBtaW5kcy5kZWNpc2lvbi1tb2RlbCt4bWwnXSxcbiAgICBbJzNkbWwnLCAndGV4dC92bmQuaW4zZC4zZG1sJ10sXG4gICAgWyczZHMnLCAnaW1hZ2UveC0zZHMnXSxcbiAgICBbJzNnMicsICd2aWRlby8zZ3BwMiddLFxuICAgIFsnM2dwJywgJ3ZpZGVvLzNncCddLFxuICAgIFsnM2dwcCcsICd2aWRlby8zZ3BwJ10sXG4gICAgWyczbWYnLCAnbW9kZWwvM21mJ10sXG4gICAgWyc3eicsICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnXSxcbiAgICBbJzd6aXAnLCAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJ10sXG4gICAgWycxMjMnLCAnYXBwbGljYXRpb24vdm5kLmxvdHVzLTEtMi0zJ10sXG4gICAgWydhYWInLCAnYXBwbGljYXRpb24veC1hdXRob3J3YXJlLWJpbiddLFxuICAgIFsnYWFjJywgJ2F1ZGlvL3gtYWNjJ10sXG4gICAgWydhYW0nLCAnYXBwbGljYXRpb24veC1hdXRob3J3YXJlLW1hcCddLFxuICAgIFsnYWFzJywgJ2FwcGxpY2F0aW9uL3gtYXV0aG9yd2FyZS1zZWcnXSxcbiAgICBbJ2FidycsICdhcHBsaWNhdGlvbi94LWFiaXdvcmQnXSxcbiAgICBbJ2FjJywgJ2FwcGxpY2F0aW9uL3ZuZC5ub2tpYS5uLWdhZ2UuYWMreG1sJ10sXG4gICAgWydhYzMnLCAnYXVkaW8vYWMzJ10sXG4gICAgWydhY2MnLCAnYXBwbGljYXRpb24vdm5kLmFtZXJpY2FuZHluYW1pY3MuYWNjJ10sXG4gICAgWydhY2UnLCAnYXBwbGljYXRpb24veC1hY2UtY29tcHJlc3NlZCddLFxuICAgIFsnYWN1JywgJ2FwcGxpY2F0aW9uL3ZuZC5hY3Vjb2JvbCddLFxuICAgIFsnYWN1dGMnLCAnYXBwbGljYXRpb24vdm5kLmFjdWNvcnAnXSxcbiAgICBbJ2FkcCcsICdhdWRpby9hZHBjbSddLFxuICAgIFsnYWVwJywgJ2FwcGxpY2F0aW9uL3ZuZC5hdWRpb2dyYXBoJ10sXG4gICAgWydhZm0nLCAnYXBwbGljYXRpb24veC1mb250LXR5cGUxJ10sXG4gICAgWydhZnAnLCAnYXBwbGljYXRpb24vdm5kLmlibS5tb2RjYXAnXSxcbiAgICBbJ2FoZWFkJywgJ2FwcGxpY2F0aW9uL3ZuZC5haGVhZC5zcGFjZSddLFxuICAgIFsnYWknLCAnYXBwbGljYXRpb24vcGRmJ10sXG4gICAgWydhaWYnLCAnYXVkaW8veC1haWZmJ10sXG4gICAgWydhaWZjJywgJ2F1ZGlvL3gtYWlmZiddLFxuICAgIFsnYWlmZicsICdhdWRpby94LWFpZmYnXSxcbiAgICBbJ2FpcicsICdhcHBsaWNhdGlvbi92bmQuYWRvYmUuYWlyLWFwcGxpY2F0aW9uLWluc3RhbGxlci1wYWNrYWdlK3ppcCddLFxuICAgIFsnYWl0JywgJ2FwcGxpY2F0aW9uL3ZuZC5kdmIuYWl0J10sXG4gICAgWydhbWknLCAnYXBwbGljYXRpb24vdm5kLmFtaWdhLmFtaSddLFxuICAgIFsnYW1yJywgJ2F1ZGlvL2FtciddLFxuICAgIFsnYXBrJywgJ2FwcGxpY2F0aW9uL3ZuZC5hbmRyb2lkLnBhY2thZ2UtYXJjaGl2ZSddLFxuICAgIFsnYXBuZycsICdpbWFnZS9hcG5nJ10sXG4gICAgWydhcHBjYWNoZScsICd0ZXh0L2NhY2hlLW1hbmlmZXN0J10sXG4gICAgWydhcHBsaWNhdGlvbicsICdhcHBsaWNhdGlvbi94LW1zLWFwcGxpY2F0aW9uJ10sXG4gICAgWydhcHInLCAnYXBwbGljYXRpb24vdm5kLmxvdHVzLWFwcHJvYWNoJ10sXG4gICAgWydhcmMnLCAnYXBwbGljYXRpb24veC1mcmVlYXJjJ10sXG4gICAgWydhcmonLCAnYXBwbGljYXRpb24veC1hcmonXSxcbiAgICBbJ2FzYycsICdhcHBsaWNhdGlvbi9wZ3Atc2lnbmF0dXJlJ10sXG4gICAgWydhc2YnLCAndmlkZW8veC1tcy1hc2YnXSxcbiAgICBbJ2FzbScsICd0ZXh0L3gtYXNtJ10sXG4gICAgWydhc28nLCAnYXBwbGljYXRpb24vdm5kLmFjY3BhYy5zaW1wbHkuYXNvJ10sXG4gICAgWydhc3gnLCAndmlkZW8veC1tcy1hc2YnXSxcbiAgICBbJ2F0YycsICdhcHBsaWNhdGlvbi92bmQuYWN1Y29ycCddLFxuICAgIFsnYXRvbScsICdhcHBsaWNhdGlvbi9hdG9tK3htbCddLFxuICAgIFsnYXRvbWNhdCcsICdhcHBsaWNhdGlvbi9hdG9tY2F0K3htbCddLFxuICAgIFsnYXRvbWRlbGV0ZWQnLCAnYXBwbGljYXRpb24vYXRvbWRlbGV0ZWQreG1sJ10sXG4gICAgWydhdG9tc3ZjJywgJ2FwcGxpY2F0aW9uL2F0b21zdmMreG1sJ10sXG4gICAgWydhdHgnLCAnYXBwbGljYXRpb24vdm5kLmFudGl4LmdhbWUtY29tcG9uZW50J10sXG4gICAgWydhdScsICdhdWRpby94LWF1J10sXG4gICAgWydhdmknLCAndmlkZW8veC1tc3ZpZGVvJ10sXG4gICAgWydhdmlmJywgJ2ltYWdlL2F2aWYnXSxcbiAgICBbJ2F3JywgJ2FwcGxpY2F0aW9uL2FwcGxpeHdhcmUnXSxcbiAgICBbJ2F6ZicsICdhcHBsaWNhdGlvbi92bmQuYWlyemlwLmZpbGVzZWN1cmUuYXpmJ10sXG4gICAgWydhenMnLCAnYXBwbGljYXRpb24vdm5kLmFpcnppcC5maWxlc2VjdXJlLmF6cyddLFxuICAgIFsnYXp2JywgJ2ltYWdlL3ZuZC5haXJ6aXAuYWNjZWxlcmF0b3IuYXp2J10sXG4gICAgWydhencnLCAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vayddLFxuICAgIFsnYjE2JywgJ2ltYWdlL3ZuZC5wY28uYjE2J10sXG4gICAgWydiYXQnLCAnYXBwbGljYXRpb24veC1tc2Rvd25sb2FkJ10sXG4gICAgWydiY3BpbycsICdhcHBsaWNhdGlvbi94LWJjcGlvJ10sXG4gICAgWydiZGYnLCAnYXBwbGljYXRpb24veC1mb250LWJkZiddLFxuICAgIFsnYmRtJywgJ2FwcGxpY2F0aW9uL3ZuZC5zeW5jbWwuZG0rd2J4bWwnXSxcbiAgICBbJ2Jkb2MnLCAnYXBwbGljYXRpb24veC1iZG9jJ10sXG4gICAgWydiZWQnLCAnYXBwbGljYXRpb24vdm5kLnJlYWx2bmMuYmVkJ10sXG4gICAgWydiaDInLCAnYXBwbGljYXRpb24vdm5kLmZ1aml0c3Uub2FzeXNwcnMnXSxcbiAgICBbJ2JpbicsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2JsYicsICdhcHBsaWNhdGlvbi94LWJsb3JiJ10sXG4gICAgWydibG9yYicsICdhcHBsaWNhdGlvbi94LWJsb3JiJ10sXG4gICAgWydibWknLCAnYXBwbGljYXRpb24vdm5kLmJtaSddLFxuICAgIFsnYm1tbCcsICdhcHBsaWNhdGlvbi92bmQuYmFsc2FtaXEuYm1tbCt4bWwnXSxcbiAgICBbJ2JtcCcsICdpbWFnZS9ibXAnXSxcbiAgICBbJ2Jvb2snLCAnYXBwbGljYXRpb24vdm5kLmZyYW1lbWFrZXInXSxcbiAgICBbJ2JveCcsICdhcHBsaWNhdGlvbi92bmQucHJldmlld3N5c3RlbXMuYm94J10sXG4gICAgWydib3onLCAnYXBwbGljYXRpb24veC1iemlwMiddLFxuICAgIFsnYnBrJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnYnBtbicsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2JzcCcsICdtb2RlbC92bmQudmFsdmUuc291cmNlLmNvbXBpbGVkLW1hcCddLFxuICAgIFsnYnRpZicsICdpbWFnZS9wcnMuYnRpZiddLFxuICAgIFsnYnVmZmVyJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnYnonLCAnYXBwbGljYXRpb24veC1iemlwJ10sXG4gICAgWydiejInLCAnYXBwbGljYXRpb24veC1iemlwMiddLFxuICAgIFsnYycsICd0ZXh0L3gtYyddLFxuICAgIFsnYzRkJywgJ2FwcGxpY2F0aW9uL3ZuZC5jbG9uay5jNGdyb3VwJ10sXG4gICAgWydjNGYnLCAnYXBwbGljYXRpb24vdm5kLmNsb25rLmM0Z3JvdXAnXSxcbiAgICBbJ2M0ZycsICdhcHBsaWNhdGlvbi92bmQuY2xvbmsuYzRncm91cCddLFxuICAgIFsnYzRwJywgJ2FwcGxpY2F0aW9uL3ZuZC5jbG9uay5jNGdyb3VwJ10sXG4gICAgWydjNHUnLCAnYXBwbGljYXRpb24vdm5kLmNsb25rLmM0Z3JvdXAnXSxcbiAgICBbJ2MxMWFtYycsICdhcHBsaWNhdGlvbi92bmQuY2x1ZXRydXN0LmNhcnRvbW9iaWxlLWNvbmZpZyddLFxuICAgIFsnYzExYW16JywgJ2FwcGxpY2F0aW9uL3ZuZC5jbHVldHJ1c3QuY2FydG9tb2JpbGUtY29uZmlnLXBrZyddLFxuICAgIFsnY2FiJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1jYWItY29tcHJlc3NlZCddLFxuICAgIFsnY2FmJywgJ2F1ZGlvL3gtY2FmJ10sXG4gICAgWydjYXAnLCAnYXBwbGljYXRpb24vdm5kLnRjcGR1bXAucGNhcCddLFxuICAgIFsnY2FyJywgJ2FwcGxpY2F0aW9uL3ZuZC5jdXJsLmNhciddLFxuICAgIFsnY2F0JywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wa2kuc2VjY2F0J10sXG4gICAgWydjYjcnLCAnYXBwbGljYXRpb24veC1jYnInXSxcbiAgICBbJ2NiYScsICdhcHBsaWNhdGlvbi94LWNiciddLFxuICAgIFsnY2JyJywgJ2FwcGxpY2F0aW9uL3gtY2JyJ10sXG4gICAgWydjYnQnLCAnYXBwbGljYXRpb24veC1jYnInXSxcbiAgICBbJ2NieicsICdhcHBsaWNhdGlvbi94LWNiciddLFxuICAgIFsnY2MnLCAndGV4dC94LWMnXSxcbiAgICBbJ2NjbycsICdhcHBsaWNhdGlvbi94LWNvY29hJ10sXG4gICAgWydjY3QnLCAnYXBwbGljYXRpb24veC1kaXJlY3RvciddLFxuICAgIFsnY2N4bWwnLCAnYXBwbGljYXRpb24vY2N4bWwreG1sJ10sXG4gICAgWydjZGJjbXNnJywgJ2FwcGxpY2F0aW9uL3ZuZC5jb250YWN0LmNtc2cnXSxcbiAgICBbJ2NkYScsICdhcHBsaWNhdGlvbi94LWNkZiddLFxuICAgIFsnY2RmJywgJ2FwcGxpY2F0aW9uL3gtbmV0Y2RmJ10sXG4gICAgWydjZGZ4JywgJ2FwcGxpY2F0aW9uL2NkZngreG1sJ10sXG4gICAgWydjZGtleScsICdhcHBsaWNhdGlvbi92bmQubWVkaWFzdGF0aW9uLmNka2V5J10sXG4gICAgWydjZG1pYScsICdhcHBsaWNhdGlvbi9jZG1pLWNhcGFiaWxpdHknXSxcbiAgICBbJ2NkbWljJywgJ2FwcGxpY2F0aW9uL2NkbWktY29udGFpbmVyJ10sXG4gICAgWydjZG1pZCcsICdhcHBsaWNhdGlvbi9jZG1pLWRvbWFpbiddLFxuICAgIFsnY2RtaW8nLCAnYXBwbGljYXRpb24vY2RtaS1vYmplY3QnXSxcbiAgICBbJ2NkbWlxJywgJ2FwcGxpY2F0aW9uL2NkbWktcXVldWUnXSxcbiAgICBbJ2NkcicsICdhcHBsaWNhdGlvbi9jZHInXSxcbiAgICBbJ2NkeCcsICdjaGVtaWNhbC94LWNkeCddLFxuICAgIFsnY2R4bWwnLCAnYXBwbGljYXRpb24vdm5kLmNoZW1kcmF3K3htbCddLFxuICAgIFsnY2R5JywgJ2FwcGxpY2F0aW9uL3ZuZC5jaW5kZXJlbGxhJ10sXG4gICAgWydjZXInLCAnYXBwbGljYXRpb24vcGtpeC1jZXJ0J10sXG4gICAgWydjZnMnLCAnYXBwbGljYXRpb24veC1jZnMtY29tcHJlc3NlZCddLFxuICAgIFsnY2dtJywgJ2ltYWdlL2NnbSddLFxuICAgIFsnY2hhdCcsICdhcHBsaWNhdGlvbi94LWNoYXQnXSxcbiAgICBbJ2NobScsICdhcHBsaWNhdGlvbi92bmQubXMtaHRtbGhlbHAnXSxcbiAgICBbJ2NocnQnLCAnYXBwbGljYXRpb24vdm5kLmtkZS5rY2hhcnQnXSxcbiAgICBbJ2NpZicsICdjaGVtaWNhbC94LWNpZiddLFxuICAgIFsnY2lpJywgJ2FwcGxpY2F0aW9uL3ZuZC5hbnNlci13ZWItY2VydGlmaWNhdGUtaXNzdWUtaW5pdGlhdGlvbiddLFxuICAgIFsnY2lsJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1hcnRnYWxyeSddLFxuICAgIFsnY2pzJywgJ2FwcGxpY2F0aW9uL25vZGUnXSxcbiAgICBbJ2NsYScsICdhcHBsaWNhdGlvbi92bmQuY2xheW1vcmUnXSxcbiAgICBbJ2NsYXNzJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnY2xraycsICdhcHBsaWNhdGlvbi92bmQuY3JpY2suY2xpY2tlci5rZXlib2FyZCddLFxuICAgIFsnY2xrcCcsICdhcHBsaWNhdGlvbi92bmQuY3JpY2suY2xpY2tlci5wYWxldHRlJ10sXG4gICAgWydjbGt0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jcmljay5jbGlja2VyLnRlbXBsYXRlJ10sXG4gICAgWydjbGt3JywgJ2FwcGxpY2F0aW9uL3ZuZC5jcmljay5jbGlja2VyLndvcmRiYW5rJ10sXG4gICAgWydjbGt4JywgJ2FwcGxpY2F0aW9uL3ZuZC5jcmljay5jbGlja2VyJ10sXG4gICAgWydjbHAnLCAnYXBwbGljYXRpb24veC1tc2NsaXAnXSxcbiAgICBbJ2NtYycsICdhcHBsaWNhdGlvbi92bmQuY29zbW9jYWxsZXInXSxcbiAgICBbJ2NtZGYnLCAnY2hlbWljYWwveC1jbWRmJ10sXG4gICAgWydjbWwnLCAnY2hlbWljYWwveC1jbWwnXSxcbiAgICBbJ2NtcCcsICdhcHBsaWNhdGlvbi92bmQueWVsbG93cml2ZXItY3VzdG9tLW1lbnUnXSxcbiAgICBbJ2NteCcsICdpbWFnZS94LWNteCddLFxuICAgIFsnY29kJywgJ2FwcGxpY2F0aW9uL3ZuZC5yaW0uY29kJ10sXG4gICAgWydjb2ZmZWUnLCAndGV4dC9jb2ZmZWVzY3JpcHQnXSxcbiAgICBbJ2NvbScsICdhcHBsaWNhdGlvbi94LW1zZG93bmxvYWQnXSxcbiAgICBbJ2NvbmYnLCAndGV4dC9wbGFpbiddLFxuICAgIFsnY3BpbycsICdhcHBsaWNhdGlvbi94LWNwaW8nXSxcbiAgICBbJ2NwcCcsICd0ZXh0L3gtYyddLFxuICAgIFsnY3B0JywgJ2FwcGxpY2F0aW9uL21hYy1jb21wYWN0cHJvJ10sXG4gICAgWydjcmQnLCAnYXBwbGljYXRpb24veC1tc2NhcmRmaWxlJ10sXG4gICAgWydjcmwnLCAnYXBwbGljYXRpb24vcGtpeC1jcmwnXSxcbiAgICBbJ2NydCcsICdhcHBsaWNhdGlvbi94LXg1MDktY2EtY2VydCddLFxuICAgIFsnY3J4JywgJ2FwcGxpY2F0aW9uL3gtY2hyb21lLWV4dGVuc2lvbiddLFxuICAgIFsnY3J5cHRvbm90ZScsICdhcHBsaWNhdGlvbi92bmQucmlnLmNyeXB0b25vdGUnXSxcbiAgICBbJ2NzaCcsICdhcHBsaWNhdGlvbi94LWNzaCddLFxuICAgIFsnY3NsJywgJ2FwcGxpY2F0aW9uL3ZuZC5jaXRhdGlvbnN0eWxlcy5zdHlsZSt4bWwnXSxcbiAgICBbJ2NzbWwnLCAnY2hlbWljYWwveC1jc21sJ10sXG4gICAgWydjc3AnLCAnYXBwbGljYXRpb24vdm5kLmNvbW1vbnNwYWNlJ10sXG4gICAgWydjc3InLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydjc3MnLCAndGV4dC9jc3MnXSxcbiAgICBbJ2NzdCcsICdhcHBsaWNhdGlvbi94LWRpcmVjdG9yJ10sXG4gICAgWydjc3YnLCAndGV4dC9jc3YnXSxcbiAgICBbJ2N1JywgJ2FwcGxpY2F0aW9uL2N1LXNlZW1lJ10sXG4gICAgWydjdXJsJywgJ3RleHQvdm5kLmN1cmwnXSxcbiAgICBbJ2N3dycsICdhcHBsaWNhdGlvbi9wcnMuY3d3J10sXG4gICAgWydjeHQnLCAnYXBwbGljYXRpb24veC1kaXJlY3RvciddLFxuICAgIFsnY3h4JywgJ3RleHQveC1jJ10sXG4gICAgWydkYWUnLCAnbW9kZWwvdm5kLmNvbGxhZGEreG1sJ10sXG4gICAgWydkYWYnLCAnYXBwbGljYXRpb24vdm5kLm1vYml1cy5kYWYnXSxcbiAgICBbJ2RhcnQnLCAnYXBwbGljYXRpb24vdm5kLmRhcnQnXSxcbiAgICBbJ2RhdGFsZXNzJywgJ2FwcGxpY2F0aW9uL3ZuZC5mZHNuLnNlZWQnXSxcbiAgICBbJ2Rhdm1vdW50JywgJ2FwcGxpY2F0aW9uL2Rhdm1vdW50K3htbCddLFxuICAgIFsnZGJmJywgJ2FwcGxpY2F0aW9uL3ZuZC5kYmYnXSxcbiAgICBbJ2RiaycsICdhcHBsaWNhdGlvbi9kb2Nib29rK3htbCddLFxuICAgIFsnZGNyJywgJ2FwcGxpY2F0aW9uL3gtZGlyZWN0b3InXSxcbiAgICBbJ2RjdXJsJywgJ3RleHQvdm5kLmN1cmwuZGN1cmwnXSxcbiAgICBbJ2RkMicsICdhcHBsaWNhdGlvbi92bmQub21hLmRkMit4bWwnXSxcbiAgICBbJ2RkZCcsICdhcHBsaWNhdGlvbi92bmQuZnVqaXhlcm94LmRkZCddLFxuICAgIFsnZGRmJywgJ2FwcGxpY2F0aW9uL3ZuZC5zeW5jbWwuZG1kZGYreG1sJ10sXG4gICAgWydkZHMnLCAnaW1hZ2Uvdm5kLm1zLWRkcyddLFxuICAgIFsnZGViJywgJ2FwcGxpY2F0aW9uL3gtZGViaWFuLXBhY2thZ2UnXSxcbiAgICBbJ2RlZicsICd0ZXh0L3BsYWluJ10sXG4gICAgWydkZXBsb3knLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydkZXInLCAnYXBwbGljYXRpb24veC14NTA5LWNhLWNlcnQnXSxcbiAgICBbJ2RmYWMnLCAnYXBwbGljYXRpb24vdm5kLmRyZWFtZmFjdG9yeSddLFxuICAgIFsnZGdjJywgJ2FwcGxpY2F0aW9uL3gtZGdjLWNvbXByZXNzZWQnXSxcbiAgICBbJ2RpYycsICd0ZXh0L3gtYyddLFxuICAgIFsnZGlyJywgJ2FwcGxpY2F0aW9uL3gtZGlyZWN0b3InXSxcbiAgICBbJ2RpcycsICdhcHBsaWNhdGlvbi92bmQubW9iaXVzLmRpcyddLFxuICAgIFsnZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uJywgJ21lc3NhZ2UvZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uJ10sXG4gICAgWydkaXN0JywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnZGlzdHonLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydkanYnLCAnaW1hZ2Uvdm5kLmRqdnUnXSxcbiAgICBbJ2RqdnUnLCAnaW1hZ2Uvdm5kLmRqdnUnXSxcbiAgICBbJ2RsbCcsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2RtZycsICdhcHBsaWNhdGlvbi94LWFwcGxlLWRpc2tpbWFnZSddLFxuICAgIFsnZG1uJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnZG1wJywgJ2FwcGxpY2F0aW9uL3ZuZC50Y3BkdW1wLnBjYXAnXSxcbiAgICBbJ2RtcycsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2RuYScsICdhcHBsaWNhdGlvbi92bmQuZG5hJ10sXG4gICAgWydkb2MnLCAnYXBwbGljYXRpb24vbXN3b3JkJ10sXG4gICAgWydkb2NtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy13b3JkLnRlbXBsYXRlLm1hY3JvRW5hYmxlZC4xMiddLFxuICAgIFsnZG9jeCcsICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCddLFxuICAgIFsnZG90JywgJ2FwcGxpY2F0aW9uL21zd29yZCddLFxuICAgIFsnZG90bScsICdhcHBsaWNhdGlvbi92bmQubXMtd29yZC50ZW1wbGF0ZS5tYWNyb0VuYWJsZWQuMTInXSxcbiAgICBbJ2RvdHgnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwudGVtcGxhdGUnXSxcbiAgICBbJ2RwJywgJ2FwcGxpY2F0aW9uL3ZuZC5vc2dpLmRwJ10sXG4gICAgWydkcGcnLCAnYXBwbGljYXRpb24vdm5kLmRwZ3JhcGgnXSxcbiAgICBbJ2RyYScsICdhdWRpby92bmQuZHJhJ10sXG4gICAgWydkcmxlJywgJ2ltYWdlL2RpY29tLXJsZSddLFxuICAgIFsnZHNjJywgJ3RleHQvcHJzLmxpbmVzLnRhZyddLFxuICAgIFsnZHNzYycsICdhcHBsaWNhdGlvbi9kc3NjK2RlciddLFxuICAgIFsnZHRiJywgJ2FwcGxpY2F0aW9uL3gtZHRib29rK3htbCddLFxuICAgIFsnZHRkJywgJ2FwcGxpY2F0aW9uL3htbC1kdGQnXSxcbiAgICBbJ2R0cycsICdhdWRpby92bmQuZHRzJ10sXG4gICAgWydkdHNoZCcsICdhdWRpby92bmQuZHRzLmhkJ10sXG4gICAgWydkdW1wJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnZHZiJywgJ3ZpZGVvL3ZuZC5kdmIuZmlsZSddLFxuICAgIFsnZHZpJywgJ2FwcGxpY2F0aW9uL3gtZHZpJ10sXG4gICAgWydkd2QnLCAnYXBwbGljYXRpb24vYXRzYy1kd2QreG1sJ10sXG4gICAgWydkd2YnLCAnbW9kZWwvdm5kLmR3ZiddLFxuICAgIFsnZHdnJywgJ2ltYWdlL3ZuZC5kd2cnXSxcbiAgICBbJ2R4ZicsICdpbWFnZS92bmQuZHhmJ10sXG4gICAgWydkeHAnLCAnYXBwbGljYXRpb24vdm5kLnNwb3RmaXJlLmR4cCddLFxuICAgIFsnZHhyJywgJ2FwcGxpY2F0aW9uL3gtZGlyZWN0b3InXSxcbiAgICBbJ2VhcicsICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnXSxcbiAgICBbJ2VjZWxwNDgwMCcsICdhdWRpby92bmQubnVlcmEuZWNlbHA0ODAwJ10sXG4gICAgWydlY2VscDc0NzAnLCAnYXVkaW8vdm5kLm51ZXJhLmVjZWxwNzQ3MCddLFxuICAgIFsnZWNlbHA5NjAwJywgJ2F1ZGlvL3ZuZC5udWVyYS5lY2VscDk2MDAnXSxcbiAgICBbJ2VjbWEnLCAnYXBwbGljYXRpb24vZWNtYXNjcmlwdCddLFxuICAgIFsnZWRtJywgJ2FwcGxpY2F0aW9uL3ZuZC5ub3ZhZGlnbS5lZG0nXSxcbiAgICBbJ2VkeCcsICdhcHBsaWNhdGlvbi92bmQubm92YWRpZ20uZWR4J10sXG4gICAgWydlZmlmJywgJ2FwcGxpY2F0aW9uL3ZuZC5waWNzZWwnXSxcbiAgICBbJ2VpNicsICdhcHBsaWNhdGlvbi92bmQucGcub3Nhc2xpJ10sXG4gICAgWydlbGMnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydlbWYnLCAnaW1hZ2UvZW1mJ10sXG4gICAgWydlbWwnLCAnbWVzc2FnZS9yZmM4MjInXSxcbiAgICBbJ2VtbWEnLCAnYXBwbGljYXRpb24vZW1tYSt4bWwnXSxcbiAgICBbJ2Vtb3Rpb25tbCcsICdhcHBsaWNhdGlvbi9lbW90aW9ubWwreG1sJ10sXG4gICAgWydlbXonLCAnYXBwbGljYXRpb24veC1tc21ldGFmaWxlJ10sXG4gICAgWydlb2wnLCAnYXVkaW8vdm5kLmRpZ2l0YWwtd2luZHMnXSxcbiAgICBbJ2VvdCcsICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCddLFxuICAgIFsnZXBzJywgJ2FwcGxpY2F0aW9uL3Bvc3RzY3JpcHQnXSxcbiAgICBbJ2VwdWInLCAnYXBwbGljYXRpb24vZXB1Yit6aXAnXSxcbiAgICBbJ2VzJywgJ2FwcGxpY2F0aW9uL2VjbWFzY3JpcHQnXSxcbiAgICBbJ2VzMycsICdhcHBsaWNhdGlvbi92bmQuZXN6aWdubzMreG1sJ10sXG4gICAgWydlc2EnLCAnYXBwbGljYXRpb24vdm5kLm9zZ2kuc3Vic3lzdGVtJ10sXG4gICAgWydlc2YnLCAnYXBwbGljYXRpb24vdm5kLmVwc29uLmVzZiddLFxuICAgIFsnZXQzJywgJ2FwcGxpY2F0aW9uL3ZuZC5lc3ppZ25vMyt4bWwnXSxcbiAgICBbJ2V0eCcsICd0ZXh0L3gtc2V0ZXh0J10sXG4gICAgWydldmEnLCAnYXBwbGljYXRpb24veC1ldmEnXSxcbiAgICBbJ2V2eScsICdhcHBsaWNhdGlvbi94LWVudm95J10sXG4gICAgWydleGUnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydleGknLCAnYXBwbGljYXRpb24vZXhpJ10sXG4gICAgWydleHAnLCAnYXBwbGljYXRpb24vZXhwcmVzcyddLFxuICAgIFsnZXhyJywgJ2ltYWdlL2FjZXMnXSxcbiAgICBbJ2V4dCcsICdhcHBsaWNhdGlvbi92bmQubm92YWRpZ20uZXh0J10sXG4gICAgWydleicsICdhcHBsaWNhdGlvbi9hbmRyZXctaW5zZXQnXSxcbiAgICBbJ2V6MicsICdhcHBsaWNhdGlvbi92bmQuZXpwaXgtYWxidW0nXSxcbiAgICBbJ2V6MycsICdhcHBsaWNhdGlvbi92bmQuZXpwaXgtcGFja2FnZSddLFxuICAgIFsnZicsICd0ZXh0L3gtZm9ydHJhbiddLFxuICAgIFsnZjR2JywgJ3ZpZGVvL21wNCddLFxuICAgIFsnZjc3JywgJ3RleHQveC1mb3J0cmFuJ10sXG4gICAgWydmOTAnLCAndGV4dC94LWZvcnRyYW4nXSxcbiAgICBbJ2ZicycsICdpbWFnZS92bmQuZmFzdGJpZHNoZWV0J10sXG4gICAgWydmY2R0JywgJ2FwcGxpY2F0aW9uL3ZuZC5hZG9iZS5mb3Jtc2NlbnRyYWwuZmNkdCddLFxuICAgIFsnZmNzJywgJ2FwcGxpY2F0aW9uL3ZuZC5pc2FjLmZjcyddLFxuICAgIFsnZmRmJywgJ2FwcGxpY2F0aW9uL3ZuZC5mZGYnXSxcbiAgICBbJ2ZkdCcsICdhcHBsaWNhdGlvbi9mZHQreG1sJ10sXG4gICAgWydmZV9sYXVuY2gnLCAnYXBwbGljYXRpb24vdm5kLmRlbm92by5mY3NlbGF5b3V0LWxpbmsnXSxcbiAgICBbJ2ZnNScsICdhcHBsaWNhdGlvbi92bmQuZnVqaXRzdS5vYXN5c2dwJ10sXG4gICAgWydmZ2QnLCAnYXBwbGljYXRpb24veC1kaXJlY3RvciddLFxuICAgIFsnZmgnLCAnaW1hZ2UveC1mcmVlaGFuZCddLFxuICAgIFsnZmg0JywgJ2ltYWdlL3gtZnJlZWhhbmQnXSxcbiAgICBbJ2ZoNScsICdpbWFnZS94LWZyZWVoYW5kJ10sXG4gICAgWydmaDcnLCAnaW1hZ2UveC1mcmVlaGFuZCddLFxuICAgIFsnZmhjJywgJ2ltYWdlL3gtZnJlZWhhbmQnXSxcbiAgICBbJ2ZpZycsICdhcHBsaWNhdGlvbi94LXhmaWcnXSxcbiAgICBbJ2ZpdHMnLCAnaW1hZ2UvZml0cyddLFxuICAgIFsnZmxhYycsICdhdWRpby94LWZsYWMnXSxcbiAgICBbJ2ZsaScsICd2aWRlby94LWZsaSddLFxuICAgIFsnZmxvJywgJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb2dyYWZ4LmZsbyddLFxuICAgIFsnZmx2JywgJ3ZpZGVvL3gtZmx2J10sXG4gICAgWydmbHcnLCAnYXBwbGljYXRpb24vdm5kLmtkZS5raXZpbyddLFxuICAgIFsnZmx4JywgJ3RleHQvdm5kLmZtaS5mbGV4c3RvciddLFxuICAgIFsnZmx5JywgJ3RleHQvdm5kLmZseSddLFxuICAgIFsnZm0nLCAnYXBwbGljYXRpb24vdm5kLmZyYW1lbWFrZXInXSxcbiAgICBbJ2ZuYycsICdhcHBsaWNhdGlvbi92bmQuZnJvZ2Fucy5mbmMnXSxcbiAgICBbJ2ZvJywgJ2FwcGxpY2F0aW9uL3ZuZC5zb2Z0d2FyZTYwMi5maWxsZXIuZm9ybSt4bWwnXSxcbiAgICBbJ2ZvcicsICd0ZXh0L3gtZm9ydHJhbiddLFxuICAgIFsnZnB4JywgJ2ltYWdlL3ZuZC5mcHgnXSxcbiAgICBbJ2ZyYW1lJywgJ2FwcGxpY2F0aW9uL3ZuZC5mcmFtZW1ha2VyJ10sXG4gICAgWydmc2MnLCAnYXBwbGljYXRpb24vdm5kLmZzYy53ZWJsYXVuY2gnXSxcbiAgICBbJ2ZzdCcsICdpbWFnZS92bmQuZnN0J10sXG4gICAgWydmdGMnLCAnYXBwbGljYXRpb24vdm5kLmZsdXh0aW1lLmNsaXAnXSxcbiAgICBbJ2Z0aScsICdhcHBsaWNhdGlvbi92bmQuYW5zZXItd2ViLWZ1bmRzLXRyYW5zZmVyLWluaXRpYXRpb24nXSxcbiAgICBbJ2Z2dCcsICd2aWRlby92bmQuZnZ0J10sXG4gICAgWydmeHAnLCAnYXBwbGljYXRpb24vdm5kLmFkb2JlLmZ4cCddLFxuICAgIFsnZnhwbCcsICdhcHBsaWNhdGlvbi92bmQuYWRvYmUuZnhwJ10sXG4gICAgWydmenMnLCAnYXBwbGljYXRpb24vdm5kLmZ1enp5c2hlZXQnXSxcbiAgICBbJ2cydycsICdhcHBsaWNhdGlvbi92bmQuZ2VvcGxhbiddLFxuICAgIFsnZzMnLCAnaW1hZ2UvZzNmYXgnXSxcbiAgICBbJ2czdycsICdhcHBsaWNhdGlvbi92bmQuZ2Vvc3BhY2UnXSxcbiAgICBbJ2dhYycsICdhcHBsaWNhdGlvbi92bmQuZ3Jvb3ZlLWFjY291bnQnXSxcbiAgICBbJ2dhbScsICdhcHBsaWNhdGlvbi94LXRhZHMnXSxcbiAgICBbJ2dicicsICdhcHBsaWNhdGlvbi9ycGtpLWdob3N0YnVzdGVycyddLFxuICAgIFsnZ2NhJywgJ2FwcGxpY2F0aW9uL3gtZ2NhLWNvbXByZXNzZWQnXSxcbiAgICBbJ2dkbCcsICdtb2RlbC92bmQuZ2RsJ10sXG4gICAgWydnZG9jJywgJ2FwcGxpY2F0aW9uL3ZuZC5nb29nbGUtYXBwcy5kb2N1bWVudCddLFxuICAgIFsnZ2VvJywgJ2FwcGxpY2F0aW9uL3ZuZC5keW5hZ2VvJ10sXG4gICAgWydnZW9qc29uJywgJ2FwcGxpY2F0aW9uL2dlbytqc29uJ10sXG4gICAgWydnZXgnLCAnYXBwbGljYXRpb24vdm5kLmdlb21ldHJ5LWV4cGxvcmVyJ10sXG4gICAgWydnZ2InLCAnYXBwbGljYXRpb24vdm5kLmdlb2dlYnJhLmZpbGUnXSxcbiAgICBbJ2dndCcsICdhcHBsaWNhdGlvbi92bmQuZ2VvZ2VicmEudG9vbCddLFxuICAgIFsnZ2hmJywgJ2FwcGxpY2F0aW9uL3ZuZC5ncm9vdmUtaGVscCddLFxuICAgIFsnZ2lmJywgJ2ltYWdlL2dpZiddLFxuICAgIFsnZ2ltJywgJ2FwcGxpY2F0aW9uL3ZuZC5ncm9vdmUtaWRlbnRpdHktbWVzc2FnZSddLFxuICAgIFsnZ2xiJywgJ21vZGVsL2dsdGYtYmluYXJ5J10sXG4gICAgWydnbHRmJywgJ21vZGVsL2dsdGYranNvbiddLFxuICAgIFsnZ21sJywgJ2FwcGxpY2F0aW9uL2dtbCt4bWwnXSxcbiAgICBbJ2dteCcsICdhcHBsaWNhdGlvbi92bmQuZ214J10sXG4gICAgWydnbnVtZXJpYycsICdhcHBsaWNhdGlvbi94LWdudW1lcmljJ10sXG4gICAgWydncGcnLCAnYXBwbGljYXRpb24vZ3BnLWtleXMnXSxcbiAgICBbJ2dwaCcsICdhcHBsaWNhdGlvbi92bmQuZmxvZ3JhcGhpdCddLFxuICAgIFsnZ3B4JywgJ2FwcGxpY2F0aW9uL2dweCt4bWwnXSxcbiAgICBbJ2dxZicsICdhcHBsaWNhdGlvbi92bmQuZ3JhZmVxJ10sXG4gICAgWydncXMnLCAnYXBwbGljYXRpb24vdm5kLmdyYWZlcSddLFxuICAgIFsnZ3JhbScsICdhcHBsaWNhdGlvbi9zcmdzJ10sXG4gICAgWydncmFtcHMnLCAnYXBwbGljYXRpb24veC1ncmFtcHMteG1sJ10sXG4gICAgWydncmUnLCAnYXBwbGljYXRpb24vdm5kLmdlb21ldHJ5LWV4cGxvcmVyJ10sXG4gICAgWydncnYnLCAnYXBwbGljYXRpb24vdm5kLmdyb292ZS1pbmplY3RvciddLFxuICAgIFsnZ3J4bWwnLCAnYXBwbGljYXRpb24vc3Jncyt4bWwnXSxcbiAgICBbJ2dzZicsICdhcHBsaWNhdGlvbi94LWZvbnQtZ2hvc3RzY3JpcHQnXSxcbiAgICBbJ2dzaGVldCcsICdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWFwcHMuc3ByZWFkc2hlZXQnXSxcbiAgICBbJ2dzbGlkZXMnLCAnYXBwbGljYXRpb24vdm5kLmdvb2dsZS1hcHBzLnByZXNlbnRhdGlvbiddLFxuICAgIFsnZ3RhcicsICdhcHBsaWNhdGlvbi94LWd0YXInXSxcbiAgICBbJ2d0bScsICdhcHBsaWNhdGlvbi92bmQuZ3Jvb3ZlLXRvb2wtbWVzc2FnZSddLFxuICAgIFsnZ3R3JywgJ21vZGVsL3ZuZC5ndHcnXSxcbiAgICBbJ2d2JywgJ3RleHQvdm5kLmdyYXBodml6J10sXG4gICAgWydneGYnLCAnYXBwbGljYXRpb24vZ3hmJ10sXG4gICAgWydneHQnLCAnYXBwbGljYXRpb24vdm5kLmdlb25leHQnXSxcbiAgICBbJ2d6JywgJ2FwcGxpY2F0aW9uL2d6aXAnXSxcbiAgICBbJ2d6aXAnLCAnYXBwbGljYXRpb24vZ3ppcCddLFxuICAgIFsnaCcsICd0ZXh0L3gtYyddLFxuICAgIFsnaDI2MScsICd2aWRlby9oMjYxJ10sXG4gICAgWydoMjYzJywgJ3ZpZGVvL2gyNjMnXSxcbiAgICBbJ2gyNjQnLCAndmlkZW8vaDI2NCddLFxuICAgIFsnaGFsJywgJ2FwcGxpY2F0aW9uL3ZuZC5oYWwreG1sJ10sXG4gICAgWydoYmNpJywgJ2FwcGxpY2F0aW9uL3ZuZC5oYmNpJ10sXG4gICAgWydoYnMnLCAndGV4dC94LWhhbmRsZWJhcnMtdGVtcGxhdGUnXSxcbiAgICBbJ2hkZCcsICdhcHBsaWNhdGlvbi94LXZpcnR1YWxib3gtaGRkJ10sXG4gICAgWydoZGYnLCAnYXBwbGljYXRpb24veC1oZGYnXSxcbiAgICBbJ2hlaWMnLCAnaW1hZ2UvaGVpYyddLFxuICAgIFsnaGVpY3MnLCAnaW1hZ2UvaGVpYy1zZXF1ZW5jZSddLFxuICAgIFsnaGVpZicsICdpbWFnZS9oZWlmJ10sXG4gICAgWydoZWlmcycsICdpbWFnZS9oZWlmLXNlcXVlbmNlJ10sXG4gICAgWydoZWoyJywgJ2ltYWdlL2hlajJrJ10sXG4gICAgWydoZWxkJywgJ2FwcGxpY2F0aW9uL2F0c2MtaGVsZCt4bWwnXSxcbiAgICBbJ2hoJywgJ3RleHQveC1jJ10sXG4gICAgWydoanNvbicsICdhcHBsaWNhdGlvbi9oanNvbiddLFxuICAgIFsnaGxwJywgJ2FwcGxpY2F0aW9uL3dpbmhscCddLFxuICAgIFsnaHBnbCcsICdhcHBsaWNhdGlvbi92bmQuaHAtaHBnbCddLFxuICAgIFsnaHBpZCcsICdhcHBsaWNhdGlvbi92bmQuaHAtaHBpZCddLFxuICAgIFsnaHBzJywgJ2FwcGxpY2F0aW9uL3ZuZC5ocC1ocHMnXSxcbiAgICBbJ2hxeCcsICdhcHBsaWNhdGlvbi9tYWMtYmluaGV4NDAnXSxcbiAgICBbJ2hzajInLCAnaW1hZ2UvaHNqMiddLFxuICAgIFsnaHRjJywgJ3RleHQveC1jb21wb25lbnQnXSxcbiAgICBbJ2h0a2UnLCAnYXBwbGljYXRpb24vdm5kLmtlbmFtZWFhcHAnXSxcbiAgICBbJ2h0bScsICd0ZXh0L2h0bWwnXSxcbiAgICBbJ2h0bWwnLCAndGV4dC9odG1sJ10sXG4gICAgWydodmQnLCAnYXBwbGljYXRpb24vdm5kLnlhbWFoYS5odi1kaWMnXSxcbiAgICBbJ2h2cCcsICdhcHBsaWNhdGlvbi92bmQueWFtYWhhLmh2LXZvaWNlJ10sXG4gICAgWydodnMnLCAnYXBwbGljYXRpb24vdm5kLnlhbWFoYS5odi1zY3JpcHQnXSxcbiAgICBbJ2kyZycsICdhcHBsaWNhdGlvbi92bmQuaW50ZXJnZW8nXSxcbiAgICBbJ2ljYycsICdhcHBsaWNhdGlvbi92bmQuaWNjcHJvZmlsZSddLFxuICAgIFsnaWNlJywgJ3gtY29uZmVyZW5jZS94LWNvb2x0YWxrJ10sXG4gICAgWydpY20nLCAnYXBwbGljYXRpb24vdm5kLmljY3Byb2ZpbGUnXSxcbiAgICBbJ2ljbycsICdpbWFnZS94LWljb24nXSxcbiAgICBbJ2ljcycsICd0ZXh0L2NhbGVuZGFyJ10sXG4gICAgWydpZWYnLCAnaW1hZ2UvaWVmJ10sXG4gICAgWydpZmInLCAndGV4dC9jYWxlbmRhciddLFxuICAgIFsnaWZtJywgJ2FwcGxpY2F0aW9uL3ZuZC5zaGFuYS5pbmZvcm1lZC5mb3JtZGF0YSddLFxuICAgIFsnaWdlcycsICdtb2RlbC9pZ2VzJ10sXG4gICAgWydpZ2wnLCAnYXBwbGljYXRpb24vdm5kLmlnbG9hZGVyJ10sXG4gICAgWydpZ20nLCAnYXBwbGljYXRpb24vdm5kLmluc29ycy5pZ20nXSxcbiAgICBbJ2lncycsICdtb2RlbC9pZ2VzJ10sXG4gICAgWydpZ3gnLCAnYXBwbGljYXRpb24vdm5kLm1pY3JvZ3JhZnguaWd4J10sXG4gICAgWydpaWYnLCAnYXBwbGljYXRpb24vdm5kLnNoYW5hLmluZm9ybWVkLmludGVyY2hhbmdlJ10sXG4gICAgWydpbWcnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydpbXAnLCAnYXBwbGljYXRpb24vdm5kLmFjY3BhYy5zaW1wbHkuaW1wJ10sXG4gICAgWydpbXMnLCAnYXBwbGljYXRpb24vdm5kLm1zLWltcyddLFxuICAgIFsnaW4nLCAndGV4dC9wbGFpbiddLFxuICAgIFsnaW5pJywgJ3RleHQvcGxhaW4nXSxcbiAgICBbJ2luaycsICdhcHBsaWNhdGlvbi9pbmttbCt4bWwnXSxcbiAgICBbJ2lua21sJywgJ2FwcGxpY2F0aW9uL2lua21sK3htbCddLFxuICAgIFsnaW5zdGFsbCcsICdhcHBsaWNhdGlvbi94LWluc3RhbGwtaW5zdHJ1Y3Rpb25zJ10sXG4gICAgWydpb3RhJywgJ2FwcGxpY2F0aW9uL3ZuZC5hc3RyYWVhLXNvZnR3YXJlLmlvdGEnXSxcbiAgICBbJ2lwZml4JywgJ2FwcGxpY2F0aW9uL2lwZml4J10sXG4gICAgWydpcGsnLCAnYXBwbGljYXRpb24vdm5kLnNoYW5hLmluZm9ybWVkLnBhY2thZ2UnXSxcbiAgICBbJ2lybScsICdhcHBsaWNhdGlvbi92bmQuaWJtLnJpZ2h0cy1tYW5hZ2VtZW50J10sXG4gICAgWydpcnAnLCAnYXBwbGljYXRpb24vdm5kLmlyZXBvc2l0b3J5LnBhY2thZ2UreG1sJ10sXG4gICAgWydpc28nLCAnYXBwbGljYXRpb24veC1pc285NjYwLWltYWdlJ10sXG4gICAgWydpdHAnLCAnYXBwbGljYXRpb24vdm5kLnNoYW5hLmluZm9ybWVkLmZvcm10ZW1wbGF0ZSddLFxuICAgIFsnaXRzJywgJ2FwcGxpY2F0aW9uL2l0cyt4bWwnXSxcbiAgICBbJ2l2cCcsICdhcHBsaWNhdGlvbi92bmQuaW1tZXJ2aXNpb24taXZwJ10sXG4gICAgWydpdnUnLCAnYXBwbGljYXRpb24vdm5kLmltbWVydmlzaW9uLWl2dSddLFxuICAgIFsnamFkJywgJ3RleHQvdm5kLnN1bi5qMm1lLmFwcC1kZXNjcmlwdG9yJ10sXG4gICAgWydqYWRlJywgJ3RleHQvamFkZSddLFxuICAgIFsnamFtJywgJ2FwcGxpY2F0aW9uL3ZuZC5qYW0nXSxcbiAgICBbJ2phcicsICdhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmUnXSxcbiAgICBbJ2phcmRpZmYnLCAnYXBwbGljYXRpb24veC1qYXZhLWFyY2hpdmUtZGlmZiddLFxuICAgIFsnamF2YScsICd0ZXh0L3gtamF2YS1zb3VyY2UnXSxcbiAgICBbJ2poYycsICdpbWFnZS9qcGhjJ10sXG4gICAgWydqaXNwJywgJ2FwcGxpY2F0aW9uL3ZuZC5qaXNwJ10sXG4gICAgWydqbHMnLCAnaW1hZ2UvamxzJ10sXG4gICAgWydqbHQnLCAnYXBwbGljYXRpb24vdm5kLmhwLWpseXQnXSxcbiAgICBbJ2puZycsICdpbWFnZS94LWpuZyddLFxuICAgIFsnam5scCcsICdhcHBsaWNhdGlvbi94LWphdmEtam5scC1maWxlJ10sXG4gICAgWydqb2RhJywgJ2FwcGxpY2F0aW9uL3ZuZC5qb29zdC5qb2RhLWFyY2hpdmUnXSxcbiAgICBbJ2pwMicsICdpbWFnZS9qcDInXSxcbiAgICBbJ2pwZScsICdpbWFnZS9qcGVnJ10sXG4gICAgWydqcGVnJywgJ2ltYWdlL2pwZWcnXSxcbiAgICBbJ2pwZicsICdpbWFnZS9qcHgnXSxcbiAgICBbJ2pwZycsICdpbWFnZS9qcGVnJ10sXG4gICAgWydqcGcyJywgJ2ltYWdlL2pwMiddLFxuICAgIFsnanBnbScsICd2aWRlby9qcG0nXSxcbiAgICBbJ2pwZ3YnLCAndmlkZW8vanBlZyddLFxuICAgIFsnanBoJywgJ2ltYWdlL2pwaCddLFxuICAgIFsnanBtJywgJ3ZpZGVvL2pwbSddLFxuICAgIFsnanB4JywgJ2ltYWdlL2pweCddLFxuICAgIFsnanMnLCAnYXBwbGljYXRpb24vamF2YXNjcmlwdCddLFxuICAgIFsnanNvbicsICdhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgWydqc29uNScsICdhcHBsaWNhdGlvbi9qc29uNSddLFxuICAgIFsnanNvbmxkJywgJ2FwcGxpY2F0aW9uL2xkK2pzb24nXSxcbiAgICAvLyBodHRwczovL2pzb25saW5lcy5vcmcvXG4gICAgWydqc29ubCcsICdhcHBsaWNhdGlvbi9qc29ubCddLFxuICAgIFsnanNvbm1sJywgJ2FwcGxpY2F0aW9uL2pzb25tbCtqc29uJ10sXG4gICAgWydqc3gnLCAndGV4dC9qc3gnXSxcbiAgICBbJ2p4cicsICdpbWFnZS9qeHInXSxcbiAgICBbJ2p4cmEnLCAnaW1hZ2UvanhyYSddLFxuICAgIFsnanhycycsICdpbWFnZS9qeHJzJ10sXG4gICAgWydqeHMnLCAnaW1hZ2UvanhzJ10sXG4gICAgWydqeHNjJywgJ2ltYWdlL2p4c2MnXSxcbiAgICBbJ2p4c2knLCAnaW1hZ2UvanhzaSddLFxuICAgIFsnanhzcycsICdpbWFnZS9qeHNzJ10sXG4gICAgWydrYXInLCAnYXVkaW8vbWlkaSddLFxuICAgIFsna2FyYm9uJywgJ2FwcGxpY2F0aW9uL3ZuZC5rZGUua2FyYm9uJ10sXG4gICAgWydrZGInLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydrZGJ4JywgJ2FwcGxpY2F0aW9uL3gta2VlcGFzczInXSxcbiAgICBbJ2tleScsICdhcHBsaWNhdGlvbi94LWl3b3JrLWtleW5vdGUtc2Zma2V5J10sXG4gICAgWydrZm8nLCAnYXBwbGljYXRpb24vdm5kLmtkZS5rZm9ybXVsYSddLFxuICAgIFsna2lhJywgJ2FwcGxpY2F0aW9uL3ZuZC5raWRzcGlyYXRpb24nXSxcbiAgICBbJ2ttbCcsICdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWVhcnRoLmttbCt4bWwnXSxcbiAgICBbJ2tteicsICdhcHBsaWNhdGlvbi92bmQuZ29vZ2xlLWVhcnRoLmtteiddLFxuICAgIFsna25lJywgJ2FwcGxpY2F0aW9uL3ZuZC5raW5hciddLFxuICAgIFsna25wJywgJ2FwcGxpY2F0aW9uL3ZuZC5raW5hciddLFxuICAgIFsna29uJywgJ2FwcGxpY2F0aW9uL3ZuZC5rZGUua29udG91ciddLFxuICAgIFsna3ByJywgJ2FwcGxpY2F0aW9uL3ZuZC5rZGUua3ByZXNlbnRlciddLFxuICAgIFsna3B0JywgJ2FwcGxpY2F0aW9uL3ZuZC5rZGUua3ByZXNlbnRlciddLFxuICAgIFsna3B4eCcsICdhcHBsaWNhdGlvbi92bmQuZHMta2V5cG9pbnQnXSxcbiAgICBbJ2tzcCcsICdhcHBsaWNhdGlvbi92bmQua2RlLmtzcHJlYWQnXSxcbiAgICBbJ2t0cicsICdhcHBsaWNhdGlvbi92bmQua2Fob290eiddLFxuICAgIFsna3R4JywgJ2ltYWdlL2t0eCddLFxuICAgIFsna3R4MicsICdpbWFnZS9rdHgyJ10sXG4gICAgWydrdHonLCAnYXBwbGljYXRpb24vdm5kLmthaG9vdHonXSxcbiAgICBbJ2t3ZCcsICdhcHBsaWNhdGlvbi92bmQua2RlLmt3b3JkJ10sXG4gICAgWydrd3QnLCAnYXBwbGljYXRpb24vdm5kLmtkZS5rd29yZCddLFxuICAgIFsnbGFzeG1sJywgJ2FwcGxpY2F0aW9uL3ZuZC5sYXMubGFzK3htbCddLFxuICAgIFsnbGF0ZXgnLCAnYXBwbGljYXRpb24veC1sYXRleCddLFxuICAgIFsnbGJkJywgJ2FwcGxpY2F0aW9uL3ZuZC5sbGFtYWdyYXBoaWNzLmxpZmUtYmFsYW5jZS5kZXNrdG9wJ10sXG4gICAgWydsYmUnLCAnYXBwbGljYXRpb24vdm5kLmxsYW1hZ3JhcGhpY3MubGlmZS1iYWxhbmNlLmV4Y2hhbmdlK3htbCddLFxuICAgIFsnbGVzJywgJ2FwcGxpY2F0aW9uL3ZuZC5oaGUubGVzc29uLXBsYXllciddLFxuICAgIFsnbGVzcycsICd0ZXh0L2xlc3MnXSxcbiAgICBbJ2xncicsICdhcHBsaWNhdGlvbi9sZ3IreG1sJ10sXG4gICAgWydsaGEnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydsaW5rNjYnLCAnYXBwbGljYXRpb24vdm5kLnJvdXRlNjYubGluazY2K3htbCddLFxuICAgIFsnbGlzdCcsICd0ZXh0L3BsYWluJ10sXG4gICAgWydsaXN0MzgyMCcsICdhcHBsaWNhdGlvbi92bmQuaWJtLm1vZGNhcCddLFxuICAgIFsnbGlzdGFmcCcsICdhcHBsaWNhdGlvbi92bmQuaWJtLm1vZGNhcCddLFxuICAgIFsnbGl0Y29mZmVlJywgJ3RleHQvY29mZmVlc2NyaXB0J10sXG4gICAgWydsbmsnLCAnYXBwbGljYXRpb24veC1tcy1zaG9ydGN1dCddLFxuICAgIFsnbG9nJywgJ3RleHQvcGxhaW4nXSxcbiAgICBbJ2xvc3R4bWwnLCAnYXBwbGljYXRpb24vbG9zdCt4bWwnXSxcbiAgICBbJ2xyZicsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ2xybScsICdhcHBsaWNhdGlvbi92bmQubXMtbHJtJ10sXG4gICAgWydsdGYnLCAnYXBwbGljYXRpb24vdm5kLmZyb2dhbnMubHRmJ10sXG4gICAgWydsdWEnLCAndGV4dC94LWx1YSddLFxuICAgIFsnbHVhYycsICdhcHBsaWNhdGlvbi94LWx1YS1ieXRlY29kZSddLFxuICAgIFsnbHZwJywgJ2F1ZGlvL3ZuZC5sdWNlbnQudm9pY2UnXSxcbiAgICBbJ2x3cCcsICdhcHBsaWNhdGlvbi92bmQubG90dXMtd29yZHBybyddLFxuICAgIFsnbHpoJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnbTF2JywgJ3ZpZGVvL21wZWcnXSxcbiAgICBbJ20yYScsICdhdWRpby9tcGVnJ10sXG4gICAgWydtMnYnLCAndmlkZW8vbXBlZyddLFxuICAgIFsnbTNhJywgJ2F1ZGlvL21wZWcnXSxcbiAgICBbJ20zdScsICd0ZXh0L3BsYWluJ10sXG4gICAgWydtM3U4JywgJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5tcGVndXJsJ10sXG4gICAgWydtNGEnLCAnYXVkaW8veC1tNGEnXSxcbiAgICBbJ200cCcsICdhcHBsaWNhdGlvbi9tcDQnXSxcbiAgICBbJ200cycsICd2aWRlby9pc28uc2VnbWVudCddLFxuICAgIFsnbTR1JywgJ2FwcGxpY2F0aW9uL3ZuZC5tcGVndXJsJ10sXG4gICAgWydtNHYnLCAndmlkZW8veC1tNHYnXSxcbiAgICBbJ20xMycsICdhcHBsaWNhdGlvbi94LW1zbWVkaWF2aWV3J10sXG4gICAgWydtMTQnLCAnYXBwbGljYXRpb24veC1tc21lZGlhdmlldyddLFxuICAgIFsnbTIxJywgJ2FwcGxpY2F0aW9uL21wMjEnXSxcbiAgICBbJ21hJywgJ2FwcGxpY2F0aW9uL21hdGhlbWF0aWNhJ10sXG4gICAgWydtYWRzJywgJ2FwcGxpY2F0aW9uL21hZHMreG1sJ10sXG4gICAgWydtYWVpJywgJ2FwcGxpY2F0aW9uL21tdC1hZWkreG1sJ10sXG4gICAgWydtYWcnLCAnYXBwbGljYXRpb24vdm5kLmVjb3dpbi5jaGFydCddLFxuICAgIFsnbWFrZXInLCAnYXBwbGljYXRpb24vdm5kLmZyYW1lbWFrZXInXSxcbiAgICBbJ21hbicsICd0ZXh0L3Ryb2ZmJ10sXG4gICAgWydtYW5pZmVzdCcsICd0ZXh0L2NhY2hlLW1hbmlmZXN0J10sXG4gICAgWydtYXAnLCAnYXBwbGljYXRpb24vanNvbiddLFxuICAgIFsnbWFyJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnbWFya2Rvd24nLCAndGV4dC9tYXJrZG93biddLFxuICAgIFsnbWF0aG1sJywgJ2FwcGxpY2F0aW9uL21hdGhtbCt4bWwnXSxcbiAgICBbJ21iJywgJ2FwcGxpY2F0aW9uL21hdGhlbWF0aWNhJ10sXG4gICAgWydtYmsnLCAnYXBwbGljYXRpb24vdm5kLm1vYml1cy5tYmsnXSxcbiAgICBbJ21ib3gnLCAnYXBwbGljYXRpb24vbWJveCddLFxuICAgIFsnbWMxJywgJ2FwcGxpY2F0aW9uL3ZuZC5tZWRjYWxjZGF0YSddLFxuICAgIFsnbWNkJywgJ2FwcGxpY2F0aW9uL3ZuZC5tY2QnXSxcbiAgICBbJ21jdXJsJywgJ3RleHQvdm5kLmN1cmwubWN1cmwnXSxcbiAgICBbJ21kJywgJ3RleHQvbWFya2Rvd24nXSxcbiAgICBbJ21kYicsICdhcHBsaWNhdGlvbi94LW1zYWNjZXNzJ10sXG4gICAgWydtZGknLCAnaW1hZ2Uvdm5kLm1zLW1vZGknXSxcbiAgICBbJ21keCcsICd0ZXh0L21keCddLFxuICAgIFsnbWUnLCAndGV4dC90cm9mZiddLFxuICAgIFsnbWVzaCcsICdtb2RlbC9tZXNoJ10sXG4gICAgWydtZXRhNCcsICdhcHBsaWNhdGlvbi9tZXRhbGluazQreG1sJ10sXG4gICAgWydtZXRhbGluaycsICdhcHBsaWNhdGlvbi9tZXRhbGluayt4bWwnXSxcbiAgICBbJ21ldHMnLCAnYXBwbGljYXRpb24vbWV0cyt4bWwnXSxcbiAgICBbJ21mbScsICdhcHBsaWNhdGlvbi92bmQubWZtcCddLFxuICAgIFsnbWZ0JywgJ2FwcGxpY2F0aW9uL3Jwa2ktbWFuaWZlc3QnXSxcbiAgICBbJ21ncCcsICdhcHBsaWNhdGlvbi92bmQub3NnZW8ubWFwZ3VpZGUucGFja2FnZSddLFxuICAgIFsnbWd6JywgJ2FwcGxpY2F0aW9uL3ZuZC5wcm90ZXVzLm1hZ2F6aW5lJ10sXG4gICAgWydtaWQnLCAnYXVkaW8vbWlkaSddLFxuICAgIFsnbWlkaScsICdhdWRpby9taWRpJ10sXG4gICAgWydtaWUnLCAnYXBwbGljYXRpb24veC1taWUnXSxcbiAgICBbJ21pZicsICdhcHBsaWNhdGlvbi92bmQubWlmJ10sXG4gICAgWydtaW1lJywgJ21lc3NhZ2UvcmZjODIyJ10sXG4gICAgWydtajInLCAndmlkZW8vbWoyJ10sXG4gICAgWydtanAyJywgJ3ZpZGVvL21qMiddLFxuICAgIFsnbWpzJywgJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnXSxcbiAgICBbJ21rM2QnLCAndmlkZW8veC1tYXRyb3NrYSddLFxuICAgIFsnbWthJywgJ2F1ZGlvL3gtbWF0cm9za2EnXSxcbiAgICBbJ21rZCcsICd0ZXh0L3gtbWFya2Rvd24nXSxcbiAgICBbJ21rcycsICd2aWRlby94LW1hdHJvc2thJ10sXG4gICAgWydta3YnLCAndmlkZW8veC1tYXRyb3NrYSddLFxuICAgIFsnbWxwJywgJ2FwcGxpY2F0aW9uL3ZuZC5kb2xieS5tbHAnXSxcbiAgICBbJ21tZCcsICdhcHBsaWNhdGlvbi92bmQuY2hpcG51dHMua2FyYW9rZS1tbWQnXSxcbiAgICBbJ21tZicsICdhcHBsaWNhdGlvbi92bmQuc21hZiddLFxuICAgIFsnbW1sJywgJ3RleHQvbWF0aG1sJ10sXG4gICAgWydtbXInLCAnaW1hZ2Uvdm5kLmZ1aml4ZXJveC5lZG1pY3MtbW1yJ10sXG4gICAgWydtbmcnLCAndmlkZW8veC1tbmcnXSxcbiAgICBbJ21ueScsICdhcHBsaWNhdGlvbi94LW1zbW9uZXknXSxcbiAgICBbJ21vYmknLCAnYXBwbGljYXRpb24veC1tb2JpcG9ja2V0LWVib29rJ10sXG4gICAgWydtb2RzJywgJ2FwcGxpY2F0aW9uL21vZHMreG1sJ10sXG4gICAgWydtb3YnLCAndmlkZW8vcXVpY2t0aW1lJ10sXG4gICAgWydtb3ZpZScsICd2aWRlby94LXNnaS1tb3ZpZSddLFxuICAgIFsnbXAyJywgJ2F1ZGlvL21wZWcnXSxcbiAgICBbJ21wMmEnLCAnYXVkaW8vbXBlZyddLFxuICAgIFsnbXAzJywgJ2F1ZGlvL21wZWcnXSxcbiAgICBbJ21wNCcsICd2aWRlby9tcDQnXSxcbiAgICBbJ21wNGEnLCAnYXVkaW8vbXA0J10sXG4gICAgWydtcDRzJywgJ2FwcGxpY2F0aW9uL21wNCddLFxuICAgIFsnbXA0dicsICd2aWRlby9tcDQnXSxcbiAgICBbJ21wMjEnLCAnYXBwbGljYXRpb24vbXAyMSddLFxuICAgIFsnbXBjJywgJ2FwcGxpY2F0aW9uL3ZuZC5tb3BodW4uY2VydGlmaWNhdGUnXSxcbiAgICBbJ21wZCcsICdhcHBsaWNhdGlvbi9kYXNoK3htbCddLFxuICAgIFsnbXBlJywgJ3ZpZGVvL21wZWcnXSxcbiAgICBbJ21wZWcnLCAndmlkZW8vbXBlZyddLFxuICAgIFsnbXBnJywgJ3ZpZGVvL21wZWcnXSxcbiAgICBbJ21wZzQnLCAndmlkZW8vbXA0J10sXG4gICAgWydtcGdhJywgJ2F1ZGlvL21wZWcnXSxcbiAgICBbJ21wa2cnLCAnYXBwbGljYXRpb24vdm5kLmFwcGxlLmluc3RhbGxlcit4bWwnXSxcbiAgICBbJ21wbScsICdhcHBsaWNhdGlvbi92bmQuYmx1ZWljZS5tdWx0aXBhc3MnXSxcbiAgICBbJ21wbicsICdhcHBsaWNhdGlvbi92bmQubW9waHVuLmFwcGxpY2F0aW9uJ10sXG4gICAgWydtcHAnLCAnYXBwbGljYXRpb24vdm5kLm1zLXByb2plY3QnXSxcbiAgICBbJ21wdCcsICdhcHBsaWNhdGlvbi92bmQubXMtcHJvamVjdCddLFxuICAgIFsnbXB5JywgJ2FwcGxpY2F0aW9uL3ZuZC5pYm0ubWluaXBheSddLFxuICAgIFsnbXF5JywgJ2FwcGxpY2F0aW9uL3ZuZC5tb2JpdXMubXF5J10sXG4gICAgWydtcmMnLCAnYXBwbGljYXRpb24vbWFyYyddLFxuICAgIFsnbXJjeCcsICdhcHBsaWNhdGlvbi9tYXJjeG1sK3htbCddLFxuICAgIFsnbXMnLCAndGV4dC90cm9mZiddLFxuICAgIFsnbXNjbWwnLCAnYXBwbGljYXRpb24vbWVkaWFzZXJ2ZXJjb250cm9sK3htbCddLFxuICAgIFsnbXNlZWQnLCAnYXBwbGljYXRpb24vdm5kLmZkc24ubXNlZWQnXSxcbiAgICBbJ21zZXEnLCAnYXBwbGljYXRpb24vdm5kLm1zZXEnXSxcbiAgICBbJ21zZicsICdhcHBsaWNhdGlvbi92bmQuZXBzb24ubXNmJ10sXG4gICAgWydtc2cnLCAnYXBwbGljYXRpb24vdm5kLm1zLW91dGxvb2snXSxcbiAgICBbJ21zaCcsICdtb2RlbC9tZXNoJ10sXG4gICAgWydtc2knLCAnYXBwbGljYXRpb24veC1tc2Rvd25sb2FkJ10sXG4gICAgWydtc2wnLCAnYXBwbGljYXRpb24vdm5kLm1vYml1cy5tc2wnXSxcbiAgICBbJ21zbScsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ21zcCcsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ21zdHknLCAnYXBwbGljYXRpb24vdm5kLm11dmVlLnN0eWxlJ10sXG4gICAgWydtdGwnLCAnbW9kZWwvbXRsJ10sXG4gICAgWydtdHMnLCAnbW9kZWwvdm5kLm10cyddLFxuICAgIFsnbXVzJywgJ2FwcGxpY2F0aW9uL3ZuZC5tdXNpY2lhbiddLFxuICAgIFsnbXVzZCcsICdhcHBsaWNhdGlvbi9tbXQtdXNkK3htbCddLFxuICAgIFsnbXVzaWN4bWwnLCAnYXBwbGljYXRpb24vdm5kLnJlY29yZGFyZS5tdXNpY3htbCt4bWwnXSxcbiAgICBbJ212YicsICdhcHBsaWNhdGlvbi94LW1zbWVkaWF2aWV3J10sXG4gICAgWydtdnQnLCAnYXBwbGljYXRpb24vdm5kLm1hcGJveC12ZWN0b3ItdGlsZSddLFxuICAgIFsnbXdmJywgJ2FwcGxpY2F0aW9uL3ZuZC5tZmVyJ10sXG4gICAgWydteGYnLCAnYXBwbGljYXRpb24vbXhmJ10sXG4gICAgWydteGwnLCAnYXBwbGljYXRpb24vdm5kLnJlY29yZGFyZS5tdXNpY3htbCddLFxuICAgIFsnbXhtZicsICdhdWRpby9tb2JpbGUteG1mJ10sXG4gICAgWydteG1sJywgJ2FwcGxpY2F0aW9uL3h2K3htbCddLFxuICAgIFsnbXhzJywgJ2FwcGxpY2F0aW9uL3ZuZC50cmlzY2FwZS5teHMnXSxcbiAgICBbJ214dScsICd2aWRlby92bmQubXBlZ3VybCddLFxuICAgIFsnbi1nYWdlJywgJ2FwcGxpY2F0aW9uL3ZuZC5ub2tpYS5uLWdhZ2Uuc3ltYmlhbi5pbnN0YWxsJ10sXG4gICAgWyduMycsICd0ZXh0L24zJ10sXG4gICAgWyduYicsICdhcHBsaWNhdGlvbi9tYXRoZW1hdGljYSddLFxuICAgIFsnbmJwJywgJ2FwcGxpY2F0aW9uL3ZuZC53b2xmcmFtLnBsYXllciddLFxuICAgIFsnbmMnLCAnYXBwbGljYXRpb24veC1uZXRjZGYnXSxcbiAgICBbJ25jeCcsICdhcHBsaWNhdGlvbi94LWR0Ym5jeCt4bWwnXSxcbiAgICBbJ25mbycsICd0ZXh0L3gtbmZvJ10sXG4gICAgWyduZ2RhdCcsICdhcHBsaWNhdGlvbi92bmQubm9raWEubi1nYWdlLmRhdGEnXSxcbiAgICBbJ25pdGYnLCAnYXBwbGljYXRpb24vdm5kLm5pdGYnXSxcbiAgICBbJ25sdScsICdhcHBsaWNhdGlvbi92bmQubmV1cm9sYW5ndWFnZS5ubHUnXSxcbiAgICBbJ25tbCcsICdhcHBsaWNhdGlvbi92bmQuZW5saXZlbiddLFxuICAgIFsnbm5kJywgJ2FwcGxpY2F0aW9uL3ZuZC5ub2JsZW5ldC1kaXJlY3RvcnknXSxcbiAgICBbJ25ucycsICdhcHBsaWNhdGlvbi92bmQubm9ibGVuZXQtc2VhbGVyJ10sXG4gICAgWydubncnLCAnYXBwbGljYXRpb24vdm5kLm5vYmxlbmV0LXdlYiddLFxuICAgIFsnbnB4JywgJ2ltYWdlL3ZuZC5uZXQtZnB4J10sXG4gICAgWyducScsICdhcHBsaWNhdGlvbi9uLXF1YWRzJ10sXG4gICAgWyduc2MnLCAnYXBwbGljYXRpb24veC1jb25mZXJlbmNlJ10sXG4gICAgWyduc2YnLCAnYXBwbGljYXRpb24vdm5kLmxvdHVzLW5vdGVzJ10sXG4gICAgWydudCcsICdhcHBsaWNhdGlvbi9uLXRyaXBsZXMnXSxcbiAgICBbJ250ZicsICdhcHBsaWNhdGlvbi92bmQubml0ZiddLFxuICAgIFsnbnVtYmVycycsICdhcHBsaWNhdGlvbi94LWl3b3JrLW51bWJlcnMtc2ZmbnVtYmVycyddLFxuICAgIFsnbnpiJywgJ2FwcGxpY2F0aW9uL3gtbnpiJ10sXG4gICAgWydvYTInLCAnYXBwbGljYXRpb24vdm5kLmZ1aml0c3Uub2FzeXMyJ10sXG4gICAgWydvYTMnLCAnYXBwbGljYXRpb24vdm5kLmZ1aml0c3Uub2FzeXMzJ10sXG4gICAgWydvYXMnLCAnYXBwbGljYXRpb24vdm5kLmZ1aml0c3Uub2FzeXMnXSxcbiAgICBbJ29iZCcsICdhcHBsaWNhdGlvbi94LW1zYmluZGVyJ10sXG4gICAgWydvYmd4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVuYmxveC5nYW1lK3htbCddLFxuICAgIFsnb2JqJywgJ21vZGVsL29iaiddLFxuICAgIFsnb2RhJywgJ2FwcGxpY2F0aW9uL29kYSddLFxuICAgIFsnb2RiJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuZGF0YWJhc2UnXSxcbiAgICBbJ29kYycsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmNoYXJ0J10sXG4gICAgWydvZGYnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5mb3JtdWxhJ10sXG4gICAgWydvZGZ0JywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuZm9ybXVsYS10ZW1wbGF0ZSddLFxuICAgIFsnb2RnJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuZ3JhcGhpY3MnXSxcbiAgICBbJ29kaScsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmltYWdlJ10sXG4gICAgWydvZG0nLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0LW1hc3RlciddLFxuICAgIFsnb2RwJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJ10sXG4gICAgWydvZHMnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5zcHJlYWRzaGVldCddLFxuICAgIFsnb2R0JywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dCddLFxuICAgIFsnb2dhJywgJ2F1ZGlvL29nZyddLFxuICAgIFsnb2dleCcsICdtb2RlbC92bmQub3BlbmdleCddLFxuICAgIFsnb2dnJywgJ2F1ZGlvL29nZyddLFxuICAgIFsnb2d2JywgJ3ZpZGVvL29nZyddLFxuICAgIFsnb2d4JywgJ2FwcGxpY2F0aW9uL29nZyddLFxuICAgIFsnb21kb2MnLCAnYXBwbGljYXRpb24vb21kb2MreG1sJ10sXG4gICAgWydvbmVwa2cnLCAnYXBwbGljYXRpb24vb25lbm90ZSddLFxuICAgIFsnb25ldG1wJywgJ2FwcGxpY2F0aW9uL29uZW5vdGUnXSxcbiAgICBbJ29uZXRvYycsICdhcHBsaWNhdGlvbi9vbmVub3RlJ10sXG4gICAgWydvbmV0b2MyJywgJ2FwcGxpY2F0aW9uL29uZW5vdGUnXSxcbiAgICBbJ29wZicsICdhcHBsaWNhdGlvbi9vZWJwcy1wYWNrYWdlK3htbCddLFxuICAgIFsnb3BtbCcsICd0ZXh0L3gtb3BtbCddLFxuICAgIFsnb3ByYycsICdhcHBsaWNhdGlvbi92bmQucGFsbSddLFxuICAgIFsnb3B1cycsICdhdWRpby9vZ2cnXSxcbiAgICBbJ29yZycsICd0ZXh0L3gtb3JnJ10sXG4gICAgWydvc2YnLCAnYXBwbGljYXRpb24vdm5kLnlhbWFoYS5vcGVuc2NvcmVmb3JtYXQnXSxcbiAgICBbJ29zZnB2ZycsICdhcHBsaWNhdGlvbi92bmQueWFtYWhhLm9wZW5zY29yZWZvcm1hdC5vc2ZwdmcreG1sJ10sXG4gICAgWydvc20nLCAnYXBwbGljYXRpb24vdm5kLm9wZW5zdHJlZXRtYXAuZGF0YSt4bWwnXSxcbiAgICBbJ290YycsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmNoYXJ0LXRlbXBsYXRlJ10sXG4gICAgWydvdGYnLCAnZm9udC9vdGYnXSxcbiAgICBbJ290ZycsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmdyYXBoaWNzLXRlbXBsYXRlJ10sXG4gICAgWydvdGgnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0LXdlYiddLFxuICAgIFsnb3RpJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuaW1hZ2UtdGVtcGxhdGUnXSxcbiAgICBbJ290cCcsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbi10ZW1wbGF0ZSddLFxuICAgIFsnb3RzJywgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQtdGVtcGxhdGUnXSxcbiAgICBbJ290dCcsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQtdGVtcGxhdGUnXSxcbiAgICBbJ292YScsICdhcHBsaWNhdGlvbi94LXZpcnR1YWxib3gtb3ZhJ10sXG4gICAgWydvdmYnLCAnYXBwbGljYXRpb24veC12aXJ0dWFsYm94LW92ZiddLFxuICAgIFsnb3dsJywgJ2FwcGxpY2F0aW9uL3JkZit4bWwnXSxcbiAgICBbJ294cHMnLCAnYXBwbGljYXRpb24vb3hwcyddLFxuICAgIFsnb3h0JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVub2ZmaWNlb3JnLmV4dGVuc2lvbiddLFxuICAgIFsncCcsICd0ZXh0L3gtcGFzY2FsJ10sXG4gICAgWydwN2EnLCAnYXBwbGljYXRpb24veC1wa2NzNy1zaWduYXR1cmUnXSxcbiAgICBbJ3A3YicsICdhcHBsaWNhdGlvbi94LXBrY3M3LWNlcnRpZmljYXRlcyddLFxuICAgIFsncDdjJywgJ2FwcGxpY2F0aW9uL3BrY3M3LW1pbWUnXSxcbiAgICBbJ3A3bScsICdhcHBsaWNhdGlvbi9wa2NzNy1taW1lJ10sXG4gICAgWydwN3InLCAnYXBwbGljYXRpb24veC1wa2NzNy1jZXJ0cmVxcmVzcCddLFxuICAgIFsncDdzJywgJ2FwcGxpY2F0aW9uL3BrY3M3LXNpZ25hdHVyZSddLFxuICAgIFsncDgnLCAnYXBwbGljYXRpb24vcGtjczgnXSxcbiAgICBbJ3AxMCcsICdhcHBsaWNhdGlvbi94LXBrY3MxMCddLFxuICAgIFsncDEyJywgJ2FwcGxpY2F0aW9uL3gtcGtjczEyJ10sXG4gICAgWydwYWMnLCAnYXBwbGljYXRpb24veC1ucy1wcm94eS1hdXRvY29uZmlnJ10sXG4gICAgWydwYWdlcycsICdhcHBsaWNhdGlvbi94LWl3b3JrLXBhZ2VzLXNmZnBhZ2VzJ10sXG4gICAgWydwYXMnLCAndGV4dC94LXBhc2NhbCddLFxuICAgIFsncGF3JywgJ2FwcGxpY2F0aW9uL3ZuZC5wYXdhYWZpbGUnXSxcbiAgICBbJ3BiZCcsICdhcHBsaWNhdGlvbi92bmQucG93ZXJidWlsZGVyNiddLFxuICAgIFsncGJtJywgJ2ltYWdlL3gtcG9ydGFibGUtYml0bWFwJ10sXG4gICAgWydwY2FwJywgJ2FwcGxpY2F0aW9uL3ZuZC50Y3BkdW1wLnBjYXAnXSxcbiAgICBbJ3BjZicsICdhcHBsaWNhdGlvbi94LWZvbnQtcGNmJ10sXG4gICAgWydwY2wnLCAnYXBwbGljYXRpb24vdm5kLmhwLXBjbCddLFxuICAgIFsncGNseGwnLCAnYXBwbGljYXRpb24vdm5kLmhwLXBjbHhsJ10sXG4gICAgWydwY3QnLCAnaW1hZ2UveC1waWN0J10sXG4gICAgWydwY3VybCcsICdhcHBsaWNhdGlvbi92bmQuY3VybC5wY3VybCddLFxuICAgIFsncGN4JywgJ2ltYWdlL3gtcGN4J10sXG4gICAgWydwZGInLCAnYXBwbGljYXRpb24veC1waWxvdCddLFxuICAgIFsncGRlJywgJ3RleHQveC1wcm9jZXNzaW5nJ10sXG4gICAgWydwZGYnLCAnYXBwbGljYXRpb24vcGRmJ10sXG4gICAgWydwZW0nLCAnYXBwbGljYXRpb24veC14NTA5LXVzZXItY2VydCddLFxuICAgIFsncGZhJywgJ2FwcGxpY2F0aW9uL3gtZm9udC10eXBlMSddLFxuICAgIFsncGZiJywgJ2FwcGxpY2F0aW9uL3gtZm9udC10eXBlMSddLFxuICAgIFsncGZtJywgJ2FwcGxpY2F0aW9uL3gtZm9udC10eXBlMSddLFxuICAgIFsncGZyJywgJ2FwcGxpY2F0aW9uL2ZvbnQtdGRwZnInXSxcbiAgICBbJ3BmeCcsICdhcHBsaWNhdGlvbi94LXBrY3MxMiddLFxuICAgIFsncGdtJywgJ2ltYWdlL3gtcG9ydGFibGUtZ3JheW1hcCddLFxuICAgIFsncGduJywgJ2FwcGxpY2F0aW9uL3gtY2hlc3MtcGduJ10sXG4gICAgWydwZ3AnLCAnYXBwbGljYXRpb24vcGdwJ10sXG4gICAgWydwaHAnLCAnYXBwbGljYXRpb24veC1odHRwZC1waHAnXSxcbiAgICBbJ3BocDMnLCAnYXBwbGljYXRpb24veC1odHRwZC1waHAnXSxcbiAgICBbJ3BocDQnLCAnYXBwbGljYXRpb24veC1odHRwZC1waHAnXSxcbiAgICBbJ3BocHMnLCAnYXBwbGljYXRpb24veC1odHRwZC1waHAtc291cmNlJ10sXG4gICAgWydwaHRtbCcsICdhcHBsaWNhdGlvbi94LWh0dHBkLXBocCddLFxuICAgIFsncGljJywgJ2ltYWdlL3gtcGljdCddLFxuICAgIFsncGtnJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsncGtpJywgJ2FwcGxpY2F0aW9uL3BraXhjbXAnXSxcbiAgICBbJ3BraXBhdGgnLCAnYXBwbGljYXRpb24vcGtpeC1wa2lwYXRoJ10sXG4gICAgWydwa3Bhc3MnLCAnYXBwbGljYXRpb24vdm5kLmFwcGxlLnBrcGFzcyddLFxuICAgIFsncGwnLCAnYXBwbGljYXRpb24veC1wZXJsJ10sXG4gICAgWydwbGInLCAnYXBwbGljYXRpb24vdm5kLjNncHAucGljLWJ3LWxhcmdlJ10sXG4gICAgWydwbGMnLCAnYXBwbGljYXRpb24vdm5kLm1vYml1cy5wbGMnXSxcbiAgICBbJ3BsZicsICdhcHBsaWNhdGlvbi92bmQucG9ja2V0bGVhcm4nXSxcbiAgICBbJ3BscycsICdhcHBsaWNhdGlvbi9wbHMreG1sJ10sXG4gICAgWydwbScsICdhcHBsaWNhdGlvbi94LXBlcmwnXSxcbiAgICBbJ3BtbCcsICdhcHBsaWNhdGlvbi92bmQuY3RjLXBvc21sJ10sXG4gICAgWydwbmcnLCAnaW1hZ2UvcG5nJ10sXG4gICAgWydwbm0nLCAnaW1hZ2UveC1wb3J0YWJsZS1hbnltYXAnXSxcbiAgICBbJ3BvcnRwa2cnLCAnYXBwbGljYXRpb24vdm5kLm1hY3BvcnRzLnBvcnRwa2cnXSxcbiAgICBbJ3BvdCcsICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCddLFxuICAgIFsncG90bScsICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5wcmVzZW50YXRpb24ubWFjcm9FbmFibGVkLjEyJ10sXG4gICAgWydwb3R4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC50ZW1wbGF0ZSddLFxuICAgIFsncHBhJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50J10sXG4gICAgWydwcGFtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50LmFkZGluLm1hY3JvRW5hYmxlZC4xMiddLFxuICAgIFsncHBkJywgJ2FwcGxpY2F0aW9uL3ZuZC5jdXBzLXBwZCddLFxuICAgIFsncHBtJywgJ2ltYWdlL3gtcG9ydGFibGUtcGl4bWFwJ10sXG4gICAgWydwcHMnLCAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnXSxcbiAgICBbJ3Bwc20nLCAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQuc2xpZGVzaG93Lm1hY3JvRW5hYmxlZC4xMiddLFxuICAgIFsncHBzeCcsICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwuc2xpZGVzaG93J10sXG4gICAgWydwcHQnLCAnYXBwbGljYXRpb24vcG93ZXJwb2ludCddLFxuICAgIFsncHB0bScsICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5wcmVzZW50YXRpb24ubWFjcm9FbmFibGVkLjEyJ10sXG4gICAgWydwcHR4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nXSxcbiAgICBbJ3BxYScsICdhcHBsaWNhdGlvbi92bmQucGFsbSddLFxuICAgIFsncHJjJywgJ2FwcGxpY2F0aW9uL3gtcGlsb3QnXSxcbiAgICBbJ3ByZScsICdhcHBsaWNhdGlvbi92bmQubG90dXMtZnJlZWxhbmNlJ10sXG4gICAgWydwcmYnLCAnYXBwbGljYXRpb24vcGljcy1ydWxlcyddLFxuICAgIFsncHJvdngnLCAnYXBwbGljYXRpb24vcHJvdmVuYW5jZSt4bWwnXSxcbiAgICBbJ3BzJywgJ2FwcGxpY2F0aW9uL3Bvc3RzY3JpcHQnXSxcbiAgICBbJ3BzYicsICdhcHBsaWNhdGlvbi92bmQuM2dwcC5waWMtYnctc21hbGwnXSxcbiAgICBbJ3BzZCcsICdhcHBsaWNhdGlvbi94LXBob3Rvc2hvcCddLFxuICAgIFsncHNmJywgJ2FwcGxpY2F0aW9uL3gtZm9udC1saW51eC1wc2YnXSxcbiAgICBbJ3Bza2N4bWwnLCAnYXBwbGljYXRpb24vcHNrYyt4bWwnXSxcbiAgICBbJ3B0aScsICdpbWFnZS9wcnMucHRpJ10sXG4gICAgWydwdGlkJywgJ2FwcGxpY2F0aW9uL3ZuZC5wdmkucHRpZDEnXSxcbiAgICBbJ3B1YicsICdhcHBsaWNhdGlvbi94LW1zcHVibGlzaGVyJ10sXG4gICAgWydwdmInLCAnYXBwbGljYXRpb24vdm5kLjNncHAucGljLWJ3LXZhciddLFxuICAgIFsncHduJywgJ2FwcGxpY2F0aW9uL3ZuZC4zbS5wb3N0LWl0LW5vdGVzJ10sXG4gICAgWydweWEnLCAnYXVkaW8vdm5kLm1zLXBsYXlyZWFkeS5tZWRpYS5weWEnXSxcbiAgICBbJ3B5dicsICd2aWRlby92bmQubXMtcGxheXJlYWR5Lm1lZGlhLnB5diddLFxuICAgIFsncWFtJywgJ2FwcGxpY2F0aW9uL3ZuZC5lcHNvbi5xdWlja2FuaW1lJ10sXG4gICAgWydxYm8nLCAnYXBwbGljYXRpb24vdm5kLmludHUucWJvJ10sXG4gICAgWydxZngnLCAnYXBwbGljYXRpb24vdm5kLmludHUucWZ4J10sXG4gICAgWydxcHMnLCAnYXBwbGljYXRpb24vdm5kLnB1Ymxpc2hhcmUtZGVsdGEtdHJlZSddLFxuICAgIFsncXQnLCAndmlkZW8vcXVpY2t0aW1lJ10sXG4gICAgWydxd2QnLCAnYXBwbGljYXRpb24vdm5kLnF1YXJrLnF1YXJreHByZXNzJ10sXG4gICAgWydxd3QnLCAnYXBwbGljYXRpb24vdm5kLnF1YXJrLnF1YXJreHByZXNzJ10sXG4gICAgWydxeGInLCAnYXBwbGljYXRpb24vdm5kLnF1YXJrLnF1YXJreHByZXNzJ10sXG4gICAgWydxeGQnLCAnYXBwbGljYXRpb24vdm5kLnF1YXJrLnF1YXJreHByZXNzJ10sXG4gICAgWydxeGwnLCAnYXBwbGljYXRpb24vdm5kLnF1YXJrLnF1YXJreHByZXNzJ10sXG4gICAgWydxeHQnLCAnYXBwbGljYXRpb24vdm5kLnF1YXJrLnF1YXJreHByZXNzJ10sXG4gICAgWydyYScsICdhdWRpby94LXJlYWxhdWRpbyddLFxuICAgIFsncmFtJywgJ2F1ZGlvL3gtcG4tcmVhbGF1ZGlvJ10sXG4gICAgWydyYW1sJywgJ2FwcGxpY2F0aW9uL3JhbWwreWFtbCddLFxuICAgIFsncmFwZCcsICdhcHBsaWNhdGlvbi9yb3V0ZS1hcGQreG1sJ10sXG4gICAgWydyYXInLCAnYXBwbGljYXRpb24veC1yYXInXSxcbiAgICBbJ3JhcycsICdpbWFnZS94LWNtdS1yYXN0ZXInXSxcbiAgICBbJ3JjcHJvZmlsZScsICdhcHBsaWNhdGlvbi92bmQuaXB1bnBsdWdnZWQucmNwcm9maWxlJ10sXG4gICAgWydyZGYnLCAnYXBwbGljYXRpb24vcmRmK3htbCddLFxuICAgIFsncmR6JywgJ2FwcGxpY2F0aW9uL3ZuZC5kYXRhLXZpc2lvbi5yZHonXSxcbiAgICBbJ3JlbG8nLCAnYXBwbGljYXRpb24vcDJwLW92ZXJsYXkreG1sJ10sXG4gICAgWydyZXAnLCAnYXBwbGljYXRpb24vdm5kLmJ1c2luZXNzb2JqZWN0cyddLFxuICAgIFsncmVzJywgJ2FwcGxpY2F0aW9uL3gtZHRicmVzb3VyY2UreG1sJ10sXG4gICAgWydyZ2InLCAnaW1hZ2UveC1yZ2InXSxcbiAgICBbJ3JpZicsICdhcHBsaWNhdGlvbi9yZWdpbmZvK3htbCddLFxuICAgIFsncmlwJywgJ2F1ZGlvL3ZuZC5yaXAnXSxcbiAgICBbJ3JpcycsICdhcHBsaWNhdGlvbi94LXJlc2VhcmNoLWluZm8tc3lzdGVtcyddLFxuICAgIFsncmwnLCAnYXBwbGljYXRpb24vcmVzb3VyY2UtbGlzdHMreG1sJ10sXG4gICAgWydybGMnLCAnaW1hZ2Uvdm5kLmZ1aml4ZXJveC5lZG1pY3MtcmxjJ10sXG4gICAgWydybGQnLCAnYXBwbGljYXRpb24vcmVzb3VyY2UtbGlzdHMtZGlmZit4bWwnXSxcbiAgICBbJ3JtJywgJ2F1ZGlvL3gtcG4tcmVhbGF1ZGlvJ10sXG4gICAgWydybWknLCAnYXVkaW8vbWlkaSddLFxuICAgIFsncm1wJywgJ2F1ZGlvL3gtcG4tcmVhbGF1ZGlvLXBsdWdpbiddLFxuICAgIFsncm1zJywgJ2FwcGxpY2F0aW9uL3ZuZC5qY3AuamF2YW1lLm1pZGxldC1ybXMnXSxcbiAgICBbJ3JtdmInLCAnYXBwbGljYXRpb24vdm5kLnJuLXJlYWxtZWRpYS12YnInXSxcbiAgICBbJ3JuYycsICdhcHBsaWNhdGlvbi9yZWxheC1uZy1jb21wYWN0LXN5bnRheCddLFxuICAgIFsncm5nJywgJ2FwcGxpY2F0aW9uL3htbCddLFxuICAgIFsncm9hJywgJ2FwcGxpY2F0aW9uL3Jwa2ktcm9hJ10sXG4gICAgWydyb2ZmJywgJ3RleHQvdHJvZmYnXSxcbiAgICBbJ3JwOScsICdhcHBsaWNhdGlvbi92bmQuY2xvYW50by5ycDknXSxcbiAgICBbJ3JwbScsICdhdWRpby94LXBuLXJlYWxhdWRpby1wbHVnaW4nXSxcbiAgICBbJ3Jwc3MnLCAnYXBwbGljYXRpb24vdm5kLm5va2lhLnJhZGlvLXByZXNldHMnXSxcbiAgICBbJ3Jwc3QnLCAnYXBwbGljYXRpb24vdm5kLm5va2lhLnJhZGlvLXByZXNldCddLFxuICAgIFsncnEnLCAnYXBwbGljYXRpb24vc3BhcnFsLXF1ZXJ5J10sXG4gICAgWydycycsICdhcHBsaWNhdGlvbi9ybHMtc2VydmljZXMreG1sJ10sXG4gICAgWydyc2EnLCAnYXBwbGljYXRpb24veC1wa2NzNyddLFxuICAgIFsncnNhdCcsICdhcHBsaWNhdGlvbi9hdHNjLXJzYXQreG1sJ10sXG4gICAgWydyc2QnLCAnYXBwbGljYXRpb24vcnNkK3htbCddLFxuICAgIFsncnNoZWV0JywgJ2FwcGxpY2F0aW9uL3VyYy1yZXNzaGVldCt4bWwnXSxcbiAgICBbJ3JzcycsICdhcHBsaWNhdGlvbi9yc3MreG1sJ10sXG4gICAgWydydGYnLCAndGV4dC9ydGYnXSxcbiAgICBbJ3J0eCcsICd0ZXh0L3JpY2h0ZXh0J10sXG4gICAgWydydW4nLCAnYXBwbGljYXRpb24veC1tYWtlc2VsZiddLFxuICAgIFsncnVzZCcsICdhcHBsaWNhdGlvbi9yb3V0ZS11c2QreG1sJ10sXG4gICAgWydydicsICd2aWRlby92bmQucm4tcmVhbHZpZGVvJ10sXG4gICAgWydzJywgJ3RleHQveC1hc20nXSxcbiAgICBbJ3MzbScsICdhdWRpby9zM20nXSxcbiAgICBbJ3NhZicsICdhcHBsaWNhdGlvbi92bmQueWFtYWhhLnNtYWYtYXVkaW8nXSxcbiAgICBbJ3Nhc3MnLCAndGV4dC94LXNhc3MnXSxcbiAgICBbJ3NibWwnLCAnYXBwbGljYXRpb24vc2JtbCt4bWwnXSxcbiAgICBbJ3NjJywgJ2FwcGxpY2F0aW9uL3ZuZC5pYm0uc2VjdXJlLWNvbnRhaW5lciddLFxuICAgIFsnc2NkJywgJ2FwcGxpY2F0aW9uL3gtbXNzY2hlZHVsZSddLFxuICAgIFsnc2NtJywgJ2FwcGxpY2F0aW9uL3ZuZC5sb3R1cy1zY3JlZW5jYW0nXSxcbiAgICBbJ3NjcScsICdhcHBsaWNhdGlvbi9zY3ZwLWN2LXJlcXVlc3QnXSxcbiAgICBbJ3NjcycsICdhcHBsaWNhdGlvbi9zY3ZwLWN2LXJlc3BvbnNlJ10sXG4gICAgWydzY3NzJywgJ3RleHQveC1zY3NzJ10sXG4gICAgWydzY3VybCcsICd0ZXh0L3ZuZC5jdXJsLnNjdXJsJ10sXG4gICAgWydzZGEnLCAnYXBwbGljYXRpb24vdm5kLnN0YXJkaXZpc2lvbi5kcmF3J10sXG4gICAgWydzZGMnLCAnYXBwbGljYXRpb24vdm5kLnN0YXJkaXZpc2lvbi5jYWxjJ10sXG4gICAgWydzZGQnLCAnYXBwbGljYXRpb24vdm5kLnN0YXJkaXZpc2lvbi5pbXByZXNzJ10sXG4gICAgWydzZGtkJywgJ2FwcGxpY2F0aW9uL3ZuZC5zb2xlbnQuc2RrbSt4bWwnXSxcbiAgICBbJ3Nka20nLCAnYXBwbGljYXRpb24vdm5kLnNvbGVudC5zZGttK3htbCddLFxuICAgIFsnc2RwJywgJ2FwcGxpY2F0aW9uL3NkcCddLFxuICAgIFsnc2R3JywgJ2FwcGxpY2F0aW9uL3ZuZC5zdGFyZGl2aXNpb24ud3JpdGVyJ10sXG4gICAgWydzZWEnLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydzZWUnLCAnYXBwbGljYXRpb24vdm5kLnNlZW1haWwnXSxcbiAgICBbJ3NlZWQnLCAnYXBwbGljYXRpb24vdm5kLmZkc24uc2VlZCddLFxuICAgIFsnc2VtYScsICdhcHBsaWNhdGlvbi92bmQuc2VtYSddLFxuICAgIFsnc2VtZCcsICdhcHBsaWNhdGlvbi92bmQuc2VtZCddLFxuICAgIFsnc2VtZicsICdhcHBsaWNhdGlvbi92bmQuc2VtZiddLFxuICAgIFsnc2VubWx4JywgJ2FwcGxpY2F0aW9uL3Nlbm1sK3htbCddLFxuICAgIFsnc2Vuc21seCcsICdhcHBsaWNhdGlvbi9zZW5zbWwreG1sJ10sXG4gICAgWydzZXInLCAnYXBwbGljYXRpb24vamF2YS1zZXJpYWxpemVkLW9iamVjdCddLFxuICAgIFsnc2V0cGF5JywgJ2FwcGxpY2F0aW9uL3NldC1wYXltZW50LWluaXRpYXRpb24nXSxcbiAgICBbJ3NldHJlZycsICdhcHBsaWNhdGlvbi9zZXQtcmVnaXN0cmF0aW9uLWluaXRpYXRpb24nXSxcbiAgICBbJ3NmZC1oZHN0eCcsICdhcHBsaWNhdGlvbi92bmQuaHlkcm9zdGF0aXguc29mLWRhdGEnXSxcbiAgICBbJ3NmcycsICdhcHBsaWNhdGlvbi92bmQuc3BvdGZpcmUuc2ZzJ10sXG4gICAgWydzZnYnLCAndGV4dC94LXNmdiddLFxuICAgIFsnc2dpJywgJ2ltYWdlL3NnaSddLFxuICAgIFsnc2dsJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdGFyZGl2aXNpb24ud3JpdGVyLWdsb2JhbCddLFxuICAgIFsnc2dtJywgJ3RleHQvc2dtbCddLFxuICAgIFsnc2dtbCcsICd0ZXh0L3NnbWwnXSxcbiAgICBbJ3NoJywgJ2FwcGxpY2F0aW9uL3gtc2gnXSxcbiAgICBbJ3NoYXInLCAnYXBwbGljYXRpb24veC1zaGFyJ10sXG4gICAgWydzaGV4JywgJ3RleHQvc2hleCddLFxuICAgIFsnc2hmJywgJ2FwcGxpY2F0aW9uL3NoZit4bWwnXSxcbiAgICBbJ3NodG1sJywgJ3RleHQvaHRtbCddLFxuICAgIFsnc2lkJywgJ2ltYWdlL3gtbXJzaWQtaW1hZ2UnXSxcbiAgICBbJ3NpZXZlJywgJ2FwcGxpY2F0aW9uL3NpZXZlJ10sXG4gICAgWydzaWcnLCAnYXBwbGljYXRpb24vcGdwLXNpZ25hdHVyZSddLFxuICAgIFsnc2lsJywgJ2F1ZGlvL3NpbGsnXSxcbiAgICBbJ3NpbG8nLCAnbW9kZWwvbWVzaCddLFxuICAgIFsnc2lzJywgJ2FwcGxpY2F0aW9uL3ZuZC5zeW1iaWFuLmluc3RhbGwnXSxcbiAgICBbJ3Npc3gnLCAnYXBwbGljYXRpb24vdm5kLnN5bWJpYW4uaW5zdGFsbCddLFxuICAgIFsnc2l0JywgJ2FwcGxpY2F0aW9uL3gtc3R1ZmZpdCddLFxuICAgIFsnc2l0eCcsICdhcHBsaWNhdGlvbi94LXN0dWZmaXR4J10sXG4gICAgWydzaXYnLCAnYXBwbGljYXRpb24vc2lldmUnXSxcbiAgICBbJ3NrZCcsICdhcHBsaWNhdGlvbi92bmQua29hbiddLFxuICAgIFsnc2ttJywgJ2FwcGxpY2F0aW9uL3ZuZC5rb2FuJ10sXG4gICAgWydza3AnLCAnYXBwbGljYXRpb24vdm5kLmtvYW4nXSxcbiAgICBbJ3NrdCcsICdhcHBsaWNhdGlvbi92bmQua29hbiddLFxuICAgIFsnc2xkbScsICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludC5zbGlkZS5tYWNyb2VuYWJsZWQuMTInXSxcbiAgICBbJ3NsZHgnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnNsaWRlJ10sXG4gICAgWydzbGltJywgJ3RleHQvc2xpbSddLFxuICAgIFsnc2xtJywgJ3RleHQvc2xpbSddLFxuICAgIFsnc2xzJywgJ2FwcGxpY2F0aW9uL3JvdXRlLXMtdHNpZCt4bWwnXSxcbiAgICBbJ3NsdCcsICdhcHBsaWNhdGlvbi92bmQuZXBzb24uc2FsdCddLFxuICAgIFsnc20nLCAnYXBwbGljYXRpb24vdm5kLnN0ZXBtYW5pYS5zdGVwY2hhcnQnXSxcbiAgICBbJ3NtZicsICdhcHBsaWNhdGlvbi92bmQuc3RhcmRpdmlzaW9uLm1hdGgnXSxcbiAgICBbJ3NtaScsICdhcHBsaWNhdGlvbi9zbWlsJ10sXG4gICAgWydzbWlsJywgJ2FwcGxpY2F0aW9uL3NtaWwnXSxcbiAgICBbJ3NtdicsICd2aWRlby94LXNtdiddLFxuICAgIFsnc216aXAnLCAnYXBwbGljYXRpb24vdm5kLnN0ZXBtYW5pYS5wYWNrYWdlJ10sXG4gICAgWydzbmQnLCAnYXVkaW8vYmFzaWMnXSxcbiAgICBbJ3NuZicsICdhcHBsaWNhdGlvbi94LWZvbnQtc25mJ10sXG4gICAgWydzbycsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nXSxcbiAgICBbJ3NwYycsICdhcHBsaWNhdGlvbi94LXBrY3M3LWNlcnRpZmljYXRlcyddLFxuICAgIFsnc3BkeCcsICd0ZXh0L3NwZHgnXSxcbiAgICBbJ3NwZicsICdhcHBsaWNhdGlvbi92bmQueWFtYWhhLnNtYWYtcGhyYXNlJ10sXG4gICAgWydzcGwnLCAnYXBwbGljYXRpb24veC1mdXR1cmVzcGxhc2gnXSxcbiAgICBbJ3Nwb3QnLCAndGV4dC92bmQuaW4zZC5zcG90J10sXG4gICAgWydzcHAnLCAnYXBwbGljYXRpb24vc2N2cC12cC1yZXNwb25zZSddLFxuICAgIFsnc3BxJywgJ2FwcGxpY2F0aW9uL3NjdnAtdnAtcmVxdWVzdCddLFxuICAgIFsnc3B4JywgJ2F1ZGlvL29nZyddLFxuICAgIFsnc3FsJywgJ2FwcGxpY2F0aW9uL3gtc3FsJ10sXG4gICAgWydzcmMnLCAnYXBwbGljYXRpb24veC13YWlzLXNvdXJjZSddLFxuICAgIFsnc3J0JywgJ2FwcGxpY2F0aW9uL3gtc3VicmlwJ10sXG4gICAgWydzcnUnLCAnYXBwbGljYXRpb24vc3J1K3htbCddLFxuICAgIFsnc3J4JywgJ2FwcGxpY2F0aW9uL3NwYXJxbC1yZXN1bHRzK3htbCddLFxuICAgIFsnc3NkbCcsICdhcHBsaWNhdGlvbi9zc2RsK3htbCddLFxuICAgIFsnc3NlJywgJ2FwcGxpY2F0aW9uL3ZuZC5rb2Rhay1kZXNjcmlwdG9yJ10sXG4gICAgWydzc2YnLCAnYXBwbGljYXRpb24vdm5kLmVwc29uLnNzZiddLFxuICAgIFsnc3NtbCcsICdhcHBsaWNhdGlvbi9zc21sK3htbCddLFxuICAgIFsnc3N0JywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSddLFxuICAgIFsnc3QnLCAnYXBwbGljYXRpb24vdm5kLnNhaWxpbmd0cmFja2VyLnRyYWNrJ10sXG4gICAgWydzdGMnLCAnYXBwbGljYXRpb24vdm5kLnN1bi54bWwuY2FsYy50ZW1wbGF0ZSddLFxuICAgIFsnc3RkJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdW4ueG1sLmRyYXcudGVtcGxhdGUnXSxcbiAgICBbJ3N0ZicsICdhcHBsaWNhdGlvbi92bmQud3Quc3RmJ10sXG4gICAgWydzdGknLCAnYXBwbGljYXRpb24vdm5kLnN1bi54bWwuaW1wcmVzcy50ZW1wbGF0ZSddLFxuICAgIFsnc3RrJywgJ2FwcGxpY2F0aW9uL2h5cGVyc3R1ZGlvJ10sXG4gICAgWydzdGwnLCAnbW9kZWwvc3RsJ10sXG4gICAgWydzdHB4JywgJ21vZGVsL3N0ZXAreG1sJ10sXG4gICAgWydzdHB4eicsICdtb2RlbC9zdGVwLXhtbCt6aXAnXSxcbiAgICBbJ3N0cHonLCAnbW9kZWwvc3RlcCt6aXAnXSxcbiAgICBbJ3N0cicsICdhcHBsaWNhdGlvbi92bmQucGcuZm9ybWF0J10sXG4gICAgWydzdHcnLCAnYXBwbGljYXRpb24vdm5kLnN1bi54bWwud3JpdGVyLnRlbXBsYXRlJ10sXG4gICAgWydzdHlsJywgJ3RleHQvc3R5bHVzJ10sXG4gICAgWydzdHlsdXMnLCAndGV4dC9zdHlsdXMnXSxcbiAgICBbJ3N1YicsICd0ZXh0L3ZuZC5kdmIuc3VidGl0bGUnXSxcbiAgICBbJ3N1cycsICdhcHBsaWNhdGlvbi92bmQuc3VzLWNhbGVuZGFyJ10sXG4gICAgWydzdXNwJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdXMtY2FsZW5kYXInXSxcbiAgICBbJ3N2NGNwaW8nLCAnYXBwbGljYXRpb24veC1zdjRjcGlvJ10sXG4gICAgWydzdjRjcmMnLCAnYXBwbGljYXRpb24veC1zdjRjcmMnXSxcbiAgICBbJ3N2YycsICdhcHBsaWNhdGlvbi92bmQuZHZiLnNlcnZpY2UnXSxcbiAgICBbJ3N2ZCcsICdhcHBsaWNhdGlvbi92bmQuc3ZkJ10sXG4gICAgWydzdmcnLCAnaW1hZ2Uvc3ZnK3htbCddLFxuICAgIFsnc3ZneicsICdpbWFnZS9zdmcreG1sJ10sXG4gICAgWydzd2EnLCAnYXBwbGljYXRpb24veC1kaXJlY3RvciddLFxuICAgIFsnc3dmJywgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10sXG4gICAgWydzd2knLCAnYXBwbGljYXRpb24vdm5kLmFyaXN0YW5ldHdvcmtzLnN3aSddLFxuICAgIFsnc3dpZHRhZycsICdhcHBsaWNhdGlvbi9zd2lkK3htbCddLFxuICAgIFsnc3hjJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdW4ueG1sLmNhbGMnXSxcbiAgICBbJ3N4ZCcsICdhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5kcmF3J10sXG4gICAgWydzeGcnLCAnYXBwbGljYXRpb24vdm5kLnN1bi54bWwud3JpdGVyLmdsb2JhbCddLFxuICAgIFsnc3hpJywgJ2FwcGxpY2F0aW9uL3ZuZC5zdW4ueG1sLmltcHJlc3MnXSxcbiAgICBbJ3N4bScsICdhcHBsaWNhdGlvbi92bmQuc3VuLnhtbC5tYXRoJ10sXG4gICAgWydzeHcnLCAnYXBwbGljYXRpb24vdm5kLnN1bi54bWwud3JpdGVyJ10sXG4gICAgWyd0JywgJ3RleHQvdHJvZmYnXSxcbiAgICBbJ3QzJywgJ2FwcGxpY2F0aW9uL3gtdDN2bS1pbWFnZSddLFxuICAgIFsndDM4JywgJ2ltYWdlL3QzOCddLFxuICAgIFsndGFnbGV0JywgJ2FwcGxpY2F0aW9uL3ZuZC5teW5mYyddLFxuICAgIFsndGFvJywgJ2FwcGxpY2F0aW9uL3ZuZC50YW8uaW50ZW50LW1vZHVsZS1hcmNoaXZlJ10sXG4gICAgWyd0YXAnLCAnaW1hZ2Uvdm5kLnRlbmNlbnQudGFwJ10sXG4gICAgWyd0YXInLCAnYXBwbGljYXRpb24veC10YXInXSxcbiAgICBbJ3RjYXAnLCAnYXBwbGljYXRpb24vdm5kLjNncHAyLnRjYXAnXSxcbiAgICBbJ3RjbCcsICdhcHBsaWNhdGlvbi94LXRjbCddLFxuICAgIFsndGQnLCAnYXBwbGljYXRpb24vdXJjLXRhcmdldGRlc2MreG1sJ10sXG4gICAgWyd0ZWFjaGVyJywgJ2FwcGxpY2F0aW9uL3ZuZC5zbWFydC50ZWFjaGVyJ10sXG4gICAgWyd0ZWknLCAnYXBwbGljYXRpb24vdGVpK3htbCddLFxuICAgIFsndGVpY29ycHVzJywgJ2FwcGxpY2F0aW9uL3RlaSt4bWwnXSxcbiAgICBbJ3RleCcsICdhcHBsaWNhdGlvbi94LXRleCddLFxuICAgIFsndGV4aScsICdhcHBsaWNhdGlvbi94LXRleGluZm8nXSxcbiAgICBbJ3RleGluZm8nLCAnYXBwbGljYXRpb24veC10ZXhpbmZvJ10sXG4gICAgWyd0ZXh0JywgJ3RleHQvcGxhaW4nXSxcbiAgICBbJ3RmaScsICdhcHBsaWNhdGlvbi90aHJhdWQreG1sJ10sXG4gICAgWyd0Zm0nLCAnYXBwbGljYXRpb24veC10ZXgtdGZtJ10sXG4gICAgWyd0ZngnLCAnaW1hZ2UvdGlmZi1meCddLFxuICAgIFsndGdhJywgJ2ltYWdlL3gtdGdhJ10sXG4gICAgWyd0Z3onLCAnYXBwbGljYXRpb24veC10YXInXSxcbiAgICBbJ3RobXgnLCAnYXBwbGljYXRpb24vdm5kLm1zLW9mZmljZXRoZW1lJ10sXG4gICAgWyd0aWYnLCAnaW1hZ2UvdGlmZiddLFxuICAgIFsndGlmZicsICdpbWFnZS90aWZmJ10sXG4gICAgWyd0aycsICdhcHBsaWNhdGlvbi94LXRjbCddLFxuICAgIFsndG1vJywgJ2FwcGxpY2F0aW9uL3ZuZC50bW9iaWxlLWxpdmV0diddLFxuICAgIFsndG9tbCcsICdhcHBsaWNhdGlvbi90b21sJ10sXG4gICAgWyd0b3JyZW50JywgJ2FwcGxpY2F0aW9uL3gtYml0dG9ycmVudCddLFxuICAgIFsndHBsJywgJ2FwcGxpY2F0aW9uL3ZuZC5ncm9vdmUtdG9vbC10ZW1wbGF0ZSddLFxuICAgIFsndHB0JywgJ2FwcGxpY2F0aW9uL3ZuZC50cmlkLnRwdCddLFxuICAgIFsndHInLCAndGV4dC90cm9mZiddLFxuICAgIFsndHJhJywgJ2FwcGxpY2F0aW9uL3ZuZC50cnVlYXBwJ10sXG4gICAgWyd0cmlnJywgJ2FwcGxpY2F0aW9uL3RyaWcnXSxcbiAgICBbJ3RybScsICdhcHBsaWNhdGlvbi94LW1zdGVybWluYWwnXSxcbiAgICBbJ3RzJywgJ3ZpZGVvL21wMnQnXSxcbiAgICBbJ3RzZCcsICdhcHBsaWNhdGlvbi90aW1lc3RhbXBlZC1kYXRhJ10sXG4gICAgWyd0c3YnLCAndGV4dC90YWItc2VwYXJhdGVkLXZhbHVlcyddLFxuICAgIFsndHRjJywgJ2ZvbnQvY29sbGVjdGlvbiddLFxuICAgIFsndHRmJywgJ2ZvbnQvdHRmJ10sXG4gICAgWyd0dGwnLCAndGV4dC90dXJ0bGUnXSxcbiAgICBbJ3R0bWwnLCAnYXBwbGljYXRpb24vdHRtbCt4bWwnXSxcbiAgICBbJ3R3ZCcsICdhcHBsaWNhdGlvbi92bmQuc2ltdGVjaC1taW5kbWFwcGVyJ10sXG4gICAgWyd0d2RzJywgJ2FwcGxpY2F0aW9uL3ZuZC5zaW10ZWNoLW1pbmRtYXBwZXInXSxcbiAgICBbJ3R4ZCcsICdhcHBsaWNhdGlvbi92bmQuZ2Vub21hdGl4LnR1eGVkbyddLFxuICAgIFsndHhmJywgJ2FwcGxpY2F0aW9uL3ZuZC5tb2JpdXMudHhmJ10sXG4gICAgWyd0eHQnLCAndGV4dC9wbGFpbiddLFxuICAgIFsndThkc24nLCAnbWVzc2FnZS9nbG9iYWwtZGVsaXZlcnktc3RhdHVzJ10sXG4gICAgWyd1OGhkcicsICdtZXNzYWdlL2dsb2JhbC1oZWFkZXJzJ10sXG4gICAgWyd1OG1kbicsICdtZXNzYWdlL2dsb2JhbC1kaXNwb3NpdGlvbi1ub3RpZmljYXRpb24nXSxcbiAgICBbJ3U4bXNnJywgJ21lc3NhZ2UvZ2xvYmFsJ10sXG4gICAgWyd1MzInLCAnYXBwbGljYXRpb24veC1hdXRob3J3YXJlLWJpbiddLFxuICAgIFsndWJqJywgJ2FwcGxpY2F0aW9uL3VianNvbiddLFxuICAgIFsndWRlYicsICdhcHBsaWNhdGlvbi94LWRlYmlhbi1wYWNrYWdlJ10sXG4gICAgWyd1ZmQnLCAnYXBwbGljYXRpb24vdm5kLnVmZGwnXSxcbiAgICBbJ3VmZGwnLCAnYXBwbGljYXRpb24vdm5kLnVmZGwnXSxcbiAgICBbJ3VseCcsICdhcHBsaWNhdGlvbi94LWdsdWx4J10sXG4gICAgWyd1bWonLCAnYXBwbGljYXRpb24vdm5kLnVtYWppbiddLFxuICAgIFsndW5pdHl3ZWInLCAnYXBwbGljYXRpb24vdm5kLnVuaXR5J10sXG4gICAgWyd1b21sJywgJ2FwcGxpY2F0aW9uL3ZuZC51b21sK3htbCddLFxuICAgIFsndXJpJywgJ3RleHQvdXJpLWxpc3QnXSxcbiAgICBbJ3VyaXMnLCAndGV4dC91cmktbGlzdCddLFxuICAgIFsndXJscycsICd0ZXh0L3VyaS1saXN0J10sXG4gICAgWyd1c2R6JywgJ21vZGVsL3ZuZC51c2R6K3ppcCddLFxuICAgIFsndXN0YXInLCAnYXBwbGljYXRpb24veC11c3RhciddLFxuICAgIFsndXR6JywgJ2FwcGxpY2F0aW9uL3ZuZC51aXEudGhlbWUnXSxcbiAgICBbJ3V1JywgJ3RleHQveC11dWVuY29kZSddLFxuICAgIFsndXZhJywgJ2F1ZGlvL3ZuZC5kZWNlLmF1ZGlvJ10sXG4gICAgWyd1dmQnLCAnYXBwbGljYXRpb24vdm5kLmRlY2UuZGF0YSddLFxuICAgIFsndXZmJywgJ2FwcGxpY2F0aW9uL3ZuZC5kZWNlLmRhdGEnXSxcbiAgICBbJ3V2ZycsICdpbWFnZS92bmQuZGVjZS5ncmFwaGljJ10sXG4gICAgWyd1dmgnLCAndmlkZW8vdm5kLmRlY2UuaGQnXSxcbiAgICBbJ3V2aScsICdpbWFnZS92bmQuZGVjZS5ncmFwaGljJ10sXG4gICAgWyd1dm0nLCAndmlkZW8vdm5kLmRlY2UubW9iaWxlJ10sXG4gICAgWyd1dnAnLCAndmlkZW8vdm5kLmRlY2UucGQnXSxcbiAgICBbJ3V2cycsICd2aWRlby92bmQuZGVjZS5zZCddLFxuICAgIFsndXZ0JywgJ2FwcGxpY2F0aW9uL3ZuZC5kZWNlLnR0bWwreG1sJ10sXG4gICAgWyd1dnUnLCAndmlkZW8vdm5kLnV2dnUubXA0J10sXG4gICAgWyd1dnYnLCAndmlkZW8vdm5kLmRlY2UudmlkZW8nXSxcbiAgICBbJ3V2dmEnLCAnYXVkaW8vdm5kLmRlY2UuYXVkaW8nXSxcbiAgICBbJ3V2dmQnLCAnYXBwbGljYXRpb24vdm5kLmRlY2UuZGF0YSddLFxuICAgIFsndXZ2ZicsICdhcHBsaWNhdGlvbi92bmQuZGVjZS5kYXRhJ10sXG4gICAgWyd1dnZnJywgJ2ltYWdlL3ZuZC5kZWNlLmdyYXBoaWMnXSxcbiAgICBbJ3V2dmgnLCAndmlkZW8vdm5kLmRlY2UuaGQnXSxcbiAgICBbJ3V2dmknLCAnaW1hZ2Uvdm5kLmRlY2UuZ3JhcGhpYyddLFxuICAgIFsndXZ2bScsICd2aWRlby92bmQuZGVjZS5tb2JpbGUnXSxcbiAgICBbJ3V2dnAnLCAndmlkZW8vdm5kLmRlY2UucGQnXSxcbiAgICBbJ3V2dnMnLCAndmlkZW8vdm5kLmRlY2Uuc2QnXSxcbiAgICBbJ3V2dnQnLCAnYXBwbGljYXRpb24vdm5kLmRlY2UudHRtbCt4bWwnXSxcbiAgICBbJ3V2dnUnLCAndmlkZW8vdm5kLnV2dnUubXA0J10sXG4gICAgWyd1dnZ2JywgJ3ZpZGVvL3ZuZC5kZWNlLnZpZGVvJ10sXG4gICAgWyd1dnZ4JywgJ2FwcGxpY2F0aW9uL3ZuZC5kZWNlLnVuc3BlY2lmaWVkJ10sXG4gICAgWyd1dnZ6JywgJ2FwcGxpY2F0aW9uL3ZuZC5kZWNlLnppcCddLFxuICAgIFsndXZ4JywgJ2FwcGxpY2F0aW9uL3ZuZC5kZWNlLnVuc3BlY2lmaWVkJ10sXG4gICAgWyd1dnonLCAnYXBwbGljYXRpb24vdm5kLmRlY2UuemlwJ10sXG4gICAgWyd2Ym94JywgJ2FwcGxpY2F0aW9uL3gtdmlydHVhbGJveC12Ym94J10sXG4gICAgWyd2Ym94LWV4dHBhY2snLCAnYXBwbGljYXRpb24veC12aXJ0dWFsYm94LXZib3gtZXh0cGFjayddLFxuICAgIFsndmNhcmQnLCAndGV4dC92Y2FyZCddLFxuICAgIFsndmNkJywgJ2FwcGxpY2F0aW9uL3gtY2RsaW5rJ10sXG4gICAgWyd2Y2YnLCAndGV4dC94LXZjYXJkJ10sXG4gICAgWyd2Y2cnLCAnYXBwbGljYXRpb24vdm5kLmdyb292ZS12Y2FyZCddLFxuICAgIFsndmNzJywgJ3RleHQveC12Y2FsZW5kYXInXSxcbiAgICBbJ3ZjeCcsICdhcHBsaWNhdGlvbi92bmQudmN4J10sXG4gICAgWyd2ZGknLCAnYXBwbGljYXRpb24veC12aXJ0dWFsYm94LXZkaSddLFxuICAgIFsndmRzJywgJ21vZGVsL3ZuZC5zYXAudmRzJ10sXG4gICAgWyd2aGQnLCAnYXBwbGljYXRpb24veC12aXJ0dWFsYm94LXZoZCddLFxuICAgIFsndmlzJywgJ2FwcGxpY2F0aW9uL3ZuZC52aXNpb25hcnknXSxcbiAgICBbJ3ZpdicsICd2aWRlby92bmQudml2byddLFxuICAgIFsndmxjJywgJ2FwcGxpY2F0aW9uL3ZpZGVvbGFuJ10sXG4gICAgWyd2bWRrJywgJ2FwcGxpY2F0aW9uL3gtdmlydHVhbGJveC12bWRrJ10sXG4gICAgWyd2b2InLCAndmlkZW8veC1tcy12b2InXSxcbiAgICBbJ3ZvcicsICdhcHBsaWNhdGlvbi92bmQuc3RhcmRpdmlzaW9uLndyaXRlciddLFxuICAgIFsndm94JywgJ2FwcGxpY2F0aW9uL3gtYXV0aG9yd2FyZS1iaW4nXSxcbiAgICBbJ3ZybWwnLCAnbW9kZWwvdnJtbCddLFxuICAgIFsndnNkJywgJ2FwcGxpY2F0aW9uL3ZuZC52aXNpbyddLFxuICAgIFsndnNmJywgJ2FwcGxpY2F0aW9uL3ZuZC52c2YnXSxcbiAgICBbJ3ZzcycsICdhcHBsaWNhdGlvbi92bmQudmlzaW8nXSxcbiAgICBbJ3ZzdCcsICdhcHBsaWNhdGlvbi92bmQudmlzaW8nXSxcbiAgICBbJ3ZzdycsICdhcHBsaWNhdGlvbi92bmQudmlzaW8nXSxcbiAgICBbJ3Z0ZicsICdpbWFnZS92bmQudmFsdmUuc291cmNlLnRleHR1cmUnXSxcbiAgICBbJ3Z0dCcsICd0ZXh0L3Z0dCddLFxuICAgIFsndnR1JywgJ21vZGVsL3ZuZC52dHUnXSxcbiAgICBbJ3Z4bWwnLCAnYXBwbGljYXRpb24vdm9pY2V4bWwreG1sJ10sXG4gICAgWyd3M2QnLCAnYXBwbGljYXRpb24veC1kaXJlY3RvciddLFxuICAgIFsnd2FkJywgJ2FwcGxpY2F0aW9uL3gtZG9vbSddLFxuICAgIFsnd2FkbCcsICdhcHBsaWNhdGlvbi92bmQuc3VuLndhZGwreG1sJ10sXG4gICAgWyd3YXInLCAnYXBwbGljYXRpb24vamF2YS1hcmNoaXZlJ10sXG4gICAgWyd3YXNtJywgJ2FwcGxpY2F0aW9uL3dhc20nXSxcbiAgICBbJ3dhdicsICdhdWRpby94LXdhdiddLFxuICAgIFsnd2F4JywgJ2F1ZGlvL3gtbXMtd2F4J10sXG4gICAgWyd3Ym1wJywgJ2ltYWdlL3ZuZC53YXAud2JtcCddLFxuICAgIFsnd2JzJywgJ2FwcGxpY2F0aW9uL3ZuZC5jcml0aWNhbHRvb2xzLndicyt4bWwnXSxcbiAgICBbJ3dieG1sJywgJ2FwcGxpY2F0aW9uL3dieG1sJ10sXG4gICAgWyd3Y20nLCAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmtzJ10sXG4gICAgWyd3ZGInLCAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmtzJ10sXG4gICAgWyd3ZHAnLCAnaW1hZ2Uvdm5kLm1zLXBob3RvJ10sXG4gICAgWyd3ZWJhJywgJ2F1ZGlvL3dlYm0nXSxcbiAgICBbJ3dlYmFwcCcsICdhcHBsaWNhdGlvbi94LXdlYi1hcHAtbWFuaWZlc3QranNvbiddLFxuICAgIFsnd2VibScsICd2aWRlby93ZWJtJ10sXG4gICAgWyd3ZWJtYW5pZmVzdCcsICdhcHBsaWNhdGlvbi9tYW5pZmVzdCtqc29uJ10sXG4gICAgWyd3ZWJwJywgJ2ltYWdlL3dlYnAnXSxcbiAgICBbJ3dnJywgJ2FwcGxpY2F0aW9uL3ZuZC5wbWkud2lkZ2V0J10sXG4gICAgWyd3Z3QnLCAnYXBwbGljYXRpb24vd2lkZ2V0J10sXG4gICAgWyd3a3MnLCAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmtzJ10sXG4gICAgWyd3bScsICd2aWRlby94LW1zLXdtJ10sXG4gICAgWyd3bWEnLCAnYXVkaW8veC1tcy13bWEnXSxcbiAgICBbJ3dtZCcsICdhcHBsaWNhdGlvbi94LW1zLXdtZCddLFxuICAgIFsnd21mJywgJ2ltYWdlL3dtZiddLFxuICAgIFsnd21sJywgJ3RleHQvdm5kLndhcC53bWwnXSxcbiAgICBbJ3dtbGMnLCAnYXBwbGljYXRpb24vd21sYyddLFxuICAgIFsnd21scycsICd0ZXh0L3ZuZC53YXAud21sc2NyaXB0J10sXG4gICAgWyd3bWxzYycsICdhcHBsaWNhdGlvbi92bmQud2FwLndtbHNjcmlwdGMnXSxcbiAgICBbJ3dtdicsICd2aWRlby94LW1zLXdtdiddLFxuICAgIFsnd214JywgJ3ZpZGVvL3gtbXMtd214J10sXG4gICAgWyd3bXonLCAnYXBwbGljYXRpb24veC1tc21ldGFmaWxlJ10sXG4gICAgWyd3b2ZmJywgJ2ZvbnQvd29mZiddLFxuICAgIFsnd29mZjInLCAnZm9udC93b2ZmMiddLFxuICAgIFsnd29yZCcsICdhcHBsaWNhdGlvbi9tc3dvcmQnXSxcbiAgICBbJ3dwZCcsICdhcHBsaWNhdGlvbi92bmQud29yZHBlcmZlY3QnXSxcbiAgICBbJ3dwbCcsICdhcHBsaWNhdGlvbi92bmQubXMtd3BsJ10sXG4gICAgWyd3cHMnLCAnYXBwbGljYXRpb24vdm5kLm1zLXdvcmtzJ10sXG4gICAgWyd3cWQnLCAnYXBwbGljYXRpb24vdm5kLndxZCddLFxuICAgIFsnd3JpJywgJ2FwcGxpY2F0aW9uL3gtbXN3cml0ZSddLFxuICAgIFsnd3JsJywgJ21vZGVsL3ZybWwnXSxcbiAgICBbJ3dzYycsICdtZXNzYWdlL3ZuZC53ZmEud3NjJ10sXG4gICAgWyd3c2RsJywgJ2FwcGxpY2F0aW9uL3dzZGwreG1sJ10sXG4gICAgWyd3c3BvbGljeScsICdhcHBsaWNhdGlvbi93c3BvbGljeSt4bWwnXSxcbiAgICBbJ3d0YicsICdhcHBsaWNhdGlvbi92bmQud2VidHVyYm8nXSxcbiAgICBbJ3d2eCcsICd2aWRlby94LW1zLXd2eCddLFxuICAgIFsneDNkJywgJ21vZGVsL3gzZCt4bWwnXSxcbiAgICBbJ3gzZGInLCAnbW9kZWwveDNkK2Zhc3RpbmZvc2V0J10sXG4gICAgWyd4M2RieicsICdtb2RlbC94M2QrYmluYXJ5J10sXG4gICAgWyd4M2R2JywgJ21vZGVsL3gzZC12cm1sJ10sXG4gICAgWyd4M2R2eicsICdtb2RlbC94M2QrdnJtbCddLFxuICAgIFsneDNkeicsICdtb2RlbC94M2QreG1sJ10sXG4gICAgWyd4MzInLCAnYXBwbGljYXRpb24veC1hdXRob3J3YXJlLWJpbiddLFxuICAgIFsneF9iJywgJ21vZGVsL3ZuZC5wYXJhc29saWQudHJhbnNtaXQuYmluYXJ5J10sXG4gICAgWyd4X3QnLCAnbW9kZWwvdm5kLnBhcmFzb2xpZC50cmFuc21pdC50ZXh0J10sXG4gICAgWyd4YW1sJywgJ2FwcGxpY2F0aW9uL3hhbWwreG1sJ10sXG4gICAgWyd4YXAnLCAnYXBwbGljYXRpb24veC1zaWx2ZXJsaWdodC1hcHAnXSxcbiAgICBbJ3hhcicsICdhcHBsaWNhdGlvbi92bmQueGFyYSddLFxuICAgIFsneGF2JywgJ2FwcGxpY2F0aW9uL3hjYXAtYXR0K3htbCddLFxuICAgIFsneGJhcCcsICdhcHBsaWNhdGlvbi94LW1zLXhiYXAnXSxcbiAgICBbJ3hiZCcsICdhcHBsaWNhdGlvbi92bmQuZnVqaXhlcm94LmRvY3V3b3Jrcy5iaW5kZXInXSxcbiAgICBbJ3hibScsICdpbWFnZS94LXhiaXRtYXAnXSxcbiAgICBbJ3hjYScsICdhcHBsaWNhdGlvbi94Y2FwLWNhcHMreG1sJ10sXG4gICAgWyd4Y3MnLCAnYXBwbGljYXRpb24vY2FsZW5kYXIreG1sJ10sXG4gICAgWyd4ZGYnLCAnYXBwbGljYXRpb24veGNhcC1kaWZmK3htbCddLFxuICAgIFsneGRtJywgJ2FwcGxpY2F0aW9uL3ZuZC5zeW5jbWwuZG0reG1sJ10sXG4gICAgWyd4ZHAnLCAnYXBwbGljYXRpb24vdm5kLmFkb2JlLnhkcCt4bWwnXSxcbiAgICBbJ3hkc3NjJywgJ2FwcGxpY2F0aW9uL2Rzc2MreG1sJ10sXG4gICAgWyd4ZHcnLCAnYXBwbGljYXRpb24vdm5kLmZ1aml4ZXJveC5kb2N1d29ya3MnXSxcbiAgICBbJ3hlbCcsICdhcHBsaWNhdGlvbi94Y2FwLWVsK3htbCddLFxuICAgIFsneGVuYycsICdhcHBsaWNhdGlvbi94ZW5jK3htbCddLFxuICAgIFsneGVyJywgJ2FwcGxpY2F0aW9uL3BhdGNoLW9wcy1lcnJvcit4bWwnXSxcbiAgICBbJ3hmZGYnLCAnYXBwbGljYXRpb24vdm5kLmFkb2JlLnhmZGYnXSxcbiAgICBbJ3hmZGwnLCAnYXBwbGljYXRpb24vdm5kLnhmZGwnXSxcbiAgICBbJ3hodCcsICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnXSxcbiAgICBbJ3hodG1sJywgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCddLFxuICAgIFsneGh2bWwnLCAnYXBwbGljYXRpb24veHYreG1sJ10sXG4gICAgWyd4aWYnLCAnaW1hZ2Uvdm5kLnhpZmYnXSxcbiAgICBbJ3hsJywgJ2FwcGxpY2F0aW9uL2V4Y2VsJ10sXG4gICAgWyd4bGEnLCAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJ10sXG4gICAgWyd4bGFtJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbC5hZGRpbi5tYWNyb0VuYWJsZWQuMTInXSxcbiAgICBbJ3hsYycsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnXSxcbiAgICBbJ3hsZicsICdhcHBsaWNhdGlvbi94bGlmZit4bWwnXSxcbiAgICBbJ3hsbScsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnXSxcbiAgICBbJ3hscycsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnXSxcbiAgICBbJ3hsc2InLCAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnNoZWV0LmJpbmFyeS5tYWNyb0VuYWJsZWQuMTInXSxcbiAgICBbJ3hsc20nLCAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsLnNoZWV0Lm1hY3JvRW5hYmxlZC4xMiddLFxuICAgIFsneGxzeCcsICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCddLFxuICAgIFsneGx0JywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCddLFxuICAgIFsneGx0bScsICdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwudGVtcGxhdGUubWFjcm9FbmFibGVkLjEyJ10sXG4gICAgWyd4bHR4JywgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnRlbXBsYXRlJ10sXG4gICAgWyd4bHcnLCAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJ10sXG4gICAgWyd4bScsICdhdWRpby94bSddLFxuICAgIFsneG1sJywgJ2FwcGxpY2F0aW9uL3htbCddLFxuICAgIFsneG5zJywgJ2FwcGxpY2F0aW9uL3hjYXAtbnMreG1sJ10sXG4gICAgWyd4bycsICdhcHBsaWNhdGlvbi92bmQub2xwYy1zdWdhciddLFxuICAgIFsneG9wJywgJ2FwcGxpY2F0aW9uL3hvcCt4bWwnXSxcbiAgICBbJ3hwaScsICdhcHBsaWNhdGlvbi94LXhwaW5zdGFsbCddLFxuICAgIFsneHBsJywgJ2FwcGxpY2F0aW9uL3hwcm9jK3htbCddLFxuICAgIFsneHBtJywgJ2ltYWdlL3gteHBpeG1hcCddLFxuICAgIFsneHByJywgJ2FwcGxpY2F0aW9uL3ZuZC5pcy14cHInXSxcbiAgICBbJ3hwcycsICdhcHBsaWNhdGlvbi92bmQubXMteHBzZG9jdW1lbnQnXSxcbiAgICBbJ3hwdycsICdhcHBsaWNhdGlvbi92bmQuaW50ZXJjb24uZm9ybW5ldCddLFxuICAgIFsneHB4JywgJ2FwcGxpY2F0aW9uL3ZuZC5pbnRlcmNvbi5mb3JtbmV0J10sXG4gICAgWyd4c2QnLCAnYXBwbGljYXRpb24veG1sJ10sXG4gICAgWyd4c2wnLCAnYXBwbGljYXRpb24veG1sJ10sXG4gICAgWyd4c2x0JywgJ2FwcGxpY2F0aW9uL3hzbHQreG1sJ10sXG4gICAgWyd4c20nLCAnYXBwbGljYXRpb24vdm5kLnN5bmNtbCt4bWwnXSxcbiAgICBbJ3hzcGYnLCAnYXBwbGljYXRpb24veHNwZit4bWwnXSxcbiAgICBbJ3h1bCcsICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJ10sXG4gICAgWyd4dm0nLCAnYXBwbGljYXRpb24veHYreG1sJ10sXG4gICAgWyd4dm1sJywgJ2FwcGxpY2F0aW9uL3h2K3htbCddLFxuICAgIFsneHdkJywgJ2ltYWdlL3gteHdpbmRvd2R1bXAnXSxcbiAgICBbJ3h5eicsICdjaGVtaWNhbC94LXh5eiddLFxuICAgIFsneHonLCAnYXBwbGljYXRpb24veC14eiddLFxuICAgIFsneWFtbCcsICd0ZXh0L3lhbWwnXSxcbiAgICBbJ3lhbmcnLCAnYXBwbGljYXRpb24veWFuZyddLFxuICAgIFsneWluJywgJ2FwcGxpY2F0aW9uL3lpbit4bWwnXSxcbiAgICBbJ3ltbCcsICd0ZXh0L3lhbWwnXSxcbiAgICBbJ3ltcCcsICd0ZXh0L3gtc3VzZS15bXAnXSxcbiAgICBbJ3onLCAnYXBwbGljYXRpb24veC1jb21wcmVzcyddLFxuICAgIFsnejEnLCAnYXBwbGljYXRpb24veC16bWFjaGluZSddLFxuICAgIFsnejInLCAnYXBwbGljYXRpb24veC16bWFjaGluZSddLFxuICAgIFsnejMnLCAnYXBwbGljYXRpb24veC16bWFjaGluZSddLFxuICAgIFsnejQnLCAnYXBwbGljYXRpb24veC16bWFjaGluZSddLFxuICAgIFsnejUnLCAnYXBwbGljYXRpb24veC16bWFjaGluZSddLFxuICAgIFsnejYnLCAnYXBwbGljYXRpb24veC16bWFjaGluZSddLFxuICAgIFsnejcnLCAnYXBwbGljYXRpb24veC16bWFjaGluZSddLFxuICAgIFsnejgnLCAnYXBwbGljYXRpb24veC16bWFjaGluZSddLFxuICAgIFsnemF6JywgJ2FwcGxpY2F0aW9uL3ZuZC56emF6ei5kZWNrK3htbCddLFxuICAgIFsnemlwJywgJ2FwcGxpY2F0aW9uL3ppcCddLFxuICAgIFsnemlyJywgJ2FwcGxpY2F0aW9uL3ZuZC56dWwnXSxcbiAgICBbJ3ppcnonLCAnYXBwbGljYXRpb24vdm5kLnp1bCddLFxuICAgIFsnem1tJywgJ2FwcGxpY2F0aW9uL3ZuZC5oYW5kaGVsZC1lbnRlcnRhaW5tZW50K3htbCddLFxuICAgIFsnenNoJywgJ3RleHQveC1zY3JpcHR6c2gnXVxuXSk7XG5mdW5jdGlvbiB0b0ZpbGVXaXRoUGF0aChmaWxlLCBwYXRoLCBoKSB7XG4gICAgdmFyIGYgPSB3aXRoTWltZVR5cGUoZmlsZSk7XG4gICAgdmFyIHdlYmtpdFJlbGF0aXZlUGF0aCA9IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoO1xuICAgIHZhciBwID0gdHlwZW9mIHBhdGggPT09ICdzdHJpbmcnXG4gICAgICAgID8gcGF0aFxuICAgICAgICAvLyBJZiA8aW5wdXQgd2Via2l0ZGlyZWN0b3J5PiBpcyBzZXQsXG4gICAgICAgIC8vIHRoZSBGaWxlIHdpbGwgaGF2ZSBhIHt3ZWJraXRSZWxhdGl2ZVBhdGh9IHByb3BlcnR5XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MSW5wdXRFbGVtZW50L3dlYmtpdGRpcmVjdG9yeVxuICAgICAgICA6IHR5cGVvZiB3ZWJraXRSZWxhdGl2ZVBhdGggPT09ICdzdHJpbmcnICYmIHdlYmtpdFJlbGF0aXZlUGF0aC5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHdlYmtpdFJlbGF0aXZlUGF0aFxuICAgICAgICAgICAgOiBcIi4vXCIuY29uY2F0KGZpbGUubmFtZSk7XG4gICAgaWYgKHR5cGVvZiBmLnBhdGggIT09ICdzdHJpbmcnKSB7IC8vIG9uIGVsZWN0cm9uLCBwYXRoIGlzIGFscmVhZHkgc2V0IHRvIHRoZSBhYnNvbHV0ZSBwYXRoXG4gICAgICAgIHNldE9ialByb3AoZiwgJ3BhdGgnLCBwKTtcbiAgICB9XG4gICAgaWYgKGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgJ2hhbmRsZScsIHtcbiAgICAgICAgICAgIHZhbHVlOiBoLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFsd2F5cyBwb3B1bGF0ZSBhIHJlbGF0aXZlIHBhdGggc28gdGhhdCBldmVuIGVsZWN0cm9uIGFwcHMgaGF2ZSBhY2Nlc3MgdG8gYSByZWxhdGl2ZVBhdGggdmFsdWVcbiAgICBzZXRPYmpQcm9wKGYsICdyZWxhdGl2ZVBhdGgnLCBwKTtcbiAgICByZXR1cm4gZjtcbn1cbmZ1bmN0aW9uIHdpdGhNaW1lVHlwZShmaWxlKSB7XG4gICAgdmFyIG5hbWUgPSBmaWxlLm5hbWU7XG4gICAgdmFyIGhhc0V4dGVuc2lvbiA9IG5hbWUgJiYgbmFtZS5sYXN0SW5kZXhPZignLicpICE9PSAtMTtcbiAgICBpZiAoaGFzRXh0ZW5zaW9uICYmICFmaWxlLnR5cGUpIHtcbiAgICAgICAgdmFyIGV4dCA9IG5hbWUuc3BsaXQoJy4nKVxuICAgICAgICAgICAgLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciB0eXBlID0gZXhwb3J0cy5DT01NT05fTUlNRV9UWVBFUy5nZXQoZXh0KTtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWxlLCAndHlwZScsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHlwZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlsZTtcbn1cbmZ1bmN0aW9uIHNldE9ialByb3AoZiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcm9tRXZlbnQgPSBmcm9tRXZlbnQ7XG52YXIgZmlsZV8xID0gcmVxdWlyZShcIi4vZmlsZVwiKTtcbnZhciBGSUxFU19UT19JR05PUkUgPSBbXG4gICAgLy8gVGh1bWJuYWlsIGNhY2hlIGZpbGVzIGZvciBtYWNPUyBhbmQgV2luZG93c1xuICAgICcuRFNfU3RvcmUnLCAvLyBtYWNPc1xuICAgICdUaHVtYnMuZGInIC8vIFdpbmRvd3Ncbl07XG4vKipcbiAqIENvbnZlcnQgYSBEcmFnRXZlbnQncyBEYXRhVHJhc2ZlciBvYmplY3QgdG8gYSBsaXN0IG9mIEZpbGUgb2JqZWN0c1xuICogTk9URTogSWYgc29tZSBvZiB0aGUgaXRlbXMgYXJlIGZvbGRlcnMsXG4gKiBldmVyeXRoaW5nIHdpbGwgYmUgZmxhdHRlbmVkIGFuZCBwbGFjZWQgaW4gdGhlIHNhbWUgbGlzdCBidXQgdGhlIHBhdGhzIHdpbGwgYmUga2VwdCBhcyBhIHtwYXRofSBwcm9wZXJ0eS5cbiAqXG4gKiBFWFBFUklNRU5UQUw6IEEgbGlzdCBvZiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUhhbmRsZSBvYmplY3RzIGNhbiBhbHNvIGJlIHBhc3NlZCBhcyBhbiBhcmdcbiAqIGFuZCBhIGxpc3Qgb2YgRmlsZSBvYmplY3RzIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIGV2dFxuICovXG5mdW5jdGlvbiBmcm9tRXZlbnQoZXZ0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QoZXZ0KSAmJiBpc0RhdGFUcmFuc2ZlcihldnQuZGF0YVRyYW5zZmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXREYXRhVHJhbnNmZXJGaWxlcyhldnQuZGF0YVRyYW5zZmVyLCBldnQudHlwZSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNDaGFuZ2VFdnQoZXZ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBnZXRJbnB1dEZpbGVzKGV2dCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShldnQpICYmIGV2dC5ldmVyeShmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gJ2dldEZpbGUnIGluIGl0ZW0gJiYgdHlwZW9mIGl0ZW0uZ2V0RmlsZSA9PT0gJ2Z1bmN0aW9uJzsgfSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZ2V0RnNIYW5kbGVGaWxlcyhldnQpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBbXV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNEYXRhVHJhbnNmZXIodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDaGFuZ2VFdnQodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIGlzT2JqZWN0KHZhbHVlLnRhcmdldCk7XG59XG5mdW5jdGlvbiBpc09iamVjdCh2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsO1xufVxuZnVuY3Rpb24gZ2V0SW5wdXRGaWxlcyhldnQpIHtcbiAgICByZXR1cm4gZnJvbUxpc3QoZXZ0LnRhcmdldC5maWxlcykubWFwKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiAoMCwgZmlsZV8xLnRvRmlsZVdpdGhQYXRoKShmaWxlKTsgfSk7XG59XG4vLyBFZSBleHBlY3QgZWFjaCBoYW5kbGUgdG8gYmUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1GaWxlSGFuZGxlXG5mdW5jdGlvbiBnZXRGc0hhbmRsZUZpbGVzKGhhbmRsZXMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmaWxlcztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoaGFuZGxlcy5tYXAoZnVuY3Rpb24gKGgpIHsgcmV0dXJuIGguZ2V0RmlsZSgpOyB9KSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZmlsZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmaWxlcy5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuICgwLCBmaWxlXzEudG9GaWxlV2l0aFBhdGgpKGZpbGUpOyB9KV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0RGF0YVRyYW5zZmVyRmlsZXMoZHQsIHR5cGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVtcywgZmlsZXM7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICghZHQuaXRlbXMpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IGZyb21MaXN0KGR0Lml0ZW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5raW5kID09PSAnZmlsZSc7IH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBBY2NvcmRpbmcgdG8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG5kLmh0bWwjZG5kZXZlbnRzLFxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5ICdkcmFnc3RhcnQnIGFuZCAnZHJvcCcgaGFzIGFjY2VzcyB0byB0aGUgZGF0YSAoc291cmNlIG5vZGUpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlICE9PSAnZHJvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBpdGVtc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoaXRlbXMubWFwKHRvRmlsZVByb21pc2VzKSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgZmlsZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBub0lnbm9yZWRGaWxlcyhmbGF0dGVuKGZpbGVzKSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5vSWdub3JlZEZpbGVzKGZyb21MaXN0KGR0LmZpbGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gKDAsIGZpbGVfMS50b0ZpbGVXaXRoUGF0aCkoZmlsZSk7IH0pKV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbm9JZ25vcmVkRmlsZXMoZmlsZXMpIHtcbiAgICByZXR1cm4gZmlsZXMuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiBGSUxFU19UT19JR05PUkUuaW5kZXhPZihmaWxlLm5hbWUpID09PSAtMTsgfSk7XG59XG4vLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgQXJyYXkuZnJvbSgpXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mcm9tI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVMaXN0XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRGF0YVRyYW5zZmVySXRlbUxpc3RcbmZ1bmN0aW9uIGZyb21MaXN0KGl0ZW1zKSB7XG4gICAgaWYgKGl0ZW1zID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGZpbGVzID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmaWxlID0gaXRlbXNbaV07XG4gICAgICAgIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmaWxlcztcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EYXRhVHJhbnNmZXJJdGVtXG5mdW5jdGlvbiB0b0ZpbGVQcm9taXNlcyhpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLndlYmtpdEdldEFzRW50cnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZyb21EYXRhVHJhbnNmZXJJdGVtKGl0ZW0pO1xuICAgIH1cbiAgICB2YXIgZW50cnkgPSBpdGVtLndlYmtpdEdldEFzRW50cnkoKTtcbiAgICAvLyBTYWZhcmkgc3VwcG9ydHMgZHJvcHBpbmcgYW4gaW1hZ2Ugbm9kZSBmcm9tIGEgZGlmZmVyZW50IHdpbmRvdyBhbmQgY2FuIGJlIHJldHJpZXZlZCB1c2luZ1xuICAgIC8vIHRoZSBEYXRhVHJhbnNmZXJJdGVtLmdldEFzRmlsZSgpIEFQSVxuICAgIC8vIE5PVEU6IEZpbGVTeXN0ZW1FbnRyeS5maWxlKCkgdGhyb3dzIGlmIHRyeWluZyB0byBnZXQgdGhlIGZpbGVcbiAgICBpZiAoZW50cnkgJiYgZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIGZyb21EaXJFbnRyeShlbnRyeSk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tRGF0YVRyYW5zZmVySXRlbShpdGVtLCBlbnRyeSk7XG59XG5mdW5jdGlvbiBmbGF0dGVuKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWxlcykgeyByZXR1cm4gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYWNjKSwgZmFsc2UpLCBfX3JlYWQoKEFycmF5LmlzQXJyYXkoZmlsZXMpID8gZmxhdHRlbihmaWxlcykgOiBbZmlsZXNdKSksIGZhbHNlKTsgfSwgW10pO1xufVxuZnVuY3Rpb24gZnJvbURhdGFUcmFuc2Zlckl0ZW0oaXRlbSwgZW50cnkpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoLCBmaWxlXzIsIGZpbGUsIGZ3cDtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIShnbG9iYWxUaGlzLmlzU2VjdXJlQ29udGV4dCAmJiB0eXBlb2YgaXRlbS5nZXRBc0ZpbGVTeXN0ZW1IYW5kbGUgPT09ICdmdW5jdGlvbicpKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaXRlbS5nZXRBc0ZpbGVTeXN0ZW1IYW5kbGUoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBoID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KGl0ZW0sIFwiIGlzIG5vdCBhIEZpbGVcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGggIT09IHVuZGVmaW5lZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoLmdldEZpbGUoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBmaWxlXzIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVfMi5oYW5kbGUgPSBoO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgKDAsIGZpbGVfMS50b0ZpbGVXaXRoUGF0aCkoZmlsZV8yKV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoaXRlbSwgXCIgaXMgbm90IGEgRmlsZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZndwID0gKDAsIGZpbGVfMS50b0ZpbGVXaXRoUGF0aCkoZmlsZSwgKF9hID0gZW50cnkgPT09IG51bGwgfHwgZW50cnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVudHJ5LmZ1bGxQYXRoKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZndwXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUVudHJ5XG5mdW5jdGlvbiBmcm9tRW50cnkoZW50cnkpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBlbnRyeS5pc0RpcmVjdG9yeSA/IGZyb21EaXJFbnRyeShlbnRyeSkgOiBmcm9tRmlsZUVudHJ5KGVudHJ5KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1EaXJlY3RvcnlFbnRyeVxuZnVuY3Rpb24gZnJvbURpckVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlYWRlciA9IGVudHJ5LmNyZWF0ZVJlYWRlcigpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIHJlYWRFbnRyaWVzKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRGlyZWN0b3J5RW50cnkvY3JlYXRlUmVhZGVyXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbURpcmVjdG9yeVJlYWRlci9yZWFkRW50cmllc1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRFbnRyaWVzKGZ1bmN0aW9uIChiYXRjaCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBmaWxlcywgZXJyXzEsIGl0ZW1zO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWJhdGNoLmxlbmd0aCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwoZW50cmllcyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gUHJvbWlzZS5hbGwoYmF0Y2gubWFwKGZyb21FbnRyeSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJpZXMucHVzaChpdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgcmVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pOyB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZWFkRW50cmllcygpO1xuICAgIH0pO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1GaWxlRW50cnlcbmZ1bmN0aW9uIGZyb21GaWxlRW50cnkoZW50cnkpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmZpbGUoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmd3AgPSAoMCwgZmlsZV8xLnRvRmlsZVdpdGhQYXRoKShmaWxlLCBlbnRyeS5mdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZ3cCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsZS1zZWxlY3Rvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZnJvbUV2ZW50ID0gdm9pZCAwO1xudmFyIGZpbGVfc2VsZWN0b3JfMSA9IHJlcXVpcmUoXCIuL2ZpbGUtc2VsZWN0b3JcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJmcm9tRXZlbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpbGVfc2VsZWN0b3JfMS5mcm9tRXZlbnQ7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgcj17fTtmdW5jdGlvbiB0KG4pe2lmKHJbbl0pcmV0dXJuIHJbbl0uZXhwb3J0czt2YXIgbz1yW25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtuXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyx0KSxvLmw9ITAsby5leHBvcnRzfXJldHVybiB0Lm09ZSx0LmM9cix0LmQ9ZnVuY3Rpb24oZSxyLG4pe3QubyhlLHIpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHQucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSx0LnQ9ZnVuY3Rpb24oZSxyKXtpZigxJnImJihlPXQoZSkpLDgmcilyZXR1cm4gZTtpZig0JnImJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZih0LnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImciYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpdC5kKG4sbyxmdW5jdGlvbihyKXtyZXR1cm4gZVtyXX0uYmluZChudWxsLG8pKTtyZXR1cm4gbn0sdC5uPWZ1bmN0aW9uKGUpe3ZhciByPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQocixcImFcIixyKSxyfSx0Lm89ZnVuY3Rpb24oZSxyKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscil9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSxyLHQpe1widXNlIHN0cmljdFwiO3IuX19lc01vZHVsZT0hMCxyLmRlZmF1bHQ9ZnVuY3Rpb24oZSxyKXtpZihlJiZyKXt2YXIgdD1BcnJheS5pc0FycmF5KHIpP3I6ci5zcGxpdChcIixcIik7aWYoMD09PXQubGVuZ3RoKXJldHVybiEwO3ZhciBuPWUubmFtZXx8XCJcIixvPShlLnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCksdT1vLnJlcGxhY2UoL1xcLy4qJC8sXCJcIik7cmV0dXJuIHQuc29tZSgoZnVuY3Rpb24oZSl7dmFyIHI9ZS50cmltKCkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIi5cIj09PXIuY2hhckF0KDApP24udG9Mb3dlckNhc2UoKS5lbmRzV2l0aChyKTpyLmVuZHNXaXRoKFwiLypcIik/dT09PXIucmVwbGFjZSgvXFwvLiokLyxcIlwiKTpvPT09cn0pKX1yZXR1cm4hMH19XSk7IiwiZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmltcG9ydCBfYWNjZXB0cyBmcm9tIFwiYXR0ci1hY2NlcHRcIjtcbnZhciBhY2NlcHRzID0gdHlwZW9mIF9hY2NlcHRzID09PSBcImZ1bmN0aW9uXCIgPyBfYWNjZXB0cyA6IF9hY2NlcHRzLmRlZmF1bHQ7IC8vIEVycm9yIGNvZGVzXG5cbmV4cG9ydCB2YXIgRklMRV9JTlZBTElEX1RZUEUgPSBcImZpbGUtaW52YWxpZC10eXBlXCI7XG5leHBvcnQgdmFyIEZJTEVfVE9PX0xBUkdFID0gXCJmaWxlLXRvby1sYXJnZVwiO1xuZXhwb3J0IHZhciBGSUxFX1RPT19TTUFMTCA9IFwiZmlsZS10b28tc21hbGxcIjtcbmV4cG9ydCB2YXIgVE9PX01BTllfRklMRVMgPSBcInRvby1tYW55LWZpbGVzXCI7XG5leHBvcnQgdmFyIEVycm9yQ29kZSA9IHtcbiAgRmlsZUludmFsaWRUeXBlOiBGSUxFX0lOVkFMSURfVFlQRSxcbiAgRmlsZVRvb0xhcmdlOiBGSUxFX1RPT19MQVJHRSxcbiAgRmlsZVRvb1NtYWxsOiBGSUxFX1RPT19TTUFMTCxcbiAgVG9vTWFueUZpbGVzOiBUT09fTUFOWV9GSUxFU1xufTtcbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY2NlcHRcbiAqL1xuXG5leHBvcnQgdmFyIGdldEludmFsaWRUeXBlUmVqZWN0aW9uRXJyID0gZnVuY3Rpb24gZ2V0SW52YWxpZFR5cGVSZWplY3Rpb25FcnIoKSB7XG4gIHZhciBhY2NlcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFwiXCI7XG4gIHZhciBhY2NlcHRBcnIgPSBhY2NlcHQuc3BsaXQoXCIsXCIpO1xuICB2YXIgbXNnID0gYWNjZXB0QXJyLmxlbmd0aCA+IDEgPyBcIm9uZSBvZiBcIi5jb25jYXQoYWNjZXB0QXJyLmpvaW4oXCIsIFwiKSkgOiBhY2NlcHRBcnJbMF07XG4gIHJldHVybiB7XG4gICAgY29kZTogRklMRV9JTlZBTElEX1RZUEUsXG4gICAgbWVzc2FnZTogXCJGaWxlIHR5cGUgbXVzdCBiZSBcIi5jb25jYXQobXNnKVxuICB9O1xufTtcbmV4cG9ydCB2YXIgZ2V0VG9vTGFyZ2VSZWplY3Rpb25FcnIgPSBmdW5jdGlvbiBnZXRUb29MYXJnZVJlamVjdGlvbkVycihtYXhTaXplKSB7XG4gIHJldHVybiB7XG4gICAgY29kZTogRklMRV9UT09fTEFSR0UsXG4gICAgbWVzc2FnZTogXCJGaWxlIGlzIGxhcmdlciB0aGFuIFwiLmNvbmNhdChtYXhTaXplLCBcIiBcIikuY29uY2F0KG1heFNpemUgPT09IDEgPyBcImJ5dGVcIiA6IFwiYnl0ZXNcIilcbiAgfTtcbn07XG5leHBvcnQgdmFyIGdldFRvb1NtYWxsUmVqZWN0aW9uRXJyID0gZnVuY3Rpb24gZ2V0VG9vU21hbGxSZWplY3Rpb25FcnIobWluU2l6ZSkge1xuICByZXR1cm4ge1xuICAgIGNvZGU6IEZJTEVfVE9PX1NNQUxMLFxuICAgIG1lc3NhZ2U6IFwiRmlsZSBpcyBzbWFsbGVyIHRoYW4gXCIuY29uY2F0KG1pblNpemUsIFwiIFwiKS5jb25jYXQobWluU2l6ZSA9PT0gMSA/IFwiYnl0ZVwiIDogXCJieXRlc1wiKVxuICB9O1xufTtcbmV4cG9ydCB2YXIgVE9PX01BTllfRklMRVNfUkVKRUNUSU9OID0ge1xuICBjb2RlOiBUT09fTUFOWV9GSUxFUyxcbiAgbWVzc2FnZTogXCJUb28gbWFueSBmaWxlc1wiXG59O1xuLyoqXG4gKiBDaGVjayBpZiBmaWxlIGlzIGFjY2VwdGVkLlxuICpcbiAqIEZpcmVmb3ggdmVyc2lvbnMgcHJpb3IgdG8gNTMgcmV0dXJuIGEgYm9ndXMgTUlNRSB0eXBlIGZvciBldmVyeSBmaWxlIGRyYWcsXG4gKiBzbyBkcmFnb3ZlcnMgd2l0aCB0aGF0IE1JTUUgdHlwZSB3aWxsIGFsd2F5cyBiZSBhY2NlcHRlZC5cbiAqXG4gKiBAcGFyYW0ge0ZpbGV9IGZpbGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY2NlcHRcbiAqIEByZXR1cm5zXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVBY2NlcHRlZChmaWxlLCBhY2NlcHQpIHtcbiAgdmFyIGlzQWNjZXB0YWJsZSA9IGZpbGUudHlwZSA9PT0gXCJhcHBsaWNhdGlvbi94LW1vei1maWxlXCIgfHwgYWNjZXB0cyhmaWxlLCBhY2NlcHQpO1xuICByZXR1cm4gW2lzQWNjZXB0YWJsZSwgaXNBY2NlcHRhYmxlID8gbnVsbCA6IGdldEludmFsaWRUeXBlUmVqZWN0aW9uRXJyKGFjY2VwdCldO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVNYXRjaFNpemUoZmlsZSwgbWluU2l6ZSwgbWF4U2l6ZSkge1xuICBpZiAoaXNEZWZpbmVkKGZpbGUuc2l6ZSkpIHtcbiAgICBpZiAoaXNEZWZpbmVkKG1pblNpemUpICYmIGlzRGVmaW5lZChtYXhTaXplKSkge1xuICAgICAgaWYgKGZpbGUuc2l6ZSA+IG1heFNpemUpIHJldHVybiBbZmFsc2UsIGdldFRvb0xhcmdlUmVqZWN0aW9uRXJyKG1heFNpemUpXTtcbiAgICAgIGlmIChmaWxlLnNpemUgPCBtaW5TaXplKSByZXR1cm4gW2ZhbHNlLCBnZXRUb29TbWFsbFJlamVjdGlvbkVycihtaW5TaXplKV07XG4gICAgfSBlbHNlIGlmIChpc0RlZmluZWQobWluU2l6ZSkgJiYgZmlsZS5zaXplIDwgbWluU2l6ZSkgcmV0dXJuIFtmYWxzZSwgZ2V0VG9vU21hbGxSZWplY3Rpb25FcnIobWluU2l6ZSldO2Vsc2UgaWYgKGlzRGVmaW5lZChtYXhTaXplKSAmJiBmaWxlLnNpemUgPiBtYXhTaXplKSByZXR1cm4gW2ZhbHNlLCBnZXRUb29MYXJnZVJlamVjdGlvbkVycihtYXhTaXplKV07XG4gIH1cblxuICByZXR1cm4gW3RydWUsIG51bGxdO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG4vKipcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGaWxlW119IG9wdGlvbnMuZmlsZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5hY2NlcHRdXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWluU2l6ZV1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhTaXplXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5tdWx0aXBsZV1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhGaWxlc11cbiAqIEBwYXJhbSB7KGY6IEZpbGUpID0+IEZpbGVFcnJvcnxGaWxlRXJyb3JbXXxudWxsfSBbb3B0aW9ucy52YWxpZGF0b3JdXG4gKiBAcmV0dXJuc1xuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFsbEZpbGVzQWNjZXB0ZWQoX3JlZikge1xuICB2YXIgZmlsZXMgPSBfcmVmLmZpbGVzLFxuICAgICAgYWNjZXB0ID0gX3JlZi5hY2NlcHQsXG4gICAgICBtaW5TaXplID0gX3JlZi5taW5TaXplLFxuICAgICAgbWF4U2l6ZSA9IF9yZWYubWF4U2l6ZSxcbiAgICAgIG11bHRpcGxlID0gX3JlZi5tdWx0aXBsZSxcbiAgICAgIG1heEZpbGVzID0gX3JlZi5tYXhGaWxlcyxcbiAgICAgIHZhbGlkYXRvciA9IF9yZWYudmFsaWRhdG9yO1xuXG4gIGlmICghbXVsdGlwbGUgJiYgZmlsZXMubGVuZ3RoID4gMSB8fCBtdWx0aXBsZSAmJiBtYXhGaWxlcyA+PSAxICYmIGZpbGVzLmxlbmd0aCA+IG1heEZpbGVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVzLmV2ZXJ5KGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgdmFyIF9maWxlQWNjZXB0ZWQgPSBmaWxlQWNjZXB0ZWQoZmlsZSwgYWNjZXB0KSxcbiAgICAgICAgX2ZpbGVBY2NlcHRlZDIgPSBfc2xpY2VkVG9BcnJheShfZmlsZUFjY2VwdGVkLCAxKSxcbiAgICAgICAgYWNjZXB0ZWQgPSBfZmlsZUFjY2VwdGVkMlswXTtcblxuICAgIHZhciBfZmlsZU1hdGNoU2l6ZSA9IGZpbGVNYXRjaFNpemUoZmlsZSwgbWluU2l6ZSwgbWF4U2l6ZSksXG4gICAgICAgIF9maWxlTWF0Y2hTaXplMiA9IF9zbGljZWRUb0FycmF5KF9maWxlTWF0Y2hTaXplLCAxKSxcbiAgICAgICAgc2l6ZU1hdGNoID0gX2ZpbGVNYXRjaFNpemUyWzBdO1xuXG4gICAgdmFyIGN1c3RvbUVycm9ycyA9IHZhbGlkYXRvciA/IHZhbGlkYXRvcihmaWxlKSA6IG51bGw7XG4gICAgcmV0dXJuIGFjY2VwdGVkICYmIHNpemVNYXRjaCAmJiAhY3VzdG9tRXJyb3JzO1xuICB9KTtcbn0gLy8gUmVhY3QncyBzeW50aGV0aWMgZXZlbnRzIGhhcyBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCxcbi8vIGJ1dCB0byByZW1haW4gY29tcGF0aWJpbGl0eSB3aXRoIG90aGVyIGxpYnMgKFByZWFjdCkgZmFsbCBiYWNrXG4vLyB0byBjaGVjayBldmVudC5jYW5jZWxCdWJibGVcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvcGFnYXRpb25TdG9wcGVkKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBldmVudC5jYW5jZWxCdWJibGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZXZlbnQuY2FuY2VsQnViYmxlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRXZ0V2l0aEZpbGVzKGV2ZW50KSB7XG4gIGlmICghZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgcmV0dXJuICEhZXZlbnQudGFyZ2V0ICYmICEhZXZlbnQudGFyZ2V0LmZpbGVzO1xuICB9IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9EYXRhVHJhbnNmZXIvdHlwZXNcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxfRHJhZ19hbmRfRHJvcF9BUEkvUmVjb21tZW5kZWRfZHJhZ190eXBlcyNmaWxlXG5cblxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChldmVudC5kYXRhVHJhbnNmZXIudHlwZXMsIGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09IFwiRmlsZXNcIiB8fCB0eXBlID09PSBcImFwcGxpY2F0aW9uL3gtbW96LWZpbGVcIjtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNLaW5kRmlsZShpdGVtKSB7XG4gIHJldHVybiBfdHlwZW9mKGl0ZW0pID09PSBcIm9iamVjdFwiICYmIGl0ZW0gIT09IG51bGwgJiYgaXRlbS5raW5kID09PSBcImZpbGVcIjtcbn0gLy8gYWxsb3cgdGhlIGVudGlyZSBkb2N1bWVudCB0byBiZSBhIGRyYWcgdGFyZ2V0XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50RHJhZ092ZXIoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gaXNJZSh1c2VyQWdlbnQpIHtcbiAgcmV0dXJuIHVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKSAhPT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50L1wiKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGlzRWRnZSh1c2VyQWdlbnQpIHtcbiAgcmV0dXJuIHVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZS9cIikgIT09IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJZU9yRWRnZSgpIHtcbiAgdmFyIHVzZXJBZ2VudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiBpc0llKHVzZXJBZ2VudCkgfHwgaXNFZGdlKHVzZXJBZ2VudCk7XG59XG4vKipcbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCB0byBjb21wb3NlIGV2ZW50IGhhbmRsZXJzXG4gKiBUaGV5IGFyZSBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBvbmUgb2YgdGhlbSBjYWxscyBgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKWAuXG4gKiBOb3RlIHRoYXQgdGhlIGNoZWNrIGlzIGRvbmUgb24gdGhlIGZpcnN0IGludm9rZSB0b28sXG4gKiBtZWFuaW5nIHRoYXQgaWYgcHJvcGFnYXRpb24gd2FzIHN0b3BwZWQgYmVmb3JlIGludm9raW5nIHRoZSBmbnMsXG4gKiBubyBoYW5kbGVycyB3aWxsIGJlIGV4ZWN1dGVkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZucyB0aGUgZXZlbnQgaGFubGRlciBmdW5jdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgZXZlbnQgaGFuZGxlciB0byBhZGQgdG8gYW4gZWxlbWVudFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlRXZlbnRIYW5kbGVycygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZucy5zb21lKGZ1bmN0aW9uIChmbikge1xuICAgICAgaWYgKCFpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCkgJiYgZm4pIHtcbiAgICAgICAgZm4uYXBwbHkodm9pZCAwLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCk7XG4gICAgfSk7XG4gIH07XG59XG4vKipcbiAqIGNhblVzZUZpbGVTeXN0ZW1BY2Nlc3NBUEkgY2hlY2tzIGlmIHRoZSBbRmlsZSBTeXN0ZW0gQWNjZXNzIEFQSV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVfU3lzdGVtX0FjY2Vzc19BUEkpXG4gKiBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FuVXNlRmlsZVN5c3RlbUFjY2Vzc0FQSSgpIHtcbiAgcmV0dXJuIFwic2hvd09wZW5GaWxlUGlja2VyXCIgaW4gd2luZG93O1xufVxuLyoqXG4gKiBDb252ZXJ0IHRoZSBge2FjY2VwdH1gIGRyb3B6b25lIHByb3AgdG8gdGhlXG4gKiBge3R5cGVzfWAgb3B0aW9uIGZvciBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93L3Nob3dPcGVuRmlsZVBpY2tlclxuICpcbiAqIEBwYXJhbSB7QWNjZXB0UHJvcH0gYWNjZXB0XG4gKiBAcmV0dXJucyB7e2FjY2VwdDogc3RyaW5nW119W119XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBpY2tlck9wdGlvbnNGcm9tQWNjZXB0KGFjY2VwdCkge1xuICBpZiAoaXNEZWZpbmVkKGFjY2VwdCkpIHtcbiAgICB2YXIgYWNjZXB0Rm9yUGlja2VyID0gT2JqZWN0LmVudHJpZXMoYWNjZXB0KS5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgX3JlZjMgPSBfc2xpY2VkVG9BcnJheShfcmVmMiwgMiksXG4gICAgICAgICAgbWltZVR5cGUgPSBfcmVmM1swXSxcbiAgICAgICAgICBleHQgPSBfcmVmM1sxXTtcblxuICAgICAgdmFyIG9rID0gdHJ1ZTtcblxuICAgICAgaWYgKCFpc01JTUVUeXBlKG1pbWVUeXBlKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTa2lwcGVkIFxcXCJcIi5jb25jYXQobWltZVR5cGUsIFwiXFxcIiBiZWNhdXNlIGl0IGlzIG5vdCBhIHZhbGlkIE1JTUUgdHlwZS4gQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9NSU1FX3R5cGVzL0NvbW1vbl90eXBlcyBmb3IgYSBsaXN0IG9mIHZhbGlkIE1JTUUgdHlwZXMuXCIpKTtcbiAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dCkgfHwgIWV4dC5ldmVyeShpc0V4dCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiU2tpcHBlZCBcXFwiXCIuY29uY2F0KG1pbWVUeXBlLCBcIlxcXCIgYmVjYXVzZSBhbiBpbnZhbGlkIGZpbGUgZXh0ZW5zaW9uIHdhcyBwcm92aWRlZC5cIikpO1xuICAgICAgICBvayA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2s7XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChhZ2csIF9yZWY0KSB7XG4gICAgICB2YXIgX3JlZjUgPSBfc2xpY2VkVG9BcnJheShfcmVmNCwgMiksXG4gICAgICAgICAgbWltZVR5cGUgPSBfcmVmNVswXSxcbiAgICAgICAgICBleHQgPSBfcmVmNVsxXTtcblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYWdnKSwge30sIF9kZWZpbmVQcm9wZXJ0eSh7fSwgbWltZVR5cGUsIGV4dCkpO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gW3tcbiAgICAgIC8vIGRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkIGR1ZSB0byBodHRwczovL2NyYnVnLmNvbS8xMjY0NzA4XG4gICAgICBkZXNjcmlwdGlvbjogXCJGaWxlc1wiLFxuICAgICAgYWNjZXB0OiBhY2NlcHRGb3JQaWNrZXJcbiAgICB9XTtcbiAgfVxuXG4gIHJldHVybiBhY2NlcHQ7XG59XG4vKipcbiAqIENvbnZlcnQgdGhlIGB7YWNjZXB0fWAgZHJvcHpvbmUgcHJvcCB0byBhbiBhcnJheSBvZiBNSU1FIHR5cGVzL2V4dGVuc2lvbnMuXG4gKiBAcGFyYW0ge0FjY2VwdFByb3B9IGFjY2VwdFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWNjZXB0UHJvcEFzQWNjZXB0QXR0cihhY2NlcHQpIHtcbiAgaWYgKGlzRGVmaW5lZChhY2NlcHQpKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGFjY2VwdCkucmVkdWNlKGZ1bmN0aW9uIChhLCBfcmVmNikge1xuICAgICAgdmFyIF9yZWY3ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjYsIDIpLFxuICAgICAgICAgIG1pbWVUeXBlID0gX3JlZjdbMF0sXG4gICAgICAgICAgZXh0ID0gX3JlZjdbMV07XG5cbiAgICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEpLCBbbWltZVR5cGVdLCBfdG9Db25zdW1hYmxlQXJyYXkoZXh0KSk7XG4gICAgfSwgW10pIC8vIFNpbGVudGx5IGRpc2NhcmQgaW52YWxpZCBlbnRyaWVzIGFzIHBpY2tlck9wdGlvbnNGcm9tQWNjZXB0IHdhcm5zIGFib3V0IHRoZXNlXG4gICAgLmZpbHRlcihmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIGlzTUlNRVR5cGUodikgfHwgaXNFeHQodik7XG4gICAgfSkuam9pbihcIixcIik7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuLyoqXG4gKiBDaGVjayBpZiB2IGlzIGFuIGV4Y2VwdGlvbiBjYXVzZWQgYnkgYWJvcnRpbmcgYSByZXF1ZXN0IChlLmcgd2luZG93LnNob3dPcGVuRmlsZVBpY2tlcigpKS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUV4Y2VwdGlvbi5cbiAqIEBwYXJhbSB7YW55fSB2XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2IGlzIGFuIGFib3J0IGV4Y2VwdGlvbi5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBYm9ydCh2KSB7XG4gIHJldHVybiB2IGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmICh2Lm5hbWUgPT09IFwiQWJvcnRFcnJvclwiIHx8IHYuY29kZSA9PT0gdi5BQk9SVF9FUlIpO1xufVxuLyoqXG4gKiBDaGVjayBpZiB2IGlzIGEgc2VjdXJpdHkgZXJyb3IuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb24uXG4gKiBAcGFyYW0ge2FueX0gdlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdiBpcyBhIHNlY3VyaXR5IGVycm9yLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NlY3VyaXR5RXJyb3Iodikge1xuICByZXR1cm4gdiBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAodi5uYW1lID09PSBcIlNlY3VyaXR5RXJyb3JcIiB8fCB2LmNvZGUgPT09IHYuU0VDVVJJVFlfRVJSKTtcbn1cbi8qKlxuICogQ2hlY2sgaWYgdiBpcyBhIE1JTUUgdHlwZSBzdHJpbmcuXG4gKlxuICogU2VlIGFjY2VwdGVkIGZvcm1hdDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0L2ZpbGUjdW5pcXVlX2ZpbGVfdHlwZV9zcGVjaWZpZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTUlNRVR5cGUodikge1xuICByZXR1cm4gdiA9PT0gXCJhdWRpby8qXCIgfHwgdiA9PT0gXCJ2aWRlby8qXCIgfHwgdiA9PT0gXCJpbWFnZS8qXCIgfHwgdiA9PT0gXCJ0ZXh0LypcIiB8fCB2ID09PSBcImFwcGxpY2F0aW9uLypcIiB8fCAvXFx3K1xcL1stKy5cXHddKy9nLnRlc3Qodik7XG59XG4vKipcbiAqIENoZWNrIGlmIHYgaXMgYSBmaWxlIGV4dGVuc2lvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSB2XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXh0KHYpIHtcbiAgcmV0dXJuIC9eLipcXC5bXFx3XSskLy50ZXN0KHYpO1xufVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZ1tdPn0gQWNjZXB0UHJvcFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gRmlsZUVycm9yXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWVzc2FnZVxuICogQHByb3BlcnR5IHtFcnJvckNvZGV8c3RyaW5nfSBjb2RlXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7XCJmaWxlLWludmFsaWQtdHlwZVwifFwiZmlsZS10b28tbGFyZ2VcInxcImZpbGUtdG9vLXNtYWxsXCJ8XCJ0b28tbWFueS1maWxlc1wifSBFcnJvckNvZGVcbiAqLyIsInZhciBfZXhjbHVkZWQgPSBbXCJjaGlsZHJlblwiXSxcbiAgICBfZXhjbHVkZWQyID0gW1wib3BlblwiXSxcbiAgICBfZXhjbHVkZWQzID0gW1wicmVmS2V5XCIsIFwicm9sZVwiLCBcIm9uS2V5RG93blwiLCBcIm9uRm9jdXNcIiwgXCJvbkJsdXJcIiwgXCJvbkNsaWNrXCIsIFwib25EcmFnRW50ZXJcIiwgXCJvbkRyYWdPdmVyXCIsIFwib25EcmFnTGVhdmVcIiwgXCJvbkRyb3BcIl0sXG4gICAgX2V4Y2x1ZGVkNCA9IFtcInJlZktleVwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbGlja1wiXTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vKiBlc2xpbnQgcHJlZmVyLXRlbXBsYXRlOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgRnJhZ21lbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZU1lbW8sIHVzZVJlZHVjZXIsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSBcImZpbGUtc2VsZWN0b3JcIjtcbmltcG9ydCB7IGFjY2VwdFByb3BBc0FjY2VwdEF0dHIsIGFsbEZpbGVzQWNjZXB0ZWQsIGNvbXBvc2VFdmVudEhhbmRsZXJzLCBmaWxlQWNjZXB0ZWQsIGZpbGVNYXRjaFNpemUsIGNhblVzZUZpbGVTeXN0ZW1BY2Nlc3NBUEksIGlzQWJvcnQsIGlzRXZ0V2l0aEZpbGVzLCBpc0llT3JFZGdlLCBpc1Byb3BhZ2F0aW9uU3RvcHBlZCwgaXNTZWN1cml0eUVycm9yLCBvbkRvY3VtZW50RHJhZ092ZXIsIHBpY2tlck9wdGlvbnNGcm9tQWNjZXB0LCBUT09fTUFOWV9GSUxFU19SRUpFQ1RJT04gfSBmcm9tIFwiLi91dGlscy9pbmRleC5qc1wiO1xuLyoqXG4gKiBDb252ZW5pZW5jZSB3cmFwcGVyIGNvbXBvbmVudCBmb3IgdGhlIGB1c2VEcm9wem9uZWAgaG9va1xuICpcbiAqIGBgYGpzeFxuICogPERyb3B6b25lPlxuICogICB7KHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHN9KSA9PiAoXG4gKiAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICogICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gKiAgICAgICA8cD5EcmFnICduJyBkcm9wIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzPC9wPlxuICogICAgIDwvZGl2PlxuICogICApfVxuICogPC9Ecm9wem9uZT5cbiAqIGBgYFxuICovXG5cbnZhciBEcm9wem9uZSA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHBhcmFtcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuXG4gIHZhciBfdXNlRHJvcHpvbmUgPSB1c2VEcm9wem9uZShwYXJhbXMpLFxuICAgICAgb3BlbiA9IF91c2VEcm9wem9uZS5vcGVuLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3VzZURyb3B6b25lLCBfZXhjbHVkZWQyKTtcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuOiBvcGVuXG4gICAgfTtcbiAgfSwgW29wZW5dKTsgLy8gVE9ETzogRmlndXJlIG91dCB3aHkgcmVhY3Qtc3R5bGVndWlkaXN0IGNhbm5vdCBjcmVhdGUgZG9jcyBpZiB3ZSBkb24ndCByZXR1cm4gYSBqc3ggZWxlbWVudFxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4oX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgb3Blbjogb3BlblxuICB9KSkpO1xufSk7XG5Ecm9wem9uZS5kaXNwbGF5TmFtZSA9IFwiRHJvcHpvbmVcIjsgLy8gQWRkIGRlZmF1bHQgcHJvcHMgZm9yIHJlYWN0LWRvY2dlblxuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGdldEZpbGVzRnJvbUV2ZW50OiBmcm9tRXZlbnQsXG4gIG1heFNpemU6IEluZmluaXR5LFxuICBtaW5TaXplOiAwLFxuICBtdWx0aXBsZTogdHJ1ZSxcbiAgbWF4RmlsZXM6IDAsXG4gIHByZXZlbnREcm9wT25Eb2N1bWVudDogdHJ1ZSxcbiAgbm9DbGljazogZmFsc2UsXG4gIG5vS2V5Ym9hcmQ6IGZhbHNlLFxuICBub0RyYWc6IGZhbHNlLFxuICBub0RyYWdFdmVudHNCdWJibGluZzogZmFsc2UsXG4gIHZhbGlkYXRvcjogbnVsbCxcbiAgdXNlRnNBY2Nlc3NBcGk6IGZhbHNlLFxuICBhdXRvRm9jdXM6IGZhbHNlXG59O1xuRHJvcHpvbmUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuRHJvcHpvbmUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogUmVuZGVyIGZ1bmN0aW9uIHRoYXQgZXhwb3NlcyB0aGUgZHJvcHpvbmUgc3RhdGUgYW5kIHByb3AgZ2V0dGVyIGZuc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcmFtcy5nZXRSb290UHJvcHMgUmV0dXJucyB0aGUgcHJvcHMgeW91IHNob3VsZCBhcHBseSB0byB0aGUgcm9vdCBkcm9wIGNvbnRhaW5lciB5b3UgcmVuZGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHBhcmFtcy5nZXRJbnB1dFByb3BzIFJldHVybnMgdGhlIHByb3BzIHlvdSBzaG91bGQgYXBwbHkgdG8gaGlkZGVuIGZpbGUgaW5wdXQgeW91IHJlbmRlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJhbXMub3BlbiBPcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlzRm9jdXNlZCBEcm9wem9uZSBhcmVhIGlzIGluIGZvY3VzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlzRmlsZURpYWxvZ0FjdGl2ZSBGaWxlIGRpYWxvZyBpcyBvcGVuZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXJhbXMuaXNEcmFnQWN0aXZlIEFjdGl2ZSBkcmFnIGlzIGluIHByb2dyZXNzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGFyYW1zLmlzRHJhZ0FjY2VwdCBEcmFnZ2VkIGZpbGVzIGFyZSBhY2NlcHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhcmFtcy5pc0RyYWdSZWplY3QgU29tZSBkcmFnZ2VkIGZpbGVzIGFyZSByZWplY3RlZFxuICAgKiBAcGFyYW0ge0ZpbGVbXX0gcGFyYW1zLmFjY2VwdGVkRmlsZXMgQWNjZXB0ZWQgZmlsZXNcbiAgICogQHBhcmFtIHtGaWxlUmVqZWN0aW9uW119IHBhcmFtcy5maWxlUmVqZWN0aW9ucyBSZWplY3RlZCBmaWxlcyBhbmQgd2h5IHRoZXkgd2VyZSByZWplY3RlZFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBTZXQgYWNjZXB0ZWQgZmlsZSB0eXBlcy5cbiAgICogQ2hlY2tvdXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL3dpbmRvdy9zaG93T3BlbkZpbGVQaWNrZXIgdHlwZXMgb3B0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKiBLZWVwIGluIG1pbmQgdGhhdCBtaW1lIHR5cGUgZGV0ZXJtaW5hdGlvbiBpcyBub3QgcmVsaWFibGUgYWNyb3NzIHBsYXRmb3Jtcy4gQ1NWIGZpbGVzLFxuICAgKiBmb3IgZXhhbXBsZSwgYXJlIHJlcG9ydGVkIGFzIHRleHQvcGxhaW4gdW5kZXIgbWFjT1MgYnV0IGFzIGFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCB1bmRlclxuICAgKiBXaW5kb3dzLiBJbiBzb21lIGNhc2VzIHRoZXJlIG1pZ2h0IG5vdCBiZSBhIG1pbWUgdHlwZSBzZXQgYXQgYWxsIChodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtZHJvcHpvbmUvcmVhY3QtZHJvcHpvbmUvaXNzdWVzLzI3NikuXG4gICAqL1xuICBhY2NlcHQ6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSksXG5cbiAgLyoqXG4gICAqIEFsbG93IGRyYWcgJ24nIGRyb3AgKG9yIHNlbGVjdGlvbiBmcm9tIHRoZSBmaWxlIGRpYWxvZykgb2YgbXVsdGlwbGUgZmlsZXNcbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgZmFsc2UsIGFsbG93IGRyb3BwZWQgaXRlbXMgdG8gdGFrZSBvdmVyIHRoZSBjdXJyZW50IGJyb3dzZXIgd2luZG93XG4gICAqL1xuICBwcmV2ZW50RHJvcE9uRG9jdW1lbnQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBkaXNhYmxlcyBjbGljayB0byBvcGVuIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nXG4gICAqL1xuICBub0NsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgZGlzYWJsZXMgU1BBQ0UvRU5URVIgdG8gb3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZy5cbiAgICogTm90ZSB0aGF0IGl0IGFsc28gc3RvcHMgdHJhY2tpbmcgdGhlIGZvY3VzIHN0YXRlLlxuICAgKi9cbiAgbm9LZXlib2FyZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGRpc2FibGVzIGRyYWcgJ24nIGRyb3BcbiAgICovXG4gIG5vRHJhZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHN0b3BzIGRyYWcgZXZlbnQgcHJvcGFnYXRpb24gdG8gcGFyZW50c1xuICAgKi9cbiAgbm9EcmFnRXZlbnRzQnViYmxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBNaW5pbXVtIGZpbGUgc2l6ZSAoaW4gYnl0ZXMpXG4gICAqL1xuICBtaW5TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIGZpbGUgc2l6ZSAoaW4gYnl0ZXMpXG4gICAqL1xuICBtYXhTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIGFjY2VwdGVkIG51bWJlciBvZiBmaWxlc1xuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwIHdoaWNoIG1lYW5zIHRoZXJlIGlzIG5vIGxpbWl0YXRpb24gdG8gaG93IG1hbnkgZmlsZXMgYXJlIGFjY2VwdGVkLlxuICAgKi9cbiAgbWF4RmlsZXM6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEVuYWJsZS9kaXNhYmxlIHRoZSBkcm9wem9uZVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyB0byBwcm92aWRlIGEgY3VzdG9tIGZpbGUgYWdncmVnYXRvclxuICAgKlxuICAgKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnR8QXJyYXk8RmlsZVN5c3RlbUZpbGVIYW5kbGU+KX0gZXZlbnQgQSBkcmFnIGV2ZW50IG9yIGlucHV0IGNoYW5nZSBldmVudCAoaWYgZmlsZXMgd2VyZSBzZWxlY3RlZCB2aWEgdGhlIGZpbGUgZGlhbG9nKVxuICAgKi9cbiAgZ2V0RmlsZXNGcm9tRXZlbnQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiBjbG9zaW5nIHRoZSBmaWxlIGRpYWxvZyB3aXRoIG5vIHNlbGVjdGlvblxuICAgKi9cbiAgb25GaWxlRGlhbG9nQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gb3BlbmluZyB0aGUgZmlsZSBkaWFsb2dcbiAgICovXG4gIG9uRmlsZURpYWxvZ09wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byB1c2UgdGhlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlX1N5c3RlbV9BY2Nlc3NfQVBJXG4gICAqIHRvIG9wZW4gdGhlIGZpbGUgcGlja2VyIGluc3RlYWQgb2YgdXNpbmcgYW4gYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmAgY2xpY2sgZXZlbnQuXG4gICAqL1xuICB1c2VGc0FjY2Vzc0FwaTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGZvY3VzIHRoZSByb290IGVsZW1lbnQgb24gcmVuZGVyXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyYWdlbnRlcmAgZXZlbnQgb2NjdXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ0VudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcmFnbGVhdmVgIGV2ZW50IG9jY3Vyc1xuICAgKlxuICAgKiBAcGFyYW0ge0RyYWdFdmVudH0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ0xlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlIGBkcmFnb3ZlcmAgZXZlbnQgb2NjdXJzXG4gICAqXG4gICAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBldmVudFxuICAgKi9cbiAgb25EcmFnT3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJvcGAgZXZlbnQgb2NjdXJzLlxuICAgKiBOb3RlIHRoYXQgdGhpcyBjYWxsYmFjayBpcyBpbnZva2VkIGFmdGVyIHRoZSBgZ2V0RmlsZXNGcm9tRXZlbnRgIGNhbGxiYWNrIGlzIGRvbmUuXG4gICAqXG4gICAqIEZpbGVzIGFyZSBhY2NlcHRlZCBvciByZWplY3RlZCBiYXNlZCBvbiB0aGUgYGFjY2VwdGAsIGBtdWx0aXBsZWAsIGBtaW5TaXplYCBhbmQgYG1heFNpemVgIHByb3BzLlxuICAgKiBgYWNjZXB0YCBtdXN0IGJlIGEgdmFsaWQgW01JTUUgdHlwZV0oaHR0cDovL3d3dy5pYW5hLm9yZy9hc3NpZ25tZW50cy9tZWRpYS10eXBlcy9tZWRpYS10eXBlcy54aHRtbCkgYWNjb3JkaW5nIHRvIFtpbnB1dCBlbGVtZW50IHNwZWNpZmljYXRpb25dKGh0dHBzOi8vd3d3LnczLm9yZy93aWtpL0hUTUwvRWxlbWVudHMvaW5wdXQvZmlsZSkgb3IgYSB2YWxpZCBmaWxlIGV4dGVuc2lvbi5cbiAgICogSWYgYG11bHRpcGxlYCBpcyBzZXQgdG8gZmFsc2UgYW5kIGFkZGl0aW9uYWwgZmlsZXMgYXJlIGRyb3BwZWQsXG4gICAqIGFsbCBmaWxlcyBiZXNpZGVzIHRoZSBmaXJzdCB3aWxsIGJlIHJlamVjdGVkLlxuICAgKiBBbnkgZmlsZSB3aGljaCBkb2VzIG5vdCBoYXZlIGEgc2l6ZSBpbiB0aGUgW2BtaW5TaXplYCwgYG1heFNpemVgXSByYW5nZSwgd2lsbCBiZSByZWplY3RlZCBhcyB3ZWxsLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIGBvbkRyb3BgIGNhbGxiYWNrIHdpbGwgYWx3YXlzIGJlIGludm9rZWQgcmVnYXJkbGVzcyBpZiB0aGUgZHJvcHBlZCBmaWxlcyB3ZXJlIGFjY2VwdGVkIG9yIHJlamVjdGVkLlxuICAgKiBJZiB5b3UnZCBsaWtlIHRvIHJlYWN0IHRvIGEgc3BlY2lmaWMgc2NlbmFyaW8sIHVzZSB0aGUgYG9uRHJvcEFjY2VwdGVkYC9gb25Ecm9wUmVqZWN0ZWRgIHByb3BzLlxuICAgKlxuICAgKiBgb25Ecm9wYCB3aWxsIHByb3ZpZGUgeW91IHdpdGggYW4gYXJyYXkgb2YgW0ZpbGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlKSBvYmplY3RzIHdoaWNoIHlvdSBjYW4gdGhlbiBwcm9jZXNzIGFuZCBzZW5kIHRvIGEgc2VydmVyLlxuICAgKiBGb3IgZXhhbXBsZSwgd2l0aCBbU3VwZXJBZ2VudF0oaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL3N1cGVyYWdlbnQpIGFzIGEgaHR0cC9hamF4IGxpYnJhcnk6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGZ1bmN0aW9uIG9uRHJvcChhY2NlcHRlZEZpbGVzKSB7XG4gICAqICAgY29uc3QgcmVxID0gcmVxdWVzdC5wb3N0KCcvdXBsb2FkJylcbiAgICogICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAqICAgICByZXEuYXR0YWNoKGZpbGUubmFtZSwgZmlsZSlcbiAgICogICB9KVxuICAgKiAgIHJlcS5lbmQoY2FsbGJhY2spXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7RmlsZVtdfSBhY2NlcHRlZEZpbGVzXG4gICAqIEBwYXJhbSB7RmlsZVJlamVjdGlvbltdfSBmaWxlUmVqZWN0aW9uc1xuICAgKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gICAqL1xuICBvbkRyb3A6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYiBmb3Igd2hlbiB0aGUgYGRyb3BgIGV2ZW50IG9jY3Vycy5cbiAgICogTm90ZSB0aGF0IGlmIG5vIGZpbGVzIGFyZSBhY2NlcHRlZCwgdGhpcyBjYWxsYmFjayBpcyBub3QgaW52b2tlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGaWxlW119IGZpbGVzXG4gICAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50XG4gICAqL1xuICBvbkRyb3BBY2NlcHRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENiIGZvciB3aGVuIHRoZSBgZHJvcGAgZXZlbnQgb2NjdXJzLlxuICAgKiBOb3RlIHRoYXQgaWYgbm8gZmlsZXMgYXJlIHJlamVjdGVkLCB0aGlzIGNhbGxiYWNrIGlzIG5vdCBpbnZva2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZpbGVSZWplY3Rpb25bXX0gZmlsZVJlamVjdGlvbnNcbiAgICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnRcbiAgICovXG4gIG9uRHJvcFJlamVjdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2IgZm9yIHdoZW4gdGhlcmUncyBzb21lIGVycm9yIGZyb20gYW55IG9mIHRoZSBwcm9taXNlcy5cbiAgICpcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAgICovXG4gIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbi4gSXQgbXVzdCByZXR1cm4gbnVsbCBpZiB0aGVyZSdzIG5vIGVycm9ycy5cbiAgICogQHBhcmFtIHtGaWxlfSBmaWxlXG4gICAqIEByZXR1cm5zIHtGaWxlRXJyb3J8RmlsZUVycm9yW118bnVsbH1cbiAgICovXG4gIHZhbGlkYXRvcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wem9uZTtcbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJhZ2VudGVyYCxcbiAqIGBkcmFnb3ZlcmAgYW5kIGBkcmFnbGVhdmVgIGV2ZW50cy5cbiAqIEl0IGlzIG5vdCBpbnZva2VkIGlmIHRoZSBpdGVtcyBhcmUgbm90IGZpbGVzIChzdWNoIGFzIGxpbmssIHRleHQsIGV0Yy4pLlxuICpcbiAqIEBjYWxsYmFjayBkcmFnQ2JcbiAqIEBwYXJhbSB7RHJhZ0V2ZW50fSBldmVudFxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJvcGAgb3IgaW5wdXQgY2hhbmdlIGV2ZW50LlxuICogSXQgaXMgbm90IGludm9rZWQgaWYgdGhlIGl0ZW1zIGFyZSBub3QgZmlsZXMgKHN1Y2ggYXMgbGluaywgdGV4dCwgZXRjLikuXG4gKlxuICogQGNhbGxiYWNrIGRyb3BDYlxuICogQHBhcmFtIHtGaWxlW119IGFjY2VwdGVkRmlsZXMgTGlzdCBvZiBhY2NlcHRlZCBmaWxlc1xuICogQHBhcmFtIHtGaWxlUmVqZWN0aW9uW119IGZpbGVSZWplY3Rpb25zIExpc3Qgb2YgcmVqZWN0ZWQgZmlsZXMgYW5kIHdoeSB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudCl9IGV2ZW50IEEgZHJhZyBldmVudCBvciBpbnB1dCBjaGFuZ2UgZXZlbnQgKGlmIGZpbGVzIHdlcmUgc2VsZWN0ZWQgdmlhIHRoZSBmaWxlIGRpYWxvZylcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIGZvciB0aGUgYGRyb3BgIG9yIGlucHV0IGNoYW5nZSBldmVudC5cbiAqIEl0IGlzIG5vdCBpbnZva2VkIGlmIHRoZSBpdGVtcyBhcmUgZmlsZXMgKHN1Y2ggYXMgbGluaywgdGV4dCwgZXRjLikuXG4gKlxuICogQGNhbGxiYWNrIGRyb3BBY2NlcHRlZENiXG4gKiBAcGFyYW0ge0ZpbGVbXX0gZmlsZXMgTGlzdCBvZiBhY2NlcHRlZCBmaWxlcyB0aGF0IG1lZXQgdGhlIGdpdmVuIGNyaXRlcmlhXG4gKiAoYGFjY2VwdGAsIGBtdWx0aXBsZWAsIGBtaW5TaXplYCwgYG1heFNpemVgKVxuICogQHBhcmFtIHsoRHJhZ0V2ZW50fEV2ZW50KX0gZXZlbnQgQSBkcmFnIGV2ZW50IG9yIGlucHV0IGNoYW5nZSBldmVudCAoaWYgZmlsZXMgd2VyZSBzZWxlY3RlZCB2aWEgdGhlIGZpbGUgZGlhbG9nKVxuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgZm9yIHRoZSBgZHJvcGAgb3IgaW5wdXQgY2hhbmdlIGV2ZW50LlxuICpcbiAqIEBjYWxsYmFjayBkcm9wUmVqZWN0ZWRDYlxuICogQHBhcmFtIHtGaWxlW119IGZpbGVzIExpc3Qgb2YgcmVqZWN0ZWQgZmlsZXMgdGhhdCBkbyBub3QgbWVldCB0aGUgZ2l2ZW4gY3JpdGVyaWFcbiAqIChgYWNjZXB0YCwgYG11bHRpcGxlYCwgYG1pblNpemVgLCBgbWF4U2l6ZWApXG4gKiBAcGFyYW0geyhEcmFnRXZlbnR8RXZlbnQpfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCBhZ2dyZWdhdGUgZmlsZXMsXG4gKiBpbiBhIGFzeW5jaHJvbm91cyBmYXNoaW9uLCBmcm9tIGRyYWcgb3IgaW5wdXQgY2hhbmdlIGV2ZW50cy5cbiAqXG4gKiBAY2FsbGJhY2sgZ2V0RmlsZXNGcm9tRXZlbnRcbiAqIEBwYXJhbSB7KERyYWdFdmVudHxFdmVudHxBcnJheTxGaWxlU3lzdGVtRmlsZUhhbmRsZT4pfSBldmVudCBBIGRyYWcgZXZlbnQgb3IgaW5wdXQgY2hhbmdlIGV2ZW50IChpZiBmaWxlcyB3ZXJlIHNlbGVjdGVkIHZpYSB0aGUgZmlsZSBkaWFsb2cpXG4gKiBAcmV0dXJucyB7KEZpbGVbXXxQcm9taXNlPEZpbGVbXT4pfVxuICovXG5cbi8qKlxuICogQW4gb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgZHJvcHpvbmUgc3RhdGUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gRHJvcHpvbmVTdGF0ZVxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0ZvY3VzZWQgRHJvcHpvbmUgYXJlYSBpcyBpbiBmb2N1c1xuICogQHByb3BlcnR5IHtib29sZWFufSBpc0ZpbGVEaWFsb2dBY3RpdmUgRmlsZSBkaWFsb2cgaXMgb3BlbmVkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzRHJhZ0FjdGl2ZSBBY3RpdmUgZHJhZyBpcyBpbiBwcm9ncmVzc1xuICogQHByb3BlcnR5IHtib29sZWFufSBpc0RyYWdBY2NlcHQgRHJhZ2dlZCBmaWxlcyBhcmUgYWNjZXB0ZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNEcmFnUmVqZWN0IFNvbWUgZHJhZ2dlZCBmaWxlcyBhcmUgcmVqZWN0ZWRcbiAqIEBwcm9wZXJ0eSB7RmlsZVtdfSBhY2NlcHRlZEZpbGVzIEFjY2VwdGVkIGZpbGVzXG4gKiBAcHJvcGVydHkge0ZpbGVSZWplY3Rpb25bXX0gZmlsZVJlamVjdGlvbnMgUmVqZWN0ZWQgZmlsZXMgYW5kIHdoeSB0aGV5IHdlcmUgcmVqZWN0ZWRcbiAqL1xuXG4vKipcbiAqIEFuIG9iamVjdCB3aXRoIHRoZSBkcm9wem9uZSBtZXRob2RzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IERyb3B6b25lTWV0aG9kc1xuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZ2V0Um9vdFByb3BzIFJldHVybnMgdGhlIHByb3BzIHlvdSBzaG91bGQgYXBwbHkgdG8gdGhlIHJvb3QgZHJvcCBjb250YWluZXIgeW91IHJlbmRlclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZ2V0SW5wdXRQcm9wcyBSZXR1cm5zIHRoZSBwcm9wcyB5b3Ugc2hvdWxkIGFwcGx5IHRvIGhpZGRlbiBmaWxlIGlucHV0IHlvdSByZW5kZXJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG9wZW4gT3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZ1xuICovXG5cbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gIGlzRm9jdXNlZDogZmFsc2UsXG4gIGlzRmlsZURpYWxvZ0FjdGl2ZTogZmFsc2UsXG4gIGlzRHJhZ0FjdGl2ZTogZmFsc2UsXG4gIGlzRHJhZ0FjY2VwdDogZmFsc2UsXG4gIGlzRHJhZ1JlamVjdDogZmFsc2UsXG4gIGFjY2VwdGVkRmlsZXM6IFtdLFxuICBmaWxlUmVqZWN0aW9uczogW11cbn07XG4vKipcbiAqIEEgUmVhY3QgaG9vayB0aGF0IGNyZWF0ZXMgYSBkcmFnICduJyBkcm9wIGFyZWEuXG4gKlxuICogYGBganN4XG4gKiBmdW5jdGlvbiBNeURyb3B6b25lKHByb3BzKSB7XG4gKiAgIGNvbnN0IHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHN9ID0gdXNlRHJvcHpvbmUoe1xuICogICAgIG9uRHJvcDogYWNjZXB0ZWRGaWxlcyA9PiB7XG4gKiAgICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgRmlsZSBvYmplY3RzLCBlLmcuIHVwbG9hZCB0byBzb21lIHNlcnZlclxuICogICAgIH1cbiAqICAgfSk7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICogICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gKiAgICAgICA8cD5EcmFnIGFuZCBkcm9wIHNvbWUgZmlsZXMgaGVyZSwgb3IgY2xpY2sgdG8gc2VsZWN0IGZpbGVzPC9wPlxuICogICAgIDwvZGl2PlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAZnVuY3Rpb24gdXNlRHJvcHpvbmVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi91dGlsc1wiKS5BY2NlcHRQcm9wfSBbcHJvcHMuYWNjZXB0XSBTZXQgYWNjZXB0ZWQgZmlsZSB0eXBlcy5cbiAqIENoZWNrb3V0IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cvc2hvd09wZW5GaWxlUGlja2VyIHR5cGVzIG9wdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqIEtlZXAgaW4gbWluZCB0aGF0IG1pbWUgdHlwZSBkZXRlcm1pbmF0aW9uIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgcGxhdGZvcm1zLiBDU1YgZmlsZXMsXG4gKiBmb3IgZXhhbXBsZSwgYXJlIHJlcG9ydGVkIGFzIHRleHQvcGxhaW4gdW5kZXIgbWFjT1MgYnV0IGFzIGFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCB1bmRlclxuICogV2luZG93cy4gSW4gc29tZSBjYXNlcyB0aGVyZSBtaWdodCBub3QgYmUgYSBtaW1lIHR5cGUgc2V0IGF0IGFsbCAoaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWRyb3B6b25lL3JlYWN0LWRyb3B6b25lL2lzc3Vlcy8yNzYpLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMubXVsdGlwbGU9dHJ1ZV0gQWxsb3cgZHJhZyAnbicgZHJvcCAob3Igc2VsZWN0aW9uIGZyb20gdGhlIGZpbGUgZGlhbG9nKSBvZiBtdWx0aXBsZSBmaWxlc1xuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMucHJldmVudERyb3BPbkRvY3VtZW50PXRydWVdIElmIGZhbHNlLCBhbGxvdyBkcm9wcGVkIGl0ZW1zIHRvIHRha2Ugb3ZlciB0aGUgY3VycmVudCBicm93c2VyIHdpbmRvd1xuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMubm9DbGljaz1mYWxzZV0gSWYgdHJ1ZSwgZGlzYWJsZXMgY2xpY2sgdG8gb3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZ1xuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMubm9LZXlib2FyZD1mYWxzZV0gSWYgdHJ1ZSwgZGlzYWJsZXMgU1BBQ0UvRU5URVIgdG8gb3BlbiB0aGUgbmF0aXZlIGZpbGUgc2VsZWN0aW9uIGRpYWxvZy5cbiAqIE5vdGUgdGhhdCBpdCBhbHNvIHN0b3BzIHRyYWNraW5nIHRoZSBmb2N1cyBzdGF0ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLm5vRHJhZz1mYWxzZV0gSWYgdHJ1ZSwgZGlzYWJsZXMgZHJhZyAnbicgZHJvcFxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMubm9EcmFnRXZlbnRzQnViYmxpbmc9ZmFsc2VdIElmIHRydWUsIHN0b3BzIGRyYWcgZXZlbnQgcHJvcGFnYXRpb24gdG8gcGFyZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtwcm9wcy5taW5TaXplPTBdIE1pbmltdW0gZmlsZSBzaXplIChpbiBieXRlcylcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcHJvcHMubWF4U2l6ZT1JbmZpbml0eV0gTWF4aW11bSBmaWxlIHNpemUgKGluIGJ5dGVzKVxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuZGlzYWJsZWQ9ZmFsc2VdIEVuYWJsZS9kaXNhYmxlIHRoZSBkcm9wem9uZVxuICogQHBhcmFtIHtnZXRGaWxlc0Zyb21FdmVudH0gW3Byb3BzLmdldEZpbGVzRnJvbUV2ZW50XSBVc2UgdGhpcyB0byBwcm92aWRlIGEgY3VzdG9tIGZpbGUgYWdncmVnYXRvclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BzLm9uRmlsZURpYWxvZ0NhbmNlbF0gQ2IgZm9yIHdoZW4gY2xvc2luZyB0aGUgZmlsZSBkaWFsb2cgd2l0aCBubyBzZWxlY3Rpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLnVzZUZzQWNjZXNzQXBpXSBTZXQgdG8gdHJ1ZSB0byB1c2UgdGhlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlX1N5c3RlbV9BY2Nlc3NfQVBJXG4gKiB0byBvcGVuIHRoZSBmaWxlIHBpY2tlciBpbnN0ZWFkIG9mIHVzaW5nIGFuIGA8aW5wdXQgdHlwZT1cImZpbGVcIj5gIGNsaWNrIGV2ZW50LlxuICogQHBhcmFtIHtib29sZWFufSBhdXRvRm9jdXMgU2V0IHRvIHRydWUgdG8gYXV0byBmb2N1cyB0aGUgcm9vdCBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BzLm9uRmlsZURpYWxvZ09wZW5dIENiIGZvciB3aGVuIG9wZW5pbmcgdGhlIGZpbGUgZGlhbG9nXG4gKiBAcGFyYW0ge2RyYWdDYn0gW3Byb3BzLm9uRHJhZ0VudGVyXSBDYiBmb3Igd2hlbiB0aGUgYGRyYWdlbnRlcmAgZXZlbnQgb2NjdXJzLlxuICogQHBhcmFtIHtkcmFnQ2J9IFtwcm9wcy5vbkRyYWdMZWF2ZV0gQ2IgZm9yIHdoZW4gdGhlIGBkcmFnbGVhdmVgIGV2ZW50IG9jY3Vyc1xuICogQHBhcmFtIHtkcmFnQ2J9IFtwcm9wcy5vbkRyYWdPdmVyXSBDYiBmb3Igd2hlbiB0aGUgYGRyYWdvdmVyYCBldmVudCBvY2N1cnNcbiAqIEBwYXJhbSB7ZHJvcENifSBbcHJvcHMub25Ecm9wXSBDYiBmb3Igd2hlbiB0aGUgYGRyb3BgIGV2ZW50IG9jY3Vycy5cbiAqIE5vdGUgdGhhdCB0aGlzIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIGBnZXRGaWxlc0Zyb21FdmVudGAgY2FsbGJhY2sgaXMgZG9uZS5cbiAqXG4gKiBGaWxlcyBhcmUgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQgYmFzZWQgb24gdGhlIGBhY2NlcHRgLCBgbXVsdGlwbGVgLCBgbWluU2l6ZWAgYW5kIGBtYXhTaXplYCBwcm9wcy5cbiAqIGBhY2NlcHRgIG11c3QgYmUgYW4gb2JqZWN0IHdpdGgga2V5cyBhcyBhIHZhbGlkIFtNSU1FIHR5cGVdKGh0dHA6Ly93d3cuaWFuYS5vcmcvYXNzaWdubWVudHMvbWVkaWEtdHlwZXMvbWVkaWEtdHlwZXMueGh0bWwpIGFjY29yZGluZyB0byBbaW5wdXQgZWxlbWVudCBzcGVjaWZpY2F0aW9uXShodHRwczovL3d3dy53My5vcmcvd2lraS9IVE1ML0VsZW1lbnRzL2lucHV0L2ZpbGUpIGFuZCB0aGUgdmFsdWUgYW4gYXJyYXkgb2YgZmlsZSBleHRlbnNpb25zIChvcHRpb25hbCkuXG4gKiBJZiBgbXVsdGlwbGVgIGlzIHNldCB0byBmYWxzZSBhbmQgYWRkaXRpb25hbCBmaWxlcyBhcmUgZHJvcHBlZCxcbiAqIGFsbCBmaWxlcyBiZXNpZGVzIHRoZSBmaXJzdCB3aWxsIGJlIHJlamVjdGVkLlxuICogQW55IGZpbGUgd2hpY2ggZG9lcyBub3QgaGF2ZSBhIHNpemUgaW4gdGhlIFtgbWluU2l6ZWAsIGBtYXhTaXplYF0gcmFuZ2UsIHdpbGwgYmUgcmVqZWN0ZWQgYXMgd2VsbC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGBvbkRyb3BgIGNhbGxiYWNrIHdpbGwgYWx3YXlzIGJlIGludm9rZWQgcmVnYXJkbGVzcyBpZiB0aGUgZHJvcHBlZCBmaWxlcyB3ZXJlIGFjY2VwdGVkIG9yIHJlamVjdGVkLlxuICogSWYgeW91J2QgbGlrZSB0byByZWFjdCB0byBhIHNwZWNpZmljIHNjZW5hcmlvLCB1c2UgdGhlIGBvbkRyb3BBY2NlcHRlZGAvYG9uRHJvcFJlamVjdGVkYCBwcm9wcy5cbiAqXG4gKiBgb25Ecm9wYCB3aWxsIHByb3ZpZGUgeW91IHdpdGggYW4gYXJyYXkgb2YgW0ZpbGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlKSBvYmplY3RzIHdoaWNoIHlvdSBjYW4gdGhlbiBwcm9jZXNzIGFuZCBzZW5kIHRvIGEgc2VydmVyLlxuICogRm9yIGV4YW1wbGUsIHdpdGggW1N1cGVyQWdlbnRdKGh0dHBzOi8vZ2l0aHViLmNvbS92aXNpb25tZWRpYS9zdXBlcmFnZW50KSBhcyBhIGh0dHAvYWpheCBsaWJyYXJ5OlxuICpcbiAqIGBgYGpzXG4gKiBmdW5jdGlvbiBvbkRyb3AoYWNjZXB0ZWRGaWxlcykge1xuICogICBjb25zdCByZXEgPSByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gKiAgICAgcmVxLmF0dGFjaChmaWxlLm5hbWUsIGZpbGUpXG4gKiAgIH0pXG4gKiAgIHJlcS5lbmQoY2FsbGJhY2spXG4gKiB9XG4gKiBgYGBcbiAqIEBwYXJhbSB7ZHJvcEFjY2VwdGVkQ2J9IFtwcm9wcy5vbkRyb3BBY2NlcHRlZF1cbiAqIEBwYXJhbSB7ZHJvcFJlamVjdGVkQ2J9IFtwcm9wcy5vbkRyb3BSZWplY3RlZF1cbiAqIEBwYXJhbSB7KGVycm9yOiBFcnJvcikgPT4gdm9pZH0gW3Byb3BzLm9uRXJyb3JdXG4gKlxuICogQHJldHVybnMge0Ryb3B6b25lU3RhdGUgJiBEcm9wem9uZU1ldGhvZHN9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURyb3B6b25lKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBfZGVmYXVsdFByb3BzJHByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWZhdWx0UHJvcHMpLCBwcm9wcyksXG4gICAgICBhY2NlcHQgPSBfZGVmYXVsdFByb3BzJHByb3BzLmFjY2VwdCxcbiAgICAgIGRpc2FibGVkID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGdldEZpbGVzRnJvbUV2ZW50ID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5nZXRGaWxlc0Zyb21FdmVudCxcbiAgICAgIG1heFNpemUgPSBfZGVmYXVsdFByb3BzJHByb3BzLm1heFNpemUsXG4gICAgICBtaW5TaXplID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5taW5TaXplLFxuICAgICAgbXVsdGlwbGUgPSBfZGVmYXVsdFByb3BzJHByb3BzLm11bHRpcGxlLFxuICAgICAgbWF4RmlsZXMgPSBfZGVmYXVsdFByb3BzJHByb3BzLm1heEZpbGVzLFxuICAgICAgb25EcmFnRW50ZXIgPSBfZGVmYXVsdFByb3BzJHByb3BzLm9uRHJhZ0VudGVyLFxuICAgICAgb25EcmFnTGVhdmUgPSBfZGVmYXVsdFByb3BzJHByb3BzLm9uRHJhZ0xlYXZlLFxuICAgICAgb25EcmFnT3ZlciA9IF9kZWZhdWx0UHJvcHMkcHJvcHMub25EcmFnT3ZlcixcbiAgICAgIG9uRHJvcCA9IF9kZWZhdWx0UHJvcHMkcHJvcHMub25Ecm9wLFxuICAgICAgb25Ecm9wQWNjZXB0ZWQgPSBfZGVmYXVsdFByb3BzJHByb3BzLm9uRHJvcEFjY2VwdGVkLFxuICAgICAgb25Ecm9wUmVqZWN0ZWQgPSBfZGVmYXVsdFByb3BzJHByb3BzLm9uRHJvcFJlamVjdGVkLFxuICAgICAgb25GaWxlRGlhbG9nQ2FuY2VsID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5vbkZpbGVEaWFsb2dDYW5jZWwsXG4gICAgICBvbkZpbGVEaWFsb2dPcGVuID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5vbkZpbGVEaWFsb2dPcGVuLFxuICAgICAgdXNlRnNBY2Nlc3NBcGkgPSBfZGVmYXVsdFByb3BzJHByb3BzLnVzZUZzQWNjZXNzQXBpLFxuICAgICAgYXV0b0ZvY3VzID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBwcmV2ZW50RHJvcE9uRG9jdW1lbnQgPSBfZGVmYXVsdFByb3BzJHByb3BzLnByZXZlbnREcm9wT25Eb2N1bWVudCxcbiAgICAgIG5vQ2xpY2sgPSBfZGVmYXVsdFByb3BzJHByb3BzLm5vQ2xpY2ssXG4gICAgICBub0tleWJvYXJkID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5ub0tleWJvYXJkLFxuICAgICAgbm9EcmFnID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5ub0RyYWcsXG4gICAgICBub0RyYWdFdmVudHNCdWJibGluZyA9IF9kZWZhdWx0UHJvcHMkcHJvcHMubm9EcmFnRXZlbnRzQnViYmxpbmcsXG4gICAgICBvbkVycm9yID0gX2RlZmF1bHRQcm9wcyRwcm9wcy5vbkVycm9yLFxuICAgICAgdmFsaWRhdG9yID0gX2RlZmF1bHRQcm9wcyRwcm9wcy52YWxpZGF0b3I7XG5cbiAgdmFyIGFjY2VwdEF0dHIgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYWNjZXB0UHJvcEFzQWNjZXB0QXR0cihhY2NlcHQpO1xuICB9LCBbYWNjZXB0XSk7XG4gIHZhciBwaWNrZXJUeXBlcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwaWNrZXJPcHRpb25zRnJvbUFjY2VwdChhY2NlcHQpO1xuICB9LCBbYWNjZXB0XSk7XG4gIHZhciBvbkZpbGVEaWFsb2dPcGVuQ2IgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9uRmlsZURpYWxvZ09wZW4gPT09IFwiZnVuY3Rpb25cIiA/IG9uRmlsZURpYWxvZ09wZW4gOiBub29wO1xuICB9LCBbb25GaWxlRGlhbG9nT3Blbl0pO1xuICB2YXIgb25GaWxlRGlhbG9nQ2FuY2VsQ2IgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9uRmlsZURpYWxvZ0NhbmNlbCA9PT0gXCJmdW5jdGlvblwiID8gb25GaWxlRGlhbG9nQ2FuY2VsIDogbm9vcDtcbiAgfSwgW29uRmlsZURpYWxvZ0NhbmNlbF0pO1xuICAvKipcbiAgICogQGNvbnN0YW50XG4gICAqIEB0eXBlIHtSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxFbGVtZW50Pn1cbiAgICovXG5cbiAgdmFyIHJvb3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSksXG4gICAgICBfdXNlUmVkdWNlcjIgPSBfc2xpY2VkVG9BcnJheShfdXNlUmVkdWNlciwgMiksXG4gICAgICBzdGF0ZSA9IF91c2VSZWR1Y2VyMlswXSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZVJlZHVjZXIyWzFdO1xuXG4gIHZhciBpc0ZvY3VzZWQgPSBzdGF0ZS5pc0ZvY3VzZWQsXG4gICAgICBpc0ZpbGVEaWFsb2dBY3RpdmUgPSBzdGF0ZS5pc0ZpbGVEaWFsb2dBY3RpdmU7XG4gIHZhciBmc0FjY2Vzc0FwaVdvcmtzUmVmID0gdXNlUmVmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmlzU2VjdXJlQ29udGV4dCAmJiB1c2VGc0FjY2Vzc0FwaSAmJiBjYW5Vc2VGaWxlU3lzdGVtQWNjZXNzQVBJKCkpOyAvLyBVcGRhdGUgZmlsZSBkaWFsb2cgYWN0aXZlIHN0YXRlIHdoZW4gdGhlIHdpbmRvdyBpcyBmb2N1c2VkIG9uXG5cbiAgdmFyIG9uV2luZG93Rm9jdXMgPSBmdW5jdGlvbiBvbldpbmRvd0ZvY3VzKCkge1xuICAgIC8vIEV4ZWN1dGUgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZmlsZSBkaWFsb2cgaXMgb3BlbmVkIGluIHRoZSBicm93c2VyXG4gICAgaWYgKCFmc0FjY2Vzc0FwaVdvcmtzUmVmLmN1cnJlbnQgJiYgaXNGaWxlRGlhbG9nQWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICB2YXIgZmlsZXMgPSBpbnB1dFJlZi5jdXJyZW50LmZpbGVzO1xuXG4gICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogXCJjbG9zZURpYWxvZ1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG9uRmlsZURpYWxvZ0NhbmNlbENiKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgb25XaW5kb3dGb2N1cywgZmFsc2UpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIG9uV2luZG93Rm9jdXMsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbaW5wdXRSZWYsIGlzRmlsZURpYWxvZ0FjdGl2ZSwgb25GaWxlRGlhbG9nQ2FuY2VsQ2IsIGZzQWNjZXNzQXBpV29ya3NSZWZdKTtcbiAgdmFyIGRyYWdUYXJnZXRzUmVmID0gdXNlUmVmKFtdKTtcblxuICB2YXIgb25Eb2N1bWVudERyb3AgPSBmdW5jdGlvbiBvbkRvY3VtZW50RHJvcChldmVudCkge1xuICAgIGlmIChyb290UmVmLmN1cnJlbnQgJiYgcm9vdFJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIC8vIElmIHdlIGludGVyY2VwdGVkIGFuIGV2ZW50IGZvciBvdXIgaW5zdGFuY2UsIGxldCBpdCBwcm9wYWdhdGUgZG93biB0byB0aGUgaW5zdGFuY2UncyBvbkRyb3AgaGFuZGxlclxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZHJhZ1RhcmdldHNSZWYuY3VycmVudCA9IFtdO1xuICB9O1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIG9uRG9jdW1lbnREcmFnT3ZlciwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgb25Eb2N1bWVudERyb3AsIGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByZXZlbnREcm9wT25Eb2N1bWVudCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgb25Eb2N1bWVudERyYWdPdmVyKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgb25Eb2N1bWVudERyb3ApO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtyb290UmVmLCBwcmV2ZW50RHJvcE9uRG9jdW1lbnRdKTsgLy8gQXV0byBmb2N1cyB0aGUgcm9vdCB3aGVuIGF1dG9Gb2N1cyBpcyB0cnVlXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRpc2FibGVkICYmIGF1dG9Gb2N1cyAmJiByb290UmVmLmN1cnJlbnQpIHtcbiAgICAgIHJvb3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgfSwgW3Jvb3RSZWYsIGF1dG9Gb2N1cywgZGlzYWJsZWRdKTtcbiAgdmFyIG9uRXJyQ2IgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGlmIChvbkVycm9yKSB7XG4gICAgICBvbkVycm9yKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMZXQgdGhlIHVzZXIga25vdyBzb21ldGhpbmcncyBnb25lIHdyb25nIGlmIHRoZXkgaGF2ZW4ndCBwcm92aWRlZCB0aGUgb25FcnJvciBjYi5cbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9LCBbb25FcnJvcl0pO1xuICB2YXIgb25EcmFnRW50ZXJDYiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFBlcnNpc3QgaGVyZSBiZWNhdXNlIHdlIG5lZWQgdGhlIGV2ZW50IGxhdGVyIGFmdGVyIGdldEZpbGVzRnJvbUV2ZW50KCkgaXMgZG9uZVxuXG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCk7XG4gICAgZHJhZ1RhcmdldHNSZWYuY3VycmVudCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoZHJhZ1RhcmdldHNSZWYuY3VycmVudCksIFtldmVudC50YXJnZXRdKTtcblxuICAgIGlmIChpc0V2dFdpdGhGaWxlcyhldmVudCkpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShnZXRGaWxlc0Zyb21FdmVudChldmVudCkpLnRoZW4oZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgIGlmIChpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCkgJiYgIW5vRHJhZ0V2ZW50c0J1YmJsaW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbGVDb3VudCA9IGZpbGVzLmxlbmd0aDtcbiAgICAgICAgdmFyIGlzRHJhZ0FjY2VwdCA9IGZpbGVDb3VudCA+IDAgJiYgYWxsRmlsZXNBY2NlcHRlZCh7XG4gICAgICAgICAgZmlsZXM6IGZpbGVzLFxuICAgICAgICAgIGFjY2VwdDogYWNjZXB0QXR0cixcbiAgICAgICAgICBtaW5TaXplOiBtaW5TaXplLFxuICAgICAgICAgIG1heFNpemU6IG1heFNpemUsXG4gICAgICAgICAgbXVsdGlwbGU6IG11bHRpcGxlLFxuICAgICAgICAgIG1heEZpbGVzOiBtYXhGaWxlcyxcbiAgICAgICAgICB2YWxpZGF0b3I6IHZhbGlkYXRvclxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGlzRHJhZ1JlamVjdCA9IGZpbGVDb3VudCA+IDAgJiYgIWlzRHJhZ0FjY2VwdDtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIGlzRHJhZ0FjY2VwdDogaXNEcmFnQWNjZXB0LFxuICAgICAgICAgIGlzRHJhZ1JlamVjdDogaXNEcmFnUmVqZWN0LFxuICAgICAgICAgIGlzRHJhZ0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICB0eXBlOiBcInNldERyYWdnZWRGaWxlc1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvbkRyYWdFbnRlcikge1xuICAgICAgICAgIG9uRHJhZ0VudGVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIG9uRXJyQ2IoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtnZXRGaWxlc0Zyb21FdmVudCwgb25EcmFnRW50ZXIsIG9uRXJyQ2IsIG5vRHJhZ0V2ZW50c0J1YmJsaW5nLCBhY2NlcHRBdHRyLCBtaW5TaXplLCBtYXhTaXplLCBtdWx0aXBsZSwgbWF4RmlsZXMsIHZhbGlkYXRvcl0pO1xuICB2YXIgb25EcmFnT3ZlckNiID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICB2YXIgaGFzRmlsZXMgPSBpc0V2dFdpdGhGaWxlcyhldmVudCk7XG5cbiAgICBpZiAoaGFzRmlsZXMgJiYgZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwiY29weVwiO1xuICAgICAgfSBjYXRjaCAoX3VudXNlZCkge31cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHkgKi9cblxuICAgIH1cblxuICAgIGlmIChoYXNGaWxlcyAmJiBvbkRyYWdPdmVyKSB7XG4gICAgICBvbkRyYWdPdmVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sIFtvbkRyYWdPdmVyLCBub0RyYWdFdmVudHNCdWJibGluZ10pO1xuICB2YXIgb25EcmFnTGVhdmVDYiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCk7IC8vIE9ubHkgZGVhY3RpdmF0ZSBvbmNlIHRoZSBkcm9wem9uZSBhbmQgYWxsIGNoaWxkcmVuIGhhdmUgYmVlbiBsZWZ0XG5cbiAgICB2YXIgdGFyZ2V0cyA9IGRyYWdUYXJnZXRzUmVmLmN1cnJlbnQuZmlsdGVyKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHJldHVybiByb290UmVmLmN1cnJlbnQgJiYgcm9vdFJlZi5jdXJyZW50LmNvbnRhaW5zKHRhcmdldCk7XG4gICAgfSk7IC8vIE1ha2Ugc3VyZSB0byByZW1vdmUgYSB0YXJnZXQgcHJlc2VudCBtdWx0aXBsZSB0aW1lcyBvbmx5IG9uY2VcbiAgICAvLyAoRmlyZWZveCBtYXkgZmlyZSBkcmFnZW50ZXIvZHJhZ2xlYXZlIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIGVsZW1lbnQpXG5cbiAgICB2YXIgdGFyZ2V0SWR4ID0gdGFyZ2V0cy5pbmRleE9mKGV2ZW50LnRhcmdldCk7XG5cbiAgICBpZiAodGFyZ2V0SWR4ICE9PSAtMSkge1xuICAgICAgdGFyZ2V0cy5zcGxpY2UodGFyZ2V0SWR4LCAxKTtcbiAgICB9XG5cbiAgICBkcmFnVGFyZ2V0c1JlZi5jdXJyZW50ID0gdGFyZ2V0cztcblxuICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcInNldERyYWdnZWRGaWxlc1wiLFxuICAgICAgaXNEcmFnQWN0aXZlOiBmYWxzZSxcbiAgICAgIGlzRHJhZ0FjY2VwdDogZmFsc2UsXG4gICAgICBpc0RyYWdSZWplY3Q6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBpZiAoaXNFdnRXaXRoRmlsZXMoZXZlbnQpICYmIG9uRHJhZ0xlYXZlKSB7XG4gICAgICBvbkRyYWdMZWF2ZShldmVudCk7XG4gICAgfVxuICB9LCBbcm9vdFJlZiwgb25EcmFnTGVhdmUsIG5vRHJhZ0V2ZW50c0J1YmJsaW5nXSk7XG4gIHZhciBzZXRGaWxlcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChmaWxlcywgZXZlbnQpIHtcbiAgICB2YXIgYWNjZXB0ZWRGaWxlcyA9IFtdO1xuICAgIHZhciBmaWxlUmVqZWN0aW9ucyA9IFtdO1xuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHZhciBfZmlsZUFjY2VwdGVkID0gZmlsZUFjY2VwdGVkKGZpbGUsIGFjY2VwdEF0dHIpLFxuICAgICAgICAgIF9maWxlQWNjZXB0ZWQyID0gX3NsaWNlZFRvQXJyYXkoX2ZpbGVBY2NlcHRlZCwgMiksXG4gICAgICAgICAgYWNjZXB0ZWQgPSBfZmlsZUFjY2VwdGVkMlswXSxcbiAgICAgICAgICBhY2NlcHRFcnJvciA9IF9maWxlQWNjZXB0ZWQyWzFdO1xuXG4gICAgICB2YXIgX2ZpbGVNYXRjaFNpemUgPSBmaWxlTWF0Y2hTaXplKGZpbGUsIG1pblNpemUsIG1heFNpemUpLFxuICAgICAgICAgIF9maWxlTWF0Y2hTaXplMiA9IF9zbGljZWRUb0FycmF5KF9maWxlTWF0Y2hTaXplLCAyKSxcbiAgICAgICAgICBzaXplTWF0Y2ggPSBfZmlsZU1hdGNoU2l6ZTJbMF0sXG4gICAgICAgICAgc2l6ZUVycm9yID0gX2ZpbGVNYXRjaFNpemUyWzFdO1xuXG4gICAgICB2YXIgY3VzdG9tRXJyb3JzID0gdmFsaWRhdG9yID8gdmFsaWRhdG9yKGZpbGUpIDogbnVsbDtcblxuICAgICAgaWYgKGFjY2VwdGVkICYmIHNpemVNYXRjaCAmJiAhY3VzdG9tRXJyb3JzKSB7XG4gICAgICAgIGFjY2VwdGVkRmlsZXMucHVzaChmaWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvcnMgPSBbYWNjZXB0RXJyb3IsIHNpemVFcnJvcl07XG5cbiAgICAgICAgaWYgKGN1c3RvbUVycm9ycykge1xuICAgICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoY3VzdG9tRXJyb3JzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbGVSZWplY3Rpb25zLnB1c2goe1xuICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgZXJyb3JzOiBlcnJvcnMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbXVsdGlwbGUgJiYgYWNjZXB0ZWRGaWxlcy5sZW5ndGggPiAxIHx8IG11bHRpcGxlICYmIG1heEZpbGVzID49IDEgJiYgYWNjZXB0ZWRGaWxlcy5sZW5ndGggPiBtYXhGaWxlcykge1xuICAgICAgLy8gUmVqZWN0IGV2ZXJ5dGhpbmcgYW5kIGVtcHR5IGFjY2VwdGVkIGZpbGVzXG4gICAgICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgZmlsZVJlamVjdGlvbnMucHVzaCh7XG4gICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICBlcnJvcnM6IFtUT09fTUFOWV9GSUxFU19SRUpFQ1RJT05dXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBhY2NlcHRlZEZpbGVzLnNwbGljZSgwKTtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICBhY2NlcHRlZEZpbGVzOiBhY2NlcHRlZEZpbGVzLFxuICAgICAgZmlsZVJlamVjdGlvbnM6IGZpbGVSZWplY3Rpb25zLFxuICAgICAgaXNEcmFnUmVqZWN0OiBmaWxlUmVqZWN0aW9ucy5sZW5ndGggPiAwLFxuICAgICAgdHlwZTogXCJzZXRGaWxlc1wiXG4gICAgfSk7XG5cbiAgICBpZiAob25Ecm9wKSB7XG4gICAgICBvbkRyb3AoYWNjZXB0ZWRGaWxlcywgZmlsZVJlamVjdGlvbnMsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoZmlsZVJlamVjdGlvbnMubGVuZ3RoID4gMCAmJiBvbkRyb3BSZWplY3RlZCkge1xuICAgICAgb25Ecm9wUmVqZWN0ZWQoZmlsZVJlamVjdGlvbnMsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoYWNjZXB0ZWRGaWxlcy5sZW5ndGggPiAwICYmIG9uRHJvcEFjY2VwdGVkKSB7XG4gICAgICBvbkRyb3BBY2NlcHRlZChhY2NlcHRlZEZpbGVzLCBldmVudCk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2gsIG11bHRpcGxlLCBhY2NlcHRBdHRyLCBtaW5TaXplLCBtYXhTaXplLCBtYXhGaWxlcywgb25Ecm9wLCBvbkRyb3BBY2NlcHRlZCwgb25Ecm9wUmVqZWN0ZWQsIHZhbGlkYXRvcl0pO1xuICB2YXIgb25Ecm9wQ2IgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQZXJzaXN0IGhlcmUgYmVjYXVzZSB3ZSBuZWVkIHRoZSBldmVudCBsYXRlciBhZnRlciBnZXRGaWxlc0Zyb21FdmVudCgpIGlzIGRvbmVcblxuICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIGRyYWdUYXJnZXRzUmVmLmN1cnJlbnQgPSBbXTtcblxuICAgIGlmIChpc0V2dFdpdGhGaWxlcyhldmVudCkpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShnZXRGaWxlc0Zyb21FdmVudChldmVudCkpLnRoZW4oZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgIGlmIChpc1Byb3BhZ2F0aW9uU3RvcHBlZChldmVudCkgJiYgIW5vRHJhZ0V2ZW50c0J1YmJsaW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0RmlsZXMoZmlsZXMsIGV2ZW50KTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBvbkVyckNiKGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJyZXNldFwiXG4gICAgfSk7XG4gIH0sIFtnZXRGaWxlc0Zyb21FdmVudCwgc2V0RmlsZXMsIG9uRXJyQ2IsIG5vRHJhZ0V2ZW50c0J1YmJsaW5nXSk7IC8vIEZuIGZvciBvcGVuaW5nIHRoZSBmaWxlIGRpYWxvZyBwcm9ncmFtbWF0aWNhbGx5XG5cbiAgdmFyIG9wZW5GaWxlRGlhbG9nID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIC8vIE5vIHBvaW50IHRvIHVzZSBGUyBhY2Nlc3MgQVBJcyBpZiBjb250ZXh0IGlzIG5vdCBzZWN1cmVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TZWN1cml0eS9TZWN1cmVfQ29udGV4dHMjZmVhdHVyZV9kZXRlY3Rpb25cbiAgICBpZiAoZnNBY2Nlc3NBcGlXb3Jrc1JlZi5jdXJyZW50KSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwib3BlbkRpYWxvZ1wiXG4gICAgICB9KTtcbiAgICAgIG9uRmlsZURpYWxvZ09wZW5DYigpOyAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93L3Nob3dPcGVuRmlsZVBpY2tlclxuXG4gICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgbXVsdGlwbGU6IG11bHRpcGxlLFxuICAgICAgICB0eXBlczogcGlja2VyVHlwZXNcbiAgICAgIH07XG4gICAgICB3aW5kb3cuc2hvd09wZW5GaWxlUGlja2VyKG9wdHMpLnRoZW4oZnVuY3Rpb24gKGhhbmRsZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldEZpbGVzRnJvbUV2ZW50KGhhbmRsZXMpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgc2V0RmlsZXMoZmlsZXMsIG51bGwpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJjbG9zZURpYWxvZ1wiXG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gQWJvcnRFcnJvciBtZWFucyB0aGUgdXNlciBjYW5jZWxlZFxuICAgICAgICBpZiAoaXNBYm9ydChlKSkge1xuICAgICAgICAgIG9uRmlsZURpYWxvZ0NhbmNlbENiKGUpO1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiY2xvc2VEaWFsb2dcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlzU2VjdXJpdHlFcnJvcihlKSkge1xuICAgICAgICAgIGZzQWNjZXNzQXBpV29ya3NSZWYuY3VycmVudCA9IGZhbHNlOyAvLyBDT1JTLCBzbyBjYW5ub3QgdXNlIHRoaXMgQVBJXG4gICAgICAgICAgLy8gVHJ5IHVzaW5nIHRoZSBpbnB1dFxuXG4gICAgICAgICAgaWYgKGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkVyckNiKG5ldyBFcnJvcihcIkNhbm5vdCBvcGVuIHRoZSBmaWxlIHBpY2tlciBiZWNhdXNlIHRoZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZV9TeXN0ZW1fQWNjZXNzX0FQSSBpcyBub3Qgc3VwcG9ydGVkIGFuZCBubyA8aW5wdXQ+IHdhcyBwcm92aWRlZC5cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbkVyckNiKGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBcIm9wZW5EaWFsb2dcIlxuICAgICAgfSk7XG4gICAgICBvbkZpbGVEaWFsb2dPcGVuQ2IoKTtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCBvbkZpbGVEaWFsb2dPcGVuQ2IsIG9uRmlsZURpYWxvZ0NhbmNlbENiLCB1c2VGc0FjY2Vzc0FwaSwgc2V0RmlsZXMsIG9uRXJyQ2IsIHBpY2tlclR5cGVzLCBtdWx0aXBsZV0pOyAvLyBDYiB0byBvcGVuIHRoZSBmaWxlIGRpYWxvZyB3aGVuIFNQQUNFL0VOVEVSIG9jY3VycyBvbiB0aGUgZHJvcHpvbmVcblxuICB2YXIgb25LZXlEb3duQ2IgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUga2V5Ym9hcmQgZXZlbnRzIGJ1YmJsaW5nIHVwIHRoZSBET00gdHJlZVxuICAgIGlmICghcm9vdFJlZi5jdXJyZW50IHx8ICFyb290UmVmLmN1cnJlbnQuaXNFcXVhbE5vZGUoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09IFwiIFwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyIHx8IGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb3BlbkZpbGVEaWFsb2coKTtcbiAgICB9XG4gIH0sIFtyb290UmVmLCBvcGVuRmlsZURpYWxvZ10pOyAvLyBVcGRhdGUgZm9jdXMgc3RhdGUgZm9yIHRoZSBkcm9wem9uZVxuXG4gIHZhciBvbkZvY3VzQ2IgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJmb2N1c1wiXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIG9uQmx1ckNiID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiYmx1clwiXG4gICAgfSk7XG4gIH0sIFtdKTsgLy8gQ2IgdG8gb3BlbiB0aGUgZmlsZSBkaWFsb2cgd2hlbiBjbGljayBvY2N1cnMgb24gdGhlIGRyb3B6b25lXG5cbiAgdmFyIG9uQ2xpY2tDYiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobm9DbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSW4gSUUxMS9FZGdlIHRoZSBmaWxlLWJyb3dzZXIgZGlhbG9nIGlzIGJsb2NraW5nLCB0aGVyZWZvcmUsIHVzZSBzZXRUaW1lb3V0KClcbiAgICAvLyB0byBlbnN1cmUgUmVhY3QgY2FuIGhhbmRsZSBzdGF0ZSBjaGFuZ2VzXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtZHJvcHpvbmUvcmVhY3QtZHJvcHpvbmUvaXNzdWVzLzQ1MFxuXG5cbiAgICBpZiAoaXNJZU9yRWRnZSgpKSB7XG4gICAgICBzZXRUaW1lb3V0KG9wZW5GaWxlRGlhbG9nLCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlbkZpbGVEaWFsb2coKTtcbiAgICB9XG4gIH0sIFtub0NsaWNrLCBvcGVuRmlsZURpYWxvZ10pO1xuXG4gIHZhciBjb21wb3NlSGFuZGxlciA9IGZ1bmN0aW9uIGNvbXBvc2VIYW5kbGVyKGZuKSB7XG4gICAgcmV0dXJuIGRpc2FibGVkID8gbnVsbCA6IGZuO1xuICB9O1xuXG4gIHZhciBjb21wb3NlS2V5Ym9hcmRIYW5kbGVyID0gZnVuY3Rpb24gY29tcG9zZUtleWJvYXJkSGFuZGxlcihmbikge1xuICAgIHJldHVybiBub0tleWJvYXJkID8gbnVsbCA6IGNvbXBvc2VIYW5kbGVyKGZuKTtcbiAgfTtcblxuICB2YXIgY29tcG9zZURyYWdIYW5kbGVyID0gZnVuY3Rpb24gY29tcG9zZURyYWdIYW5kbGVyKGZuKSB7XG4gICAgcmV0dXJuIG5vRHJhZyA/IG51bGwgOiBjb21wb3NlSGFuZGxlcihmbik7XG4gIH07XG5cbiAgdmFyIHN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICAgIGlmIChub0RyYWdFdmVudHNCdWJibGluZykge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRSb290UHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgICBfcmVmMiRyZWZLZXkgPSBfcmVmMi5yZWZLZXksXG4gICAgICAgICAgcmVmS2V5ID0gX3JlZjIkcmVmS2V5ID09PSB2b2lkIDAgPyBcInJlZlwiIDogX3JlZjIkcmVmS2V5LFxuICAgICAgICAgIHJvbGUgPSBfcmVmMi5yb2xlLFxuICAgICAgICAgIG9uS2V5RG93biA9IF9yZWYyLm9uS2V5RG93bixcbiAgICAgICAgICBvbkZvY3VzID0gX3JlZjIub25Gb2N1cyxcbiAgICAgICAgICBvbkJsdXIgPSBfcmVmMi5vbkJsdXIsXG4gICAgICAgICAgb25DbGljayA9IF9yZWYyLm9uQ2xpY2ssXG4gICAgICAgICAgb25EcmFnRW50ZXIgPSBfcmVmMi5vbkRyYWdFbnRlcixcbiAgICAgICAgICBvbkRyYWdPdmVyID0gX3JlZjIub25EcmFnT3ZlcixcbiAgICAgICAgICBvbkRyYWdMZWF2ZSA9IF9yZWYyLm9uRHJhZ0xlYXZlLFxuICAgICAgICAgIG9uRHJvcCA9IF9yZWYyLm9uRHJvcCxcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBfZXhjbHVkZWQzKTtcblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgICBvbktleURvd246IGNvbXBvc2VLZXlib2FyZEhhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25LZXlEb3duLCBvbktleURvd25DYikpLFxuICAgICAgICBvbkZvY3VzOiBjb21wb3NlS2V5Ym9hcmRIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uRm9jdXMsIG9uRm9jdXNDYikpLFxuICAgICAgICBvbkJsdXI6IGNvbXBvc2VLZXlib2FyZEhhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25CbHVyLCBvbkJsdXJDYikpLFxuICAgICAgICBvbkNsaWNrOiBjb21wb3NlSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkNsaWNrLCBvbkNsaWNrQ2IpKSxcbiAgICAgICAgb25EcmFnRW50ZXI6IGNvbXBvc2VEcmFnSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkRyYWdFbnRlciwgb25EcmFnRW50ZXJDYikpLFxuICAgICAgICBvbkRyYWdPdmVyOiBjb21wb3NlRHJhZ0hhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25EcmFnT3Zlciwgb25EcmFnT3ZlckNiKSksXG4gICAgICAgIG9uRHJhZ0xlYXZlOiBjb21wb3NlRHJhZ0hhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25EcmFnTGVhdmUsIG9uRHJhZ0xlYXZlQ2IpKSxcbiAgICAgICAgb25Ecm9wOiBjb21wb3NlRHJhZ0hhbmRsZXIoY29tcG9zZUV2ZW50SGFuZGxlcnMob25Ecm9wLCBvbkRyb3BDYikpLFxuICAgICAgICByb2xlOiB0eXBlb2Ygcm9sZSA9PT0gXCJzdHJpbmdcIiAmJiByb2xlICE9PSBcIlwiID8gcm9sZSA6IFwicHJlc2VudGF0aW9uXCJcbiAgICAgIH0sIHJlZktleSwgcm9vdFJlZiksICFkaXNhYmxlZCAmJiAhbm9LZXlib2FyZCA/IHtcbiAgICAgICAgdGFiSW5kZXg6IDBcbiAgICAgIH0gOiB7fSksIHJlc3QpO1xuICAgIH07XG4gIH0sIFtyb290UmVmLCBvbktleURvd25DYiwgb25Gb2N1c0NiLCBvbkJsdXJDYiwgb25DbGlja0NiLCBvbkRyYWdFbnRlckNiLCBvbkRyYWdPdmVyQ2IsIG9uRHJhZ0xlYXZlQ2IsIG9uRHJvcENiLCBub0tleWJvYXJkLCBub0RyYWcsIGRpc2FibGVkXSk7XG4gIHZhciBvbklucHV0RWxlbWVudENsaWNrID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sIFtdKTtcbiAgdmFyIGdldElucHV0UHJvcHMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgICBfcmVmMyRyZWZLZXkgPSBfcmVmMy5yZWZLZXksXG4gICAgICAgICAgcmVmS2V5ID0gX3JlZjMkcmVmS2V5ID09PSB2b2lkIDAgPyBcInJlZlwiIDogX3JlZjMkcmVmS2V5LFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3JlZjMub25DaGFuZ2UsXG4gICAgICAgICAgb25DbGljayA9IF9yZWYzLm9uQ2xpY2ssXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMywgX2V4Y2x1ZGVkNCk7XG5cbiAgICAgIHZhciBpbnB1dFByb3BzID0gX2RlZmluZVByb3BlcnR5KHtcbiAgICAgICAgYWNjZXB0OiBhY2NlcHRBdHRyLFxuICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGUsXG4gICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGJvcmRlcjogMCxcbiAgICAgICAgICBjbGlwOiBcInJlY3QoMCwgMCwgMCwgMClcIixcbiAgICAgICAgICBjbGlwUGF0aDogXCJpbnNldCg1MCUpXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjFweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIC0xcHggLTFweCAwXCIsXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHdpZHRoOiBcIjFweFwiLFxuICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCJcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6IGNvbXBvc2VIYW5kbGVyKGNvbXBvc2VFdmVudEhhbmRsZXJzKG9uQ2hhbmdlLCBvbkRyb3BDYikpLFxuICAgICAgICBvbkNsaWNrOiBjb21wb3NlSGFuZGxlcihjb21wb3NlRXZlbnRIYW5kbGVycyhvbkNsaWNrLCBvbklucHV0RWxlbWVudENsaWNrKSksXG4gICAgICAgIHRhYkluZGV4OiAtMVxuICAgICAgfSwgcmVmS2V5LCBpbnB1dFJlZik7XG5cbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGlucHV0UHJvcHMpLCByZXN0KTtcbiAgICB9O1xuICB9LCBbaW5wdXRSZWYsIGFjY2VwdCwgbXVsdGlwbGUsIG9uRHJvcENiLCBkaXNhYmxlZF0pO1xuICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSksIHt9LCB7XG4gICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQgJiYgIWRpc2FibGVkLFxuICAgIGdldFJvb3RQcm9wczogZ2V0Um9vdFByb3BzLFxuICAgIGdldElucHV0UHJvcHM6IGdldElucHV0UHJvcHMsXG4gICAgcm9vdFJlZjogcm9vdFJlZixcbiAgICBpbnB1dFJlZjogaW5wdXRSZWYsXG4gICAgb3BlbjogY29tcG9zZUhhbmRsZXIob3BlbkZpbGVEaWFsb2cpXG4gIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0ge0Ryb3B6b25lU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge3t0eXBlOiBzdHJpbmd9ICYgRHJvcHpvbmVTdGF0ZX0gYWN0aW9uXG4gKiBAcmV0dXJucyB7RHJvcHpvbmVTdGF0ZX1cbiAqL1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJmb2N1c1wiOlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBcImJsdXJcIjpcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlKSwge30sIHtcbiAgICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICBjYXNlIFwib3BlbkRpYWxvZ1wiOlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaW5pdGlhbFN0YXRlKSwge30sIHtcbiAgICAgICAgaXNGaWxlRGlhbG9nQWN0aXZlOiB0cnVlXG4gICAgICB9KTtcblxuICAgIGNhc2UgXCJjbG9zZURpYWxvZ1wiOlxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RhdGUpLCB7fSwge1xuICAgICAgICBpc0ZpbGVEaWFsb2dBY3RpdmU6IGZhbHNlXG4gICAgICB9KTtcblxuICAgIGNhc2UgXCJzZXREcmFnZ2VkRmlsZXNcIjpcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlKSwge30sIHtcbiAgICAgICAgaXNEcmFnQWN0aXZlOiBhY3Rpb24uaXNEcmFnQWN0aXZlLFxuICAgICAgICBpc0RyYWdBY2NlcHQ6IGFjdGlvbi5pc0RyYWdBY2NlcHQsXG4gICAgICAgIGlzRHJhZ1JlamVjdDogYWN0aW9uLmlzRHJhZ1JlamVjdFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFwic2V0RmlsZXNcIjpcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlKSwge30sIHtcbiAgICAgICAgYWNjZXB0ZWRGaWxlczogYWN0aW9uLmFjY2VwdGVkRmlsZXMsXG4gICAgICAgIGZpbGVSZWplY3Rpb25zOiBhY3Rpb24uZmlsZVJlamVjdGlvbnMsXG4gICAgICAgIGlzRHJhZ1JlamVjdDogYWN0aW9uLmlzRHJhZ1JlamVjdFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFwicmVzZXRcIjpcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBpbml0aWFsU3RhdGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IHsgRXJyb3JDb2RlIH0gZnJvbSBcIi4vdXRpbHMvaW5kZXguanNcIjsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuY29uc3Qge3RvU3RyaW5nfSA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCB7Z2V0UHJvdG90eXBlT2Z9ID0gT2JqZWN0O1xuY29uc3Qge2l0ZXJhdG9yLCB0b1N0cmluZ1RhZ30gPSBTeW1ib2w7XG5cbmNvbnN0IGtpbmRPZiA9IChjYWNoZSA9PiB0aGluZyA9PiB7XG4gICAgY29uc3Qgc3RyID0gdG9TdHJpbmcuY2FsbCh0aGluZyk7XG4gICAgcmV0dXJuIGNhY2hlW3N0cl0gfHwgKGNhY2hlW3N0cl0gPSBzdHIuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkpO1xufSkoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG5cbmNvbnN0IGtpbmRPZlRlc3QgPSAodHlwZSkgPT4ge1xuICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKHRoaW5nKSA9PiBraW5kT2YodGhpbmcpID09PSB0eXBlXG59XG5cbmNvbnN0IHR5cGVPZlRlc3QgPSB0eXBlID0+IHRoaW5nID0+IHR5cGVvZiB0aGluZyA9PT0gdHlwZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IHtpc0FycmF5fSA9IEFycmF5O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVW5kZWZpbmVkID0gdHlwZU9mVGVzdCgndW5kZWZpbmVkJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgaXNGdW5jdGlvbih2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIpICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQXJyYXlCdWZmZXIgPSBraW5kT2ZUZXN0KCdBcnJheUJ1ZmZlcicpO1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAoaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmluZyA9IHR5cGVPZlRlc3QoJ3N0cmluZycpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlT2ZUZXN0KCdmdW5jdGlvbicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzTnVtYmVyID0gdHlwZU9mVGVzdCgnbnVtYmVyJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQm9vbGVhblxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQm9vbGVhbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQm9vbGVhbiA9IHRoaW5nID0+IHRoaW5nID09PSB0cnVlIHx8IHRoaW5nID09PSBmYWxzZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbCkgPT4ge1xuICBpZiAoa2luZE9mKHZhbCkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIChwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsKSAmJiAhKHRvU3RyaW5nVGFnIGluIHZhbCkgJiYgIShpdGVyYXRvciBpbiB2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNEYXRlID0ga2luZE9mVGVzdCgnRGF0ZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlID0ga2luZE9mVGVzdCgnRmlsZScpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCbG9iID0ga2luZE9mVGVzdCgnQmxvYicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZUxpc3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRmlsZUxpc3QgPSBraW5kT2ZUZXN0KCdGaWxlTGlzdCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyZWFtID0gKHZhbCkgPT4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGb3JtRGF0YSA9ICh0aGluZykgPT4ge1xuICBsZXQga2luZDtcbiAgcmV0dXJuIHRoaW5nICYmIChcbiAgICAodHlwZW9mIEZvcm1EYXRhID09PSAnZnVuY3Rpb24nICYmIHRoaW5nIGluc3RhbmNlb2YgRm9ybURhdGEpIHx8IChcbiAgICAgIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiAoXG4gICAgICAgIChraW5kID0ga2luZE9mKHRoaW5nKSkgPT09ICdmb3JtZGF0YScgfHxcbiAgICAgICAgLy8gZGV0ZWN0IGZvcm0tZGF0YSBpbnN0YW5jZVxuICAgICAgICAoa2luZCA9PT0gJ29iamVjdCcgJiYgaXNGdW5jdGlvbih0aGluZy50b1N0cmluZykgJiYgdGhpbmcudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJylcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVVJMU2VhcmNoUGFyYW1zID0ga2luZE9mVGVzdCgnVVJMU2VhcmNoUGFyYW1zJyk7XG5cbmNvbnN0IFtpc1JlYWRhYmxlU3RyZWFtLCBpc1JlcXVlc3QsIGlzUmVzcG9uc2UsIGlzSGVhZGVyc10gPSBbJ1JlYWRhYmxlU3RyZWFtJywgJ1JlcXVlc3QnLCAnUmVzcG9uc2UnLCAnSGVhZGVycyddLm1hcChraW5kT2ZUZXN0KTtcblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuY29uc3QgdHJpbSA9IChzdHIpID0+IHN0ci50cmltID9cbiAgc3RyLnRyaW0oKSA6IHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5cyA9IGZhbHNlXVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuLCB7YWxsT3duS2V5cyA9IGZhbHNlfSA9IHt9KSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGk7XG4gIGxldCBsO1xuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yIChpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBjb25zdCBrZXlzID0gYWxsT3duS2V5cyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBrZXk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqLCBrZXkpIHtcbiAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICBsZXQgX2tleTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBfa2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ID09PSBfa2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiBfa2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgX2dsb2JhbCA9ICgoKSA9PiB7XG4gIC8qZXNsaW50IG5vLXVuZGVmOjAqL1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWxUaGlzO1xuICByZXR1cm4gdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKVxufSkoKTtcblxuY29uc3QgaXNDb250ZXh0RGVmaW5lZCA9IChjb250ZXh0KSA9PiAhaXNVbmRlZmluZWQoY29udGV4dCkgJiYgY29udGV4dCAhPT0gX2dsb2JhbDtcblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKlxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICBjb25zdCB7Y2FzZWxlc3N9ID0gaXNDb250ZXh0RGVmaW5lZCh0aGlzKSAmJiB0aGlzIHx8IHt9O1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3QgYXNzaWduVmFsdWUgPSAodmFsLCBrZXkpID0+IHtcbiAgICBjb25zdCB0YXJnZXRLZXkgPSBjYXNlbGVzcyAmJiBmaW5kS2V5KHJlc3VsdCwga2V5KSB8fCBrZXk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W3RhcmdldEtleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZShyZXN1bHRbdGFyZ2V0S2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgYXJndW1lbnRzW2ldICYmIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXNdXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmNvbnN0IGV4dGVuZCA9IChhLCBiLCB0aGlzQXJnLCB7YWxsT3duS2V5c309IHt9KSA9PiB7XG4gIGZvckVhY2goYiwgKHZhbCwga2V5KSA9PiB7XG4gICAgaWYgKHRoaXNBcmcgJiYgaXNGdW5jdGlvbih2YWwpKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0sIHthbGxPd25LZXlzfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5jb25zdCBzdHJpcEJPTSA9IChjb250ZW50KSA9PiB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHNdXG4gKiBAcGFyYW0ge29iamVjdH0gW2Rlc2NyaXB0b3JzXVxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBpbmhlcml0cyA9IChjb25zdHJ1Y3Rvciwgc3VwZXJDb25zdHJ1Y3RvciwgcHJvcHMsIGRlc2NyaXB0b3JzKSA9PiB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGRlc2NyaXB0b3JzKTtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgJ3N1cGVyJywge1xuICAgIHZhbHVlOiBzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICB9KTtcbiAgcHJvcHMgJiYgT2JqZWN0LmFzc2lnbihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIG9iamVjdCB3aXRoIGRlZXAgcHJvdG90eXBlIGNoYWluIHRvIGEgZmxhdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VPYmogc291cmNlIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IFtkZXN0T2JqXVxuICogQHBhcmFtIHtGdW5jdGlvbnxCb29sZWFufSBbZmlsdGVyXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BGaWx0ZXJdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3QgdG9GbGF0T2JqZWN0ID0gKHNvdXJjZU9iaiwgZGVzdE9iaiwgZmlsdGVyLCBwcm9wRmlsdGVyKSA9PiB7XG4gIGxldCBwcm9wcztcbiAgbGV0IGk7XG4gIGxldCBwcm9wO1xuICBjb25zdCBtZXJnZWQgPSB7fTtcblxuICBkZXN0T2JqID0gZGVzdE9iaiB8fCB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gIGlmIChzb3VyY2VPYmogPT0gbnVsbCkgcmV0dXJuIGRlc3RPYmo7XG5cbiAgZG8ge1xuICAgIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlT2JqKTtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICBwcm9wID0gcHJvcHNbaV07XG4gICAgICBpZiAoKCFwcm9wRmlsdGVyIHx8IHByb3BGaWx0ZXIocHJvcCwgc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgIW1lcmdlZFtwcm9wXSkge1xuICAgICAgICBkZXN0T2JqW3Byb3BdID0gc291cmNlT2JqW3Byb3BdO1xuICAgICAgICBtZXJnZWRbcHJvcF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VPYmogPSBmaWx0ZXIgIT09IGZhbHNlICYmIGdldFByb3RvdHlwZU9mKHNvdXJjZU9iaik7XG4gIH0gd2hpbGUgKHNvdXJjZU9iaiAmJiAoIWZpbHRlciB8fCBmaWx0ZXIoc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgc291cmNlT2JqICE9PSBPYmplY3QucHJvdG90eXBlKTtcblxuICByZXR1cm4gZGVzdE9iajtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBzdHJpbmcgZW5kcyB3aXRoIHRoZSBjaGFyYWN0ZXJzIG9mIGEgc3BlY2lmaWVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb249IDBdXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGVuZHNXaXRoID0gKHN0ciwgc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikgPT4ge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPiBzdHIubGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSBzdHIubGVuZ3RoO1xuICB9XG4gIHBvc2l0aW9uIC09IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHN0ci5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xuICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBuZXcgYXJyYXkgZnJvbSBhcnJheSBsaWtlIG9iamVjdCBvciBudWxsIGlmIGZhaWxlZFxuICpcbiAqIEBwYXJhbSB7Kn0gW3RoaW5nXVxuICpcbiAqIEByZXR1cm5zIHs/QXJyYXl9XG4gKi9cbmNvbnN0IHRvQXJyYXkgPSAodGhpbmcpID0+IHtcbiAgaWYgKCF0aGluZykgcmV0dXJuIG51bGw7XG4gIGlmIChpc0FycmF5KHRoaW5nKSkgcmV0dXJuIHRoaW5nO1xuICBsZXQgaSA9IHRoaW5nLmxlbmd0aDtcbiAgaWYgKCFpc051bWJlcihpKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBhcnJbaV0gPSB0aGluZ1tpXTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG4vKipcbiAqIENoZWNraW5nIGlmIHRoZSBVaW50OEFycmF5IGV4aXN0cyBhbmQgaWYgaXQgZG9lcywgaXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIHRoZVxuICogdGhpbmcgcGFzc2VkIGluIGlzIGFuIGluc3RhbmNlIG9mIFVpbnQ4QXJyYXlcbiAqXG4gKiBAcGFyYW0ge1R5cGVkQXJyYXl9XG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuY29uc3QgaXNUeXBlZEFycmF5ID0gKFR5cGVkQXJyYXkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gdGhpbmcgPT4ge1xuICAgIHJldHVybiBUeXBlZEFycmF5ICYmIHRoaW5nIGluc3RhbmNlb2YgVHlwZWRBcnJheTtcbiAgfTtcbn0pKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBnZXRQcm90b3R5cGVPZihVaW50OEFycmF5KSk7XG5cbi8qKlxuICogRm9yIGVhY2ggZW50cnkgaW4gdGhlIG9iamVjdCwgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUga2V5IGFuZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBlbnRyeS5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgZm9yRWFjaEVudHJ5ID0gKG9iaiwgZm4pID0+IHtcbiAgY29uc3QgZ2VuZXJhdG9yID0gb2JqICYmIG9ialtpdGVyYXRvcl07XG5cbiAgY29uc3QgX2l0ZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwob2JqKTtcblxuICBsZXQgcmVzdWx0O1xuXG4gIHdoaWxlICgocmVzdWx0ID0gX2l0ZXJhdG9yLm5leHQoKSkgJiYgIXJlc3VsdC5kb25lKSB7XG4gICAgY29uc3QgcGFpciA9IHJlc3VsdC52YWx1ZTtcbiAgICBmbi5jYWxsKG9iaiwgcGFpclswXSwgcGFpclsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBzdHJpbmcsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgbWF0Y2hlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdFeHAgLSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBzZWFyY2guXG4gKlxuICogQHJldHVybnMge0FycmF5PGJvb2xlYW4+fVxuICovXG5jb25zdCBtYXRjaEFsbCA9IChyZWdFeHAsIHN0cikgPT4ge1xuICBsZXQgbWF0Y2hlcztcbiAgY29uc3QgYXJyID0gW107XG5cbiAgd2hpbGUgKChtYXRjaGVzID0gcmVnRXhwLmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICBhcnIucHVzaChtYXRjaGVzKTtcbiAgfVxuXG4gIHJldHVybiBhcnI7XG59XG5cbi8qIENoZWNraW5nIGlmIHRoZSBraW5kT2ZUZXN0IGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSB3aGVuIHBhc3NlZCBhbiBIVE1MRm9ybUVsZW1lbnQuICovXG5jb25zdCBpc0hUTUxGb3JtID0ga2luZE9mVGVzdCgnSFRNTEZvcm1FbGVtZW50Jyk7XG5cbmNvbnN0IHRvQ2FtZWxDYXNlID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1stX1xcc10oW2EtelxcZF0pKFxcdyopL2csXG4gICAgZnVuY3Rpb24gcmVwbGFjZXIobSwgcDEsIHAyKSB7XG4gICAgICByZXR1cm4gcDEudG9VcHBlckNhc2UoKSArIHAyO1xuICAgIH1cbiAgKTtcbn07XG5cbi8qIENyZWF0aW5nIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGlmIGFuIG9iamVjdCBoYXMgYSBwcm9wZXJ0eS4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gKCh7aGFzT3duUHJvcGVydHl9KSA9PiAob2JqLCBwcm9wKSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpKE9iamVjdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNSZWdFeHAgPSBraW5kT2ZUZXN0KCdSZWdFeHAnKTtcblxuY29uc3QgcmVkdWNlRGVzY3JpcHRvcnMgPSAob2JqLCByZWR1Y2VyKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKTtcbiAgY29uc3QgcmVkdWNlZERlc2NyaXB0b3JzID0ge307XG5cbiAgZm9yRWFjaChkZXNjcmlwdG9ycywgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICBsZXQgcmV0O1xuICAgIGlmICgocmV0ID0gcmVkdWNlcihkZXNjcmlwdG9yLCBuYW1lLCBvYmopKSAhPT0gZmFsc2UpIHtcbiAgICAgIHJlZHVjZWREZXNjcmlwdG9yc1tuYW1lXSA9IHJldCB8fCBkZXNjcmlwdG9yO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMob2JqLCByZWR1Y2VkRGVzY3JpcHRvcnMpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFsbCBtZXRob2RzIHJlYWQtb25seVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbmNvbnN0IGZyZWV6ZU1ldGhvZHMgPSAob2JqKSA9PiB7XG4gIHJlZHVjZURlc2NyaXB0b3JzKG9iaiwgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICAvLyBza2lwIHJlc3RyaWN0ZWQgcHJvcHMgaW4gc3RyaWN0IG1vZGVcbiAgICBpZiAoaXNGdW5jdGlvbihvYmopICYmIFsnYXJndW1lbnRzJywgJ2NhbGxlcicsICdjYWxsZWUnXS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gb2JqW25hbWVdO1xuXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZmFsc2U7XG5cbiAgICBpZiAoJ3dyaXRhYmxlJyBpbiBkZXNjcmlwdG9yKSB7XG4gICAgICBkZXNjcmlwdG9yLndyaXRhYmxlID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFkZXNjcmlwdG9yLnNldCkge1xuICAgICAgZGVzY3JpcHRvci5zZXQgPSAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKCdDYW4gbm90IHJld3JpdGUgcmVhZC1vbmx5IG1ldGhvZCBcXCcnICsgbmFtZSArICdcXCcnKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgdG9PYmplY3RTZXQgPSAoYXJyYXlPclN0cmluZywgZGVsaW1pdGVyKSA9PiB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuXG4gIGNvbnN0IGRlZmluZSA9IChhcnIpID0+IHtcbiAgICBhcnIuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBvYmpbdmFsdWVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzQXJyYXkoYXJyYXlPclN0cmluZykgPyBkZWZpbmUoYXJyYXlPclN0cmluZykgOiBkZWZpbmUoU3RyaW5nKGFycmF5T3JTdHJpbmcpLnNwbGl0KGRlbGltaXRlcikpO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCB0b0Zpbml0ZU51bWJlciA9ICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSA9ICt2YWx1ZSkgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgdGhpbmcgaXMgYSBGb3JtRGF0YSBvYmplY3QsIHJldHVybiB0cnVlLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlLlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bn0gdGhpbmcgLSBUaGUgdGhpbmcgdG8gY2hlY2suXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzU3BlY0NvbXBsaWFudEZvcm0odGhpbmcpIHtcbiAgcmV0dXJuICEhKHRoaW5nICYmIGlzRnVuY3Rpb24odGhpbmcuYXBwZW5kKSAmJiB0aGluZ1t0b1N0cmluZ1RhZ10gPT09ICdGb3JtRGF0YScgJiYgdGhpbmdbaXRlcmF0b3JdKTtcbn1cblxuY29uc3QgdG9KU09OT2JqZWN0ID0gKG9iaikgPT4ge1xuICBjb25zdCBzdGFjayA9IG5ldyBBcnJheSgxMCk7XG5cbiAgY29uc3QgdmlzaXQgPSAoc291cmNlLCBpKSA9PiB7XG5cbiAgICBpZiAoaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgaWYgKHN0YWNrLmluZGV4T2Yoc291cmNlKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoISgndG9KU09OJyBpbiBzb3VyY2UpKSB7XG4gICAgICAgIHN0YWNrW2ldID0gc291cmNlO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBpc0FycmF5KHNvdXJjZSkgPyBbXSA6IHt9O1xuXG4gICAgICAgIGZvckVhY2goc291cmNlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZHVjZWRWYWx1ZSA9IHZpc2l0KHZhbHVlLCBpICsgMSk7XG4gICAgICAgICAgIWlzVW5kZWZpbmVkKHJlZHVjZWRWYWx1ZSkgJiYgKHRhcmdldFtrZXldID0gcmVkdWNlZFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhY2tbaV0gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgcmV0dXJuIHZpc2l0KG9iaiwgMCk7XG59XG5cbmNvbnN0IGlzQXN5bmNGbiA9IGtpbmRPZlRlc3QoJ0FzeW5jRnVuY3Rpb24nKTtcblxuY29uc3QgaXNUaGVuYWJsZSA9ICh0aGluZykgPT5cbiAgdGhpbmcgJiYgKGlzT2JqZWN0KHRoaW5nKSB8fCBpc0Z1bmN0aW9uKHRoaW5nKSkgJiYgaXNGdW5jdGlvbih0aGluZy50aGVuKSAmJiBpc0Z1bmN0aW9uKHRoaW5nLmNhdGNoKTtcblxuLy8gb3JpZ2luYWwgY29kZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0RpZ2l0YWxCcmFpbkpTL0F4aW9zUHJvbWlzZS9ibG9iLzE2ZGVhYjEzNzEwZWMwOTc3OTkyMjEzMWYzZmE1OTU0MzIwZjgzYWIvbGliL3V0aWxzLmpzI0wxMS1MMzRcblxuY29uc3QgX3NldEltbWVkaWF0ZSA9ICgoc2V0SW1tZWRpYXRlU3VwcG9ydGVkLCBwb3N0TWVzc2FnZVN1cHBvcnRlZCkgPT4ge1xuICBpZiAoc2V0SW1tZWRpYXRlU3VwcG9ydGVkKSB7XG4gICAgcmV0dXJuIHNldEltbWVkaWF0ZTtcbiAgfVxuXG4gIHJldHVybiBwb3N0TWVzc2FnZVN1cHBvcnRlZCA/ICgodG9rZW4sIGNhbGxiYWNrcykgPT4ge1xuICAgIF9nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKHtzb3VyY2UsIGRhdGF9KSA9PiB7XG4gICAgICBpZiAoc291cmNlID09PSBfZ2xvYmFsICYmIGRhdGEgPT09IHRva2VuKSB7XG4gICAgICAgIGNhbGxiYWNrcy5sZW5ndGggJiYgY2FsbGJhY2tzLnNoaWZ0KCkoKTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gKGNiKSA9PiB7XG4gICAgICBjYWxsYmFja3MucHVzaChjYik7XG4gICAgICBfZ2xvYmFsLnBvc3RNZXNzYWdlKHRva2VuLCBcIipcIik7XG4gICAgfVxuICB9KShgYXhpb3NAJHtNYXRoLnJhbmRvbSgpfWAsIFtdKSA6IChjYikgPT4gc2V0VGltZW91dChjYik7XG59KShcbiAgdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgaXNGdW5jdGlvbihfZ2xvYmFsLnBvc3RNZXNzYWdlKVxuKTtcblxuY29uc3QgYXNhcCA9IHR5cGVvZiBxdWV1ZU1pY3JvdGFzayAhPT0gJ3VuZGVmaW5lZCcgP1xuICBxdWV1ZU1pY3JvdGFzay5iaW5kKF9nbG9iYWwpIDogKCB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5uZXh0VGljayB8fCBfc2V0SW1tZWRpYXRlKTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqXG5cblxuY29uc3QgaXNJdGVyYWJsZSA9ICh0aGluZykgPT4gdGhpbmcgIT0gbnVsbCAmJiBpc0Z1bmN0aW9uKHRoaW5nW2l0ZXJhdG9yXSk7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nLFxuICBpc051bWJlcixcbiAgaXNCb29sZWFuLFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaXNSZWFkYWJsZVN0cmVhbSxcbiAgaXNSZXF1ZXN0LFxuICBpc1Jlc3BvbnNlLFxuICBpc0hlYWRlcnMsXG4gIGlzVW5kZWZpbmVkLFxuICBpc0RhdGUsXG4gIGlzRmlsZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbixcbiAgaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1R5cGVkQXJyYXksXG4gIGlzRmlsZUxpc3QsXG4gIGZvckVhY2gsXG4gIG1lcmdlLFxuICBleHRlbmQsXG4gIHRyaW0sXG4gIHN0cmlwQk9NLFxuICBpbmhlcml0cyxcbiAgdG9GbGF0T2JqZWN0LFxuICBraW5kT2YsXG4gIGtpbmRPZlRlc3QsXG4gIGVuZHNXaXRoLFxuICB0b0FycmF5LFxuICBmb3JFYWNoRW50cnksXG4gIG1hdGNoQWxsLFxuICBpc0hUTUxGb3JtLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaGFzT3duUHJvcDogaGFzT3duUHJvcGVydHksIC8vIGFuIGFsaWFzIHRvIGF2b2lkIEVTTGludCBuby1wcm90b3R5cGUtYnVpbHRpbnMgZGV0ZWN0aW9uXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIGlzU3BlY0NvbXBsaWFudEZvcm0sXG4gIHRvSlNPTk9iamVjdCxcbiAgaXNBc3luY0ZuLFxuICBpc1RoZW5hYmxlLFxuICBzZXRJbW1lZGlhdGU6IF9zZXRJbW1lZGlhdGUsXG4gIGFzYXAsXG4gIGlzSXRlcmFibGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXSBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBBeGlvc0Vycm9yKG1lc3NhZ2UsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgRXJyb3IuY2FsbCh0aGlzKTtcblxuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjaztcbiAgfVxuXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMubmFtZSA9ICdBeGlvc0Vycm9yJztcbiAgY29kZSAmJiAodGhpcy5jb2RlID0gY29kZSk7XG4gIGNvbmZpZyAmJiAodGhpcy5jb25maWcgPSBjb25maWcpO1xuICByZXF1ZXN0ICYmICh0aGlzLnJlcXVlc3QgPSByZXF1ZXN0KTtcbiAgaWYgKHJlc3BvbnNlKSB7XG4gICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIHRoaXMuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzID8gcmVzcG9uc2Uuc3RhdHVzIDogbnVsbDtcbiAgfVxufVxuXG51dGlscy5pbmhlcml0cyhBeGlvc0Vycm9yLCBFcnJvciwge1xuICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB1dGlscy50b0pTT05PYmplY3QodGhpcy5jb25maWcpLFxuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1c1xuICAgIH07XG4gIH1cbn0pO1xuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc0Vycm9yLnByb3RvdHlwZTtcbmNvbnN0IGRlc2NyaXB0b3JzID0ge307XG5cbltcbiAgJ0VSUl9CQURfT1BUSU9OX1ZBTFVFJyxcbiAgJ0VSUl9CQURfT1BUSU9OJyxcbiAgJ0VDT05OQUJPUlRFRCcsXG4gICdFVElNRURPVVQnLFxuICAnRVJSX05FVFdPUksnLFxuICAnRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUycsXG4gICdFUlJfREVQUkVDQVRFRCcsXG4gICdFUlJfQkFEX1JFU1BPTlNFJyxcbiAgJ0VSUl9CQURfUkVRVUVTVCcsXG4gICdFUlJfQ0FOQ0VMRUQnLFxuICAnRVJSX05PVF9TVVBQT1JUJyxcbiAgJ0VSUl9JTlZBTElEX1VSTCdcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5dLmZvckVhY2goY29kZSA9PiB7XG4gIGRlc2NyaXB0b3JzW2NvZGVdID0ge3ZhbHVlOiBjb2RlfTtcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBeGlvc0Vycm9yLCBkZXNjcmlwdG9ycyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCAnaXNBeGlvc0Vycm9yJywge3ZhbHVlOiB0cnVlfSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5BeGlvc0Vycm9yLmZyb20gPSAoZXJyb3IsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UsIGN1c3RvbVByb3BzKSA9PiB7XG4gIGNvbnN0IGF4aW9zRXJyb3IgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG5cbiAgdXRpbHMudG9GbGF0T2JqZWN0KGVycm9yLCBheGlvc0Vycm9yLCBmdW5jdGlvbiBmaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gRXJyb3IucHJvdG90eXBlO1xuICB9LCBwcm9wID0+IHtcbiAgICByZXR1cm4gcHJvcCAhPT0gJ2lzQXhpb3NFcnJvcic7XG4gIH0pO1xuXG4gIEF4aW9zRXJyb3IuY2FsbChheGlvc0Vycm9yLCBlcnJvci5tZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKTtcblxuICBheGlvc0Vycm9yLmNhdXNlID0gZXJyb3I7XG5cbiAgYXhpb3NFcnJvci5uYW1lID0gZXJyb3IubmFtZTtcblxuICBjdXN0b21Qcm9wcyAmJiBPYmplY3QuYXNzaWduKGF4aW9zRXJyb3IsIGN1c3RvbVByb3BzKTtcblxuICByZXR1cm4gYXhpb3NFcnJvcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zRXJyb3I7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc3RyaWN0XG5leHBvcnQgZGVmYXVsdCBudWxsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbi8vIHRlbXBvcmFyeSBob3RmaXggdG8gYXZvaWQgY2lyY3VsYXIgcmVmZXJlbmNlcyB1bnRpbCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBpcyByZWZhY3RvcmVkXG5pbXBvcnQgUGxhdGZvcm1Gb3JtRGF0YSBmcm9tICcuLi9wbGF0Zm9ybS9ub2RlL2NsYXNzZXMvRm9ybURhdGEuanMnO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGdpdmVuIHRoaW5nIGlzIGEgYXJyYXkgb3IganMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aGluZyAtIFRoZSBvYmplY3Qgb3IgYXJyYXkgdG8gYmUgdmlzaXRlZC5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNWaXNpdGFibGUodGhpbmcpIHtcbiAgcmV0dXJuIHV0aWxzLmlzUGxhaW5PYmplY3QodGhpbmcpIHx8IHV0aWxzLmlzQXJyYXkodGhpbmcpO1xufVxuXG4vKipcbiAqIEl0IHJlbW92ZXMgdGhlIGJyYWNrZXRzIGZyb20gdGhlIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBwYXJhbWV0ZXIuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGtleSB3aXRob3V0IHRoZSBicmFja2V0cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQnJhY2tldHMoa2V5KSB7XG4gIHJldHVybiB1dGlscy5lbmRzV2l0aChrZXksICdbXScpID8ga2V5LnNsaWNlKDAsIC0yKSA6IGtleTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhdGgsIGEga2V5LCBhbmQgYSBib29sZWFuLCBhbmQgcmV0dXJucyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIHBhdGggdG8gdGhlIGN1cnJlbnQga2V5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIGN1cnJlbnQgb2JqZWN0IGJlaW5nIGl0ZXJhdGVkIG92ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gZG90cyAtIElmIHRydWUsIHRoZSBrZXkgd2lsbCBiZSByZW5kZXJlZCB3aXRoIGRvdHMgaW5zdGVhZCBvZiBicmFja2V0cy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpIHtcbiAgaWYgKCFwYXRoKSByZXR1cm4ga2V5O1xuICByZXR1cm4gcGF0aC5jb25jYXQoa2V5KS5tYXAoZnVuY3Rpb24gZWFjaCh0b2tlbiwgaSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHRva2VuID0gcmVtb3ZlQnJhY2tldHModG9rZW4pO1xuICAgIHJldHVybiAhZG90cyAmJiBpID8gJ1snICsgdG9rZW4gKyAnXScgOiB0b2tlbjtcbiAgfSkuam9pbihkb3RzID8gJy4nIDogJycpO1xufVxuXG4vKipcbiAqIElmIHRoZSBhcnJheSBpcyBhbiBhcnJheSBhbmQgbm9uZSBvZiBpdHMgZWxlbWVudHMgYXJlIHZpc2l0YWJsZSwgdGhlbiBpdCdzIGEgZmxhdCBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGFyciAtIFRoZSBhcnJheSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0ZsYXRBcnJheShhcnIpIHtcbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkoYXJyKSAmJiAhYXJyLnNvbWUoaXNWaXNpdGFibGUpO1xufVxuXG5jb25zdCBwcmVkaWNhdGVzID0gdXRpbHMudG9GbGF0T2JqZWN0KHV0aWxzLCB7fSwgbnVsbCwgZnVuY3Rpb24gZmlsdGVyKHByb3ApIHtcbiAgcmV0dXJuIC9eaXNbQS1aXS8udGVzdChwcm9wKTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBkYXRhIG9iamVjdCB0byBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7P09iamVjdH0gW2Zvcm1EYXRhXVxuICogQHBhcmFtIHs/T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLnZpc2l0b3JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1ldGFUb2tlbnMgPSB0cnVlXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kb3RzID0gZmFsc2VdXG4gKiBAcGFyYW0gez9Cb29sZWFufSBbb3B0aW9ucy5pbmRleGVzID0gZmFsc2VdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqKi9cblxuLyoqXG4gKiBJdCBjb252ZXJ0cyBhbiBvYmplY3QgaW50byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGZvcm0gZGF0YS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSAtIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gYXBwZW5kIHRvLlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zXG4gKlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gdG9Gb3JtRGF0YShvYmosIGZvcm1EYXRhLCBvcHRpb25zKSB7XG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGZvcm1EYXRhID0gZm9ybURhdGEgfHwgbmV3IChQbGF0Zm9ybUZvcm1EYXRhIHx8IEZvcm1EYXRhKSgpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBvcHRpb25zID0gdXRpbHMudG9GbGF0T2JqZWN0KG9wdGlvbnMsIHtcbiAgICBtZXRhVG9rZW5zOiB0cnVlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IGZhbHNlXG4gIH0sIGZhbHNlLCBmdW5jdGlvbiBkZWZpbmVkKG9wdGlvbiwgc291cmNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gICAgcmV0dXJuICF1dGlscy5pc1VuZGVmaW5lZChzb3VyY2Vbb3B0aW9uXSk7XG4gIH0pO1xuXG4gIGNvbnN0IG1ldGFUb2tlbnMgPSBvcHRpb25zLm1ldGFUb2tlbnM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBjb25zdCB2aXNpdG9yID0gb3B0aW9ucy52aXNpdG9yIHx8IGRlZmF1bHRWaXNpdG9yO1xuICBjb25zdCBkb3RzID0gb3B0aW9ucy5kb3RzO1xuICBjb25zdCBpbmRleGVzID0gb3B0aW9ucy5pbmRleGVzO1xuICBjb25zdCBfQmxvYiA9IG9wdGlvbnMuQmxvYiB8fCB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgQmxvYjtcbiAgY29uc3QgdXNlQmxvYiA9IF9CbG9iICYmIHV0aWxzLmlzU3BlY0NvbXBsaWFudEZvcm0oZm9ybURhdGEpO1xuXG4gIGlmICghdXRpbHMuaXNGdW5jdGlvbih2aXNpdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Zpc2l0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybiAnJztcblxuICAgIGlmICh1dGlscy5pc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoIXVzZUJsb2IgJiYgdXRpbHMuaXNCbG9iKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ0Jsb2IgaXMgbm90IHN1cHBvcnRlZC4gVXNlIGEgQnVmZmVyIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIodmFsdWUpIHx8IHV0aWxzLmlzVHlwZWRBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB1c2VCbG9iICYmIHR5cGVvZiBCbG9iID09PSAnZnVuY3Rpb24nID8gbmV3IEJsb2IoW3ZhbHVlXSkgOiBCdWZmZXIuZnJvbSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgdmlzaXRvci5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IGtleVxuICAgKiBAcGFyYW0ge0FycmF5PFN0cmluZ3xOdW1iZXI+fSBwYXRoXG4gICAqIEB0aGlzIHtGb3JtRGF0YX1cbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHJldHVybiB0cnVlIHRvIHZpc2l0IHRoZSBlYWNoIHByb3Agb2YgdGhlIHZhbHVlIHJlY3Vyc2l2ZWx5XG4gICAqL1xuICBmdW5jdGlvbiBkZWZhdWx0VmlzaXRvcih2YWx1ZSwga2V5LCBwYXRoKSB7XG4gICAgbGV0IGFyciA9IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlICYmICFwYXRoICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh1dGlscy5lbmRzV2l0aChrZXksICd7fScpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSBtZXRhVG9rZW5zID8ga2V5IDoga2V5LnNsaWNlKDAsIC0yKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKHV0aWxzLmlzQXJyYXkodmFsdWUpICYmIGlzRmxhdEFycmF5KHZhbHVlKSkgfHxcbiAgICAgICAgKCh1dGlscy5pc0ZpbGVMaXN0KHZhbHVlKSB8fCB1dGlscy5lbmRzV2l0aChrZXksICdbXScpKSAmJiAoYXJyID0gdXRpbHMudG9BcnJheSh2YWx1ZSkpXG4gICAgICAgICkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IHJlbW92ZUJyYWNrZXRzKGtleSk7XG5cbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gZWFjaChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAhKHV0aWxzLmlzVW5kZWZpbmVkKGVsKSB8fCBlbCA9PT0gbnVsbCkgJiYgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgICBpbmRleGVzID09PSB0cnVlID8gcmVuZGVyS2V5KFtrZXldLCBpbmRleCwgZG90cykgOiAoaW5kZXhlcyA9PT0gbnVsbCA/IGtleSA6IGtleSArICdbXScpLFxuICAgICAgICAgICAgY29udmVydFZhbHVlKGVsKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVmlzaXRhYmxlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpLCBjb252ZXJ0VmFsdWUodmFsdWUpKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHN0YWNrID0gW107XG5cbiAgY29uc3QgZXhwb3NlZEhlbHBlcnMgPSBPYmplY3QuYXNzaWduKHByZWRpY2F0ZXMsIHtcbiAgICBkZWZhdWx0VmlzaXRvcixcbiAgICBjb252ZXJ0VmFsdWUsXG4gICAgaXNWaXNpdGFibGVcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYnVpbGQodmFsdWUsIHBhdGgpIHtcbiAgICBpZiAodXRpbHMuaXNVbmRlZmluZWQodmFsdWUpKSByZXR1cm47XG5cbiAgICBpZiAoc3RhY2suaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2lyY3VsYXIgcmVmZXJlbmNlIGRldGVjdGVkIGluICcgKyBwYXRoLmpvaW4oJy4nKSk7XG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh2YWx1ZSk7XG5cbiAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiBlYWNoKGVsLCBrZXkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiB2aXNpdG9yLmNhbGwoXG4gICAgICAgIGZvcm1EYXRhLCBlbCwgdXRpbHMuaXNTdHJpbmcoa2V5KSA/IGtleS50cmltKCkgOiBrZXksIHBhdGgsIGV4cG9zZWRIZWxwZXJzXG4gICAgICApO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIGJ1aWxkKGVsLCBwYXRoID8gcGF0aC5jb25jYXQoa2V5KSA6IFtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YWNrLnBvcCgpO1xuICB9XG5cbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG5cbiAgYnVpbGQob2JqKTtcblxuICByZXR1cm4gZm9ybURhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRm9ybURhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogSXQgZW5jb2RlcyBhIHN0cmluZyBieSByZXBsYWNpbmcgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGluIHRoZSB1bnJlc2VydmVkIHNldCB3aXRoXG4gKiB0aGVpciBwZXJjZW50LWVuY29kZWQgZXF1aXZhbGVudHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gIGNvbnN0IGNoYXJNYXAgPSB7XG4gICAgJyEnOiAnJTIxJyxcbiAgICBcIidcIjogJyUyNycsXG4gICAgJygnOiAnJTI4JyxcbiAgICAnKSc6ICclMjknLFxuICAgICd+JzogJyU3RScsXG4gICAgJyUyMCc6ICcrJyxcbiAgICAnJTAwJzogJ1xceDAwJ1xuICB9O1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XG4gICAgcmV0dXJuIGNoYXJNYXBbbWF0Y2hdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhcmFtcyBvYmplY3QgYW5kIGNvbnZlcnRzIGl0IHRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBGb3JtRGF0YSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIHRoZSBBeGlvcyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKSB7XG4gIHRoaXMuX3BhaXJzID0gW107XG5cbiAgcGFyYW1zICYmIHRvRm9ybURhdGEocGFyYW1zLCB0aGlzLCBvcHRpb25zKTtcbn1cblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX3BhaXJzLnB1c2goW25hbWUsIHZhbHVlXSk7XG59O1xuXG5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhlbmNvZGVyKSB7XG4gIGNvbnN0IF9lbmNvZGUgPSBlbmNvZGVyID8gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZW5jb2Rlci5jYWxsKHRoaXMsIHZhbHVlLCBlbmNvZGUpO1xuICB9IDogZW5jb2RlO1xuXG4gIHJldHVybiB0aGlzLl9wYWlycy5tYXAoZnVuY3Rpb24gZWFjaChwYWlyKSB7XG4gICAgcmV0dXJuIF9lbmNvZGUocGFpclswXSkgKyAnPScgKyBfZW5jb2RlKHBhaXJbMV0pO1xuICB9LCAnJykuam9pbignJicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5cbi8qKlxuICogSXQgcmVwbGFjZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY2hhcmFjdGVycyBgOmAsIGAkYCwgYCxgLCBgK2AsIGBbYCwgYW5kIGBdYCB3aXRoIHRoZWlyXG4gKiBVUkkgZW5jb2RlZCBjb3VudGVycGFydHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHs/KG9iamVjdHxGdW5jdGlvbil9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgb3B0aW9ucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIFxuICBjb25zdCBfZW5jb2RlID0gb3B0aW9ucyAmJiBvcHRpb25zLmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgc2VyaWFsaXplOiBvcHRpb25zXG4gICAgfTtcbiAgfSBcblxuICBjb25zdCBzZXJpYWxpemVGbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemU7XG5cbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXM7XG5cbiAgaWYgKHNlcmlhbGl6ZUZuKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHNlcmlhbGl6ZUZuKHBhcmFtcywgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykgP1xuICAgICAgcGFyYW1zLnRvU3RyaW5nKCkgOlxuICAgICAgbmV3IEF4aW9zVVJMU2VhcmNoUGFyYW1zKHBhcmFtcywgb3B0aW9ucykudG9TdHJpbmcoX2VuY29kZSk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIGNvbnN0IGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG5cbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG5jbGFzcyBJbnRlcmNlcHRvck1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAgICovXG4gIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkLCBvcHRpb25zKSB7XG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICAgIGZ1bGZpbGxlZCxcbiAgICAgIHJlamVjdGVkLFxuICAgICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgICBydW5XaGVuOiBvcHRpb25zID8gb3B0aW9ucy5ydW5XaGVuIDogbnVsbFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAgICpcbiAgICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgaW50ZXJjZXB0b3Igd2FzIHJlbW92ZWQsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gICAqL1xuICBlamVjdChpZCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgaW50ZXJjZXB0b3JzIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAgICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZm9yRWFjaChmbikge1xuICAgIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgICAgZm4oaCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2Vcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnID8gVVJMU2VhcmNoUGFyYW1zIDogQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBGb3JtRGF0YSA6IG51bGw7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnID8gQmxvYiA6IG51bGxcbiIsImltcG9ydCBVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi9jbGFzc2VzL1VSTFNlYXJjaFBhcmFtcy5qcydcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuL2NsYXNzZXMvRm9ybURhdGEuanMnXG5pbXBvcnQgQmxvYiBmcm9tICcuL2NsYXNzZXMvQmxvYi5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc0Jyb3dzZXI6IHRydWUsXG4gIGNsYXNzZXM6IHtcbiAgICBVUkxTZWFyY2hQYXJhbXMsXG4gICAgRm9ybURhdGEsXG4gICAgQmxvYlxuICB9LFxuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmaWxlJywgJ2Jsb2InLCAndXJsJywgJ2RhdGEnXVxufTtcbiIsImNvbnN0IGhhc0Jyb3dzZXJFbnYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5jb25zdCBfbmF2aWdhdG9yID0gdHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yIHx8IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlckVudiA9IGhhc0Jyb3dzZXJFbnYgJiZcbiAgKCFfbmF2aWdhdG9yIHx8IFsnUmVhY3ROYXRpdmUnLCAnTmF0aXZlU2NyaXB0JywgJ05TJ10uaW5kZXhPZihfbmF2aWdhdG9yLnByb2R1Y3QpIDwgMCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIHdlYldvcmtlciBlbnZpcm9ubWVudFxuICpcbiAqIEFsdGhvdWdoIHRoZSBgaXNTdGFuZGFyZEJyb3dzZXJFbnZgIG1ldGhvZCBpbmRpY2F0ZXMgdGhhdFxuICogYGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyYCwgdGhlIFdlYldvcmtlciB3aWxsIHN0aWxsIGJlXG4gKiBmaWx0ZXJlZCBvdXQgZHVlIHRvIGl0cyBqdWRnbWVudCBzdGFuZGFyZFxuICogYHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdgLlxuICogVGhpcyBsZWFkcyB0byBhIHByb2JsZW0gd2hlbiBheGlvcyBwb3N0IGBGb3JtRGF0YWAgaW4gd2ViV29ya2VyXG4gKi9cbmNvbnN0IGhhc1N0YW5kYXJkQnJvd3NlcldlYldvcmtlckVudiA9ICgoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSAmJlxuICAgIHR5cGVvZiBzZWxmLmltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbidcbiAgKTtcbn0pKCk7XG5cbmNvbnN0IG9yaWdpbiA9IGhhc0Jyb3dzZXJFbnYgJiYgd2luZG93LmxvY2F0aW9uLmhyZWYgfHwgJ2h0dHA6Ly9sb2NhbGhvc3QnO1xuXG5leHBvcnQge1xuICBoYXNCcm93c2VyRW52LFxuICBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYsXG4gIGhhc1N0YW5kYXJkQnJvd3NlckVudixcbiAgX25hdmlnYXRvciBhcyBuYXZpZ2F0b3IsXG4gIG9yaWdpblxufVxuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4vbm9kZS9pbmRleC5qcyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2NvbW1vbi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4udXRpbHMsXG4gIC4uLnBsYXRmb3JtXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b0Zvcm1EYXRhKGRhdGEsIG5ldyBwbGF0Zm9ybS5jbGFzc2VzLlVSTFNlYXJjaFBhcmFtcygpLCBPYmplY3QuYXNzaWduKHtcbiAgICB2aXNpdG9yOiBmdW5jdGlvbih2YWx1ZSwga2V5LCBwYXRoLCBoZWxwZXJzKSB7XG4gICAgICBpZiAocGxhdGZvcm0uaXNOb2RlICYmIHV0aWxzLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhlbHBlcnMuZGVmYXVsdFZpc2l0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIG9wdGlvbnMpKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZyBsaWtlIGBmb29beF1beV1bel1gIGFuZCByZXR1cm5zIGFuIGFycmF5IGxpa2UgYFsnZm9vJywgJ3gnLCAneScsICd6J11cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKlxuICogQHJldHVybnMgQW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQcm9wUGF0aChuYW1lKSB7XG4gIC8vIGZvb1t4XVt5XVt6XVxuICAvLyBmb28ueC55LnpcbiAgLy8gZm9vLXgteS16XG4gIC8vIGZvbyB4IHkgelxuICByZXR1cm4gdXRpbHMubWF0Y2hBbGwoL1xcdyt8XFxbKFxcdyopXS9nLCBuYW1lKS5tYXAobWF0Y2ggPT4ge1xuICAgIHJldHVybiBtYXRjaFswXSA9PT0gJ1tdJyA/ICcnIDogbWF0Y2hbMV0gfHwgbWF0Y2hbMF07XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNvbnZlcnQgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleXMgYW5kIHZhbHVlcyBhcyB0aGUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXJyKTtcbiAgbGV0IGk7XG4gIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICBsZXQga2V5O1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIG9ialtrZXldID0gYXJyW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIEZvcm1EYXRhIG9iamVjdCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gY29udmVydCB0byBKU09OLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCBhbnk+IHwgbnVsbH0gVGhlIGNvbnZlcnRlZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZvcm1EYXRhVG9KU09OKGZvcm1EYXRhKSB7XG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0LCBpbmRleCkge1xuICAgIGxldCBuYW1lID0gcGF0aFtpbmRleCsrXTtcblxuICAgIGlmIChuYW1lID09PSAnX19wcm90b19fJykgcmV0dXJuIHRydWU7XG5cbiAgICBjb25zdCBpc051bWVyaWNLZXkgPSBOdW1iZXIuaXNGaW5pdGUoK25hbWUpO1xuICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID49IHBhdGgubGVuZ3RoO1xuICAgIG5hbWUgPSAhbmFtZSAmJiB1dGlscy5pc0FycmF5KHRhcmdldCkgPyB0YXJnZXQubGVuZ3RoIDogbmFtZTtcblxuICAgIGlmIChpc0xhc3QpIHtcbiAgICAgIGlmICh1dGlscy5oYXNPd25Qcm9wKHRhcmdldCwgbmFtZSkpIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gW3RhcmdldFtuYW1lXSwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0W25hbWVdIHx8ICF1dGlscy5pc09iamVjdCh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBidWlsZFBhdGgocGF0aCwgdmFsdWUsIHRhcmdldFtuYW1lXSwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCAmJiB1dGlscy5pc0FycmF5KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IGFycmF5VG9PYmplY3QodGFyZ2V0W25hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgfVxuXG4gIGlmICh1dGlscy5pc0Zvcm1EYXRhKGZvcm1EYXRhKSAmJiB1dGlscy5pc0Z1bmN0aW9uKGZvcm1EYXRhLmVudHJpZXMpKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoRW50cnkoZm9ybURhdGEsIChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgYnVpbGRQYXRoKHBhcnNlUHJvcFBhdGgobmFtZSksIHZhbHVlLCBvYmosIDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtRGF0YVRvSlNPTjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi4vaGVscGVycy90b0Zvcm1EYXRhLmpzJztcbmltcG9ydCB0b1VSTEVuY29kZWRGb3JtIGZyb20gJy4uL2hlbHBlcnMvdG9VUkxFbmNvZGVkRm9ybS5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IGZvcm1EYXRhVG9KU09OIGZyb20gJy4uL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMnO1xuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nLCB0cmllcyB0byBwYXJzZSBpdCwgYW5kIGlmIGl0IGZhaWxzLCBpdCByZXR1cm5zIHRoZSBzdHJpbmdpZmllZCB2ZXJzaW9uXG4gKiBvZiB0aGUgaW5wdXRcbiAqXG4gKiBAcGFyYW0ge2FueX0gcmF3VmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgc3RyaW5naWZpZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJzZXIgLSBBIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIGEgc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVuY29kZXIgLSBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHN0cmluZy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZ2lmaWVkIHZlcnNpb24gb2YgdGhlIHJhd1ZhbHVlLlxuICovXG5mdW5jdGlvbiBzdHJpbmdpZnlTYWZlbHkocmF3VmFsdWUsIHBhcnNlciwgZW5jb2Rlcikge1xuICBpZiAodXRpbHMuaXNTdHJpbmcocmF3VmFsdWUpKSB7XG4gICAgdHJ5IHtcbiAgICAgIChwYXJzZXIgfHwgSlNPTi5wYXJzZSkocmF3VmFsdWUpO1xuICAgICAgcmV0dXJuIHV0aWxzLnRyaW0ocmF3VmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgIT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGVuY29kZXIgfHwgSlNPTi5zdHJpbmdpZnkpKHJhd1ZhbHVlKTtcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG5cbiAgdHJhbnNpdGlvbmFsOiB0cmFuc2l0aW9uYWxEZWZhdWx0cyxcblxuICBhZGFwdGVyOiBbJ3hocicsICdodHRwJywgJ2ZldGNoJ10sXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXRDb250ZW50VHlwZSgpIHx8ICcnO1xuICAgIGNvbnN0IGhhc0pTT05Db250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xO1xuICAgIGNvbnN0IGlzT2JqZWN0UGF5bG9hZCA9IHV0aWxzLmlzT2JqZWN0KGRhdGEpO1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCAmJiB1dGlscy5pc0hUTUxGb3JtKGRhdGEpKSB7XG4gICAgICBkYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRm9ybURhdGEgPSB1dGlscy5pc0Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgaWYgKGlzRm9ybURhdGEpIHtcbiAgICAgIHJldHVybiBoYXNKU09OQ29udGVudFR5cGUgPyBKU09OLnN0cmluZ2lmeShmb3JtRGF0YVRvSlNPTihkYXRhKSkgOiBkYXRhO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1JlYWRhYmxlU3RyZWFtKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnLCBmYWxzZSk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGxldCBpc0ZpbGVMaXN0O1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCkge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRvVVJMRW5jb2RlZEZvcm0oZGF0YSwgdGhpcy5mb3JtU2VyaWFsaXplcikudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKChpc0ZpbGVMaXN0ID0gdXRpbHMuaXNGaWxlTGlzdChkYXRhKSkgfHwgY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpID4gLTEpIHtcbiAgICAgICAgY29uc3QgX0Zvcm1EYXRhID0gdGhpcy5lbnYgJiYgdGhpcy5lbnYuRm9ybURhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRvRm9ybURhdGEoXG4gICAgICAgICAgaXNGaWxlTGlzdCA/IHsnZmlsZXNbXSc6IGRhdGF9IDogZGF0YSxcbiAgICAgICAgICBfRm9ybURhdGEgJiYgbmV3IF9Gb3JtRGF0YSgpLFxuICAgICAgICAgIHRoaXMuZm9ybVNlcmlhbGl6ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkIHx8IGhhc0pTT05Db250ZW50VHlwZSApIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nLCBmYWxzZSk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgY29uc3QgZm9yY2VkSlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLmZvcmNlZEpTT05QYXJzaW5nO1xuICAgIGNvbnN0IEpTT05SZXF1ZXN0ZWQgPSB0aGlzLnJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nO1xuXG4gICAgaWYgKHV0aWxzLmlzUmVzcG9uc2UoZGF0YSkgfHwgdXRpbHMuaXNSZWFkYWJsZVN0cmVhbShkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEgJiYgdXRpbHMuaXNTdHJpbmcoZGF0YSkgJiYgKChmb3JjZWRKU09OUGFyc2luZyAmJiAhdGhpcy5yZXNwb25zZVR5cGUpIHx8IEpTT05SZXF1ZXN0ZWQpKSB7XG4gICAgICBjb25zdCBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgICBjb25zdCBzdHJpY3RKU09OUGFyc2luZyA9ICFzaWxlbnRKU09OUGFyc2luZyAmJiBKU09OUmVxdWVzdGVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgdGhpcywgbnVsbCwgdGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIGVudjoge1xuICAgIEZvcm1EYXRhOiBwbGF0Zm9ybS5jbGFzc2VzLkZvcm1EYXRhLFxuICAgIEJsb2I6IHBsYXRmb3JtLmNsYXNzZXMuQmxvYlxuICB9LFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH0sXG5cbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCddLCAobWV0aG9kKSA9PiB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbi8vIFJhd0F4aW9zSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbmNvbnN0IGlnbm9yZUR1cGxpY2F0ZU9mID0gdXRpbHMudG9PYmplY3RTZXQoW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl0pO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3SGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKlxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgcmF3SGVhZGVycyA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IHt9O1xuICBsZXQga2V5O1xuICBsZXQgdmFsO1xuICBsZXQgaTtcblxuICByYXdIZWFkZXJzICYmIHJhd0hlYWRlcnMuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gbGluZS5zdWJzdHJpbmcoMCwgaSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gbGluZS5zdWJzdHJpbmcoaSArIDEpLnRyaW0oKTtcblxuICAgIGlmICgha2V5IHx8IChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZltrZXldKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgaWYgKHBhcnNlZFtrZXldKSB7XG4gICAgICAgIHBhcnNlZFtrZXldLnB1c2godmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gW3ZhbF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBwYXJzZUhlYWRlcnMgZnJvbSAnLi4vaGVscGVycy9wYXJzZUhlYWRlcnMuanMnO1xuXG5jb25zdCAkaW50ZXJuYWxzID0gU3ltYm9sKCdpbnRlcm5hbHMnKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyICYmIFN0cmluZyhoZWFkZXIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5tYXAobm9ybWFsaXplVmFsdWUpIDogU3RyaW5nKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUb2tlbnMoc3RyKSB7XG4gIGNvbnN0IHRva2VucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IHRva2Vuc1JFID0gLyhbXlxccyw7PV0rKVxccyooPzo9XFxzKihbXiw7XSspKT8vZztcbiAgbGV0IG1hdGNoO1xuXG4gIHdoaWxlICgobWF0Y2ggPSB0b2tlbnNSRS5leGVjKHN0cikpKSB7XG4gICAgdG9rZW5zW21hdGNoWzFdXSA9IG1hdGNoWzJdO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuY29uc3QgaXNWYWxpZEhlYWRlck5hbWUgPSAoc3RyKSA9PiAvXlstX2EtekEtWjAtOV5gfH4sISMkJSYnKisuXSskLy50ZXN0KHN0ci50cmltKCkpO1xuXG5mdW5jdGlvbiBtYXRjaEhlYWRlclZhbHVlKGNvbnRleHQsIHZhbHVlLCBoZWFkZXIsIGZpbHRlciwgaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcywgdmFsdWUsIGhlYWRlcik7XG4gIH1cblxuICBpZiAoaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gICAgdmFsdWUgPSBoZWFkZXI7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlKSkgcmV0dXJuO1xuXG4gIGlmICh1dGlscy5pc1N0cmluZyhmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XG4gIH1cblxuICBpZiAodXRpbHMuaXNSZWdFeHAoZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIudGVzdCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0SGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyLnRyaW0oKVxuICAgIC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyhbYS16XFxkXSkoXFx3KikvZywgKHcsIGNoYXIsIHN0cikgPT4ge1xuICAgICAgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKSArIHN0cjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRBY2Nlc3NvcnMob2JqLCBoZWFkZXIpIHtcbiAgY29uc3QgYWNjZXNzb3JOYW1lID0gdXRpbHMudG9DYW1lbENhc2UoJyAnICsgaGVhZGVyKTtcblxuICBbJ2dldCcsICdzZXQnLCAnaGFzJ10uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBtZXRob2ROYW1lICsgYWNjZXNzb3JOYW1lLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIGhlYWRlciwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5jbGFzcyBBeGlvc0hlYWRlcnMge1xuICBjb25zdHJ1Y3RvcihoZWFkZXJzKSB7XG4gICAgaGVhZGVycyAmJiB0aGlzLnNldChoZWFkZXJzKTtcbiAgfVxuXG4gIHNldChoZWFkZXIsIHZhbHVlT3JSZXdyaXRlLCByZXdyaXRlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFsSGVhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGVhZGVyIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBsSGVhZGVyKTtcblxuICAgICAgaWYoIWtleSB8fCBzZWxmW2tleV0gPT09IHVuZGVmaW5lZCB8fCBfcmV3cml0ZSA9PT0gdHJ1ZSB8fCAoX3Jld3JpdGUgPT09IHVuZGVmaW5lZCAmJiBzZWxmW2tleV0gIT09IGZhbHNlKSkge1xuICAgICAgICBzZWxmW2tleSB8fCBfaGVhZGVyXSA9IG5vcm1hbGl6ZVZhbHVlKF92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGVhZGVycyA9IChoZWFkZXJzLCBfcmV3cml0ZSkgPT5cbiAgICAgIHV0aWxzLmZvckVhY2goaGVhZGVycywgKF92YWx1ZSwgX2hlYWRlcikgPT4gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpKTtcblxuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KGhlYWRlcikgfHwgaGVhZGVyIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgc2V0SGVhZGVycyhoZWFkZXIsIHZhbHVlT3JSZXdyaXRlKVxuICAgIH0gZWxzZSBpZih1dGlscy5pc1N0cmluZyhoZWFkZXIpICYmIChoZWFkZXIgPSBoZWFkZXIudHJpbSgpKSAmJiAhaXNWYWxpZEhlYWRlck5hbWUoaGVhZGVyKSkge1xuICAgICAgc2V0SGVhZGVycyhwYXJzZUhlYWRlcnMoaGVhZGVyKSwgdmFsdWVPclJld3JpdGUpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoaGVhZGVyKSAmJiB1dGlscy5pc0l0ZXJhYmxlKGhlYWRlcikpIHtcbiAgICAgIGxldCBvYmogPSB7fSwgZGVzdCwga2V5O1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBoZWFkZXIpIHtcbiAgICAgICAgaWYgKCF1dGlscy5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgIHRocm93IFR5cGVFcnJvcignT2JqZWN0IGl0ZXJhdG9yIG11c3QgcmV0dXJuIGEga2V5LXZhbHVlIHBhaXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9ialtrZXkgPSBlbnRyeVswXV0gPSAoZGVzdCA9IG9ialtrZXldKSA/XG4gICAgICAgICAgKHV0aWxzLmlzQXJyYXkoZGVzdCkgPyBbLi4uZGVzdCwgZW50cnlbMV1dIDogW2Rlc3QsIGVudHJ5WzFdXSkgOiBlbnRyeVsxXTtcbiAgICAgIH1cblxuICAgICAgc2V0SGVhZGVycyhvYmosIHZhbHVlT3JSZXdyaXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIgIT0gbnVsbCAmJiBzZXRIZWFkZXIodmFsdWVPclJld3JpdGUsIGhlYWRlciwgcmV3cml0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoaGVhZGVyLCBwYXJzZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcblxuICAgICAgICBpZiAoIXBhcnNlcikge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZXIgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbnModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuY2FsbCh0aGlzLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1JlZ0V4cChwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5leGVjKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcnNlciBtdXN0IGJlIGJvb2xlYW58cmVnZXhwfGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICByZXR1cm4gISEoa2V5ICYmIHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRlbGV0ZShoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlSGVhZGVyKF9oZWFkZXIpIHtcbiAgICAgIF9oZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmIChfaGVhZGVyKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgX2hlYWRlcik7XG5cbiAgICAgICAgaWYgKGtleSAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZShzZWxmLCBzZWxmW2tleV0sIGtleSwgbWF0Y2hlcikpKSB7XG4gICAgICAgICAgZGVsZXRlIHNlbGZba2V5XTtcblxuICAgICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXkoaGVhZGVyKSkge1xuICAgICAgaGVhZGVyLmZvckVhY2goZGVsZXRlSGVhZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlSGVhZGVyKGhlYWRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cblxuICBjbGVhcihtYXRjaGVyKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZighbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyLCB0cnVlKSkge1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIG5vcm1hbGl6ZShmb3JtYXQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KGhlYWRlcnMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgc2VsZltrZXldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBmb3JtYXQgPyBmb3JtYXRIZWFkZXIoaGVhZGVyKSA6IFN0cmluZyhoZWFkZXIpLnRyaW0oKTtcblxuICAgICAgaWYgKG5vcm1hbGl6ZWQgIT09IGhlYWRlcikge1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgfVxuXG4gICAgICBzZWxmW25vcm1hbGl6ZWRdID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuXG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWRdID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29uY2F0KC4uLnRhcmdldHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5jb25jYXQodGhpcywgLi4udGFyZ2V0cyk7XG4gIH1cblxuICB0b0pTT04oYXNTdHJpbmdzKSB7XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlICYmIChvYmpbaGVhZGVyXSA9IGFzU3RyaW5ncyAmJiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKS5tYXAoKFtoZWFkZXIsIHZhbHVlXSkgPT4gaGVhZGVyICsgJzogJyArIHZhbHVlKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIGdldFNldENvb2tpZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCJzZXQtY29va2llXCIpIHx8IFtdO1xuICB9XG5cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiAnQXhpb3NIZWFkZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgdGhpcyA/IHRoaW5nIDogbmV3IHRoaXModGhpbmcpO1xuICB9XG5cbiAgc3RhdGljIGNvbmNhdChmaXJzdCwgLi4udGFyZ2V0cykge1xuICAgIGNvbnN0IGNvbXB1dGVkID0gbmV3IHRoaXMoZmlyc3QpO1xuXG4gICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGNvbXB1dGVkLnNldCh0YXJnZXQpKTtcblxuICAgIHJldHVybiBjb21wdXRlZDtcbiAgfVxuXG4gIHN0YXRpYyBhY2Nlc3NvcihoZWFkZXIpIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzWyRpbnRlcm5hbHNdID0gKHRoaXNbJGludGVybmFsc10gPSB7XG4gICAgICBhY2Nlc3NvcnM6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSBpbnRlcm5hbHMuYWNjZXNzb3JzO1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlO1xuXG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFhY2Nlc3NvcnNbbEhlYWRlcl0pIHtcbiAgICAgICAgYnVpbGRBY2Nlc3NvcnMocHJvdG90eXBlLCBfaGVhZGVyKTtcbiAgICAgICAgYWNjZXNzb3JzW2xIZWFkZXJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlscy5pc0FycmF5KGhlYWRlcikgPyBoZWFkZXIuZm9yRWFjaChkZWZpbmVBY2Nlc3NvcikgOiBkZWZpbmVBY2Nlc3NvcihoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFsnQ29udGVudC1UeXBlJywgJ0NvbnRlbnQtTGVuZ3RoJywgJ0FjY2VwdCcsICdBY2NlcHQtRW5jb2RpbmcnLCAnVXNlci1BZ2VudCcsICdBdXRob3JpemF0aW9uJ10pO1xuXG4vLyByZXNlcnZlZCBuYW1lcyBob3RmaXhcbnV0aWxzLnJlZHVjZURlc2NyaXB0b3JzKEF4aW9zSGVhZGVycy5wcm90b3R5cGUsICh7dmFsdWV9LCBrZXkpID0+IHtcbiAgbGV0IG1hcHBlZCA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpOyAvLyBtYXAgYHNldGAgPT4gYFNldGBcbiAgcmV0dXJuIHtcbiAgICBnZXQ6ICgpID0+IHZhbHVlLFxuICAgIHNldChoZWFkZXJWYWx1ZSkge1xuICAgICAgdGhpc1ttYXBwZWRdID0gaGVhZGVyVmFsdWU7XG4gICAgfVxuICB9XG59KTtcblxudXRpbHMuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMpO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvc0hlYWRlcnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHBhcmFtIHs/T2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2Ugb2JqZWN0XG4gKlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGZucywgcmVzcG9uc2UpIHtcbiAgY29uc3QgY29uZmlnID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgY29uc3QgY29udGV4dCA9IHJlc3BvbnNlIHx8IGNvbmZpZztcbiAgY29uc3QgaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbnRleHQuaGVhZGVycyk7XG4gIGxldCBkYXRhID0gY29udGV4dC5kYXRhO1xuXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb25maWcsIGRhdGEsIGhlYWRlcnMubm9ybWFsaXplKCksIHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzIDogdW5kZWZpbmVkKTtcbiAgfSk7XG5cbiAgaGVhZGVycy5ub3JtYWxpemUoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxlZEVycm9yYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3Q9fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gcmVxdWVzdCBUaGUgcmVxdWVzdC5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsZWRFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBBeGlvc0Vycm9yLmNhbGwodGhpcywgbWVzc2FnZSA9PSBudWxsID8gJ2NhbmNlbGVkJyA6IG1lc3NhZ2UsIEF4aW9zRXJyb3IuRVJSX0NBTkNFTEVELCBjb25maWcsIHJlcXVlc3QpO1xuICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG59XG5cbnV0aWxzLmluaGVyaXRzKENhbmNlbGVkRXJyb3IsIEF4aW9zRXJyb3IsIHtcbiAgX19DQU5DRUxfXzogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGVkRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gVGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICBjb25zdCB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgW0F4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0VdW01hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAtIDRdLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VQcm90b2NvbCh1cmwpIHtcbiAgY29uc3QgbWF0Y2ggPSAvXihbLStcXHddezEsMjV9KSg6P1xcL1xcL3w6KS8uZXhlYyh1cmwpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGRhdGEgbWF4UmF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtzYW1wbGVzQ291bnQ9IDEwXVxuICogQHBhcmFtIHtOdW1iZXJ9IFttaW49IDEwMDBdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHNwZWVkb21ldGVyKHNhbXBsZXNDb3VudCwgbWluKSB7XG4gIHNhbXBsZXNDb3VudCA9IHNhbXBsZXNDb3VudCB8fCAxMDtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgY29uc3QgdGltZXN0YW1wcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBsZXQgaGVhZCA9IDA7XG4gIGxldCB0YWlsID0gMDtcbiAgbGV0IGZpcnN0U2FtcGxlVFM7XG5cbiAgbWluID0gbWluICE9PSB1bmRlZmluZWQgPyBtaW4gOiAxMDAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiBwdXNoKGNodW5rTGVuZ3RoKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGNvbnN0IHN0YXJ0ZWRBdCA9IHRpbWVzdGFtcHNbdGFpbF07XG5cbiAgICBpZiAoIWZpcnN0U2FtcGxlVFMpIHtcbiAgICAgIGZpcnN0U2FtcGxlVFMgPSBub3c7XG4gICAgfVxuXG4gICAgYnl0ZXNbaGVhZF0gPSBjaHVua0xlbmd0aDtcbiAgICB0aW1lc3RhbXBzW2hlYWRdID0gbm93O1xuXG4gICAgbGV0IGkgPSB0YWlsO1xuICAgIGxldCBieXRlc0NvdW50ID0gMDtcblxuICAgIHdoaWxlIChpICE9PSBoZWFkKSB7XG4gICAgICBieXRlc0NvdW50ICs9IGJ5dGVzW2krK107XG4gICAgICBpID0gaSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBoZWFkID0gKGhlYWQgKyAxKSAlIHNhbXBsZXNDb3VudDtcblxuICAgIGlmIChoZWFkID09PSB0YWlsKSB7XG4gICAgICB0YWlsID0gKHRhaWwgKyAxKSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG5cbiAgICBpZiAobm93IC0gZmlyc3RTYW1wbGVUUyA8IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhc3NlZCA9IHN0YXJ0ZWRBdCAmJiBub3cgLSBzdGFydGVkQXQ7XG5cbiAgICByZXR1cm4gcGFzc2VkID8gTWF0aC5yb3VuZChieXRlc0NvdW50ICogMTAwMCAvIHBhc3NlZCkgOiB1bmRlZmluZWQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWVkb21ldGVyO1xuIiwiLyoqXG4gKiBUaHJvdHRsZSBkZWNvcmF0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge051bWJlcn0gZnJlcVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCBmcmVxKSB7XG4gIGxldCB0aW1lc3RhbXAgPSAwO1xuICBsZXQgdGhyZXNob2xkID0gMTAwMCAvIGZyZXE7XG4gIGxldCBsYXN0QXJncztcbiAgbGV0IHRpbWVyO1xuXG4gIGNvbnN0IGludm9rZSA9IChhcmdzLCBub3cgPSBEYXRlLm5vdygpKSA9PiB7XG4gICAgdGltZXN0YW1wID0gbm93O1xuICAgIGxhc3RBcmdzID0gbnVsbDtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9XG5cbiAgY29uc3QgdGhyb3R0bGVkID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IHBhc3NlZCA9IG5vdyAtIHRpbWVzdGFtcDtcbiAgICBpZiAoIHBhc3NlZCA+PSB0aHJlc2hvbGQpIHtcbiAgICAgIGludm9rZShhcmdzLCBub3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgICBpZiAoIXRpbWVyKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICAgIGludm9rZShsYXN0QXJncylcbiAgICAgICAgfSwgdGhyZXNob2xkIC0gcGFzc2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBmbHVzaCA9ICgpID0+IGxhc3RBcmdzICYmIGludm9rZShsYXN0QXJncyk7XG5cbiAgcmV0dXJuIFt0aHJvdHRsZWQsIGZsdXNoXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhyb3R0bGU7XG4iLCJpbXBvcnQgc3BlZWRvbWV0ZXIgZnJvbSBcIi4vc3BlZWRvbWV0ZXIuanNcIjtcbmltcG9ydCB0aHJvdHRsZSBmcm9tIFwiLi90aHJvdHRsZS5qc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi91dGlscy5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NFdmVudFJlZHVjZXIgPSAobGlzdGVuZXIsIGlzRG93bmxvYWRTdHJlYW0sIGZyZXEgPSAzKSA9PiB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG5cbiAgcmV0dXJuIHRocm90dGxlKGUgPT4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm9ncmVzc0J5dGVzID0gbG9hZGVkIC0gYnl0ZXNOb3RpZmllZDtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuICAgIGNvbnN0IGluUmFuZ2UgPSBsb2FkZWQgPD0gdG90YWw7XG5cbiAgICBieXRlc05vdGlmaWVkID0gbG9hZGVkO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGxvYWRlZCxcbiAgICAgIHRvdGFsLFxuICAgICAgcHJvZ3Jlc3M6IHRvdGFsID8gKGxvYWRlZCAvIHRvdGFsKSA6IHVuZGVmaW5lZCxcbiAgICAgIGJ5dGVzOiBwcm9ncmVzc0J5dGVzLFxuICAgICAgcmF0ZTogcmF0ZSA/IHJhdGUgOiB1bmRlZmluZWQsXG4gICAgICBlc3RpbWF0ZWQ6IHJhdGUgJiYgdG90YWwgJiYgaW5SYW5nZSA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBsZW5ndGhDb21wdXRhYmxlOiB0b3RhbCAhPSBudWxsLFxuICAgICAgW2lzRG93bmxvYWRTdHJlYW0gPyAnZG93bmxvYWQnIDogJ3VwbG9hZCddOiB0cnVlXG4gICAgfTtcblxuICAgIGxpc3RlbmVyKGRhdGEpO1xuICB9LCBmcmVxKTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2dyZXNzRXZlbnREZWNvcmF0b3IgPSAodG90YWwsIHRocm90dGxlZCkgPT4ge1xuICBjb25zdCBsZW5ndGhDb21wdXRhYmxlID0gdG90YWwgIT0gbnVsbDtcblxuICByZXR1cm4gWyhsb2FkZWQpID0+IHRocm90dGxlZFswXSh7XG4gICAgbGVuZ3RoQ29tcHV0YWJsZSxcbiAgICB0b3RhbCxcbiAgICBsb2FkZWRcbiAgfSksIHRocm90dGxlZFsxXV07XG59XG5cbmV4cG9ydCBjb25zdCBhc3luY0RlY29yYXRvciA9IChmbikgPT4gKC4uLmFyZ3MpID0+IHV0aWxzLmFzYXAoKCkgPT4gZm4oLi4uYXJncykpO1xuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52ID8gKChvcmlnaW4sIGlzTVNJRSkgPT4gKHVybCkgPT4ge1xuICB1cmwgPSBuZXcgVVJMKHVybCwgcGxhdGZvcm0ub3JpZ2luKTtcblxuICByZXR1cm4gKFxuICAgIG9yaWdpbi5wcm90b2NvbCA9PT0gdXJsLnByb3RvY29sICYmXG4gICAgb3JpZ2luLmhvc3QgPT09IHVybC5ob3N0ICYmXG4gICAgKGlzTVNJRSB8fCBvcmlnaW4ucG9ydCA9PT0gdXJsLnBvcnQpXG4gICk7XG59KShcbiAgbmV3IFVSTChwbGF0Zm9ybS5vcmlnaW4pLFxuICBwbGF0Zm9ybS5uYXZpZ2F0b3IgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChwbGF0Zm9ybS5uYXZpZ2F0b3IudXNlckFnZW50KVxuKSA6ICgpID0+IHRydWU7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICB7XG4gICAgd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBbbmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSldO1xuXG4gICAgICB1dGlscy5pc051bWJlcihleHBpcmVzKSAmJiBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG5cbiAgICAgIHV0aWxzLmlzU3RyaW5nKHBhdGgpICYmIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcblxuICAgICAgdXRpbHMuaXNTdHJpbmcoZG9tYWluKSAmJiBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuXG4gICAgICBzZWN1cmUgPT09IHRydWUgJiYgY29va2llLnB1c2goJ3NlY3VyZScpO1xuXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICB9LFxuXG4gICAgcmVhZChuYW1lKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgIH0sXG5cbiAgICByZW1vdmUobmFtZSkge1xuICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICB9XG4gIH1cblxuICA6XG5cbiAgLy8gTm9uLXN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICB7XG4gICAgd3JpdGUoKSB7fSxcbiAgICByZWFkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmUoKSB7fVxuICB9O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLz9cXC8kLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XG5pbXBvcnQgY29tYmluZVVSTHMgZnJvbSAnLi4vaGVscGVycy9jb21iaW5lVVJMcy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCwgYWxsb3dBYnNvbHV0ZVVybHMpIHtcbiAgbGV0IGlzUmVsYXRpdmVVcmwgPSAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpO1xuICBpZiAoYmFzZVVSTCAmJiAoaXNSZWxhdGl2ZVVybCB8fCBhbGxvd0Fic29sdXRlVXJscyA9PSBmYWxzZSkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi9BeGlvc0hlYWRlcnMuanNcIjtcblxuY29uc3QgaGVhZGVyc1RvT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyBpbnN0YW5jZW9mIEF4aW9zSGVhZGVycyA/IHsgLi4udGhpbmcgfSA6IHRoaW5nO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICBjb25zdCBjb25maWcgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSwgcHJvcCwgY2FzZWxlc3MpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlLmNhbGwoe2Nhc2VsZXNzfSwgdGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKGEsIGIsIHByb3AgLCBjYXNlbGVzcykge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiLCBwcm9wICwgY2FzZWxlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhLCBwcm9wICwgY2FzZWxlc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihhLCBiKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChiKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYik7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMoYSwgYiwgcHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWVyZ2VNYXAgPSB7XG4gICAgdXJsOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIG1ldGhvZDogdmFsdWVGcm9tQ29uZmlnMixcbiAgICBkYXRhOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGJhc2VVUkw6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNmb3JtUmVxdWVzdDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXNwb25zZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBwYXJhbXNTZXJpYWxpemVyOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRpbWVvdXQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dE1lc3NhZ2U6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgd2l0aENyZWRlbnRpYWxzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhYU1JGVG9rZW46IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYWRhcHRlcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZVR5cGU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkNvb2tpZU5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkhlYWRlck5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25VcGxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgZGVjb21wcmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhDb250ZW50TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heEJvZHlMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYmVmb3JlUmVkaXJlY3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNwb3J0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwc0FnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGNhbmNlbFRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHNvY2tldFBhdGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VFbmNvZGluZzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB2YWxpZGF0ZVN0YXR1czogbWVyZ2VEaXJlY3RLZXlzLFxuICAgIGhlYWRlcnM6IChhLCBiICwgcHJvcCkgPT4gbWVyZ2VEZWVwUHJvcGVydGllcyhoZWFkZXJzVG9PYmplY3QoYSksIGhlYWRlcnNUb09iamVjdChiKSxwcm9wLCB0cnVlKVxuICB9O1xuXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnMSwgY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIGNvbnN0IG1lcmdlID0gbWVyZ2VNYXBbcHJvcF0gfHwgbWVyZ2VEZWVwUHJvcGVydGllcztcbiAgICBjb25zdCBjb25maWdWYWx1ZSA9IG1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0sIHByb3ApO1xuICAgICh1dGlscy5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cykgfHwgKGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1ZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsImltcG9ydCBwbGF0Zm9ybSBmcm9tIFwiLi4vcGxhdGZvcm0vaW5kZXguanNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMuanNcIjtcbmltcG9ydCBpc1VSTFNhbWVPcmlnaW4gZnJvbSBcIi4vaXNVUkxTYW1lT3JpZ2luLmpzXCI7XG5pbXBvcnQgY29va2llcyBmcm9tIFwiLi9jb29raWVzLmpzXCI7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tIFwiLi4vY29yZS9idWlsZEZ1bGxQYXRoLmpzXCI7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSBcIi4uL2NvcmUvbWVyZ2VDb25maWcuanNcIjtcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSBcIi4uL2NvcmUvQXhpb3NIZWFkZXJzLmpzXCI7XG5pbXBvcnQgYnVpbGRVUkwgZnJvbSBcIi4vYnVpbGRVUkwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGNvbmZpZykgPT4ge1xuICBjb25zdCBuZXdDb25maWcgPSBtZXJnZUNvbmZpZyh7fSwgY29uZmlnKTtcblxuICBsZXQge2RhdGEsIHdpdGhYU1JGVG9rZW4sIHhzcmZIZWFkZXJOYW1lLCB4c3JmQ29va2llTmFtZSwgaGVhZGVycywgYXV0aH0gPSBuZXdDb25maWc7XG5cbiAgbmV3Q29uZmlnLmhlYWRlcnMgPSBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oaGVhZGVycyk7XG5cbiAgbmV3Q29uZmlnLnVybCA9IGJ1aWxkVVJMKGJ1aWxkRnVsbFBhdGgobmV3Q29uZmlnLmJhc2VVUkwsIG5ld0NvbmZpZy51cmwsIG5ld0NvbmZpZy5hbGxvd0Fic29sdXRlVXJscyksIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKTtcblxuICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gIGlmIChhdXRoKSB7XG4gICAgaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArXG4gICAgICBidG9hKChhdXRoLnVzZXJuYW1lIHx8ICcnKSArICc6JyArIChhdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgucGFzc3dvcmQpKSA6ICcnKSlcbiAgICApO1xuICB9XG5cbiAgbGV0IGNvbnRlbnRUeXBlO1xuXG4gIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpKSB7XG4gICAgaWYgKHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudiB8fCBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYpIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUodW5kZWZpbmVkKTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH0gZWxzZSBpZiAoKGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXRDb250ZW50VHlwZSgpKSAhPT0gZmFsc2UpIHtcbiAgICAgIC8vIGZpeCBzZW1pY29sb24gZHVwbGljYXRpb24gaXNzdWUgZm9yIFJlYWN0TmF0aXZlIEZvcm1EYXRhIGltcGxlbWVudGF0aW9uXG4gICAgICBjb25zdCBbdHlwZSwgLi4udG9rZW5zXSA9IGNvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKS5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKS5maWx0ZXIoQm9vbGVhbikgOiBbXTtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoW3R5cGUgfHwgJ211bHRpcGFydC9mb3JtLWRhdGEnLCAuLi50b2tlbnNdLmpvaW4oJzsgJykpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB4c3JmIGhlYWRlclxuICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cblxuICBpZiAocGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52KSB7XG4gICAgd2l0aFhTUkZUb2tlbiAmJiB1dGlscy5pc0Z1bmN0aW9uKHdpdGhYU1JGVG9rZW4pICYmICh3aXRoWFNSRlRva2VuID0gd2l0aFhTUkZUb2tlbihuZXdDb25maWcpKTtcblxuICAgIGlmICh3aXRoWFNSRlRva2VuIHx8ICh3aXRoWFNSRlRva2VuICE9PSBmYWxzZSAmJiBpc1VSTFNhbWVPcmlnaW4obmV3Q29uZmlnLnVybCkpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IHhzcmZIZWFkZXJOYW1lICYmIHhzcmZDb29raWVOYW1lICYmIGNvb2tpZXMucmVhZCh4c3JmQ29va2llTmFtZSk7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgaGVhZGVycy5zZXQoeHNyZkhlYWRlck5hbWUsIHhzcmZWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0NvbmZpZztcbn1cblxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHNldHRsZSBmcm9tICcuLy4uL2NvcmUvc2V0dGxlLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBwYXJzZVByb3RvY29sIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VQcm90b2NvbC5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQge3Byb2dyZXNzRXZlbnRSZWR1Y2VyfSBmcm9tICcuLi9oZWxwZXJzL3Byb2dyZXNzRXZlbnRSZWR1Y2VyLmpzJztcbmltcG9ydCByZXNvbHZlQ29uZmlnIGZyb20gXCIuLi9oZWxwZXJzL3Jlc29sdmVDb25maWcuanNcIjtcblxuY29uc3QgaXNYSFJBZGFwdGVyU3VwcG9ydGVkID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGRlZmF1bHQgaXNYSFJBZGFwdGVyU3VwcG9ydGVkICYmIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBjb25zdCBfY29uZmlnID0gcmVzb2x2ZUNvbmZpZyhjb25maWcpO1xuICAgIGxldCByZXF1ZXN0RGF0YSA9IF9jb25maWcuZGF0YTtcbiAgICBjb25zdCByZXF1ZXN0SGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKF9jb25maWcuaGVhZGVycykubm9ybWFsaXplKCk7XG4gICAgbGV0IHtyZXNwb25zZVR5cGUsIG9uVXBsb2FkUHJvZ3Jlc3MsIG9uRG93bmxvYWRQcm9ncmVzc30gPSBfY29uZmlnO1xuICAgIGxldCBvbkNhbmNlbGVkO1xuICAgIGxldCB1cGxvYWRUaHJvdHRsZWQsIGRvd25sb2FkVGhyb3R0bGVkO1xuICAgIGxldCBmbHVzaFVwbG9hZCwgZmx1c2hEb3dubG9hZDtcblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBmbHVzaFVwbG9hZCAmJiBmbHVzaFVwbG9hZCgpOyAvLyBmbHVzaCBldmVudHNcbiAgICAgIGZsdXNoRG93bmxvYWQgJiYgZmx1c2hEb3dubG9hZCgpOyAvLyBmbHVzaCBldmVudHNcblxuICAgICAgX2NvbmZpZy5jYW5jZWxUb2tlbiAmJiBfY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuXG4gICAgICBfY29uZmlnLnNpZ25hbCAmJiBfY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICByZXF1ZXN0Lm9wZW4oX2NvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgX2NvbmZpZy51cmwsIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBfY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKFxuICAgICAgICAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ICYmIHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nID9cbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKGZ1bmN0aW9uIF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCBmdW5jdGlvbiBfcmVqZWN0KGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoJ29ubG9hZGVuZCcgaW4gcmVxdWVzdCkge1xuICAgICAgLy8gVXNlIG9ubG9hZGVuZCBpZiBhdmFpbGFibGVcbiAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gb25sb2FkZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlIHRvIGVtdWxhdGUgb25sb2FkZW5kXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVhZHlzdGF0ZSBoYW5kbGVyIGlzIGNhbGxpbmcgYmVmb3JlIG9uZXJyb3Igb3Igb250aW1lb3V0IGhhbmRsZXJzLFxuICAgICAgICAvLyBzbyB3ZSBzaG91bGQgY2FsbCBvbmxvYWRlbmQgb24gdGhlIG5leHQgJ3RpY2snXG4gICAgICAgIHNldFRpbWVvdXQob25sb2FkZW5kKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBBeGlvc0Vycm9yLkVDT05OQUJPUlRFRCwgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdOZXR3b3JrIEVycm9yJywgQXhpb3NFcnJvci5FUlJfTkVUV09SSywgY29uZmlnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIGxldCB0aW1lb3V0RXJyb3JNZXNzYWdlID0gX2NvbmZpZy50aW1lb3V0ID8gJ3RpbWVvdXQgb2YgJyArIF9jb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBfY29uZmlnLnRyYW5zaXRpb25hbCB8fCB0cmFuc2l0aW9uYWxEZWZhdWx0cztcbiAgICAgIGlmIChfY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IF9jb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICByZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkICYmIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKG51bGwpO1xuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMudG9KU09OKCksIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKF9jb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIV9jb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IF9jb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAob25Eb3dubG9hZFByb2dyZXNzKSB7XG4gICAgICAoW2Rvd25sb2FkVGhyb3R0bGVkLCBmbHVzaERvd25sb2FkXSA9IHByb2dyZXNzRXZlbnRSZWR1Y2VyKG9uRG93bmxvYWRQcm9ncmVzcywgdHJ1ZSkpO1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGRvd25sb2FkVGhyb3R0bGVkKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmIChvblVwbG9hZFByb2dyZXNzICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICAoW3VwbG9hZFRocm90dGxlZCwgZmx1c2hVcGxvYWRdID0gcHJvZ3Jlc3NFdmVudFJlZHVjZXIob25VcGxvYWRQcm9ncmVzcykpO1xuXG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHVwbG9hZFRocm90dGxlZCk7XG5cbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmbHVzaFVwbG9hZCk7XG4gICAgfVxuXG4gICAgaWYgKF9jb25maWcuY2FuY2VsVG9rZW4gfHwgX2NvbmZpZy5zaWduYWwpIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBvbkNhbmNlbGVkID0gY2FuY2VsID0+IHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlamVjdCghY2FuY2VsIHx8IGNhbmNlbC50eXBlID8gbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnLCByZXF1ZXN0KSA6IGNhbmNlbCk7XG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBfY29uZmlnLmNhbmNlbFRva2VuICYmIF9jb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgaWYgKF9jb25maWcuc2lnbmFsKSB7XG4gICAgICAgIF9jb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBfY29uZmlnLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VQcm90b2NvbChfY29uZmlnLnVybCk7XG5cbiAgICBpZiAocHJvdG9jb2wgJiYgcGxhdGZvcm0ucHJvdG9jb2xzLmluZGV4T2YocHJvdG9jb2wpID09PSAtMSkge1xuICAgICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdVbnN1cHBvcnRlZCBwcm90b2NvbCAnICsgcHJvdG9jb2wgKyAnOicsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSBcIi4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzXCI7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tIFwiLi4vY29yZS9BeGlvc0Vycm9yLmpzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5jb25zdCBjb21wb3NlU2lnbmFscyA9IChzaWduYWxzLCB0aW1lb3V0KSA9PiB7XG4gIGNvbnN0IHtsZW5ndGh9ID0gKHNpZ25hbHMgPSBzaWduYWxzID8gc2lnbmFscy5maWx0ZXIoQm9vbGVhbikgOiBbXSk7XG5cbiAgaWYgKHRpbWVvdXQgfHwgbGVuZ3RoKSB7XG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBsZXQgYWJvcnRlZDtcblxuICAgIGNvbnN0IG9uYWJvcnQgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBpZiAoIWFib3J0ZWQpIHtcbiAgICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGNvbnN0IGVyciA9IHJlYXNvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVhc29uIDogdGhpcy5yZWFzb247XG4gICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoZXJyIGluc3RhbmNlb2YgQXhpb3NFcnJvciA/IGVyciA6IG5ldyBDYW5jZWxlZEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBlcnIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGltZXIgPSB0aW1lb3V0ICYmIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgb25hYm9ydChuZXcgQXhpb3NFcnJvcihgdGltZW91dCAke3RpbWVvdXR9IG9mIG1zIGV4Y2VlZGVkYCwgQXhpb3NFcnJvci5FVElNRURPVVQpKVxuICAgIH0sIHRpbWVvdXQpXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIGlmIChzaWduYWxzKSB7XG4gICAgICAgIHRpbWVyICYmIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgc2lnbmFscy5mb3JFYWNoKHNpZ25hbCA9PiB7XG4gICAgICAgICAgc2lnbmFsLnVuc3Vic2NyaWJlID8gc2lnbmFsLnVuc3Vic2NyaWJlKG9uYWJvcnQpIDogc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzaWduYWxzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaWduYWxzLmZvckVhY2goKHNpZ25hbCkgPT4gc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCkpO1xuXG4gICAgY29uc3Qge3NpZ25hbH0gPSBjb250cm9sbGVyO1xuXG4gICAgc2lnbmFsLnVuc3Vic2NyaWJlID0gKCkgPT4gdXRpbHMuYXNhcCh1bnN1YnNjcmliZSk7XG5cbiAgICByZXR1cm4gc2lnbmFsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2VTaWduYWxzO1xuIiwiXG5leHBvcnQgY29uc3Qgc3RyZWFtQ2h1bmsgPSBmdW5jdGlvbiogKGNodW5rLCBjaHVua1NpemUpIHtcbiAgbGV0IGxlbiA9IGNodW5rLmJ5dGVMZW5ndGg7XG5cbiAgaWYgKCFjaHVua1NpemUgfHwgbGVuIDwgY2h1bmtTaXplKSB7XG4gICAgeWllbGQgY2h1bms7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHBvcyA9IDA7XG4gIGxldCBlbmQ7XG5cbiAgd2hpbGUgKHBvcyA8IGxlbikge1xuICAgIGVuZCA9IHBvcyArIGNodW5rU2l6ZTtcbiAgICB5aWVsZCBjaHVuay5zbGljZShwb3MsIGVuZCk7XG4gICAgcG9zID0gZW5kO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWFkQnl0ZXMgPSBhc3luYyBmdW5jdGlvbiogKGl0ZXJhYmxlLCBjaHVua1NpemUpIHtcbiAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiByZWFkU3RyZWFtKGl0ZXJhYmxlKSkge1xuICAgIHlpZWxkKiBzdHJlYW1DaHVuayhjaHVuaywgY2h1bmtTaXplKTtcbiAgfVxufVxuXG5jb25zdCByZWFkU3RyZWFtID0gYXN5bmMgZnVuY3Rpb24qIChzdHJlYW0pIHtcbiAgaWYgKHN0cmVhbVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0pIHtcbiAgICB5aWVsZCogc3RyZWFtO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgdHJ5IHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCB7ZG9uZSwgdmFsdWV9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeWllbGQgdmFsdWU7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IHJlYWRlci5jYW5jZWwoKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJhY2tTdHJlYW0gPSAoc3RyZWFtLCBjaHVua1NpemUsIG9uUHJvZ3Jlc3MsIG9uRmluaXNoKSA9PiB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gcmVhZEJ5dGVzKHN0cmVhbSwgY2h1bmtTaXplKTtcblxuICBsZXQgYnl0ZXMgPSAwO1xuICBsZXQgZG9uZTtcbiAgbGV0IF9vbkZpbmlzaCA9IChlKSA9PiB7XG4gICAgaWYgKCFkb25lKSB7XG4gICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIG9uRmluaXNoICYmIG9uRmluaXNoKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW0oe1xuICAgIGFzeW5jIHB1bGwoY29udHJvbGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qge2RvbmUsIHZhbHVlfSA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgX29uRmluaXNoKCk7XG4gICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSB2YWx1ZS5ieXRlTGVuZ3RoO1xuICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgIGxldCBsb2FkZWRCeXRlcyA9IGJ5dGVzICs9IGxlbjtcbiAgICAgICAgICBvblByb2dyZXNzKGxvYWRlZEJ5dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLmVucXVldWUobmV3IFVpbnQ4QXJyYXkodmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfb25GaW5pc2goZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2FuY2VsKHJlYXNvbikge1xuICAgICAgX29uRmluaXNoKHJlYXNvbik7XG4gICAgICByZXR1cm4gaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgfVxuICB9LCB7XG4gICAgaGlnaFdhdGVyTWFyazogMlxuICB9KVxufVxuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gXCIuLi9wbGF0Zm9ybS9pbmRleC5qc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi91dGlscy5qc1wiO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSBcIi4uL2NvcmUvQXhpb3NFcnJvci5qc1wiO1xuaW1wb3J0IGNvbXBvc2VTaWduYWxzIGZyb20gXCIuLi9oZWxwZXJzL2NvbXBvc2VTaWduYWxzLmpzXCI7XG5pbXBvcnQge3RyYWNrU3RyZWFtfSBmcm9tIFwiLi4vaGVscGVycy90cmFja1N0cmVhbS5qc1wiO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi4vY29yZS9BeGlvc0hlYWRlcnMuanNcIjtcbmltcG9ydCB7cHJvZ3Jlc3NFdmVudFJlZHVjZXIsIHByb2dyZXNzRXZlbnREZWNvcmF0b3IsIGFzeW5jRGVjb3JhdG9yfSBmcm9tIFwiLi4vaGVscGVycy9wcm9ncmVzc0V2ZW50UmVkdWNlci5qc1wiO1xuaW1wb3J0IHJlc29sdmVDb25maWcgZnJvbSBcIi4uL2hlbHBlcnMvcmVzb2x2ZUNvbmZpZy5qc1wiO1xuaW1wb3J0IHNldHRsZSBmcm9tIFwiLi4vY29yZS9zZXR0bGUuanNcIjtcblxuY29uc3QgaXNGZXRjaFN1cHBvcnRlZCA9IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgUmVxdWVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgUmVzcG9uc2UgPT09ICdmdW5jdGlvbic7XG5jb25zdCBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkID0gaXNGZXRjaFN1cHBvcnRlZCAmJiB0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09ICdmdW5jdGlvbic7XG5cbi8vIHVzZWQgb25seSBpbnNpZGUgdGhlIGZldGNoIGFkYXB0ZXJcbmNvbnN0IGVuY29kZVRleHQgPSBpc0ZldGNoU3VwcG9ydGVkICYmICh0eXBlb2YgVGV4dEVuY29kZXIgPT09ICdmdW5jdGlvbicgP1xuICAgICgoZW5jb2RlcikgPT4gKHN0cikgPT4gZW5jb2Rlci5lbmNvZGUoc3RyKSkobmV3IFRleHRFbmNvZGVyKCkpIDpcbiAgICBhc3luYyAoc3RyKSA9PiBuZXcgVWludDhBcnJheShhd2FpdCBuZXcgUmVzcG9uc2Uoc3RyKS5hcnJheUJ1ZmZlcigpKVxuKTtcblxuY29uc3QgdGVzdCA9IChmbiwgLi4uYXJncykgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiAhIWZuKC4uLmFyZ3MpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3Qgc3VwcG9ydHNSZXF1ZXN0U3RyZWFtID0gaXNSZWFkYWJsZVN0cmVhbVN1cHBvcnRlZCAmJiB0ZXN0KCgpID0+IHtcbiAgbGV0IGR1cGxleEFjY2Vzc2VkID0gZmFsc2U7XG5cbiAgY29uc3QgaGFzQ29udGVudFR5cGUgPSBuZXcgUmVxdWVzdChwbGF0Zm9ybS5vcmlnaW4sIHtcbiAgICBib2R5OiBuZXcgUmVhZGFibGVTdHJlYW0oKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBnZXQgZHVwbGV4KCkge1xuICAgICAgZHVwbGV4QWNjZXNzZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuICdoYWxmJztcbiAgICB9LFxuICB9KS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJyk7XG5cbiAgcmV0dXJuIGR1cGxleEFjY2Vzc2VkICYmICFoYXNDb250ZW50VHlwZTtcbn0pO1xuXG5jb25zdCBERUZBVUxUX0NIVU5LX1NJWkUgPSA2NCAqIDEwMjQ7XG5cbmNvbnN0IHN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gPSBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkICYmXG4gIHRlc3QoKCkgPT4gdXRpbHMuaXNSZWFkYWJsZVN0cmVhbShuZXcgUmVzcG9uc2UoJycpLmJvZHkpKTtcblxuXG5jb25zdCByZXNvbHZlcnMgPSB7XG4gIHN0cmVhbTogc3VwcG9ydHNSZXNwb25zZVN0cmVhbSAmJiAoKHJlcykgPT4gcmVzLmJvZHkpXG59O1xuXG5pc0ZldGNoU3VwcG9ydGVkICYmICgoKHJlcykgPT4ge1xuICBbJ3RleHQnLCAnYXJyYXlCdWZmZXInLCAnYmxvYicsICdmb3JtRGF0YScsICdzdHJlYW0nXS5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICFyZXNvbHZlcnNbdHlwZV0gJiYgKHJlc29sdmVyc1t0eXBlXSA9IHV0aWxzLmlzRnVuY3Rpb24ocmVzW3R5cGVdKSA/IChyZXMpID0+IHJlc1t0eXBlXSgpIDpcbiAgICAgIChfLCBjb25maWcpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoYFJlc3BvbnNlIHR5cGUgJyR7dHlwZX0nIGlzIG5vdCBzdXBwb3J0ZWRgLCBBeGlvc0Vycm9yLkVSUl9OT1RfU1VQUE9SVCwgY29uZmlnKTtcbiAgICAgIH0pXG4gIH0pO1xufSkobmV3IFJlc3BvbnNlKSk7XG5cbmNvbnN0IGdldEJvZHlMZW5ndGggPSBhc3luYyAoYm9keSkgPT4ge1xuICBpZiAoYm9keSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZih1dGlscy5pc0Jsb2IoYm9keSkpIHtcbiAgICByZXR1cm4gYm9keS5zaXplO1xuICB9XG5cbiAgaWYodXRpbHMuaXNTcGVjQ29tcGxpYW50Rm9ybShib2R5KSkge1xuICAgIGNvbnN0IF9yZXF1ZXN0ID0gbmV3IFJlcXVlc3QocGxhdGZvcm0ub3JpZ2luLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHksXG4gICAgfSk7XG4gICAgcmV0dXJuIChhd2FpdCBfcmVxdWVzdC5hcnJheUJ1ZmZlcigpKS5ieXRlTGVuZ3RoO1xuICB9XG5cbiAgaWYodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkgfHwgdXRpbHMuaXNBcnJheUJ1ZmZlcihib2R5KSkge1xuICAgIHJldHVybiBib2R5LmJ5dGVMZW5ndGg7XG4gIH1cblxuICBpZih1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhib2R5KSkge1xuICAgIGJvZHkgPSBib2R5ICsgJyc7XG4gIH1cblxuICBpZih1dGlscy5pc1N0cmluZyhib2R5KSkge1xuICAgIHJldHVybiAoYXdhaXQgZW5jb2RlVGV4dChib2R5KSkuYnl0ZUxlbmd0aDtcbiAgfVxufVxuXG5jb25zdCByZXNvbHZlQm9keUxlbmd0aCA9IGFzeW5jIChoZWFkZXJzLCBib2R5KSA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IHV0aWxzLnRvRmluaXRlTnVtYmVyKGhlYWRlcnMuZ2V0Q29udGVudExlbmd0aCgpKTtcblxuICByZXR1cm4gbGVuZ3RoID09IG51bGwgPyBnZXRCb2R5TGVuZ3RoKGJvZHkpIDogbGVuZ3RoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0ZldGNoU3VwcG9ydGVkICYmIChhc3luYyAoY29uZmlnKSA9PiB7XG4gIGxldCB7XG4gICAgdXJsLFxuICAgIG1ldGhvZCxcbiAgICBkYXRhLFxuICAgIHNpZ25hbCxcbiAgICBjYW5jZWxUb2tlbixcbiAgICB0aW1lb3V0LFxuICAgIG9uRG93bmxvYWRQcm9ncmVzcyxcbiAgICBvblVwbG9hZFByb2dyZXNzLFxuICAgIHJlc3BvbnNlVHlwZSxcbiAgICBoZWFkZXJzLFxuICAgIHdpdGhDcmVkZW50aWFscyA9ICdzYW1lLW9yaWdpbicsXG4gICAgZmV0Y2hPcHRpb25zXG4gIH0gPSByZXNvbHZlQ29uZmlnKGNvbmZpZyk7XG5cbiAgcmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlID8gKHJlc3BvbnNlVHlwZSArICcnKS50b0xvd2VyQ2FzZSgpIDogJ3RleHQnO1xuXG4gIGxldCBjb21wb3NlZFNpZ25hbCA9IGNvbXBvc2VTaWduYWxzKFtzaWduYWwsIGNhbmNlbFRva2VuICYmIGNhbmNlbFRva2VuLnRvQWJvcnRTaWduYWwoKV0sIHRpbWVvdXQpO1xuXG4gIGxldCByZXF1ZXN0O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gY29tcG9zZWRTaWduYWwgJiYgY29tcG9zZWRTaWduYWwudW5zdWJzY3JpYmUgJiYgKCgpID0+IHtcbiAgICAgIGNvbXBvc2VkU2lnbmFsLnVuc3Vic2NyaWJlKCk7XG4gIH0pO1xuXG4gIGxldCByZXF1ZXN0Q29udGVudExlbmd0aDtcblxuICB0cnkge1xuICAgIGlmIChcbiAgICAgIG9uVXBsb2FkUHJvZ3Jlc3MgJiYgc3VwcG9ydHNSZXF1ZXN0U3RyZWFtICYmIG1ldGhvZCAhPT0gJ2dldCcgJiYgbWV0aG9kICE9PSAnaGVhZCcgJiZcbiAgICAgIChyZXF1ZXN0Q29udGVudExlbmd0aCA9IGF3YWl0IHJlc29sdmVCb2R5TGVuZ3RoKGhlYWRlcnMsIGRhdGEpKSAhPT0gMFxuICAgICkge1xuICAgICAgbGV0IF9yZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICBkdXBsZXg6IFwiaGFsZlwiXG4gICAgICB9KTtcblxuICAgICAgbGV0IGNvbnRlbnRUeXBlSGVhZGVyO1xuXG4gICAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSAmJiAoY29udGVudFR5cGVIZWFkZXIgPSBfcmVxdWVzdC5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpKSB7XG4gICAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoY29udGVudFR5cGVIZWFkZXIpXG4gICAgICB9XG5cbiAgICAgIGlmIChfcmVxdWVzdC5ib2R5KSB7XG4gICAgICAgIGNvbnN0IFtvblByb2dyZXNzLCBmbHVzaF0gPSBwcm9ncmVzc0V2ZW50RGVjb3JhdG9yKFxuICAgICAgICAgIHJlcXVlc3RDb250ZW50TGVuZ3RoLFxuICAgICAgICAgIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGFzeW5jRGVjb3JhdG9yKG9uVXBsb2FkUHJvZ3Jlc3MpKVxuICAgICAgICApO1xuXG4gICAgICAgIGRhdGEgPSB0cmFja1N0cmVhbShfcmVxdWVzdC5ib2R5LCBERUZBVUxUX0NIVU5LX1NJWkUsIG9uUHJvZ3Jlc3MsIGZsdXNoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXV0aWxzLmlzU3RyaW5nKHdpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHdpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdvbWl0JztcbiAgICB9XG5cbiAgICAvLyBDbG91ZGZsYXJlIFdvcmtlcnMgdGhyb3dzIHdoZW4gY3JlZGVudGlhbHMgYXJlIGRlZmluZWRcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Nsb3VkZmxhcmUvd29ya2VyZC9pc3N1ZXMvOTAyXG4gICAgY29uc3QgaXNDcmVkZW50aWFsc1N1cHBvcnRlZCA9IFwiY3JlZGVudGlhbHNcIiBpbiBSZXF1ZXN0LnByb3RvdHlwZTtcbiAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XG4gICAgICAuLi5mZXRjaE9wdGlvbnMsXG4gICAgICBzaWduYWw6IGNvbXBvc2VkU2lnbmFsLFxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMubm9ybWFsaXplKCkudG9KU09OKCksXG4gICAgICBib2R5OiBkYXRhLFxuICAgICAgZHVwbGV4OiBcImhhbGZcIixcbiAgICAgIGNyZWRlbnRpYWxzOiBpc0NyZWRlbnRpYWxzU3VwcG9ydGVkID8gd2l0aENyZWRlbnRpYWxzIDogdW5kZWZpbmVkXG4gICAgfSk7XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcblxuICAgIGNvbnN0IGlzU3RyZWFtUmVzcG9uc2UgPSBzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtICYmIChyZXNwb25zZVR5cGUgPT09ICdzdHJlYW0nIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3Jlc3BvbnNlJyk7XG5cbiAgICBpZiAoc3VwcG9ydHNSZXNwb25zZVN0cmVhbSAmJiAob25Eb3dubG9hZFByb2dyZXNzIHx8IChpc1N0cmVhbVJlc3BvbnNlICYmIHVuc3Vic2NyaWJlKSkpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcblxuICAgICAgWydzdGF0dXMnLCAnc3RhdHVzVGV4dCcsICdoZWFkZXJzJ10uZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgb3B0aW9uc1twcm9wXSA9IHJlc3BvbnNlW3Byb3BdO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlQ29udGVudExlbmd0aCA9IHV0aWxzLnRvRmluaXRlTnVtYmVyKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LWxlbmd0aCcpKTtcblxuICAgICAgY29uc3QgW29uUHJvZ3Jlc3MsIGZsdXNoXSA9IG9uRG93bmxvYWRQcm9ncmVzcyAmJiBwcm9ncmVzc0V2ZW50RGVjb3JhdG9yKFxuICAgICAgICByZXNwb25zZUNvbnRlbnRMZW5ndGgsXG4gICAgICAgIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGFzeW5jRGVjb3JhdG9yKG9uRG93bmxvYWRQcm9ncmVzcyksIHRydWUpXG4gICAgICApIHx8IFtdO1xuXG4gICAgICByZXNwb25zZSA9IG5ldyBSZXNwb25zZShcbiAgICAgICAgdHJhY2tTdHJlYW0ocmVzcG9uc2UuYm9keSwgREVGQVVMVF9DSFVOS19TSVpFLCBvblByb2dyZXNzLCAoKSA9PiB7XG4gICAgICAgICAgZmx1c2ggJiYgZmx1c2goKTtcbiAgICAgICAgICB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9KSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgfHwgJ3RleHQnO1xuXG4gICAgbGV0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc29sdmVyc1t1dGlscy5maW5kS2V5KHJlc29sdmVycywgcmVzcG9uc2VUeXBlKSB8fCAndGV4dCddKHJlc3BvbnNlLCBjb25maWcpO1xuXG4gICAgIWlzU3RyZWFtUmVzcG9uc2UgJiYgdW5zdWJzY3JpYmUgJiYgdW5zdWJzY3JpYmUoKTtcblxuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgaGVhZGVyczogQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyksXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3RcbiAgICAgIH0pXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdW5zdWJzY3JpYmUgJiYgdW5zdWJzY3JpYmUoKTtcblxuICAgIGlmIChlcnIgJiYgZXJyLm5hbWUgPT09ICdUeXBlRXJyb3InICYmIC9Mb2FkIGZhaWxlZHxmZXRjaC9pLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XG4gICAgICB0aHJvdyBPYmplY3QuYXNzaWduKFxuICAgICAgICBuZXcgQXhpb3NFcnJvcignTmV0d29yayBFcnJvcicsIEF4aW9zRXJyb3IuRVJSX05FVFdPUkssIGNvbmZpZywgcmVxdWVzdCksXG4gICAgICAgIHtcbiAgICAgICAgICBjYXVzZTogZXJyLmNhdXNlIHx8IGVyclxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGVyciwgZXJyICYmIGVyci5jb2RlLCBjb25maWcsIHJlcXVlc3QpO1xuICB9XG59KTtcblxuXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IGh0dHBBZGFwdGVyIGZyb20gJy4vaHR0cC5qcyc7XG5pbXBvcnQgeGhyQWRhcHRlciBmcm9tICcuL3hoci5qcyc7XG5pbXBvcnQgZmV0Y2hBZGFwdGVyIGZyb20gJy4vZmV0Y2guanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSBcIi4uL2NvcmUvQXhpb3NFcnJvci5qc1wiO1xuXG5jb25zdCBrbm93bkFkYXB0ZXJzID0ge1xuICBodHRwOiBodHRwQWRhcHRlcixcbiAgeGhyOiB4aHJBZGFwdGVyLFxuICBmZXRjaDogZmV0Y2hBZGFwdGVyXG59XG5cbnV0aWxzLmZvckVhY2goa25vd25BZGFwdGVycywgKGZuLCB2YWx1ZSkgPT4ge1xuICBpZiAoZm4pIHtcbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnbmFtZScsIHt2YWx1ZX0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICdhZGFwdGVyTmFtZScsIHt2YWx1ZX0pO1xuICB9XG59KTtcblxuY29uc3QgcmVuZGVyUmVhc29uID0gKHJlYXNvbikgPT4gYC0gJHtyZWFzb259YDtcblxuY29uc3QgaXNSZXNvbHZlZEhhbmRsZSA9IChhZGFwdGVyKSA9PiB1dGlscy5pc0Z1bmN0aW9uKGFkYXB0ZXIpIHx8IGFkYXB0ZXIgPT09IG51bGwgfHwgYWRhcHRlciA9PT0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0QWRhcHRlcjogKGFkYXB0ZXJzKSA9PiB7XG4gICAgYWRhcHRlcnMgPSB1dGlscy5pc0FycmF5KGFkYXB0ZXJzKSA/IGFkYXB0ZXJzIDogW2FkYXB0ZXJzXTtcblxuICAgIGNvbnN0IHtsZW5ndGh9ID0gYWRhcHRlcnM7XG4gICAgbGV0IG5hbWVPckFkYXB0ZXI7XG4gICAgbGV0IGFkYXB0ZXI7XG5cbiAgICBjb25zdCByZWplY3RlZFJlYXNvbnMgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hbWVPckFkYXB0ZXIgPSBhZGFwdGVyc1tpXTtcbiAgICAgIGxldCBpZDtcblxuICAgICAgYWRhcHRlciA9IG5hbWVPckFkYXB0ZXI7XG5cbiAgICAgIGlmICghaXNSZXNvbHZlZEhhbmRsZShuYW1lT3JBZGFwdGVyKSkge1xuICAgICAgICBhZGFwdGVyID0ga25vd25BZGFwdGVyc1soaWQgPSBTdHJpbmcobmFtZU9yQWRhcHRlcikpLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgIGlmIChhZGFwdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgVW5rbm93biBhZGFwdGVyICcke2lkfSdgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmVqZWN0ZWRSZWFzb25zW2lkIHx8ICcjJyArIGldID0gYWRhcHRlcjtcbiAgICB9XG5cbiAgICBpZiAoIWFkYXB0ZXIpIHtcblxuICAgICAgY29uc3QgcmVhc29ucyA9IE9iamVjdC5lbnRyaWVzKHJlamVjdGVkUmVhc29ucylcbiAgICAgICAgLm1hcCgoW2lkLCBzdGF0ZV0pID0+IGBhZGFwdGVyICR7aWR9IGAgK1xuICAgICAgICAgIChzdGF0ZSA9PT0gZmFsc2UgPyAnaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW52aXJvbm1lbnQnIDogJ2lzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJ1aWxkJylcbiAgICAgICAgKTtcblxuICAgICAgbGV0IHMgPSBsZW5ndGggP1xuICAgICAgICAocmVhc29ucy5sZW5ndGggPiAxID8gJ3NpbmNlIDpcXG4nICsgcmVhc29ucy5tYXAocmVuZGVyUmVhc29uKS5qb2luKCdcXG4nKSA6ICcgJyArIHJlbmRlclJlYXNvbihyZWFzb25zWzBdKSkgOlxuICAgICAgICAnYXMgbm8gYWRhcHRlciBzcGVjaWZpZWQnO1xuXG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgYFRoZXJlIGlzIG5vIHN1aXRhYmxlIGFkYXB0ZXIgdG8gZGlzcGF0Y2ggdGhlIHJlcXVlc3QgYCArIHMsXG4gICAgICAgICdFUlJfTk9UX1NVUFBPUlQnXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBhZGFwdGVyO1xuICB9LFxuICBhZGFwdGVyczoga25vd25BZGFwdGVyc1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdHJhbnNmb3JtRGF0YSBmcm9tICcuL3RyYW5zZm9ybURhdGEuanMnO1xuaW1wb3J0IGlzQ2FuY2VsIGZyb20gJy4uL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXguanMnO1xuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tICcuLi9jb3JlL0F4aW9zSGVhZGVycy5qcyc7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSBcIi4uL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzXCI7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNpZ25hbCAmJiBjb25maWcuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgY29uZmlnLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb25maWcuaGVhZGVycyk7XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICBjb25maWcsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICBpZiAoWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmluZGV4T2YoY29uZmlnLm1ldGhvZCkgIT09IC0xKSB7XG4gICAgY29uZmlnLmhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IGFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyKGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXIpO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgY29uZmlnLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlLFxuICAgICAgcmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlc3BvbnNlLmhlYWRlcnMpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZVxuICAgICAgICApO1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiMS45LjBcIjsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7VkVSU0lPTn0gZnJvbSAnLi4vZW52L2RhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuWydvYmplY3QnLCAnYm9vbGVhbicsICdudW1iZXInLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ3N5bWJvbCddLmZvckVhY2goKHR5cGUsIGkpID0+IHtcbiAgdmFsaWRhdG9yc1t0eXBlXSA9IGZ1bmN0aW9uIHZhbGlkYXRvcih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IHR5cGUgfHwgJ2EnICsgKGkgPCAxID8gJ24gJyA6ICcgJykgKyB0eXBlO1xuICB9O1xufSk7XG5cbmNvbnN0IGRlcHJlY2F0ZWRXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbnxib29sZWFuP30gdmFsaWRhdG9yIC0gc2V0IHRvIGZhbHNlIGlmIHRoZSB0cmFuc2l0aW9uYWwgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWRcbiAqIEBwYXJhbSB7c3RyaW5nP30gdmVyc2lvbiAtIGRlcHJlY2F0ZWQgdmVyc2lvbiAvIHJlbW92ZWQgc2luY2UgdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmc/fSBtZXNzYWdlIC0gc29tZSBtZXNzYWdlIHdpdGggYWRkaXRpb25hbCBpbmZvXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG52YWxpZGF0b3JzLnRyYW5zaXRpb25hbCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25hbCh2YWxpZGF0b3IsIHZlcnNpb24sIG1lc3NhZ2UpIHtcbiAgZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShvcHQsIGRlc2MpIHtcbiAgICByZXR1cm4gJ1tBeGlvcyB2JyArIFZFUlNJT04gKyAnXSBUcmFuc2l0aW9uYWwgb3B0aW9uIFxcJycgKyBvcHQgKyAnXFwnJyArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuICh2YWx1ZSwgb3B0LCBvcHRzKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSksXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0RFUFJFQ0FURURcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yID8gdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdHMpIDogdHJ1ZTtcbiAgfTtcbn07XG5cbnZhbGlkYXRvcnMuc3BlbGxpbmcgPSBmdW5jdGlvbiBzcGVsbGluZyhjb3JyZWN0U3BlbGxpbmcpIHtcbiAgcmV0dXJuICh2YWx1ZSwgb3B0KSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYCR7b3B0fSBpcyBsaWtlbHkgYSBtaXNzcGVsbGluZyBvZiAke2NvcnJlY3RTcGVsbGluZ31gKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgY29uc3Qgb3B0ID0ga2V5c1tpXTtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBzY2hlbWFbb3B0XTtcbiAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFzc2VydE9wdGlvbnMsXG4gIHZhbGlkYXRvcnNcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuLi9oZWxwZXJzL2J1aWxkVVJMLmpzJztcbmltcG9ydCBJbnRlcmNlcHRvck1hbmFnZXIgZnJvbSAnLi9JbnRlcmNlcHRvck1hbmFnZXIuanMnO1xuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdC5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4vQXhpb3NIZWFkZXJzLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5jbGFzcyBBeGlvcyB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gY29uZmlnT3JVcmwgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICAgKiBAcGFyYW0gez9PYmplY3R9IGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gICAqL1xuICBhc3luYyByZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3JlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgbGV0IGR1bW15ID0ge307XG5cbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPyBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShkdW1teSkgOiAoZHVtbXkgPSBuZXcgRXJyb3IoKSk7XG5cbiAgICAgICAgLy8gc2xpY2Ugb2ZmIHRoZSBFcnJvcjogLi4uIGxpbmVcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBkdW1teS5zdGFjayA/IGR1bW15LnN0YWNrLnJlcGxhY2UoL14uK1xcbi8sICcnKSA6ICcnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghZXJyLnN0YWNrKSB7XG4gICAgICAgICAgICBlcnIuc3RhY2sgPSBzdGFjaztcbiAgICAgICAgICAgIC8vIG1hdGNoIHdpdGhvdXQgdGhlIDIgdG9wIHN0YWNrIGxpbmVzXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGFjayAmJiAhU3RyaW5nKGVyci5zdGFjaykuZW5kc1dpdGgoc3RhY2sucmVwbGFjZSgvXi4rXFxuLitcXG4vLCAnJykpKSB7XG4gICAgICAgICAgICBlcnIuc3RhY2sgKz0gJ1xcbicgKyBzdGFja1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlnbm9yZSB0aGUgY2FzZSB3aGVyZSBcInN0YWNrXCIgaXMgYW4gdW4td3JpdGFibGUgcHJvcGVydHlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgX3JlcXVlc3QoY29uZmlnT3JVcmwsIGNvbmZpZykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgICBpZiAodHlwZW9mIGNvbmZpZ09yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgICAgY29uZmlnLnVybCA9IGNvbmZpZ09yVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcbiAgICB9XG5cbiAgICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gICAgY29uc3Qge3RyYW5zaXRpb25hbCwgcGFyYW1zU2VyaWFsaXplciwgaGVhZGVyc30gPSBjb25maWc7XG5cbiAgICBpZiAodHJhbnNpdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHRyYW5zaXRpb25hbCwge1xuICAgICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgZm9yY2VkSlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbilcbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zU2VyaWFsaXplciAhPSBudWxsKSB7XG4gICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihwYXJhbXNTZXJpYWxpemVyKSkge1xuICAgICAgICBjb25maWcucGFyYW1zU2VyaWFsaXplciA9IHtcbiAgICAgICAgICBzZXJpYWxpemU6IHBhcmFtc1NlcmlhbGl6ZXJcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMocGFyYW1zU2VyaWFsaXplciwge1xuICAgICAgICAgIGVuY29kZTogdmFsaWRhdG9ycy5mdW5jdGlvbixcbiAgICAgICAgICBzZXJpYWxpemU6IHZhbGlkYXRvcnMuZnVuY3Rpb25cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvbmZpZy5hbGxvd0Fic29sdXRlVXJsc1xuICAgIGlmIChjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5hbGxvd0Fic29sdXRlVXJscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMgPSB0aGlzLmRlZmF1bHRzLmFsbG93QWJzb2x1dGVVcmxzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKGNvbmZpZywge1xuICAgICAgYmFzZVVybDogdmFsaWRhdG9ycy5zcGVsbGluZygnYmFzZVVSTCcpLFxuICAgICAgd2l0aFhzcmZUb2tlbjogdmFsaWRhdG9ycy5zcGVsbGluZygnd2l0aFhTUkZUb2tlbicpXG4gICAgfSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICAgIGNvbmZpZy5tZXRob2QgPSAoY29uZmlnLm1ldGhvZCB8fCB0aGlzLmRlZmF1bHRzLm1ldGhvZCB8fCAnZ2V0JykudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICAgIGxldCBjb250ZXh0SGVhZGVycyA9IGhlYWRlcnMgJiYgdXRpbHMubWVyZ2UoXG4gICAgICBoZWFkZXJzLmNvbW1vbixcbiAgICAgIGhlYWRlcnNbY29uZmlnLm1ldGhvZF1cbiAgICApO1xuXG4gICAgaGVhZGVycyAmJiB1dGlscy5mb3JFYWNoKFxuICAgICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgICAobWV0aG9kKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBoZWFkZXJzW21ldGhvZF07XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmNvbmNhdChjb250ZXh0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICBsZXQgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIGlmICh0eXBlb2YgaW50ZXJjZXB0b3IucnVuV2hlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnRlcmNlcHRvci5ydW5XaGVuKGNvbmZpZykgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzICYmIGludGVyY2VwdG9yLnN5bmNocm9ub3VzO1xuXG4gICAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb21pc2U7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBsZW47XG5cbiAgICBpZiAoIXN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycykge1xuICAgICAgY29uc3QgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LmJpbmQodGhpcyksIHVuZGVmaW5lZF07XG4gICAgICBjaGFpbi51bnNoaWZ0LmFwcGx5KGNoYWluLCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgICBjaGFpbi5wdXNoLmFwcGx5KGNoYWluLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgbGVuID0gY2hhaW4ubGVuZ3RoO1xuXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW5baSsrXSwgY2hhaW5baSsrXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGxlbiA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIGxldCBuZXdDb25maWcgPSBjb25maWc7XG5cbiAgICBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBjb25zdCBvbkZ1bGZpbGxlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICBjb25zdCBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW5baSsrXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBvblJlamVjdGVkLmNhbGwodGhpcywgZXJyb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcHJvbWlzZSA9IGRpc3BhdGNoUmVxdWVzdC5jYWxsKHRoaXMsIG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgaSA9IDA7XG4gICAgbGVuID0gcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLmxlbmd0aDtcblxuICAgIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBnZXRVcmkoY29uZmlnKSB7XG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgICBjb25zdCBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwsIGNvbmZpZy5hbGxvd0Fic29sdXRlVXJscyk7XG4gICAgcmV0dXJuIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcik7XG4gIH1cbn1cblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2QsXG4gICAgICB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVIVFRQTWV0aG9kKGlzRm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBodHRwTWV0aG9kKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IGlzRm9ybSA/IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgIH0gOiB7fSxcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhXG4gICAgICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZ2VuZXJhdGVIVFRQTWV0aG9kKCk7XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZCArICdGb3JtJ10gPSBnZW5lcmF0ZUhUVFBNZXRob2QodHJ1ZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vQ2FuY2VsZWRFcnJvci5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybnMge0NhbmNlbFRva2VufVxuICovXG5jbGFzcyBDYW5jZWxUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XG4gICAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlUHJvbWlzZTtcblxuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IHRoaXM7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuKGNhbmNlbCA9PiB7XG4gICAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgICAgbGV0IGkgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgICAgdG9rZW4uX2xpc3RlbmVyc1tpXShjYW5jZWwpO1xuICAgICAgfVxuICAgICAgdG9rZW4uX2xpc3RlbmVycyA9IG51bGw7XG4gICAgfSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgIHRoaXMucHJvbWlzZS50aGVuID0gb25mdWxmaWxsZWQgPT4ge1xuICAgICAgbGV0IF9yZXNvbHZlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdG9rZW4uc3Vic2NyaWJlKHJlc29sdmUpO1xuICAgICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB9KS50aGVuKG9uZnVsZmlsbGVkKTtcblxuICAgICAgcHJvbWlzZS5jYW5jZWwgPSBmdW5jdGlvbiByZWplY3QoKSB7XG4gICAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KSB7XG4gICAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICAgKi9cbiAgdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIHRocm93IHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgICBsaXN0ZW5lcih0aGlzLnJlYXNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgdG9BYm9ydFNpZ25hbCgpIHtcbiAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgY29uc3QgYWJvcnQgPSAoZXJyKSA9PiB7XG4gICAgICBjb250cm9sbGVyLmFib3J0KGVycik7XG4gICAgfTtcblxuICAgIHRoaXMuc3Vic2NyaWJlKGFib3J0KTtcblxuICAgIGNvbnRyb2xsZXIuc2lnbmFsLnVuc3Vic2NyaWJlID0gKCkgPT4gdGhpcy51bnN1YnNjcmliZShhYm9ydCk7XG5cbiAgICByZXR1cm4gY29udHJvbGxlci5zaWduYWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICAgKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICAgKi9cbiAgc3RhdGljIHNvdXJjZSgpIHtcbiAgICBsZXQgY2FuY2VsO1xuICAgIGNvbnN0IHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICAgIGNhbmNlbCA9IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuLFxuICAgICAgY2FuY2VsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHBheWxvYWQpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59XG4iLCJjb25zdCBIdHRwU3RhdHVzQ29kZSA9IHtcbiAgQ29udGludWU6IDEwMCxcbiAgU3dpdGNoaW5nUHJvdG9jb2xzOiAxMDEsXG4gIFByb2Nlc3Npbmc6IDEwMixcbiAgRWFybHlIaW50czogMTAzLFxuICBPazogMjAwLFxuICBDcmVhdGVkOiAyMDEsXG4gIEFjY2VwdGVkOiAyMDIsXG4gIE5vbkF1dGhvcml0YXRpdmVJbmZvcm1hdGlvbjogMjAzLFxuICBOb0NvbnRlbnQ6IDIwNCxcbiAgUmVzZXRDb250ZW50OiAyMDUsXG4gIFBhcnRpYWxDb250ZW50OiAyMDYsXG4gIE11bHRpU3RhdHVzOiAyMDcsXG4gIEFscmVhZHlSZXBvcnRlZDogMjA4LFxuICBJbVVzZWQ6IDIyNixcbiAgTXVsdGlwbGVDaG9pY2VzOiAzMDAsXG4gIE1vdmVkUGVybWFuZW50bHk6IDMwMSxcbiAgRm91bmQ6IDMwMixcbiAgU2VlT3RoZXI6IDMwMyxcbiAgTm90TW9kaWZpZWQ6IDMwNCxcbiAgVXNlUHJveHk6IDMwNSxcbiAgVW51c2VkOiAzMDYsXG4gIFRlbXBvcmFyeVJlZGlyZWN0OiAzMDcsXG4gIFBlcm1hbmVudFJlZGlyZWN0OiAzMDgsXG4gIEJhZFJlcXVlc3Q6IDQwMCxcbiAgVW5hdXRob3JpemVkOiA0MDEsXG4gIFBheW1lbnRSZXF1aXJlZDogNDAyLFxuICBGb3JiaWRkZW46IDQwMyxcbiAgTm90Rm91bmQ6IDQwNCxcbiAgTWV0aG9kTm90QWxsb3dlZDogNDA1LFxuICBOb3RBY2NlcHRhYmxlOiA0MDYsXG4gIFByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZDogNDA3LFxuICBSZXF1ZXN0VGltZW91dDogNDA4LFxuICBDb25mbGljdDogNDA5LFxuICBHb25lOiA0MTAsXG4gIExlbmd0aFJlcXVpcmVkOiA0MTEsXG4gIFByZWNvbmRpdGlvbkZhaWxlZDogNDEyLFxuICBQYXlsb2FkVG9vTGFyZ2U6IDQxMyxcbiAgVXJpVG9vTG9uZzogNDE0LFxuICBVbnN1cHBvcnRlZE1lZGlhVHlwZTogNDE1LFxuICBSYW5nZU5vdFNhdGlzZmlhYmxlOiA0MTYsXG4gIEV4cGVjdGF0aW9uRmFpbGVkOiA0MTcsXG4gIEltQVRlYXBvdDogNDE4LFxuICBNaXNkaXJlY3RlZFJlcXVlc3Q6IDQyMSxcbiAgVW5wcm9jZXNzYWJsZUVudGl0eTogNDIyLFxuICBMb2NrZWQ6IDQyMyxcbiAgRmFpbGVkRGVwZW5kZW5jeTogNDI0LFxuICBUb29FYXJseTogNDI1LFxuICBVcGdyYWRlUmVxdWlyZWQ6IDQyNixcbiAgUHJlY29uZGl0aW9uUmVxdWlyZWQ6IDQyOCxcbiAgVG9vTWFueVJlcXVlc3RzOiA0MjksXG4gIFJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZTogNDMxLFxuICBVbmF2YWlsYWJsZUZvckxlZ2FsUmVhc29uczogNDUxLFxuICBJbnRlcm5hbFNlcnZlckVycm9yOiA1MDAsXG4gIE5vdEltcGxlbWVudGVkOiA1MDEsXG4gIEJhZEdhdGV3YXk6IDUwMixcbiAgU2VydmljZVVuYXZhaWxhYmxlOiA1MDMsXG4gIEdhdGV3YXlUaW1lb3V0OiA1MDQsXG4gIEh0dHBWZXJzaW9uTm90U3VwcG9ydGVkOiA1MDUsXG4gIFZhcmlhbnRBbHNvTmVnb3RpYXRlczogNTA2LFxuICBJbnN1ZmZpY2llbnRTdG9yYWdlOiA1MDcsXG4gIExvb3BEZXRlY3RlZDogNTA4LFxuICBOb3RFeHRlbmRlZDogNTEwLFxuICBOZXR3b3JrQXV0aGVudGljYXRpb25SZXF1aXJlZDogNTExLFxufTtcblxuT2JqZWN0LmVudHJpZXMoSHR0cFN0YXR1c0NvZGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICBIdHRwU3RhdHVzQ29kZVt2YWx1ZV0gPSBrZXk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSHR0cFN0YXR1c0NvZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcbmltcG9ydCBBeGlvcyBmcm9tICcuL2NvcmUvQXhpb3MuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vY29yZS9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbFRva2VuIGZyb20gJy4vY2FuY2VsL0NhbmNlbFRva2VuLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4vZW52L2RhdGEuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHNwcmVhZCBmcm9tICcuL2hlbHBlcnMvc3ByZWFkLmpzJztcbmltcG9ydCBpc0F4aW9zRXJyb3IgZnJvbSAnLi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL2NvcmUvQXhpb3NIZWFkZXJzLmpzXCI7XG5pbXBvcnQgYWRhcHRlcnMgZnJvbSAnLi9hZGFwdGVycy9hZGFwdGVycy5qcyc7XG5pbXBvcnQgSHR0cFN0YXR1c0NvZGUgZnJvbSAnLi9oZWxwZXJzL0h0dHBTdGF0dXNDb2RlLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm5zIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICBjb25zdCBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICBjb25zdCBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0LCB7YWxsT3duS2V5czogdHJ1ZX0pO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQsIG51bGwsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuY29uc3QgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWxlZEVycm9yID0gQ2FuY2VsZWRFcnJvcjtcbmF4aW9zLkNhbmNlbFRva2VuID0gQ2FuY2VsVG9rZW47XG5heGlvcy5pc0NhbmNlbCA9IGlzQ2FuY2VsO1xuYXhpb3MuVkVSU0lPTiA9IFZFUlNJT047XG5heGlvcy50b0Zvcm1EYXRhID0gdG9Gb3JtRGF0YTtcblxuLy8gRXhwb3NlIEF4aW9zRXJyb3IgY2xhc3NcbmF4aW9zLkF4aW9zRXJyb3IgPSBBeGlvc0Vycm9yO1xuXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuYXhpb3MuQ2FuY2VsID0gYXhpb3MuQ2FuY2VsZWRFcnJvcjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gc3ByZWFkO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSBpc0F4aW9zRXJyb3I7XG5cbi8vIEV4cG9zZSBtZXJnZUNvbmZpZ1xuYXhpb3MubWVyZ2VDb25maWcgPSBtZXJnZUNvbmZpZztcblxuYXhpb3MuQXhpb3NIZWFkZXJzID0gQXhpb3NIZWFkZXJzO1xuXG5heGlvcy5mb3JtVG9KU09OID0gdGhpbmcgPT4gZm9ybURhdGFUb0pTT04odXRpbHMuaXNIVE1MRm9ybSh0aGluZykgPyBuZXcgRm9ybURhdGEodGhpbmcpIDogdGhpbmcpO1xuXG5heGlvcy5nZXRBZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcjtcblxuYXhpb3MuSHR0cFN0YXR1c0NvZGUgPSBIdHRwU3RhdHVzQ29kZTtcblxuYXhpb3MuZGVmYXVsdCA9IGF4aW9zO1xuXG4vLyB0aGlzIG1vZHVsZSBzaG91bGQgb25seSBoYXZlIGEgZGVmYXVsdCBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IGF4aW9zXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi9saWIvYXhpb3MuanMnO1xuXG4vLyBUaGlzIG1vZHVsZSBpcyBpbnRlbmRlZCB0byB1bndyYXAgQXhpb3MgZGVmYXVsdCBleHBvcnQgYXMgbmFtZWQuXG4vLyBLZWVwIHRvcC1sZXZlbCBleHBvcnQgc2FtZSB3aXRoIHN0YXRpYyBwcm9wZXJ0aWVzXG4vLyBzbyB0aGF0IGl0IGNhbiBrZWVwIHNhbWUgd2l0aCBlcyBtb2R1bGUgb3IgY2pzXG5jb25zdCB7XG4gIEF4aW9zLFxuICBBeGlvc0Vycm9yLFxuICBDYW5jZWxlZEVycm9yLFxuICBpc0NhbmNlbCxcbiAgQ2FuY2VsVG9rZW4sXG4gIFZFUlNJT04sXG4gIGFsbCxcbiAgQ2FuY2VsLFxuICBpc0F4aW9zRXJyb3IsXG4gIHNwcmVhZCxcbiAgdG9Gb3JtRGF0YSxcbiAgQXhpb3NIZWFkZXJzLFxuICBIdHRwU3RhdHVzQ29kZSxcbiAgZm9ybVRvSlNPTixcbiAgZ2V0QWRhcHRlcixcbiAgbWVyZ2VDb25maWdcbn0gPSBheGlvcztcblxuZXhwb3J0IHtcbiAgYXhpb3MgYXMgZGVmYXVsdCxcbiAgQXhpb3MsXG4gIEF4aW9zRXJyb3IsXG4gIENhbmNlbGVkRXJyb3IsXG4gIGlzQ2FuY2VsLFxuICBDYW5jZWxUb2tlbixcbiAgVkVSU0lPTixcbiAgYWxsLFxuICBDYW5jZWwsXG4gIGlzQXhpb3NFcnJvcixcbiAgc3ByZWFkLFxuICB0b0Zvcm1EYXRhLFxuICBBeGlvc0hlYWRlcnMsXG4gIEh0dHBTdGF0dXNDb2RlLFxuICBmb3JtVG9KU09OLFxuICBnZXRBZGFwdGVyLFxuICBtZXJnZUNvbmZpZ1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcbmNvbnN0IEFQSV9VUkwgPSBgJHtiYXNlVXJsfS9hcGkvdjFgO1xuXG5jb25zdCBIdHRwUG9zdFJlcXVlc3QgPSBhc3luYyAocGF0aCwgZGF0YSA9IHt9KSA9PiB7XG4gIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246IFwiVW5BdXRob3JpemVkXCIgfTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChgJHtBUElfVVJMfSR7cGF0aH1gLCBkYXRhLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSHR0cFBvc3RSZXF1ZXN0O1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XG5pbXBvcnQgeyBUZXh0LCBMYWJlbCwgQnV0dG9uIH0gZnJvbSBcIkBhZG1pbmpzL2Rlc2lnbi1zeXN0ZW1cIjtcbmltcG9ydCBIdHRwUG9zdFJlcXVlc3QgZnJvbSBcIi4vSHR0cFBvc3RSZXF1ZXN0XCI7XG5cbmNvbnN0IEltYWdlVXBsb2FkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKFwiSW1hZ2UgdXBsb2FkaW5nLi4uIFBsZWFzZSBkbyBub3Qgc2F2ZSB1bnRpbCB0aGUgaW1hZ2UgaXMgdXBsb2FkZWQuXCIpO1xuICBjb25zdCBbcHJldmlld1VybCwgc2V0UHJldmlld1VybF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBJbml0aWFsaXplIHByZXZpZXcgd2hlbiBlZGl0aW5nIGV4aXN0aW5nIGRhdGFcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVjb3JkPy5wYXJhbXM/Lltwcm9wZXJ0eS5uYW1lXSAmJiAhcHJldmlld1VybCkge1xuICAgICAgY29uc29sZS5sb2cocHJvcGVydHkubmFtZSk7XG4gICAgICBzZXRQcmV2aWV3VXJsKHJlY29yZC5wYXJhbXNbcHJvcGVydHkubmFtZV0pO1xuICAgIH1cbiAgfSwgW3JlY29yZCwgcHJvcGVydHkubmFtZSwgcHJldmlld1VybF0pO1xuXG4gIGNvbnN0IG9uRHJvcCA9IHVzZUNhbGxiYWNrKFxuICAgIChmaWxlcykgPT4ge1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBmaWxlID0gZmlsZXNbMF07XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG5cbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICBzZXRNc2coXCJJbWFnZSB1cGxvYWRpbmcuLi4gUGxlYXNlIGRvIG5vdCBzYXZlIHVudGlsIHRoZSBpbWFnZSBpcyB1cGxvYWRlZC5cIik7XG5cbiAgICAgICAgSHR0cFBvc3RSZXF1ZXN0KFwiL3VwbG9hZC1maWxlXCIsIGZvcm1EYXRhKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRNc2coXCJJbWFnZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgICAgICAgICAgc2V0UHJldmlld1VybChyZXMpOyAvLyBBc3N1bWluZyB0aGUgcmVzcG9uc2UgaXMgdGhlIGltYWdlIFVSTFxuICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAuLi5yZWNvcmQsXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlY29yZC5wYXJhbXMsXG4gICAgICAgICAgICAgICAgW3Byb3BlcnR5Lm5hbWVdOiByZXMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0TXNnKFwiVXBsb2FkIGZhaWxlZC4gVHJ5IGFnYWluLlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkNoYW5nZSwgcHJvcGVydHkubmFtZSwgcmVjb3JkXVxuICApO1xuXG4gIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgIHNldFByZXZpZXdVcmwobnVsbCk7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4ucmVjb3JkLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIC4uLnJlY29yZC5wYXJhbXMsXG4gICAgICAgIFtwcm9wZXJ0eS5uYW1lXTogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuICAgIG9uRHJvcCxcbiAgICBhY2NlcHQ6IHtcbiAgICAgIFwiaW1hZ2UvanBlZ1wiOiBbXCIuanBlZ1wiLCBcIi5qcGdcIl0sXG4gICAgICBcImltYWdlL3BuZ1wiOiBbXCIucG5nXCJdLFxuICAgIH0sXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGV4dFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICBmb250RmFtaWx5OiBcIlJvYm90bywgc2Fuc1NlcmlmXCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTZweFwiLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcbiAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBQcm9maWxlXG4gICAgICA8L1RleHQ+XG5cbiAgICAgIHtwcmV2aWV3VXJsID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IGRhc2hlZCAjY2NjXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc3JjPXtwcmV2aWV3VXJsfSBhbHQ9XCJQcmV2aWV3XCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCBtYXhIZWlnaHQ6IFwiMjAwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19IC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICB0b3A6IFwiMTBweFwiLFxuICAgICAgICAgICAgICByaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMjhweFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjhweFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjI4cHhcIixcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDDl1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICB7Li4uZ2V0Um9vdFByb3BzKCl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggZGFzaGVkICM2NjZcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI0MHB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPExhYmVsIHN0eWxlPXt7IGNvbG9yOiBcImJsdWVcIiB9fT57bXNnfTwvTGFiZWw+fVxuICAgICAgICAgIHtpc0RyYWdBY3RpdmUgPyA8cD5Ecm9wIHRoZSBpbWFnZSBoZXJlIC4uLjwvcD4gOiA8cD5EcmFnIGFuZCBkcm9wIGEgSlBHIG9yIFBORywgb3IgY2xpY2sgdG8gc2VsZWN0PC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VVcGxvYWRlcjtcbiIsImNvbnN0IFNob3dJbWFnZSA9ICh7IHByb3BlcnR5LCByZWNvcmQsIHZpZXcgPSBcImRlZmF1bHRcIiB9KSA9PiB7XG4gIGxldCBpbWFnZSA9IHJlY29yZD8ucGFyYW1zPy5bcHJvcGVydHkubmFtZV07XG5cbiAgY29uc3Qgc3R5bGVzID0gcHJvcGVydHkuY3VzdG9tPy5zdHlsZXM/Llt2aWV3XSB8fCB7XG4gICAgaGVpZ2h0OiA2MCxcbiAgICB3aWR0aDogNjAsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gIH07XG5cbiAgaWYgKGltYWdlICYmICFpbWFnZS5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICBpbWFnZSA9ICcvJyArIGltYWdlO1xuICB9XG5cbiAgaWYgKCFpbWFnZSkgcmV0dXJuIDxkaXY+LS08L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGltZyBzdHlsZT17c3R5bGVzfSBzcmM9e2ltYWdlfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93SW1hZ2U7XG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vYWRtaW4vRGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5EYXNoYm9hcmQgPSBEYXNoYm9hcmRcbmltcG9ydCBVcGxvYWRJbWFnZSBmcm9tICcuLi9hZG1pbi9JbWFnZVVwbG9hZGVyJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRJbWFnZSA9IFVwbG9hZEltYWdlXG5pbXBvcnQgU2hvd0ltYWdlIGZyb20gJy4uL2FkbWluL1Nob3dJbWFnZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuU2hvd0ltYWdlID0gU2hvd0ltYWdlIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJhcGkiLCJBcGlDbGllbnQiLCJ1c2VFZmZlY3QiLCJnZXREYXNoYm9hcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkJveCIsInZhcmlhbnQiLCJwYWRkaW5nIiwiSDIiLCJtYiIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImdhcCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmciLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiVGV4dCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5MTAwIiwidGhpcyIsInJlcXVpcmUkJDAiLCJpc09iamVjdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfYXJyYXlMaWtlVG9BcnJheSIsIm93bktleXMiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfbm9uSXRlcmFibGVSZXN0IiwiZm9yd2FyZFJlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJGcmFnbWVudCIsImZyb21FdmVudCIsIlByb3BUeXBlcyIsInVzZU1lbW8iLCJub29wIiwidXNlUmVmIiwidXNlUmVkdWNlciIsInVzZUNhbGxiYWNrIiwiQXhpb3NFcnJvciIsInV0aWxzIiwicHJvdG90eXBlIiwidG9Gb3JtRGF0YSIsImVuY29kZSIsIlVSTFNlYXJjaFBhcmFtcyIsIkZvcm1EYXRhIiwiQmxvYiIsInBsYXRmb3JtIiwiQXhpb3NIZWFkZXJzIiwiaXNDYW5jZWwiLCJDYW5jZWxlZEVycm9yIiwibWVyZ2VDb25maWciLCJWRVJTSU9OIiwidmFsaWRhdG9ycyIsIkF4aW9zIiwic3ByZWFkIiwiaXNBeGlvc0Vycm9yIiwiSHR0cFN0YXR1c0NvZGUiLCJDYW5jZWxUb2tlbiIsImJhc2VVcmwiLCJBUElfVVJMIiwiSHR0cFBvc3RSZXF1ZXN0IiwicGF0aCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInBvc3QiLCJjb2RlIiwiRXJyb3IiLCJtZXNzYWdlIiwiSW1hZ2VVcGxvYWRlciIsInByb3BzIiwib25DaGFuZ2UiLCJwcm9wZXJ0eSIsInJlY29yZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1zZyIsInNldE1zZyIsInByZXZpZXdVcmwiLCJzZXRQcmV2aWV3VXJsIiwicGFyYW1zIiwibmFtZSIsImxvZyIsIm9uRHJvcCIsImZpbGVzIiwibGVuZ3RoIiwiZmlsZSIsImZvcm1EYXRhIiwiYXBwZW5kIiwicmVzIiwib25SZW1vdmUiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwidXNlRHJvcHpvbmUiLCJhY2NlcHQiLCJtdWx0aXBsZSIsInN0eWxlIiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJwb3NpdGlvbiIsImJvcmRlciIsInNyYyIsImFsdCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiQnV0dG9uIiwic2l6ZSIsIm9uQ2xpY2siLCJ0b3AiLCJyaWdodCIsIl9leHRlbmRzIiwiY3Vyc29yIiwiTGFiZWwiLCJTaG93SW1hZ2UiLCJ2aWV3IiwiaW1hZ2UiLCJzdHlsZXMiLCJjdXN0b20iLCJzdGFydHNXaXRoIiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIiwiVXBsb2FkSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0VBSUEsTUFB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Q3pFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxNQUFNLEVBQUUsU0FBUyxDQUFDO0VBQ3BNLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDL0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDcEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7RUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDO0VBQ3JFLFFBQVEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUk7RUFDdEQsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7RUFDeEssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztFQUNuRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDeEMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7RUFDdkUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENB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QUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxD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QixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQzs7RUFFL2YsU0FBU0QsaUJBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFP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RUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssV0FBVyxJQUFJLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLGlCQUFpQixDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7RUFFOVosU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQzs7RUFFckwsU0FBUyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUM7O0VBRS9mLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQzs7RUFFbkUsU0FBUyxPQUFPLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxFQUFFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJ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QUs7RUFDckI7SUFFQSxJQUFJLENBQUNBLEtBQUssRUFBRSxvQkFBTzVJLEtBQUEsQ0FBQUMsYUFBQSxDQUFLLEtBQUEsRUFBQSxJQUFBLEVBQUEsSUFBTyxDQUFDO0VBRWhDLEVBQUEsb0JBQ0VELEtBQUEsQ0FBQUMsYUFBQSxDQUNFRCxLQUFBQSxFQUFBQSxJQUFBQSxlQUFBQSxLQUFBLENBQUFDLGFBQUEsQ0FBQSxLQUFBLEVBQUE7RUFBS3VILElBQUFBLEtBQUssRUFBRXFCLE1BQU87RUFBQ2YsSUFBQUEsR0FBRyxFQUFFYyxLQUFNO0VBQUNiLElBQUFBLEdBQUcsRUFBQztFQUFPLEdBQUUsQ0FDMUMsQ0FBQztFQUVWLENBQUM7O0VDcEJEaUIsT0FBTyxDQUFDQyxjQUFjLEdBQUcsRUFBRTtFQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUM5SixTQUFTLEdBQUdBLFNBQVM7RUFFNUM2SixPQUFPLENBQUNDLGNBQWMsQ0FBQ0MsV0FBVyxHQUFHQSxhQUFXO0VBRWhERixPQUFPLENBQUNDLGNBQWMsQ0FBQ1AsU0FBUyxHQUFHQSxTQUFTOzs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMwLDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4LDM5LDQwLDQxLDQyLDQzLDQ0LDQ1LDQ2LDQ3LDQ4LDQ5LDUwLDUxLDUyLDUzLDU0LDU1LDU2XX0=
