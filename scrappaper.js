function processData(number, ...moreStrings) {
	let array = new Array(number);

	console.log(moreStrings);
	let a = [];
	let arrEven0 = [];
	moreStrings.forEach((string) => {
		// let firstSplit = string.split(',');

		// firstSplit.push(array)
		// string.push()
		// console.log(string)
		// console.log(typeof(string));
		// string.concat(a)
		// goal take each string and place into a array for each string
		console.log(string.split(''));

		console.log(
			string.split().forEach((element, index) => {
				if (index % 2 === 0) {
					arrEven0.push(element);
				}
			})
		);
	});

	console.log(arrEven0);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function(input) {
	_input += input;
});

process.stdin.on('end', function() {
	processData(_input);
});

processData(
	13,
	'qsvqkdosifuwjvjgukuconzhrkekwmeiqqtowmkegrvzibdmbeueynkmgcgwpcgmscngwuibkrggmpzzuhlterwbvbhwqlpkqsejdxtjrrqrdyrfchlrtqpcigmifiscmdcmiizfilmjcogrcooydwvpovvtyuyvifotpvsmnjphkqrjztwfhxohwjuztnhkotubddlrd',
	'vkvkmjuekerxovxbxqceechhlngpfhryrlrjdvsdolctmoitettqpkqrdccowtphroilsiiodqnwjrctehmjpnrjrbismrllsbnjcbyqjzpiftkhyhrnpmyguzyoivotkwtucwljmtursvqrtfcyiebdzbeyhenblvgqqkmhjicndjnypnpobbmcrlrfsmxhgnbdzqmkb',
	'xkyzuxxwuuomwvswxymrzlsspnvtwqmyzymvrryyxtoqzwrxuwvvzssvrwzwvswtqoryqrzuytqpxvpxxrvtqyysoxywporysvqmrzpvqqvpzrmqvsyropwyxosyyqtvrxxpvxpqtyuzrqyroqtwsvwzwrvsszvvwuxrwzqotxyyrrvmyzymqwtvnpsslzrmyxwsvwmouuwxxuzkyl',
	'sqryzrpqnmusqqtszunutnzkutpzouqurupzwvvqyuwrspurvypxxxzyzrrpnzpyuquvysxzslvsuouppsqmrwzuvurouqzzuwtowvqywyqvwotwuzzquoruvuzwrmqsppuousvlszxsyvuquypznprrzyzxxxpyvrupsrwuyqvvwzpuruquozptukzntunuzstqqsumnqprzyrsq',
	'rcivnmnrqyjxxstiwngfecejrvfrqqexkgunhsjhlbwtfznkjqgfuxzfiebslqqyueuqhuttij',
	'ebvywijswzuswnrmlgiusrsvjzselmzbkrmzpkdzcqtmmixzsfemwfhmhezhrzdzpciqnibexk',
	'ykszzmwrwsqzorvurpyyyzvtoyknktqszvuqrxxryvoxszzqmwuuqpxxkrrryzpqxuryxtryyyxmpyvtuvvtuwvzyyvvwstoxyuqpuqxyyrurqyzzxuuvvoywpmuyyxsxsxutpyxuszuvqxuxyltrrxwtzwxvpuxwyrotustxvwwtyzvzstmxxmyrtrltnunsnxvqzvvtyswxxyvzywsyxsmwrtmzywvsxuqzuutqzvvtysoozuuzoosytvvzqtuuzquxsvwyzmtrwmsxyswyzvyxxwsytvvzqvxnsnuntlrtrymxxmtszvzytwwvxtsutorywxupvxwztwxrrtlyxuxqvuzsuxyptuxsxsxyyumpwyovvuuxzzyqruryyxqupquyxotswvvyyzvwutvvutvypmxyyyrtxyruxqpzyrrrkxxpquuwmqzzsxovyrxxrquvzsqtkxywmxzrsooxvyzpstywotyyvvoug',
	'sltvurqyyxxuwynmxsswttpwqslsqvrtrzvxtqpxzntpysyuprxmwspsnzytrwwwsyvvyzvrsstnvqnynyyxvzyxrtqzpzlquzmxtxsqvzywyswvtpnyowrrxtpxurqtrtqovuuywuyznrsvztqxztupyrsyoxwtxwuryzxwtpqyzryxwyusutsqymtmutvpvuqoxrozwwuzpzrywvquvqktzxurrqyowtwusoxltyqxwwwvwsmswvwwwxqytlxosuwtwoyqrruxztkqvuqvwyrzpzuwwzorxoquvpvtumtmyqstusuywxyrzyqptwxzyruwxtwxoysryputzxqtzvsrnzyuwyuuvoqtrtqruxptxrrwoynptvwsywyzvqsxtxmzuqlzpzqtrxyzvxyynynqvntssrvzyvvyswwwrtyznspswmxrpuysyptnzxpqtxvzrtrvqszqoutxxquupqrwkyrrqmstqzpvm',
	'ousvoxvssxmwyxsrtpvtstvptrsxywqtwwztkrumg',
	'rxywwzpkwturupwzmrqwwqrmzwpuryxsotvssopj',
	'zudlbmlivhjupkcywhztbzgekundvcoztjywoletyigobzryeiqdcwfwjssuzjuiuewnyhfllgnxvjrslvhhvjwqymvdtlgxzbembcrdoedgwitwyciflectydiyzjkpcngscviwnlicqeqnmhvmydxpyjmrwfpktwqmrzpcsvwiilgcmomwssmtgncxllgroxjeojsjsbrgmvglvwdjyvwqdktxjyjktmgppxrbgoeiictwrlhipktdzeerveidmzssnookjubzinfphlzigvojvnqutocqtlhirjlgwgiljcdwwrzrfztybfilpdgrfikydjiopsjprttcugkwikoxscwblleewdtxerhyibuswlqye',
	'wegvhxwrzubkeyybuyrciljbksqcowzlgvfyvtpqqnmesoynkfeeqhrfhrisvtjzrkjzlffnfezoirslwikfpcthwnmsokerugjbwwsrrljvqefuweniidirzdkegvgkrltrxdoiywjjlcttztbyhiymcimcuordqokqoornkfmupzuyzecdvhthoeukkrorictbxddxvubdqsotihztsrgottrhupkghwxhmnntnbmniqlnkzcxfincqfnmuozbpshhcjqnnolxepsqrcdnyuhydxoxiydkdttnfhriumzcyktyhfbszrhrgipqmtyekhcqzvkiswdxtwkzjehnfqygrcsntemxljychtqzdedgdzqob',
	'iqoutwxysuy',
	'ousomqswys',
	'owustooqowpsoxnsrvywxsoxvszrwvpzxtzoxwqktunymrutuoyruxxvrxxtsyrttxzyvvsrzzyvptxmsvqvyyuxxxwzxmg',
	'tzoyvwwwtxxupurzuquspwwqzwwzswssqxvuyysommrunxxyruznypqzpzwzwuymqwvqyzwyrvqrlyutoyptqxprpputrjb',
	'yhoscregkpdwooutqcfiiewjjlnbwitjfrfpbzgfkczevorckhudrtpqrbxqtjdkffpxohufsfmjcthuuoiticbmojolnujhqoivjtgbyxcfokrblhxmdqngbbmufzufrctvuhdxqlghlllofujufopoljffyzhnjizvgnyzddcbwltpgucndeelpowrsxyolpcwdghlhnpygukosmeyllxqvkjufvwqnmlxqrhwkppkwoqmfvkphsmrvrqfikycuwvjsosgpbcuzibemdnkrnicscjfdizcnuvihzqmffnwzurmehpmmlqpojftlenkbokopbydkqrtzjpclittxokkdmmxfzbmukswymcgxzzzfbethnirttbbtmyzljnnhvjxoerrigpkgoxndvttlbdqxrflwfccctrijfdyunrmzkmhillcfkhlwby',
	'mhdcnyuwxfnnmgcszgtgblmhbljdqqelmjbmuwkprzeyopyxuqxwezzctsgsfmlpqcjiseylhpviugdlzjowzcisrcrpftreuzhqyjivlokpyxqhqueggkqndehdfwchnqpxljmfzffniiperxrfbhlfyspspjpljreeludlkjizcdxcwhrizbfgnqptclngkncecgsxyeeixgjxdtkggtvfdlioorjrcslxkqhdgujvfvedxrudgnqxgkbntzxeyhlcdhipzgfjeymwzhnhbltwctxiodlogchovodkqnjqfyvgjypxneywtefepfsqtrzxbhpnloldxmsrrwxitvqwztgmgvenvndpkkwesmweyfmydbkidxzbzulfzpctzqmfqrgmdghzusbginskwetkxmdmzvtewwmcknwzpyypqblpzbvvikibypm',
	'nvrxqsnqspwryxxwvrzsozzyqrvtsvzxxvvuqvqxttquptrwtyxynuwtwtrsnwxruqyxkxrtrqxysymusvwpxswswustnuupznzuzqrunoxyywsqmuvuutzuoszlyxxzwrosspqzzyzxmxvwyxrtxyxutuyouvrsmpustuoxyvvxmrkyyxkyrntwuvvutlprvxxqzmtqpuxsoqsxxqwxzvrvrwovurtlxrzyrsusylyzrvyqzqvwuxuxvorsrwzywsxtqqunsnrssuuwwtuwstxyynzsswxsstmxqtrotvmsws',
	'txzywkprwvzxrqzoqvxwwxwwyypwtxvpzznxrnwymmsnsxtqzsqurvsypzwursqzvrtsrpxwyutzturyzzorrzrzxozvpnntuvsvxxzvurutzzwuqyqoxxyvpwtswsruzvrxxvtwrttuqtozrpxzusvzxsumouzqtxyymrusqququpstzrsvouxyypzxptvyystwtuywwyzwvwqqsyqtwyqyqqnyyxqtsyuvzxyqstuswqxvuxroqztwsvzxqtwsvqvxxvtkoukwwmsyuxqzlzvwvvuwrpuzmsuwxsqlpnkyy'
);
