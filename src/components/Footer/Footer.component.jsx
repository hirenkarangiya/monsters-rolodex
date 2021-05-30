import React from 'react'
import './Footer.style.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; <strong>{(new Date().getFullYear())}</strong>, All Right Reserved to Monsters Rolodex</p>
        </footer>
    )
}
