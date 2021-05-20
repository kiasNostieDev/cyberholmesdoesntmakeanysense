function checkeyes() {
    let eyes = document.getElementById("eyes").value
    console.log(eyes.toString())

    if (eyes.toString() === 'The one who hides a butcher' || eyes.toString() === 'You are between the lines now') {
        document.getElementById("mouth").innerHTML = 'ewogIG1haWw6ICdzaGl2YWxpbmdhaXlhMjMyM0BnbWFpbC5jb20nLAogIHBhc3N3b3JkOiAnSXRzIGluIHRoZSBjYXB0aW9ucyBpbmNhc2UgeW91IGhhdmVudCBmaWd1cmVkIGl0IG91dCB5ZXQhJywKICBsaW5rZWRJblByb2ZpbGU6ICdTaXZhIExpbmdhaXlhICh1c2Ugc2l0ZSBzZWFyY2ggaW5zdGVhZCBvZiBnb29nbGUpJywKICBhbHNvIGdvIGZvciB0aGUgb3RoZXIgcHJvZmlsZSBmcm9tIFNpdmFuJ3MgdGFnZ2VkIHBvc3QoaWYgeW91IGhhdmVuJ3QpCiAgc2NyZWVuc2hvdHMgZGlmZmVyIGZyb20gSW5zdGEgRG93bmxvYWRlciBpbWFnZXMhCn0='
    } else  document.getElementById("mouth").innerHTML = 'Nice try again no jargons'
}