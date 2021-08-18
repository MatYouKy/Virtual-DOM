const DOM = {
    name: 'document',
    type: 'Document',
    children: [
        {
            name: 'html',
            type: 'Element',
            children: [
                {
                    name: 'head',
                    type: 'Element',
                    children:[
                        {
                            name: 'title',
                            type: 'Element',
                            children:[
                                {
                                    name: 'text',
                                    type: 'Text',
                                    content: 'My HTML Document'
                                }
                            ]
                        }
                    ]

                },
                {
                    name: 'body',
                    type: 'Element',
                    children: [
                        {
                            name: 'h1',
                            type: 'Element',
                            children: [
                                {
                                    name: 'text',
                                    type: 'Text',
                                    content: 'Heading'
                                },
                            ]
                        },
                        {
                            name: 'div',
                            type: 'Element',
                            children: [
                                {
                                    name: 'p',
                                    type: 'Element',
                                    children: [
                                        {
                                            name: 'text',
                                            type: 'Text',
                                            content: 'Tag 1'
                                        }
                                    ]
                                }
                            ]

                        }

                    ]
                }
            ]
        }
    ]
}