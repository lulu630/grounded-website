import { useEffect, useRef, useState } from "react"

function useIntersectionObserver(threshold = 1) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
    // Получаем DOM-элемент, к которому компонент привязал ref
    const element = ref.current

    // Если элемента ещё нет, завершаем функцию
    if (!element) return

    // Создаём наблюдатель за видимостью элемента
    const observer = new IntersectionObserver(
        // Берём первую запись из массива результатов наблюдения
        ([entry]) => {
            if (
                // Элемент пересекается с видимой областью окна
                entry.isIntersecting &&
                // Видимая доля элемента достигла заданного порога
                entry.intersectionRatio >= threshold
            ) {
                // Сообщаем компоненту, что можно запускать анимацию
                setIsVisible(true)

                // Останавливаем наблюдение: появление нужно только один раз
                observer.disconnect()
            }
        },

        // Порог видимости: 1 — весь элемент, 0.15 — 15%
        // Это сокращение записи { threshold: threshold }
        { threshold }
    )

    // Начинаем наблюдать за выбранным элементом
    observer.observe(element)

    // Очистка при удалении компонента или перед перезапуском эффекта
    return () => observer.disconnect()
}, [threshold]) // Перезапускаем эффект, если threshold изменится

    return { ref, isVisible }
}

export default useIntersectionObserver