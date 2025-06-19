function setupDragHandlers(mountElement, sceneRef, isDragging, previousMousePosition, currentRotation, isReturning) {
    if (!mountElement) return;

    const handleMouseDown = (event) => {
        isDragging.current = true;
        isReturning.current = false;
        previousMousePosition.current = {
            x: event.clientX,
            y: event.clientY
        };
        mountElement.style.cursor = 'grabbing';
    };

    const handleMouseMove = (event) => {
        if (!isDragging.current) return;

        const deltaMove = {
            x: event.clientX - previousMousePosition.current.x,
            y: event.clientY - previousMousePosition.current.y
        };

        const rotationSpeed = 0.005;
        currentRotation.current.y += deltaMove.x * rotationSpeed;
        currentRotation.current.x += deltaMove.y * rotationSpeed;

        previousMousePosition.current = {
            x: event.clientX,
            y: event.clientY
        };
    };

    const handleMouseUp = () => {
        if (isDragging.current) {
            isDragging.current = false;
            isReturning.current = true;
            mountElement.style.cursor = 'grab';
        }
    };

    const handleTouchStart = (event) => {
        if (event.touches.length === 1) {
            isDragging.current = true;
            isReturning.current = false;
            previousMousePosition.current = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };
        }
    };

    const handleTouchMove = (event) => {
        if (!isDragging.current || event.touches.length !== 1) return;
        event.preventDefault();

        const deltaMove = {
            x: event.touches[0].clientX - previousMousePosition.current.x,
            y: event.touches[0].clientY - previousMousePosition.current.y
        };

        const rotationSpeed = 0.005;
        currentRotation.current.y += deltaMove.x * rotationSpeed;
        currentRotation.current.x -= deltaMove.y * rotationSpeed;

        previousMousePosition.current = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        };
    };

    const handleTouchEnd = () => {
        if (isDragging.current) {
            isDragging.current = false;
            isReturning.current = true;
        }
    };

    mountElement.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    mountElement.addEventListener('touchstart', handleTouchStart);
    mountElement.addEventListener('touchmove', handleTouchMove);
    mountElement.addEventListener('touchend', handleTouchEnd);

    return () => {
        mountElement.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        mountElement.removeEventListener('touchstart', handleTouchStart);
        mountElement.removeEventListener('touchmove', handleTouchMove);
        mountElement.removeEventListener('touchend', handleTouchEnd);
    };
}
