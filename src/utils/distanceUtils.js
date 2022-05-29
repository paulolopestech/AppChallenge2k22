export default function distance(lat1,lon1,lat2,lon2) {
	const lat1Str = String(lat1).slice(0, 2);
	const lat1Num = Number(lat1Str);

	const lon1Str = String(lon1).slice(0, 2);
	const lon1Num = Number(lon1Str);

	const lat2Str = String(lat2).slice(0, 2);
	const lat2Num = Number(lat2Str);

	const lon2Str = String(lon2).slice(0, 2);
	const lon2Num = Number(lon2Str);

	let y = lat2Num - lat1Num;
    let x = lon2Num - lon1Num;
    const distance = Math.sqrt(x * x + y * y);

    return distance;
  }
  