import { fireEvent, waitFor } from '@testing-library/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export async function textNotInTheDocument(text: string): Promise<void> {
  const re = new RegExp(text)
  const arr = screen.queryAllByText(re)
  await waitFor(() => {
    expect(arr.length).toBe(0)
  })
}

export async function textInTheDocument(text: string | number): Promise<void> {
  const re = new RegExp(String(text))
  await waitFor(() => {
    expect(screen.getByText(re)).toBeInTheDocument()
  })
}

export async function ariaLabelInTheDocument(
  text: string,
  amount = 1
): Promise<void> {
  const re = new RegExp(text)
  await waitFor(() => {
    const elems = screen.getAllByLabelText(re)
    elems.forEach((elem) => {
      expect(elem).toBeInTheDocument()
    })
    expect(elems).toHaveLength(amount)
  })
}

export async function ariaLabelNotInTheDocument(text: string): Promise<void> {
  const re = new RegExp(text)
  const arr = screen.queryAllByLabelText(re)
  await waitFor(() => {
    expect(arr.length).toBe(0)
  })
}

export async function ariaLabelContainText(
  ariaLabel: string,
  text: string | number
): Promise<void> {
  await waitFor(() => {
    expect(screen.getByLabelText(ariaLabel)).toHaveTextContent(String(text))
  })
}

export async function ariaLabelNotContainText(
  ariaLabel: string,
  text: string | number
): Promise<void> {
  await waitFor(() => {
    const elemContent = screen.getByLabelText(ariaLabel).textContent
    expect(elemContent).not.toBe(text)
  })
}

export async function ariaLabelIsVisible(ariaLabel: string): Promise<void> {
  const elem = screen.getByLabelText(ariaLabel)
  await waitFor(() => {
    expect(elem).toBeVisible()
  })
}

export async function ariaLabelIsNotVisible(ariaLabel: string): Promise<void> {
  const elem = screen.getByLabelText(ariaLabel)
  await waitFor(() => {
    expect(elem).not.toBeVisible()
  })
}

export async function linkIsVisible(
  text: string,
  link: string,
  classNames: Array<string> = []
): Promise<void> {
  const linkElem = screen.getByRole('link', { name: text })
  await waitFor(() => {
    expect(linkElem).toHaveAttribute('href', link)
    expect(linkElem).toBeVisible()
    if (classNames.length > 0) {
      expect(linkElem).toHaveClass(...classNames)
    }
  })
}

export async function linkInTheDocument(
  ariaLabel: string,
  link: string,
  classNames: Array<string> = []
): Promise<void> {
  const linkElem = screen.getByLabelText(ariaLabel)
  await waitFor(() => {
    expect(linkElem).toHaveAttribute('href', link)
    if (classNames.length > 0) {
      expect(linkElem).toHaveClass(...classNames)
    }
  })
}

export async function typeInInputByAriaLabel(
  arialLabel: string,
  value: string
): Promise<void> {
  const elem = screen.getByLabelText(arialLabel)
  await userEvent.clear(elem)
  if (value) {
    return userEvent.type(elem, value)
  }
}

export async function inputHasValue(
  arialLabel: string,
  value: string
): Promise<void> {
  const elem = screen.getByLabelText(arialLabel)
  await waitFor(() => {
    expect(elem).toHaveValue(value)
  })
}

export async function checkboxValueByTestId(
  testId: string,
  value: boolean
): Promise<void> {
  const elem = screen.getByTestId(testId)
  await waitFor(() => {
    if (value) {
      expect(elem).toBeChecked()
    } else {
      expect(elem).not.toBeChecked()
    }
  })
}

export function clickByAriaLabel(
  ariaLabel: string,
  position = 0
): Promise<void> {
  const elements = screen.getAllByLabelText(ariaLabel)
  if (!elements[position]) {
    throw new Error('Click by aria label selector is wrong')
  }
  return userEvent.click(elements[position]!)
}

export function blurByAriaLabel(ariaLabel: string, position = 0): void {
  const elements = screen.getAllByLabelText(ariaLabel)
  if (!elements[position]) {
    throw new Error('Blur by aria label selector is wrong')
  }
  fireEvent.blur(elements[position]!)
}

export function focusByAriaLabel(ariaLabel: string, position = 0): void {
  const elements = screen.getAllByLabelText(ariaLabel)
  if (!elements[position]) {
    throw new Error('Focus by aria label selector is wrong')
  }
  fireEvent.focus(elements[position]!)
}

export function clickByRole(roleName: string, position = 0): Promise<void> {
  const elements = screen.getAllByRole(roleName)
  if (!elements[position]) {
    throw new Error('Click by role selector is wrong')
  }
  return userEvent.click(elements[position]!)
}

export function clickByTestId(testId: string): Promise<void> {
  return userEvent.click(screen.getByTestId(testId))
}

export function clickByText(text: string): Promise<void> {
  return userEvent.click(screen.getByText(text))
}

export async function nextPaginationPage(): Promise<void> {
  await clickByAriaLabel('Go to next page')
}

export async function prevPaginationPage(): Promise<void> {
  await clickByAriaLabel('Go to previous page')
}
