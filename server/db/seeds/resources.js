/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('resources').del()
  await knex('resources').insert([
    {
      id: 1,
      resource_name: 'Te Aka Māori Dictionary',
      url: 'https://maoridictionary.co.nz/',
      image: '/images/te-aka.png',
      description:
        'This is a great dictionary. It provides meanings, example sentences and audio so you can hear how to pronounce the word. There are also app versions of the dictionary that you can buy for iOS and Android.',
      cost: 'free',
      language_level: 'beginner+',
      medium: 'website',
    },
    {
      id: 2,
      resource_name: 'Drops',
      url: 'https://languagedrops.com/language/learn-maori',
      image: '/images/drops.png',
      description: 'Learn 2,000+ Māori words with Drops.',
      cost: 'free or from NZ$9.33/month for premium',
      language_level: 'beginner+',
      medium: 'app',
    },
    {
      id: 3,
      resource_name: 'Toro Mai',
      url: 'https://toromai.massey.ac.nz/',
      image: '/images/toromai.png',
      description:
        'Learn Te Reo Māori and Tikanga Māori online for free with Massey University.',
      cost: 'free',
      language_level: 'beginner',
      medium: 'online course',
    },
    {
      id: 4,
      resource_name: 'Te Karere (video)',
      url: 'https://www.youtube.com/user/tekareremaorinews',
      image: '/images/te-karere.png',
      description:
        'This channel is great for practising listening in te reo Māori. You will learn vocabulary related to current events. The video version can be helpful because the visuals can give you context to help your understanding. Some segments also have English subtitles.',
      cost: 'free',
      language_level: 'intermediate+',
      medium: 'website',
    },
    {
      id: 5,
      resource_name: 'Te Karere (audio)',
      url: 'https://soundcloud.com/tekarere',
      image: '/images/te-karere-audio.png',
      description:
        'This channel is great for practising listening in te reo Māori. You will learn vocabulary related to current events. The audio version is great because you can listen while you are doing other things or as you go too sleep at night.',
      cost: 'free',
      language_level: 'intermediate+',
      medium: 'website',
    },
    {
      id: 6,
      resource_name: 'Te Aka Māori Dictionary',
      url: 'https://maoridictionary.co.nz/',
      image: '/images/te-aka.png',
      description:
        'This is a great dictionary. It provides meanings, example sentences and audio so you can hear how to pronounce the word. There are also app versions of the dictionary that you can buy for iOS and Android.',
      cost: 'free',
      language_level: 'beginner+',
      medium: 'website',
    },
    {
      id: 7,
      resource_name: 'Drops',
      url: 'https://languagedrops.com/language/learn-maori',
      image: '/images/drops.png',
      description: 'Learn 2,000+ Māori words with Drops.',
      cost: 'free or from NZ$9.33/month for premium',
      language_level: 'beginner+',
      medium: 'app',
    },
    {
      id: 8,
      resource_name: 'Toro Mai',
      url: 'https://toromai.massey.ac.nz/',
      image: '/images/toromai.png',
      description:
        'Learn Te Reo Māori and Tikanga Māori online for free with Massey University.',
      cost: 'free',
      language_level: 'beginner',
      medium: 'online course',
    },
    {
      id: 9,
      resource_name: 'Te Karere (video)',
      url: 'https://www.youtube.com/user/tekareremaorinews',
      image: '/images/te-karere.png',
      description:
        'This channel is great for practising listening in te reo Māori. You will learn vocabulary related to current events. The video version can be helpful because the visuals can give you context to help your understanding. Some segments also have English subtitles.',
      cost: 'free',
      language_level: 'intermediate+',
      medium: 'website',
    },
    {
      id: 10,
      resource_name: 'Te Karere (audio)',
      url: 'https://soundcloud.com/tekarere',
      image: '/images/te-karere-audio.png',
      description:
        'This channel is great for practising listening in te reo Māori. You will learn vocabulary related to current events. The audio version is great because you can listen while you are doing other things or as you go too sleep at night.',
      cost: 'free',
      language_level: 'intermediate+',
      medium: 'website',
    },
  ])
}
