
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'hi' | 'mr';

// Define translations for various parts of the UI
type Translations = {
  [key in Language]: {
    navLinks: {
      home: string;
      about: string;
      initiatives: string;
      blog: string;
      getInvolved: string;
    };
    walkRight: string;
    hero: {
      title: string;
      subtitle: string;
      button: string;
    };
    stats: {
      heading: string;
      description: string;
      annual: string;
      pedestrians: string;
      reduction: string;
      killedDaily: string;
      worldwideReport: string;
      roadFatalities: string;
      viewTrend: string;
      chartTitle: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      badge: string;
    };
    initiatives: {
      heading1: string;
      heading2: string;
      heading3: string;
      description1: string;
      description2: string;
      description3: string;
      rule: string;
      learnMore: string;
      safeLife: string;
    };
    media: {
      title: string;
      subtitle: string;
      follow: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
      support: string;
      nonprofit: string;
    };
  };
};

const translations: Translations = {
  en: {
    navLinks: {
      home: 'Home',
      about: 'About Us',
      initiatives: 'Initiatives',
      blog: 'Blog',
      getInvolved: 'Get Involved',
    },
    walkRight: 'Walk Right',
    hero: {
      title: 'Making Indian Roads Safer for Pedestrians',
      subtitle: 'Join our mission to reduce pedestrian fatalities through awareness, education, and advocacy.',
      button: 'Learn More',
    },
    stats: {
      heading: 'Pedestrian Safety Crisis in India',
      description: 'All you have to do is follow the simple rule - WALK \'RIGHT\'! These statistics highlight why our work is so crucial.',
      annual: 'Annual Pedestrian Fatalities',
      pedestrians: 'of Road Fatalities',
      reduction: 'Reduction Potential',
      killedDaily: 'Pedestrians',
      worldwideReport: 'worldwide, according to WHO reports',
      roadFatalities: 'are pedestrians globally',
      viewTrend: 'View Trend Data',
      chartTitle: 'Pedestrian Deaths in India (2016-2023)',
    },
    testimonials: {
      title: 'Voices of Impact',
      subtitle: 'Hear from the people whose lives have been touched by our pedestrian safety initiatives.',
      badge: 'Testimonials',
    },
    initiatives: {
      heading1: 'Indian',
      heading2: 'Rule for',
      heading3: 'Pedestrians',
      description1: 'Our initiative',
      description2: 'aims to make every citizen aware of this important safety principle and help make our roads a',
      description3: 'by preventing and reducing the',
      rule: 'If there is no footpath, walk facing the oncoming traffic. This gives us a clearer view of approaching vehicles and helps us walk safely.',
      learnMore: 'Learn More',
      safeLife: 'LIFE is important and YOU are important.',
    },
    media: {
      title: 'Media & Social',
      subtitle: 'Explore our campaign content and connect with us on social media',
      follow: 'Follow on',
    },
    cta: {
      title: 'Join Our Mission for Safer Streets',
      description: 'LIFE is important and YOU are important. Whether through volunteering or spreading awareness, your support helps us save pedestrian lives across India.',
      button: 'Get Involved',
      support: '100% of your support goes directly to pedestrian safety programs.',
      nonprofit: 'UNM Foundation is a registered non-profit organization.',
    },
  },
  hi: {
    navLinks: {
      home: 'होम',
      about: 'हमारे बारे में',
      initiatives: 'पहल',
      blog: 'ब्लॉग',
      getInvolved: 'शामिल हों',
    },
    walkRight: 'वॉक राइट',
    hero: {
      title: 'भारतीय सड़कों को पैदल चलने वालों के लिए सुरक्षित बनाना',
      subtitle: 'जागरूकता, शिक्षा और पैरवी के माध्यम से पैदल चलने वालों की मृत्यु को कम करने के हमारे मिशन में शामिल हों।',
      button: 'और जानें',
    },
    stats: {
      heading: 'भारत में पैदल यात्री सुरक्षा संकट',
      description: 'आपको बस एक साधारण नियम का पालन करना है - WALK \'RIGHT\'! ये आंकड़े बताते हैं कि हमारा काम इतना महत्वपूर्ण क्यों है।',
      annual: 'वार्षिक पैदल यात्री मौतें',
      pedestrians: 'सड़क दुर्घटनाओं का',
      reduction: 'कमी की संभावना',
      killedDaily: 'पैदल यात्री',
      worldwideReport: 'विश्व स्वास्थ्य संगठन की रिपोर्ट के अनुसार',
      roadFatalities: 'विश्व स्तर पर पैदल यात्री होते हैं',
      viewTrend: 'प्रवृत्ति डेटा देखें',
      chartTitle: 'भारत में पैदल यात्री मृत्यु (2016-2023)',
    },
    testimonials: {
      title: 'प्रभाव की आवाज़ें',
      subtitle: 'उन लोगों से सुनें जिनके जीवन पर हमारी पैदल यात्री सुरक्षा पहल का प्रभाव पड़ा है।',
      badge: 'प्रशंसापत्र',
    },
    initiatives: {
      heading1: 'अंतर्राष्ट्रीय',
      heading2: 'पैदल यात्रियों के लिए',
      heading3: 'नियम',
      description1: 'हमारी पहल',
      description2: 'का उद्देश्य है हर नागरिक को इस तथ्य से अवगत कराना और हमारी सड़कों को',
      description3: 'पैदल यात्रियों की मृत्यु दर को कम करके',
      rule: 'अगर फुटपाथ या पैदल मार्ग नहीं है, तो हमें यातायात के विपरीत चलना चाहिए, क्योंकि यह आने वाले वाहनों का बेहतर दृश्य देता है और इस प्रकार हमें सुरक्षित चलने में मदद करता है',
      learnMore: 'और जानें',
      safeLife: 'जीवन महत्वपूर्ण है और आप महत्वपूर्ण हैं।',
    },
    media: {
      title: 'मीडिया और सोशल',
      subtitle: 'हमारी अभियान सामग्री का अन्वेषण करें और सोशल मीडिया पर हमारे साथ जुड़ें',
      follow: 'फॉलो करें',
    },
    cta: {
      title: 'सुरक्षित सड़कों के लिए हमारे मिशन में शामिल हों',
      description: 'जीवन महत्वपूर्ण है और आप महत्वपूर्ण हैं। चाहे स्वयंसेवा के माध्यम से या जागरूकता फैलाकर, आपका समर्थन हमें पूरे भारत में पैदल चलने वालों के जीवन को बचाने में मदद करता है।',
      button: 'शामिल हों',
      support: 'आपके समर्थन का 100% सीधे पैदल यात्री सुरक्षा कार्यक्रमों में जाता है।',
      nonprofit: 'UNM फाउंडेशन एक पंजीकृत गैर-लाभकारी संगठन है।',
    },
  },
  mr: {
    navLinks: {
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      initiatives: 'उपक्रम',
      blog: 'ब्लॉग',
      getInvolved: 'सहभागी व्हा',
    },
    walkRight: 'वॉक राइट',
    hero: {
      title: 'भारतीय रस्त्यांना पादचाऱ्यांसाठी सुरक्षित बनवणे',
      subtitle: 'जागरूकता, शिक्षण आणि पैरवीद्वारे पादचारी मृत्यू कमी करण्याच्या आमच्या मिशनमध्ये सामील व्हा।',
      button: 'अधिक जाणून घ्या',
    },
    stats: {
      heading: 'भारतातील पादचारी सुरक्षा संकट',
      description: 'तुम्ही फक्त एक साधा नियम पाळायचा आहे - WALK \'RIGHT\'! हे आकडेवारी दर्शवते की आमचे काम इतके महत्त्वाचे का आहे.',
      annual: 'वार्षिक पादचारी मृत्यू',
      pedestrians: 'रस्ता अपघातांमध्ये',
      reduction: 'कमी करण्याची क्षमता',
      killedDaily: 'पादचारी',
      worldwideReport: 'जागतिक आरोग्य संघटनेच्या अहवालानुसार',
      roadFatalities: 'जागतिक स्तरावर पादचारी आहेत',
      viewTrend: 'ट्रेंड डेटा पहा',
      chartTitle: 'भारतातील पादचारी मृत्यू (2016-2023)',
    },
    testimonials: {
      title: 'प्रभावाचे आवाज',
      subtitle: 'आमच्या पादचारी सुरक्षा उपक्रमांमुळे ज्यांच्या जीवनाला स्पर्श झाला आहे त्यांच्याकडून ऐका.',
      badge: 'प्रशंसापत्रे',
    },
    initiatives: {
      heading1: 'आंतरराष्ट्रीय',
      heading2: 'पादचाऱ्यांसाठी',
      heading3: 'नियम',
      description1: 'आमचा उपक्रम',
      description2: 'चा उद्देश प्रत्येक नागरिकाला या वस्तुस्थितीची जाणीव करून देणे आणि आमचे रस्ते',
      description3: 'पादचारी मृत्यूदर टाळून आणि कमी करून',
      rule: 'जर फुटपाथ किंवा वॉकवे नसेल तर आपण वाहतुकीच्या विरुद्ध दिशेने चालावे, कारण यामुळे येणाऱ्या वाहनांचा चांगला दृष्टिकोन मिळतो आणि आपल्याला सुरक्षितपणे चालण्यास मदत होते',
      learnMore: 'अधिक जाणून घ्या',
      safeLife: 'जीवन महत्त्वाचे आहे आणि तुम्ही महत्त्वाचे आहात.',
    },
    media: {
      title: 'मीडिया आणि सोशल',
      subtitle: 'आमच्या मोहिमेचा मजकूर एक्सप्लोर करा आणि सोशल मीडियावर आमच्याशी जोडा',
      follow: 'फॉलो करा',
    },
    cta: {
      title: 'सुरक्षित रस्त्यांसाठी आमच्या मिशनमध्ये सामील व्हा',
      description: 'जीवन महत्त्वाचे आहे आणि तुम्ही महत्त्वाचे आहात. स्वयंसेवेद्वारे किंवा जागरूकता पसरवून, तुमचा पाठिंबा आम्हाला संपूर्ण भारतातील पादचाऱ्यांचे जीवन वाचवण्यात मदत करतो.',
      button: 'सहभागी व्हा',
      support: 'तुमच्या समर्थनाचे 100% थेट पादचारी सुरक्षा कार्यक्रमांसाठी जाते.',
      nonprofit: 'UNM फाऊंडेशन ही एक नोंदणीकृत ना-नफा संस्था आहे.',
    },
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Function to get translations based on nested keys
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];

    for (const k of keys) {
      if (result[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      result = result[k];
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
