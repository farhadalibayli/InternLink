import { motion } from 'framer-motion';
import { Building2, MapPin, ExternalLink, Search } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function InternshipsPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const internships = [
    {
      id: 1,
      position: 'internships.items.azersun.position',
      company: 'internships.items.azersun.company',
      location: 'internships.items.azersun.location',
      type: 'onsite',
      description: 'internships.items.azersun.description',
      tags: ['internships.tags.fulltime', 'internships.tags.3month', 'internships.tags.deadline_2025_12_20'],
      logo: 'https://i.imgur.com/uwde3Wo.png',
      applyUrl: 'https://hr.azersun.com/job/%C4%B0mi%C5%9Fli-T%C9%99cr%C3%BCb%C9%99%C3%A7i/1330799855/',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      position: 'internships.items.aga_ai.position',
      company: 'internships.items.aga_ai.company',
      location: 'internships.items.aga_ai.location',
      type: 'onsite',
      description: 'internships.items.aga_ai.description',
      tags: ['internships.tags.fulltime', 'internships.tags.3month', 'internships.tags.deadline_2025_12_03'],
      logo: 'https://i.imgur.com/R2en9bm.png',
      applyUrl:
        'https://jobs.glorri.com/corporate/vacancies/agagroup/agagroup-suni-intellekt-uzre-tecrube-proqrami-88235?source=tecrube.az',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      position: 'internships.items.unibank.position',
      company: 'internships.items.unibank.company',
      location: 'internships.items.unibank.location',
      type: 'onsite',
      description: 'internships.items.unibank.description',
      tags: ['internships.tags.fulltime', 'internships.tags.3month', 'internships.tags.deadline_2025_12_16'],
      logo: 'https://i.imgur.com/pFSGfWL.png',
      applyUrl: 'https://jobs.glorri.com/corporate/vacancies/unibank/unibank-kart-biznesi-uzre-tecrubeci-92536',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      position: 'internships.items.pashapay.position',
      company: 'internships.items.pashapay.company',
      location: 'internships.items.pashapay.location',
      type: 'onsite',
      description: 'internships.items.pashapay.description',
      tags: ['internships.tags.fulltime', 'internships.tags.deadline_2025_12_12'],
      logo: 'https://i.imgur.com/2xN00X4.png',
      applyUrl: 'https://pashapay.huntflow.io/vacancy/satis-layih-si-uzr-t-crub-ci-1',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      position: 'internships.items.birbank.position',
      company: 'internships.items.birbank.company',
      location: 'internships.items.birbank.location',
      type: 'onsite',
      description: 'internships.items.birbank.description',
      tags: ['internships.tags.fulltime', 'internships.tags.deadline_2025_12_25'],
      logo: 'https://i.imgur.com/DWdq7XY.png',
      applyUrl: 'https://hr.kapitalbank.az/vacancies/6122',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 6,
      position: 'internships.items.azercell.position',
      company: 'internships.items.azercell.company',
      location: 'internships.items.azercell.location',
      type: 'onsite',
      description: 'internships.items.azercell.description',
      tags: ['internships.tags.fulltime', 'internships.tags.deadline_2025_12_28'],
      logo: 'https://i.imgur.com/izWu0eg.png',
      applyUrl:
        'https://careers.azercell.com/job/Baku-Bazar-Ara%C5%9Fd%C4%B1rmalar%C4%B1-%C3%BCzr%C9%99-T%C9%99cr%C3%BCb%C9%99-Proqram%C4%B1-Internship-in-Market-Research/1332396257/',
      gradient: 'from-sky-500 to-blue-500',
    },
  ];


  const filteredInternships = internships.filter((internship) => {
    const q = searchQuery.toLowerCase();

    const positionText = t(internship.position).toLowerCase();
    const companyText = t(internship.company).toLowerCase();
    const tagTexts = internship.tags.map((tag) => t(tag).toLowerCase());

    const matchesSearch =
      positionText.includes(q) || companyText.includes(q) || tagTexts.some((tag) => tag.includes(q));

    return matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl text-white mb-4">
              {t('internships.header.title_part1')}{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('internships.header.title_part2')}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              {t('internships.header.subtitle')}
            </p>

            {/* Search */}
            <div className="flex gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('internships.search.placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internship Cards */}
      <section className="relative py-10 px-4 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 overflow-hidden transition-all hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${internship.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Logo */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${internship.gradient} rounded-2xl flex items-center justify-center text-white overflow-hidden`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {internship.logo.startsWith('http') ? (
                        <img 
                          src={internship.logo} 
                          alt={internship.company} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        internship.logo
                      )}
                    </motion.div>

                    <span className="px-3 py-1 bg-slate-800 text-purple-400 text-sm rounded-full">
                      {t(`internships.type.${internship.type}`)}
                    </span>
                  </div>

                  {/* Position */}
                  <h3 className="text-xl text-white mb-2">{t(internship.position)}</h3>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Building2 className="w-4 h-4" />
                    <span>
                      {t('internships.card.company')}: {t(internship.company)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {t('internships.card.location')}: {t(internship.location)}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {t(internship.description)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {internship.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-800/50 text-gray-300 text-xs rounded-full"
                      >
                        {t(tag)}
                      </span>
                    ))}
                  </div>

                  {/* Apply button */}
                  <motion.a
                    href={internship.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${internship.gradient} text-white rounded-xl flex items-center justify-center gap-2 group/btn transition-all hover:shadow-lg`}
                  >
                    {t('internships.card.apply_button')}
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${internship.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            ))}
          </div>

          {filteredInternships.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-2xl text-gray-400">
                {t('internships.empty_state')}
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
