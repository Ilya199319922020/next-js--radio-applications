const road = '/icon/radiostations/road.png';
const record = '/icon/radiostations/record.png';
const pilot = '/icon/radiostations/pilot.png';
const europaplus = '/icon/radiostations/europaplus.png';
const maxmum = '/icon/radiostations/maxmum.png';
const YOFM = '/icon/radiostations/YOFM.png';
const ELEGANT = '/icon/radiostations/ELEGANT.png';
const ritmo = '/icon/radiostations/ritmo.png';
const ritmoEl = '/icon/radiostations/ritmoEl.png';
const pixel = '/icon/radiostations/pixel.png';
const love = '/icon/radiostations/love.png';
const dance = '/icon/radiostations/dance.png';
const velena = '/icon/radiostations/velena.png';
const tik_tak = '/icon/radiostations/tik-tak.png';
const elisium = '/icon/radiostations/elisium.png';
const elvis = '/icon/radiostations/elvis.png';
const radio = '/icon/radiostations/radio.png';
const shanson = '/icon/radiostations/shanson.png';


export const stateInfo = {
	radioStations: [
		{
			id: 1,
			name: 'Дорожное',
			location: 'Россия',
			genre: "Adult Pop",
			image: road,
			value: false,
		},
		{
			id: 2,
			name: 'Рекорд',
			location: 'Россия',
			genre: "Dance",
			image: record,
			value: false,
		},
		{
			id: 3,
			name: 'Пилот',
			location: 'Belorussia',
			genre: "Rock",
			image: pilot,
			value: false,
		},
		{
			id: 4,
			name: 'Европа Плюс',
			location: 'Россия',
			genre: "Power Pop",
			image: europaplus,
			value: false,
		},
		{
			id: 5,
			name: 'Элвис',
			location: 'United States',
			genre: "Rock",
			image: elvis,
			value: false,
		},
		{
			id: 6,
			name: 'Рекорд',
			location: 'Россия',
			genre: "Power Pop",
			image: record,
			value: false,
		},
		{
			id: 7,
			name: 'Максимум',
			location: 'Россия',
			genre: "Pop",
			image: maxmum,
			value: false,
		},
		{
			id: 8,
			name: 'Европа Плюс',
			location: 'Россия',
			genre: "Power Pop",
			image: europaplus,
			value: false,
		},
		{
			id: 9,
			name: 'Тик-так',
			location: 'Belorussia',
			genre: "Adult Pop",
			image: tik_tak,
			value: false,
		},
		{
			id: 10,
			name: 'Рекорд',
			location: 'Россия',
			genre: "Power Pop",
			image: record,
			value: false,
		},
		{
			id: 11,
			name: 'Максимум',
			location: 'Россия',
			genre: "Pop",
			image: maxmum,
			value: false,
		},
		{
			id: 12,
			name: 'Элизиум',
			location: 'Россия',
			genre: "Power Pop",
			image: elisium,
			value: false,
		},
		{
			id: 13,
			name: 'Велена',
			location: 'United States',
			genre: "Adult Pop",
			image: velena,
			value: false,
		},
		{
			id: 14,
			name: 'МаксимумУС',
			location: 'Latvija',
			genre: "Rock",
			image: maxmum,
			value: false,
		},
		{
			id: 15,
			name: '101 км',
			location: 'Россия',
			genre: "Chanson",
			image: shanson,
			value: false,
		},
		{
			id: 16,
			name: 'Yo.fm',
			location: 'United States',
			genre: "Electro",
			image: YOFM,
			value: false,
		},
		{
			id: 17,
			name: 'Пилот',
			location: 'Belorussia',
			genre: "Rock",
			image: pilot,
			value: false,
		},
		{
			id: 18,
			name: 'Ritmo',
			location: 'Germany',
			genre: "Hip-hop",
			image: ritmo,
			value: false,
		},
		{
			id: 19,
			name: 'Элегант',
			location: 'Latviya',
			genre: "Chanson",
			image: ELEGANT,
			value: false,
		},
		{
			id: 20,
			name: 'RitmoEl',
			location: 'Germany',
			genre: "Electro",
			image: ritmoEl,
			value: false,
		},
		{
			id: 21,
			name: 'Европа Плюс',
			location: 'Россия',
			genre: "Power Pop",
			image: europaplus,
			value: false,
		},
		{
			id: 22,
			name: 'Pixel',
			location: 'USA',
			genre: "r&b soul",
			image: pixel,
			value: false,
		},
		{
			id: 23,
			name: 'Love',
			location: 'USA',
			genre: "Pop",
			image: love,
			value: false,
		},
		{
			id: 24,
			name: 'Radio',
			location: 'Germany',
			genre: "Adult Pop",
			image: radio,
			value: false,
		},
		{
			id: 25,
			name: 'DanceFM',
			location: 'United States',
			genre: "Dance",
			image: dance,
			value: false,
		},
	],
	genreButton: [
		{ id: 1, genre: "Adult Pop", value: false, },
		{ id: 2, genre: "Dance", value: false, },
		{ id: 3, genre: "Rock", value: false, },
		{ id: 4, genre: "Power Pop", value: false, },
		{ id: 5, genre: "Pop", value: false, },
		{ id: 6, genre: "Chanson", value: false, },
		{ id: 7, genre: "Electro", value: false, },
		{ id: 8, genre: "Hip-hop", value: false, },
		{ id: 9, genre: "r&b soul", value: false, },
	],
	locationList: [
		{
			id: 1,
			location: 'Testing',
			image: null,
			isValue: false,
		},
		{
			id: 2,
			location: 'Local',
			image: null,
			isValue: false,
		},
		{
			id: 3,
			location: 'Россия',
			image: '/icon/radiostations/rus.png',
			isValue: false,
		},
		{
			id: 4,
			location: 'United States',
			image: '/icon/radiostations/usa.png',
			isValue: false,
		},
		{
			id: 5,
			location: 'Belorussia',
			image: '/icon/radiostations/Bel.png',
			isValue: false,
		},
		{
			id: 6,
			location: 'Germany',
			image: '/icon/radiostations/Ger.png',
			isValue: false,
		},
		{
			id: 7,
			location: 'Latviya',
			image: '/icon/radiostations/Lat.png',
			isValue: false,
		},
	],
};