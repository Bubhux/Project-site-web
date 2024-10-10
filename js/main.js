// js/main.js


/**
 * @fileoverview IntersectionObserver pour déclencher l'apparition des éléments avec animation lorsque
 * ils entrent dans le viewport. Le code ajoute également la classe `loaded` au corps du document après le chargement de la page.
 */

/**
 * Ratio utilisé pour déterminer le seuil d'intersection.
 * @constant {number}
 */
const ratio = 0.1

/**
 * Options pour l'IntersectionObserver.
 * @constant {Object}
 * @property {Element|null} root - Élément racine pour l'observation (null pour viewport).
 * @property {string} rootMargin - Marge autour du root.
 * @property {number} threshold - Seuil d'intersection, déclenche à 10% visible.
 */
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

/**
 * Callback appelée lorsque les éléments observés intersectent le viewport.
 * Ajoute la classe 'reveal-visible' aux éléments visibles et les retire de l'observation.
 *
 * @param {IntersectionObserverEntry[]} entries - Liste des entrées observées.
 * @param {IntersectionObserver} observer - Instance de l'IntersectionObserver.
 */
const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Ajoute la classe 'reveal-visible' si l'élément est visible dans le viewport
            entry.target.classList.add('reveal-visible')
            // Arrête d'observer l'élément une fois qu'il est visible
            observer.unobserve(entry.target)
        }
    })
}

/**
 * Fonction exécutée lorsque la page est entièrement chargée.
 * Ajoute la classe 'loaded' au corps du document et initialise l'observateur pour tous les éléments
 * dont la classe contient 'reveal-'.
 */
window.onload = function () {
    // Ajoute la classe 'loaded' au body après le chargement complet de la page
    document.body.classList.add('loaded')

    // Crée une nouvelle instance d'IntersectionObserver avec la fonction de callback `handleIntersect`
    const observer = new IntersectionObserver(handleIntersect, options)

    // Sélectionne tous les éléments dont la classe contient 'reveal-' et les observe
    document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
        observer.observe(r)
    })
}
