type DrawFunction = (ctx: CanvasRenderingContext2D) => void;
const shapeFunctions: Map<number, DrawFunction> = new Map<number, DrawFunction>();
const sf = 2.2; // Scale factor

shapeFunctions.set(0, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
});

shapeFunctions.set(1, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-49.066270, -129.964570);
  ctx.moveTo(49.037052, 114.060040);
  ctx.bezierCurveTo(47.692645, 113.014010, 41.624723, 112.092760, 45.702874, 87.778647);
  ctx.bezierCurveTo(48.099588, 86.450447, 47.194579, 84.930047, 47.110946, 84.501897);
  ctx.bezierCurveTo(47.071006, 84.298337, 46.832592, 83.918907, 46.491794, 83.450827);
  ctx.bezierCurveTo(46.590404, 82.946547, 46.682796, 82.453447, 46.788881, 81.931667);
  ctx.bezierCurveTo(46.788881, 81.931667, 47.335633, 78.918277, 45.823956, 80.806957);
  ctx.bezierCurveTo(45.594288, 81.093777, 45.355849, 81.396157, 45.113681, 81.706967);
  ctx.bezierCurveTo(44.262349, 80.670887, 43.394789, 79.653537, 43.092706, 79.200407);
  ctx.bezierCurveTo(42.452333, 78.237989, 41.984226, 79.200407, 41.984226, 79.200407);
  ctx.bezierCurveTo(41.357588, 81.290037, 36.162219, 84.779017, 28.957110, 88.839667);
  ctx.bezierCurveTo(27.274417, 89.789637, 28.957110, 89.964377, 28.957110, 89.964377);
  ctx.bezierCurveTo(33.759267, 89.964377, 37.318131, 89.728357, 39.963251, 89.355237);
  ctx.bezierCurveTo(35.976223, 96.436757, 32.795588, 106.008630, 35.383290, 117.434190);
  ctx.bezierCurveTo(35.383290, 117.434190, 36.185937, 120.486240, 38.436595, 120.486240);
  ctx.bezierCurveTo(39.824691, 120.486240, 41.029286, 119.802170, 42.183953, 119.104390);
  ctx.bezierCurveTo(44.192443, 117.894800, 46.157251, 116.686480, 48.334259, 115.795150);
  ctx.bezierCurveTo(49.139407, 115.466700, 50.059393, 114.855200, 49.037048, 114.060040);
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(2, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-69.621888, -87.003819);
  ctx.moveTo(79.134002, 66.457149);
  ctx.bezierCurveTo(73.293480, 64.177797, 67.566172, 64.741346, 62.659021, 66.337661);
  ctx.bezierCurveTo(73.933762, 53.421337, 78.128924, 40.497464, 72.336202, 36.994156);
  ctx.bezierCurveTo(65.372355, 32.785155, 56.619746, 38.917515, 50.320082, 48.163227);
  ctx.bezierCurveTo(48.221873, 51.243876, 50.320082, 50.268985, 50.320082, 50.268985);
  ctx.bezierCurveTo(72.670810, 35.973984, 62.267812, 58.290745, 56.539244, 68.993130);
  ctx.bezierCurveTo(53.261104, 70.763024, 50.744005, 72.675061, 49.385452, 73.741776);
  ctx.bezierCurveTo(47.582851, 75.159453, 50.320082, 74.388347, 50.320082, 74.388347);
  ctx.bezierCurveTo(51.692474, 73.849955, 52.998196, 73.444908, 54.264921, 73.104010);
  ctx.bezierCurveTo(54.003252, 73.563153, 53.813328, 73.895241, 53.717727, 74.065061);
  ctx.bezierCurveTo(52.261057, 76.655120, 55.014643, 74.065061, 55.014643, 74.065061);
  ctx.bezierCurveTo(55.575676, 73.563153, 56.124127, 73.058724, 56.665032, 72.551783);
  ctx.bezierCurveTo(66.928403, 70.609556, 73.166429, 74.794655, 74.277173, 76.816131);
  ctx.bezierCurveTo(74.932550, 78.011157, 76.220660, 76.816131, 76.220660, 76.816131);
  ctx.bezierCurveTo(76.220660, 76.816131, 78.647188, 71.960563, 79.620822, 69.334024);
  ctx.bezierCurveTo(80.590672, 66.707486, 79.134002, 66.457163, 79.134002, 66.457163);
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(3, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-81.640414, -140.588270);
  ctx.moveTo(88.098524, 108.798910);
  ctx.bezierCurveTo(86.781994, 108.184060, 85.321664, 108.004290, 83.810504, 108.086100);
  ctx.bezierCurveTo(87.618774, 104.717900, 89.522904, 101.368360, 88.916714, 97.122457);
  ctx.bezierCurveTo(88.253484, 92.483627, 84.823314, 91.376607, 80.638184, 91.413747);
  ctx.bezierCurveTo(81.191084, 91.241607, 81.740254, 91.064167, 82.253474, 90.808837);
  ctx.bezierCurveTo(83.333234, 90.273287, 84.236954, 89.267887, 82.379904, 89.417917);
  ctx.bezierCurveTo(76.397249, 89.902607, 69.341044, 91.265027, 64.837321, 95.553037);
  ctx.bezierCurveTo(62.491864, 97.788147, 63.794760, 100.613390, 65.758396, 102.590660);
  ctx.bezierCurveTo(66.736497, 103.577430, 67.704683, 105.096020, 69.033605, 105.622900);
  ctx.bezierCurveTo(71.629477, 106.651820, 70.774103, 103.982790, 71.088982, 102.109640);
  ctx.bezierCurveTo(71.450964, 99.963777, 72.705511, 97.662917, 74.320805, 95.736507);
  ctx.bezierCurveTo(77.841467, 97.903427, 82.056344, 102.189010, 78.306345, 109.260070);
  ctx.bezierCurveTo(76.589400, 109.825370, 74.945599, 110.486120, 73.515015, 111.012960);
  ctx.bezierCurveTo(69.948481, 112.325780, 73.515015, 112.530350, 73.515015, 112.530350);
  ctx.bezierCurveTo(74.324523, 112.617150, 75.058407, 112.742350, 75.743942, 112.888570);
  ctx.bezierCurveTo(75.037334, 113.820840, 74.568737, 114.661320, 76.077439, 113.696850);
  ctx.bezierCurveTo(76.352661, 113.520820, 76.612978, 113.348670, 76.881987, 113.173710);
  ctx.bezierCurveTo(86.274974, 115.903490, 82.420834, 124.737350, 80.359264, 127.437350);
  ctx.bezierCurveTo(75.016284, 126.471680, 67.765449, 123.631560, 66.622472, 116.264220);
  ctx.bezierCurveTo(66.622472, 116.264220, 66.668332, 113.819610, 65.220405, 116.264220);
  ctx.bezierCurveTo(63.089411, 119.867950, 60.784860, 123.386110, 60.784860, 125.370830);
  ctx.bezierCurveTo(60.784860, 127.354280, 63.119163, 130.856380, 68.372886, 130.974130);
  ctx.bezierCurveTo(73.624130, 131.089490, 82.146864, 131.620000, 85.883234, 129.371240);
  ctx.bezierCurveTo(85.883234, 129.371240, 88.217534, 127.470860, 85.883234, 127.821650);
  ctx.bezierCurveTo(85.413404, 127.892150, 84.414224, 127.908450, 83.115054, 127.800450);
  ctx.bezierCurveTo(85.842324, 125.845330, 88.606794, 123.472610, 90.440264, 120.899030);
  ctx.bezierCurveTo(93.074564, 117.201110, 92.620844, 110.907320, 88.098534, 108.797400);
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(4, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-86.004996, -130.169460);
  ctx.moveTo(93.144414, 103.078080);
  ctx.bezierCurveTo(93.932494, 103.439240, 94.378034, 103.740800, 94.586534, 103.887270);
  ctx.bezierCurveTo(95.544644, 104.557430, 95.925654, 103.887270, 95.925654, 103.887270);
  ctx.bezierCurveTo(96.774554, 102.148540, 98.250194, 99.109121, 97.392604, 97.196631);
  ctx.bezierCurveTo(96.701324, 95.652731, 94.788834, 95.228281, 93.136964, 94.983791);
  ctx.bezierCurveTo(93.386434, 91.233281, 93.974684, 86.808811, 95.065594, 81.583931);
  ctx.bezierCurveTo(95.065594, 81.583931, 95.348544, 78.743105, 94.011924, 80.628271);
  ctx.bezierCurveTo(92.607024, 82.609031, 89.103474, 87.205971, 86.786384, 94.376911);
  ctx.bezierCurveTo(85.901494, 94.355411, 85.020334, 94.359011, 84.152824, 94.412711);
  ctx.bezierCurveTo(80.830464, 94.613771, 77.791075, 94.602681, 74.601515, 95.753071);
  ctx.bezierCurveTo(73.989667, 95.972741, 73.396431, 96.228391, 72.801960, 96.487771);
  ctx.bezierCurveTo(75.743303, 88.629321, 78.359486, 85.999471, 80.111884, 84.082001);
  ctx.bezierCurveTo(80.949614, 83.164871, 79.786714, 82.387951, 79.786714, 82.387951);
  ctx.bezierCurveTo(79.786714, 82.387951, 77.464669, 80.264441, 74.730578, 79.109011);
  ctx.bezierCurveTo(71.996495, 77.953577, 71.557154, 80.470481, 71.557154, 80.470481);
  ctx.bezierCurveTo(70.532025, 83.467641, 69.897839, 92.494021, 69.748905, 97.982041);
  ctx.bezierCurveTo(68.468118, 98.673321, 67.212153, 99.408021, 65.967354, 100.155140);
  ctx.bezierCurveTo(63.837669, 101.432210, 66.540731, 101.304420, 66.540731, 101.304420);
  ctx.bezierCurveTo(67.645287, 101.197800, 68.700200, 101.113370, 69.722846, 101.037520);
  ctx.bezierCurveTo(69.729246, 101.304420, 69.737516, 101.540150, 69.748966, 101.733770);
  ctx.bezierCurveTo(69.952534, 104.938220, 70.894479, 102.217790, 70.894479, 102.217790);
  ctx.bezierCurveTo(71.028497, 101.769760, 71.160083, 101.357760, 71.292863, 100.933310);
  ctx.bezierCurveTo(77.261191, 100.572150, 81.782424, 100.737250, 85.174284, 101.135440);
  ctx.bezierCurveTo(84.418464, 105.899930, 84.305524, 111.442580, 85.397664, 117.767050);
  ctx.bezierCurveTo(85.397664, 117.767050, 86.930394, 122.936130, 91.332484, 119.108700);
  ctx.bezierCurveTo(95.734574, 115.278700, 96.691444, 115.374300, 96.691444, 115.374300);
  ctx.bezierCurveTo(96.691444, 115.374300, 97.362864, 114.992020, 96.691444, 114.226300);
  ctx.bezierCurveTo(96.280644, 113.755950, 93.791044, 110.964750, 93.144444, 103.078960);
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(5, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-89.993569, -112.688200);
  ctx.moveTo(94.939252, 82.023243);
  ctx.bezierCurveTo(91.553592, 80.541753, 85.746642, 81.163033, 79.791422, 82.155503);
  ctx.bezierCurveTo(79.444642, 77.560415, 79.565942, 74.240940, 79.898002, 71.760822);
  ctx.bezierCurveTo(80.672432, 72.057443, 81.467682, 72.315902, 82.300922, 72.493592);
  ctx.bezierCurveTo(84.401182, 72.940816, 86.562702, 73.021726, 88.702172, 72.856274);
  ctx.bezierCurveTo(90.701962, 72.700733, 92.775262, 72.558595, 94.750522, 72.194573);
  ctx.bezierCurveTo(97.380132, 71.708129, 97.480612, 69.201064, 97.111782, 67.125281);
  ctx.bezierCurveTo(96.910812, 65.997945, 95.681792, 60.122416, 93.711422, 61.797460);
  ctx.bezierCurveTo(90.012082, 64.942948, 85.549332, 67.081194, 80.987342, 67.008890);
  ctx.bezierCurveTo(81.173602, 66.448908, 81.356172, 65.945287, 81.520372, 65.483320);
  ctx.bezierCurveTo(81.929642, 64.327803, 80.574402, 64.066840, 80.574402, 64.066840);
  ctx.bezierCurveTo(80.574402, 64.066840, 77.645801, 63.027714, 74.714756, 63.027714);
  ctx.bezierCurveTo(73.233298, 63.027714, 72.647582, 63.655098, 72.428242, 64.275110);
  ctx.bezierCurveTo(72.091272, 64.188350, 71.775129, 64.167536, 71.521481, 64.289220);
  ctx.bezierCurveTo(71.015409, 64.530467, 71.618301, 65.441069, 72.465004, 66.396816);
  ctx.bezierCurveTo(73.078903, 70.157448, 75.816348, 78.037691, 77.624971, 82.599723);
  ctx.bezierCurveTo(76.790503, 82.973413, 76.399616, 83.780923, 77.243885, 83.725793);
  ctx.bezierCurveTo(77.526927, 83.704593, 77.795294, 83.704593, 78.067324, 83.697593);
  ctx.bezierCurveTo(78.389587, 84.474493, 78.670195, 85.115343, 78.873602, 85.523383);
  ctx.bezierCurveTo(80.290112, 88.358853, 80.101412, 85.523383, 80.101412, 85.523383);
  ctx.bezierCurveTo(80.031612, 84.894773, 79.975182, 84.302933, 79.920052, 83.714773);
  ctx.bezierCurveTo(90.835512, 84.405853, 91.714092, 94.468463, 89.198442, 98.144553);
  ctx.bezierCurveTo(75.710958, 96.718233, 71.117103, 90.602483, 71.117103, 90.602483);
  ctx.bezierCurveTo(59.609799, 113.283790, 102.352610, 98.426363, 95.130382, 98.441073);
  ctx.bezierCurveTo(94.907332, 98.442073, 94.692922, 98.438073, 94.472362, 98.434073);
  ctx.bezierCurveTo(101.356400, 93.063323, 101.602700, 84.941653, 94.939222, 82.026553);
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

shapeFunctions.set(6, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
});

shapeFunctions.set(7, (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.scale(sf, sf);
  ctx.translate(-82.570534, -140.298140);
  ctx.moveTo(69.064246, 130.785450);
  ctx.bezierCurveTo(68.937529, 130.771350, 68.507977, 130.727250, 68.109698, 130.688050);
  ctx.bezierCurveTo(66.622206, 130.542000, 64.831950, 130.098800, 63.874417, 129.639310);
  ctx.bezierCurveTo(63.167663, 129.300290, 62.474124, 128.632550, 62.164103, 127.992900);
  ctx.bezierCurveTo(61.820322, 127.283600, 61.727503, 126.819380, 61.729747, 125.820500);
  ctx.bezierCurveTo(61.732047, 124.776280, 61.824187, 124.278400, 62.295919, 122.759340);
  ctx.bezierCurveTo(62.475800, 122.180080, 62.742256, 121.321700, 62.887981, 120.851840);
  ctx.bezierCurveTo(63.248026, 119.691060, 63.581651, 119.048800, 64.107349, 118.504250);
  ctx.bezierCurveTo(64.639781, 117.952750, 65.078961, 117.737980, 65.448089, 117.848540);
  ctx.bezierCurveTo(65.824651, 117.961080, 66.101320, 118.331420, 66.713321, 119.540890);
  ctx.bezierCurveTo(67.022742, 120.152420, 67.425370, 120.864820, 67.607996, 121.124010);
  ctx.bezierCurveTo(68.326769, 122.143990, 69.681021, 123.389330, 71.039174, 124.279110);
  ctx.bezierCurveTo(71.828344, 124.796140, 73.208557, 125.556940, 73.357559, 125.557080);
  ctx.bezierCurveTo(73.492567, 125.557220, 74.041443, 124.650370, 74.563161, 123.565300);
  ctx.bezierCurveTo(75.973166, 120.632770, 76.086379, 117.671980, 74.884118, 115.171700);
  ctx.bezierCurveTo(74.146958, 113.638710, 72.415408, 111.730570, 70.717851, 110.580660);
  ctx.bezierCurveTo(67.525358, 108.418030, 64.660973, 104.056570, 64.197092, 100.651850);
  ctx.bezierCurveTo(63.782317, 97.607558, 65.444791, 95.177838, 69.180977, 93.367848);
  ctx.bezierCurveTo(69.515057, 93.205918, 69.788389, 93.055638, 69.788389, 93.033418);
  ctx.bezierCurveTo(69.788389, 93.012218, 69.588434, 93.022818, 69.344030, 93.054618);
  ctx.bezierCurveTo(69.099626, 93.086418, 68.499750, 93.104318, 68.010952, 93.091618);
  ctx.bezierCurveTo(67.224788, 93.070418, 67.084259, 93.048918, 66.793084, 92.904648);
  ctx.bezierCurveTo(66.535345, 92.776948, 66.459498, 92.702858, 66.443447, 92.563868);
  ctx.bezierCurveTo(66.413817, 92.308808, 66.712439, 92.138138, 68.010956, 91.667358);
  ctx.bezierCurveTo(70.687815, 90.696828, 73.547745, 89.913488, 75.844833, 89.521688);
  ctx.bezierCurveTo(77.788734, 89.190078, 78.588918, 89.123438, 80.617582, 89.124008);
  ctx.bezierCurveTo(82.680842, 89.124608, 83.458942, 89.196708, 84.929502, 89.524198);
  ctx.bezierCurveTo(86.704942, 89.919488, 87.605702, 90.315198, 88.296462, 91.003458);
  ctx.bezierCurveTo(89.533142, 92.235608, 89.749792, 94.250038, 88.922312, 96.822838);
  ctx.bezierCurveTo(88.794222, 97.221128, 88.582172, 97.917298, 88.451012, 98.369878);
  ctx.bezierCurveTo(88.007492, 99.900788, 87.747342, 100.511830, 87.276832, 101.127680);
  ctx.bezierCurveTo(86.957112, 101.546180, 86.438032, 101.953140, 86.114462, 102.038970);
  ctx.bezierCurveTo(85.513962, 102.198070, 85.155702, 101.838240, 84.372852, 100.288530);
  ctx.bezierCurveTo(84.060182, 99.669538, 83.627832, 98.925038, 83.412112, 98.634108);
  ctx.bezierCurveTo(82.356552, 97.210468, 80.479252, 95.706268, 78.496285, 94.695308);
  ctx.lineTo(77.704025, 94.291378);
  ctx.lineTo(77.373050, 94.832968);
  ctx.bezierCurveTo(75.460292, 97.962808, 74.930201, 101.029220, 75.837763, 103.714130);
  ctx.bezierCurveTo(76.568464, 105.875880, 78.033294, 107.637650, 80.628672, 109.476400);
  ctx.bezierCurveTo(82.674212, 110.925610, 84.507042, 113.149090, 85.752622, 115.692580);
  ctx.bezierCurveTo(87.310462, 118.873680, 87.382222, 121.322130, 85.978262, 123.391910);
  ctx.bezierCurveTo(85.215372, 124.516560, 83.916252, 125.536510, 82.032942, 126.489330);
  ctx.bezierCurveTo(81.616562, 126.699930, 81.337392, 126.872870, 81.412572, 126.873500);
  ctx.bezierCurveTo(81.487772, 126.874170, 81.867942, 126.845300, 82.257452, 126.803300);
  ctx.bezierCurveTo(83.430962, 126.685120, 84.586172, 126.913720, 84.704822, 127.287590);
  ctx.bezierCurveTo(84.804622, 127.601920, 84.239022, 127.874860, 81.796542, 128.690690);
  ctx.bezierCurveTo(78.801293, 129.691130, 75.982324, 130.347930, 73.343261, 130.660250);
  ctx.bezierCurveTo(72.511406, 130.758650, 69.575512, 130.845460, 69.064250, 130.786190);
  ctx.scale(1 / sf, 1 / sf);
  ctx.closePath();
});

export default (ctx: CanvasRenderingContext2D, rank: number) => {
  // Each rank has a shape
  const shapeFunction = shapeFunctions.get(rank);
  if (!shapeFunction) {
    throw new Error(`Failed to find the shape function for rank "${rank}".`);
  }

  // Move the cursor to the top-left hand corner
  ctx.translate(60, 135);

  // Draw the respective shape on the canvas
  shapeFunction(ctx);
};