// Portfolio data types and interfaces converted to JSDoc comments

/**
 * @typedef {Object} Theme
 * @property {string} primary
 * @property {string} secondary
 * @property {string} accent
 * @property {string} background
 * @property {string} surface
 * @property {string} text
 * @property {string} textSecondary
 * @property {string} fontFamily
 * @property {Object} fontSize
 * @property {string} fontSize.sm
 * @property {string} fontSize.md
 * @property {string} fontSize.lg
 * @property {string} fontSize.xl
 * @property {Object} spacing
 * @property {string} spacing.sm
 * @property {string} spacing.md
 * @property {string} spacing.lg
 * @property {string} spacing.xl
 * @property {string} borderRadius
 */

/**
 * @typedef {Object} AboutData
 * @property {string} name
 * @property {string} title
 * @property {string} bio
 * @property {string[]} skills
 */

/**
 * @typedef {Object} ProjectData
 * @property {string} title
 * @property {string} description
 * @property {string[]} technologies
 * @property {string} link
 */

/**
 * @typedef {Object} ExperienceData
 * @property {string} company
 * @property {string} position
 * @property {string} duration
 * @property {string} description
 */

/**
 * @typedef {Object} ContactData
 * @property {string} email
 * @property {string} phone
 * @property {string} linkedin
 * @property {string} github
 * @property {string} website
 */

/**
 * @typedef {Object} PortfolioSection
 * @property {string} id
 * @property {'about'|'projects'|'experience'|'contact'} type
 * @property {string} title
 * @property {boolean} isVisible
 * @property {AboutData|ProjectData[]|ExperienceData[]|ContactData} data
 */

/**
 * @typedef {Object} PortfolioState
 * @property {PortfolioSection[]} sections
 * @property {Theme} theme
 * @property {boolean} previewMode
 */

export {};