import Link from "next/link";

import { ContactGroup, FooterBootom, FooterContent, LinkContent, LinkGroup, LogoContent } from "./style";

import Image from "next/image";
import ImageLogo from "../../assets/images/logo.png"

import { ContactMidia, LinksFooter } from '../../assets/data/footer'


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContent>
            <div className="container" data-sequential>
                <LogoContent href={'/'}>
                    <Image data-animate='down' src={ImageLogo} alt='Logo Leadster' />
                    <span data-animate className="text">Transformando visitantes em clientes.</span>
                </LogoContent>

                <LinkContent>

                    {LinksFooter.map((link, index) => (
                        <LinkGroup key={index} data-sequential-stagger="up">
                            <h4 className="title">{link.category}</h4>
                            <ul className="list-nav">
                                {link.links.map((link, index) => (
                                    <li key={index}><Link href={link.path} className="list-nav--link">{link.page}</Link></li>
                                ))}
                            </ul>
                        </LinkGroup>
                    ))}
                    <ContactGroup data-sequential-stagger="up">
                        <h4 className="title">Siga a Leadster</h4>
                        <div className="social-midias">
                            {ContactMidia.socialMidias.map((midia, index) => (
                                <Link key={index} href={midia.url} className="social-midias--link">
                                    {midia.icon}
                                </Link>
                            ))}

                        </div>
                        <p className='links'>Email: <a href={`mailto:${ContactMidia.email}`}>{ContactMidia.email}</a></p>
                        <p className='links'>Telefone: <a href={`tel:${ContactMidia.phone.replace(' ', '').replace(/[()]/g, '')}`}>{ContactMidia.phone}</a></p>

                    </ContactGroup>

                </LinkContent>


            </div>

            <FooterBootom>
                <div className="container">
                    <p className="copyright">
                        Copyright © 2015 - {currentYear} - Todos os direitos reservados | <span>Leadster</span>
                    </p>

                    <p className="locale">
                        {ContactMidia.locale}
                    </p>
                </div>
            </FooterBootom>
        </FooterContent>
    )
}