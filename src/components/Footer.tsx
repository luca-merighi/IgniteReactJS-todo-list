import '../styles/footer.scss'
import { AiFillHeart } from 'react-icons/ai'

export function Footer() {
    return (
        <footer className="footer">
            <p>
                Desenvolvido com 
                <AiFillHeart size={20} color="#e74c3c" className="heart-icon" />
                por @<span>luca</span>.<span>merighii</span>
            </p>
        </footer>
    )
}