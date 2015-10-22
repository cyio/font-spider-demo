        var div = document.getElementsByTagName( 'test' );

        function css( element, property ) {
            return window.getComputedStyle( element, null ).getPropertyValue( property );
        }

        alert( css( div, 'font-family' ) );