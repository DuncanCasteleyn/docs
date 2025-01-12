package com.vaadin.demo.component.basiclayouts;

import com.vaadin.demo.DemoExporter; // hidden-source-line
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;
import com.vaadin.flow.router.Route;

@Route("basic-layouts/horizontal-layout-spacing-variants")
public class BasicLayoutsHorizontalLayoutSpacingVariants extends Div {

    private static final String SPACING_XS_THEME = "spacing-xs";
    private static final String SPACING_S_THEME = "spacing-s";
    private static final String SPACING_THEME = "spacing";
    private static final String SPACING_L_THEME = "spacing-l";
    private static final String SPACING_XL_THEME = "spacing-xl";

    public BasicLayoutsHorizontalLayoutSpacingVariants() {
        // tag::snippet[]
        HorizontalLayout layout = new HorizontalLayout();
        layout.setSpacing(false);
        layout.getThemeList().add(SPACING_XL_THEME);
        layout.setAlignItems(FlexComponent.Alignment.STRETCH);
        layout.add(new Button("Button 1"));
        layout.add(new Button("Button 2"));
        layout.add(new Button("Button 3"));

        RadioButtonGroup<String> radioButtonGroup = new RadioButtonGroup<>();
        radioButtonGroup.setLabel("Spacing variant");
        radioButtonGroup.setItems(SPACING_XS_THEME, SPACING_S_THEME,
                SPACING_THEME, SPACING_L_THEME, SPACING_XL_THEME);
        radioButtonGroup.setValue(SPACING_XL_THEME);
        radioButtonGroup.addValueChangeListener(e -> {
            layout.getThemeList().remove(e.getOldValue());
            layout.getThemeList().add(e.getValue());
        });
        // end::snippet[]

        this.setClassName("basic-layouts-example");
        this.add(layout, radioButtonGroup);
    }

    public static class Exporter extends // hidden-source-line
            DemoExporter<BasicLayoutsHorizontalLayoutSpacingVariants> { // hidden-source-line
    } // hidden-source-line
}
