export const FirstData = () => {
     return [
       {
         id: 1,
         text: "you can choose anytime coz our course have flexbible time",
         img: "/calendar.png",
       },
       {
         id: 2,
         text: "even thought you never touch makeup tools, that’s okay! we help you",
         img: "/luggage.png",
       },
       {
         id: 3,
         text: "we give you 1 free course for you just join our platform",
         img: "/activity.png",
       },
       {
         id: 4,
         text: "get more money after learn from our platform!",
         img: "/dollar-sign.png",
       },
     ];
}

export const TestimonialData = () => {
  return [
    {
      id: 1,
      name: "windi",
      photo: "/people-testi.png",
      position: "Fullstack Dev",
      testimoni:
        "Bagus banget pengajarnya! padahal cuman ambil course yang sesuai budget tapi ternyata helpful bgt! thank youu beautypreaneur`",
    },
    {
      id: 2,
      name: "marchantya",
      photo: "/people-testi2.png",
      position: "Perawat",
      testimoni:
        "Bagus banget buat orang yang mau switch career!",
    },
  ];
}


export const FrequentlyAskedQuestions = () => {
  return [
    {
      key: "1",
      label: "Siapa yang bisa join course ini ? ",
      children: <p>siapapun bisa join</p>,
    },
    {
      key: "2",
      label: "Gimana cara daftar course ?  ",
      children: <p>klik tombol daftar di 1 data kursus di menu kursus</p>,
    },
    {
      key: "3",
      label: "Bagaimana saya bisa menjadi mentor disini ? ",
      children: (
        <p>
          untuk menjadi mentor disini, klik tombol jadi mentor di footer. nanti
          akan diarahkan ke google form untuk mengisi data course
        </p>
      ),
    },
    {
      key: "4",
      label: "Apakah data saya akan aman ?",
      children: (
        <p>
         ya, tentu saja
        </p>
      ),
    },
  ];
}


export const MenuItem = () => {
  return [
    {
      key: "sub1",
      icon: "",
      label: "Home",
      path: "/",
      children: [],
    },
    {
      key: "sub2",
      icon: "",
      label: "Kursus",
      path: "/kursus",
      children: [],
    },
    {
      key: "sub3",
      icon: "",
      label: "Glam On The Spot",
      path: "/glam-on-the-spot",
      children: [],
    },
  ];
}