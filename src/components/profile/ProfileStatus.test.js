import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./profileStatus";


describe("ProfileStatus component", () => {
    test("status попал в state", () => {
        const component = create(<ProfileStatus status="Тестовый статус" />)
        const intance = component.getInstance()
        expect(intance.state.status).toBe("Тестовый статус")
    })

    test("Должен отображаться span", () => {
        const component = create(<ProfileStatus status="Тестовый статус" />)
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("Не нашли input", () => {
        const component = create(<ProfileStatus status="Тестовый статус" />)
        const root = component.root
        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    })

    test("проверка текста в span", () => {
        const component = create(<ProfileStatus status="Тестовый статус" />)
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("Тестовый статус")
    })

    test("Редактируем span по клику", () => {
        const component = create(<ProfileStatus status="Тестовый статус" />)
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("Тестовый статус")
    })

    test("Колбек", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Тестовый статус" updateStatus={mockCallback} />)
        const intance = component.getInstance()
        intance.deactivatedEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })


})