import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ExternalLink,
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export function CareerFairPage() {
  const { t } = useTranslation();
  const companies = [
    { logo: 'G', color: 'from-blue-500 to-green-500' },
    { logo: 'M', color: 'from-blue-600 to-purple-600' },
    { logo: 'A', color: 'from-orange-400 to-yellow-400' },
    { logo: 'M', color: 'from-cyan-500 to-blue-600' },
    { logo: 'A', color: 'from-gray-400 to-gray-600' },
    { logo: 'N', color: 'from-red-500 to-red-600' },
    { logo: 'T', color: 'from-red-600 to-gray-800' },
    { logo: 'S', color: 'from-green-500 to-green-600' },
    { logo: 'U', color: 'from-black to-gray-700' },
    { logo: 'A', color: 'from-pink-500 to-red-500' },
    { logo: 'A', color: 'from-red-500 to-red-600' },
    { logo: 'S', color: 'from-purple-500 to-indigo-600' },
  ];

  const timeline = [
    {
      step: '1',
      title: t('career_fair.timeline.step1.title'),
      description: t('career_fair.timeline.step1.description'),
      icon: Users,
    },
    {
      step: '2',
      title: t('career_fair.timeline.step2.title'),
      description: t('career_fair.timeline.step2.description'),
      icon: CheckCircle,
    },
    {
      step: '3',
      title: t('career_fair.timeline.step3.title'),
      description: t('career_fair.timeline.step3.description'),
      icon: Calendar,
    },
    {
      step: '4',
      title: t('career_fair.timeline.step4.title'),
      description: t('career_fair.timeline.step4.description'),
      icon: ArrowRight,
    },
  ];

  const eventDetails = [
    { icon: Calendar, label: t('career_fair.event_details.date'), value: t('career_fair.event_details.will_be_announced') },
    { icon: Clock, label: t('career_fair.event_details.time'), value: t('career_fair.event_details.will_be_announced') },
    { icon: MapPin, label: t('career_fair.event_details.location'), value: t('career_fair.event_details.location_value') },
    { icon: Building2, label: t('career_fair.event_details.companies'), value: t('career_fair.event_details.companies_value') },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm">{t('career_fair.hero.badge')}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              {t('career_fair.hero.title_part1')}{' '}
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                {t('career_fair.hero.title_part2')}
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              {t('career_fair.hero.subtitle')}
            </p>

            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfLxQuNsTqM6zlbH1-NWlYUJGhdP6vznOR4sf_UfccP3xMV5A/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              {t('career_fair.hero.register_button')}
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {eventDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <detail.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-400 text-sm mb-1">{detail.label}</p>
                <p className="text-white">{detail.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Participating Companies */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-4">
              {t('career_fair.companies.title')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('career_fair.companies.subtitle')}
            </p>
          </motion.div> 

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="group relative aspect-square bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex items-center justify-center overflow-hidden cursor-pointer hover:border-orange-500/50 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <motion.div
                  className={`relative w-16 h-16 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center text-white text-2xl`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {company.logo}
                </motion.div>

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${company.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
                />

                <div className="absolute inset-x-0 bottom-0 bg-slate-900/90 backdrop-blur-sm p-2 text-center text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {company.name}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">{t('career_fair.companies.more_companies')}</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-4">{t('career_fair.how_it_works.title')}</h2>
            <p className="text-xl text-gray-400">
              {t('career_fair.how_it_works.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative inline-block mb-6"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto">
                        <Icon className="w-10 h-10" />
                      </div>

                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-400 text-sm">
                        {item.step}
                      </div>

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-xl opacity-0 hover:opacity-50 transition-opacity duration-500"
                      />
                    </motion.div>

                    <h3 className="text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Calendar className="w-16 h-16 text-orange-400" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl text-white mb-4">{t('career_fair.cta.title')}</h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('career_fair.cta.subtitle')}
              </p>

              <div className="flex justify-center mt-12">
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfLxQuNsTqM6zlbH1-NWlYUJGhdP6vznOR4sf_UfccP3xMV5A/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xl font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all text-center"
                >
                  {t('career_fair.cta.register_button')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
