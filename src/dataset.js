const defaultDataset = {
    "init": {
        answers: [
            {content: "Ich habe eine Business Idee.", nextId: "job_offer"},
            {content: "Ich möchte über Karriere reden.", nextId: "consultant"},
            {content: "Ich möchte über HS Augsburg erfahren.", nextId: "community"},
            {content: "Ich möchte mit Ihnen daten.", nextId: "dating"},
        ],
        question: "Servus！🐯Wie kann ich für Sie behilflich sein？",
    },
    "job_offer": {
        answers: [
            {content: "Ich möchte eine Webseite haben.", nextId: "website"},
            {content: "Ich möchte eine Webapp haben.", nextId: "webapp"},
            {content: "Ich möchte ein automatisches System haben.", nextId: "automation_tool"},
            {content: "Sonstiges", nextId: "other_jobs"}
        ],
        question: "Was für ein Auftrag？",
    },
    "website": {
        answers: [
            {content: "Anfragen", nextId: "contact"},
            {content: "Zurück zur ersten Frage", nextId: "init"}
        ],
        question: "Alles klar, Sie wollen eine Webseite haben. Von hier können Sie anfragen.",
    },
    "webapp": {
        answers: [
            {content: "Anfragen", nextId: "contact"},
            {content: "Zurück zur ersten Frage", nextId: "init"}
        ],
        question: "Alles klar, Sie wollen eine App haben. Von hier können Sie anfragen.",
    },
    "automation_tool": {
        answers: [
            {content: "Anfragen", nextId: "contact"},
            {content: "Zurück zur ersten Frage", nextId: "init"}
        ],
        question: "Alles klar, Sie wollen ein automatisches System haben. Von hier können Sie anfragen.",
    },
    "other_jobs": {
        answers: [
            {content: "Anfragen", nextId: "contact"},
            {content: "Zurück zur ersten Frage", nextId: "init"}
        ],
        question: "Alles klar, hier können Sie weiter anfragen.",
    },
    "consultant": {
        answers: [
            {content: "Mein Instagram besuchen", nextId: "https://www.instagram.com/taichi_tomi/"},
            {content: "Ich möchte über die Community mehr erfahren.", nextId: "community"},
            {content: "Zurück zur ersten Frage", nextId: "init"}
        ],
        question: "トラハックは普段からYouTubeでキャリアについて発信しています。また、僕が運営するエンジニア向け学習コミュニティ内でも相談に乗っていますよ。",
    },
    "community": {
        answers: [
            {content: "Was macht ihr so？", nextId: "community_activity"},
            {content: "Ich möchte an die Community teilnehmen.", nextId: "https://torahack.web.app/community/"},
            {content: "Zurück zur ersten Frage", nextId: "init"}
        ],
        question: "2020年3月から学習コミュニティを始めました！🎉Webエンジニアへの転職を目指す人向けに、プログラミングを教えたりキャリアの相談に乗っています。",
    },
    "community_activity": {
        answers: [
            {content: "Ich möchte genauer wissen.", nextId: "https://youtu.be/tIzE7hUDbBM"},
            {content: "Ich möchte an die Community teilnehmen.", nextId: "https://torahack.web.app/community/"},
            {content: "Zurück zur ersten Frage", nextId: "init"}
        ],
        question: "Dort kann man über Tech, Travel, oder Gardening reden.",
    },
    "dating": {
        answers: [
            {content: "Anschreiben", nextId: "https://twitter.com/torahack_"},
            {content: "Zurück zur ersten Frage", nextId: "init"}
        ],
        question: "Wie wäre es erstmal zusammen Essen zu gehen？Schreiben Sie mir einfach😘",
    },
}

export default defaultDataset