import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {
		uz: {
			translation: {
				Header: {
					lists: {
						first: 'Asosiy',
						second: 'Buyumlar katalogi',
						third: 'Dastur tanlash',
					},
				},

				section: {
					texts: {
						title: 'Mushuklar uchun funksiyaliy ovqatlar ',
						text: "O'zing blan bandmisan ? Mushuging bilan band bol!",
						btnText: 'programmani olish',
					},
				},
				abouteCat: {
					divOne: {
						title: 'Ozish',
						text: "Mushukingizning vazni itnikidan koproqmi va u daraxtga chiqish qobiliyatini deyarli yoqotib qoydimi ? Demak, parhez qilish vaqti keldi! 'Cat Energy Slim' uy hayvoningizga ortiqcha vazndan xalos bolishga yordam beradi",
						BtnText: 'Slim katalogi',
					},
					divTwo: {
						titel: 'набор массы',
						text: "Mahalladagi mushuklar — hatto itlar orasida ham — hurmat qozonishni xohlaysizmi? 'Cat Energy Pro' mahsulotlar turkumi mushukingizga o‘ziga zarur bo‘lgan mushak massasini shakllantirishga yordam beradi!",
						BtnText: 'MAster katalog',
					},
				},
			},

			Information: {
				text: "Bu qanday ishlaydi",
				one: "Funksional oziq-ovqat faqat foydali ozuqa moddalarini o‘z ichiga oladi.",
				two: "U kukun shaklida bo‘ladi — shunchaki ustidan qaynoq suv quysangiz, tayyor bo‘ladi..",
				three: "Bir yoki ikkita odatiy ovqatlanishni bizning funksional oziqlantirish mahsulotimiz bilan almashtiring.",
				four: "Bor-yo‘g‘i bir oy ichida uy hayvoningizdagi ijobiy o‘zgarishlarni kuzatishdan zavqlaning!",
			}
		},

		ru: {
			translation: {
				Header: {
					lists: {
						first: 'Главная',
						second: 'Каталог продукции',
						third: 'Подбор программы',
					},
				},

				section: {
					texts: {
						title: 'Функциональное питание для котов',
						text: 'Занялся собой? Займись котом!',
						btnText: 'подобрать программу',
					},
				},

				abouteCat: {
					divOne: {
						title: '',
						text: 'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.',
						BtnText: 'каталог slim',
					},
					divTwo: {
						titel: 'набор массы',
						text: 'Заработать авторитет среди дворовых котов и даже собак?Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!',
						BtnText: 'каталог pro',
					},
				},
					Information: {
				text: "Как это работает",
				one: "Функциональное питаниесодержит только полезные питательные вещества.",
				two: "Выпускается в виде порошка, который нужно лишь залить кипятком и готово.",
				three: "Замените один-два приема обычной еды на наше функциональное питание.",
				four: "Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!",
			}
			},
		},
	},

	lng: 'ru',
	fallbackLng: 'ru',

	interpolation: {
		escapeValue: false,
	},
})

export default i18n
