import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoLinkedin, BiLogoFacebook} from 'react-icons/bi'


export const LinksFooter = [
    {
        category: 'Links Principais',
        links: [
            {
                page: 'Home',
                path: '/'
            },
            {
                page: 'Ferramentas',
                path: '/ferramentas'
            },
            {
                page: 'Preços',
                path: '/precos'
            },
            {
                page: 'Contato',
                path: '/contato'
            },

        ]
    },
    {
        category: 'Cases',
        links: [
            {
                page: 'Geração de Leads B2B',
                path: '/geracao-leads-b2b'
            },
            {
                page: 'Geração de Leads em Software',
                path: '/geracao-leads-software'
            },
            {
                page: 'Geração de Leads em Imobiliária',
                path: '/geracao-leads-imobiliaria'
            },
            {
                page: 'Cases de Sucesso',
                path: '/cases-suceso'
            },

        ]
    },
    {
        category: 'Materiais',
        links: [
            {
                page: 'Blog',
                path: '/blog'
            },
            {
                page: 'Parceria com Agências',
                path: '/parceria-agencias'
            },
            {
                page: 'Guia Definitivo do Marketing',
                path: '/guia/marketing'
            },
            {
                page: 'Materiais Gratuitos',
                path: '/guia/gratuitos'
            },

        ]
    }
]


export const ContactMidia = {
    socialMidias : [
        {
            icon: <BiLogoLinkedin />,
            url: 'https://www.linkedin.com/',
        },
        {
            icon: <BiLogoFacebook />,
            url: 'https://www.facebook.com/',
        },
        {
            icon: <AiOutlineInstagram />,
            url: 'https://www.instagram.com/',
        },
    ],
    email: 'contato@leadster.com.br',
    phone: '(42) 98828-9851',
    locale: ' Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso'
}