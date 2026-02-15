import { useMemo, useState } from 'react';
import './Contact.scss';
import content from '../../../i18n/fr.json';

const githubIcon = '/src/assets/icons/github-brands-solid-full.svg';
const linkedinIcon = '/src/assets/icons/linkedin-brands-solid-full.svg';
const instagramIcon = '/src/assets/icons/instagram-brands-solid-full.svg';
const discordIcon = '/src/assets/icons/discord-brands-solid-full.svg';
const paperPlaneIcon = '/src/assets/icons/paper-plane-solid-full.svg';
const closeIcon = '/src/assets/icons/xmark-solid-full.svg';

const getIconStyle = (icon) => ({
    maskImage: `url(${icon})`
});

export default function Contact() {
    const initialFormState = {
        subject: '',
        email: '',
        message: '',
        consent: false
    };
    const [formState, setFormState] = useState(initialFormState);
    const [honeypot, setHoneypot] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked, dataset } = event.target;
        const fieldName = dataset.field ?? name;
        const nextValue = type === 'checkbox' ? checked : value;
        setFormState((prev) => ({
            ...prev,
            [fieldName]: nextValue
        }));
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        if (name !== 'subject' && name !== 'message') {
            return;
        }
        setFormState((prev) => ({
            ...prev,
            [name]: value.trim()
        }));
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isFormValid = useMemo(() => {
        const subjectValid = formState.subject.length > 0;
        const messageValid = formState.message.length > 0;
        const emailValid = emailRegex.test(formState.email);
        const honeypotValid = honeypot.length === 0;
        return subjectValid && messageValid && emailValid && formState.consent && honeypotValid;
    }, [formState, honeypot]);

    const handleSubmit = (event) => {
        if (!isFormValid) {
            event.preventDefault();
            return;
        }
        setShowSuccess(true);
        setTimeout(() => {
            setFormState(initialFormState);
            setHoneypot('');
        }, 0);
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
    };

    return (
        <section id='contact' className='app__section contact'>
            <header className='contact__header'>
                <h2 id='contact-title' className='contact__title'>{content.contact.title}</h2>
                <p className='contact__subtitle'>{content.contact.subtitle}</p>
            </header>
            <form
                className='contact__form'
                aria-labelledby='contact-title'
                action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSetMR8B93i1BfPQB6AlFb4oOObYrWpndoylY_Bw0a5qKWhDYg/formResponse'
                method='POST'
                target='contact-form-target'
                onSubmit={handleSubmit}
            >
                <iframe title='contact-form-target' name='contact-form-target' className='contact__honeypot' />
                <div className='contact__honeypot' aria-hidden='true'>
                    <label htmlFor='contact-website'>Website</label>
                    <input
                        id='contact-website'
                        name='website'
                        type='text'
                        value={honeypot}
                        onChange={(event) => setHoneypot(event.target.value)}
                        autoComplete='off'
                        tabIndex='-1'
                    />
                </div>
                <div className='contact__field'>
                    <label className='contact__label' htmlFor='contact-subject'>
                        {content.contact.form.subjectLabel}
                        <span className='required-input'>*</span>
                    </label>
                    <input
                        className='contact__input'
                        id='contact-subject'
                        name='entry.131348599'
                        data-field='subject'
                        type='text'
                        placeholder={content.contact.form.subjectPlaceholder}
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className='contact__field'>
                    <label className='contact__label' htmlFor='contact-email'>
                        {content.contact.form.emailLabel}
                        <span className='required-input'>*</span>
                    </label>
                    <input
                        className='contact__input'
                        id='contact-email'
                        name='entry.1304058893'
                        data-field='email'
                        type='email'
                        placeholder={content.contact.form.emailPlaceholder}
                        required
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='contact__field'>
                    <label className='contact__label' htmlFor='contact-message'>
                        {content.contact.form.messageLabel}
                        <span className='required-input'>*</span>
                    </label>
                    <textarea
                        className='contact__textarea'
                        id='contact-message'
                        name='entry.473784072'
                        data-field='message'
                        placeholder={content.contact.form.messagePlaceholder}
                        rows='6'
                        required
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className='contact__consent'>
                    <input
                        className='contact__checkbox'
                        id='contact-consent'
                        name='entry.1364729283'
                        data-field='consent'
                        type='checkbox'
                        value={content.contact.form.consentLabel}
                        required
                        checked={formState.consent}
                        onChange={handleChange}
                    />
                    <label className='contact__consent-label' htmlFor='contact-consent'>
                        {content.contact.form.consentLabel}
                        <span className='required-input'>*</span>
                    </label>
                </div>
                <button className='contact__submit' type='submit' disabled={!isFormValid}>
                    <span
                        className='contact__submit-icon'
                        style={getIconStyle(paperPlaneIcon)}
                        aria-hidden='true'
                    />
                    {content.contact.form.submitLabel}
                </button>
            </form>
            <div className='contact__divider' aria-hidden='true' />
            <aside className='contact__follow' aria-labelledby='contact-follow-title'>
                <h3 id='contact-follow-title' className='contact__follow-title'>
                    {content.contact.followTitle}
                </h3>
                <ul className='contact__follow-list'>
                    <li className='contact__follow-item'>
                        <a className='contact__follow-link' href='#'>
                            <span className='contact__follow-icon' style={getIconStyle(githubIcon)} aria-hidden='true' />
                            Github
                        </a>
                    </li>
                    <li className='contact__follow-item'>
                        <a className='contact__follow-link' href='#'>
                            <span className='contact__follow-icon' style={getIconStyle(linkedinIcon)} aria-hidden='true' />
                            Linkdin
                        </a>
                    </li>
                    <li className='contact__follow-item'>
                        <a className='contact__follow-link' href='#'>
                            <span className='contact__follow-icon' style={getIconStyle(instagramIcon)} aria-hidden='true' />
                            Instagram
                        </a>
                    </li>
                    <li className='contact__follow-item'>
                        <a className='contact__follow-link' href='#'>
                            <span className='contact__follow-icon' style={getIconStyle(discordIcon)} aria-hidden='true' />
                            Discord
                        </a>
                    </li>
                </ul>
            </aside>
            {showSuccess ? (
                <div className='contact__success' onClick={handleCloseSuccess}>
                    <div className='contact__success-content' onClick={(event) => event.stopPropagation()}>
                        <button
                            type='button'
                            className='contact__success-close'
                            onClick={handleCloseSuccess}
                        >
                            <span
                                className='contact__success-close-icon'
                                style={getIconStyle(closeIcon)}
                                aria-hidden='true'
                            />
                        </button>
                        <p className='contact__success-text'>{content.contact.submitSuccess}</p>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
