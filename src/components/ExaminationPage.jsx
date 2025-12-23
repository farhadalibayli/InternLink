import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Palette,
  Smartphone,
  Cloud,
  Shield,
  ExternalLink,
  Award,
  Clock,
  Users,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ExaminationPage() {
  const { t } = useTranslation();
  const examFields = [
    {
      id: 1,
      title: 'Help Desk Internship Examination',
      icon: Code,
      description:
        'Assess your help desk fundamentals, troubleshooting, communication, and practical problem-solving skills',
      companies: ['AYNA'],
      duration: '60 minutes',
      participants: 0,
      gradient: 'from-purple-500 to-pink-500',
      formUrl: 'https://forms.gle/ys8zgzCr4Lpw3NKYA',
    },
    /*
    {
      id: 2,
      title: 'Backend Development',
      icon: Database,
      description: 'Prove your expertise in APIs, databases, and server-side technologies',
      companies: ['Amazon', 'Microsoft', 'Uber', 'Stripe'],
      duration: '120 minutes',
      participants: 980,
      gradient: 'from-blue-500 to-cyan-500',
      formUrl: 'https://forms.google.com',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Showcase your design thinking, prototyping, and visual design abilities',
      companies: ['Figma', 'Adobe', 'Notion', 'Dropbox'],
      duration: '60 minutes',
      participants: 750,
      gradient: 'from-orange-500 to-red-500',
      formUrl: 'https://forms.google.com',
    },
    {
      id: 4,
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Demonstrate your iOS, Android, or cross-platform development skills',
      companies: ['Apple', 'Twitter', 'Spotify', 'Instagram'],
      duration: '90 minutes',
      participants: 820,
      gradient: 'from-green-500 to-emerald-500',
      formUrl: 'https://forms.google.com',
    },
    {
      id: 5,
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Show your knowledge of cloud platforms, CI/CD, and infrastructure',
      companies: ['AWS', 'Google Cloud', 'Docker', 'HashiCorp'],
      duration: '75 minutes',
      participants: 640,
      gradient: 'from-sky-500 to-blue-500',
      formUrl: 'https://forms.google.com',
    },
    {
      id: 6,
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Test your security knowledge and ethical hacking capabilities',
      companies: ['CrowdStrike', 'Palo Alto', 'Cisco', 'Cloudflare'],
      duration: '100 minutes',
      participants: 530,
      gradient: 'from-red-500 to-rose-500',
      formUrl: 'https://forms.google.com',
    },
    */
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm">{t('examination.hero.badge')}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl text-white mb-4">
              {t('examination.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('examination.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exam Fields Grid */}
      <section className="relative py-12 px-4 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 overflow-hidden transition-all hover:border-purple-500/50"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${field.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${field.gradient} rounded-2xl flex items-center justify-center`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <field.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${field.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl text-white mb-3">{field.title}</h3>
                  <p className="text-gray-400 mb-6">
                    {field.description} {/* Kept in English as per requirements */}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{t('examination.card.duration', { duration: field.duration.replace(/\D/g, '') })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Users className="w-4 h-4" />
                      <span>- participants</span>
                    </div>
                  </div>

                  {/* Companies */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3">{t('examination.card.companies')}</p>
                    <div className="flex flex-wrap gap-2">
                      {field.companies.map((company) => (
                        <motion.span
                          key={company}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-slate-800/80 text-gray-300 text-xs rounded-full border border-slate-700"
                        >
                          {company}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Register Button */}
                  <motion.a
                    href={field.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${field.gradient} text-white rounded-xl flex items-center justify-center gap-2 group/btn transition-all hover:shadow-lg`}
                  >
                    {t('examination.card.register_button')}
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${field.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

            <div className="relative z-10">
              <h2 className="text-4xl text-white mb-8 text-center">
                {t('examination.assessments.title')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-2">{t('examination.assessments.get_certified.title')}</h3>
                  <p className="text-gray-400">
                    {t('examination.assessments.get_certified.description')}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-2">{t('examination.assessments.stand_out.title')}</h3>
                  <p className="text-gray-400">
                    {t('examination.assessments.stand_out.description')}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-2">{t('examination.assessments.unlock_opportunities.title')}</h3>
                  <p className="text-gray-400">
                    {t('examination.assessments.unlock_opportunities.description')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
