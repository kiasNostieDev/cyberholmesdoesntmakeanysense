function checkeyes() {
    let eyes = document.getElementById("eyes").value
    console.log(eyes)

    if (eyes === undefined || eyes === '' || eyes === 'haveanything?') document.getElementById("mouth").innerHTML = 'Nice try again'
    else  if (eyes.toUpperCase !== 'The one who hides a butcher'.toUpperCase || eyes.toUpperCase !== 'You are between the lines now'.toUpperCase) {
        document.getElementById("mouth").innerHTML = 'no jargons'
    }
    else if (eyes.toUpperCase === 'The one who hides a butcher'.toUpperCase || eyes.toUpperCase === 'You are between the lines now'.toUpperCase) {
        document.getElementById("mouth").innerHTML = 'ewogIG1haWw6ICdzaGl2YWxpbmdhaXlhMjMyM0BnbWFpbC5jb20nLAogIHBhc3N3b3JkOiAnSXRzIGluIHRoZSBjYXB0aW9ucyBpbmNhc2UgeW91IGhhdmVudCBmaWd1cmVkIGl0IG91dCB5ZXQhJywKICBsaW5rZWRJblByb2ZpbGU6ICdTaXZhIExpbmdhaXlhICh1c2Ugc2l0ZSBzZWFyY2ggaW5zdGVhZCBvZiBnb29nbGUpJwp9'
    }
}