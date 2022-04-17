import Axios from 'axios'
import * as cheerio from 'cheerio'
import { MangaSeeLogo } from '../../assets'
import { Anime } from '../../types'

const image_source = (name = '') => `https://cover.nep.li/cover/${name}.jpg`

//  sort
//  v - most popular (all-time)
//  vm - most popular (monthly)
//  lt - recently release chapter
//  y - year release
//  s - alphabetically

const loadMangaList = async (
  sort: 'v' | 'vm' | 'lt' | 'y' | 's',
  desc: boolean,
) => {
  try {
    const order = desc ? [-1, 1] : [1, -1]
    const response = await Axios.get(`https://mangasee123.com/search/`)
    if (response.status === 200) {
      const $ = cheerio.load(response.data)
      const data: Anime[] = JSON.parse(
        $.html()
          .split('vm.Directory = ')[1]
          .split('vm.GetIntValue=')[0]
          .split('];')[0] + ']',
      )
        .map(
          (item: any): Anime => ({
            source: {
              id: 1,
              name: 'Mangasee',
              language: 'en',
              logo: MangaSeeLogo,
            },
            SeriesName: item.s,
            IndexName: item.i,
            genres: item.g,
            author: item.a,
            alternateTitle: item.al,
            lastChapter: parseInt(item.l.slice(1)) * 0.1,
            lastUpdate: item.ls,
            officialTranslation: item.o,
            tag: item.t,
            status: {
              publish: item.ps,
              scan: item.ss,
            },
            sort: {
              v: item.v,
              vm: item.vm,
              y: item.y,
              lt: item.lt,
              s: item.s,
            },
          }),
        )
        .sort((a: Anime, b: Anime) =>
          parseInt(a.sort[sort]) > parseInt(b.sort[sort]) ? order[0] : order[1],
        )

      return data
    } else {
      throw new Error(JSON.stringify(response))
    }
  } catch (error) {
    console.log(error)
  }
}

const loadMangaDetails = async (name = '') => {
  try {
    const response = await Axios.get('https://mangasee123.com/manga/' + name)
    if (response.status === 200) {
      const $ = cheerio.load(response.data)
      return {
        chapters: JSON.parse(
          JSON.stringify($.html())
            .split('vm.Chapters = ')[1]
            .split('vm.NumSubs = ')[0]
            .split('];')[0]
            .split('\\')
            .join('') + ']',
        ).map((item: { Chapter: any }) => ({
          ...item,
          Chapter: parseInt(item.Chapter.slice(1)) * 0.1,
        })),
      }
    } else {
      throw new Error(JSON.stringify(response))
    }
  } catch (error) {
    console.log(error)
  }
}

export const Mangasee = {
  image_source,
  loadMangaDetails,
  loadMangaList,
}
