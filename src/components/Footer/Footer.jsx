import "./Footer.css"

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            &copy; {year} Alan Cuenca
        </div>
    )
}

export default Footer
