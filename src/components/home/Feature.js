import chat from '../../assets/icon-chat.png'
import money from '../../assets/icon-money.png'
import security from '../../assets/icon-security.png'
import PropTypes from 'prop-types';

/**
 * make the 3 features on homepage
 * @param {object} value - values to build a feature component
 * @returns react component.
 */
const Feature = ({ value }) => {
    const { type, title, text } = value
    const imgSrc = {
        chat: chat,
        money: money,
        security: security,
    }

    return (
        <div className="feature-item">
            <img src={imgSrc[type]} alt={`${type} Icon`} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

//PropTypes
Feature.propTypes = {
    value: PropTypes.objectOf(PropTypes.string)
}
export default Feature

