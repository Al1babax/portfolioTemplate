import { ProjectComp } from "./ProjectsComp";



export function Projects() {
  let objArr = [{ key: 'hello' },
  { key: 'morning' }, { key: 'evening' }, { key: 'hello' },
  { key: 'morning' }, { key: 'evening' }]

  let card = objArr.map(card => {
    return (
      <ProjectComp
        hello={card.key}

      />
    )
  })
  return (
    < div className="sidebar grid-rows-2 grid-cols-3 grid  w-full bg-slate-400 h-[960px] gap-3">
      {card}
    </div>
  );
}

