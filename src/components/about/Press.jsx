import { IoIosArrowRoundForward } from "react-icons/io";

const pressItems = [
  {
    id: 1,
    content: `The Supreme Court's decision restricting the use of a landmark 2018 drug reform law landed like an anvil Monday morning at the Decarceration Collective, a Chicago law firm that seeks to free people serving life sentences for federal drug crimes. The unanimous ruling said the law — which has been used to cut the sentences of thousands of federal drug offenders, including many accused of handling large amounts of crack cocaine — couldn't be used to reduce the sentences of people convicted of possessing small amounts of crack.`,
    link: 'https://news.bloomberglaw.com/litigation/drug-convict-to-get-life-sentence-revisited-under-first-step-act'
  },
  {
    id: 2,
    content: `The court's ruling came over the objections of the law's authors, who said they intended to help those low-level offenders, and the Biden administration, whose Justice Department declined to argue for the narrow interpretation of the law in court. "It's a shocking loss," said MiAngel Cody, lead counsel and justice policy analyst at the Decarceration Collective. Cody said she has represented a "kingpin" convicted of possessing thousands of kilos of crack who was released under the 2018 law, known as the First Step Act.`,
    link: 'https://www.nbcnews.com/news/us-news/supreme-court-ruling-crack-sentences-shocking-loss-drug-reform-advocates-n1270801'
  },
];

const Press = () => {
  return (
    <>
      <div className="container mx-auto py-[100px] px-4">
        <div>
          <h1 className="text-[#39648C] font-medium text-3xl lg:text-5xl mb-12 tracking-[5px]">
            Press
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white text-center">
          {pressItems.map((item) => (
            <>
              <h1 key={item.id} className="bg-[#39648C] font-neue p-8 gap-y-4 text-sm flex flex-col items-center">
                {item.content}
                <a href={item.link} target="_blank" className="flex font-copperplate font-light border-b border-white pb-1  gap-x-1 items-center">
                Read More <IoIosArrowRoundForward />
              </a>
              </h1>
          
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Press;
