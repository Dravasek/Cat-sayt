import { useTranslation } from 'react-i18next'
import Logo from './assets/logo-desktop.png'
import CoffeLogo from './assets/f0644dc8615192c6ce738ddf01dd241d20f311f9.png'
import Ellipse from './assets/Ellipse 1 (1).png'
import Catblack from './assets/Vector (17).png'
import CatblackTwo from './assets/Vector (18).png'
const App = () => {
  const { t, i18n } = useTranslation()

  return (
  <>
    <div className='bg-white text-blue-950'>
      
 <div className="container mx-auto p-4">
      <div className='flex justify-around'>
        <img src={Logo} alt="Logo" />

      <div className='flex gap-5 text-[30px]'>
      <button onClick={() => i18n.changeLanguage('uz')}>
        Uz
      </button>

      <button onClick={() => i18n.changeLanguage('ru')}>
        Ru
      </button>
      </div>
<ul className="flex gap-10 text-[25px]">
  <li>{t('Header.lists.first')}</li>
  <li>{t('Header.lists.second')}</li>
  <li>{t('Header.lists.third')}</li>
</ul>

      </div>
      </div>

      <div>
        <div className='container mx-auto p-4'>
          <div className='flex justify-center items-center'>
            <div>
          <h1 className='text-[60px]'>{t('section.texts.title')}</h1>
          <p className='text-[20px]'>{t('section.texts.text')}</p>
          <button className='bg-[#68B738] px-[26px] py-[14px]'>{t('section.texts.btnText')}</button>
          </div>
          <div>
           <img src={CoffeLogo} alt="" />
          </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto p-4">
        <div className='flex justify-between'>
          <div className='text-black w-[530px] max-w[530px] max-h-[374px] bg-gray-300 p-[52px]'>
            <div className='flex justify-center items-center top-5 relative pb-[80px]'>
              <img className='absolute left-0' src={Ellipse} alt="" />
              <img className='absolute left-4' src={Catblack} alt="" />
            <h1 className='text-[36px]'>{t('abouteCat.divOne.BtnText')}</h1>
            </div>
          <p>{t('abouteCat.divOne.text')}</p>  
          <a href={<App />}>{t('abouteCat.divOne.btnText')}</a>
          </div>
          <div className='w-[530px] max-h-[374px] bg-gray-300 p-[52px] text-black'>
<div className='flex justify-center items-center relative top-5 pl-2 pb-[80px]'>
             <img className='absolute left-2' src={Ellipse} alt="" />
              <img className='absolute left-0' src={CatblackTwo} alt="" />
            <h1 className='text-[36px]'>{t('abouteCat.divOne.BtnText`')}</h1>
            </div>
          <p>{t('abouteCat.divOne.text')}</p>  
          <a href={<App />}>{t('abouteCat.divOne.btnText')}</a>
          </div>
        </div>

        <div>
          <h2>{t('Information.text')}</h2>
          <div>
            <div className=''>

            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
