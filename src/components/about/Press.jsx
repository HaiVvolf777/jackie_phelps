import React from 'react';

const pressItems = [
    {
        id: 1,
        content: `The Supreme Court's decision restricting the use of a landmark 2018 drug reform law landed like an anvil Monday morning at the Decarceration Collective, a Chicago law firm that seeks to free people serving life sentences for federal drug crimes. The unanimous ruling said the law — which has been used to cut the sentences of thousands of federal drug offenders, including many accused of handling large amounts of crack cocaine — couldn't be used to reduce the sentences of people convicted of possessing small amounts of crack.`,
    },
    {
        id: 2,
        content: `The court's ruling came over the objections of the law's authors, who said they intended to help those low-level offenders, and the Biden administration, whose Justice Department declined to argue for the narrow interpretation of the law in court. "It's a shocking loss," said MiAngel Cody, lead counsel and justice policy analyst at the Decarceration Collective. Cody said she has represented a "kingpin" convicted of possessing thousands of kilos of crack who was released under the 2018 law, known as the First Step Act.`,
    },
];

const Press = () => {
    return (
        <>
            <div className='container mx-auto py-[200px] px-4'>
                <div>
                    <h1 className='text-[#39648C] text-6xl lg:text-8xl font-bold mb-12'>
                        Press
                    </h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-white text-center'>
                    {pressItems.map((item) => (
                        <h1 key={item.id} className='bg-[#39648C] p-8'>
                            {item.content}
                        </h1>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Press;
