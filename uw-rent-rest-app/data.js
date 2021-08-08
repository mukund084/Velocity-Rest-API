// Array of Markers

const Markers = [
    {
        id: 1,
        x: 0,
        y:0,
        image_url: '',
        description: '',
        location: '',

    }
];


const data = {
    getting_started: [
        {
            id: 1,
            Resource: 'Centre for Career Action',
            Organization: 'UWaterloo',
            Building: 'Co-op Building (Tatham Centre) ',
            description: 'The Centre for Career Action (CCA) supports all students, alumni and employees. Career Advisors can help with career planning, career management strategies, graduate and professional school preparation, work search methods and setting meaningful career goals.'},
        {
            id: 2,
            Resource: 'Conrad Grebel PeaceTech Living Learning Community',
            Organization: 'Kindred Credit Union Centre for Peace Advancement',
            Building: 'Conrad Grebel ',
            description: 'The PeaceTech Living-Learning Community is a cluster of students from diverse faculties interested in exploring the intersection of technology and peace in society. The community is made of students who are residents, virtual residents, or associates at Conrad Grebel University College. '},
        {
            id: 3,
            Resource: 'Entrepreneurship Library Collection',
            Organization: 'UWaterloo',
            Building: 'Library',
            description: 'resources available to current Waterloo users that might support their entrepreneurship- and innovation-related research.'},
        {
            id: 4,
            Resource: 'Innovators in Residence',
            Organization: 'GreenHouse',
            Building: 'St. Pauls University ',
            description: 'Join GreenHouses Innovators in Residence program, a community where student innovators receive mentorship, training, community and funding to solve social or environmental problems. Like a club at school, GreenHouse is a community for like-minded students who want to create social or environmental problems.  '},
        {
            id: 5,
            Resource: 'Concept Intro Sessions',
            Organization: 'Concept by Velocity',
            Building: 'South Campus Hall ',
            description: 'Attend Concept intro sessions to learn about entrepreneurship, get a glimpse into the world of startups, build new skills, and engage with the Concept community!'},
        {
            id: 6,
            Resource: 'Entrepreneurship Society',
            Organization: 'UWaterloo',
            Building: 'SLC ',
            description: 'EntSoc aims to build inclusive innovation by exposing students of all faculties to Waterloos entrepreneurial ecosystem'},
        {
            id: 7,
            Resource: 'eEDGE',
            Organization: 'UWaterloo',
            Building: '',
            description: 'eEDGE combines Waterloo’s world-leading entrepreneurship and work-integrated learning programming to provide students with an exciting new experiential opportunity',},
    ],
    early_stage: [
        {
            id: 1,
            Resource: 'Problem Lab workshops',
            Organization: 'Problem Lab',
            Building: 'Math 3 ',
            description: 'Problem Lab runs workshops on how students can use problem analysis and research skills to advance their careers. Students are taught to be entrepreneurial employees by identifying high priority problems their employers have. This is open to both undergrad and graduate students.' },

        {
            id: 2,
            Resource: 'Residence Problem Pitch',
            Organization: 'Problem Lab',
            Building: '',
            description: 'First Year students in residence are invited to pitch an important industry problem under a designated theme (e.g., problems in recreation, problems in human-computer interactions) to compete for up to $10,000 in R&D funding.' },
        
        {
            id: 3,
            Resource: 'Discovery Lab',
            Organization: 'GreenHouse',
            Building: '',
            description: 'Discovery Labs is where students, community members and a host organization identify problems and opportunity spaces based on a different theme. During the Discovery Lab, students identify opportunities for innovation based on the theme for the lab and Greenhouse teaches them skills in ethical design to address them.'  },

        {
            id: 4,
            Resource: 'Co-op Problem Award',
            Organization: 'Problem Lab',
            Building: '',
            description: 'students who are in co-op can submit an analysis of an important problem relevant to a co-op employer or the employer’s industry for a tuition scholarship of $1,500 and $750. Students can choose a problem from any of their previous co-op terms.'  },

        {
            id: 5,
            Resource: 'The Zero Experience',
            Organization: 'Problem Lab',
            Building: '',
            description: 'The Zero Experience differentiates you from the crowd. You’ll build a network of experts to support you, solve problems affecting millions of people, and learn how to make your visions a reality. You’ll try analyzing problems, interviewing industry mentors, designing new solution ideas, leading tightly knit teams of peers, and applying all these skills to your personal goals and growth.' , },
        {
            id: 6,
            Resource: 'Map The System',
            Organization: 'Kindred Credit Union Centre for Peace Advancement',
            Building: '',
            description: 'Tackling global challenges starts with understanding a problem and its wider context, rather than jumping straight into a business plan or an idea for a quick fix. This global competition asks students to select a social or environmental issue and to use systems thinking to explore, probe, and research all the connecting elements and factors around it.'
        }
    ],
    build_test: [
        {
            id: 1,
            Resource: 'Social Innovators In Training',
            Organization: 'GreenHouse',
            Building: '',
            description: 'Work with other like-minded innovators interested in creating social or environmental change through projects and ventures. This is a great opportunity for students who know they want to start their own business or initiative. The program can be done within a course or as a co-curricular activity. Social Innovators in Training is a unique experience where students are given milestones to move ideas into action, access core mentors including the professional networks at GreenHouse, and access to funding opportunities to move  ideas forward.'},

        {
            id: 2,
            Resource: 'Quantum Valley Investments ® Problem Pitch Competition',
            Organization: 'Problem Lab',
            Building: '',
            description: 'Each term, students are invited to pitch an important industry problem to compete for up to $30,000 in R&D funding.'},
        
    {
            id: 3,
            Resource: 'Concept Working Sessions',
            Organization: 'Concept/Velocity',
            Building: '',
            description: 'These small sessions will allow you to work with a Concept Coach and dive deeper into a wide variety of topics. These will go beyond the information provided in Intro Sessions and allow a more hands on approach to further engage, ask questions, and take a closer look into a wide range topics.'},

        {
            id: 4,
            Resource: 'Concept Coaches',
            Organization: 'Concept/Velocity',
            Building: '',
            description: 'Meet with coaches who to work you one-on-one on your entrepreneurial ideas. These coaches are either founders themselves or were one of the very first startup employees–so they have been there and done that. This is a unique opportunity for you to learn from someone with hands-on experience.' },

        {
            id: 5,
            Resource: 'GH Workplace Innovation',
            Organization: 'GreenHouse',
            Building: '',
            description: 'Workplace Innovation is a program where change makers work with a host organization to solve real problems. Teams are trained through an innovation framework to identify opportunities and design for the most impactful solutions. This program is great for students who want to work on a project but don’t know what problem to focus on or who are interested in working with an organization and a team.',},
        {
            id: 6,
            Resource: 'Norman Esch Entrepreneurship Award',
            Organization: 'Conrad School of Entrepreneurship and Business',
            Building: '',
            description: 'The Norman Esch Entrepreneurship Award provides a minimum of six awards, ranging in value from $5,000-$10,000 each, for student teams enrolled in the Faculty of Engineerings Fourth-Year Capstone Design Project. The awards are open to student teams from all departments within the Faculty of Engineering.',},
        {
            id: 7,
            Resource: 'HULT Prize',
            Organization: 'Other',
            Building: '',
            description: 'The Hult Prize is a social entrepreneurship competition which challenges student teams around the globe to develop sustainable social ventures to address the worlds most pressing issues—with a global grand prize of $1 million USD!',},
        {
            id: 8,
            Resource: 'Bridging Entrepreners to Students (BETS) ',
            Organization: 'Conrad School of Entrepreneurship and Business',
            Building: '',
            description: 'The Bridging Entrepreneurs to Students (BETS) program is a specialized co-op program established to support two key groups: junior engineering, mathematics and SAF co-op students, and seed and early-stage startup companies who would not otherwise have the resources to hire full-time staff or co-op students for 16 weeks. The BETS program brings these groups together by pairing teams of two entrepreneurial co-op students with companies for a 12-week project placement.',
        }
    ],
    funding_competition: [
        {
            id: 1,
            Resource: 'Social Impact Showcase',
            Organization: 'GreenHouse',
            Building: '',
            description: 'The Social Impact Showcase is a virtual event that occurs every term which celebrates the amazing work GreenHouse students accomplish through their journeys of social innovation and entrepreneurship. At the end of the event, we announce grants for some early stage, high-potential ideas as well as the winner of the People’s Choice Award. ', },

        {
            id: 2,
            Resource: 'Enterprise Co-op',
            Organization: 'Conrad School of Entrepreneurship and Business',
            Building: '',
            description: 'Waterloo is world-renowned for its strength in innovation and co-operative education. A signature program at Waterloo, Enterprise Co-op (E Co-op) allows students to pursue an entrepreneurial co-op option in which students start their own business while earning a co-op credit. After graduation, E Co-op students continue with their venture, begin a new one, or use their E Co-op know-how to obtain employment. E Co-op is a great experience that builds business knowledge, capabilities, and independence that employers value.', },
        
        {
            id: 3,
            Resource: 'Conrad E-Launch Awards',
            Organization: 'Conrad School of Entrepreneurship and Business',
            Building: '',
            description: 'The E-Launch Awards are awarded to the winners of a pitch competition among students in the Enterprise Co-op (E Co-op) program. Up to five scholarships of $5,000 are awarded each term.', },

        {
            id: 4,
            Resource: 'Concept $5K ',
            Organization: 'Concept/Velocity',
            Building: '',
            description: 'The Concept $5K Pitch Competition runs every semester and provides early stage funding to student led teams with promising start up ideas. Winning teams will receive $5,000, guidance, and additional support to help turn their concept into a reality. ', },

        {
            id: 5,
            Resource: 'Mitacs ',
            Organization: 'Other',
            Building: '',
            description: 'Mitacs offers a variety of programs and funding to help student entrepreneurs develop their research and build their ideas. They also offer programs to help enhance your future career by developing important skills and making meaningful connections.  ',
        },
        {
            id: 6,
            Resource: 'Concept Cornerstone',
            Organization: 'Concept',
            Building: '',
            description: 'Accelerate your venture with the Concept Pre-Cornerstone. Students will explore customer discovery and validation while creating a network of founders to share knowledge and resources.',
        },
        
    ],
    starting_launch: [
        {
            id: 1,
            Resource: 'Epp Peace Incubator',
            Organization: 'Kindred Credit Union Centre for Peace Advancement',
            Building: '',
            description: 'Supports social impact start-ups focused on peace and justice by providing co-working space, mentorship, and seed funding.', },

        {
            id: 2,
            Resource: 'Velocity Incubator',
            Organization: 'Concept/Velocity',
            Building: '',
            description: 'Velocity is an incubator for early-stage, pre-seed technology startups from the University of Waterloo and around the world.', },
        
        {
            id: 3,
            Resource: 'Waterloo Commercialization Office',
            Organization: 'University of Waterloo Research',
            Building: 'East Campus 5 ',
            description: 'Transferring research innovations into the marketplace can have transformative societal impacts on improving quality of life as well as enhancing business productivity and job creation.', },

        
    ]
};
export default data; 

// export default Markers;