/*
 * Contenido aprobado para difusión pública.
 * No sincronizar automáticamente desde la biblioteca interna.
 */
window.GEMARIS_PUBLIC_CONTENT = {
  version: '0.1.0-alpha.2',
  lastUpdated: 'Actualizado: 13 de octubre de 2026',
  structureNotice: 'Esta es una propuesta conceptual para la empresa objetivo; no reproduce su organigrama vigente. Todos los módulos dependen de la Dirección General, que visualiza y controla sus procesos a nivel de dirección. Los nombres y agrupaciones podrán ajustarse al validarla. Los estados describen el desarrollo de GEMARIS.',
  moduleDisclaimer: 'La estructura y los servicios descritos expresan una visión de trabajo, no capacidades necesariamente implementadas. Los estados reflejan el avance conocido y no garantizan disponibilidad para uso. Los permisos de cada servicio y la independencia de Auditoría se mantienen.',
  updateGuidance: 'Estas notas resumen el estado del desarrollo; no anuncian una distribución ni sustituyen las notas de una versión validada.',
  direction: {
    name: 'Dirección General',
    kind: 'Nivel central de dirección · no es un módulo',
    status: 'conceptual',
    stateLabel: 'Conceptual · sin iniciar',
    description: 'Todos los módulos dependen de este nivel. Dirección General visualiza y controla de forma consolidada los procesos de la organización; sus servicios de dirección se expresan a través de los módulos, sin constituir un módulo independiente. Los servicios e indicadores están pendientes de definición.',
    note: 'La supervisión de conjunto se diseña con información y permisos adecuados para cada responsabilidad.'
  },
  transversalFunctions: [
    {
      name: 'Auditoría',
      kind: 'Función transversal e independiente',
      status: 'conceptual',
      stateLabel: 'Conceptual · sin iniciar',
      description: 'La revisión puede abarcar los procesos de todos los módulos, manteniendo independencia, trazabilidad y acceso limitado a evidencias e informes.'
    },
    {
      name: 'Control Interno',
      kind: 'Función transversal · regulación y control',
      status: 'conceptual',
      stateLabel: 'Conceptual · sin iniciar',
      description: 'Reúne la regulación y el control que se integrarán en los procesos de cada módulo. Sus responsabilidades, evidencias y servicios están pendientes de definición.'
    }
  ],
  organization: {
    name: 'Estructura organizativa objetivo',
    description: 'Los módulos y departamentos que aparecen a continuación dependen de Dirección General. Cada ficha concentra el estado conocido, sus tableros y el alcance público; los servicios se precisarán al inventariar cada proceso.',
    groups: [
      {
        id: 'governance',
        title: 'Gobierno y coordinación',
        description: 'Espacios de gobierno contemplados en la visión; su representación en GEMARIS está por definir.'
      },
      {
        id: 'modules',
        title: 'Módulos por área organizativa',
        description: 'Cada módulo agrupa los tableros de su ámbito. La tarjeta del módulo y sus tableros muestran su estado de desarrollo.'
      },
      {
        id: 'direct-departments',
        title: 'Departamentos de dependencia directa',
        description: 'Áreas consideradas en la estructura objetivo, separadas de las subdirecciones para facilitar la lectura.'
      }
    ],
    children: [
      {
        group: 'governance',
        name: 'Consejo de Dirección',
        kind: 'Espacio de gobierno objetivo',
        status: 'conceptual',
        stateLabel: 'Conceptual · sin iniciar',
        summary: 'La visión lo contempla como ámbito de coordinación. Su representación y relación con los servicios de Dirección General están pendientes de decisión.'
      },
      {
        group: 'modules',
        name: 'Subdirección Económica',
        kind: 'Módulo organizativo objetivo',
        status: 'development',
        stateLabel: 'En desarrollo',
        summary: 'La actividad de software actual se concentra en Contabilidad, en particular en Ingresos. El alcance de toda la Subdirección aún no está inventariado.',
        boards: [
          {
            name: 'Contabilidad y Finanzas',
            status: 'development',
            stateLabel: 'En desarrollo',
            summary: 'Alpha 2 se enfoca en Contabilidad y, en particular, en avanzar la integración del plan contable y del conciliador en el flujo de Ingresos.',
            details: [
              'Los parsers de captura y las asociaciones de centros de costo con códigos de medios de cobro constituyen la base funcional disponible.',
              'La integración del plan contable y del conciliador continúa en desarrollo; su alcance debe documentarse y validarse antes de considerar disponible el flujo completo.',
              'Planificación económica es un tablero distinto y no forma parte del alcance anunciado para este ciclo.'
            ]
          },
          {
            name: 'Planificación',
            status: 'conceptual',
            stateLabel: 'Conceptual · sin iniciar',
            summary: 'Se prevé analizarla en paralelo después de corregir errores de Ingresos; no se presenta como desarrollo iniciado.'
          },
          {
            name: 'Costos',
            status: 'conceptual',
            stateLabel: 'Conceptual · sin iniciar'
          },
          {
            name: 'Cobros y Pagos',
            status: 'conceptual',
            stateLabel: 'Conceptual · sin iniciar'
          }
        ]
      },
      {
        group: 'modules',
        name: 'Subdirección de Recursos Humanos',
        kind: 'Módulo organizativo objetivo',
        status: 'paused',
        stateLabel: 'En pausa',
        summary: 'El módulo de software de RRHH comenzó y su desarrollo está detenido por el momento. Se conocen dos servicios, pero no representan el alcance completo del área.',
        boards: [
          {
            name: 'Capital Humano',
            status: 'paused',
            stateLabel: 'En pausa',
            summary: 'Se identificaron consulta de plantilla y ficha con información e historial laboral y contable disponible.',
            details: [
              'El acceso individual a la ficha y la consulta de todos los trabajadores por personal autorizado deben validarse y protegerse antes de considerar estos servicios disponibles para sus perfiles previstos.'
            ]
          },
          { name: 'Capacitación', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' },
          { name: 'Cuadros', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' },
          { name: 'Seguridad y Salud del Trabajo', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' }
        ]
      },
      {
        group: 'modules',
        name: 'Subdirección Técnica o de Operaciones',
        kind: 'Módulo organizativo objetivo',
        status: 'conceptual',
        stateLabel: 'Conceptual · sin iniciar',
        summary: 'La estructura contempla áreas técnicas y operativas; sus procesos todavía no se han inventariado.',
        boards: [
          { name: 'Producción / Servicios', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' },
          { name: 'Talleres', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' },
          { name: 'Mantenimiento', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' },
          { name: 'Control de Calidad', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' }
        ]
      },
      {
        group: 'modules',
        name: 'Subdirección Comercial',
        kind: 'Módulo organizativo objetivo',
        status: 'paused',
        stateLabel: 'En pausa',
        summary: 'El módulo de software Comercial comenzó y está detenido. La pantalla existente no contiene las funciones comerciales planteadas.',
        boards: [
          { name: 'Compras y Abastecimiento', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' },
          { name: 'Ventas', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' },
          { name: 'Contratación', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' },
          { name: 'Atención al Cliente', status: 'conceptual', stateLabel: 'Conceptual · sin iniciar' }
        ],
        details: [
          'El control de inventario y vencimientos en tiendas es una línea futura, no una capacidad disponible.'
        ]
      },
      {
        group: 'direct-departments',
        name: 'Departamento Jurídico',
        kind: 'Área de dependencia directa',
        status: 'conceptual',
        stateLabel: 'Conceptual · sin iniciar',
        summary: 'Sus procesos, servicios y permisos se definirán con las personas responsables.'
      },
      {
        group: 'direct-departments',
        name: 'Departamento de Informática y Comunicaciones',
        kind: 'Área de dependencia directa',
        status: 'paused',
        stateLabel: 'En pausa',
        summary: 'El módulo de software existe y su desarrollo está detenido. Su inventario funcional completo no está documentado.'
      },
      {
        group: 'direct-departments',
        name: 'Departamento de Seguridad y Protección',
        kind: 'Área de dependencia directa',
        status: 'conceptual',
        stateLabel: 'Conceptual · sin iniciar',
        summary: 'Sus responsabilidades, servicios y relación con otras áreas se definirán con la organización.'
      },
      {
        group: 'direct-departments',
        name: 'Departamento de Inversiones y Desarrollo',
        kind: 'Área de dependencia directa',
        status: 'conceptual',
        stateLabel: 'Conceptual · sin iniciar',
        summary: 'Sus procesos, responsables y relaciones con otras áreas están pendientes de inventario.'
      }
    ]
  },
  updates: [
    {
      date: '2026-10-13',
      dateLabel: '13 oct. 2026',
      title: 'Comienza el ciclo de desarrollo alpha.2',
      status: 'En desarrollo',
      paragraphs: [
        'Tras cerrar la validación local de Cimiento (0.1.0-alpha.1), la línea fuente avanza a 0.1.0-alpha.2. El nuevo ciclo prioriza el módulo de Contabilidad y continúa el trabajo de integración del plan contable y del conciliador en el flujo de Ingresos.',
        'El alcance se irá documentando y validando durante el desarrollo. La conciliación completa y la integración contable no se presentan como funciones terminadas ni disponibles.'
      ],
      note: 'Alpha.2 aún no se ha compilado; este anuncio comunica el inicio del ciclo, no la disponibilidad de una nueva versión.'
    },
    {
      date: '2026-10-13',
      dateLabel: '13 oct. 2026',
      title: 'Cimiento: cierre de alpha.1 y cambio de versión',
      status: 'Hito del proyecto',
      paragraphs: [
        'La alpha.1, centrada en establecer el instalador de Windows y la administración externa, quedó validada localmente en el equipo de desarrollo. La revisión también dejó documentados el servicio, el acceso de red y el alcance de las comprobaciones realizadas.',
        'Además, Cimiento consolidó la base de la aplicación, sus controles de acceso, HTTPS y la experiencia PWA. La línea de desarrollo se actualizó a 0.1.0-alpha.2; el registro técnico detallado permanece en la documentación del proyecto.'
      ],
      note: 'La validación fue local: no equivale a una distribución pública ni certifica acceso remoto o rendimiento en otros equipos.'
    },
    {
      date: '2026-10-10',
      dateLabel: '10 oct. 2026',
      title: 'Estructura y etapas de desarrollo de GEMARIS',
      status: 'Visión del proyecto',
      paragraphs: [
        'La presentación pública describe a Dirección General como autoridad central y la relación módulo → tablero → servicio. Auditoría y Control Interno (Regulación y Control) se muestran como funciones transversales.',
        'El desarrollo se distingue entre activo, en pausa y conceptual sin iniciar. La estructura es adaptable, no representa el organigrama vigente de la empresa objetivo ni afirma que todas las capacidades estén disponibles.'
      ],
      note: 'La descripción pública distingue visión y trabajo en curso; no anuncia una distribución de GEMARIS.'
    }
  ]
};
