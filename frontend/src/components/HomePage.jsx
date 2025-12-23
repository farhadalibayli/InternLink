import { motion } from 'framer-motion';
import { Briefcase, FileCheck, Calendar, ArrowRight, Sparkles, Users, Linkedin, Github, Mail } from 'lucide-react/dist/esm/icons';
import { useTranslation } from 'react-i18next'

export function HomePage({ onNavigate }) {

  const { t } = useTranslation();

  const solutions = [
    {
      icon: Briefcase,
      title: t('home.solutions.internships.title'),
      description: t('home.solutions.internships.description'),
      color: 'from-purple-500 to-pink-500',
      page: 'internships',
      learnMore: t('home.solutions.internships.learn_more'),
    },
    {
      icon: FileCheck,
      title: t('home.solutions.examination.title'),
      description: t('home.solutions.examination.description'),
      color: 'from-blue-500 to-cyan-500',
      page: 'examination',
      learnMore: t('home.solutions.examination.learn_more'),
    },
    {
      icon: Calendar,
      title: t('home.solutions.career_fair.title'),
      description: t('home.solutions.career_fair.description'),
      color: 'from-orange-500 to-red-500',
      page: 'career-fair',
      learnMore: t('home.solutions.career_fair.learn_more'),
    },
  ];

  const team = [
    {
      name: 'Farhad Alibayli',
      role: t('home.team.farhad.role'),
      avatar: 'https://i.imgur.com/fIEAELg.png',
      linkedin: 'https://www.linkedin.com/in/farhadalibayli/',
      email: 'alibaylifarhad@gmail.com'
    },
    {
      name: 'Duyghu Ismayilova',
      role: t('home.team.duyghu.role'),
      avatar: 'https://i.imgur.com/UPFrA2A.png',
      linkedin: 'http://linkedin.com/in/duygu-ismayilova-439575364',
      email: 'duyu.smaylovaa@gmail.com'
    },
    {
      name: 'Nazrin Ismayilova',
      role: t('home.team.nazrin.role'),
      avatar: 'https://i.imgur.com/oGWSxvX.png',
      linkedin: 'https://www.linkedin.com/in/nazrin-ismailova-981400329',
      email: 'ismailova_2005@icloud.com'
    },
    {
      name: 'Elvin Garabayli',
      role: t('home.team.elvin.role'),
      avatar: 'https://i.imgur.com/pKOjUmN.png',
      linkedin: 'https://www.linkedin.com/in/elvin-garabayli-e92g69271/',
      email: 'kelvingarabayli666@gmail.com'
    },
  ];

  return (
    <div className="pt-4">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-base">{t('home.hero.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6"
          >
            {t('home.hero.title_part1')}{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              {t('home.hero.title_part2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('internships')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-purple-500/50"
            >
              {t('home.hero.button_explore')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('examination')}
              className="px-8 py-4 bg-slate-800/50 text-white rounded-full border border-purple-500/30 hover:bg-slate-800 transition-all"
            >
              {t('home.hero.button_assessment')}
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-purple-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-4">
              {t('home.solutions.title')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('home.solutions.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => onNavigate(solution.page)}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 cursor-pointer overflow-hidden transition-all hover:border-purple-500/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  />
                </div>

                <h3 className="text-2xl text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 mb-6">{solution.description}</p>

                <div className="flex items-center gap-2 text-purple-400">
                  <span>{solution.learnMore}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
  <section className="relative py-32 px-4">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
          <Users className="w-4 h-4 text-blue-400" />
          <span className="text-blue-300 text-sm">{t('home.team.meet_the_team')}</span>
        </div>
        <h2 className="text-4xl sm:text-5xl text-white mb-4">{t('home.team.title')}</h2>
        <p className="text-xl text-gray-400">{t('home.team.subtitle')}</p>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          {t('home.team.description')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 text-center overflow-hidden hover:border-purple-500/50 transition-all"
          >
            <div className="relative inline-block mb-4">
              <motion.div
                className="w-24 h-24 rounded-full overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {member.avatar.includes('/') ? (
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
                    {member.avatar}
                  </div>
                )}
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
              />
            </div>

            <h3 className="text-xl text-white mb-1">{member.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{member.role}</p>

            <div className="flex justify-center gap-3">
              <motion.a
                href={member.linkedin}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@internlink.com`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="relative py-32 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <motion.button
            onClick={() => onNavigate('internships')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            {t('home.cta.button')}
          </motion.button>
        </div>
      </motion.div>
    </div>
      </section>
    </div>
  );
}
