import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { timelineEntries } from '../data/portfolio';
import type { TimelineCategory, TimelineEntry } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Modal } from './Modal';

const filters: Array<'All' | TimelineCategory> = ['All', 'Internship', 'Leadership', 'Education',];

const categoryColors: Record<TimelineCategory, string> = {
  Internship: 'bg-blue-500',
  Leadership: 'bg-amber-500',
  Education: 'bg-emerald-500',
};

export default function Timeline() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');
  const [selectedEntry, setSelectedEntry] = useState<TimelineEntry | null>(null);

  const entries = useMemo(
    () => timelineEntries.filter((entry) => activeFilter === 'All' || entry.category === activeFilter),
    [activeFilter],
  );

  const openModal = (entry: TimelineEntry) => {
    setSelectedEntry(entry);
  };

  const closeModal = () => {
    setSelectedEntry(null);
  };

  // Sort entries by year (descending) and group by year
  const yearGroups = useMemo(() => {
    const sorted = [...entries].sort((a, b) => {
      const startA = parseInt(a.year.split('-')[0]);
      const startB = parseInt(b.year.split('-')[0]);
      if (startB !== startA) return startB - startA;
      
      const endA = a.year.includes('-') ? parseInt(a.year.split('-')[1]) : startA;
      const endB = b.year.includes('-') ? parseInt(b.year.split('-')[1]) : startB;
      return endB - endA;
    });

    const groups: Array<{ year: string; entries: typeof sorted }> = [];
    let currentYear = '';
    
    sorted.forEach((entry) => {
      if (entry.year !== currentYear) {
        currentYear = entry.year;
        groups.push({ year: currentYear, entries: [entry] });
      } else {
        groups[groups.length - 1].entries.push(entry);
      }
    });
    
    return groups;
  }, [entries]);

  return (
    <section
      id="about"
      ref={ref}
      className={`mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-fg-tertiary">Timeline</span>
      </div>
      <h2 className="font-display text-3xl font-semibold text-fg md:text-4xl">My Journey</h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-secondary">
        From a curious STEM Student to IT Student, Experience IT, and beyond. Here&apos;s my timeline of growth and experiences
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? 'bg-fg text-bg'
                : 'border border-border text-fg-secondary hover:border-accent hover:text-accent'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 space-y-12">
        {yearGroups.map(({ year, entries: yearEntries }) => (
          <div key={year}>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-tertiary text-sm font-semibold text-fg">
                {year}
              </div>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="mt-6 space-y-4">
              {yearEntries.map((entry) => (
                  <article
                    key={entry.id}
                    onClick={() => openModal(entry)}
                    className="rainbow-border overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-md cursor-pointer"
                  >
                    <div className="flex w-full items-center justify-between gap-4 p-6 text-left">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`h-3 w-3 rounded-full ${categoryColors[entry.category]}`} />
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-tertiary">
                          {entry.category}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-fg">{entry.title}</h3>
                      </div>
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-fg-tertiary" />
                    </div>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>

      {selectedEntry && (
        <Modal
          isOpen={!!selectedEntry}
          onClose={closeModal}
          title={selectedEntry.title}
          subtitle={`${selectedEntry.organization} • ${selectedEntry.year}`}
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            {selectedEntry.description}
          </p>
          <p className="text-sm text-muted-foreground">{selectedEntry.summary}</p>
        </Modal>
      )}
    </section>
  );
}
