package com.vaadin.demo.component.gridpro;

import com.vaadin.demo.DemoExporter; // hidden-source-line
import com.vaadin.demo.domain.DataService;
import com.vaadin.demo.domain.Person;
import com.vaadin.flow.component.gridpro.GridPro;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

import java.util.List;

@Route("grid-pro-single-cell-edit")
public class GridProSingleCellEdit extends Div {
    public GridProSingleCellEdit() {
        // tag::snippet[]
        GridPro<Person> grid = new GridPro<>();
        grid.setSingleCellEdit(true);
        // end::snippet[]

        grid.addEditColumn(Person::getFirstName)
                .text(Person::setFirstName)
                .setHeader("First name");

        grid.addEditColumn(Person::getLastName)
                .text(Person::setLastName)
                .setHeader("Last name");

        grid.addEditColumn(Person::getEmail)
                .text(Person::setEmail)
                .setHeader("Email");

        grid.addEditColumn(Person::getProfession)
                .text(Person::setProfession)
                .setHeader("Profession");

        List<Person> people = DataService.getPeople();
        grid.setItems(people);

        add(grid);
    }

    public static class Exporter extends DemoExporter<GridProSingleCellEdit> { // hidden-source-line
    } // hidden-source-line
}
