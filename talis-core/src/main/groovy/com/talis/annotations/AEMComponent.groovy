package com.talis.annotations

import groovy.transform.AnnotationCollector
import com.citytechinc.cq.component.annotations.Component
import org.apache.sling.api.resource.Resource
import org.apache.sling.models.annotations.Model

import static org.apache.sling.models.annotations.DefaultInjectionStrategy.OPTIONAL

@AnnotationCollector
@Component(group = "Talis")
@Model(adaptables = Resource, defaultInjectionStrategy = OPTIONAL)
@interface AEMComponent{
}
